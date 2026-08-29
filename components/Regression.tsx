"use client";

/**
 * MDM4U Two-Variable Statistics: scatter plot, least-squares linear
 * regression, Pearson's r, and prediction. A live scratchpad (no
 * save/embed), matching the shape of the other Data Management topics.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { parsePairs, linearRegression, predict } from "../lib/regressionMath";

const fmt = (n: number) => (Number.isFinite(n) ? parseFloat(n.toFixed(4)).toString() : "—");
const DEFAULT_DATA = "1, 2\n2, 4\n3, 5\n4, 4\n5, 5\n6, 7\n7, 8\n8, 7\n9, 9\n10, 10";

/** A "nice" (1/2/5×10ⁿ) tick step for a numeric axis, given the pixel budget available. */
function niceStep(range: number, plotWidthPx: number, targetPxPerTick = 60) {
  if (range <= 0) return 1;
  const target = (range * targetPxPerTick) / plotWidthPx;
  const pow = Math.pow(10, Math.floor(Math.log10(target)));
  const n = target / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * pow;
}

export function Regression() {
  const [raw, setRaw] = useState(DEFAULT_DATA);
  const [predictX, setPredictX] = useState("11");

  const points = parsePairs(raw);
  const reg = linearRegression(points);
  const predXNum = parseFloat(predictX);
  const predY = reg && Number.isFinite(predXNum) ? predict(reg, predXNum) : null;

  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ w: 600, h: 360 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const { w, h } = sizeRef.current;
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);

    if (points.length === 0) {
      ctx.fillStyle = "#94a3b8"; ctx.font = "14px Inter, system-ui, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("Enter x, y pairs (one per line) to see the scatter plot", w / 2, h / 2);
      return;
    }

    const marginL = 60, marginR = 24, marginTop = 16, marginBottom = 36;
    const plotW = Math.max(20, w - marginL - marginR), plotH = Math.max(20, h - marginTop - marginBottom);

    let xMin = Math.min(...points.map((p) => p.x)), xMax = Math.max(...points.map((p) => p.x));
    let yMin = Math.min(...points.map((p) => p.y)), yMax = Math.max(...points.map((p) => p.y));
    if (predY !== null) { xMin = Math.min(xMin, predXNum); xMax = Math.max(xMax, predXNum); yMin = Math.min(yMin, predY); yMax = Math.max(yMax, predY); }
    if (xMin === xMax) { xMin -= 1; xMax += 1; }
    if (yMin === yMax) { yMin -= 1; yMax += 1; }
    const xPad = (xMax - xMin) * 0.08, yPad = (yMax - yMin) * 0.08;
    xMin -= xPad; xMax += xPad; yMin -= yPad; yMax += yPad;

    const toX = (x: number) => marginL + ((x - xMin) / (xMax - xMin)) * plotW;
    const toY = (y: number) => marginTop + plotH - ((y - yMin) / (yMax - yMin)) * plotH;

    // gridlines
    const stepX = niceStep(xMax - xMin, plotW), stepY = niceStep(yMax - yMin, plotH);
    ctx.strokeStyle = "#f1f5f9"; ctx.lineWidth = 1; ctx.beginPath();
    for (let v = Math.ceil(xMin / stepX) * stepX; v <= xMax; v += stepX) { const x = toX(v); ctx.moveTo(x, marginTop); ctx.lineTo(x, marginTop + plotH); }
    for (let v = Math.ceil(yMin / stepY) * stepY; v <= yMax; v += stepY) { const y = toY(v); ctx.moveTo(marginL, y); ctx.lineTo(marginL + plotW, y); }
    ctx.stroke();

    // axes + tick labels
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 1.5; ctx.beginPath();
    ctx.moveTo(marginL, marginTop); ctx.lineTo(marginL, marginTop + plotH); ctx.lineTo(marginL + plotW, marginTop + plotH); ctx.stroke();
    ctx.fillStyle = "#334155"; ctx.font = "12px Inter, system-ui, sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let v = Math.ceil(xMin / stepX) * stepX; v <= xMax; v += stepX) ctx.fillText(fmt(Math.round(v * 1000) / 1000), toX(v), marginTop + plotH + 6);
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    for (let v = Math.ceil(yMin / stepY) * stepY; v <= yMax; v += stepY) ctx.fillText(fmt(Math.round(v * 1000) / 1000), marginL - 6, toY(v));

    // regression line
    if (reg) {
      ctx.strokeStyle = "#1b7a44"; ctx.lineWidth = 2; ctx.beginPath();
      ctx.moveTo(toX(xMin), toY(predict(reg, xMin))); ctx.lineTo(toX(xMax), toY(predict(reg, xMax))); ctx.stroke();
    }

    // data points
    ctx.fillStyle = "#3b82f6";
    for (const p of points) { ctx.beginPath(); ctx.arc(toX(p.x), toY(p.y), 4, 0, Math.PI * 2); ctx.fill(); }

    // predicted point
    if (predY !== null) {
      ctx.fillStyle = "#ea580c"; ctx.strokeStyle = "#ea580c"; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(toX(predXNum), marginTop + plotH); ctx.lineTo(toX(predXNum), toY(predY)); ctx.lineTo(marginL, toY(predY)); ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath(); ctx.arc(toX(predXNum), toY(predY), 5, 0, Math.PI * 2); ctx.fill();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raw, predictX]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const ro = new ResizeObserver(() => { sizeRef.current = { w: el.clientWidth, h: el.clientHeight }; draw(); });
    ro.observe(el); sizeRef.current = { w: el.clientWidth, h: el.clientHeight }; draw();
    return () => ro.disconnect();
  }, [draw]);

  return (
    <div style={{ display: "flex", height: "100%", minHeight: 460 }}>
      <div style={{ width: 320, flexShrink: 0, borderRight: "1px solid #e2e8f0", background: "#f8faff", padding: 14, overflowY: "auto", boxSizing: "border-box" }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: "#0f172a", marginBottom: 4 }}>Data</div>
        <div style={{ fontSize: 11.5, color: "#94a3b8", marginBottom: 8 }}>One pair per line: x, y</div>
        <textarea value={raw} onChange={(e) => setRaw(e.target.value)} rows={12} style={{ width: "100%", padding: "8px", border: "1px solid #cbd5e1", borderRadius: 8, fontSize: 13, fontFamily: "JetBrains Mono, monospace", boxSizing: "border-box", resize: "vertical" }} />

        <div style={{ marginTop: 14, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 14, color: "#0f172a", marginBottom: 8 }}>Least-Squares Regression</div>
          {reg ? (
            <>
              <Result label="Equation" value={`y = ${fmt(reg.intercept)} + ${fmt(reg.slope)}x`} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
                <Result label="r (correlation)" value={fmt(reg.r)} />
                <Result label="r² (determination)" value={fmt(reg.r2)} />
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 8 }}>n = {reg.n} points</div>
            </>
          ) : (
            <div style={{ fontSize: 12.5, color: "#94a3b8" }}>Need at least 2 points with varying x.</div>
          )}
        </div>

        <div style={{ marginTop: 12, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 14, color: "#0f172a", marginBottom: 8 }}>Predict</div>
          <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 8 }}>
            x
            <input value={predictX} onChange={(e) => setPredictX(e.target.value)} style={{ width: "100%", padding: "6px 8px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 13, marginTop: 2, boxSizing: "border-box" }} />
          </label>
          <Result label="Predicted y" value={predY !== null ? fmt(predY) : "—"} />
        </div>
      </div>
      <div ref={wrapRef} style={{ flex: 1, minWidth: 0, position: "relative", background: "#fff" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      </div>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ padding: "6px 8px", background: "#f8faff", border: "1px solid #e2e8f0", borderRadius: 6 }}>
      <div style={{ fontSize: 10.5, color: "#64748b" }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 800, color: "#0f172a", fontFamily: "JetBrains Mono, monospace", wordBreak: "break-all" }}>{value}</div>
    </div>
  );
}
