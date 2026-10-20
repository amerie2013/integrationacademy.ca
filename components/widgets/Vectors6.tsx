"use client";

// MCV4U chapter 6 (geometric vectors) explorers: magnitude and direction (bearings, equal and opposite vectors),
// addition and subtraction (triangle and parallelogram), scalar multiples and linear combinations, resultants in
// navigation and forces, and resolution into rectangular components (including a ramp).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";

type XY = [number, number];
type Map2 = (v: number) => number;
const RAD = Math.PI / 180;
const V: View = { xmin: -6.5, xmax: 6.5, ymin: -5, ymax: 5 }; // 13 × 10 matches the 520 × 400 plane: equal scale
const polar = (m: number, deg: number): XY => [m * Math.cos(deg * RAD), m * Math.sin(deg * RAD)];
const mag = ([x, y]: XY) => Math.hypot(x, y);
const ang = ([x, y]: XY) => { const a = Math.atan2(y, x) / RAD; return a < 0 ? a + 360 : a; };
/** true bearing (clockwise from north) of a direction given as a math angle (counterclockwise from east) */
const bearing = (deg: number) => ((90 - deg) % 360 + 360) % 360;
const b3 = (deg: number) => String(Math.round(bearing(deg))).padStart(3, "0");
/** quadrant bearing such as N30°E */
function quad(deg: number) {
  const b = bearing(deg);
  if (b < 1e-9 || Math.abs(b - 360) < 1e-9) return "N";
  if (b <= 90) return Math.abs(b - 90) < 1e-9 ? "E" : `N${Math.round(b)}°E`;
  if (b <= 180) return Math.abs(b - 180) < 1e-9 ? "S" : `S${Math.round(180 - b)}°E`;
  if (b <= 270) return Math.abs(b - 270) < 1e-9 ? "W" : `S${Math.round(b - 180)}°W`;
  return `N${Math.round(360 - b)}°W`;
}

function Arrow({ X, Y, from, to, color, label, width = 3, dash }: { X: Map2; Y: Map2; from: XY; to: XY; color: string; label?: string; width?: number; dash?: boolean }) {
  const x1 = X(from[0]), y1 = Y(from[1]), x2 = X(to[0]), y2 = Y(to[1]);
  const L = Math.hypot(x2 - x1, y2 - y1);
  if (L < 1) return null;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, h = Math.min(13, L * 0.45);
  const bx = x2 - ux * h, by = y2 - uy * h;
  const mx = (x1 + x2) / 2 - uy * 14, my = (y1 + y2) / 2 + ux * 14;
  return <g>
    <line x1={x1} y1={y1} x2={bx} y2={by} stroke={color} strokeWidth={width} strokeDasharray={dash ? "7 5" : undefined} />
    <polygon points={`${x2},${y2} ${bx - uy * h * 0.42},${by + ux * h * 0.42} ${bx + uy * h * 0.42},${by - ux * h * 0.42}`} fill={color} />
    {label && <text x={mx} y={my + 4} fontSize={14} fontWeight={700} textAnchor="middle" fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}
  </g>;
}
function Arc({ X, Y, at, r, a, b, color, label }: { X: Map2; Y: Map2; at: XY; r: number; a: number; b: number; color: string; label?: string }) {
  let d = "";
  const n = 30;
  for (let i = 0; i <= n; i++) { const t = (a + ((b - a) * i) / n) * RAD; d += `${i ? "L" : "M"}${X(at[0] + r * Math.cos(t)).toFixed(1)},${Y(at[1] + r * Math.sin(t)).toFixed(1)} `; }
  const m = ((a + b) / 2) * RAD;
  return <g><path d={d} fill="none" stroke={color} strokeWidth={1.8} />{label && <text x={X(at[0] + (r + 0.55) * Math.cos(m))} y={Y(at[1] + (r + 0.55) * Math.sin(m)) + 4} fontSize={12} fontWeight={700} textAnchor="middle" fill={color}>{label}</text>}</g>;
}
const add = (p: XY, q: XY): XY => [p[0] + q[0], p[1] + q[1]];
const scale = (k: number, p: XY): XY => [k * p[0], k * p[1]];

/* ---------------------------------------------------------------- 6.1 magnitude, direction, bearings */

export function VectorBasics({ init = { m: 4, deg: 50, tx: -4, ty: -3 } }: { init?: { m: number; deg: number; tx: number; ty: number } }) {
  const [m, setM] = useState(init.m), [deg, setDeg] = useState(init.deg), [tx, setTx] = useState(init.tx), [ty, setTy] = useState(init.ty);
  const [show, setShow] = useState<"equal" | "opposite">("equal");
  const v = polar(m, deg);
  const tail: XY = [tx, ty];
  return (
    <WidgetCard title="A vector: magnitude and direction" subtitle="A vector is fixed by its length and direction only — moving it without turning or stretching gives an equal vector">
      <Row gap={10}>
        <Slider label="magnitude |v|" value={m} min={0.5} max={6} step={0.1} onChange={setM} color={C.violet} />
        <Slider label="angle from east (°)" value={deg} min={0} max={359} step={1} onChange={setDeg} color={C.violet} />
      </Row>
      <Row gap={10}>
        <Slider label="second tail x" value={tx} min={-6} max={6} step={0.5} onChange={setTx} color={C.blue} />
        <Slider label="second tail y" value={ty} min={-4.5} max={4.5} step={0.5} onChange={setTy} color={C.blue} />
      </Row>
      <Segmented options={[{ value: "equal", label: "equal vector" }, { value: "opposite", label: "opposite vector" }]} value={show} onChange={setShow} />
      <Plane view={V} label="vector v from the origin (violet) and a copy placed elsewhere (blue)" step={1}>
        {(X, Y) => <>
          <Arc X={X} Y={Y} at={[0, 0]} r={1} a={0} b={deg} color={C.amber} label={`${Math.round(deg)}°`} />
          <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(4.7)} stroke={C.green} strokeWidth={1.5} strokeDasharray="4 3" />
          <text x={X(0) + 6} y={Y(4.6)} fontSize={12} fontWeight={700} fill={C.green}>N</text>
          <Arrow X={X} Y={Y} from={[0, 0]} to={v} color={C.violet} label="v" />
          <Arrow X={X} Y={Y} from={tail} to={add(tail, show === "equal" ? v : scale(-1, v))} color={C.blue} label={show === "equal" ? "v" : "−v"} />
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText block html={`\\(|\\vec v|=${r2(m)}\\). Direction: ${Math.round(deg)}° counterclockwise from east, true bearing <strong>${b3(deg)}°</strong>, quadrant bearing <strong>${quad(deg)}</strong>.`} />
        <MathText block html={show === "equal" ? "The blue arrow has the same length and direction, so it is the same vector, wherever its tail is." : `\\(-\\vec v\\) has the same length but the opposite direction: bearing ${b3(deg + 180)}°.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 addition and subtraction */

export function VectorAddLab({ init = { a: 3.5, da: 20, b: 3, db: 110 } }: { init?: { a: number; da: number; b: number; db: number } }) {
  const [a, setA] = useState(init.a), [da, setDa] = useState(init.da), [b, setB] = useState(init.b), [db, setDb] = useState(init.db);
  const [mode, setMode] = useState<"tri" | "par" | "diff">("tri");
  const u = polar(a, da), v = polar(b, db);
  const s = mode === "diff" ? add(u, scale(-1, v)) : add(u, v);
  const between = Math.abs(((db - da) % 360 + 540) % 360 - 180); // angle between u and v, 0–180
  const tex = mode === "diff" ? "\\vec u-\\vec v" : "\\vec u+\\vec v";
  return (
    <WidgetCard title="Adding and subtracting vectors" subtitle="Tip to tail, or as the diagonal of a parallelogram; to subtract, add the opposite">
      <Row gap={10}>
        <Slider label="|u|" value={a} min={0.5} max={5} step={0.1} onChange={setA} color={C.violet} />
        <Slider label="u angle (°)" value={da} min={0} max={359} step={1} onChange={setDa} color={C.violet} />
      </Row>
      <Row gap={10}>
        <Slider label="|v|" value={b} min={0.5} max={5} step={0.1} onChange={setB} color={C.blue} />
        <Slider label="v angle (°)" value={db} min={0} max={359} step={1} onChange={setDb} color={C.blue} />
      </Row>
      <Segmented options={[{ value: "tri", label: "u + v (tip to tail)" }, { value: "par", label: "u + v (parallelogram)" }, { value: "diff", label: "u − v" }]} value={mode} onChange={setMode} />
      <Plane view={V} label="u (violet), v (blue), result (red)" step={1}>
        {(X, Y) => <>
          {mode === "tri" && <><Arrow X={X} Y={Y} from={[0, 0]} to={u} color={C.violet} label="u" /><Arrow X={X} Y={Y} from={u} to={s} color={C.blue} label="v" /></>}
          {mode === "par" && <>
            <Arrow X={X} Y={Y} from={[0, 0]} to={u} color={C.violet} label="u" /><Arrow X={X} Y={Y} from={[0, 0]} to={v} color={C.blue} label="v" />
            <Arrow X={X} Y={Y} from={v} to={s} color={C.violet} width={1.6} dash /><Arrow X={X} Y={Y} from={u} to={s} color={C.blue} width={1.6} dash />
          </>}
          {mode === "diff" && <>
            <Arrow X={X} Y={Y} from={[0, 0]} to={u} color={C.violet} label="u" /><Arrow X={X} Y={Y} from={[0, 0]} to={v} color={C.blue} label="v" />
            <Arrow X={X} Y={Y} from={u} to={s} color={C.blue} width={1.8} dash label="−v" />
            <Arrow X={X} Y={Y} from={v} to={u} color={C.amber} width={2} dash label="u − v" />
          </>}
          <Arrow X={X} Y={Y} from={[0, 0]} to={s} color={C.red} label={mode === "diff" ? "u − v" : "u + v"} width={3.4} />
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`Angle between \\(\\vec u\\) and \\(\\vec v\\): \\(${r2(between)}^\\circ\\). \\(|${tex}|=${r2(mag(s))}\\), direction \\(${r2(ang(s))}^\\circ\\) from east (bearing ${b3(ang(s))}°).`} />
        <MathText block html={mode === "diff"
          ? `Cosine law: \\(|\\vec u-\\vec v|^2=|\\vec u|^2+|\\vec v|^2-2|\\vec u||\\vec v|\\cos${r2(between)}^\\circ\\). The amber arrow shows \\(\\vec u-\\vec v\\) also runs from the tip of \\(\\vec v\\) to the tip of \\(\\vec u\\).`
          : `Cosine law: \\(|\\vec u+\\vec v|^2=|\\vec u|^2+|\\vec v|^2-2|\\vec u||\\vec v|\\cos(180^\\circ-${r2(between)}^\\circ)\\). Both constructions give the same red vector.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.3 scalar multiples and linear combinations */

export function ScalarLab({ init = { k: 2, s: 1, t: 1 } }: { init?: { k: number; s: number; t: number } }) {
  const [k, setK] = useState(init.k), [s, setS] = useState(init.s), [t, setT] = useState(init.t);
  const [mode, setMode] = useState<"mult" | "combo">("mult");
  const u: XY = [2, 1], v: XY = [-1, 1.5];
  const ku = scale(k, u), su = scale(s, u), w = add(su, scale(t, v));
  return (
    <WidgetCard title="Scalar multiples and linear combinations" subtitle="ku stretches u by |k| and reverses it when k < 0; su + tv can reach any point of the plane">
      <Segmented options={[{ value: "mult", label: "k·u" }, { value: "combo", label: "s·u + t·v" }]} value={mode} onChange={setMode} />
      {mode === "mult"
        ? <Slider label="scalar k" value={k} min={-3} max={3} step={0.1} onChange={setK} color={C.red} />
        : <Row gap={10}><Slider label="s" value={s} min={-2.5} max={2.5} step={0.1} onChange={setS} color={C.violet} /><Slider label="t" value={t} min={-2.5} max={2.5} step={0.1} onChange={setT} color={C.blue} /></Row>}
      <Plane view={V} label="u (violet), v (blue), result (red)" step={1}>
        {(X, Y) => <>
          {mode === "mult" && <>
            <line x1={X(-6.5)} y1={Y(-3.25)} x2={X(6.5)} y2={Y(3.25)} stroke={C.faint} strokeDasharray="4 4" />
            <Arrow X={X} Y={Y} from={[0, 0]} to={ku} color={C.red} width={4} label={`${r2(k)}u`} />
            <Arrow X={X} Y={Y} from={[0, 0]} to={u} color={C.violet} width={2.4} label="u" />
          </>}
          {mode === "combo" && <>
            <Arrow X={X} Y={Y} from={[0, 0]} to={su} color={C.violet} label={`${r2(s)}u`} />
            <Arrow X={X} Y={Y} from={su} to={w} color={C.blue} label={`${r2(t)}v`} />
            <Arrow X={X} Y={Y} from={[0, 0]} to={u} color={C.violet} width={1.4} dash />
            <Arrow X={X} Y={Y} from={[0, 0]} to={v} color={C.blue} width={1.4} dash />
            <Arrow X={X} Y={Y} from={[0, 0]} to={w} color={C.red} width={3.4} />
          </>}
        </>}
      </Plane>
      <Readout tone="blue">
        {mode === "mult"
          ? <MathText block html={`\\(|\\vec u|=${r2(mag(u))}\\), \\(|${r2(k)}\\vec u|=|${r2(k)}|\\times${r2(mag(u))}=${r2(mag(ku))}\\). ${k < 0 ? "k < 0: the arrow points the opposite way." : k === 0 ? "k = 0 gives the zero vector." : "k > 0: same direction."} Every multiple lies on the dashed line — they are <strong>collinear</strong>.`} />
          : <MathText block html={`\\(${r2(s)}\\vec u+${r2(t)}\\vec v\\) has length \\(${r2(mag(w))}\\). Because \\(\\vec u\\) and \\(\\vec v\\) are not collinear, every vector in the plane is some combination of them.`} />}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.4 resultants: navigation and forces */

export function ResultantLab({ init = { mode: "nav" as "nav" | "force" } }: { init?: { mode: "nav" | "force" } }) {
  const [mode, setMode] = useState<"nav" | "force">(init.mode);
  const [air, setAir] = useState(400), [head, setHead] = useState(60), [wind, setWind] = useState(80), [wfrom, setWfrom] = useState(300);
  const [f1, setF1] = useState(50), [f2, setF2] = useState(35), [th, setTh] = useState(70);
  if (mode === "nav") {
    const k = 100; // km/h per grid unit
    const p = polar(air / k, 90 - head), w = polar(wind / k, 90 - ((wfrom + 180) % 360)), g = add(p, w);
    return (
      <WidgetCard title="Resultants: wind and current" subtitle="Ground velocity = air velocity + wind velocity. Bearings are clockwise from north; wind is named by where it blows FROM">
        <Segmented options={[{ value: "nav", label: "aircraft and wind" }, { value: "force", label: "two forces" }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label="airspeed (km/h)" value={air} min={100} max={600} step={10} onChange={setAir} color={C.violet} /><Slider label="heading (°)" value={head} min={0} max={359} step={1} onChange={setHead} color={C.violet} /></Row>
        <Row gap={10}><Slider label="wind speed (km/h)" value={wind} min={0} max={200} step={5} onChange={setWind} color={C.blue} /><Slider label="wind from (°)" value={wfrom} min={0} max={359} step={1} onChange={setWfrom} color={C.blue} /></Row>
        <Plane view={V} label="air velocity (violet), wind (blue), ground velocity (red); one grid unit = 100 km/h" step={1}>
          {(X, Y) => <>
            <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(4.8)} stroke={C.green} strokeWidth={1.5} strokeDasharray="4 3" /><text x={X(0) + 6} y={Y(4.6)} fontSize={12} fontWeight={700} fill={C.green}>N</text>
            <Arrow X={X} Y={Y} from={[0, 0]} to={p} color={C.violet} label="air" />
            <Arrow X={X} Y={Y} from={p} to={g} color={C.blue} label="wind" />
            <Arrow X={X} Y={Y} from={[0, 0]} to={g} color={C.red} width={3.4} label="ground" />
          </>}
        </Plane>
        <Readout tone="green">
          <MathText block html={`Ground speed <strong>${Math.round(mag(g) * k)} km/h</strong> on a track (bearing) of <strong>${b3(ang(g))}°</strong>. The drift angle between heading and track is ${r2(Math.abs(((bearing(ang(g)) - head + 540) % 360) - 180))}°.`} />
        </Readout>
      </WidgetCard>
    );
  }
  const k = 10; // N per grid unit
  const F1 = polar(f1 / k, 0), F2 = polar(f2 / k, th), R = add(F1, F2);
  return (
    <WidgetCard title="Resultant and equilibrant forces" subtitle="The resultant replaces all the forces; the equilibrant is its opposite and balances them">
      <Segmented options={[{ value: "nav", label: "aircraft and wind" }, { value: "force", label: "two forces" }]} value={mode} onChange={setMode} />
      <Row gap={10}><Slider label="|F₁| (N)" value={f1} min={5} max={60} step={1} onChange={setF1} color={C.violet} /><Slider label="|F₂| (N)" value={f2} min={5} max={60} step={1} onChange={setF2} color={C.blue} /></Row>
      <Slider label="angle between the forces (°)" value={th} min={0} max={180} step={1} onChange={setTh} color={C.amber} />
      <Plane view={V} label="F1 (violet), F2 (blue), resultant (red), equilibrant (green); one grid unit = 10 N" step={1}>
        {(X, Y) => <>
          <Arc X={X} Y={Y} at={[0, 0]} r={0.9} a={0} b={th} color={C.amber} label={`${th}°`} />
          <Arrow X={X} Y={Y} from={F1} to={R} color={C.blue} width={1.4} dash /><Arrow X={X} Y={Y} from={F2} to={R} color={C.violet} width={1.4} dash />
          <Arrow X={X} Y={Y} from={[0, 0]} to={F1} color={C.violet} label="F₁" /><Arrow X={X} Y={Y} from={[0, 0]} to={F2} color={C.blue} label="F₂" />
          <Arrow X={X} Y={Y} from={[0, 0]} to={R} color={C.red} width={3.4} label="R" />
          <Arrow X={X} Y={Y} from={[0, 0]} to={scale(-1, R)} color={C.green} width={3} label="E" />
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`\\(|\\vec R|^2=${f1}^2+${f2}^2+2(${f1})(${f2})\\cos${th}^\\circ\\Rightarrow|\\vec R|\\approx${r2(mag(R) * k)}\\) N, at \\(${r2(ang(R))}^\\circ\\) to \\(\\vec F_1\\). The equilibrant has the same size, pointing the opposite way.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.5 rectangular components */

export function ComponentsLab({ init = { m: 5, deg: 35 } }: { init?: { m: number; deg: number } }) {
  const [mode, setMode] = useState<"xy" | "ramp">("xy");
  const [m, setM] = useState(init.m), [deg, setDeg] = useState(init.deg);
  const [w, setW] = useState(40), [ramp, setRamp] = useState(25);
  if (mode === "xy") {
    const v = polar(m, deg);
    return (
      <WidgetCard title="Rectangular components" subtitle="Every vector is the sum of a horizontal and a vertical vector: |v|cos θ and |v|sin θ">
        <Segmented options={[{ value: "xy", label: "horizontal and vertical" }, { value: "ramp", label: "weight on a ramp" }]} value={mode} onChange={setMode} />
        <Row gap={10}><Slider label="|v|" value={m} min={0.5} max={6} step={0.1} onChange={setM} color={C.violet} /><Slider label="θ from east (°)" value={deg} min={0} max={359} step={1} onChange={setDeg} color={C.violet} /></Row>
        <Plane view={V} label="v (violet) = horizontal component (blue) + vertical component (red)" step={1}>
          {(X, Y) => <>
            <Arc X={X} Y={Y} at={[0, 0]} r={1} a={0} b={deg} color={C.amber} label={`${deg}°`} />
            <Arrow X={X} Y={Y} from={[0, 0]} to={[v[0], 0]} color={C.blue} label="horizontal" />
            <Arrow X={X} Y={Y} from={[v[0], 0]} to={v} color={C.red} label="vertical" />
            <Arrow X={X} Y={Y} from={[0, 0]} to={v} color={C.violet} width={3.4} label="v" />
          </>}
        </Plane>
        <Readout tone="blue">
          <MathText block html={`Horizontal: \\(${r2(m)}\\cos${deg}^\\circ=${r2(v[0])}\\). Vertical: \\(${r2(m)}\\sin${deg}^\\circ=${r2(v[1])}\\). Check: \\(\\sqrt{(${r2(v[0])})^2+(${r2(v[1])})^2}=${r2(mag(v))}\\).`} />
        </Readout>
      </WidgetCard>
    );
  }
  const k = 10, s = w / k; // N per grid unit
  const O: XY = [0, 1.5];
  const down: XY = [0, -s], along = polar(s * Math.sin(ramp * RAD), 180 + ramp);
  const surf = (x: number) => O[1] - 0.25 + (x - O[0]) * Math.tan(ramp * RAD);
  return (
    <WidgetCard title="Weight on a ramp" subtitle="Resolve the weight along the ramp (pulls the object down the slope) and perpendicular to it (presses it into the surface)">
      <Segmented options={[{ value: "xy", label: "horizontal and vertical" }, { value: "ramp", label: "weight on a ramp" }]} value={mode} onChange={setMode} />
      <Row gap={10}><Slider label="weight (N)" value={w} min={10} max={60} step={1} onChange={setW} color={C.violet} /><Slider label="ramp angle (°)" value={ramp} min={0} max={60} step={1} onChange={setRamp} color={C.amber} /></Row>
      <Plane view={V} label="weight (violet), component along the ramp (red), component into the ramp (blue); one grid unit = 10 N" step={1}>
        {(X, Y) => <>
          <polygon points={`${X(-6.5)},${Y(surf(-6.5))} ${X(6.5)},${Y(surf(6.5))} ${X(6.5)},${Y(-5)} ${X(-6.5)},${Y(-5)}`} fill="#f1f5f9" stroke={C.ink} />
          <rect x={X(O[0]) - 14} y={Y(O[1]) - 14} width={28} height={28} fill="#e0e7ff" stroke={C.violet} transform={`rotate(${-ramp} ${X(O[0])} ${Y(O[1])})`} />
          <Arrow X={X} Y={Y} from={O} to={add(O, along)} color={C.red} label="along" />
          <Arrow X={X} Y={Y} from={add(O, along)} to={add(O, down)} color={C.blue} label="into" />
          <Arrow X={X} Y={Y} from={O} to={add(O, down)} color={C.violet} width={3.4} label="W" />
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`Along the ramp: \\(${w}\\sin${ramp}^\\circ\\approx${r2(w * Math.sin(ramp * RAD))}\\) N. Into the ramp: \\(${w}\\cos${ramp}^\\circ\\approx${r2(w * Math.cos(ramp * RAD))}\\) N. A steeper ramp moves more of the weight into the "along" component.`} />
      </Readout>
    </WidgetCard>
  );
}
