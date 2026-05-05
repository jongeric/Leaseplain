import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { saveAnalysis } from "@/lib/db";
import Stripe from "stripe";

export const runtime = "nodejs";

// Stripe requires the raw body for signature verification
export const dynamic = "force-dynamic";

async function updateUserPlan(userId: string, plan: string, stripeCustomerId: string) {
  // In production, update user plan in D1
  // db.prepare("UPDATE users SET plan = ?, stripe_customer_id = ? WHERE id = ?")
  //   .bind(plan, stripeCustomerId, userId).run();
  console.log(`[webhook] User ${userId} plan updated to ${plan} (customer: ${stripeCustomerId})`);
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret || !sig) {
    // In dev without Stripe, just return 200
    return NextResponse.json({ received: true });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const plan = session.metadata?.plan;
      const customerId = session.customer as string;
      if (userId && plan) {
        await updateUserPlan(userId, plan, customerId);
      }
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      const plan = event.type === "customer.subscription.deleted"
        ? "free"
        : (sub.metadata?.plan ?? "free");
      const customerId = sub.customer as string;
      if (userId) {
        await updateUserPlan(userId, plan, customerId);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
