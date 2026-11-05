// MPM2D bank, 2026-11-05: make linked questions stand alone and attach figures (same method as MTH1W and MCR3U).
// Each entry: old = the prompt today; to = new prompt (optional); fig = key in figs.mjs (optional);
// fb = [old feedback, new feedback] (optional).
//   node scripts/mpm2d-bank-figures/patch.mjs --source   -> rewrite the bank source files
//   node scripts/mpm2d-bank-figures/patch.mjs            -> dry run: compare the sources with the database
//   node scripts/mpm2d-bank-figures/patch.mjs --apply    -> back up the rows, upload figures, update only these rows
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { pathToFileURL } from "url";
import { FIG } from "./figs.mjs";

const r = String.raw;
export const PATCH = [
  // ---- questions that leaned on another question ----
  { old: `For the gym in the previous situation (3 months: 115 dollars; 7 months: 215 dollars), what is the sign-up fee (dollars)?`, to: `A gym charges a sign-up fee plus a monthly fee. Three months cost 115 dollars and seven months cost 215 dollars. What is the sign-up fee (dollars)?`, fb: ["$115-3(25)=40$.", "Monthly fee $25$; $115-3(25)=40$."] },
  { old: r`In the same triangle ($AD=4$, $DB=9$), find $AC$ to two decimal places.`, to: r`In right $\triangle ABC$ ($\angle C=90^\circ$), the altitude $CD$ meets the hypotenuse at $D$ with $AD=4$ and $DB=9$. Find $AC$ to two decimal places.`, fig: "alt49" },
  { old: r`In the same $7$-$24$-$25$ triangle, find $\cos\theta$ for the angle opposite $7$.`, to: r`A right triangle has legs $7$ and $24$. Find $\cos\theta$ for the angle opposite $7$.`, fig: "t724" },
  { old: r`In the same problem ($40^\circ$ and $28^\circ$, $30$ m apart), how far is $A$ from the tower (m)?`, to: r`The angle of elevation to the top of a tower is $40^\circ$ from point $A$ and $28^\circ$ from point $B$, $30$ m farther away. How far is $A$ from the tower (m)?`, fig: "tw4028" },
  { old: r`In the same trip ($30$ km, then $45$ km, $70^\circ$ at the turn), find the angle at the start between the first leg and the return path.`, to: r`A ship sails $30$ km, turns and sails $45$ km; the angle between the legs at the turn is $70^\circ$. Find the angle at the start between the first leg and the return path.`, fig: "trip" },
  { old: r`Continue: $a=7$, $\angle B=40^\circ$, $c=9$. Find $\angle A$.`, to: r`A triangle has $a=7$, $\angle B=40^\circ$ and $c=9$. Find $\angle A$.`, fig: "sas79" },
  { old: r`Continue: $500$ m apart, $58^\circ$ and $65^\circ$ on opposite sides. Find the height of the hill (m).`, to: r`From two points on opposite sides of a hill, $500$ m apart, the angles of elevation to the top are $58^\circ$ and $65^\circ$. Find the height of the hill (m).`, fig: "hill" },

  // ---- questions that describe a scene or shape: figure added, wording kept ----
  ...[
    // chapter 2
    [r`In the right triangle $(0,0)$, $(6,0)$, $(0,8)$`, "g068"],
    [r`Find the perimeter of the triangle with vertices $(-2,-1)$`, "gP1"],
    [r`Find the perimeter of the quadrilateral with vertices $(-3,0)$`, "gQ"],
    [r`Find the perimeter of $\triangle ABC$ with $A(-4,-3)$`, "gP3"],
    [r`Classify the triangle $(0,0)$, $(5,0)$, $(1,3)$`, "g513"],
    [r`Find the perimeter of the triangle with vertices $(0,0)$, $(3,0)$, $(0,4)$`, "g034"],
    [r`$ABCD$ is a parallelogram with $A(1,1)$`, "par3"],
    [r`A rhombus has vertices $(-4,0)$`, "rho3"],
    [r`A rhombus has diagonals from $(0,-4)$`, "rhoD"],
    [r`$ABCD$ is a rhombus with $A(0,0)$`, "rho4"],
    [r`Find the length of the chord of $x^2+y^2=25$ on the line $y=4$`, "c25"],
    [r`Find the length of the chord of $x^2+y^2=100$ on the line $x=-6$`, "c100"],
    [r`Find the length of the chord of $x^2+y^2=72$ on the line $y=x$`, "c72"],
    [r`For $\triangle ABC$ with $A(-2,0)$, $B(4,4)$, $C(6,-2)$, which is the median`, "abc1"],
    [r`For $\triangle ABC$ with $A(-2,0)$, $B(4,4)$, $C(6,-2)$, find the $y$-intercept of the right bisector`, "abc1"],
    [r`For $\triangle ABC$ with $A(-2,0)$, $B(4,4)$, $C(6,-2)$, find the $y$-intercept of the altitude from $C$`, "abc1"],
    [r`For $\triangle ABC$ with $A(-2,0)$, $B(4,4)$, $C(6,-2)$, find the $y$-intercept of the altitude from $A$`, "abc1"],
    [r`For $\triangle ABC$ with $A(-2,0)$, $B(4,4)$, $C(6,-2)$, find the $x$-coordinate of the centroid`, "abc1"],
    [r`For $\triangle ABC$ with $A(-2,0)$, $B(4,4)$, $C(6,-2)$, find the slope`, "abc1"],
    [r`For $\triangle PQR$ with $P(-3,-1)$, $Q(5,3)$, $R(1,7)$, find the $x$-coordinate of the orthocentre`, "pqr"],
    [r`For $\triangle PQR$ with $P(-3,-1)$, $Q(5,3)$, $R(1,7)$, find the $y$-coordinate of the circumcentre`, "pqr"],
    [r`For $\triangle PQR$ with $P(-3,-1)$, $Q(5,3)$, $R(1,7)$, find the $y$-coordinate of the centroid`, "pqr"],
    [r`For $\triangle PQR$ with $P(-3,-1)$, $Q(5,3)$, $R(1,7)$, find the radius`, "pqr"],
    [r`Triangle $A(0,0)$, $B(10,0)$, $C(4,6)$. Find the $y$-coordinate of the orthocentre`, "abc2"],
    [r`Triangle $A(0,0)$, $B(10,0)$, $C(4,6)$: the circumcentre`, "abc2"],
    [r`Triangle $A(0,0)$, $B(10,0)$, $C(4,6)$: find the $y$-coordinate`, "abc2"],
    [r`Find the length of the altitude from $A(2,8)$`, "abc3"],
    [r`Find the area of $\triangle ABC$ with $A(2,8)$`, "abc3"],
    [r`Triangle $A(0,0)$, $B(6,0)$, $C(3,5)$. What is the median`, "abc4"],
    [r`$A(0,0)$, $C(8,0)$ and $B(4,7)$.`, "abc5"],
    [r`Find the length of the median from $A(0,0)$ in the triangle with $B(4,6)$`, "abc6"],
    [r`Right triangle $O(0,0)$, $A(8,0)$, $B(0,6)$`, "oab"],
    [r`Right triangle $(0,0)$, $(5,0)$, $(0,7)$`, "r057"],
    [r`Find the $x$-coordinate of the centroid of $(0,0)$, $(6,0)$, $(0,9)$`, "c069"],
    [r`Find the $y$-coordinate of the centroid of $(0,0)$, $(6,0)$, $(0,9)$`, "c069"],
    [r`Find the $y$-coordinate of the centroid of $(-5,2)$`, "c528"],
    [r`Find the $y$-coordinate of the centroid of $(-4,0)$`, "c448"],
    [r`$A(-4,0)$, $B(2,-2)$, $C(0,6)$. Find the slope of the median`, "abc7"],
    // chapters 4 and 5
    [r`A farmer fences three sides of a rectangle against a wall with $40$ m`, "pen40"],
    [r`A garden against a wall uses $24$ m`, "pen24"],
    [r`A pen against a wall uses $40$ m`, "pen40"],
    [r`A farmer has $60$ m of fencing for a garden against a wall`, "pen60"],
    [r`A pen along a barn uses $100$ m`, "pen100"],
    [r`A field along a river uses $200$ m`, "pen200"],
    [r`$400$ m of fencing encloses a rectangle split into three`, "pens3"],
    [r`A $12$ cm by $8$ cm photo has a frame`, "photo"],
    [r`A garden is $3$ m longer than it is wide. A $1$ m path`, "gardenPath"],
    [r`An arch is $50$ m wide at ground level and $20$ m tall`, "arch50"],
    // chapter 6: similar triangles
    [r`$DE\parallel BC$ in $\triangle ABC$ with $AD=2$`, "par23"],
    [r`$DE\parallel BC$ in $\triangle ABC$, $AD=x$`, "parX"],
    [r`$DE\parallel BC$, $AD=3$, $DB=x$`, "parX2"],
    [r`In $\triangle ABC$, $DE\parallel BC$ with $AD:DB=2:3$`, "par2t3"],
    [r`$DE\parallel BC$, $AD=4$, $DB=8$`, "par48"],
    [r`$DE\parallel BC$, $AE=6$, $EC=3$`, "par63"],
    [r`Segments $AE$ and $BD$ cross at $C$`, "cross1"],
    [r`$AE$ and $BD$ cross at $C$ with $AB\parallel DE$. Why`, "cross0"],
    [r`In right $\triangle ABC$ ($\angle C=90^\circ$), the altitude $CD$ meets the hypotenuse at $D$ with $AD=4$ and $DB=9$. Find $CD$`, "alt49"],
    [r`In trapezoid $ABCD$, $AB\parallel CD$`, "trap"],
    [r`$\triangle ABC\sim\triangle DEF$ with $AB=6$, $BC=8$, $AC=10$ and $DE=9$. Find $DF$`, "simPair"],
    [r`$\triangle ABC\sim\triangle DEF$ with $AB=6$, $BC=8$, $AC=10$ and $DE=9$. Find $EF$`, "simPair"],
    [r`A $1.5$ m stick casts a $2$ m shadow`, "sh15"],
    [r`A $2$ m post casts a $1.6$ m shadow`, "sh2"],
    [r`A $1.6$ m person casts a $2.4$ m shadow`, "sh16"],
    [r`A $1$ m stick casts a $0.8$ m shadow`, "sh1"],
    [r`A pole casts a $4$ m shadow when a $1.2$ m post`, "sh12"],
    [r`A building casts a $42$ m shadow`, "sh42"],
    [r`Eyes $1.5$ m high, $2$ m from a mirror`, "mir1"],
    [r`A person with eyes $1.7$ m high stands $2.5$ m from a mirror`, "mir2"],
    [r`A person with eyes $1.5$ m high is $3$ m from a mirror`, "mir3"],
    [r`A $1.8$ m person stands $6$ m from a $6$ m lamp post`, "lamp1"],
    [r`A $1.8$ m person stands $4$ m from a $4.8$ m lamp post`, "lamp2"],
    [r`A $1.8$ m person stands $4$ m from a $4.8$ m lamp. Which`, "lamp2"],
    [r`A $1.8$ m person walks away from a $5.4$ m lamp post`, "lamp3"],
    [r`A $1.5$ m child $2$ m from a lamp post`, "lamp4"],
    [r`A $1.6$ m person stands $5$ m from a pole`, "tips1"],
    [r`A $1.6$ m person stands $9$ m from a tree`, "tips2"],
    [r`A $15$ cm ruler held $50$ cm`, "rul1"],
    [r`A $30$ cm ruler held $0.6$ m`, "rul2"],
    [r`A $25$ cm ruler held $60$ cm`, "rul3"],
    [r`A ramp rises $1$ m over a horizontal run of $5$ m`, "ramp1"],
    [r`A ramp has a run of $8$ m and a rise of $1.2$ m`, "ramp2"],
    [r`A ramp has a run of $12$ m and a rise of $1.5$ m`, "ramp3"],
    // chapter 6: trigonometry
    [r`A right triangle has legs $7$ and $24$. Find $\sin\theta$`, "t724"],
    [r`A $4$ m ladder makes a $60^\circ$`, "l460"],
    [r`A $6$ m ladder is safest at $75^\circ$`, "l675"],
    [r`A $7$ m ladder makes a $74^\circ$`, "l774"],
    [r`A $5$ m ladder makes a $70^\circ$`, "l570"],
    [r`A $6$ m ladder has its foot $1.8$ m`, "l618"],
    [r`A $5$ m ladder reaches $4.5$ m`, "l545"],
    [r`A ladder must reach a window $7$ m`, "l772"],
    [r`A kite string is $50$ m long`, "k50"],
    [r`A kite string is $30$ m long`, "k30"],
    [r`A kite on an $80$ m string`, "k80"],
    [r`A guy wire is attached $15$ m up`, "gw58"],
    [r`A guy wire runs from the ground $20$ m`, "gw20"],
    [r`From $120$ m away on level ground`, "cl28"],
    [r`A tree casts an $18$ m shadow`, "tr52"],
    [r`When the sun is $35^\circ$ above the horizon`, "po35"],
    [r`From $50$ m away on level ground, a $30$ m building`, "b5030"],
    [r`From $20$ m away on level ground`, "p2045"],
    [r`From $30$ m away on level ground`, "tr3040"],
    [r`A $45$ m building is $70$ m away`, "b4570"],
    [r`A $9$ m pole casts a $12$ m shadow`, "p936"],
    [r`A $1.8$ m person casts a $2.5$ m shadow`, "s1825"],
    [r`From the top of a $40$ m tower, a boat`, "d40"],
    [r`From the top of a $50$ m cliff`, "d5030"],
    [r`From the top of a $30$ m lighthouse`, "d30"],
    [r`From the top of a $75$ m cliff`, "d75"],
    [r`From the top of a $60$ m tower`, "d60"],
    [r`A person whose eyes are $1.5$ m high stands $40$ m`, "e15"],
    [r`A person whose eyes are $1.6$ m high stands $55$ m`, "e16"],
    [r`A person whose eyes are $1.7$ m high stands $30$ m`, "e17"],
    [r`A person whose eyes are $1.6$ m high sees the top of a tower at $34^\circ$`, "e162"],
    [r`A person whose eyes are $1.5$ m high stands $25$ m`, "e152"],
    [r`The angle of elevation to the top of a tower is $40^\circ$ from point $A$ and $28^\circ$ from point $B$, $30$ m farther away. How tall`, "tw4028"],
    [r`The angles of elevation to a building top are $50^\circ$ from $P$`, "tw5035"],
    [r`From a $55$ m lighthouse, the angles of depression to two boats on the same side`, "bt55s"],
    [r`From a $55$ m lighthouse, the angles of depression to two boats on opposite sides`, "bt55o"],
    [r`From an $80$ m cliff`, "bt80"],
    // chapter 7
    [r`In acute $\triangle ABC$, $\angle A=45^\circ$, $\angle B=60^\circ$ and $a=10$`, "s4560"],
    [r`In acute $\triangle ABC$, $\angle A=50^\circ$, $\angle B=70^\circ$ and $a=8$`, "s5070"],
    [r`In acute $\triangle ABC$, $\angle A=40^\circ$, $\angle B=65^\circ$ and $b=12$`, "s4065"],
    [r`In acute $\triangle ABC$, $\angle A=58^\circ$, $\angle B=72^\circ$ and $a=15$`, "s5872"],
    [r`In acute $\triangle ABC$, $\angle A=38^\circ$, $\angle B=75^\circ$ and $a=12$`, "s3875"],
    [r`In acute $\triangle ABC$, $\angle A=56^\circ$, $\angle B=68^\circ$ and $c=25$`, "s5668"],
    [r`In acute $\triangle ABC$, $\angle A=60^\circ$, $\angle B=50^\circ$ and $c=10$`, "s5550"],
    [r`Lighthouses $A$ and $B$ are $15$ km apart`, "light"],
    [r`Two towers are $20$ km apart`, "fire"],
    [r`Points $A$ and $B$ are $90$ m apart`, "riv"],
    [r`Points $A$ and $B$ are $120$ m apart`, "buoy"],
    [r`Points $A$ and $B$ are $50$ m apart`, "tree70"],
    [r`Two people $40$ m apart`, "op4861"],
    [r`Two people $30$ m apart`, "op5366"],
    [r`Two people $50$ m apart`, "op5266"],
    [r`Two people $60$ m apart`, "op5258"],
    [r`From two points on opposite sides of a hill, $500$ m apart, the angles of elevation to the top are $58^\circ$ and $65^\circ$. The first`, "hill"],
    [r`In acute $\triangle ABC$, $b=5$, $c=6$ and $\angle A=60^\circ$`, "sas560"],
    [r`In acute $\triangle ABC$, $b=8$, $c=9$ and $\angle A=55^\circ$`, "sas855"],
    [r`In acute $\triangle ABC$, $a=10$, $b=12$ and $\angle C=48^\circ$`, "sas1012"],
    [r`In acute $\triangle PQR$, $q=7$, $r=10$ and $\angle P=52^\circ$`, "sasPQR"],
    [r`Two sides of a triangle are $9$ and $11$ with a $40^\circ$`, "sas911"],
    [r`Two sides of a triangle are $15$ and $18$ with a $66^\circ$`, "sas1518"],
    [r`Solve for the third side: $a=20$, $b=24$, $\angle C=48^\circ$`, "sas2024"],
    [r`A triangle has $a=7$, $\angle B=40^\circ$ and $c=9$. The first step`, "sas79"],
    [r`A plane flies $180$ km`, "plane"],
    [r`From a lighthouse, ship $P$ is $8$ km away`, "ships"],
    [r`From a point, a surveyor measures $240$ m and $210$ m`, "field"],
    [r`A lighthouse sees two boats $7$ km and $9$ km away`, "boats79"],
    [r`A surveyor measures $AC=150$ m`, "surv"],
    [r`A tunnel will be dug through a hill`, "tunnel"],
    [r`A ship sails $30$ km, turns and sails $45$ km; the angle between the legs at the turn is $70^\circ$. How far`, "trip"],
    [r`A triangle has sides $4$, $5$ and $6$`, "sss456"],
    [r`A triangle has sides $7$, $8$ and $9$`, "sss789"],
    [r`A triangle has sides $6$, $6$ and $5$`, "sss665"],
    [r`A triangle has sides $10$, $11$ and $12$`, "s101112"],
    [r`A triangle has sides $5$, $7$ and $8$`, "s578"],
    [r`A triangle has sides $11$, $14$ and $16$`, "s111416"],
    [r`A triangle has sides $8$, $11$ and $12$`, "s81112"],
    [r`A triangle has sides $13$, $15$ and $17$`, "s131517"],
    [r`A triangle has sides $9$, $10$ and $12$`, "s91012"],
    [r`Three towns form a triangle with roads of $24$ km`, "towns"],
    [r`Points $P$, $Q$ and $R$ are $8$ km, $9$ km and $11$ km apart`, "pqrD"],
  ].map(([old, fig]) => ({ old, fig })),
];

const ROOT = path.resolve("scripts");
const CHS = [1, 2, 3, 4, 5, 6, 7].map((n) => `mpm2d-ch${n}`);
const files = CHS.flatMap((c) => fs.readdirSync(path.join(ROOT, c, "bank")).filter((f) => /^(em|h)\d/.test(f)).map((f) => path.join(ROOT, c, "bank", f)));
const IMPORT = `import { FIG } from "../../mpm2d-bank-figures/figs.mjs";\n`;
for (const p of PATCH) if (p.fig && !FIG[p.fig]) throw new Error("no figure " + p.fig);
const dbl = (s) => s.replace(/\\/g, "\\\\");

if (process.argv.includes("--source")) {
  // Find every line first, so a miss stops the run before any file is written.
  const plan = PATCH.filter((p) => !p.srcDone).map((p) => {
    const hits = [];
    for (const f of files) for (const [i, l] of fs.readFileSync(f, "utf8").split("\n").entries()) {
      // 2.4 writes these triangles through a shared ${T} in the source file
      const needle = p.old.replace(/^For \$\\triangle (?:ABC\$ with \$A\(-2,0\)\$, \$B\(4,4\)\$, \$C\(6,-2\)\$|PQR\$ with \$P\(-3,-1\)\$, \$Q\(5,3\)\$, \$R\(1,7\)\$)/, "For ${T}");
      const lit = l.includes(needle) ? needle : l.includes(dbl(needle)) ? dbl(needle) : null;
      if (lit) hits.push({ f, i, lit, esc: lit !== p.old });
    }
    if (hits.length !== 1) console.log(`${hits.length} source lines hold: ${p.old}`);
    return { p, hit: hits[0], n: hits.length };
  });
  if (plan.some((x) => x.n !== 1)) process.exit(1);
  for (const { p, hit } of plan) {
    const lines = fs.readFileSync(hit.f, "utf8").split("\n");
    let l = lines[hit.i];
    if (p.to) { const raw = /(String\.raw|\bS)`/.test(l); const t = raw ? p.to : dbl(p.to); l = l.replace(hit.lit, () => t); }
    if (p.fb) { if (!l.includes(p.fb[0])) throw new Error("feedback not on the line: " + p.fb[0]); l = l.replace(p.fb[0], () => p.fb[1]); }
    if (p.fig) {
      const fig = `FIG.${p.fig}`;
      if (/, null, [\d.]+\),\s*$/.test(l)) l = l.replace(/, null, ([\d.]+)\),(\s*)$/, `, ${fig}, $1),$2`);
      else if (/\),\s*$/.test(l)) l = l.replace(/\),(\s*)$/, `, ${fig}),$1`);
      else throw new Error("line ending not recognised: " + l.slice(-50));
    }
    lines[hit.i] = l;
    let text = lines.join("\n");
    if (p.fig && !text.includes(IMPORT)) { text = IMPORT + text; for (const x of plan) if (x.hit.f === hit.f) x.hit.i += 1; }
    fs.writeFileSync(hit.f, text);
  }
  console.log(`rewrote ${plan.length} source lines`);
  process.exit(0);
}

const pool = [];
for (const f of files) {
  const m = await import(pathToFileURL(f).href);
  for (const v of Object.values(m)) if (Array.isArray(v)) pool.push(...v.filter((q) => q && q.prompt));
}
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const { createClient } = await import("@supabase/supabase-js");
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "ff375ff3-820d-4b59-9822-4b615aa0df97";
let rows = [];
for (let from = 0; ; from += 1000) {
  const { data, error } = await db.from("bank_questions").select("*").eq("course_id", CID).order("id").range(from, from + 999);
  if (error) throw error;
  rows.push(...data);
  if (data.length < 1000) break;
}
rows = rows.filter((x) => x.kind !== "long_answer");
const APPLY = process.argv.includes("--apply");
if (APPLY) { const dir = path.join(ROOT, "mpm2d-bank-figures", "backup"); fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(path.join(dir, `bank-before-${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify(rows.filter((x) => PATCH.some((p) => x.prompt.startsWith(p.old))), null, 1)); }

let bad = 0, updated = 0, withFig = 0, reworded = 0;
const key = (a, c) => (Array.isArray(c) ? (Array.isArray(a) ? a : [a]).map((id) => c.find((x) => x.id === id)?.text).sort().join("|") : JSON.stringify(a));
const same = (a, b) => (typeof a === "number" && typeof b === "number" ? Math.abs(a - b) < 1e-9 : false);
for (const p of PATCH) {
  const now = p.to ?? p.old;
  const dbHits = rows.filter((x) => x.prompt.startsWith(p.old) || (p.to && x.prompt.startsWith(now)));
  const srcHits = pool.filter((q) => q.prompt.startsWith(now));
  if (dbHits.length !== 1 || srcHits.length !== 1) { bad++; console.log(`MATCH db=${dbHits.length} src=${srcHits.length}: ${p.old.slice(0, 80)}`); continue; }
  const row = dbHits[0], q = srcHits[0];
  if (key(row.answer, row.choices) !== key(q.answer, q.choices) && !same(row.answer, q.answer)) { bad++; console.log(`ANSWER differs: ${p.old.slice(0, 60)}: ${key(row.answer, row.choices)} vs ${key(q.answer, q.choices)}`); continue; }
  if (p.fig && !q.fig) { bad++; console.log(`NO FIG in source: ${p.old.slice(0, 60)}`); continue; }
  if (p.fig && row.image_url && !row.image_url.includes("/mpm2d-fig/")) { bad++; console.log(`ALREADY HAS IMAGE: ${p.old.slice(0, 60)}`); continue; }
  const fields = { prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, feedback: q.feedback };
  if (APPLY) {
    if (p.fig) {
      const svg = FIG[p.fig];
      const k = `mpm2d-fig/${p.fig}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
      const up = await db.storage.from("graph-images").upload(k, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      fields.image_url = db.storage.from("graph-images").getPublicUrl(k).data.publicUrl;
    }
    const u = await db.from("bank_questions").update(fields).eq("id", row.id);
    if (u.error) throw u.error;
  }
  updated++; if (p.fig) withFig++; if (p.to) reworded++;
}
console.log(`${APPLY ? "UPDATED" : "would update"} ${updated} of ${PATCH.length} rows (${reworded} reworded, ${withFig} new figures); ${bad} problems`);
process.exit(bad ? 1 : 0);
