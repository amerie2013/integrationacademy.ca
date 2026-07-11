"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { tierOfPlan, TIER_LABEL, type Tier } from "../../../lib/plan";

type Row = {
  id: string;
  full_name: string | null;
  email: string | null;
  role: string | null;
  level: string | null;
  subscription_plan: string | null;
  subscription_status: string | null;
  subscription_expires_at: string | null;
  class_quota: number | null;
  created_at: string | null;
};

type AuthMeta = { email_confirmed: boolean; last_sign_in_at: string | null };

const ROLES = ["student", "teacher", "admin"] as const;
const STATUSES = ["active", "trialing", "inactive", "cancelled", "past_due"] as const;

export default function MembersAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [meta, setMeta] = useState<Record<string, AuthMeta>>({});
  const [token, setToken] = useState<string>("");
  const [q, setQ] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "student" | "teacher" | "admin">("all");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [note, setNote] = useState("");
  const [seatsCol, setSeatsCol] = useState(true); // false → class_quota column not migrated yet
  const [courses, setCourses] = useState<{ id: string; label: string }[]>([]);
  const [grants, setGrants] = useState<Record<string, { id: string; course_id: string; kind: string; status: string }[]>>({});
  const [gDraft, setGDraft] = useState<{ course: string; kind: string }>({ course: "", kind: "student" });

  function flash(m: string) { setMsg(m); setErr(""); setTimeout(() => setMsg(""), 2600); }
  function fail(m: string) { setErr(m); setMsg(""); }

  async function load() {
    const BASE = "id, full_name, email, role, level, subscription_plan, subscription_status, subscription_expires_at, created_at";
    // Try the full select (with class_quota). If that column doesn't exist yet
    // (paywall migration not run), fall back to the base columns so members still
    // load — we just disable the class-seats control instead of blocking the page.
    let res: { data: any[] | null; error: { code?: string; message: string } | null } =
      await supabase.from("profiles").select(`${BASE}, class_quota`).order("created_at", { ascending: false });
    if (res.error && (res.error.code === "42703" || res.error.message.toLowerCase().includes("class_quota"))) {
      setSeatsCol(false);
      setNote("Class-seat editing is off until you run the 2026-06-27_classes_and_paywall.sql migration. Everything else works.");
      res = await supabase.from("profiles").select(BASE).order("created_at", { ascending: false });
    }
    if (res.error) {
      // Surface the real reason instead of showing a silently empty list.
      const m = res.error.message.toLowerCase();
      if (m.includes("policy") || m.includes("permission")) {
        fail("Blocked by RLS — run the 2026-06-21_member_plans.sql migration (admin read/update policies).");
      } else {
        fail(res.error.message);
      }
      setRows([]);
      return;
    }
    setRows((res.data ?? []).map((r: any) => ({ class_quota: null, ...r })) as Row[]);
    const { data: cr } = await supabase.from("courses").select("id, code, title").order("code");
    setCourses((cr ?? []).map((c: any) => ({ id: c.id, label: c.code ? `${c.code} — ${c.title}` : c.title })));
  }

  // ── per-course access grants (admin comp) ──
  async function loadGrants(userId: string) {
    const { data } = await supabase.from("course_grants").select("id, course_id, kind, status").eq("user_id", userId).in("status", ["active", "trialing"]);
    setGrants((g) => ({ ...g, [userId]: (data ?? []) as any }));
  }
  function toggleExpand(r: Row) {
    const opening = expandedId !== r.id;
    setExpandedId(opening ? r.id : null);
    setGDraft({ course: "", kind: r.role === "teacher" ? "teacher" : "student" });
    if (opening) loadGrants(r.id);
  }
  async function grantCourse(r: Row) {
    if (!gDraft.course) return;
    setSavingId(r.id);
    const { error } = await supabase.from("course_grants").insert({
      user_id: r.id, course_id: gDraft.course, kind: gDraft.kind,
      plan: gDraft.kind === "teacher" ? "tutor_comp" : "student_comp", status: "active",
    });
    if (error) fail(/exist|relation|course_grants/i.test(error.message) ? "Run the 2026-07-06_per_course_billing.sql migration first." : error.message);
    else { await loadGrants(r.id); setGDraft({ course: "", kind: gDraft.kind }); flash(`✓ Granted a course to ${r.full_name || "member"}`); }
    setSavingId(null);
  }
  async function revokeGrant(userId: string, gid: string) {
    setSavingId(userId);
    await supabase.from("course_grants").delete().eq("id", gid);
    await loadGrants(userId);
    setSavingId(null);
  }
  const courseLabel = (id: string) => courses.find((c) => c.id === id)?.label ?? id;

  async function loadMeta(accessToken: string) {
    try {
      const res = await fetch("/api/admin/members", { headers: { Authorization: `Bearer ${accessToken}` } });
      if (res.ok) { const j = await res.json(); setMeta(j.meta ?? {}); }
    } catch { /* verification badges are best-effort; page still works without them */ }
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") { setDenied(true); setLoading(false); return; }
      setToken(session.access_token);
      await Promise.all([load(), loadMeta(session.access_token)]);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── client-side edits (allowed by the "admin updates profiles" RLS policy) ──
  async function patch(r: Row, patch: Partial<Row>, note: string) {
    setSavingId(r.id);
    const { error } = await supabase.from("profiles").update(patch).eq("id", r.id);
    if (error) {
      fail(error.message.includes("policy") ? "Blocked by RLS — run the member_plans + classes_and_paywall migrations." : error.message);
    } else {
      setRows((rs) => rs.map((x) => (x.id === r.id ? { ...x, ...patch } : x)));
      flash(note);
    }
    setSavingId(null);
  }

  function setRole(r: Row, role: string) {
    patch(r, { role, class_quota: role === "teacher" ? (r.class_quota ?? 0) : r.class_quota }, `✓ ${r.full_name || "Member"} is now ${role}`);
  }
  function setTier(r: Row, tier: Tier) {
    const p = tier === "free"
      ? { subscription_plan: null, subscription_status: "inactive", subscription_expires_at: null }
      : { subscription_plan: tier, subscription_status: "active" as const };
    patch(r, p, `✓ ${r.full_name || "Member"} set to ${TIER_LABEL[tier]}`);
  }
  function setStatus(r: Row, status: string) {
    patch(r, { subscription_status: status }, `✓ Status → ${status}`);
  }
  function setExpiry(r: Row, value: string) {
    patch(r, { subscription_expires_at: value ? new Date(value).toISOString() : null }, value ? `✓ Expiry set` : `✓ Expiry cleared`);
  }
  function setSeats(r: Row, n: number) {
    patch(r, { class_quota: Math.max(0, n) }, `✓ ${r.full_name || "Teacher"} now has ${Math.max(0, n)} class seat${Math.max(0, n) === 1 ? "" : "s"}`);
  }

  // ── privileged edits (server route, service role) ──
  async function callApi(action: string, memberId: string, extra?: Record<string, unknown>) {
    const res = await fetch("/api/admin/members", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ action, memberId, ...extra }),
    });
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(j.error || `Request failed (${res.status})`);
  }

  async function verify(r: Row) {
    setSavingId(r.id);
    try { await callApi("verify", r.id); setMeta((m) => ({ ...m, [r.id]: { ...(m[r.id] ?? { last_sign_in_at: null }), email_confirmed: true } })); flash(`✓ ${r.email || "Member"} verified`); }
    catch (e: any) { fail(e.message); }
    setSavingId(null);
  }

  async function resetPassword(r: Row) {
    if (!r.email) return fail("No email on file for this member.");
    setSavingId(r.id);
    const { error } = await supabase.auth.resetPasswordForEmail(r.email, { redirectTo: `${window.location.origin}/login` });
    if (error) fail(error.message); else flash(`✓ Reset email sent to ${r.email}`);
    setSavingId(null);
  }

  async function setPassword(r: Row) {
    const pw = window.prompt(`Set a new password for ${r.full_name || r.email || "this member"} (min 8 chars):`);
    if (!pw) return;
    setSavingId(r.id);
    try { await callApi("set_password", r.id, { password: pw }); flash(`✓ Password updated`); }
    catch (e: any) { fail(e.message); }
    setSavingId(null);
  }

  async function remove(r: Row) {
    if (!window.confirm(`Permanently delete ${r.full_name || r.email || "this member"}?\n\nThis removes their account and ALL their data (enrollments, submissions, scores). This cannot be undone.`)) return;
    setSavingId(r.id);
    try { await callApi("delete", r.id); setRows((rs) => rs.filter((x) => x.id !== r.id)); flash(`✓ Member deleted`); }
    catch (e: any) { fail(e.message); }
    setSavingId(null);
  }

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return rows.filter((r) => {
      if (roleFilter !== "all" && (r.role ?? "student") !== roleFilter) return false;
      if (!s) return true;
      return (r.full_name ?? "").toLowerCase().includes(s) || (r.email ?? "").toLowerCase().includes(s);
    });
  }, [rows, q, roleFilter]);

  const counts = useMemo(() => {
    const c = { total: rows.length, student: 0, teacher: 0, admin: 0, active: 0 };
    for (const r of rows) {
      const role = (r.role ?? "student") as "student" | "teacher" | "admin";
      if (role in c) (c as any)[role]++;
      if (r.subscription_status === "active" || r.subscription_status === "trialing") c.active++;
    }
    return c;
  }, [rows]);

  function currentTier(r: Row): Tier {
    if (r.role === "admin" || r.role === "teacher") return "platinum";
    if (r.subscription_status !== "active" && r.subscription_status !== "trialing") return "free";
    return tierOfPlan(r.subscription_plan);
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (denied) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Only admins can manage members.</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 28px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Admin dashboard</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "10px 0 4px" }}>Members</h1>
        <p style={{ color: "#64748b", margin: "0 0 18px", fontSize: 15 }}>Everyone with an account. Change roles and plans, adjust class seats, verify email, reset or set a password, and delete accounts.</p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
          <Stat label="Members" value={counts.total} />
          <Stat label="Students" value={counts.student} />
          <Stat label="Teachers" value={counts.teacher} />
          <Stat label="Admins" value={counts.admin} />
          <Stat label="Active subs" value={counts.active} />
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or email…" style={{ flex: 1, minWidth: 200, padding: "10px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, outline: "none" }} />
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value as any)} style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 14, background: "#fff" }}>
            <option value="all">All roles</option>
            <option value="student">Students</option>
            <option value="teacher">Teachers</option>
            <option value="admin">Admins</option>
          </select>
          <span style={{ color: "#64748b", fontSize: 14 }}>{filtered.length}</span>
        </div>

        {msg && <div style={{ marginBottom: 12, fontSize: 14, fontWeight: 600, color: "#059669" }}>{msg}</div>}
        {err && <div style={{ marginBottom: 12, fontSize: 14, fontWeight: 600, color: "#dc2626", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "10px 14px" }}>{err}</div>}
        {note && !err && <div style={{ marginBottom: 12, fontSize: 13.5, fontWeight: 600, color: "#b45309", background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 10, padding: "10px 14px" }}>{note}</div>}

        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
          {filtered.map((r, i) => {
            const tier = currentTier(r);
            const role = (r.role ?? "student");
            const open = expandedId === r.id;
            const verified = meta[r.id]?.email_confirmed;
            const busy = savingId === r.id;
            return (
              <div key={r.id} style={{ borderTop: i ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.full_name || "(no name)"}</span>
                      {verified === false && <span title="Email not verified" style={{ fontSize: 11, fontWeight: 700, color: "#b45309", background: "#fef3c7", padding: "1px 7px", borderRadius: 999 }}>unverified</span>}
                    </div>
                    <div style={{ fontSize: 12, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.email || "no email"}{r.level ? ` · ${r.level}` : ""}</div>
                  </div>
                  <RoleBadge role={role} />
                  <TierBadge tier={tier} />
                  <button onClick={() => toggleExpand(r)} style={manageBtn}>{open ? "Close" : "Manage"}</button>
                </div>

                {open && (
                  <div style={{ padding: "4px 16px 18px", display: "grid", gap: 14 }}>
                    <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                      <Field label="Role">
                        <select value={role} disabled={busy} onChange={(e) => setRole(r, e.target.value)} style={sel}>
                          {ROLES.map((x) => <option key={x} value={x}>{x}</option>)}
                        </select>
                      </Field>

                      {role === "student" && (
                        <Field label="Plan tier">
                          <select value={tier} disabled={busy} onChange={(e) => setTier(r, e.target.value as Tier)} style={sel}>
                            <option value="free">Free</option>
                            <option value="gold">Gold</option>
                            <option value="platinum">Platinum</option>
                          </select>
                        </Field>
                      )}

                      <Field label="Subscription status">
                        <select value={r.subscription_status ?? "inactive"} disabled={busy} onChange={(e) => setStatus(r, e.target.value)} style={sel}>
                          {STATUSES.map((x) => <option key={x} value={x}>{x}</option>)}
                        </select>
                      </Field>

                      <Field label="Expires">
                        <input type="date" disabled={busy} defaultValue={r.subscription_expires_at ? r.subscription_expires_at.slice(0, 10) : ""} onBlur={(e) => { if ((e.target.value || "") !== (r.subscription_expires_at?.slice(0, 10) || "")) setExpiry(r, e.target.value); }} style={sel} />
                      </Field>

                      {role === "teacher" && seatsCol && (
                        <Field label="Class seats (paid)">
                          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <button onClick={() => setSeats(r, (r.class_quota ?? 0) - 1)} disabled={busy || (r.class_quota ?? 0) <= 0} style={seatBtn}>−</button>
                            <span style={{ minWidth: 20, textAlign: "center", fontWeight: 800, fontFamily: "JetBrains Mono, monospace" }}>{r.class_quota ?? 0}</span>
                            <button onClick={() => setSeats(r, (r.class_quota ?? 0) + 1)} disabled={busy} style={seatBtn}>+</button>
                          </span>
                        </Field>
                      )}
                    </div>

                    <div style={{ fontSize: 12, color: "#94a3b8" }}>
                      Joined {r.created_at ? new Date(r.created_at).toLocaleDateString() : "—"}
                      {meta[r.id]?.last_sign_in_at ? ` · Last sign-in ${new Date(meta[r.id].last_sign_in_at as string).toLocaleDateString()}` : ""}
                      {r.subscription_plan ? ` · Plan: ${r.subscription_plan}` : ""}
                    </div>

                    <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 8 }}>Course access (per-course) — comp free access to a specific course</div>
                      {(grants[r.id] ?? []).length === 0
                        ? <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 10 }}>No comped courses — this member accesses only courses they've bought or joined via a class.</div>
                        : <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                            {(grants[r.id] ?? []).map((g) => (
                              <span key={g.id} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: 999, padding: "4px 6px 4px 12px", fontSize: 13, fontWeight: 600, color: "#065f46" }}>
                                {courseLabel(g.course_id)} · {g.kind}
                                <button onClick={() => revokeGrant(r.id, g.id)} disabled={busy} title="Revoke" style={{ border: "none", background: "#fff", color: "#dc2626", borderRadius: 999, width: 20, height: 20, fontWeight: 800, cursor: "pointer", lineHeight: 1 }}>×</button>
                              </span>
                            ))}
                          </div>}
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                        <select value={gDraft.course} onChange={(e) => setGDraft({ ...gDraft, course: e.target.value })} style={sel}>
                          <option value="">Grant a course…</option>
                          {courses.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                        </select>
                        <select value={gDraft.kind} onChange={(e) => setGDraft({ ...gDraft, kind: e.target.value })} style={{ ...sel, minWidth: 110 }}>
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                        </select>
                        <button onClick={() => grantCourse(r)} disabled={busy || !gDraft.course} style={{ ...actBtn, opacity: busy || !gDraft.course ? 0.5 : 1 }}>Grant free access</button>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", borderTop: "1px solid #f1f5f9", paddingTop: 12 }}>
                      {verified === false && <button onClick={() => verify(r)} disabled={busy} style={actBtn}>✓ Verify email</button>}
                      <button onClick={() => resetPassword(r)} disabled={busy} style={actBtn}>Send reset email</button>
                      <button onClick={() => setPassword(r)} disabled={busy} style={actBtn}>Set password…</button>
                      <button onClick={() => remove(r)} disabled={busy} style={dangerBtn}>Delete member</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {filtered.length === 0 && <div style={{ padding: 20, color: "#64748b" }}>{err ? "Couldn't load members — see the message above." : "No members found."}</div>}
        </div>
      </div>
    </main>
  );
}

const seatBtn: React.CSSProperties = { width: 26, height: 26, borderRadius: 7, border: "1px solid #cbd5e1", background: "#fff", color: "#0f172a", fontWeight: 800, fontSize: 15, cursor: "pointer", lineHeight: 1 };
const manageBtn: React.CSSProperties = { background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 9, padding: "7px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer" };
const actBtn: React.CSSProperties = { background: "#f8fafc", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 9, padding: "8px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer" };
const dangerBtn: React.CSSProperties = { background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", borderRadius: 9, padding: "8px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer", marginLeft: "auto" };
const sel: React.CSSProperties = { padding: "8px 10px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, background: "#fff", minWidth: 130 };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "grid", gap: 5 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#475569" }}>{label}</span>
      {children}
    </label>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "10px 16px", minWidth: 92 }}>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 800, fontSize: 20, color: "#0f172a" }}>{value}</div>
      <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  const c = role === "admin" ? { bg: "#eef2ff", fg: "#4f46e5" } : role === "teacher" ? { bg: "#ecfdf5", fg: "#059669" } : { bg: "#f1f5f9", fg: "#64748b" };
  return <span style={{ fontSize: 12, fontWeight: 700, color: c.fg, background: c.bg, padding: "3px 10px", borderRadius: 999 }}>{role}</span>;
}

function TierBadge({ tier }: { tier: Tier }) {
  const c = tier === "platinum" ? { bg: "#eef2ff", fg: "#4f46e5" } : tier === "gold" ? { bg: "#fdf6e3", fg: "#b8860b" } : { bg: "#f1f5f9", fg: "#64748b" };
  return <span style={{ fontSize: 12, fontWeight: 700, color: c.fg, background: c.bg, padding: "3px 10px", borderRadius: 999 }}>{TIER_LABEL[tier]}</span>;
}
