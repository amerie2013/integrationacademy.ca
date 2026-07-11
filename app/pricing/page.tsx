"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";

const PLANS = [
  { id: "student_monthly", name: "Student Monthly", price: "$19.99", per: "/month", features: ["All Grade 9–12 courses", "Interactive lessons & graphs", "Auto-graded quizzes", "Cancel anytime"] },
  { id: "student_annual", name: "Student Annual", price: "$179", per: "/year", best: true, features: ["Everything in Monthly", "Save 25%", "University & college courses", "Priority support"] },
  { id: "tutor_monthly", name: "Instructor Monthly", price: "$39.99", per: "/month", features: ["Create unlimited courses", "Author lessons, quizzes, assignments", "Class management", "Student progress tracking"] },
  { id: "tutor_annual", name: "Instructor Annual", price: "$349", per: "/year", features: ["Everything in Instructor Monthly", "Save 27%", "Priority support"] },
];

export default function PricingPage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserId(session?.user.id ?? null);
      setUserEmail(session?.user.email ?? null);
    });
  }, []);

  async function subscribe(plan: string) {
    if (!userId) {
      router.push("/login");
      return;
    }
    setBusy(plan);
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, userId, userEmail }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error ?? "Something went wrong.");
      setBusy(null);
    }
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 28px" }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 38, fontWeight: 700, textAlign: "center", margin: "0 0 8px" }}>
          Simple pricing
        </h1>
        <p style={{ textAlign: "center", color: "#64748b", fontSize: 17, margin: "0 0 44px" }}>
          For students and instructors. Cancel anytime.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {PLANS.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                border: p.best ? "2px solid #1b7a44" : "1px solid #e2e8f0",
                borderRadius: 18,
                padding: 26,
                position: "relative",
                boxShadow: p.best ? "0 12px 40px rgba(67,56,202,0.15)" : "0 1px 3px rgba(15,23,42,0.06)",
              }}
            >
              {p.best && (
                <span style={{ position: "absolute", top: -12, left: 26, background: "#1b7a44", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>
                  Best value
                </span>
              )}
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{p.name}</h3>
              <div style={{ marginBottom: 18 }}>
                <span style={{ fontFamily: "Fraunces, serif", fontSize: 36, fontWeight: 700 }}>{p.price}</span>
                <span style={{ color: "#64748b", fontWeight: 600 }}>{p.per}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: 9 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ fontSize: 14, color: "#334155", display: "flex", gap: 8 }}>
                    <span style={{ color: "#0d9488", fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => subscribe(p.id)}
                disabled={busy === p.id}
                style={{
                  width: "100%",
                  background: p.best ? "#1b7a44" : "#0f172a",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "12px",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                {busy === p.id ? "Redirecting…" : "Subscribe"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
