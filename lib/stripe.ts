import Stripe from "stripe";

// Singleton — safe to call at module level
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2026-04-22.dahlia",
});

export const PLANS = {
  pro: {
    name: "Pro",
    priceId: process.env.STRIPE_PRO_PRICE_ID ?? "",
    amount: 900, // $9.00 in cents
  },
  team: {
    name: "Team",
    priceId: process.env.STRIPE_TEAM_PRICE_ID ?? "",
    amount: 2900, // $29.00 in cents
  },
} as const;

export type PlanKey = keyof typeof PLANS;
