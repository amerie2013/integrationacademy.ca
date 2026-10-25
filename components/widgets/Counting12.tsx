"use client";

// MDM4U chapter 1 (counting) explorers: tree diagrams and the multiplicative / additive counting principles, slot
// diagrams for permutations, arrangements of words with repeated letters, arrangements with conditions (together,
// apart, at an end, in order, round tables), permutations vs combinations, committees with "at least" conditions
// (cases vs the complement), street-grid paths with Pascal's rule, and binomial expansions.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";

const svgBox: React.CSSProperties = { width: "100%", maxWidth: 560, display: "block", margin: "8px auto" };
/** thousands separators that KaTeX does not space like punctuation */
const tx = (n: number) => n.toLocaleString("en-US").replace(/,/g, "{,}");
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
const P = (n: number, r: number) => (r < 0 || r > n ? 0 : fact(n) / fact(n - r));
const Cn = (n: number, r: number) => { if (r < 0 || r > n) return 0; let v = 1; for (let k = 1; k <= r; k++) v = (v * (n - r + k)) / k; return Math.round(v); };
const chip = (on: boolean, color = C.blue): React.CSSProperties => ({ display: "inline-block", minWidth: 28, padding: "3px 8px", margin: 2, borderRadius: 7, textAlign: "center", fontWeight: 700, fontSize: 14, border: `1.5px solid ${on ? color : C.line}`, background: on ? "#fff" : C.panel, color: on ? color : C.faint });

/** boxes with the number of choices in each position */
function Slots({ vals, labels, color = C.blue, op = "×", result }: { vals: (number | string)[]; labels?: string[]; color?: string; op?: string; result?: string }) {
  const bw = vals.length > 8 ? 40 : 52, g = vals.length > 8 ? 18 : 24, W = Math.max(300, 20 + vals.length * (bw + g) + (result ? 110 : 0)), H = 92;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Slot diagram">
      {vals.map((v, i) => {
        const x = 12 + i * (bw + g);
        return (
          <g key={i}>
            <rect x={x} y={10} width={bw} height={46} rx={6} fill="#fff" stroke={color} strokeWidth={2} />
            <text x={x + bw / 2} y={40} fontSize={String(v).length > 2 ? 15 : 19} fontWeight={800} textAnchor="middle" fill={color}>{v}</text>
            {labels && <text x={x + bw / 2} y={74} fontSize={10.5} textAnchor="middle" fill={C.muted}>{labels[i]}</text>}
            {i < vals.length - 1 && <text x={x + bw + g / 2} y={39} fontSize={17} fontWeight={700} textAnchor="middle" fill={C.muted}>{op}</text>}
          </g>
        );
      })}
      {result && <text x={12 + vals.length * (bw + g) - g / 2 + 6} y={40} fontSize={19} fontWeight={800} fill={C.red}>= {result}</text>}
    </svg>
  );
}

/* ---------------------------------------------------------------- 1.1 tree diagrams, multiplicative and additive principles */

export function CountingTree({ init = [2, 3, 2] }: { init?: [number, number, number] }) {
  const [mode, setMode] = useState<"and" | "or">("and");
  const [k1, setK1] = useState(init[0]), [k2, setK2] = useState(init[1]), [k3, setK3] = useState(init[2]);
  const names = [["S", "M", "L", "XL"], ["red", "blue", "black", "white"], ["crew", "V"]];
  const ks = [k1, k2, k3];
  const total = k1 * k2 * k3;
  // tree layout (left to right)
  const W = 560, leafH = total > 16 ? 11 : 19, H = Math.max(140, total * leafH + 30), colX = [30, 170, 320, 450];
  const lines: React.ReactNode[] = [];
  let leaf = 0;
  const draw = (d: number, x0: number, y0: number, path: string[]) => {
    if (d === 3) return;
    const span = ks.slice(d).reduce((a, b) => a * b, 1) / ks[d];
    for (let i = 0; i < ks[d]; i++) {
      const start = leaf;
      const y = 18 + (start + span / 2) * ((H - 30) / total);
      lines.push(<line key={`l${d}-${path.join()}-${i}`} x1={x0} y1={y0} x2={colX[d + 1] - 8} y2={y} stroke={C.faint} strokeWidth={1.3} />);
      const lab = names[d][i];
      if (d === 2) { leaf += 1; }
      else draw(d + 1, colX[d + 1] + 8, y, [...path, lab]);
      lines.push(<g key={`n${d}-${path.join()}-${i}`}><circle cx={colX[d + 1]} cy={y} r={total > 16 && d === 2 ? 3 : 6} fill={[C.blue, C.red, C.green][d]} />{(d < 2 || total <= 16) && <text x={colX[d + 1] + 9} y={y + 4} fontSize={d === 2 ? 10.5 : 11.5} fill={C.ink}>{lab}</text>}</g>);
    }
  };
  draw(0, colX[0], 18 + (H - 30) / 2, []);
  const [a, setA] = useState(5), [b, setB] = useState(4);
  return (
    <WidgetCard title="Counting outcomes" subtitle="a tree diagram shows every outcome; the counting principles count them without drawing">
      <Segmented value={mode} onChange={setMode} options={[{ value: "and", label: "this AND that (multiply)" }, { value: "or", label: "this OR that (add)" }]} />
      {mode === "and" ? (
        <>
          <Row style={{ marginTop: 10 }}>
            <Slider label="sizes" value={k1} min={1} max={4} onChange={setK1} color={C.blue} />
            <Slider label="colours" value={k2} min={1} max={4} onChange={setK2} color={C.red} />
            <Slider label="necklines" value={k3} min={1} max={2} onChange={setK3} color={C.green} />
          </Row>
          <svg viewBox={`0 0 ${W} ${H}`} style={svgBox} role="img" aria-label="Tree diagram of T-shirt choices">
            <circle cx={colX[0]} cy={18 + (H - 30) / 2} r={6} fill={C.ink} />
            {lines}
            {["size", "colour", "neckline"].map((t, i) => <text key={t} x={colX[i + 1]} y={11} fontSize={11} fontWeight={700} textAnchor="middle" fill={C.muted}>{t}</text>)}
          </svg>
          <Readout tone="green">
            <MathText html={`Each size branches into every colour, and each colour into every neckline, so the tree has \\(${k1}\\times${k2}\\times${k3}=${total}\\) end branches (outcomes). <strong>Fundamental counting principle:</strong> if one task can be done in \\(m\\) ways and a second task in \\(n\\) ways, the two together can be done in \\(m\\times n\\) ways.`} />
          </Readout>
        </>
      ) : (
        <>
          <Row style={{ marginTop: 10 }}>
            <Slider label="hot meals" value={a} min={0} max={8} onChange={setA} color={C.blue} />
            <Slider label="cold meals" value={b} min={0} max={8} onChange={setB} color={C.amber} />
          </Row>
          <div style={{ margin: "10px 0" }}>
            {Array.from({ length: a }, (_, i) => <span key={`h${i}`} style={chip(true, C.blue)}>H{i + 1}</span>)}
            {Array.from({ length: b }, (_, i) => <span key={`c${i}`} style={chip(true, C.amber)}>C{i + 1}</span>)}
          </div>
          <Readout tone="amber">
            <MathText html={`You choose <strong>one</strong> meal: a hot one <em>or</em> a cold one. The two groups do not overlap, so there are \\(${a}+${b}=${a + b}\\) choices. <strong>Additive counting principle (rule of sum):</strong> if two tasks cannot happen together, the number of ways to do one <em>or</em> the other is \\(m+n\\). If you had to choose one hot <em>and</em> one cold meal it would be \\(${a}\\times${b}=${a * b}\\).`} />
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.2 permutations of distinct objects */

export function PermLab({ init = [8, 3] }: { init?: [number, number] }) {
  const [n, setN] = useState(init[0]), [r0, setR] = useState(init[1]);
  const r = Math.min(r0, n);
  const vals = Array.from({ length: r }, (_, i) => n - i);
  const facts = Array.from({ length: 10 }, (_, i) => fact(i + 1));
  return (
    <WidgetCard title="Permutations: order matters" subtitle="fill r positions from n different objects">
      <Row>
        <Slider label="objects n" value={n} min={1} max={12} onChange={setN} color={C.blue} />
        <Slider label="positions r" value={r} min={0} max={n} onChange={setR} color={C.red} />
      </Row>
      {r > 0 ? <Slots vals={vals} labels={vals.map((_, i) => `pos ${i + 1}`)} result={P(n, r).toLocaleString("en-US")} /> : <p style={{ color: C.muted, textAlign: "center" }}>No positions to fill: there is exactly 1 way (do nothing).</p>}
      <Readout tone="green">
        <MathText html={`\\({}_{${n}}P_{${r}}=\\dfrac{${n}!}{(${n}-${r})!}=\\dfrac{${n}!}{${n - r}!}=${r ? vals.join("\\times") : "1"}=${tx(P(n, r))}\\). ${r === n ? `With \\(r=n\\) every object is placed: \\(${n}!=${tx(fact(n))}\\) arrangements.` : "Each position has one fewer choice than the one before, because an object cannot be used twice."}`} />
      </Readout>
      <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 6 }}>
        {facts.map((f, i) => (
          <div key={i} style={{ ...chip(i + 1 === n, C.violet), textAlign: "left", fontVariantNumeric: "tabular-nums" }}>{i + 1}! = {f.toLocaleString("en-US")}</div>
        ))}
      </div>
      <p style={{ fontSize: 13.5, color: C.muted, margin: "8px 0 0" }}>Factorials grow faster than any power: 10! is already more than 3.6 million. Also 0! = 1, so that ₙPₙ = n!/0! = n!.</p>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.3 identical objects */

const WORDS = ["BOOK", "LEVEL", "PEPPER", "BANANA", "TOOTH", "STATISTICS", "MISSISSIPPI"];
function distinctPerms(s: string, cap = 200): string[] {
  const out: string[] = [];
  const cnt: Record<string, number> = {};
  for (const ch of s) cnt[ch] = (cnt[ch] ?? 0) + 1;
  const keys = Object.keys(cnt).sort();
  const go = (cur: string) => {
    if (out.length >= cap) return;
    if (cur.length === s.length) { out.push(cur); return; }
    for (const k of keys) if (cnt[k] > 0) { cnt[k]--; go(cur + k); cnt[k]++; }
  };
  go("");
  return out;
}
export function WordArrange({ init = "LEVEL" }: { init?: string }) {
  const [w, setW] = useState(init);
  const [show, setShow] = useState(false);
  const cnt: Record<string, number> = {};
  for (const ch of w) cnt[ch] = (cnt[ch] ?? 0) + 1;
  const reps = Object.entries(cnt).filter(([, k]) => k > 1);
  const total = fact(w.length) / reps.reduce((p, [, k]) => p * fact(k), 1);
  const list = total <= 180 ? distinctPerms(w) : [];
  return (
    <WidgetCard title="Arranging letters with repeats" subtitle="identical letters swapped among themselves give the same word">
      <Segmented value={w} onChange={(v) => { setW(v); setShow(false); }} options={WORDS.map((x) => ({ value: x, label: x }))} />
      <div style={{ margin: "12px 0" }}>
        {Object.entries(cnt).map(([ch, k]) => <span key={ch} style={chip(true, k > 1 ? C.red : C.blue)}>{ch} × {k}</span>)}
      </div>
      <Readout tone="green">
        <MathText html={`${w.length} letters. If all were different there would be \\(${w.length}!=${tx(fact(w.length))}\\) arrangements. ${reps.length ? `Each repeated letter overcounts: divide by \\(${reps.map(([ch, k]) => `${k}!\\,(\\text{${ch}})`).join("\\times")}\\). So \\(\\dfrac{${w.length}!}{${reps.map(([, k]) => `${k}!`).join("\\,")}}=${tx(total)}\\) different arrangements.` : "No letter repeats, so every arrangement is different."}`} />
      </Readout>
      {list.length > 0 && (
        <div style={{ marginTop: 10 }}>
          <button type="button" onClick={() => setShow(!show)} style={{ border: `1px solid ${C.line}`, background: "#fff", borderRadius: 8, padding: "6px 12px", fontWeight: 700, cursor: "pointer" }}>{show ? "Hide" : "Show"} all {list.length} arrangements</button>
          {show && <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 4, fontFamily: "ui-monospace, monospace", fontSize: 13 }}>{list.map((x) => <span key={x} style={{ padding: "2px 6px", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 5 }}>{x}</span>)}</div>}
        </div>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.4 permutations with conditions */

type Cond = "none" | "together" | "apart" | "end" | "order" | "round";
export function ConstraintLab({ init = 6 }: { init?: number }) {
  const [n, setN] = useState(init), [c, setC] = useState<Cond>("together");
  const people = "ABCDEFGH".slice(0, n).split("");
  let html = "", total = 0;
  if (c === "none") { total = fact(n); html = `No conditions: \\(${n}!=${tx(total)}\\).`; }
  if (c === "together") { total = fact(n - 1) * 2; html = `Glue A and B into one block: arrange \\(${n - 1}\\) items in \\(${n - 1}!\\) ways, then the block itself in \\(2!\\) ways: \\(${n - 1}!\\times2!=${tx(total)}\\).`; }
  if (c === "apart") { total = fact(n) - fact(n - 1) * 2; html = `Use the complement: all arrangements minus those with A and B together: \\(${n}!-${n - 1}!\\times2!=${tx(fact(n))}-${tx(fact(n - 1) * 2)}=${tx(total)}\\).`; }
  if (c === "end") { total = 2 * fact(n - 1); html = `Place A first: 2 choices (left end or right end). Then arrange the other \\(${n - 1}\\) people: \\(2\\times${n - 1}!=${tx(total)}\\).`; }
  if (c === "order") { total = fact(n) / 2; html = `By symmetry, A is left of B in exactly half of all arrangements: \\(\\dfrac{${n}!}{2}=${tx(total)}\\).`; }
  if (c === "round") { total = fact(n - 1); html = `Around a round table only the order relative to each other matters. Fix A in one seat and arrange the rest: \\((${n}-1)!=${tx(total)}\\).`; }
  const tiles = c === "together" ? ["A", "B", ...people.slice(2)] : c === "end" ? ["A", ...people.slice(1)] : c === "apart" ? ["A", ...people.slice(2), "B"] : people;
  const R = 66, cx = 280, cy = 92;
  return (
    <WidgetCard title="Arrangements with conditions" subtitle="deal with the restriction first, then arrange everyone else">
      <Row>
        <Slider label="people" value={n} min={3} max={8} onChange={setN} color={C.blue} />
      </Row>
      <div style={{ marginTop: 8 }}>
        <Segmented value={c} onChange={setC} options={[{ value: "none", label: "no condition" }, { value: "together", label: "A, B together" }, { value: "apart", label: "A, B apart" }, { value: "end", label: "A at an end" }, { value: "order", label: "A left of B" }, { value: "round", label: "round table" }]} />
      </div>
      <svg viewBox="0 0 560 190" style={svgBox} role="img" aria-label="Arrangement">
        {c === "round" ? (
          <g>
            <circle cx={cx} cy={cy} r={R - 24} fill={C.amberSoft} stroke={C.amber} strokeWidth={2} />
            {people.map((p, i) => { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; const x = cx + R * 1.15 * Math.cos(a), y = cy + R * 1.15 * Math.sin(a); return <g key={p}><circle cx={x} cy={y} r={15} fill={p === "A" ? C.redSoft : C.blueSoft} stroke={p === "A" ? C.red : C.blue} strokeWidth={2} /><text x={x} y={y + 5} fontSize={14} fontWeight={800} textAnchor="middle" fill={p === "A" ? C.red : C.blue}>{p}</text></g>; })}
          </g>
        ) : (
          <g>
            {tiles.map((p, i) => { const tw = 50, x = 280 - (n * (tw + 8)) / 2 + i * (tw + 8); const hot = (c === "together" && i < 2) || (c === "end" && i === 0) || (c === "apart" && (p === "A" || p === "B")) || (c === "order" && (p === "A" || p === "B")); return <g key={i}><rect x={x} y={60} width={tw} height={tw} rx={7} fill={hot ? C.redSoft : C.blueSoft} stroke={hot ? C.red : C.blue} strokeWidth={2} /><text x={x + tw / 2} y={92} fontSize={18} fontWeight={800} textAnchor="middle" fill={hot ? C.red : C.blue}>{p}</text></g>; })}
            {c === "together" && <rect x={280 - (n * 58) / 2 - 5} y={54} width={2 * 58 + 2} height={62} rx={10} fill="none" stroke={C.red} strokeWidth={2.4} strokeDasharray="7 4" />}
          </g>
        )}
      </svg>
      <Readout tone="green"><MathText html={`${html} &nbsp; <strong>${tx(total)}</strong> arrangements.`} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.5 combinations */

function subsets(n: number, r: number): string[] {
  const L = "ABCDEFG".slice(0, n).split(""), out: string[] = [];
  const go = (s: number, cur: string) => { if (cur.length === r) { out.push(cur); return; } for (let i = s; i < n; i++) go(i + 1, cur + L[i]); };
  go(0, "");
  return out;
}
export function CombLab({ init = [5, 3] }: { init?: [number, number] }) {
  const [n, setN] = useState(init[0]), [r0, setR] = useState(init[1]);
  const r = Math.min(r0, n);
  const list = n <= 7 ? subsets(n, r) : [];
  return (
    <WidgetCard title="Combinations: order does not matter" subtitle="a selection, not an arrangement">
      <Row>
        <Slider label="objects n" value={n} min={1} max={12} onChange={setN} color={C.blue} />
        <Slider label="choose r" value={r} min={0} max={n} onChange={setR} color={C.red} />
      </Row>
      <Readout tone="green">
        <MathText html={`Arrangements: \\({}_{${n}}P_{${r}}=${tx(P(n, r))}\\). Each selection of ${r} objects can be ordered in \\(${r}!=${tx(fact(r))}\\) ways, so every selection was counted \\(${r}!\\) times: \\[{}_{${n}}C_{${r}}=\\binom{${n}}{${r}}=\\dfrac{{}_{${n}}P_{${r}}}{${r}!}=\\dfrac{${n}!}{${r}!\\,(${n}-${r})!}=${tx(Cn(n, r))}.\\] Notice \\(\\binom{${n}}{${r}}=\\binom{${n}}{${n - r}}=${tx(Cn(n, n - r))}\\): choosing ${r} to take is the same as choosing ${n - r} to leave.`} />
      </Readout>
      {list.length > 0 && list.length <= 40 && (
        <div style={{ marginTop: 10 }}>
          <div style={{ fontSize: 13.5, color: C.muted, marginBottom: 4 }}>All {list.length} selections from {"ABCDEFG".slice(0, n).split("").join(", ")}{r >= 2 && r <= 3 ? ` (each one stands for ${fact(r)} orders, e.g. ${list[0]} → ${distinctPerms(list[0]).join(", ")})` : ""}:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, fontFamily: "ui-monospace, monospace", fontSize: 13.5 }}>{list.map((x) => <span key={x} style={{ padding: "2px 7px", background: C.greenSoft, border: `1px solid ${C.green}`, borderRadius: 5 }}>{x || "∅"}</span>)}</div>
        </div>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.6 committees: cases vs complement */

export function CommitteeLab({ init = [5, 6, 4, 2] }: { init?: [number, number, number, number] }) {
  const [g, setG] = useState(init[0]), [b, setB] = useState(init[1]), [k0, setK] = useState(init[2]), [m0, setM] = useState(init[3]);
  const k = Math.min(k0, g + b), m = Math.min(m0, k);
  const rows = Array.from({ length: k + 1 }, (_, i) => ({ i, v: Cn(g, i) * Cn(b, k - i) }));
  const want = rows.filter((r) => r.i >= m), rest = rows.filter((r) => r.i < m);
  const all = Cn(g + b, k), direct = want.reduce((s, r) => s + r.v, 0), comp = rest.reduce((s, r) => s + r.v, 0);
  const max = Math.max(...rows.map((r) => r.v), 1);
  return (
    <WidgetCard title={`Committees with “at least” conditions`} subtitle="add the cases, or subtract the unwanted cases from the total">
      <Row>
        <Slider label="girls" value={g} min={1} max={8} onChange={setG} color={C.red} />
        <Slider label="boys" value={b} min={1} max={8} onChange={setB} color={C.blue} />
      </Row>
      <Row>
        <Slider label="committee" value={k} min={1} max={Math.min(8, g + b)} onChange={setK} color={C.violet} />
        <Slider label="at least … girls" value={m} min={0} max={k} onChange={setM} color={C.amber} />
      </Row>
      <svg viewBox={`0 0 560 ${36 + rows.length * 28}`} style={svgBox} role="img" aria-label="Cases by number of girls">
        {rows.map((r, j) => {
          const y = 14 + j * 28, ok = r.i >= m, w = (r.v / max) * 250;
          return (
            <g key={r.i}>
              <text x={150} y={y + 14} fontSize={12.5} textAnchor="end" fill={C.ink}>{r.i} girl{r.i === 1 ? "" : "s"}, {k - r.i} boy{k - r.i === 1 ? "" : "s"}</text>
              <rect x={158} y={y} width={Math.max(2, w)} height={20} rx={3} fill={ok ? C.greenSoft : C.panel} stroke={ok ? C.green : C.faint} />
              <text x={164 + Math.max(2, w)} y={y + 14} fontSize={12} fontWeight={700} fill={ok ? C.green : C.faint}>{`C(${g},${r.i})·C(${b},${k - r.i}) = ${r.v.toLocaleString("en-US")}`}</text>
            </g>
          );
        })}
      </svg>
      <Readout tone="green">
        <MathText html={`<strong>Direct (cases):</strong> \\(${want.map((r) => tx(r.v)).join("+") || "0"}=${tx(direct)}\\). &nbsp; <strong>Complement:</strong> all committees \\(\\binom{${g + b}}{${k}}=${tx(all)}\\) minus the unwanted cases \\(${rest.map((r) => tx(r.v)).join("+") || "0"}\\) gives \\(${tx(all)}-${tx(comp)}=${tx(all - comp)}\\). ${want.length > rest.length ? "Here the complement has fewer cases, so it is quicker." : "Here the direct method has fewer cases."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.7 Pascal's triangle and street paths */

export function PascalPaths({ init = [4, 3] }: { init?: [number, number] }) {
  const [w, setW] = useState(init[0]), [h, setH] = useState(init[1]);
  const [bx, setBx] = useState(-1);
  const u = 52, L = 30, T = 24, W = L + w * u + 50, H = T + h * u + 34;
  const X = (x: number) => L + x * u, Y = (y: number) => T + (h - y) * u;
  const block = bx >= 0 && bx < w ? [bx, Math.min(1, h)] : null; // blocked intersection (avoid it)
  const cnt: number[][] = Array.from({ length: w + 1 }, () => Array(h + 1).fill(0));
  for (let x = 0; x <= w; x++) for (let y = 0; y <= h; y++) {
    if (block && x === block[0] && y === block[1]) { cnt[x][y] = 0; continue; }
    cnt[x][y] = !x && !y ? 1 : (x ? cnt[x - 1][y] : 0) + (y ? cnt[x][y - 1] : 0);
  }
  return (
    <WidgetCard title="Paths on a street grid" subtitle="each corner = paths from the left + paths from below (Pascal's rule)">
      <Row>
        <Slider label="blocks east" value={w} min={1} max={7} onChange={(v) => { setW(v); setBx(-1); }} color={C.blue} />
        <Slider label="blocks north" value={h} min={1} max={5} onChange={(v) => { setH(v); setBx(-1); }} color={C.red} />
      </Row>
      <Segmented value={bx} onChange={setBx} label="avoid a corner:" options={[{ value: -1, label: "none" }, ...Array.from({ length: w }, (_, i) => ({ value: i, label: `(${i}, ${Math.min(1, h)})` })).filter((o) => o.value > 0)]} />
      <svg viewBox={`0 0 ${W} ${H}`} style={{ ...svgBox, maxWidth: Math.min(560, W * 1.15) }} role="img" aria-label="Street grid with path counts">
        {Array.from({ length: h + 1 }, (_, y) => <line key={`h${y}`} x1={X(0)} y1={Y(y)} x2={X(w)} y2={Y(y)} stroke={C.faint} strokeWidth={2} />)}
        {Array.from({ length: w + 1 }, (_, x) => <line key={`v${x}`} x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(h)} stroke={C.faint} strokeWidth={2} />)}
        {cnt.flatMap((col, x) => col.map((v, y) => {
          const bl = block && x === block[0] && y === block[1];
          return <g key={`${x}-${y}`}><circle cx={X(x)} cy={Y(y)} r={13} fill={bl ? C.redSoft : x === w && y === h ? C.greenSoft : "#fff"} stroke={bl ? C.red : C.blue} strokeWidth={1.5} /><text x={X(x)} y={Y(y) + 4} fontSize={v > 99 ? 9.5 : 12} fontWeight={800} textAnchor="middle" fill={bl ? C.red : C.blue}>{bl ? "✕" : v}</text></g>;
        }))}
        <text x={X(0) - 4} y={Y(0) + 28} fontSize={13} fontWeight={800} fill={C.green}>A</text>
        <text x={X(w) + 18} y={Y(h) - 8} fontSize={13} fontWeight={800} fill={C.red}>B</text>
      </svg>
      <Readout tone="green">
        <MathText html={block
          ? `Avoiding the red corner: \\(${cnt[w][h]}\\) paths. Check with the complement: all paths \\(\\binom{${w + h}}{${w}}=${Cn(w + h, w)}\\) minus paths through \\((${block[0]},${block[1]})\\): \\(\\binom{${block[0] + block[1]}}{${block[0]}}\\binom{${w - block[0] + h - block[1]}}{${w - block[0]}}=${Cn(block[0] + block[1], block[0]) * Cn(w - block[0] + h - block[1], w - block[0])}\\).`
          : `Every shortest path is ${w} moves east (E) and ${h} moves north (N) in some order: choose which ${w} of the ${w + h} moves are E, so there are \\(\\binom{${w + h}}{${w}}=${Cn(w + h, w)}\\) paths. The corner numbers are Pascal's triangle turned on its side.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.8 binomial theorem */

export function BinomialExpand({ init = [1, 2, 4] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [n, setN] = useState(init[2]), [k0, setK] = useState(1);
  const k = Math.min(k0, n);
  const term = (j: number) => Cn(n, j) * a ** (n - j) * b ** j;
  const pw = (base: string, e: number) => (e === 0 ? "" : e === 1 ? base : `${base}^{${e}}`);
  const sgnTerm = (j: number) => { const c = term(j); if (c === 0) return ""; const xs = pw("x", n - j); const abs = Math.abs(c); const body = (abs === 1 && xs ? "" : tx(abs)) + xs; return `${c < 0 ? "-" : "+"}${body}`; };
  const expansion = Array.from({ length: n + 1 }, (_, j) => sgnTerm(j)).join("").replace(/^\+/, "") || "0";
  const ax = a === 1 ? "x" : a === -1 ? "-x" : `${a}x`;
  const bt = b < 0 ? `-${-b}` : `+${b}`;
  return (
    <WidgetCard title="The binomial theorem" subtitle="coefficients come from row n of Pascal's triangle">
      <Row>
        <Slider label="a (in ax)" value={a} min={-3} max={3} onChange={(v) => setA(v === 0 ? 1 : v)} color={C.blue} />
        <Slider label="b" value={b} min={-3} max={3} onChange={(v) => setB(v === 0 ? 1 : v)} color={C.red} />
      </Row>
      <Row>
        <Slider label="power n" value={n} min={1} max={8} onChange={setN} color={C.violet} />
        <Slider label="term k+1" value={k} min={0} max={n} onChange={setK} color={C.amber} format={(v) => `t${v + 1}`} />
      </Row>
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        {Array.from({ length: n + 1 }, (_, j) => <span key={j} style={chip(j === k, C.amber)}>{Cn(n, j)}</span>)}
        <div style={{ fontSize: 12.5, color: C.muted }}>row {n} of Pascal's triangle</div>
      </div>
      <Readout tone="green">
        <MathText html={`\\[(${ax}${bt})^{${n}}=${expansion}\\] Term \\(t_{${k + 1}}=\\binom{${n}}{${k}}(${ax})^{${n - k}}(${b})^{${k}}=${tx(Cn(n, k))}\\cdot${a < 0 ? `(${a})` : a}^{${n - k}}\\cdot${b < 0 ? `(${b})` : b}^{${k}}\\,${pw("x", n - k)}=${tx(term(k))}${pw("x", n - k)}\\). The powers of \\(x\\) fall from ${n} to 0 while the powers of the second term rise from 0 to ${n}; there are \\(n+1=${n + 1}\\) terms.`} />
      </Readout>
    </WidgetCard>
  );
}
