"use client";

// MDM4U chapter 7 (culminating investigation) explorers: judging research questions against a checklist, cleaning a
// raw data set and watching the summary statistics change, choosing analysis tools from the variable types, deciding
// whether a conclusion is justified, and critiquing published studies.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, WidgetCard, btn } from "./kit";

const d2 = (v: number) => String(Math.round(v * 100) / 100);
const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
const median = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
const sdS = (xs: number[]) => { const m = sum(xs) / xs.length; return Math.sqrt(sum(xs.map((x) => (x - m) ** 2)) / (xs.length - 1)); };

function Check({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={on} style={{ display: "flex", gap: 8, alignItems: "center", width: "100%", textAlign: "left", padding: "8px 10px", margin: "4px 0", borderRadius: 8, border: `1px solid ${on ? C.green : "#cbd5e1"}`, background: on ? C.greenSoft : "#fff", cursor: "pointer", fontSize: 14, color: C.ink }}>
      <span style={{ fontWeight: 800, color: on ? C.green : C.faint }}>{on ? "✓" : "○"}</span>{label}
    </button>
  );
}

/* ---------------------------------------------------------------- 7.1 a researchable question */

const CRIT = ["names a specific population", "names the variable(s) to be measured", "the variables can be measured or counted", "it can be answered with data you can collect in the time available", "it can be studied ethically"];
const QS: [string, boolean[], string][] = [
  ["Do teenagers like music?", [false, false, false, true, true], "Too vague: which teenagers, and what does “like” mean as a measurement?"],
  ["Is there a relationship between weekly hours of part-time work and average marks for grade 12 students at our school?", [true, true, true, true, true], "Specific population, two measurable variables, feasible and ethical."],
  ["Does skipping sleep for three nights lower reaction time in grade 11 students?", [true, true, true, true, false], "Measurable, but depriving students of sleep is not ethical."],
  ["What percent of all people in the world have ever played chess?", [true, true, true, false, true], "Impossible to collect data on the whole world in the time available."],
  ["How does the price of used cars in Ontario depend on their age and mileage?", [true, true, true, true, true], "Clear population and variables; secondary data from listings make it feasible."],
];

export function QuestionLab() {
  const [i, setI] = useState(0), [ticks, setTicks] = useState<boolean[]>(CRIT.map(() => false)), [shown, setShown] = useState(false);
  const q = QS[i % QS.length], right = ticks.filter((t, k) => t === q[1][k]).length;
  return (
    <WidgetCard title="Is it a good research question?" subtitle="tick every criterion the question meets, then check">
      <div style={{ padding: "12px 14px", background: C.panel, borderRadius: 10, fontSize: 16, fontWeight: 600, color: C.ink }}>{q[0]}</div>
      {CRIT.map((c, k) => <Check key={c} on={ticks[k]} label={c} onClick={() => { if (!shown) setTicks(ticks.map((t, j) => (j === k ? !t : t))); }} />)}
      <Row gap={8}>
        <button type="button" style={btn(true)} onClick={() => setShown(true)}>check</button>
        <button type="button" style={btn()} onClick={() => { setI(i + 1); setTicks(CRIT.map(() => false)); setShown(false); }}>next question →</button>
      </Row>
      <Readout tone={shown ? (right === CRIT.length ? "green" : "amber") : "blue"}>
        <MathText html={shown ? `You matched ${right} of ${CRIT.length} criteria. The question meets: ${CRIT.filter((_, k) => q[1][k]).join("; ") || "none"}. ${q[2]}` : "A researchable question is specific, measurable, feasible and ethical. Weak questions are usually too vague or too large."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.2 cleaning data */

type Row7 = { id: string; hours: number | null; issue: string | null; fix: number | null; why: string };
const RAW: Row7[] = [
  { id: "S01", hours: 6, issue: null, fix: null, why: "" },
  { id: "S02", hours: 8, issue: null, fix: null, why: "" },
  { id: "S03", hours: 70, issue: "typing error", fix: 7, why: "The student wrote 7; a decimal was misplaced. Confirm with the original form." },
  { id: "S04", hours: 5, issue: null, fix: null, why: "" },
  { id: "S05", hours: null, issue: "missing value", fix: null, why: "Leave it out of the calculations (do not replace it with 0)." },
  { id: "S06", hours: 9, issue: null, fix: null, why: "" },
  { id: "S06", hours: 9, issue: "duplicate record", fix: null, why: "The same response was entered twice; keep one copy." },
  { id: "S07", hours: 420, issue: "wrong units (minutes)", fix: 7, why: "Recorded in minutes: 420 min = 7 h." },
  { id: "S08", hours: 6, issue: null, fix: null, why: "" },
  { id: "S09", hours: 7, issue: null, fix: null, why: "" },
];

export function CleaningLab() {
  const [done, setDone] = useState<boolean[]>(RAW.map(() => false));
  const vals = RAW.flatMap((r, k) => (r.issue && done[k] ? (r.fix === null ? [] : [r.fix]) : r.hours === null ? [] : [r.hours]));
  const left = RAW.filter((r, k) => r.issue && !done[k]).length;
  return (
    <WidgetCard title="Cleaning a data set" subtitle="hours of homework per week reported by 9 students — fix each flagged record">
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
          <thead><tr>{["record", "hours", "problem", ""].map((h) => <th key={h} style={{ textAlign: "left", padding: 6, borderBottom: `2px solid ${C.line}` }}>{h}</th>)}</tr></thead>
          <tbody>{RAW.map((r, k) => (
            <tr key={k} style={{ background: r.issue ? (done[k] ? C.greenSoft : C.amberSoft) : "#fff" }}>
              <td style={{ padding: 6 }}>{r.id}</td>
              <td style={{ padding: 6, textDecoration: r.issue && done[k] && r.fix === null ? "line-through" : "none" }}>{r.issue && done[k] && r.fix !== null ? `${r.fix} (was ${r.hours})` : r.hours ?? "—"}</td>
              <td style={{ padding: 6, color: C.muted }}>{r.issue ? (done[k] ? r.why : r.issue) : ""}</td>
              <td style={{ padding: 6 }}>{r.issue && !done[k] && <button type="button" style={btn()} onClick={() => setDone(done.map((d, j) => (j === k ? true : d)))}>fix</button>}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <Readout tone={left ? "amber" : "green"}>
        <MathText html={`Values used: ${vals.length}. Mean \\(=${d2(sum(vals) / vals.length)}\\) h, median \\(=${d2(median(vals))}\\) h, \\(s=${d2(sdS(vals))}\\) h. ${left ? `${left} problem(s) left — notice how much the errors distort the mean and standard deviation.` : "Clean! Record every change you made so others can check your work."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.3 choosing tools */

type VT = "categorical" | "numerical";
const ADVICE: Record<string, [string, string]> = {
  "1-categorical": ["counts and percents; mode", "bar graph or circle graph"],
  "1-numerical": ["mean, median, standard deviation, IQR, five-number summary", "histogram, box plot, stem-and-leaf plot"],
  "2-categorical-categorical": ["contingency table; compare conditional percentages", "segmented or side-by-side bar graph"],
  "2-categorical-numerical": ["centre and spread of the numerical variable in each group", "side-by-side box plots"],
  "2-numerical-numerical": ["correlation r, regression line or curve, r², residuals", "scatter plot with line of best fit; residual plot"],
};

export function ToolChooser() {
  const [n, setN] = useState<1 | 2>(2), [a, setA] = useState<VT>("numerical"), [b, setB] = useState<VT>("numerical");
  const key = n === 1 ? `1-${a}` : `2-${[a, b].sort().join("-")}`, [stats, disp] = ADVICE[key];
  return (
    <WidgetCard title="Choosing the right tools" subtitle="describe your variables; get the summaries and displays that fit">
      <Segmented value={n} onChange={setN} label="variables:" options={[{ value: 1, label: "one" }, { value: 2, label: "two" }]} />
      <Row>
        <Segmented value={a} onChange={setA} label="first:" options={[{ value: "categorical", label: "categorical" }, { value: "numerical", label: "numerical" }]} />
        {n === 2 && <Segmented value={b} onChange={setB} label="second:" options={[{ value: "categorical", label: "categorical" }, { value: "numerical", label: "numerical" }]} />}
      </Row>
      <Readout tone="green">
        <MathText html={`<strong>Summaries:</strong> ${stats}.<br/><strong>Displays:</strong> ${disp}.<br/>${key === "2-numerical-numerical" ? "Check the residual plot before trusting a line, and remember that correlation is not causation." : key === "1-numerical" ? "Use the median and IQR if the data are skewed or have outliers." : key.includes("categorical-categorical") ? "Compare percentages, not counts — groups usually differ in size." : key === "2-categorical-numerical" ? "Report centre, spread and shape for every group." : "Report the sample size with every percent."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.4 justified conclusions */

const CLAIMS: [string, string, boolean, string][] = [
  ["A random sample of 400 students found r = 0.62 between sleep and marks.", "“Students who sleep more tend to have higher marks.”", true, "A cautious statement of association — justified."],
  ["A random sample of 400 students found r = 0.62 between sleep and marks.", "“Sleeping more will raise your marks.”", false, "Causation from an observational study — overstated."],
  ["An online poll on a gaming site: 85% of 3000 voters support longer lunch breaks.", "“85% of all students support longer lunch breaks.”", false, "Voluntary response from one site — cannot generalize."],
  ["A randomized experiment: 60 volunteers; the practice-app group improved 6 points more than the control group.", "“The app improved scores for these volunteers.”", true, "Random assignment supports a causal conclusion for similar volunteers."],
  ["A regression for ages 5–12 predicts height from age.", "“At age 30 a person will be 2.4 m tall.”", false, "Extrapolation far beyond the data."],
  ["Median household income in a stratified random sample of 1200 households was 78 000 dollars.", "“A typical household in the region earns about 78 000 dollars.”", true, "Representative sample, resistant measure — justified."],
];

export function ConclusionCheck() {
  const [i, setI] = useState(0), [pick, setPick] = useState<boolean | null>(null), [score, setScore] = useState([0, 0]);
  const c = CLAIMS[i % CLAIMS.length];
  const choose = (v: boolean) => { if (pick !== null) return; setPick(v); setScore([score[0] + (v === c[2] ? 1 : 0), score[1] + 1]); };
  return (
    <WidgetCard title="Is the conclusion justified?" subtitle="read the evidence and the claim; decide whether the claim goes too far">
      <div style={{ padding: "10px 14px", background: C.panel, borderRadius: 10, fontSize: 14.5, color: C.muted }}><strong style={{ color: C.ink }}>Evidence:</strong> {c[0]}</div>
      <div style={{ padding: "10px 14px", margin: "8px 0", background: C.violetSoft, borderRadius: 10, fontSize: 16, fontWeight: 600, color: C.ink }}>{c[1]}</div>
      <Row gap={8}>
        <button type="button" style={{ ...btn(), background: pick !== null && c[2] ? C.greenSoft : "#fff" }} onClick={() => choose(true)}>justified</button>
        <button type="button" style={{ ...btn(), background: pick !== null && !c[2] ? C.greenSoft : "#fff" }} onClick={() => choose(false)}>overstated</button>
        <button type="button" style={btn(true)} onClick={() => { setI(i + 1); setPick(null); }}>next →</button>
      </Row>
      <Readout tone={pick === null ? "blue" : pick === c[2] ? "green" : "red"}>
        <MathText html={pick === null ? "A good conclusion answers the question, in context, without claiming more than the design allows." : `${pick === c[2] ? "Correct." : "Not quite."} ${c[3]} Score: ${score[0]} / ${score[1]}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.5 critiquing a study */

const FLAWS = ["biased sample", "sample too small", "leading question", "causal claim from correlation", "misleading graph", "no flaw of this kind"];
const STUDIES: [string, number[], string][] = [
  ["A shoe company surveyed 25 customers in its own store and reported: “Our shoes make 92% of runners faster.” The bar graph's axis starts at 85%.", [0, 1, 3, 4], "Convenience sample of loyal customers, very small, causal claim without an experiment, and a truncated axis."],
  ["A city asked a random sample of 1500 residents: “Don't you agree the new stadium will be good for the city?” 74% said yes.", [2], "The sample is good, but the question is leading."],
  ["A national agency surveyed a stratified random sample of 12 000 households about internet access and reported the percent with high-speed access by province, with a clear bar graph starting at 0.", [5], "A well-designed descriptive study."],
  ["A blog reports that cities with more coffee shops have more patents per person (r = 0.7) and concludes coffee drives innovation.", [3], "An association across cities; city size and wealth are hidden variables."],
];

export function CritiqueLab() {
  const [i, setI] = useState(0), [sel, setSel] = useState<boolean[]>(FLAWS.map(() => false)), [shown, setShown] = useState(false);
  const s = STUDIES[i % STUDIES.length], ok = FLAWS.every((_, k) => sel[k] === s[1].includes(k));
  return (
    <WidgetCard title="Critique the study" subtitle="select every flaw you find (or “no flaw of this kind”), then check">
      <div style={{ padding: "12px 14px", background: C.panel, borderRadius: 10, fontSize: 15, color: C.ink }}>{s[0]}</div>
      {FLAWS.map((f, k) => <Check key={f} on={sel[k]} label={f} onClick={() => { if (!shown) setSel(sel.map((t, j) => (j === k ? !t : t))); }} />)}
      <Row gap={8}>
        <button type="button" style={btn(true)} onClick={() => setShown(true)}>check</button>
        <button type="button" style={btn()} onClick={() => { setI(i + 1); setSel(FLAWS.map(() => false)); setShown(false); }}>next study →</button>
      </Row>
      <Readout tone={shown ? (ok ? "green" : "amber") : "blue"}>
        <MathText html={shown ? `${ok ? "Exactly right." : `The flaws are: ${s[1].map((k) => FLAWS[k]).join(", ")}.`} ${s[2]}` : "Ask: who was studied and how were they chosen? How were the questions asked? Does the design support the claim? Are the graphs honest?"} />
      </Readout>
    </WidgetCard>
  );
}
