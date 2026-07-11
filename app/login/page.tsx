"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { LEVELS } from "../../lib/theme";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    full_name: "",
    role: "student",
    level: "11",
  });

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  async function submit() {
    setLoading(true);
    setError("");
    const appUrl = window.location.origin;

    if (mode === "forgot") {
      if (!form.email) return fail("Please enter your email.");
      const { error } = await supabase.auth.resetPasswordForEmail(form.email, {
        redirectTo: `${appUrl}/auth/reset-password`,
      });
      if (error) return fail(error.message);
      setResetSent(true);
      setLoading(false);
      return;
    }

    if (mode === "signup") {
      if (!form.full_name || !form.email || !form.password)
        return fail("Please fill in all required fields.");
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          emailRedirectTo: `${appUrl}/auth/callback`,
          data: {
            full_name: form.full_name,
            role: form.role,
            level: form.role === "student" ? form.level : null,
          },
        },
      });
      if (error) return fail(error.message);
      router.push(`/verify-email?email=${encodeURIComponent(form.email)}`);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) return fail("Incorrect email or password.");
    router.push("/dashboard");
  }

  function fail(msg: string) {
    setError(msg);
    setLoading(false);
  }

  async function oauth(provider: "google" | "azure") {
    const appUrl = window.location.origin;
    await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${appUrl}/auth/callback`, scopes: provider === "azure" ? "email" : undefined },
    });
  }

  const input: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: "1px solid #cbd5e1",
    fontSize: 15,
    fontWeight: 500,
    outline: "none",
    fontFamily: "inherit",
  };
  const label: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 700,
    color: "#334155",
    marginBottom: 6,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f8fc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header style={{ padding: "18px 28px", borderBottom: "1px solid #e2e8f0", background: "#fff" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "linear-gradient(135deg,#1b7a44,#0d9488)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
            }}
          >
            ∫
          </span>
          <span style={{ fontWeight: 800, fontSize: 17, color: "#0f172a" }}>Integration Academy</span>
        </Link>
      </header>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
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
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 700, margin: "0 0 6px" }}>
            {mode === "forgot" ? "Reset password" : mode === "signup" ? "Create your account" : "Welcome back"}
          </h1>
          <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 24px" }}>
            {mode === "forgot"
              ? "We'll email you a reset link."
              : mode === "signup"
                ? "Start learning in minutes."
                : "Sign in to continue."}
          </p>

          {error && (
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: 10,
                padding: "10px 14px",
                color: "#dc2626",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 18,
              }}
            >
              {error}
            </div>
          )}

          {mode !== "forgot" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
              <button onClick={() => oauth("google")} style={ssoBtn}>
                Continue with Google
              </button>
              <button onClick={() => oauth("azure")} style={ssoBtn}>
                Continue with Microsoft
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "2px 0" }}>
                <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
                <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600 }}>or</span>
                <div style={{ flex: 1, height: 1, background: "#e2e8f0" }} />
              </div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {mode === "signup" && (
              <div>
                <label style={label}>Full name *</label>
                <input name="full_name" value={form.full_name} onChange={update} style={input} placeholder="e.g. Emma Smith" />
              </div>
            )}

            <div>
              <label style={label}>Email *</label>
              <input name="email" type="email" value={form.email} onChange={update} style={input} placeholder="you@email.com" />
            </div>

            {mode !== "forgot" && (
              <div>
                <label style={label}>Password *</label>
                <input name="password" type="password" value={form.password} onChange={update} style={input} placeholder="at least 6 characters" />
              </div>
            )}

            {mode === "signup" && (
              <>
                <div>
                  <label style={label}>I am a…</label>
                  <select name="role" value={form.role} onChange={update} style={input}>
                    <option value="student">Student</option>
                    <option value="teacher">Instructor / Tutor</option>
                  </select>
                </div>
                {form.role === "student" && (
                  <div>
                    <label style={label}>My level</label>
                    <select name="level" value={form.level} onChange={update} style={input}>
                      {LEVELS.map((l) => (
                        <option key={l.value} value={l.value}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}

            <button
              onClick={submit}
              disabled={loading}
              style={{
                background: loading ? "#a5b4fc" : "#1b7a44",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "13px",
                fontWeight: 700,
                fontSize: 16,
                cursor: loading ? "not-allowed" : "pointer",
                marginTop: 4,
              }}
            >
              {loading
                ? "Please wait…"
                : mode === "forgot"
                  ? "Send reset link"
                  : mode === "signup"
                    ? "Create account"
                    : "Sign in"}
            </button>
          </div>

          {resetSent && (
            <div
              style={{
                background: "#ecfdf5",
                border: "1px solid #a7f3d0",
                borderRadius: 10,
                padding: "12px 14px",
                marginTop: 14,
                fontSize: 13,
                color: "#065f46",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Email sent — check your inbox to reset your password.
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: 20, fontSize: 14, color: "#64748b" }}>
            {mode === "login" && (
              <>
                <button onClick={() => setMode("forgot")} style={linkBtn}>
                  Forgot password?
                </button>
                <div style={{ marginTop: 10 }}>
                  No account?{" "}
                  <button onClick={() => setMode("signup")} style={linkBtnStrong}>
                    Sign up
                  </button>
                </div>
              </>
            )}
            {mode === "signup" && (
              <div>
                Already have an account?{" "}
                <button onClick={() => setMode("login")} style={linkBtnStrong}>
                  Sign in
                </button>
              </div>
            )}
            {mode === "forgot" && (
              <button onClick={() => { setMode("login"); setResetSent(false); }} style={linkBtn}>
                ← Back to sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const ssoBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background: "#fff",
  border: "1px solid #cbd5e1",
  borderRadius: 10,
  padding: "11px 16px",
  fontWeight: 600,
  fontSize: 14,
  cursor: "pointer",
  color: "#0f172a",
};

const linkBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#64748b",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
  textDecoration: "underline",
  fontFamily: "inherit",
};

const linkBtnStrong: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#1b7a44",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
  fontFamily: "inherit",
};
