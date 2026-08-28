"use client";

/**
 * MDM4U Probability: theoretical probability, the addition and
 * multiplication rules, conditional probability, odds, and expected value.
 * A live scratchpad of independent calculators (no save/embed), matching
 * the shape of components/Counting.tsx.
 */

import { useMemo, useState } from "react";
import { simplifyFraction, fmtProb, fmtPct, theoreticalProbability, complement, unionProbability, intersectionIndependent, conditionalProbability, oddsInFavor, expectedValue } from "../lib/probabilityMath";

export function Probability() {
  const [fav, setFav] = useState(6);
  const [tot, setTot] = useState(36);
  const pE = theoreticalProbability(fav, tot);
  const frac = simplifyFraction(fav, tot);

  const [pA, setPA] = useState(0.5);
  const [pB, setPB] = useState(0.4);
  const [pAB, setPAB] = useState(0.1);
  const [mutexc, setMutexc] = useState(false);
  const unionResult = unionProbability(pA, pB, mutexc ? 0 : pAB);

  const [mulInput, setMulInput] = useState("0.5, 0.5, 0.5");
  const mulProbs = mulInput.split(",").map((s) => parseFloat(s.trim())).filter((n) => Number.isFinite(n));
  const mulResult = mulProbs.length ? intersectionIndependent(mulProbs) : NaN;

  const [cAB, setCAB] = useState(0.15);
  const [cB, setCB] = useState(0.3);
  const condResult = conditionalProbability(cAB, cB);

  const [oddsP, setOddsP] = useState(0.25);
  const odds = oddsInFavor(oddsP);

  const [evInput, setEvInput] = useState("10, 0.2\n20, 0.5\n-5, 0.3");
  const evPairs = useMemo(() => evInput.split("\n").map((line) => {
    const [v, p] = line.split(",").map((s) => parseFloat(s.trim()));
    return { value: v, prob: p };
  }).filter((p) => Number.isFinite(p.value) && Number.isFinite(p.prob)), [evInput]);
  const { ev, probSum } = expectedValue(evPairs);

  return (
    <div style={{ padding: 20, overflowY: "auto", height: "100%", boxSizing: "border-box", background: "#f8faff" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        <Card title="Theoretical Probability" formula="P(E) = favorable / total" note="Use counts from the Counting tab — e.g. nCr for favorable outcomes.">
          <NumInput label="Favorable outcomes" value={fav} onChange={setFav} min={0} />
          <NumInput label="Total outcomes" value={tot} onChange={setTot} min={0} />
          <Result label={`P(E) = ${fav}/${tot} =`} value={tot > 0 ? `${frac.num}/${frac.den} = ${fmtProb(pE)} = ${fmtPct(pE)}` : "total must be > 0"} />
          {tot > 0 && <div style={{ fontSize: 11.5, color: "#94a3b8", marginTop: 6 }}>Complement: P(E&rsquo;) = 1 − P(E) = {fmtProb(complement(pE))} = {fmtPct(complement(pE))}</div>}
        </Card>

        <Card title="Addition Rule" formula="P(A ∪ B) = P(A) + P(B) − P(A ∩ B)" note="&ldquo;Mutually exclusive&rdquo; means A and B can't both happen, so P(A ∩ B) = 0.">
          <NumInput label="P(A)" value={pA} onChange={setPA} min={0} max={1} step={0.01} />
          <NumInput label="P(B)" value={pB} onChange={setPB} min={0} max={1} step={0.01} />
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#475569", marginBottom: 8, cursor: "pointer" }}>
            <input type="checkbox" checked={mutexc} onChange={(e) => setMutexc(e.target.checked)} /> Mutually exclusive
          </label>
          {!mutexc && <NumInput label="P(A ∩ B)" value={pAB} onChange={setPAB} min={0} max={1} step={0.01} />}
          <Result label="P(A ∪ B) =" value={`${fmtProb(unionResult)} = ${fmtPct(unionResult)}`} />
        </Card>

        <Card title="Multiplication Rule" formula="P(A ∩ B ∩ …) = P(A) × P(B) × …" note="For independent events only — comma-separated list, any length.">
          <TextInput label="Probabilities (comma-separated)" value={mulInput} onChange={setMulInput} placeholder="e.g. P(heads) three times in a row → 0.5, 0.5, 0.5" />
          <Result label={mulProbs.length ? `${mulProbs.join(" × ")} =` : "="} value={mulProbs.length ? `${fmtProb(mulResult)} = ${fmtPct(mulResult)}` : "0"} />
        </Card>

        <Card title="Conditional Probability" formula="P(A | B) = P(A ∩ B) / P(B)" note="The probability of A, given that B has already happened.">
          <NumInput label="P(A ∩ B)" value={cAB} onChange={setCAB} min={0} max={1} step={0.01} />
          <NumInput label="P(B)" value={cB} onChange={setCB} min={0} max={1} step={0.01} />
          <Result label="P(A | B) =" value={cB > 0 ? `${fmtProb(condResult)} = ${fmtPct(condResult)}` : "P(B) must be > 0"} />
        </Card>

        <Card title="Odds" formula="odds in favor = P(E) : P(E′)" note="Odds compare favor to against, unlike probability which compares favor to total.">
          <NumInput label="P(E)" value={oddsP} onChange={setOddsP} min={0} max={1} step={0.01} />
          <Result label="Odds in favor =" value={oddsP > 0 && oddsP < 1 ? `${odds.favor} : ${odds.against}` : "P(E) must be strictly between 0 and 1"} />
          {oddsP > 0 && oddsP < 1 && <div style={{ fontSize: 11.5, color: "#94a3b8", marginTop: 6 }}>Odds against = {odds.against} : {odds.favor}</div>}
        </Card>

        <Card title="Expected Value" formula="E(X) = Σ xᵢ · P(xᵢ)" note="One outcome per line: value, probability.">
          <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 8 }}>
            Outcomes (value, probability)
            <textarea value={evInput} onChange={(e) => setEvInput(e.target.value)} rows={3} style={{ width: "100%", padding: "6px 8px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12.5, fontFamily: "JetBrains Mono, monospace", marginTop: 2, boxSizing: "border-box", resize: "vertical" }} />
          </label>
          <Result label="E(X) =" value={evPairs.length ? fmtProb(ev) : "0"} />
          {evPairs.length > 0 && Math.abs(probSum - 1) > 0.001 && (
            <div style={{ fontSize: 11.5, color: "#b45309", marginTop: 6 }}>⚠ Probabilities sum to {fmtProb(probSum)}, not 1 — check your outcomes.</div>
          )}
        </Card>
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
      <div style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", fontFamily: "JetBrains Mono, monospace", wordBreak: "break-all" }}>{value}</div>
    </div>
  );
}
