"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function submit() {
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    setDone(true);
    setTimeout(() => router.push("/login"), 1800);
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f6f8fc", display: "grid", placeItems: "center", padding: 20 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 12px 40px rgba(15,23,42,0.10)",
          padding: "36px 34px",
          width: "100%",
          maxWidth: 420,
        }}
      >
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: "0 0 18px" }}>
          Set a new password
        </h1>
        {error && (
          <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "10px 14px", color: "#dc2626", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
            {error}
          </div>
        )}
        {done ? (
          <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: 10, padding: "12px 14px", color: "#065f46", fontSize: 14, fontWeight: 600, textAlign: "center" }}>
            Password updated — redirecting to sign in…
          </div>
        ) : (
          <>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, outline: "none", fontFamily: "inherit", marginBottom: 14 }}
            />
            <button
              onClick={submit}
              disabled={loading}
              style={{ width: "100%", background: loading ? "#a5b4fc" : "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "13px", fontWeight: 700, fontSize: 16, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? "Saving…" : "Update password"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
