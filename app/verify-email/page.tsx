"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { supabase } from "../../lib/supabase";

function VerifyInner() {
  const t = useTranslations("verifyEmail");
  const params = useSearchParams();
  const rawEmail = params.get("email");
  const email = rawEmail ?? t("yourEmail");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "wait">("idle");

  async function resend() {
    if (!rawEmail) return;
    setStatus("sending");
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: rawEmail,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setStatus(error ? "wait" : "sent");
  }

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
          {t("title")}
        </h1>
        <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.6, margin: "0 0 12px" }}>
          {t.rich("body", { email, b: (chunks) => <strong>{chunks}</strong> })}
        </p>
        <p style={{ color: "#64748b", fontSize: 13.5, lineHeight: 1.55, margin: "0 0 20px" }}>{t("junkHint")}</p>
        {rawEmail && (
          <div style={{ marginBottom: 18 }}>
            <button
              onClick={resend}
              disabled={status === "sending" || status === "sent"}
              style={{
                background: "#fff",
                color: "#1b7a44",
                border: "1px solid #1b7a44",
                padding: "10px 22px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "inherit",
                cursor: status === "sending" || status === "sent" ? "default" : "pointer",
                opacity: status === "sending" ? 0.6 : 1,
              }}
            >
              {status === "sending" ? t("resending") : t("resend")}
            </button>
            {status === "sent" && <p style={{ color: "#1b7a44", fontSize: 13, margin: "8px 0 0" }}>{t("resent")}</p>}
            {status === "wait" && <p style={{ color: "#b45309", fontSize: 13, margin: "8px 0 0" }}>{t("resendWait")}</p>}
          </div>
        )}
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
          {t("backToSignIn")}
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
