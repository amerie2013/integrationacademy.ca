"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import katex from "katex";
import { renderAll, type BoardData } from "../../../lib/wbdraw";
import { getBoard, subscribeBoard } from "../../../lib/whiteboards";

function katexHtml(latex: string): string { try { return katex.renderToString(latex, { throwOnError: false }); } catch { return latex; } }

export default function LiveWhiteboardViewer() {
  const id = useParams().id as string;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dpr = useRef(1);
  const dataRef = useRef<BoardData | null>(null);
  const [status, setStatus] = useState<"loading" | "ok" | "ended" | "missing">("loading");
  const [title, setTitle] = useState("");
  const [, setTick] = useState(0);

  const render = useCallback(() => {
    const c = canvasRef.current, wrap = wrapRef.current, d = dataRef.current;
    if (!c || !wrap) return;
    const r = wrap.getBoundingClientRect();
    dpr.current = window.devicePixelRatio || 1;
    c.width = Math.round(r.width * dpr.current); c.height = Math.round(r.height * dpr.current);
    c.style.width = r.width + "px"; c.style.height = r.height + "px";
    const ctx = c.getContext("2d")!; ctx.setTransform(dpr.current, 0, 0, dpr.current, 0, 0);
    if (!d) { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, r.width, r.height); return; }
    const page = d.pages?.[d.active ?? 0] ?? [];
    renderAll(ctx, page, d.bg ?? "grid", r.width, r.height, render);
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const wb = await getBoard(id);
      if (!wb) { setStatus("missing"); return; }
      setTitle(wb.title);
      dataRef.current = wb.data;
      setStatus(wb.is_live ? "ok" : "ended");
      render(); setTick((t) => t + 1);
      cleanup = subscribeBoard(id, (data, isLive) => {
        dataRef.current = data;
        setStatus(isLive ? "ok" : "ended");
        render(); setTick((t) => t + 1);
      });
    })();
    const ro = new ResizeObserver(render);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => { cleanup?.(); ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#0f172a" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", color: "#e2e8f0", borderBottom: "1px solid #334155" }}>
        <span style={{ fontWeight: 800, fontSize: 16 }}>{title || "Live whiteboard"}</span>
        {status === "ok" && <span style={{ fontSize: 12, fontWeight: 700, color: "#04130a", background: "#34d27f", padding: "3px 10px", borderRadius: 999 }}>🟢 LIVE</span>}
        {status === "ended" && <span style={{ fontSize: 12, fontWeight: 700, color: "#fde68a" }}>Session not live</span>}
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: 12, color: "#94a3b8" }}>View only · updates in real time</span>
      </div>
      <div ref={wrapRef} style={{ position: "relative", flex: 1, overflow: "hidden" }}>
        <canvas ref={canvasRef} style={{ display: "block", background: "#fff" }} />
        {(dataRef.current?.pages?.[dataRef.current.active ?? 0] ?? []).map((s, i) => s.t === "math" ? (
          <div key={"m" + i} style={{ position: "absolute", left: s.x, top: s.y, color: s.c, fontSize: s.size, lineHeight: 1, pointerEvents: "none", whiteSpace: "nowrap" }} dangerouslySetInnerHTML={{ __html: katexHtml(s.latex) }} />
        ) : null)}
        {status === "loading" && <Overlay>Loading…</Overlay>}
        {status === "missing" && <Overlay>This board isn't available.</Overlay>}
        {status === "ended" && !dataRef.current && <Overlay>The teacher hasn't started this session yet.</Overlay>}
      </div>
    </main>
  );
}

function Overlay({ children }: { children: React.ReactNode }) {
  return <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#64748b", fontSize: 16, pointerEvents: "none" }}>{children}</div>;
}
