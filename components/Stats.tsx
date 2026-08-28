"use client";

/**
 * Data Management / Statistics workspace — one-variable data lists with a
 * live histogram + box plot (stacked and axis-aligned for comparison across
 * lists) and a full descriptive-statistics table. Standalone at
 * /tools/stats and embeddable via <iframe>, mirroring components/Calculator.tsx's
 * shell (panel + canvas, save/load/embed) so the two tools feel like one platform.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { parseNumbers, summarize, histogramBins, autoBinWidth, type Summary } from "../lib/statsMath";

const COLORS = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#0ea5e9", "#84cc16"];
const uid = (p: string) => `${p}${Math.random().toString(36).slice(2, 9)}`;
const fmt = (n: number) => (Number.isFinite(n) ? parseFloat(n.toFixed(4)).toString() : "—");

type DataSet = { id: string; name: string; color: string; values: string; visible: boolean };
const newSet = (i: number): DataSet => ({
  id: uid("d"), name: `List ${i + 1}`, color: COLORS[i % COLORS.length], visible: true,
  values: i === 0 ? "12, 15, 15, 18, 20, 22, 25, 28, 30, 35" : "",
});

type StatKey = "n" | "sum" | "mean" | "median" | "mode" | "min" | "max" | "range" | "q1" | "q3" | "iqr" | "sdPop" | "varPop" | "sdSample" | "varSample";
const STAT_DEFS: { key: StatKey; label: string }[] = [
  { key: "n", label: "n (count)" }, { key: "sum", label: "Sum" },
  { key: "mean", label: "Mean" }, { key: "median", label: "Median" }, { key: "mode", label: "Mode" },
  { key: "min", label: "Min" }, { key: "max", label: "Max" }, { key: "range", label: "Range" },
  { key: "q1", label: "Q1" }, { key: "q3", label: "Q3" }, { key: "iqr", label: "IQR" },
  { key: "sdPop", label: "Std dev (population)" }, { key: "varPop", label: "Variance (population)" },
  { key: "sdSample", label: "Std dev (sample)" }, { key: "varSample", label: "Variance (sample)" },
];
const DEFAULT_STATS: StatKey[] = ["mean", "median", "mode", "min", "max", "q1", "q3", "sdSample"];
// Fixed per-dataset chart geometry — deliberately NOT derived from the
// container's available height. Stretching a single row to fill whatever
// vertical space happens to be free made the bars/box comically oversized.
const CHART_MARGIN_TOP = 40, CHART_MARGIN_BOTTOM = 36, CHART_ROW_H = 130;
function statValue(s: Summary, key: StatKey): string {
  if (key === "mode") return s.modes.length ? s.modes.map(fmt).join(", ") : "—";
  if (key === "n") return String(s.n);
  return fmt(s[key]);
}

type StatsState = { title: string; datasets: DataSet[]; binWidth: string; showOutliers: boolean; showHistogram: boolean; showBoxplot: boolean; selectedStats: StatKey[] };

/** A "nice" (1/2/5×10ⁿ) tick step for a numeric axis, given the pixel budget available. */
function niceStep(range: number, plotWidthPx: number, targetPxPerTick = 70) {
  if (range <= 0) return 1;
  const target = (range * targetPxPerTick) / plotWidthPx;
  const pow = Math.pow(10, Math.floor(Math.log10(target)));
  const n = target / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * pow;
}

/** Synchronous initial state from props (an inline embed payload), resolved
 * once at mount via lazy useState initializers — never inside an effect, so
 * there's no extra render and no setState-during-effect footgun. */
function resolveInitial(initialState: unknown, initialData: string | undefined): Partial<StatsState> | null {
  if (initialState) return initialState as Partial<StatsState>;
  if (initialData) { try { return JSON.parse(decodeURIComponent(atob(initialData))) as Partial<StatsState>; } catch { return null; } }
  return null;
}

export function Stats({ initialData, initialState, initialId, embed = false }: { initialData?: string; initialState?: unknown; initialId?: string; embed?: boolean }) {
  const [initial] = useState(() => resolveInitial(initialState, initialData));
  const [title, setTitle] = useState(initial?.title ?? "");
  const [datasets, setDatasets] = useState<DataSet[]>(() => (initial?.datasets?.length ? initial.datasets.map((s, i) => ({ ...newSet(i), ...s })) : [newSet(0)]));
  const [binWidth, setBinWidth] = useState(initial?.binWidth ?? "auto");
  const [showOutliers, setShowOutliers] = useState(initial?.showOutliers ?? true);
  const [showHistogram, setShowHistogram] = useState(initial?.showHistogram ?? true);
  const [showBoxplot, setShowBoxplot] = useState(initial?.showBoxplot ?? true);
  const [selectedStats, setSelectedStats] = useState<StatKey[]>(initial?.selectedStats?.length ? initial.selectedStats : DEFAULT_STATS);
  const [panelOpen, setPanelOpen] = useState(() => typeof window === "undefined" || window.innerWidth > 760);
  const [toast, setToast] = useState("");

  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ w: 600, h: 460 });
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [logoReady, setLogoReady] = useState(false);

  function flash(m: string) { setToast(m); setTimeout(() => setToast(""), 2200); }
  function serialize(): StatsState { return { title, datasets, binWidth, showOutliers, showHistogram, showBoxplot, selectedStats }; }
  function toggleStat(key: StatKey) { setSelectedStats((l) => (l.includes(key) ? l.filter((k) => k !== key) : [...l, key])); }
  function applyState(d: Partial<StatsState>) {
    if (typeof d.title === "string") setTitle(d.title);
    if (Array.isArray(d.datasets)) setDatasets(d.datasets.map((s, i) => ({ ...newSet(i), ...s })));
    if (typeof d.binWidth === "string") setBinWidth(d.binWidth);
    if (Array.isArray(d.selectedStats) && d.selectedStats.length) setSelectedStats(d.selectedStats);
    setShowOutliers(d.showOutliers ?? true);
    setShowHistogram(d.showHistogram ?? true);
    setShowBoxplot(d.showBoxplot ?? true);
  }

  useEffect(() => {
    const img = new Image();
    img.onload = () => { logoRef.current = img; setLogoReady(true); };
    img.src = "/Logo.png";
  }, []);

  // Short-link embed (?id=…): load the saved figure from the graphs table.
  // (The inline-payload case is handled synchronously above, via `initial`.)
  useEffect(() => {
    if (!initialId) return;
    supabase.from("graphs").select("data").eq("id", initialId).single().then(({ data }) => {
      if (data?.data) applyState(data.data);
    });
  }, [initialId]);

  // ── stats + drawing ─────────────────────────────────────────
  const rows = datasets.filter((d) => d.visible).map((d) => ({ d, values: parseNumbers(d.values) })).filter((r) => r.values.length > 0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const { w, h } = sizeRef.current;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);

    const logo = logoReady ? logoRef.current : null;
    if (logo) {
      const iw = Math.min(w, h) * 0.5, ih = iw * (logo.naturalHeight / logo.naturalWidth);
      ctx.save(); ctx.globalAlpha = 0.08;
      ctx.drawImage(logo, w / 2 - iw / 2, h / 2 - ih / 2, iw, ih);
      ctx.restore();
    }

    if (title) { ctx.fillStyle = "#1e293b"; ctx.font = "bold 18px Fraunces, serif"; ctx.textAlign = "center"; ctx.textBaseline = "top"; ctx.fillText(title, w / 2, 12); }

    if (rows.length === 0) {
      ctx.fillStyle = "#94a3b8"; ctx.font = "14px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("Add a data list to see the histogram and box plot", w / 2, h / 2);
      return;
    }

    const marginL = 60, marginR = 24, marginTop = title ? CHART_MARGIN_TOP + 12 : CHART_MARGIN_TOP;
    const plotW = Math.max(40, w - marginL - marginR);
    const allValues = rows.flatMap((r) => r.values);
    let domMin = Math.min(...allValues), domMax = Math.max(...allValues);
    if (domMin === domMax) { domMin -= 1; domMax += 1; }
    const pad = (domMax - domMin) * 0.06;
    domMin -= pad; domMax += pad;
    const toX = (v: number) => marginL + ((v - domMin) / (domMax - domMin)) * plotW;

    const rowH = CHART_ROW_H;
    const histH = showBoxplot ? rowH * 0.56 : rowH * 0.8;
    const boxH = rowH * 0.14;
    const chartBottom = marginTop + rows.length * rowH;
    const step = niceStep(domMax - domMin, plotW);

    // faint vertical gridlines behind everything, so bars/box plots read on top
    ctx.strokeStyle = "#f1f5f9"; ctx.lineWidth = 1; ctx.beginPath();
    for (let v = Math.ceil(domMin / step) * step; v <= domMax; v += step) { const x = toX(v); ctx.moveTo(x, marginTop - 4); ctx.lineTo(x, chartBottom); }
    ctx.stroke();

    rows.forEach((r, i) => {
      const s = summarize(r.values) as Summary;
      const y0 = marginTop + i * rowH;
      ctx.fillStyle = r.d.color; ctx.font = "bold 14px Inter, system-ui, sans-serif"; ctx.textAlign = "left"; ctx.textBaseline = "top";
      ctx.fillText(`${r.d.name}  (n = ${s.n})`, marginL, y0);

      const bw = binWidth === "auto" ? autoBinWidth(r.values) : Math.max(0.0001, parseFloat(binWidth) || 1);
      let yCursor = y0 + 22;
      if (showHistogram) {
        const bins = histogramBins(r.values, bw, domMin, domMax);
        const maxCount = Math.max(1, ...bins.map((b) => b.count));
        ctx.fillStyle = r.d.color;
        for (const b of bins) {
          if (b.count === 0) continue;
          const x0 = toX(b.x0), x1 = toX(b.x1);
          const bh = (b.count / maxCount) * (histH - 4);
          ctx.globalAlpha = 0.75;
          ctx.fillRect(x0 + 1, yCursor + (histH - bh), Math.max(1, x1 - x0 - 2), bh);
          ctx.globalAlpha = 1;
        }
        yCursor += histH + 6;
      }
      if (showBoxplot) {
        const midY = yCursor + boxH / 2;
        const whiskerLo = Math.max(s.min, s.lowerFence), whiskerHi = Math.min(s.max, s.upperFence);
        ctx.strokeStyle = r.d.color; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(toX(whiskerLo), midY); ctx.lineTo(toX(s.q1), midY); ctx.moveTo(toX(s.q3), midY); ctx.lineTo(toX(whiskerHi), midY); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(toX(whiskerLo), midY - boxH * 0.25); ctx.lineTo(toX(whiskerLo), midY + boxH * 0.25); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(toX(whiskerHi), midY - boxH * 0.25); ctx.lineTo(toX(whiskerHi), midY + boxH * 0.25); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillRect(toX(s.q1), midY - boxH / 2, toX(s.q3) - toX(s.q1), boxH);
        ctx.strokeRect(toX(s.q1), midY - boxH / 2, toX(s.q3) - toX(s.q1), boxH);
        ctx.beginPath(); ctx.moveTo(toX(s.median), midY - boxH / 2); ctx.lineTo(toX(s.median), midY + boxH / 2); ctx.lineWidth = 2.5; ctx.stroke();
        if (showOutliers) {
          ctx.fillStyle = r.d.color;
          for (const o of s.outliers) { ctx.beginPath(); ctx.arc(toX(o), midY, 3, 0, Math.PI * 2); ctx.fill(); }
        }
      }
    });

    // shared x-axis
    const axisY = chartBottom + 2;
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(marginL, axisY); ctx.lineTo(marginL + plotW, axisY); ctx.stroke();
    ctx.fillStyle = "#334155"; ctx.font = "600 13px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let v = Math.ceil(domMin / step) * step; v <= domMax; v += step) {
      const x = toX(v);
      ctx.strokeStyle = "#cbd5e1"; ctx.beginPath(); ctx.moveTo(x, axisY); ctx.lineTo(x, axisY + 5); ctx.stroke();
      ctx.fillText(fmt(Math.round(v * 1000) / 1000), x, axisY + 8);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, datasets, binWidth, showOutliers, showHistogram, showBoxplot, logoReady]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const ro = new ResizeObserver(() => { sizeRef.current = { w: el.clientWidth, h: el.clientHeight }; draw(); });
    ro.observe(el); sizeRef.current = { w: el.clientWidth, h: el.clientHeight }; draw();
    return () => ro.disconnect();
  }, [draw]);

  const patch = (id: string, p: Partial<DataSet>) => setDatasets((l) => l.map((d) => (d.id === id ? { ...d, ...p } : d)));

  // ── export / save / embed ──────────────────────────────────
  function exportPng() {
    const c = canvasRef.current; if (!c) return;
    const a = document.createElement("a"); a.download = (title || "stats") + ".png"; a.href = c.toDataURL("image/png"); a.click();
  }
  function saveFile() {
    const blob = new Blob([JSON.stringify(serialize())], { type: "application/json" });
    const a = document.createElement("a"); a.download = (title || "stats") + ".json"; a.href = URL.createObjectURL(blob); a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  function loadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; if (!file) return;
    const r = new FileReader(); r.onload = () => { try { applyState(JSON.parse(r.result as string)); flash("Project loaded"); } catch { flash("Could not read file"); } };
    r.readAsText(file); e.target.value = "";
  }
  async function copyEmbed() {
    const fig = serialize();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    let src = "";
    try {
      const { data: row, error } = await supabase.from("graphs").insert({ data: fig }).select("id").single();
      if (error || !row) throw error;
      src = `${origin}/tools/stats?embed=1&id=${row.id}`;
    } catch {
      src = `${origin}/tools/stats?embed=1&data=${btoa(encodeURIComponent(JSON.stringify(fig)))}`;
    }
    try {
      const code = `<iframe src="${src}" style="width:100%;max-width:700px;height:520px;border:0;border-radius:12px;display:block;margin:12px auto;" allow="autoplay"></iframe>`;
      await navigator.clipboard.writeText(code);
      flash(src.includes("id=") ? "Embed code copied (short link) — paste it into a lesson" : "Embed code copied (sign in to get a short link)");
    } catch { flash("Copy failed"); }
  }

  const chartH = rows.length > 0 ? CHART_MARGIN_TOP + (title ? 12 : 0) + rows.length * CHART_ROW_H + CHART_MARGIN_BOTTOM : 260;
  const plot = (
    <div ref={wrapRef} style={{ flexShrink: 0, width: "100%", height: chartH, position: "relative", background: "#fff" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      {toast && <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", background: "#0f172a", color: "#fff", padding: "8px 14px", borderRadius: 10, fontSize: 13, fontWeight: 600 }}>{toast}</div>}
    </div>
  );

  const cards = rows.length > 0 && (
    <div style={{ padding: 16, borderTop: "1px solid #e2e8f0", background: "#f8faff" }}>
      {rows.map((r) => {
        const s = summarize(r.values) as Summary;
        return (
          <div key={r.d.id} style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: r.d.color, marginBottom: 8 }}>{r.d.name}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 10 }}>
              {selectedStats.map((key) => (
                <div key={key} style={{ background: "#fff", border: "1px solid #e2e8f0", borderTop: `3px solid ${r.d.color}`, borderRadius: 10, padding: "10px 12px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 4 }}>{STAT_DEFS.find((d) => d.key === key)?.label}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", fontFamily: "JetBrains Mono, monospace" }}>{statValue(s, key)}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div style={{ fontSize: 11, color: "#94a3b8" }}>Q1/Q3 use the exclusive median-of-halves method (the convention TI-83/84 calculators use for 1-Var Stats). Box-plot whiskers cap at 1.5×IQR; points beyond that are plotted as outliers.</div>
    </div>
  );

  if (embed) return <div style={{ height: "100%", minHeight: 320, display: "flex", flexDirection: "column", overflowY: "auto" }}>{plot}{cards}</div>;

  return (
    <div style={{ display: "flex", height: "100%", minHeight: 460 }}>
      {panelOpen && (
        <div style={{ width: 320, flexShrink: 0, borderRight: "1px solid #e2e8f0", background: "#f8faff", padding: 14, overflowY: "auto", boxSizing: "border-box" }}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title (optional)" style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontWeight: 700, fontSize: 14, marginBottom: 12, boxSizing: "border-box" }} />

          <button onClick={() => setDatasets((l) => [...l, newSet(l.length)])} style={{ width: "100%", marginBottom: 10, background: "#1b7a44", color: "#fff", border: "none", borderRadius: 8, padding: "8px", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>+ Data list</button>

          {datasets.map((d) => (
            <div key={d.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 10, marginBottom: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <button onClick={() => patch(d.id, { visible: !d.visible })} title="Show/Hide" style={{ width: 24, height: 24, border: "1px solid #e2e8f0", borderRadius: 6, background: "#fff", color: d.visible ? d.color : "#cbd5e1", cursor: "pointer", flexShrink: 0 }}>●</button>
                <input value={d.name} onChange={(e) => patch(d.id, { name: e.target.value })} style={{ flex: 1, minWidth: 0, border: "1px solid #e2e8f0", borderRadius: 6, padding: "3px 6px", fontWeight: 700, fontSize: 12.5 }} />
                <input type="color" value={d.color} onChange={(e) => patch(d.id, { color: e.target.value })} style={{ width: 26, height: 24, border: "1px solid #e2e8f0", borderRadius: 6, padding: 0, cursor: "pointer" }} />
                {datasets.length > 1 && <button onClick={() => setDatasets((l) => l.filter((x) => x.id !== d.id))} title="Remove" style={{ border: "none", background: "none", color: "#cbd5e1", fontSize: 18, lineHeight: 1, cursor: "pointer" }}>×</button>}
              </div>
              <textarea value={d.values} onChange={(e) => patch(d.id, { values: e.target.value })} placeholder="12, 15, 18, 20, 22 …" rows={3} style={{ width: "100%", border: "1px solid #cbd5e1", borderRadius: 6, padding: 6, fontSize: 12, fontFamily: "JetBrains Mono, monospace", boxSizing: "border-box", resize: "vertical" }} />
            </div>
          ))}

          <div style={{ marginTop: 14, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 10 }}>
            <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 8 }}>
              bin width
              <input value={binWidth} onChange={(e) => setBinWidth(e.target.value)} placeholder="auto" style={{ width: "100%", padding: "4px 6px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12, marginTop: 2, boxSizing: "border-box" }} />
            </label>
            <CheckRow label="Histogram" v={showHistogram} on={setShowHistogram} />
            <CheckRow label="Box plot" v={showBoxplot} on={setShowBoxplot} />
            <CheckRow label="Show outliers" v={showOutliers} on={setShowOutliers} />
          </div>

          <div style={{ marginTop: 12, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 4 }}>Statistics to show</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 10 }}>
              {STAT_DEFS.map((d) => (
                <CheckRow key={d.key} label={d.label} v={selectedStats.includes(d.key)} on={() => toggleStat(d.key)} />
              ))}
            </div>
          </div>

          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            <button onClick={copyEmbed} style={btnStyle("#0f172a")}>📋 Copy embed</button>
            <button onClick={exportPng} style={btnStyle("#475569")}>📷 PNG</button>
            <button onClick={saveFile} style={btnStyle("#475569")}>💾 Save</button>
            <label style={{ background: "#475569", color: "#fff", padding: "7px", borderRadius: 8, fontWeight: 700, fontSize: 12, textAlign: "center", cursor: "pointer" }}>📂 Load<input type="file" accept="application/json" style={{ display: "none" }} onChange={loadFile} /></label>
          </div>
        </div>
      )}
      <button
        onClick={() => setPanelOpen((o) => !o)}
        title={panelOpen ? "Hide controls" : "Show controls"}
        style={{ alignSelf: "stretch", width: 22, flexShrink: 0, border: "none", borderRight: "1px solid #e2e8f0", background: "#eef2f7", color: "#475569", cursor: "pointer", fontSize: 14, fontWeight: 800 }}
      >
        {panelOpen ? "‹" : "›"}
      </button>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflowY: "auto" }}>
        {plot}
        {cards}
      </div>
    </div>
  );
}

function btnStyle(color: string): React.CSSProperties { return { background: color, color: "#fff", border: "none", borderRadius: 8, padding: "7px", fontWeight: 700, fontSize: 12, cursor: "pointer" }; }
function CheckRow({ label, v, on }: { label: string; v: boolean; on: (v: boolean) => void }) {
  return <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "#475569", padding: "3px 0", cursor: "pointer" }}>{label}<input type="checkbox" checked={v} onChange={(e) => on(e.target.checked)} /></label>;
}
