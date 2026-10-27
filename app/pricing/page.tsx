"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { levelLabel } from "../../lib/theme";
import { PLAN_PRICES, TAX_LABEL, TRIAL_DAYS, isAllAccessPlan, type SubscriptionPlan } from "../../lib/subscription";

type PlanId = NonNullable<SubscriptionPlan>;
type Plan = { id: PlanId; name: string; blurb: string; best?: boolean; features: string[] };

const GROUPS: { title: string; sub: string; plans: Plan[] }[] = [
  {
    title: "One course",
    sub: "For a student taking a single course. Pick the course below.",
    plans: [
      { id: "student_monthly", name: "Monthly", blurb: `${TRIAL_DAYS}-day free trial`, features: ["Every lesson, worksheet, and assignment in the course", "Practice questions with instant feedback", "AI tutor on assignments", "Cancel anytime"] },
      { id: "student_semester", name: "Semester pass", blurb: "5 months, one payment", features: ["Everything in Monthly", "Covers one Ontario semester", "No renewal to cancel"] },
      { id: "student_annual", name: "School-year pass", blurb: "Runs to June 30", best: true, features: ["Everything in Monthly", "Save 20% vs. paying monthly", "Summer purchases run to Aug 31", "Priority support"] },
    ],
  },
  {
    title: "All-access",
    sub: "Every published course, including new ones as they launch.",
    plans: [
      { id: "allaccess_monthly", name: "All-access monthly", blurb: `${TRIAL_DAYS}-day free trial`, features: ["Every Grade 9–12, AP, IB, and FTCE course", "Switch between courses freely", "Cancel anytime"] },
      { id: "allaccess_annual", name: "All-access school year", blurb: "Runs to June 30", best: true, features: ["Everything in All-access monthly", "Save 20% vs. paying monthly", "Best for multi-course students and tutors"] },
    ],
  },
  {
    title: "Instructors",
    sub: "Run a class for one course. Your class students get the course free.",
    plans: [
      { id: "tutor_monthly", name: "Instructor monthly", blurb: "One class seat", features: ["Run a class for the selected course", "Assign lessons, quizzes, and assignments", "Gradebook and student progress", "Cancel anytime"] },
      { id: "tutor_annual", name: "Instructor annual", blurb: "One class seat, runs to June 30", features: ["Everything in Instructor monthly", "One payment, no renewal", "Priority support"] },
    ],
  },
];

const FAQ: [string, string][] = [
  ["Can I try before I pay?", `Yes. Chapter 1 of every course is free to read with no account, and monthly plans start with a ${TRIAL_DAYS}-day free trial on your first purchase.`],
  ["What's the difference between the semester and school-year passes?", "Both are one-time payments with no renewal. A semester pass lasts 5 months from purchase. A school-year pass runs to June 30 (or August 31 if bought in July or August)."],
  ["I'm in a teacher's class. Do I need to pay?", "No. Students who join a class with a class code get that course free through their instructor."],
  ["What currency are prices in?", "All prices are in Canadian dollars (CAD). 13% HST is added at checkout, so a $119 school-year pass comes to $134.47."],
  ["Can I cancel?", "Monthly plans can be cancelled anytime from your profile and stay active to the end of the paid month. Passes simply expire. See the refund policy for details."],
];

type Course = { id: string; code: string | null; title: string; level: string | null };

export default function PricingPage() {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseId, setCourseId] = useState("");

  useEffect(() => {
    supabase
      .from("courses")
      .select("id, code, title, level")
      .eq("published", true)
      .then(({ data }) => {
        // Grade 9 → 12 first, then college/university/certification, A–Z by code within a level.
        const rank = (l: string | null) => (l && /^\d+$/.test(l) ? +l : 100);
        const list = ((data ?? []) as Course[]).sort((a, b) => rank(a.level) - rank(b.level) || (a.level ?? "").localeCompare(b.level ?? "") || (a.code ?? "").localeCompare(b.code ?? ""));
        setCourses(list);
      });
  }, []);

  async function subscribe(plan: PlanId) {
    const needsCourse = !isAllAccessPlan(plan);
    if (needsCourse && !courseId) {
      document.getElementById("course-pick")?.focus();
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push("/login");
      return;
    }
    setBusy(plan);
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
      body: JSON.stringify({ plan, courseId: needsCourse ? courseId : undefined }),
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
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 20px" }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 38, fontWeight: 700, textAlign: "center", margin: "0 0 8px" }}>
          Pricing
        </h1>
        <p style={{ textAlign: "center", color: "#64748b", fontSize: 17, margin: "0 auto 22px", maxWidth: 620 }}>
          Pay for one course, or get every course. Prices in CAD, plus 13% HST.
        </p>

        <div style={{ maxWidth: 620, margin: "0 auto 36px", background: "#e7f6ec", border: "1px solid #bfe3cd", borderRadius: 12, padding: "12px 16px", textAlign: "center", color: "#0d5c30", fontSize: 14.5, fontWeight: 600 }}>
          Chapter 1 of every course is free to read. <Link href="/courses" style={{ color: "#1b7a44" }}>Browse courses →</Link>
        </div>

        <div style={{ maxWidth: 420, margin: "0 auto 40px" }}>
          <label htmlFor="course-pick" style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#334155", marginBottom: 6 }}>
            Which course? (for one-course and instructor plans)
          </label>
          <select
            id="course-pick"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, background: "#fff" }}
          >
            <option value="">Select a course…</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.code ? `${c.code} — ` : ""}{c.title} ({levelLabel(c.level)})
              </option>
            ))}
          </select>
        </div>

        {GROUPS.map((g) => (
          <section key={g.title} style={{ marginBottom: 44 }}>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: "0 0 4px" }}>{g.title}</h2>
            <p style={{ color: "#64748b", fontSize: 15, margin: "0 0 18px" }}>{g.sub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {g.plans.map((p) => {
                const locked = !isAllAccessPlan(p.id) && !courseId;
                return (
                  <div
                    key={p.id}
                    style={{
                      background: "#fff",
                      border: p.best ? "2px solid #1b7a44" : "1px solid #e2e8f0",
                      borderRadius: 18,
                      padding: 24,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: p.best ? "0 12px 40px rgba(27,122,68,0.15)" : "0 1px 3px rgba(15,23,42,0.06)",
                    }}
                  >
                    {p.best && (
                      <span style={{ position: "absolute", top: -12, left: 24, background: "#1b7a44", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>
                        Best value
                      </span>
                    )}
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 2px" }}>{p.name}</h3>
                    <div style={{ color: "#1b7a44", fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{p.blurb}</div>
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ fontFamily: "Fraunces, serif", fontSize: 34, fontWeight: 700 }}>{PLAN_PRICES[p.id].price}</span>
                      <span style={{ color: "#64748b", fontWeight: 600 }}>{PLAN_PRICES[p.id].per}</span>
                      <div style={{ color: "#94a3b8", fontSize: 12.5, fontWeight: 600, marginTop: 2 }}>{TAX_LABEL}</div>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                      {p.features.map((f) => (
                        <li key={f} style={{ fontSize: 14, color: "#334155", display: "flex", gap: 8 }}>
                          <span style={{ color: "#0d9488", fontWeight: 700 }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => subscribe(p.id)}
                      disabled={busy === p.id}
                      title={locked ? "Pick a course above first" : undefined}
                      style={{
                        width: "100%",
                        background: p.best ? "#1b7a44" : "#0f172a",
                        color: "#fff",
                        border: "none",
                        borderRadius: 10,
                        padding: "12px",
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: busy === p.id ? "default" : "pointer",
                        opacity: locked ? 0.55 : 1,
                      }}
                    >
                      {busy === p.id ? "Redirecting…" : locked ? "Pick a course first" : p.id.endsWith("_monthly") && p.id !== "tutor_monthly" ? "Start free trial" : "Get started"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <section style={{ marginBottom: 52, background: "#0f172a", color: "#e2e8f0", borderRadius: 18, padding: "28px 28px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: "0 0 6px", color: "#fff" }}>Schools &amp; tutoring centres</h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
              Seats for a whole class or department, from <strong style={{ color: "#fff" }}>$8 per student per school year</strong> (10-seat minimum).
              Includes instructor accounts, class management, and invoicing.
            </p>
          </div>
          <Link href="/contact" style={{ background: "#1b7a44", color: "#fff", padding: "12px 22px", borderRadius: 10, textDecoration: "none", fontWeight: 700, whiteSpace: "nowrap" }}>
            Request a quote
          </Link>
        </section>

        <section style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: "0 0 14px", textAlign: "center" }}>Questions</h2>
          {FAQ.map(([q, a]) => (
            <details key={q} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "14px 18px", marginBottom: 10 }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", color: "#0f172a" }}>{q}</summary>
              <p style={{ margin: "10px 0 0", color: "#475569", fontSize: 14.5, lineHeight: 1.6 }}>{a}</p>
            </details>
          ))}
        </section>
      </div>
    </main>
  );
}
