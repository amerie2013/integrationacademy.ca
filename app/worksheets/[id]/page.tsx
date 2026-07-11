"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { CourseNav } from "../../../components/CourseNav";
import { fetchWorksheet, type Worksheet } from "../../../lib/worksheets";
import { signedUrl } from "../../../lib/storage";

export default function WorksheetViewPage() {
  const id = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [w, setW] = useState<Worksheet | null>(null);
  const [wUrl, setWUrl] = useState<string | null>(null);
  const [aUrl, setAUrl] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      const ws = await fetchWorksheet(id);
      setW(ws);
      if (ws) {
        setWUrl(await signedUrl(ws.worksheet_url));
        setAUrl(await signedUrl(ws.answers_url));
      }
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
        setIsAdmin(me?.role === "admin");
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);
  if (!w) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>This worksheet isn't available.</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "36px 24px 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <Link href={`/courses/${w.course_id}`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Back to course</Link>
          {isAdmin && <Link href={`/teacher/worksheets/${w.id}`} style={{ background: "#1b7a44", color: "#fff", padding: "8px 14px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 13 }}>✏️ Edit</Link>}
        </div>

        <div style={{ fontSize: 13, fontWeight: 800, color: "#0d5c30", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 14 }}>Worksheet · {w.code}</div>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "4px 0 18px" }}>{w.title}</h1>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
          {wUrl && <a href={wUrl} target="_blank" rel="noreferrer" style={dlBtn}>⬇ Download worksheet</a>}
          {aUrl && <a href={aUrl} target="_blank" rel="noreferrer" style={{ ...dlBtn, background: "#fff", color: "#0d5c30", border: "1px solid #bfe3cd" }}>⬇ Answer key / compact</a>}
        </div>

        {wUrl ? (
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: "1px solid var(--border)", background: "#f8fafc" }}>
              <span style={{ fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}><Pdf /> {w.worksheet_name || "Worksheet.pdf"}</span>
              <a href={wUrl} target="_blank" rel="noreferrer" style={{ color: "#1b7a44", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open ↗</a>
            </div>
            <iframe src={`${wUrl}#view=FitH`} title={w.title} style={{ width: "100%", height: "78vh", minHeight: 480, border: "none", display: "block" }} />
          </div>
        ) : (
          <div style={{ color: "#94a3b8", background: "#fff", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>{w.worksheet_url ? "Preparing the worksheet…" : "No worksheet file uploaded yet."}</div>
        )}

        {w.course_id && <CourseNav courseId={w.course_id} type="worksheet" id={w.id} />}
      </div>
    </main>
  );
}

function Pdf() {
  return <span style={{ display: "inline-grid", placeItems: "center", width: 26, height: 26, borderRadius: 6, background: "#dc2626", color: "#fff", fontSize: 9, fontWeight: 800 }}>PDF</span>;
}
const dlBtn: React.CSSProperties = { background: "#1b7a44", color: "#fff", padding: "10px 18px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14 };
