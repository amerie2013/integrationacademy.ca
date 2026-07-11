"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Surface the error for debugging / future error-reporting integration.
    console.error(error);
  }, [error]);

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px" }}>
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <p style={{ fontFamily: "Fraunces, serif", fontSize: 56, fontWeight: 700, color: "#1b7a44", margin: 0 }}>Oops</p>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, color: "#0f172a", margin: "10px 0 8px" }}>Something went wrong</h1>
        <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.6, margin: "0 0 24px" }}>
          An unexpected error occurred. You can try again, or head back home. If it keeps happening, email{" "}
          <a href="mailto:info@integrationacademy.ca" style={{ color: "#0d5c30", fontWeight: 600 }}>info@integrationacademy.ca</a>.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={reset} style={{ background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", fontWeight: 700, padding: "12px 24px", borderRadius: 12, border: "none", cursor: "pointer", fontSize: 15 }}>Try again</button>
          <Link href="/" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", fontWeight: 700, padding: "12px 24px", borderRadius: 12, textDecoration: "none" }}>Go home</Link>
        </div>
      </div>
    </main>
  );
}
