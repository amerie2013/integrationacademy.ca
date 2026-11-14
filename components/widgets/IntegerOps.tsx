"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, fmtInt, texInt } from "./kit";
import { useT } from "@/lib/lang";

const MIN = -15, MAX = 15;

/** Number line with a start dot and a move arrow from `from` to `to`. */
function MoveLine({ start, end, label, color, lo = MIN, hi = MAX, extra }: { start: number; end: number; label: string; color: string; lo?: number; hi?: number; extra?: { from: number; to: number; color: string; label: string } }) {
  const t = useT();
  const W = 640, X = (v: number) => 20 + ((v - lo) / (hi - lo)) * (W - 40);
  const ticks = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const arrow = (from: number, to: number, y: number, col: string, lab: string, id: string) => (
    <g>
      <defs><marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill={col} /></marker></defs>
      <path d={`M${X(from)},88 L${X(from)},${y} L${X(to)},${y} L${X(to)},88`} fill="none" stroke={col} strokeWidth={2.6} markerEnd={from === to ? undefined : `url(#${id})`} style={{ transition: "d 0.35s" }} />
      <text x={(X(from) + X(to)) / 2} y={y - 7} fontSize={13} fontWeight={800} textAnchor="middle" fill={col}>{lab}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${W} 130`} style={{ width: "100%", display: "block" }} role="img" aria-label={t(`Number line: start at ${start}, move to ${end}`, `Droite numérique : départ à ${start}, déplacement jusqu'à ${end}`)}>
      <line x1={10} y1={95} x2={W - 10} y2={95} stroke="#334155" strokeWidth={2} />
      {ticks.map((v) => (
        <g key={v}>
          <line x1={X(v)} y1={89} x2={X(v)} y2={101} stroke="#334155" strokeWidth={v === 0 ? 2.6 : 1.1} />
          {(v % 5 === 0 || v === start || v === end) && <text x={X(v)} y={119} fontSize={11.5} textAnchor="middle" fontWeight={v === end ? 800 : 500} fill={v === end ? C.green : C.ink}>{fmtInt(v)}</text>}
        </g>
      ))}
      {arrow(start, end, 50, color, label, "ix1")}
      <circle cx={X(start)} cy={95} r={6} fill="#475569" />
      {extra && <text x={X(start) - 7} y={86} fontSize={11.5} fontWeight={700} textAnchor="end" fill="#475569">{extra.label}</text>}
      <circle cx={X(end)} cy={95} r={7.5} fill={C.green} stroke="#fff" strokeWidth={2} />
    </svg>
  );
}

/** Chips: p positives and n negatives, zero pairs boxed. */
function Chips({ pos, neg }: { pos: number; neg: number }) {
  const pairs = Math.min(pos, neg), cols = Math.max(pos, neg), gap = 28, W = Math.max(cols * gap + 20, 120);
  const chip = (cx: number, cy: number, plus: boolean, faded: boolean) => (
    <g opacity={faded ? 0.35 : 1}>
      <circle cx={cx} cy={cy} r={10.5} fill={plus ? "#fde68a" : "#fecdd3"} stroke={plus ? C.amber : C.red} strokeWidth={1.6} />
      <text x={cx} y={cy + 5} fontSize={14} fontWeight={800} textAnchor="middle" fill={plus ? C.amber : C.red}>{plus ? "+" : "−"}</text>
    </g>
  );
  return (
    <svg viewBox={`0 0 ${W} 80`} style={{ width: "100%", maxWidth: Math.min(W * 1.4, 640), display: "block", margin: "0 auto" }} aria-hidden>
      {Array.from({ length: pairs }, (_, i) => <rect key={"b" + i} x={10 + i * gap - 1} y={4} width={26} height={70} rx={8} fill="none" stroke="#94a3b8" strokeDasharray="4 3" />)}
      {Array.from({ length: pos }, (_, i) => <g key={"p" + i}>{chip(22 + i * gap, 22, true, i < pairs)}</g>)}
      {Array.from({ length: neg }, (_, i) => <g key={"n" + i}>{chip(22 + i * gap, 56, false, i < pairs)}</g>)}
    </svg>
  );
}

export function IntegerOps({ initA = -6, initB = 9, initOp = "+" }: { initA?: number; initB?: number; initOp?: "+" | "-" }) {
  const [a, setA] = useState(initA);
  const [b, setB] = useState(initB);
  const [op, setOp] = useState<"+" | "-">(initOp);
  const [model, setModel] = useState<"line" | "chips">("line");
  const t = useT();
  const add = op === "+" ? b : -b; // a - b = a + (-b)
  const r = a + add;
  const clampR = Math.max(MIN, Math.min(MAX, r));

  // chips: a, then add the second integer's chips
  const pos = Math.max(a, 0) + Math.max(add, 0), neg = Math.max(-a, 0) + Math.max(-add, 0);

  let rule: string;
  if (op === "-") rule = t(`Subtracting \\(${texInt(b)}\\) is the same as adding its opposite, \\(${texInt(-b)}\\): \\(${texInt(a, false)}-${texInt(b)}=${texInt(a, false)}+${texInt(-b)}\\). `, `Soustraire \\(${texInt(b)}\\) revient à additionner son opposé, \\(${texInt(-b)}\\) : \\(${texInt(a, false)}-${texInt(b)}=${texInt(a, false)}+${texInt(-b)}\\). `);
  else rule = "";
  if (a === 0 || add === 0) rule += t(`Adding \\(0\\) changes nothing.`, `Additionner \\(0\\) ne change rien.`);
  else if (Math.sign(a) === Math.sign(add)) rule += t(`Same signs: add the sizes \\(${Math.abs(a)}+${Math.abs(add)}=${Math.abs(r)}\\) and keep the sign.`, `Mêmes signes : additionne les valeurs absolues \\(${Math.abs(a)}+${Math.abs(add)}=${Math.abs(r)}\\) et garde le signe.`);
  else rule += t(`Different signs: subtract the sizes \\(${Math.max(Math.abs(a), Math.abs(add))}-${Math.min(Math.abs(a), Math.abs(add))}=${Math.abs(r)}\\); the answer takes the sign of the number farther from 0${r === 0 ? " (here they cancel exactly)" : ""}.`, `Signes différents : soustrais les valeurs absolues \\(${Math.max(Math.abs(a), Math.abs(add))}-${Math.min(Math.abs(a), Math.abs(add))}=${Math.abs(r)}\\); la réponse prend le signe du nombre le plus éloigné de 0${r === 0 ? " (ici, ils s'annulent exactement)" : ""}.`);

  return (
    <WidgetCard title={t("Integer moves", "Déplacements d'entiers")} subtitle={t("Drag the sliders, then switch between the number line and zero-pair chips", "Fais glisser les curseurs, puis passe de la droite numérique aux jetons (paires nulles)")}>
      <Row>
        <Slider label={t("first", "premier")} value={a} min={-10} max={10} onChange={setA} color={C.blue} />
        <Segmented options={[{ value: "+", label: t("+ add", "+ additionner") }, { value: "-", label: t("− subtract", "− soustraire") }]} value={op} onChange={setOp} />
        <Slider label={t("second", "deuxième")} value={b} min={-10} max={10} onChange={setB} color={C.red} />
      </Row>
      <div style={{ margin: "12px 0 6px" }}>
        <Segmented label={t("Model", "Modèle")} options={[{ value: "line", label: t("Number line", "Droite numérique") }, { value: "chips", label: t("Zero pairs", "Paires nulles") }]} value={model} onChange={setModel} />
      </div>
      {model === "line" ? (
        <MoveLine start={a} end={clampR} label={`${op === "+" ? "+" : "−"} ${b < 0 ? `(${fmtInt(b)})` : b}  →  ${t("move", "déplace-toi de")} ${Math.abs(add)} ${add >= 0 ? t("right", "vers la droite") : t("left", "vers la gauche")}`} color={add >= 0 ? C.blue : C.red}
          extra={{ from: 0, to: a, color: "#475569", label: `${t("start", "départ")} ${fmtInt(a)}` }} />
      ) : (
        <div style={{ padding: "6px 0" }}>
          <Chips pos={pos} neg={neg} />
          <p style={{ textAlign: "center", fontSize: 13.5, color: C.muted, margin: "4px 0 0" }}>
            {t(
              `${Math.min(pos, neg)} zero pair${Math.min(pos, neg) === 1 ? "" : "s"} cancel (faded). What is left over is the answer: ${Math.abs(r)} ${r >= 0 ? "positive" : "negative"} chip${Math.abs(r) === 1 ? "" : "s"}.`,
              `${Math.min(pos, neg)} paire${Math.min(pos, neg) === 1 ? "" : "s"} nulle${Math.min(pos, neg) === 1 ? "" : "s"} s'annule${Math.min(pos, neg) === 1 ? "" : "nt"} (en pâle). Ce qui reste est la réponse : ${Math.abs(r)} jeton${Math.abs(r) === 1 ? "" : "s"} ${r >= 0 ? "positif" : "négatif"}${Math.abs(r) === 1 ? "" : "s"}.`,
            )}
          </p>
        </div>
      )}
      <Readout tone="green">
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}><MathText html={`\\(${texInt(a, false)} ${op === "+" ? "+" : "-"} ${texInt(b)} = ${texInt(r, false)}\\)`} /></div>
        <MathText html={rule} />
        {r !== clampR && <div style={{ color: C.muted, fontSize: 13 }}>{t("(The answer is off this number line, so the dot stops at the edge.)", "(La réponse est hors de cette droite numérique, donc le point s'arrête au bord.)")}</div>}
      </Readout>
    </WidgetCard>
  );
}
