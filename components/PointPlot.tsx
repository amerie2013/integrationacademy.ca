"use client";

/**
 * Renders a set of (x, y) data points as an optional table and/or an optional
 * scatter plot on a coordinate grid, with an optional least-squares line of
 * best fit. Used by the "pointset" lesson block. Dependency-free SVG.
 */
type Pt = { x: number; y: number };

export function PointPlot({
  points,
  xLabel = "x",
  yLabel = "y",
  showTable = true,
  showPlot = true,
  bestFit = false,
  xMin,
  xMax,
  yMin,
  yMax,
  caption,
}: {
  points: Pt[];
  xLabel?: string;
  yLabel?: string;
  showTable?: boolean;
  showPlot?: boolean;
  bestFit?: boolean;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  caption?: string;
}) {
  const pts = (points ?? []).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));

  // least-squares line of best fit
  let fit: { m: number; b: number } | null = null;
  if (bestFit && pts.length >= 2) {
    const n = pts.length;
    const sx = pts.reduce((a, p) => a + p.x, 0);
    const sy = pts.reduce((a, p) => a + p.y, 0);
    const sxy = pts.reduce((a, p) => a + p.x * p.y, 0);
    const sxx = pts.reduce((a, p) => a + p.x * p.x, 0);
    const denom = n * sxx - sx * sx;
    if (denom !== 0) {
      const m = (n * sxy - sx * sy) / denom;
      const b = (sy - m * sx) / n;
      fit = { m, b };
    }
  }

  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
        {showTable && pts.length > 0 && (
          <table style={{ borderCollapse: "collapse", fontSize: 14, minWidth: 130 }}>
            <thead>
              <tr>
                <Th>{xLabel}</Th>
                <Th>{yLabel}</Th>
              </tr>
            </thead>
            <tbody>
              {pts.map((p, i) => (
                <tr key={i}>
                  <Td>{fmt(p.x)}</Td>
                  <Td>{fmt(p.y)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {showPlot && (
          <div style={{ flex: 1, minWidth: 280, maxWidth: 460 }}>
            <Plot pts={pts} xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel={xLabel} yLabel={yLabel} fit={fit} />
          </div>
        )}
      </div>
      {(caption || fit) && (
        <figcaption style={{ fontSize: 13, color: "#64748b", textAlign: "center" }}>
          {caption}
          {fit && (
            <span style={{ marginLeft: caption ? 8 : 0 }}>
              Line of best fit: <strong>y = {fmt(fit.m)}x {fit.b >= 0 ? "+" : "−"} {fmt(Math.abs(fit.b))}</strong>
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function Plot({
  pts, xMin, xMax, yMin, yMax, xLabel, yLabel, fit,
}: {
  pts: Pt[]; xMin: number; xMax: number; yMin: number; yMax: number; xLabel: string; yLabel: string; fit: { m: number; b: number } | null;
}) {
  const W = 420, H = 320, pad = 36;
  const X = (x: number) => pad + ((x - xMin) / (xMax - xMin || 1)) * (W - 2 * pad);
  const Y = (y: number) => H - pad - ((y - yMin) / (yMax - yMin || 1)) * (H - 2 * pad);
  const step = (lo: number, hi: number) => {
    const r = hi - lo;
    if (r <= 0) return 1;
    const raw = r / 10;
    const pow = Math.pow(10, Math.floor(Math.log10(raw)));
    const n = raw / pow;
    return (n >= 5 ? 5 : n >= 2 ? 2 : 1) * pow;
  };
  const xs = step(xMin, xMax), ys = step(yMin, yMax);
  const xticks: number[] = [], yticks: number[] = [];
  for (let v = Math.ceil(xMin / xs) * xs; v <= xMax + 1e-9; v += xs) xticks.push(+v.toFixed(6));
  for (let v = Math.ceil(yMin / ys) * ys; v <= yMax + 1e-9; v += ys) yticks.push(+v.toFixed(6));

  // best-fit endpoints clipped to the window
  let fitLine: { x1: number; y1: number; x2: number; y2: number } | null = null;
  if (fit) {
    let x1 = xMin, y1 = fit.m * xMin + fit.b, x2 = xMax, y2 = fit.m * xMax + fit.b;
    const clip = () => {
      if (fit.m !== 0) {
        if (y1 < yMin) { x1 = (yMin - fit.b) / fit.m; y1 = yMin; } else if (y1 > yMax) { x1 = (yMax - fit.b) / fit.m; y1 = yMax; }
        if (y2 < yMin) { x2 = (yMin - fit.b) / fit.m; y2 = yMin; } else if (y2 > yMax) { x2 = (yMax - fit.b) / fit.m; y2 = yMax; }
      }
    };
    clip();
    fitLine = { x1, y1, x2, y2 };
  }

  const axisX = yMin <= 0 && yMax >= 0 ? Y(0) : H - pad;
  const axisY = xMin <= 0 && xMax >= 0 ? X(0) : pad;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff" }} role="img" aria-label="Scatter plot of data points">
      {/* grid */}
      {xticks.map((v, i) => (
        <line key={"gx" + i} x1={X(v)} y1={pad} x2={X(v)} y2={H - pad} stroke="#eef2f7" strokeWidth={1} />
      ))}
      {yticks.map((v, i) => (
        <line key={"gy" + i} x1={pad} y1={Y(v)} x2={W - pad} y2={Y(v)} stroke="#eef2f7" strokeWidth={1} />
      ))}
      {/* axes */}
      <line x1={pad} y1={axisX} x2={W - pad} y2={axisX} stroke="#94a3b8" strokeWidth={1.5} />
      <line x1={axisY} y1={pad} x2={axisY} y2={H - pad} stroke="#94a3b8" strokeWidth={1.5} />
      {/* tick labels */}
      {xticks.map((v, i) => (
        <text key={"tx" + i} x={X(v)} y={H - pad + 14} fontSize={10} fill="#94a3b8" textAnchor="middle">{fmt(v)}</text>
      ))}
      {yticks.map((v, i) => (
        <text key={"ty" + i} x={pad - 6} y={Y(v) + 3} fontSize={10} fill="#94a3b8" textAnchor="end">{fmt(v)}</text>
      ))}
      {/* axis labels */}
      <text x={W - pad} y={axisX - 6} fontSize={12} fill="#475569" textAnchor="end" fontWeight={700}>{xLabel}</text>
      <text x={axisY + 6} y={pad + 4} fontSize={12} fill="#475569" textAnchor="start" fontWeight={700}>{yLabel}</text>
      {/* best-fit line */}
      {fitLine && <line x1={X(fitLine.x1)} y1={Y(fitLine.y1)} x2={X(fitLine.x2)} y2={Y(fitLine.y2)} stroke="#dc2626" strokeWidth={2.5} />}
      {/* points */}
      {pts.map((p, i) => (
        <circle key={"p" + i} cx={X(p.x)} cy={Y(p.y)} r={4.5} fill="#2563eb" stroke="#fff" strokeWidth={1.5} />
      ))}
    </svg>
  );
}

function fmt(n: number) {
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 1000) / 1000);
}
function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ border: "1px solid #cbd5e1", background: "#e7f6ec", color: "#0d5c30", padding: "6px 12px", fontWeight: 700 }}>{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td style={{ border: "1px solid #e2e8f0", padding: "5px 12px", textAlign: "center", fontVariantNumeric: "tabular-nums" }}>{children}</td>;
}
