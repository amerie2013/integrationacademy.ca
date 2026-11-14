"use client";

// MCV4U chapter 8 (lines and planes) explorers: vector, parametric and scalar equations of lines in two- and
// three-space, planes from a normal, intersections of two lines (including skew lines), a line meeting a plane,
// and the configurations of three planes.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { useT } from "@/lib/lang";
import { Plane, r2, type View } from "./Systems";

type XY = [number, number];
type V3 = [number, number, number];
const RAD = Math.PI / 180;
const V: View = { xmin: -6.5, xmax: 6.5, ymin: -5, ymax: 5 };
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sc = (k: number, a: V3): V3 => [k * a[0], k * a[1], k * a[2]];
const mag = (a: V3) => Math.sqrt(dot(a, a));
const unit = (a: V3): V3 => { const m = mag(a) || 1; return sc(1 / m, a); };
const fmt = (v: number) => (Math.abs(v) < 0.005 ? "0" : String(r2(v)));
const vec = (a: number[]) => `[${a.map(fmt).join(", ")}]`;
const signed = (v: number, first = false) => (v < 0 ? `-${fmt(-v)}` : `${first ? "" : "+"}${fmt(v)}`);

/* ---------------------------------------------------------------- shared three-space view */

function Space({ az, el, children, label, s = 30 }: { az: number; el: number; children: (P: (p: V3) => XY) => ReactNode; label: string; s?: number }) {
  const W = 520, H = 400, cx = 260, cy = 220;
  const P = ([x, y, z]: V3): XY => {
    const sx = -x * Math.sin(az * RAD) + y * Math.cos(az * RAD);
    const depth = x * Math.cos(az * RAD) + y * Math.sin(az * RAD);
    return [cx + s * sx, cy - s * (z * Math.cos(el * RAD) - depth * Math.sin(el * RAD))];
  };
  const ax: [V3, string][] = [[[6, 0, 0], "x"], [[0, 6, 0], "y"], [[0, 0, 6], "z"]];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto", background: "#fff", border: `1px solid ${C.line}`, borderRadius: 8 }} role="img" aria-label={label}>
      {ax.map(([p, t]) => { const a = P(p), b = P(sc(-0.6, p)), o = P([0, 0, 0]); return <g key={t}>
        <line x1={o[0]} y1={o[1]} x2={b[0]} y2={b[1]} stroke={C.faint} strokeDasharray="4 4" />
        <line x1={o[0]} y1={o[1]} x2={a[0]} y2={a[1]} stroke={C.muted} strokeWidth={1.5} />
        <text x={a[0] + 6} y={a[1] + 4} fontSize={14} fontWeight={700} fill={C.muted}>{t}</text></g>; })}
      {children(P)}
    </svg>
  );
}
const ViewSliders = ({ az, el, setAz, setEl }: { az: number; el: number; setAz: (v: number) => void; setEl: (v: number) => void }) => {
  const tr = useT();
  return <Row gap={10}><Slider label={tr("turn view (°)", "tourner la vue (°)")} value={az} min={0} max={90} step={1} onChange={setAz} color={C.faint} /><Slider label={tr("tilt view (°)", "incliner la vue (°)")} value={el} min={5} max={60} step={1} onChange={setEl} color={C.faint} /></Row>;
};
function Seg3({ P, a, b, color, width = 2.6, dash }: { P: (p: V3) => XY; a: V3; b: V3; color: string; width?: number; dash?: boolean }) {
  const p = P(a), q = P(b);
  return <line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={color} strokeWidth={width} strokeDasharray={dash ? "6 4" : undefined} />;
}
function Dot3({ P, p, color, label }: { P: (p: V3) => XY; p: V3; color: string; label?: string }) {
  const [x, y] = P(p);
  return <g><circle cx={x} cy={y} r={5} fill={color} />{label && <text x={x + 8} y={y - 6} fontSize={13} fontWeight={700} fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}</g>;
}
/** a square patch of the plane n · r = d, centred at the point of the plane nearest the origin (shifted by c) */
function PlanePatch({ P, n, d, k = 3.2, color, c }: { P: (p: V3) => XY; n: V3; d: number; k?: number; color: string; c?: V3 }) {
  const nn = unit(n), centre = c ?? sc(d / dot(n, n), n);
  const helper: V3 = Math.abs(nn[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0];
  const u = unit(cross(nn, helper)), v = cross(nn, u);
  const pts = [[-k, -k], [k, -k], [k, k], [-k, k]].map(([s, t]) => P(add(centre, add(sc(s, u), sc(t, v)))));
  return <polygon points={pts.map((p) => p.join(",")).join(" ")} fill={color} fillOpacity={0.28} stroke={color} strokeWidth={1.4} />;
}

/* ---------------------------------------------------------------- 8.1 equations of lines */

export function LineLab({ init = { mode: "2d" as "2d" | "3d" } }: { init?: { mode: "2d" | "3d" } }) {
  const tr = useT();
  const [mode, setMode] = useState<"2d" | "3d">(init.mode);
  const [px, setPx] = useState(-2), [py, setPy] = useState(1), [pz, setPz] = useState(1);
  const [mx, setMx] = useState(3), [my, setMy] = useState(1), [mz, setMz] = useState(1);
  const [t, setT] = useState(1);
  const [az, setAz] = useState(30), [el, setEl] = useState(22);
  if (mode === "2d") {
    const pt: XY = [px + t * mx, py + t * my];
    const A = my, B = -mx, Cc = -(A * px + B * py);
    return (
      <WidgetCard title={tr("Equations of a line", "Équations d'une droite")} subtitle={tr("A point and a direction fix a line: r = r₀ + t m. Each value of t gives one point", "Un point et une direction déterminent une droite : r = r₀ + t m. Chaque valeur de t donne un point")}>
        <Segmented options={[{ value: "2d", label: tr("two-space", "plan (2D)") }, { value: "3d", label: tr("three-space", "espace (3D)") }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label={tr("point x₀", "point x₀")} value={px} min={-5} max={5} step={0.5} onChange={setPx} color={C.blue} /><Slider label={tr("point y₀", "point y₀")} value={py} min={-4} max={4} step={0.5} onChange={setPy} color={C.blue} /></Row>
        <Row gap={10}><Slider label={tr("direction m₁", "direction m₁")} value={mx} min={-4} max={4} step={0.5} onChange={setMx} color={C.violet} /><Slider label={tr("direction m₂", "direction m₂")} value={my} min={-4} max={4} step={0.5} onChange={setMy} color={C.violet} /></Row>
        <Slider label={tr("parameter t", "paramètre t")} value={t} min={-3} max={3} step={0.1} onChange={setT} color={C.red} />
        <Plane view={V} label={tr("the line (violet), the point r₀ (blue), the direction m and the point at t (red)", "la droite (violet), le point r₀ (bleu), la direction m et le point en t (rouge)")} step={1}>
          {(X, Y) => <>
            {(mx !== 0 || my !== 0) && <line x1={X(px - 20 * mx)} y1={Y(py - 20 * my)} x2={X(px + 20 * mx)} y2={Y(py + 20 * my)} stroke={C.violet} strokeWidth={2.4} />}
            <line x1={X(px)} y1={Y(py)} x2={X(px + mx)} y2={Y(py + my)} stroke={C.green} strokeWidth={4} />
            <circle cx={X(px)} cy={Y(py)} r={5} fill={C.blue} /><circle cx={X(pt[0])} cy={Y(pt[1])} r={6} fill={C.red} />
          </>}
        </Plane>
        <Readout tone="blue">
          <MathText block html={tr(`Vector: \\(\\vec r=[${fmt(px)},${fmt(py)}]+t[${fmt(mx)},${fmt(my)}]\\). Parametric: \\(x=${fmt(px)}${signed(mx)}t,\\ y=${fmt(py)}${signed(my)}t\\). At \\(t=${fmt(t)}\\): \\((${fmt(pt[0])},${fmt(pt[1])})\\).`, `Vectorielle : \\(\\vec r=[${fmt(px)},${fmt(py)}]+t[${fmt(mx)},${fmt(my)}]\\). Paramétriques : \\(x=${fmt(px)}${signed(mx)}t,\\ y=${fmt(py)}${signed(my)}t\\). En \\(t=${fmt(t)}\\) : \\((${fmt(pt[0])},${fmt(pt[1])})\\).`)} />
          {(mx !== 0 || my !== 0) && <MathText block html={tr(`Scalar: \\(${fmt(A)}x${signed(B)}y${signed(Cc)}=0\\) — its normal \\([${fmt(A)},${fmt(B)}]\\) is perpendicular to the direction \\([${fmt(mx)},${fmt(my)}]\\).`, `Cartésienne : \\(${fmt(A)}x${signed(B)}y${signed(Cc)}=0\\) — son vecteur normal \\([${fmt(A)},${fmt(B)}]\\) est perpendiculaire au vecteur directeur \\([${fmt(mx)},${fmt(my)}]\\).`)} />}
        </Readout>
      </WidgetCard>
    );
  }
  const p0: V3 = [px, py, pz], m: V3 = [mx, my, mz], pt = add(p0, sc(t, m));
  return (
    <WidgetCard title={tr("A line in three-space", "Une droite dans l'espace")} subtitle={tr("In three-space a line has vector and parametric equations, but no single scalar equation", "Dans l'espace, une droite a des équations vectorielle et paramétriques, mais pas une seule équation cartésienne")}>
      <Segmented options={[{ value: "2d", label: tr("two-space", "plan (2D)") }, { value: "3d", label: tr("three-space", "espace (3D)") }]} value={mode} onChange={setMode} />
      <Row gap={10}><Slider label="x₀" value={px} min={-4} max={4} step={0.5} onChange={setPx} color={C.blue} /><Slider label="y₀" value={py} min={-4} max={4} step={0.5} onChange={setPy} color={C.blue} /><Slider label="z₀" value={pz} min={-3} max={4} step={0.5} onChange={setPz} color={C.blue} /></Row>
      <Row gap={10}><Slider label="m₁" value={mx} min={-3} max={3} step={0.5} onChange={setMx} color={C.violet} /><Slider label="m₂" value={my} min={-3} max={3} step={0.5} onChange={setMy} color={C.violet} /><Slider label="m₃" value={mz} min={-3} max={3} step={0.5} onChange={setMz} color={C.violet} /></Row>
      <Slider label={tr("parameter t", "paramètre t")} value={t} min={-2} max={2} step={0.1} onChange={setT} color={C.red} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label={tr("line in three-space", "droite dans l'espace")}>
        {(P) => <>
          <Seg3 P={P} a={add(p0, sc(-3, m))} b={add(p0, sc(3, m))} color={C.violet} />
          <Seg3 P={P} a={p0} b={add(p0, m)} color={C.green} width={4} />
          <Dot3 P={P} p={p0} color={C.blue} label="r₀" /><Dot3 P={P} p={pt} color={C.red} label={`t = ${fmt(t)}`} />
        </>}
      </Space>
      <Readout tone="blue">
        <MathText block html={`\\(\\vec r=${vec(p0)}+t${vec(m)}\\); ${tr("parametric", "paramétriques")} \\(x=${fmt(px)}${signed(mx)}t,\\ y=${fmt(py)}${signed(my)}t,\\ z=${fmt(pz)}${signed(mz)}t\\). ${tr("At", "En")} \\(t=${fmt(t)}\\)${tr(":", " :")} \\(${vec(pt).replace("[", "(").replace("]", ")")}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.2 / 8.3 planes */

export function PlaneLab({ init = { a: 2, b: 3, c: 4, d: 12 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const tr = useT();
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [az, setAz] = useState(30), [el, setEl] = useState(22);
  const n: V3 = [a, b, c], nn = mag(n);
  const foot = nn > 0 ? sc(d / (nn * nn), n) : ([0, 0, 0] as V3);
  const ints = [a, b, c].map((k) => (k !== 0 ? d / k : null));
  return (
    <WidgetCard title={tr("A plane and its normal", "Un plan et son vecteur normal")} subtitle={tr("Ax + By + Cz = D is the plane perpendicular to the normal n = [A, B, C]; D slides it along n", "Ax + By + Cz = D est le plan perpendiculaire au vecteur normal n = [A, B, C]; D le fait glisser le long de n")}>
      <Row gap={10}>
        <Slider label="A" value={a} min={-4} max={4} step={0.5} onChange={setA} color={C.green} />
        <Slider label="B" value={b} min={-4} max={4} step={0.5} onChange={setB} color={C.green} />
        <Slider label="C" value={c} min={-4} max={4} step={0.5} onChange={setC} color={C.green} />
      </Row>
      <Slider label="D" value={d} min={-15} max={15} step={1} onChange={setD} color={C.blue} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label={tr("plane (blue) with its normal (green)", "plan (bleu) avec son vecteur normal (vert)")}>
        {(P) => nn > 0 ? <>
          <PlanePatch P={P} n={n} d={d} color={C.blue} />
          <Seg3 P={P} a={foot} b={add(foot, sc(2 / nn, n))} color={C.green} width={3.4} />
          <Dot3 P={P} p={foot} color={C.blue} label={tr("closest point to O", "point le plus proche de O")} />
          {ints.map((v, i) => v !== null && Math.abs(v) < 7 ? <Dot3 key={i} P={P} p={[i === 0 ? v : 0, i === 1 ? v : 0, i === 2 ? v : 0] as V3} color={C.red} /> : null)}
        </> : null}
      </Space>
      <Readout tone="blue">
        <MathText block html={nn > 0 ? tr(`\\(${fmt(a)}x${signed(b)}y${signed(c)}z=${fmt(d)}\\), normal \\(${vec(n)}\\). Intercepts: x ${ints[0] === null ? "none" : fmt(ints[0])}, y ${ints[1] === null ? "none" : fmt(ints[1])}, z ${ints[2] === null ? "none" : fmt(ints[2])}. Distance from the origin \\(\\frac{|D|}{|\\vec n|}=${fmt(Math.abs(d) / nn)}\\).`, `\\(${fmt(a)}x${signed(b)}y${signed(c)}z=${fmt(d)}\\), vecteur normal \\(${vec(n)}\\). Coordonnées à l'origine : x ${ints[0] === null ? "aucune" : fmt(ints[0])}, y ${ints[1] === null ? "aucune" : fmt(ints[1])}, z ${ints[2] === null ? "aucune" : fmt(ints[2])}. Distance à l'origine \\(\\frac{|D|}{|\\vec n|}=${fmt(Math.abs(d) / nn)}\\).`) : tr("Choose a nonzero normal.", "Choisis un vecteur normal non nul.")} />
        <MathText block html={tr("Change only D: the plane moves but stays parallel, because the normal is unchanged. Scale A, B, C and D together: the plane does not move at all.", "Change seulement D : le plan se déplace mais reste parallèle, car le vecteur normal ne change pas. Multiplie A, B, C et D par un même facteur : le plan ne bouge pas du tout.")} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.4 intersections of lines */

export function LinesMeetLab({ init = { mode: "2d" as "2d" | "3d" } }: { init?: { mode: "2d" | "3d" } }) {
  const tr = useT();
  const [mode, setMode] = useState<"2d" | "3d">(init.mode);
  const [ang1, setAng1] = useState(20), [ang2, setAng2] = useState(110), [shift, setShift] = useState(1);
  const [h, setH] = useState(1.5), [az, setAz] = useState(35), [el, setEl] = useState(20);
  if (mode === "2d") {
    const m1: XY = [Math.cos(ang1 * RAD), Math.sin(ang1 * RAD)], m2: XY = [Math.cos(ang2 * RAD), Math.sin(ang2 * RAD)];
    const p1: XY = [-1, -1], p2: XY = [2, shift];
    const det = m1[0] * -m2[1] - -m2[0] * m1[1];
    const rx = p2[0] - p1[0], ry = p2[1] - p1[1];
    const parallel = Math.abs(det) < 1e-6;
    const s = parallel ? 0 : (rx * -m2[1] - -m2[0] * ry) / det;
    const X0: XY = [p1[0] + s * m1[0], p1[1] + s * m1[1]];
    const coincident = parallel && Math.abs(rx * m1[1] - ry * m1[0]) < 1e-6;
    return (
      <WidgetCard title={tr("Where do two lines meet?", "Où deux droites se coupent-elles?")} subtitle={tr("In two-space, two lines meet once, never (parallel), or everywhere (coincident)", "Dans le plan, deux droites se coupent une fois, jamais (parallèles) ou partout (confondues)")}>
        <Segmented options={[{ value: "2d", label: tr("two-space", "plan (2D)") }, { value: "3d", label: tr("three-space (skew lines)", "espace (droites gauches)") }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label={tr("line 1 direction (°)", "direction de la droite 1 (°)")} value={ang1} min={0} max={179} step={1} onChange={setAng1} color={C.violet} /><Slider label={tr("line 2 direction (°)", "direction de la droite 2 (°)")} value={ang2} min={0} max={179} step={1} onChange={setAng2} color={C.blue} /></Row>
        <Slider label={tr("line 2 point height", "hauteur du point de la droite 2")} value={shift} min={-4} max={4} step={0.5} onChange={setShift} color={C.blue} />
        <Plane view={V} label={tr("line 1 (violet) and line 2 (blue)", "droite 1 (violet) et droite 2 (bleu)")} step={1}>
          {(X, Y) => <>
            <line x1={X(p1[0] - 20 * m1[0])} y1={Y(p1[1] - 20 * m1[1])} x2={X(p1[0] + 20 * m1[0])} y2={Y(p1[1] + 20 * m1[1])} stroke={C.violet} strokeWidth={2.6} />
            <line x1={X(p2[0] - 20 * m2[0])} y1={Y(p2[1] - 20 * m2[1])} x2={X(p2[0] + 20 * m2[0])} y2={Y(p2[1] + 20 * m2[1])} stroke={C.blue} strokeWidth={2.6} strokeDasharray={coincident ? "8 6" : undefined} />
            {!parallel && <circle cx={X(X0[0])} cy={Y(X0[1])} r={6} fill={C.red} />}
          </>}
        </Plane>
        <Readout tone={parallel ? "amber" : "green"}>
          <MathText block html={parallel ? (coincident ? tr("Same direction and a shared point: the lines coincide — infinitely many intersection points.", "Même direction et un point commun : les droites sont confondues — une infinité de points d'intersection.") : tr("Same direction, no shared point: the lines are parallel and never meet.", "Même direction, aucun point commun : les droites sont parallèles et ne se coupent jamais.")) : tr(`The direction vectors are not parallel, so the lines meet at exactly one point, about \\((${fmt(X0[0])},${fmt(X0[1])})\\).`, `Les vecteurs directeurs ne sont pas parallèles, donc les droites se coupent en un seul point, environ \\((${fmt(X0[0])},${fmt(X0[1])})\\).`)} />
        </Readout>
      </WidgetCard>
    );
  }
  // three-space: line 1 along x through the origin; line 2 along y, raised by h
  const dist = Math.abs(h);
  return (
    <WidgetCard title={tr("Skew lines", "Droites gauches")} subtitle={tr("In three-space, lines that are not parallel may still miss each other: they are skew", "Dans l'espace, des droites non parallèles peuvent quand même ne pas se couper : elles sont gauches")}>
      <Segmented options={[{ value: "2d", label: tr("two-space", "plan (2D)") }, { value: "3d", label: tr("three-space (skew lines)", "espace (droites gauches)") }]} value={mode} onChange={setMode} />
      <Slider label={tr("height of line 2 above line 1", "hauteur de la droite 2 au-dessus de la droite 1")} value={h} min={-3} max={3} step={0.1} onChange={setH} color={C.blue} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label={tr("line 1 along the x-axis direction and line 2 along the y-axis direction, raised", "droite 1 dans la direction de l'axe des x et droite 2 dans la direction de l'axe des y, surélevée")}>
        {(P) => <>
          <Seg3 P={P} a={[-4, 1, 0]} b={[4, 1, 0]} color={C.violet} />
          <Seg3 P={P} a={[1, -4, h]} b={[1, 4, h]} color={C.blue} />
          <Seg3 P={P} a={[1, 1, 0]} b={[1, 1, h]} color={C.red} width={2} dash />
          <Dot3 P={P} p={[1, 1, 0]} color={C.violet} /><Dot3 P={P} p={[1, 1, h]} color={C.blue} />
        </>}
      </Space>
      <Readout tone={dist < 0.05 ? "green" : "amber"}>
        <MathText block html={dist < 0.05 ? tr("Height 0: the lines meet at (1, 1, 0).", "Hauteur 0 : les droites se coupent en (1, 1, 0).") : tr(`Line 1: \\(\\vec r=[0,1,0]+s[1,0,0]\\); line 2: \\(\\vec r=[1,0,${fmt(h)}]+t[0,1,0]\\). Not parallel, yet they never meet — they are skew. The shortest distance between them is \\(${fmt(dist)}\\), along \\([1,0,0]\\times[0,1,0]=[0,0,1]\\).`, `Droite 1 : \\(\\vec r=[0,1,0]+s[1,0,0]\\); droite 2 : \\(\\vec r=[1,0,${fmt(h)}]+t[0,1,0]\\). Elles ne sont pas parallèles, pourtant elles ne se coupent jamais — elles sont gauches. La plus courte distance entre elles est \\(${fmt(dist)}\\), selon \\([1,0,0]\\times[0,1,0]=[0,0,1]\\).`)} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.5 a line and a plane */

export function LinePlaneLab({ init = { m: [1, 1, -1] as V3 } }: { init?: { m: V3 } }) {
  const tr = useT();
  const [m, setM] = useState<V3>(init.m);
  const [pz, setPz] = useState(3);
  const [az, setAz] = useState(30), [el, setEl] = useState(20);
  const n: V3 = [1, 1, 2], d = 4, p0: V3 = [0, 0, pz];
  const nd = dot(n, m), off = dot(n, p0) - d;
  const t = Math.abs(nd) > 1e-9 ? -off / nd : NaN, X0 = add(p0, sc(t, m));
  const set = (i: number) => (v: number) => setM((p) => { const q = [...p] as V3; q[i] = v; return q; });
  return (
    <WidgetCard title={tr("A line meeting a plane", "Une droite qui coupe un plan")} subtitle={tr("Substitute the parametric equations of the line into the plane's equation and solve for t", "Substitue les équations paramétriques de la droite dans l'équation du plan et résous pour t")}>
      <Row gap={10}>{[0, 1, 2].map((i) => <Slider key={i} label={`${tr("direction", "direction")} m${i + 1}`} value={m[i]} min={-3} max={3} step={0.5} onChange={set(i)} color={C.violet} />)}</Row>
      <Slider label={tr("line passes through (0, 0, z₀): z₀", "la droite passe par (0, 0, z₀) : z₀")} value={pz} min={-2} max={5} step={0.5} onChange={setPz} color={C.blue} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label={tr("plane x + y + 2z = 4 (blue) and the line (violet)", "plan x + y + 2z = 4 (bleu) et la droite (violet)")}>
        {(P) => <>
          <PlanePatch P={P} n={n} d={d} color={C.blue} />
          <Seg3 P={P} a={add(p0, sc(-3, m))} b={add(p0, sc(3, m))} color={C.violet} />
          <Dot3 P={P} p={p0} color={C.blue} label="(0, 0, z₀)" />
          {Number.isFinite(t) && Math.abs(t) < 6 && <Dot3 P={P} p={X0} color={C.red} label={tr("meets", "intersection")} />}
        </>}
      </Space>
      <Readout tone={Number.isFinite(t) ? "green" : "amber"}>
        <MathText block html={tr(`Plane \\(x+y+2z=4\\), normal \\([1,1,2]\\). Substituting \\(\\vec r=[0,0,${fmt(pz)}]+t${vec(m)}\\): \\(${fmt(nd)}t${signed(dot(n, p0))}=4\\).`, `Plan \\(x+y+2z=4\\), vecteur normal \\([1,1,2]\\). En substituant \\(\\vec r=[0,0,${fmt(pz)}]+t${vec(m)}\\) : \\(${fmt(nd)}t${signed(dot(n, p0))}=4\\).`)} />
        <MathText block html={Number.isFinite(t) ? tr(`One solution, \\(t=${fmt(t)}\\): the line meets the plane at \\(${vec(X0).replace("[", "(").replace("]", ")")}\\).`, `Une solution, \\(t=${fmt(t)}\\) : la droite coupe le plan en \\(${vec(X0).replace("[", "(").replace("]", ")")}\\).`) : Math.abs(off) < 1e-9 ? tr("0t = 0: every t works — the line lies in the plane.", "0t = 0 : toute valeur de t convient — la droite est contenue dans le plan.") : tr("0t = nonzero: no solution — the line is parallel to the plane (its direction is perpendicular to the normal).", "0t = valeur non nulle : aucune solution — la droite est parallèle au plan (son vecteur directeur est perpendiculaire au vecteur normal).")} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.6 three planes */

const CONFIGS: Record<string, { label: string; labelFr: string; planes: [V3, number][]; text: string; textFr: string }> = {
  point: { label: "one point", labelFr: "un point", planes: [[[1, 0, 0], 1], [[0, 1, 0], 1], [[0, 0, 1], 1]], text: "Normals not coplanar (n₁ · (n₂ × n₃) ≠ 0): exactly one point, here (1, 1, 1).", textFr: "Vecteurs normaux non coplanaires (n₁ · (n₂ × n₃) ≠ 0) : exactement un point, ici (1, 1, 1)." },
  line: { label: "a line (sheaf)", labelFr: "une droite (faisceau)", planes: [[[0, 0, 1], 0], [[0, 1, 1], 0], [[0, 1, -1], 0]], text: "Normals coplanar and the planes share a line: infinitely many points on the x-axis.", textFr: "Vecteurs normaux coplanaires et les plans ont une droite commune : une infinité de points sur l'axe des x." },
  prism: { label: "a triangular prism", labelFr: "un prisme triangulaire", planes: [[[0, 0, 1], 0], [[0, 1, 1], 2], [[0, -1, 1], 2]], text: "Normals coplanar, but each pair meets in a different parallel line: no common point.", textFr: "Vecteurs normaux coplanaires, mais chaque paire se coupe selon une droite parallèle différente : aucun point commun." },
  parallel: { label: "three parallel planes", labelFr: "trois plans parallèles", planes: [[[0, 0, 1], -1.5], [[0, 0, 1], 0], [[0, 0, 1], 1.5]], text: "All normals parallel, different D: no common point.", textFr: "Tous les vecteurs normaux sont parallèles, D différents : aucun point commun." },
  two: { label: "two parallel, one crossing", labelFr: "deux parallèles, un sécant", planes: [[[0, 0, 1], -1], [[0, 0, 1], 1.5], [[1, 0, 0], 0]], text: "Two parallel planes never meet, so the three have no common point (the third cuts each in a line).", textFr: "Deux plans parallèles ne se coupent jamais, donc les trois n'ont aucun point commun (le troisième coupe chacun selon une droite)." },
};
export function PlanesLab({ init = { config: "point" } }: { init?: { config: string } }) {
  const tr = useT();
  const [cfg, setCfg] = useState(init.config in CONFIGS ? init.config : "point");
  const [az, setAz] = useState(35), [el, setEl] = useState(22);
  const conf = CONFIGS[cfg];
  const cols = [C.blue, C.green, C.red];
  const [n1, n2, n3] = conf.planes.map((p) => p[0]);
  const triple = dot(n1, cross(n2, n3));
  return (
    <WidgetCard title={tr("How three planes can meet", "Comment trois plans peuvent se couper")} subtitle={tr("Three planes meet in a point, a line, a plane, or not at all. The normals tell you which", "Trois plans se coupent en un point, selon une droite, selon un plan, ou pas du tout. Les vecteurs normaux indiquent le cas")}>
      <Segmented options={Object.entries(CONFIGS).map(([k, v]) => ({ value: k, label: tr(v.label, v.labelFr) }))} value={cfg} onChange={setCfg} />
      <ViewSliders az={az} el={el} setAz={setAz} setEl={setEl} />
      <Space az={az} el={el} label={tr(`three planes: ${conf.label}`, `trois plans : ${conf.labelFr}`)}>
        {(P) => <>
          {conf.planes.map(([n, d], i) => <PlanePatch key={i} P={P} n={n} d={d} color={cols[i]} k={3} />)}
          {cfg === "point" && <Dot3 P={P} p={[1, 1, 1]} color={C.ink} label="(1, 1, 1)" />}
          {cfg === "line" && <Seg3 P={P} a={[-4, 0, 0]} b={[4, 0, 0]} color={C.ink} width={3.4} />}
        </>}
      </Space>
      <Readout tone={cfg === "point" || cfg === "line" ? "green" : "amber"}>
        <MathText block html={`${conf.planes.map(([n, d]) => `\\(${fmt(n[0])}x${signed(n[1])}y${signed(n[2])}z=${fmt(d)}\\)`).join(", ")}. \\(\\vec n_1\\cdot(\\vec n_2\\times\\vec n_3)=${fmt(triple)}\\).`} />
        <MathText block html={tr(conf.text, conf.textFr)} />
      </Readout>
    </WidgetCard>
  );
}
