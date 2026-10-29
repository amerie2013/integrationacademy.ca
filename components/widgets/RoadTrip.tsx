"use client";

// Road-trip figure (MHF4U assignment 3.1, the 240 km trip question): pick a speed, drive the trip with its
// 30-minute rest stop on a running clock, and log each finished trip as a point (v, T). Only the points are
// plotted — no curve or asymptote lines — so the asymptote part of the question is still the student's job.

import { useEffect, useRef, useState } from "react";
import { C, Readout, Row, Slider, WidgetCard, btn } from "./kit";

const DIST = 240, REST_AT = 120, REST = 0.5;
const SECONDS_PER_HOUR = 0.9; // animation pace: one trip hour lasts 0.9 s on screen
const T = (v: number) => DIST / v + REST;
const hm = (h: number) => {
  const tot = Math.round(h * 60);
  return `${Math.floor(tot / 60)} h ${String(tot % 60).padStart(2, "0")} min`;
};

/** Distance along the road after `h` hours at speed v, including the rest stop. */
function posAt(v: number, h: number) {
  const reach = REST_AT / v;
  if (h <= reach) return { km: v * h, resting: false };
  if (h <= reach + REST) return { km: REST_AT, resting: true };
  return { km: Math.min(DIST, REST_AT + v * (h - reach - REST)), resting: false };
}

export function RoadTrip() {
  const [v, setV] = useState(80);
  const [h, setH] = useState(0);
  const [driving, setDriving] = useState(false);
  const [log, setLog] = useState<{ v: number; t: number }[]>([]);
  const raf = useRef<number | null>(null);
  const hRef = useRef(0);

  useEffect(() => {
    if (!driving) return;
    const total = T(v);
    let last = performance.now();
    let cur = hRef.current;
    const tick = (now: number) => {
      cur = Math.min(total, cur + (now - last) / 1000 / SECONDS_PER_HOUR);
      last = now;
      hRef.current = cur;
      setH(cur);
      if (cur >= total) {
        setDriving(false);
        setLog((l) => [...l.filter((p) => p.v !== v), { v, t: total }].sort((a, b) => a.v - b.v));
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [driving, v]);

  const total = T(v);
  const finished = h >= total - 1e-9 && h > 0;
  const { km, resting } = posAt(v, h);
  const restart = (nh: number) => { hRef.current = nh; setH(nh); };
  const drive = () => { if (driving) { setDriving(false); return; } if (finished) restart(0); setDriving(true); };
  const changeSpeed = (nv: number) => { setDriving(false); restart(0); setV(nv); };

  // road strip
  const RW = 640, RH = 120, x0 = 40, x1 = RW - 40;
  const X = (k: number) => x0 + (k / DIST) * (x1 - x0);
  const carX = X(km);

  // trip plot
  const PW = 640, PH = 300, P = { l: 50, r: 18, t: 16, b: 40 };
  const vMax = 160, tMax = 13;
  const PX = (u: number) => P.l + (u / vMax) * (PW - P.l - P.r);
  const PY = (t: number) => PH - P.b - (t / tMax) * (PH - P.t - P.b);

  return (
    <WidgetCard title="Drive the 240 km trip" subtitle="pick a speed, press Drive, and log the total time" tag="Interactive">
      <Row gap={10}>
        <button type="button" onClick={drive} style={{ ...btn(true), minWidth: 92 }}>{driving ? "Pause" : finished ? "Drive again" : h > 0 ? "Resume" : "Drive"}</button>
        <Slider label="speed v" value={v} min={20} max={160} step={5} onChange={changeSpeed} format={(u) => `${u} km/h`} color={C.violet} />
      </Row>

      <svg viewBox={`0 0 ${RW} ${RH}`} role="img" aria-label={`Car at ${Math.round(km)} km of 240 km`} style={{ width: "100%", height: "auto", display: "block", background: "#f8fafc", border: `1px solid ${C.line}`, borderRadius: 10, margin: "10px 0 6px" }}>
        <rect x={x0 - 10} y={58} width={x1 - x0 + 20} height={26} rx={4} fill="#475569" />
        <line x1={x0} x2={x1} y1={71} y2={71} stroke="#f8fafc" strokeWidth={2} strokeDasharray="12 10" />
        {[0, 40, 80, 120, 160, 200, 240].map((k) => (
          <g key={k}>
            <line x1={X(k)} x2={X(k)} y1={86} y2={93} stroke={C.muted} />
            <text x={X(k)} y={106} fontSize={11} textAnchor="middle" fill={C.muted}>{k} km</text>
          </g>
        ))}
        <g transform={`translate(${X(REST_AT)} 22)`}>
          <rect x={-46} y={0} width={92} height={22} rx={5} fill={resting ? C.amber : "#fff"} stroke={C.amber} />
          <text x={0} y={15} fontSize={11} fontWeight={700} textAnchor="middle" fill={resting ? "#fff" : C.amber}>30-min rest stop</text>
          <line x1={0} x2={0} y1={22} y2={36} stroke={C.amber} strokeWidth={2} />
        </g>
        <text x={x0 - 6} y={40} fontSize={12} fontWeight={700} fill={C.ink}>Start</text>
        <text x={x1 + 6} y={40} fontSize={12} fontWeight={700} textAnchor="end" fill={C.ink}>Finish</text>
        <g transform={`translate(${carX} 52)`}>
          <rect x={-18} y={0} width={36} height={12} rx={4} fill={C.green} />
          <path d="M-10 0 L-6 -8 L8 -8 L12 0 Z" fill={C.green} />
          <rect x={-5} y={-6} width={6} height={5} rx={1} fill="#dcfce7" />
          <rect x={3} y={-6} width={6} height={5} rx={1} fill="#dcfce7" />
          <circle cx={-10} cy={13} r={4.5} fill="#111" />
          <circle cx={10} cy={13} r={4.5} fill="#111" />
        </g>
      </svg>

      <Readout tone={finished ? "green" : resting ? "amber" : "blue"}>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          {finished
            ? <>Arrived! At <strong>{v} km/h</strong> the whole trip took <strong>{hm(total)}</strong> = {total.toFixed(2)} h.</>
            : <>Trip clock <strong>{hm(h)}</strong> · distance <strong>{Math.round(km)}</strong> of 240 km{resting ? " · resting" : ""}</>}
        </span>
      </Readout>

      <div style={{ fontSize: 14, fontWeight: 700, color: C.ink, margin: "14px 0 4px" }}>Your trips (speed v, total time T)</div>
      <svg viewBox={`0 0 ${PW} ${PH}`} role="img" aria-label={`${log.length} trips logged`} style={{ width: "100%", height: "auto", display: "block", background: "#fff", border: `1px solid ${C.line}`, borderRadius: 10 }}>
        {[20, 40, 60, 80, 100, 120, 140, 160].map((u) => <line key={`gx${u}`} x1={PX(u)} x2={PX(u)} y1={PY(0)} y2={PY(tMax)} stroke="#eef2f7" />)}
        {[2, 4, 6, 8, 10, 12].map((t) => <line key={`gy${t}`} x1={PX(0)} x2={PX(vMax)} y1={PY(t)} y2={PY(t)} stroke="#eef2f7" />)}
        <line x1={PX(0)} x2={PX(vMax)} y1={PY(0)} y2={PY(0)} stroke={C.ink} strokeWidth={1.4} />
        <line x1={PX(0)} x2={PX(0)} y1={PY(0)} y2={PY(tMax)} stroke={C.ink} strokeWidth={1.4} />
        {[20, 40, 60, 80, 100, 120, 140, 160].map((u) => <text key={`tx${u}`} x={PX(u)} y={PY(0) + 16} fontSize={11} textAnchor="middle" fill={C.muted}>{u}</text>)}
        {[2, 4, 6, 8, 10, 12].map((t) => <text key={`ty${t}`} x={PX(0) - 7} y={PY(t) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{t}</text>)}
        <text x={PX(vMax) - 2} y={PY(0) - 7} fontSize={12} fontWeight={700} textAnchor="end" fill={C.ink}>v (km/h)</text>
        <text x={PX(0) + 7} y={PY(tMax) + 12} fontSize={12} fontWeight={700} fill={C.ink}>T (h)</text>
        {log.length === 0 && <text x={(PX(0) + PX(vMax)) / 2} y={PY(tMax / 2)} fontSize={13} textAnchor="middle" fill={C.faint}>Finish a trip to plot your first point</text>}
        {log.map((p) => (
          <g key={p.v}>
            <circle cx={PX(p.v)} cy={PY(p.t)} r={5.5} fill={p.v === v ? C.red : C.violet} stroke="#fff" strokeWidth={1.5} />
            <text x={PX(p.v) + 8} y={PY(p.t) - 7} fontSize={11} fontWeight={700} fill={p.v === v ? C.red : C.violet}>({p.v}, {p.t.toFixed(2)})</text>
          </g>
        ))}
      </svg>
      <Row gap={10} style={{ marginTop: 8 }}>
        <span style={{ fontSize: 13, color: C.muted, flex: 1 }}>Try slow and fast speeds. What value does T get close to but never reach?</span>
        {log.length > 0 && <button type="button" onClick={() => setLog([])} style={btn()}>Clear trips</button>}
      </Row>
    </WidgetCard>
  );
}
