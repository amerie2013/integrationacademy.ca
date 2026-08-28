"use client";

/**
 * MDM4U Probability Distributions: the binomial distribution (with a bar
 * chart of the full distribution) and the normal distribution (z-scores,
 * area under the curve with a shaded bell curve, and the inverse normal).
 * A live scratchpad (no save/embed), matching the shape of
 * components/Counting.tsx and components/Probability.tsx.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { binomialPMF, binomialCDF, binomialMean, binomialVariance, binomialSD, normalCDF, normalPDF, zScore, inverseNormalCDF } from "../lib/distributionMath";

const fmt = (n: number) => (Number.isFinite(n) ? parseFloat(n.toFixed(4)).toString() : "—");
const fmtPct = (n: number) => (Number.isFinite(n) ? parseFloat((n * 100).toFixed(2)).toString() + "%" : "—");
const BINOM_MAX_N = 100; // keeps the bar chart legible; the PMF/CDF formulas themselves have no such limit

export function Distributions() {
  // ── binomial ────────────────────────────────────────────────
  const [bn, setBn] = useState(10);
  const [bp, setBp] = useState(0.5);
  const [bk, setBk] = useState(5);
  const nClamped = Math.max(0, Math.min(BINOM_MAX_N, Math.round(bn)));
  const kClamped = Math.max(0, Math.min(nClamped, Math.round(bk)));
  const pClamped = Math.max(0, Math.min(1, bp));
  const pmf = binomialPMF(nClamped, kClamped, pClamped);
  const cdfLE = binomialCDF(nClamped, kClamped, pClamped);
  const cdfGE = 1 - binomialCDF(nClamped, kClamped - 1, pClamped);
  const bMean = binomialMean(nClamped, pClamped), bVar = binomialVariance(nClamped, pClamped), bSd = binomialSD(nClamped, pClamped);

  const binWrapRef = useRef<HTMLDivElement>(null);
  const binCanvasRef = useRef<HTMLCanvasElement>(null);
  const binSizeRef = useRef({ w: 600, h: 220 });

  const drawBinomial = useCallback(() => {
    const canvas = binCanvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const { w, h } = binSizeRef.current;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);

    const marginL = 40, marginR = 16, marginTop = 14, marginBottom = 26;
    const plotW = Math.max(20, w - marginL - marginR), plotH = Math.max(20, h - marginTop - marginBottom);
    const bars = Array.from({ length: nClamped + 1 }, (_, k) => binomialPMF(nClamped, k, pClamped));
    const maxP = Math.max(...bars, 1e-9);
    const bw = plotW / bars.length;

    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1.5; ctx.beginPath();
    ctx.moveTo(marginL, marginTop + plotH); ctx.lineTo(marginL + plotW, marginTop + plotH); ctx.stroke();

    const labelEvery = Math.max(1, Math.ceil(bars.length / 20));
    ctx.font = "11px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "top";
    bars.forEach((p, k) => {
      const bh = (p / maxP) * (plotH - 4);
      const x = marginL + k * bw;
      ctx.fillStyle = k === kClamped ? "#1b7a44" : "#93c5a8";
      ctx.fillRect(x + 1, marginTop + plotH - bh, Math.max(1, bw - 2), bh);
      if (k % labelEvery === 0) { ctx.fillStyle = "#64748b"; ctx.fillText(String(k), x + bw / 2, marginTop + plotH + 4); }
    });
  }, [nClamped, pClamped, kClamped]);

  useEffect(() => { drawBinomial(); }, [drawBinomial]);
  useEffect(() => {
    const el = binWrapRef.current; if (!el) return;
    const ro = new ResizeObserver(() => { binSizeRef.current = { w: el.clientWidth, h: el.clientHeight }; drawBinomial(); });
    ro.observe(el); binSizeRef.current = { w: el.clientWidth, h: el.clientHeight }; drawBinomial();
    return () => ro.disconnect();
  }, [drawBinomial]);

  // ── normal: z-score ────────────────────────────────────────
  const [zMean, setZMean] = useState(100);
  const [zSd, setZSd] = useState(15);
  const [zX, setZX] = useState(115);
  const z = zScore(zX, zMean, zSd);

  // ── normal: area under the curve ───────────────────────────
  const [aMean, setAMean] = useState(0);
  const [aSd, setASd] = useState(1);
  const [lowerStr, setLowerStr] = useState("");
  const [upperStr, setUpperStr] = useState("1.96");
  const lower = lowerStr.trim() === "" ? -Infinity : parseFloat(lowerStr);
  const upper = upperStr.trim() === "" ? Infinity : parseFloat(upperStr);
  const lowerOk = lowerStr.trim() === "" || Number.isFinite(lower);
  const upperOk = upperStr.trim() === "" || Number.isFinite(upper);
  const areaProb = (Number.isFinite(upper) ? normalCDF(upper, aMean, aSd) : 1) - (Number.isFinite(lower) ? normalCDF(lower, aMean, aSd) : 0);

  const curveWrapRef = useRef<HTMLDivElement>(null);
  const curveCanvasRef = useRef<HTMLCanvasElement>(null);
  const curveSizeRef = useRef({ w: 600, h: 240 });

  const drawCurve = useCallback(() => {
    const canvas = curveCanvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const { w, h } = curveSizeRef.current;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);
    if (!(aSd > 0)) { ctx.fillStyle = "#94a3b8"; ctx.font = "13px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.fillText("σ must be > 0", w / 2, h / 2); return; }

    const marginL = 40, marginR = 16, marginTop = 14, marginBottom = 26;
    const plotW = Math.max(20, w - marginL - marginR), plotH = Math.max(20, h - marginTop - marginBottom);
    const domMin = aMean - 4 * aSd, domMax = aMean + 4 * aSd;
    const toX = (x: number) => marginL + ((x - domMin) / (domMax - domMin)) * plotW;
    const peak = normalPDF(aMean, aMean, aSd);
    const toY = (d: number) => marginTop + plotH - (d / peak) * (plotH - 6);

    // shaded area between the bounds (clipped to the plotted domain)
    const shadeLo = Math.max(domMin, Number.isFinite(lower) ? lower : domMin);
    const shadeHi = Math.min(domMax, Number.isFinite(upper) ? upper : domMax);
    if (shadeHi > shadeLo) {
      ctx.beginPath(); ctx.moveTo(toX(shadeLo), marginTop + plotH);
      const steps = 100;
      for (let i = 0; i <= steps; i++) { const x = shadeLo + ((shadeHi - shadeLo) * i) / steps; ctx.lineTo(toX(x), toY(normalPDF(x, aMean, aSd))); }
      ctx.lineTo(toX(shadeHi), marginTop + plotH); ctx.closePath();
      ctx.fillStyle = "rgba(27,122,68,0.25)"; ctx.fill();
    }

    // the curve itself
    ctx.beginPath();
    const steps = 200;
    for (let i = 0; i <= steps; i++) { const x = domMin + ((domMax - domMin) * i) / steps; const y = toY(normalPDF(x, aMean, aSd)); if (i) ctx.lineTo(toX(x), y); else ctx.moveTo(toX(x), y); }
    ctx.strokeStyle = "#1b7a44"; ctx.lineWidth = 2; ctx.stroke();

    // axis + ticks at μ ± 0,1,2,3σ
    const axisY = marginTop + plotH;
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(marginL, axisY); ctx.lineTo(marginL + plotW, axisY); ctx.stroke();
    ctx.fillStyle = "#334155"; ctx.font = "11px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let s = -4; s <= 4; s++) {
      const x = toX(aMean + s * aSd);
      ctx.strokeStyle = "#cbd5e1"; ctx.beginPath(); ctx.moveTo(x, axisY); ctx.lineTo(x, axisY + 4); ctx.stroke();
      ctx.fillText(fmt(aMean + s * aSd), x, axisY + 6);
    }
  }, [aMean, aSd, lower, upper]);

  useEffect(() => { drawCurve(); }, [drawCurve]);
  useEffect(() => {
    const el = curveWrapRef.current; if (!el) return;
    const ro = new ResizeObserver(() => { curveSizeRef.current = { w: el.clientWidth, h: el.clientHeight }; drawCurve(); });
    ro.observe(el); curveSizeRef.current = { w: el.clientWidth, h: el.clientHeight }; drawCurve();
    return () => ro.disconnect();
  }, [drawCurve]);

  // ── normal: inverse ─────────────────────────────────────────
  const [iMean, setIMean] = useState(0);
  const [iSd, setISd] = useState(1);
  const [invP, setInvP] = useState(0.9);
  const invX = inverseNormalCDF(invP, iMean, iSd);

  return (
    <div style={{ padding: 20, overflowY: "auto", height: "100%", boxSizing: "border-box", background: "#f8faff" }}>
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 14, marginBottom: 16, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: "#0f172a", marginBottom: 2 }}>Binomial Distribution</div>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: "#1b7a44", marginBottom: 4 }}>P(X = k) = ₙCₖ pᵏ(1 − p)ⁿ⁻ᵏ</div>
        <div style={{ fontSize: 11.5, color: "#94a3b8", marginBottom: 10 }}>n independent trials, each with success probability p. Chart caps at n = {BINOM_MAX_N} to stay readable.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: 10, marginBottom: 10 }}>
          <NumInput label="n (trials)" value={bn} onChange={setBn} min={0} max={BINOM_MAX_N} />
          <NumInput label="p (success prob.)" value={bp} onChange={setBp} min={0} max={1} step={0.01} />
          <NumInput label="k" value={bk} onChange={setBk} min={0} max={nClamped} />
        </div>
        <div ref={binWrapRef} style={{ height: 160, marginBottom: 10 }}><canvas ref={binCanvasRef} style={{ width: "100%", height: "100%", display: "block" }} /></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
          <Result label={`P(X = ${kClamped}) =`} value={`${fmt(pmf)} = ${fmtPct(pmf)}`} />
          <Result label={`P(X ≤ ${kClamped}) =`} value={`${fmt(cdfLE)} = ${fmtPct(cdfLE)}`} />
          <Result label={`P(X ≥ ${kClamped}) =`} value={`${fmt(cdfGE)} = ${fmtPct(cdfGE)}`} />
          <Result label="μ = np, σ = √(np(1−p)) =" value={`μ=${fmt(bMean)}, σ²=${fmt(bVar)}, σ=${fmt(bSd)}`} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        <Card title="Z-Score" formula="z = (x − μ) / σ" note="How many standard deviations x is from the mean.">
          <NumInput label="x" value={zX} onChange={setZX} step={0.1} />
          <NumInput label="μ (mean)" value={zMean} onChange={setZMean} step={0.1} />
          <NumInput label="σ (std dev)" value={zSd} onChange={setZSd} step={0.1} />
          <Result label="z =" value={zSd > 0 ? fmt(z) : "σ must be > 0"} />
        </Card>

        <Card title="Inverse Normal" formula="find x such that P(X ≤ x) = p" note="The value at a given percentile — e.g. p = 0.9 finds the 90th percentile.">
          <NumInput label="μ (mean)" value={iMean} onChange={setIMean} step={0.1} />
          <NumInput label="σ (std dev)" value={iSd} onChange={setISd} step={0.1} />
          <NumInput label="p (cumulative probability, 0–1)" value={invP} onChange={setInvP} min={0} max={1} step={0.01} />
          <Result label="x =" value={iSd > 0 ? `${fmt(invX)}  (z = ${fmt(zScore(invX, iMean, iSd))})` : "σ must be > 0"} />
        </Card>
      </div>

      <div style={{ marginTop: 16, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 14, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: "#0f172a", marginBottom: 2 }}>Area Under the Normal Curve</div>
        <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: "#1b7a44", marginBottom: 4 }}>P(lower &lt; X &lt; upper) = Φ(upper) − Φ(lower)</div>
        <div style={{ fontSize: 11.5, color: "#94a3b8", marginBottom: 10 }}>Leave a bound blank for &minus;∞ / +∞ (a one-tailed area).</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: 10, marginBottom: 10 }}>
          <NumInput label="μ (mean)" value={aMean} onChange={setAMean} step={0.1} />
          <NumInput label="σ (std dev)" value={aSd} onChange={setASd} step={0.1} />
          <TextInput label="Lower bound" value={lowerStr} onChange={setLowerStr} placeholder="−∞" />
          <TextInput label="Upper bound" value={upperStr} onChange={setUpperStr} placeholder="+∞" />
        </div>
        <div ref={curveWrapRef} style={{ height: 180, marginBottom: 10 }}><canvas ref={curveCanvasRef} style={{ width: "100%", height: "100%", display: "block" }} /></div>
        <Result label="Probability =" value={aSd > 0 && lowerOk && upperOk ? `${fmt(areaProb)} = ${fmtPct(areaProb)}` : "check σ and the bounds"} />
      </div>
    </div>
  );
}

function Card({ title, formula, note, children }: { title: string; formula: string; note?: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 14, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
      <div style={{ fontWeight: 800, fontSize: 15, color: "#0f172a", marginBottom: 2 }}>{title}</div>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13, color: "#1b7a44", marginBottom: note ? 4 : 10 }}>{formula}</div>
      {note && <div style={{ fontSize: 11.5, color: "#94a3b8", marginBottom: 10 }}>{note}</div>}
      {children}
    </div>
  );
}
function NumInput({ label, value, onChange, min, max, step }: { label: string; value: number; onChange: (v: number) => void; min?: number; max?: number; step?: number }) {
  return (
    <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 8 }}>
      {label}
      <input type="number" value={value} min={min} max={max} step={step} onChange={(e) => onChange(parseFloat(e.target.value) || 0)} style={{ width: "100%", padding: "6px 8px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 13, marginTop: 2, boxSizing: "border-box" }} />
    </label>
  );
}
function TextInput({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 8 }}>
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} style={{ width: "100%", padding: "6px 8px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 13, marginTop: 2, boxSizing: "border-box" }} />
    </label>
  );
}
function Result({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginTop: 6, padding: "8px 10px", background: "#f8faff", border: "1px solid #e2e8f0", borderRadius: 8 }}>
      <div style={{ fontSize: 11, color: "#64748b" }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", fontFamily: "JetBrains Mono, monospace", wordBreak: "break-all" }}>{value}</div>
    </div>
  );
}
