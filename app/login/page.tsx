import type { Metadata } from "next";
import { Suspense } from "react";
import LoginClient from "./LoginClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  alternates: { canonical: "https://leaseplain.com/login" },
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginClient />
    </Suspense>
  );
}
