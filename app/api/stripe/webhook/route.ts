import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { upsertSubscription } from "@/lib/db";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function resolveId(val: string | { id: string } | null | undefined): string | null {
  if (!val) return null;
  return typeof val === "string" ? val : val.id;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret || !sig) {
    return NextResponse.json({ received: true }); // dev mode — no secret configured
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("[stripe/webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // client_reference_id is set by the payment link URL param ?client_reference_id={userId}
        const userId = session.client_reference_id ?? session.metadata?.userId;
        const customerId = resolveId(session.customer);
        const subscriptionId = resolveId(session.subscription);

        if (userId && customerId && subscriptionId) {
          await upsertSubscription({
            userId,
            stripeCustomerId: customerId,
            stripeSubscriptionId: subscriptionId,
            status: "active",
          });
          console.log(`[stripe/webhook] User ${userId} upgraded to Pro`);
        }
        break;
      }

      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.userId;
        const customerId = resolveId(sub.customer);
        if (!userId || !customerId) break;

        const status =
          sub.status === "active" ? "active"
          : sub.status === "past_due" ? "past_due"
          : "canceled";

        await upsertSubscription({
          userId,
          stripeCustomerId: customerId,
          stripeSubscriptionId: sub.id,
          status,
        });
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.userId;
        const customerId = resolveId(sub.customer);
        if (!userId || !customerId) break;

        await upsertSubscription({
          userId,
          stripeCustomerId: customerId,
          stripeSubscriptionId: sub.id,
          status: "canceled",
        });
        console.log(`[stripe/webhook] User ${userId} subscription canceled`);
        break;
      }
    }
  } catch (err) {
    console.error("[stripe/webhook] Handler error:", err);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
