"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, texFrac } from "./kit";

type F = [number, number];
const g = (a: number, b: number): number => (b ? g(b, a % b) : Math.abs(a));
const red = ([n, d]: F): F => { const k = g(n, d) || 1; return [n / k, d / k]; };
const mid = (a: F, b: F): F => red([a[0] * b[1] + b[0] * a[1], 2 * a[1] * b[1]]);

/** Zoom into the gap between two rationals: there is always another one in the middle. */
export function DensityZoom() {
  const [pts, setPts] = useState<F[]>([[1, 2], [3, 4]]);
  const [level, setLevel] = useState(0);
  const lo = pts[0], hi = pts[pts.length - 1];
  const val = (f: F) => f[0] / f[1];
  const W = 620, X = (v: number) => 30 + ((v - val(lo)) / (val(hi) - val(lo))) * (W - 60);

  const zoom = () => {
    // keep the left half each time: [lo, mid]
    const m = mid(lo, pts[1] ?? hi);
    setPts([lo, m]);
    setLevel((l) => l + 1);
  };
  const split = () => {
    const out: F[] = [];
    for (let i = 0; i < pts.length - 1; i++) out.push(pts[i], mid(pts[i], pts[i + 1]));
    out.push(pts[pts.length - 1]);
    if (out.length <= 17) setPts(out);
  };

  return (
    <WidgetCard title="Density — no next number" subtitle="Between any two rational numbers there is always another">
      <Row>
        <button type="button" style={btn(true)} onClick={split}>Insert midpoints</button>
        <button type="button" style={btn(false)} onClick={zoom}>Zoom into the first gap</button>
        <button type="button" style={btn(false)} onClick={() => { setPts([[1, 2], [3, 4]]); setLevel(0); }}>Reset</button>
        <span style={{ fontSize: 13.5, color: C.muted }}>zoom level ×{2 ** level}</span>
      </Row>
      <svg viewBox={`0 0 ${W} 110`} style={{ width: "100%", display: "block", marginTop: 12 }} role="img" aria-label="Number line with rational midpoints">
        <line x1={14} y1={55} x2={W - 14} y2={55} stroke="#334155" strokeWidth={2} />
        {pts.map((p, i) => {
          const x = X(val(p)), up = i % 2 === 0;
          return (
            <g key={i}>
              <circle cx={x} cy={55} r={i === 0 || i === pts.length - 1 ? 6.5 : 5} fill={i === 0 || i === pts.length - 1 ? C.blue : C.violet} />
              <text x={x} y={up ? 36 : 84} fontSize={pts.length > 9 ? 9.5 : 12.5} textAnchor="middle" fill={C.ink} fontWeight={700}>{`${p[0]}/${p[1]}`}</text>
            </g>
          );
        })}
      </svg>
      <Readout tone="blue">
        <MathText html={`The midpoint of \\(a\\) and \\(b\\) is \\(\\dfrac{a+b}{2}\\), and it is always rational when \\(a\\) and \\(b\\) are. So you can never name the "next" rational after \\(${texFrac(lo[0], lo[1])}\\) — every gap holds infinitely many more. This property is called <strong>density</strong>. Integers are <em>not</em> dense: there is nothing between \\(3\\) and \\(4\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/** Sequences that approach a limit: halving steps toward 1, and 1/n toward 0. */
export function LimitSteps() {
  const [n, setN] = useState(4);
  const [kind, setKind] = useState<"half" | "recip">("half");
  const terms = Array.from({ length: n }, (_, i) => (kind === "half" ? 1 - 1 / 2 ** (i + 1) : 1 / (i + 1)));
  const target = kind === "half" ? 1 : 0;
  const last = terms[terms.length - 1];
  const W = 620, X = (v: number) => 30 + v * (W - 60);

  return (
    <WidgetCard title="Getting closer — a limit" subtitle="Add more terms and watch the gap shrink">
      <Row>
        <Segmented options={[{ value: "half", label: "½ + ¼ + ⅛ + …" }, { value: "recip", label: "1, ½, ⅓, ¼, …" }]} value={kind} onChange={setKind} />
        <Slider label="terms" value={n} min={1} max={12} onChange={setN} color={C.violet} />
      </Row>
      {kind === "half" && (
        <svg viewBox={`0 0 ${W} 60`} style={{ width: "100%", display: "block", marginTop: 12 }} aria-hidden>
          <rect x={30} y={10} width={W - 60} height={30} fill="#fff" stroke="#334155" />
          {terms.map((t, i) => {
            const start = i === 0 ? 0 : terms[i - 1];
            return <rect key={i} x={X(start)} y={10} width={X(t) - X(start)} height={30} fill={i % 2 ? "#c4b5fd" : "#a5b4fc"} stroke="#fff" strokeWidth={0.6} />;
          })}
        </svg>
      )}
      <svg viewBox={`0 0 ${W} 70`} style={{ width: "100%", display: "block" }} role="img" aria-label="Terms approaching the limit">
        <line x1={20} y1={30} x2={W - 20} y2={30} stroke="#334155" strokeWidth={2} />
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <g key={v}><line x1={X(v)} y1={24} x2={X(v)} y2={36} stroke="#334155" /><text x={X(v)} y={54} fontSize={12} textAnchor="middle" fill={C.ink}>{v}</text></g>)}
        {terms.map((t, i) => <circle key={i} cx={X(t)} cy={30} r={i === n - 1 ? 7 : 4.5} fill={i === n - 1 ? C.violet : "#a78bfa"} opacity={0.5 + (0.5 * (i + 1)) / n} />)}
        <circle cx={X(target)} cy={30} r={9} fill="none" stroke={C.red} strokeWidth={2} strokeDasharray="3 2" />
      </svg>
      <Readout tone="green">
        <MathText html={kind === "half"
          ? `After ${n} term${n === 1 ? "" : "s"} the total is \\(${texFrac(2 ** n - 1, 2 ** n)}\\approx${last.toFixed(6)}\\). The gap to \\(1\\) is \\(${texFrac(1, 2 ** n)}\\), which halves every time. The sum never passes \\(1\\) but gets as close as you like: its <strong>limit</strong> is \\(1\\).`
          : `The ${n}th term is \\(${texFrac(1, n)}\\approx${last.toFixed(4)}\\). The terms keep shrinking and get as close to \\(0\\) as you like, but never reach it: the <strong>limit</strong> is \\(0\\). There are infinitely many terms — the list never ends.`} />
      </Readout>
    </WidgetCard>
  );
}
