"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { EmailOtpType } from "@supabase/supabase-js";
import { supabase } from "../../../lib/supabase";

// Landing page for links in Supabase auth emails. The email templates point here
// (on our own domain) instead of at the Supabase project URL, so the sender and
// the link match and spam filters stop treating the mail as phishing.
//   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery
//   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email
const TYPES: EmailOtpType[] = ["recovery", "email", "signup", "invite", "magiclink", "email_change"];

export default function ConfirmPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      const tokenHash = params.get("token_hash");
      const type = params.get("type") as EmailOtpType | null;
      if (!tokenHash || !type || !TYPES.includes(type)) {
        setError("This link is incomplete. Please request a new one from the login page.");
        return;
      }
      const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
      if (error) {
        setError("This link has expired or was already used. Please request a new one from the login page.");
        return;
      }
      if (type === "recovery") return router.replace("/auth/reset-password");

      // Sign-up / email confirmation: same destination logic as /auth/callback.
      if (data.user) {
        const { data: prof } = await supabase.from("profiles").select("role, level").eq("id", data.user.id).single();
        if ((prof?.role ?? "student") === "student" && !prof?.level) return router.replace("/complete-profile");
      }
      router.replace("/dashboard");
    })();
  }, [router]);

  return (
    <main style={{ minHeight: "100vh", background: "#f6f8fc", display: "grid", placeItems: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 12px 40px rgba(15,23,42,0.10)", padding: "36px 34px", width: "100%", maxWidth: 420, textAlign: "center" }}>
        {error ? (
          <>
            <div style={{ color: "#dc2626", fontSize: 15, fontWeight: 600, marginBottom: 18 }}>{error}</div>
            <a href="/login" style={{ display: "inline-block", background: "#1b7a44", color: "#fff", borderRadius: 10, padding: "11px 22px", fontWeight: 700, textDecoration: "none" }}>
              Go to login
            </a>
          </>
        ) : (
          <div style={{ fontSize: 15, color: "#475569" }}>Checking your link…</div>
        )}
      </div>
    </main>
  );
}
