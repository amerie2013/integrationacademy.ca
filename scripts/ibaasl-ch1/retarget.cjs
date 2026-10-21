// One-off: point the pipeline copied from scripts/mcr3u-ch3 at IB AA SL chapter 1.
//   node scripts/ibaasl-ch1/retarget.cjs
const fs = require("fs");
const D = "E:/projects/integrationacademy-ca/scripts/ibaasl-ch1/";
const CH = 1, NAME = "Sequences and Series";
const all = [
  ["mcr3u-ch3", "ibaasl-ch1"], ["4819065e-1703-478f-adb7-8226825be6aa", "f635431f-3244-45c3-9c4a-39a33fd209b9"],
  ['eq("code", "MCR3U")', 'eq("code", "IBAASL")'], ["mcr3u-${", "ibaasl-${"],
  ["l3_", `l${CH}_`], ['like("code", "3.%")', `like("code", "${CH}.%")`], ['like("topic", "3.%")', `like("topic", "${CH}.%")`],
  ["MCR3U chapter 3", `IB AA SL chapter ${CH}`], ["chapter 3", `chapter ${CH}`], ["Chapter 3 MCR3U", `Chapter ${CH} IB AA SL`],
  ["renumber3.mjs", "restructure.mjs"],
];
const per = {
  "ws/build.mjs": [
    [String.raw`footnotesize MCR3U \textperiodcentered`, String.raw`footnotesize IB AA SL \textperiodcentered`],
    [String.raw`Functions, Grade 11 (MCR3U) \textperiodcentered{} Chapter 3: Quadratic Functions`, String.raw`Mathematics: Analysis \& Approaches SL (IB) \textperiodcentered{} Chapter 1: Sequences and Series`],
    [String.raw`\textbf{Ontario MCR3U:}`, String.raw`\textbf{Syllabus (AA SL):}`],
    ['grade: "MCR3U"', 'grade: "IB AA SL"'],
    ['codes = ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8"]', 'codes = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]'],
    ["  // brand-new chapter-3 worksheets (3.2, 3.3 after the 3.1 split) have no row yet: insert at position 3000 + lesson number", "  // brand-new worksheets (1.4) have no row yet: insert at position 1000·chapter + lesson number"],
    ["position: 3000 + Number(code.split(\".\")[1])", "position: 1000 * Number(code.split(\".\")[0]) + Number(code.split(\".\")[1])"],
  ],
  "bank/publish.mjs": [['names = ["3_1", "3_2", "3_3", "3_4", "3_5", "3_6", "3_7", "3_8"]', 'names = ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6"]']],
  "check.mjs": [["(default: every lesson in v2/)", "(default: every lesson)"]],
  "bank/fig.mjs": [["// Bank/assignment figures for MCR3U chapter 3 (shared helpers from chapter 1).", "// Bank/assignment figures for IB AA SL chapter 1 (shared coordinate-plane helpers)."]],
  "ws/figT.mjs": [["// Figures for the MCR3U chapter 1 LaTeX worksheets", "// Figures for the IB AA SL chapter 1 LaTeX worksheets"]],
};
for (const f of ["check.mjs", "lessons-publish.mjs", "written.mjs", "ws/build.mjs", "ws/figT.mjs", "bank/kit.mjs", "bank/fig.mjs", "bank/publish.mjs", "asg/publish.mjs"]) {
  let s = fs.readFileSync(D + f, "utf8");
  for (const [a, b] of per[f] ?? []) { if (!s.includes(a)) throw new Error(`${f}: missing ${a.slice(0, 60)}`); s = s.split(a).join(b); }
  for (const [a, b] of all) s = s.split(a).join(b);
  fs.writeFileSync(D + f, s);
}
console.log("ok");
