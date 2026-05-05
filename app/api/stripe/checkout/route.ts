import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe, PLANS, PlanKey } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const plan = body.plan as PlanKey;

  if (!plan || !PLANS[plan]) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const priceId = PLANS[plan].priceId;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  // If Stripe isn't configured, return a mock checkout URL for development
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder") {
    return NextResponse.json({
      url: `${appUrl}/billing?mock=success&plan=${plan}`,
    });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: session.user.email,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${appUrl}/billing?success=1&plan=${plan}`,
    cancel_url: `${appUrl}/pricing?canceled=1`,
    metadata: {
      userId: session.user.id,
      plan,
    },
    subscription_data: {
      metadata: { userId: session.user.id, plan },
    },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
