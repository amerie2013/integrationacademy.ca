"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function VerifyInner() {
  const params = useSearchParams();
  const email = params.get("email") ?? "your email";

  return (
    <main style={{ minHeight: "100vh", background: "#f6f8fc", display: "grid", placeItems: "center", padding: 20 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 12px 40px rgba(15,23,42,0.10)",
          padding: "40px 36px",
          maxWidth: 440,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 44, marginBottom: 12 }}>📬</div>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: "0 0 10px" }}>
          Check your inbox
        </h1>
        <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.6, margin: "0 0 24px" }}>
          We sent a verification link to <strong>{email}</strong>. Click it to
          activate your account, then sign in.
        </p>
        <Link
          href="/login"
          style={{
            display: "inline-block",
            background: "#1b7a44",
            color: "#fff",
            padding: "12px 26px",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Back to sign in
        </Link>
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyInner />
    </Suspense>
  );
}
