"use client";

/**
 * MDM4U Unit 1 — Counting (Combinatorics): the Fundamental Counting
 * Principle, factorial, permutations, combinations (with and without
 * repetition), arrangements with repeated items, circular permutations,
 * subsets, and Pascal's triangle. A live scratchpad of independent
 * calculators rather than a single figure, so (unlike Stats) there's no
 * save/embed here.
 */

import { useMemo, useState } from "react";
import { factorial, permutation, combination, permutationWithRepetition, combinationWithRepetition, subsetCount, multisetPermutations, letterCounts, pascalRow, fmtBig, MAX_N } from "../lib/countingMath";

export function Counting() {
  const [fcpInput, setFcpInput] = useState("3, 4, 2");
  const fcpNums = fcpInput.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => Number.isFinite(n) && n >= 0);
  const fcpResult = fcpNums.length ? fcpNums.reduce((a, b) => a * b, 1) : 0;

  const [factN, setFactN] = useState(5);
  const [pN, setPN] = useState(5);
  const [pR, setPR] = useState(2);
  const [cN, setCN] = useState(5);
  const [cR, setCR] = useState(2);
  const [word, setWord] = useState("MISSISSIPPI");
  const [circN, setCircN] = useState(6);
  const [prN, setPrN] = useState(10);
  const [prR, setPrR] = useState(4);
  const [crN, setCrN] = useState(5);
  const [crR, setCrR] = useState(3);
  const [subN, setSubN] = useState(4);
  const [pascalRows, setPascalRows] = useState(8);

  const counts = useMemo(() => letterCounts(word), [word]);
  const wordN = counts.reduce((a, c) => a + c.count, 0);
  const multisetResult = counts.length ? multisetPermutations(counts.map((c) => c.count)) : BigInt(0);

  return (
    <div style={{ padding: 20, overflowY: "auto", height: "100%", boxSizing: "border-box", background: "#f8faff" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        <Card title="Fundamental Counting Principle" formula="choices₁ × choices₂ × choices₃ × …">
          <TextInput label="Choices at each stage (comma-separated)" value={fcpInput} onChange={setFcpInput} placeholder="e.g. 3 shirts, 4 pants, 2 shoes → 3, 4, 2" />
          <Result label={fcpNums.length ? `${fcpNums.join(" × ")} =` : "="} value={fcpResult.toLocaleString()} />
        </Card>

        <Card title="Factorial" formula="n! = n × (n − 1) × … × 1">
          <NumInput label="n" value={factN} onChange={setFactN} min={0} max={MAX_N} />
          <Result label={`${factN}! =`} value={factN <= MAX_N ? fmtBig(factorial(factN)) : "n too large"} />
        </Card>

        <Card title="Permutations" formula="ₙPᵣ = n! / (n − r)!" note="Order matters — arranging r items chosen from n.">
          <NumInput label="n" value={pN} onChange={setPN} min={0} max={MAX_N} />
          <NumInput label="r" value={pR} onChange={setPR} min={0} max={Math.max(pN, 0)} />
          <Result label={`${pN}P${pR} =`} value={pR <= pN ? fmtBig(permutation(pN, pR)) : "r must be ≤ n"} />
        </Card>

        <Card title="Combinations" formula="ₙCᵣ = n! / (r!(n − r)!)" note="Order doesn't matter — choosing r items from n.">
          <NumInput label="n" value={cN} onChange={setCN} min={0} max={MAX_N} />
          <NumInput label="r" value={cR} onChange={setCR} min={0} max={Math.max(cN, 0)} />
          <Result label={`${cN}C${cR} =`} value={cR <= cN ? fmtBig(combination(cN, cR)) : "r must be ≤ n"} />
        </Card>

        <Card title="Arrangements with repeated items" formula="n! / (a! × b! × c! × …)" note="Type a word — repeated letters are found automatically.">
          <TextInput label="Word" value={word} onChange={setWord} placeholder="e.g. MISSISSIPPI" />
          {counts.length > 0 && (
            <div style={{ fontSize: 12, color: "#64748b", marginTop: -6, marginBottom: 6 }}>
              {counts.map((c) => `${c.letter.toUpperCase()}×${c.count}`).join(", ")} (n = {wordN})
            </div>
          )}
          <Result label={counts.length ? `${wordN}! / (${counts.map((c) => c.count + "!").join(" × ")}) =` : "="} value={counts.length ? fmtBig(multisetResult) : "0"} />
        </Card>

        <Card title="Circular permutations" formula="(n − 1)!" note="Arrangements around a circle — rotations count as the same arrangement.">
          <NumInput label="n (items around the circle)" value={circN} onChange={setCircN} min={1} max={MAX_N} />
          <Result label={`(${circN} − 1)! =`} value={fmtBig(factorial(Math.max(0, circN - 1)))} />
        </Card>

        <Card title="Permutations with repetition" formula="nʳ" note="Sequences of length r from n choices, repetition allowed — e.g. 4-digit PINs from 10 digits.">
          <NumInput label="n (choices per position)" value={prN} onChange={setPrN} min={0} max={MAX_N} />
          <NumInput label="r (length of the sequence)" value={prR} onChange={setPrR} min={0} max={MAX_N} />
          <Result label={`${prN}^${prR} =`} value={fmtBig(permutationWithRepetition(prN, prR))} />
        </Card>

        <Card title="Combinations with repetition" formula="₍ₙ₊ᵣ₋₁₎Cᵣ" note="Choosing r items from n types, order doesn't matter, repetition allowed — e.g. r donuts from n flavors.">
          <NumInput label="n (types)" value={crN} onChange={setCrN} min={0} max={MAX_N} />
          <NumInput label="r (items chosen)" value={crR} onChange={setCrR} min={0} max={MAX_N} />
          <Result label={`(${crN}+${crR}−1)C${crR} =`} value={fmtBig(combinationWithRepetition(crN, crR))} />
        </Card>

        <Card title="Subsets" formula="2ⁿ" note="Every element is either in a subset or not — includes ∅ and the full set. (A Pascal's-triangle row also sums to 2ⁿ.)">
          <NumInput label="n" value={subN} onChange={setSubN} min={0} max={MAX_N} />
          <Result label={`2^${subN} =`} value={fmtBig(subsetCount(subN))} />
        </Card>
      </div>

      <div style={{ marginTop: 20, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: "#0f172a" }}>Pascal&rsquo;s Triangle</div>
        <div style={{ fontSize: 12, color: "#64748b", marginBottom: 10 }}>Row n, position r is ₙCᵣ — the same numbers the Combinations calculator above computes.</div>
        <div style={{ maxWidth: 160 }}><NumInput label="Rows to show" value={pascalRows} onChange={(v) => setPascalRows(Math.max(1, Math.min(16, v)))} min={1} max={16} /></div>
        <div style={{ marginTop: 12, overflowX: "auto" }}>
          {Array.from({ length: pascalRows }, (_, rowN) => (
            <div key={rowN} style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 6, minWidth: pascalRows * 52 }}>
              {pascalRow(rowN).map((v, i) => (
                <div key={i} style={{ minWidth: 44, textAlign: "center", fontFamily: "JetBrains Mono, monospace", fontSize: 13, fontWeight: 700, color: "#1b7a44" }}>{v.toString()}</div>
              ))}
            </div>
          ))}
        </div>
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
function NumInput({ label, value, onChange, min, max }: { label: string; value: number; onChange: (v: number) => void; min?: number; max?: number }) {
  return (
    <label style={{ display: "block", fontSize: 12, color: "#475569", marginBottom: 8 }}>
      {label}
      <input type="number" value={value} min={min} max={max} onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)} style={{ width: "100%", padding: "6px 8px", border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 13, marginTop: 2, boxSizing: "border-box" }} />
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
