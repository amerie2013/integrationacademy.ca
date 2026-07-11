"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { levelLabel } from "../../lib/theme";

type Profile = {
  full_name: string | null;
  role: string | null;
  level: string | null;
  subscription_status: string | null;
};

type Course = { id: string; code: string | null; title: string };
type Assignment = { id: string; title: string; due_date: string | null; course_id: string };

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [joinCode, setJoinCode] = useState("");
  const [joinMsg, setJoinMsg] = useState("");
  const [gradedCount, setGradedCount] = useState(0);

  async function joinClass() {
    if (!joinCode.trim()) return;
    const { data, error } = await supabase.rpc("join_class", { p_code: joinCode.trim() });
    if (error) { setJoinMsg("Invalid class code — check it and try again."); return; }
    // Auto-enroll in the class's course so the student can see its content.
    const { data: { session } } = await supabase.auth.getSession();
    const sid = session?.user.id;
    if (sid) {
      const { data: mem } = await supabase.from("class_students").select("class_id").eq("student_id", sid);
      const classIds = (mem ?? []).map((m: any) => m.class_id);
      if (classIds.length) {
        const { data: cls } = await supabase.from("classes").select("course_id").in("id", classIds);
        const courseIds = [...new Set((cls ?? []).map((c: any) => c.course_id).filter(Boolean))];
        for (const cid of courseIds) await supabase.from("enrollments").upsert({ student_id: sid, course_id: cid }, { onConflict: "student_id,course_id" });
      }
    }
    setJoinMsg(`Joined ${data || "the class"}! It's now under "My courses" below.`);
    setJoinCode("");
    router.refresh();
  }

  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }

      const { data: prof } = await supabase
        .from("profiles")
        .select("full_name, role, level, subscription_status")
        .eq("id", session.user.id)
        .single();

      if (prof?.role === "teacher" || prof?.role === "admin") {
        router.push("/teacher");
        return;
      }
      setProfile(prof as Profile);

      const { data: enr } = await supabase
        .from("enrollments")
        .select("course_id, courses(id, code, title)")
        .eq("student_id", session.user.id);

      const myCourses =
        (enr ?? [])
          .map((r: any) => r.courses)
          .filter(Boolean) as Course[];
      setCourses(myCourses);

      if (myCourses.length) {
        const { data: asg } = await supabase
          .from("assignments")
          .select("id, title, due_date, course_id")
          .in(
            "course_id",
            myCourses.map((c) => c.id),
          )
          .order("due_date", { ascending: true });
        setAssignments((asg ?? []) as Assignment[]);
      }

      // in-app notification: how many of this student's submissions have been graded
      const { count } = await supabase
        .from("submissions")
        .select("id", { count: "exact", head: true })
        .eq("student_id", session.user.id)
        .not("grade", "is", null);
      setGradedCount(count ?? 0);

      setLoading(false);
    })();
  }, [router]);

  if (loading) {
    return (
      <main style={{ minHeight: "100vh" }}>
        <SiteHeader />
        <div style={{ padding: 48, color: "#64748b" }}>Loading your dashboard…</div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 28px" }}>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 32, fontWeight: 700, margin: "0 0 6px" }}>
          Hi{profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""} 👋
        </h1>
        <p style={{ color: "#64748b", margin: "0 0 32px" }}>
          {levelLabel(profile?.level)} ·{" "}
          {profile?.subscription_status === "active" ? "Subscription active" : "No active subscription"}
        </p>

        {profile?.subscription_status !== "active" && (
          <div
            style={{
              background: "#e7f6ec",
              border: "1px solid #bfe3cd",
              borderRadius: 14,
              padding: 20,
              marginBottom: 28,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong style={{ color: "#0d5c30" }}>Unlock all courses</strong>
              <div style={{ color: "#475569", fontSize: 14 }}>Subscribe to access lessons, quizzes, and assignments.</div>
            </div>
            <Link href="/pricing" style={{ background: "#1b7a44", color: "#fff", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>
              View plans
            </Link>
          </div>
        )}

        {gradedCount > 0 && (
          <Link href="/progress" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, background: "#e7f6ec", border: "1px solid #bfe3cd", borderRadius: 14, padding: "12px 18px", marginBottom: 24, textDecoration: "none" }}>
            <span style={{ color: "#0d5c30", fontWeight: 700 }}>✓ {gradedCount} of your submission{gradedCount !== 1 ? "s have" : " has"} been graded</span>
            <span style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>View feedback →</span>
          </Link>
        )}

        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>Join a class</h2>
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <input
              value={joinCode}
              onChange={(e) => { setJoinCode(e.target.value.toUpperCase()); setJoinMsg(""); }}
              placeholder="Enter class code (e.g. 7K2P9X)"
              style={{ flex: 1, minWidth: 220, padding: "11px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, fontFamily: "JetBrains Mono, monospace", outline: "none" }}
            />
            <button onClick={joinClass} style={{ background: "#0d9488", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
              Join
            </button>
            {joinMsg && <span style={{ fontSize: 13, fontWeight: 600, color: joinMsg.startsWith("Joined") ? "#059669" : "#dc2626" }}>{joinMsg}</span>}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px" }}>My courses</h2>
          {courses.length === 0 ? (
            <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24 }}>
              You're not enrolled in any courses yet.{" "}
              <Link href="/courses" style={{ color: "#1b7a44", fontWeight: 700 }}>
                Browse courses →
              </Link>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
              {courses.map((c) => (
                <Link key={c.id} href={`/courses/${c.id}`} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20, textDecoration: "none", color: "inherit", display: "block" }}>
                  {c.code && (
                    <div style={{ fontFamily: "JetBrains Mono, monospace", color: "#1b7a44", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                      {c.code}
                    </div>
                  )}
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{c.title}</div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <div style={{ marginTop: 36, display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link href="/progress" style={{ color: "#1b7a44", fontWeight: 700 }}>
            View my progress →
          </Link>
          <Link href="/profile" style={{ color: "#1b7a44", fontWeight: 700 }}>
            Edit my profile →
          </Link>
        </div>
      </div>
    </main>
  );
}
