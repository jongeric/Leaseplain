import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  // If Stripe isn't configured, return mock portal URL
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder") {
    return NextResponse.json({ url: `${appUrl}/billing?mock=portal` });
  }

  // Look up the Stripe customer ID from D1
  // const user = await getUserById(session.user.id);
  // if (!user?.stripeCustomerId) {
  //   return NextResponse.json({ error: "No active subscription" }, { status: 404 });
  // }

  // Placeholder: in production, use the real customer ID from DB
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: "cus_placeholder",
    return_url: `${appUrl}/billing`,
  });

  return NextResponse.json({ url: portalSession.url });
}
