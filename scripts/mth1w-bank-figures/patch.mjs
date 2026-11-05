// MTH1W bank, 2026-11-05: make linked questions stand alone and attach figures.
// Each entry: old = the prompt as written today; to = new prompt (optional); fig = key in figs.mjs (optional);
// fb = [old feedback, new feedback] (optional). The figures themselves live in figs.mjs.
//   node scripts/mth1w-bank-figures/patch.mjs --source   -> rewrite the bank source files
//   node scripts/mth1w-bank-figures/patch.mjs            -> dry run: compare the sources with the database
//   node scripts/mth1w-bank-figures/patch.mjs --apply    -> back up the rows, upload figures, update only these rows
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { pathToFileURL } from "url";
import { FIG } from "./figs.mjs";

const r = String.raw;
export const PATCH = [
  // ---- questions that leaned on another question ----
  { old: `The > in the program above is changed to <. What does it print now?`, to: `In this program the comparison is x < m. What does it print?` },
  { old: `Using the same kind of graph: a person goes 8 km in 20 min. What is the speed in km/min?`, to: `The graph shows a person travelling at a steady speed. What is the speed in km/min?`, fig: "walk" },
  { old: `For the same trip, what total distance did the cyclist ride (km)?`, to: `The graph shows a cyclist's distance from home during a trip. What total distance did the cyclist ride (km)?` },
  { old: `For the same relation, extrapolate y at x = 0.`, to: `A relation has (2, 11) and (6, 23) and grows at a constant rate. Extrapolate y at x = 0.`, fb: ["11 − 2(3) = 5.", "Rate 3; 11 − 2(3) = 5."] },
  { old: `For the same seedling, extrapolate its height on day 20 (cm).`, to: `A seedling is 4 cm on day 3 and 10 cm on day 9, growing steadily. Extrapolate its height on day 20 (cm).`, fb: ["4 + 17 = 21 (less reliable).", "1 cm per day: 4 + 17 = 21 (less reliable)."] },
  { old: r`For the curve in the previous question (through $(2,6)$, $(3,4)$, $(4,3)$), what is $k$ in $xy=k$?`, to: r`The graph shows a curve through $(2,6)$, $(3,4)$ and $(4,3)$. What is $k$ in $xy=k$?`, fig: "xy12" },
  { old: `For the same table (7, 10, 13), what is m?`, to: `A table: x = 0, 1, 2; y = 7, 10, 13. In y = mx + b, what is m?` },
  { old: `Read the same graph: what is the slope?`, to: `The graph shows a line. What is its slope?` },
  { old: `For the plan in the previous graph, how many minutes cost 62 dollars?`, to: `The graph shows a plan's cost. How many minutes cost 62 dollars?`, fig: "plan", fb: ["0.15t + 20 = 62.", "Rate 30/200 = 0.15; 0.15t + 20 = 62."] },
  { old: `Write the equation of the line in the previous graph (through (0, −1) and (2, 2)).`, to: `Write the equation of the line shown in the graph, which passes through (0, −1) and (2, 2).`, fig: "slope15" },
  { old: `For the same options, which is cheaper for 10 hours?`, to: `Option A: 50 + 5h. Option B: 20 + 10h. Which is cheaper for 10 hours?` },
  { old: `For the same options, after how many hours do they cost the same?`, to: `Option A: 50 + 5h. Option B: 20 + 10h. After how many hours do they cost the same?` },
  { old: `For the same gyms, after how many months does B become the cheapest of all three?`, to: `Three gyms: A = 60 + 25m, B = 150 + 15m, C = 35m. After how many months does B become the cheapest of all three?` },
  { old: `For those gyms, what is the cost at the break-even point (dollars)?`, to: `Two gym plans: A = 40 + 30m; B = 100 + 20m. What is the cost at the break-even point (dollars)?`, fb: ["40 + 180.", "10m = 60, so m = 6; 40 + 180."] },
  { old: r`Find the y-coordinate of that intersection ($y=\frac12x+2$, $y=-x+11$).`, to: r`Find the y-coordinate of the intersection of $y=\frac12x+2$ and $y=-x+11$.`, fb: ["−6 + 11.", "x = 6; −6 + 11."] },
  { old: `For the same rectangle (x = 4, x = −2, y = 1, y = 6), what is its perimeter?`, to: r`The lines $x=4$, $x=-2$, $y=1$ and $y=6$ form a rectangle. What is its perimeter?` },
  { old: `Write the same line (through (0, 4) and (6, 0)) in general form.`, to: `Write the line through (0, 4) and (6, 0) in general form.`, fb: ["×3: 3y = −2x + 12.", "m = −2/3, so y = −(2/3)x + 4; ×3: 3y = −2x + 12."] },
  { old: r`What is the y-coordinate of that intersection ($2x+y-7=0$ and $x-y-2=0$)?`, to: r`What is the y-coordinate of the intersection of $2x+y-7=0$ and $x-y-2=0$?` },
  { old: `For that same set-up (road y = −0.75x + 12, path from (0, 0) at a right angle), how long is the path (km)?`, to: `A road follows y = −0.75x + 12 (km grid). A straight path runs from the town at (0, 0) to meet the road at a right angle. How long is the path (km)?`, fig: "road" },
  { old: `Continuing: 3.14159 = 3;8,b. Find b to the nearest whole number.`, to: `In base 60, 3.14159 = 3;8,b. Find b to the nearest whole number.` },
  { old: `What value of π does the Egyptian rule imply, to 2 decimal places?`, to: `The Egyptian rule takes a circle's area as the square of 8/9 of its diameter. What value of π does this rule imply, to 2 decimal places?` },
  { old: `For those bars (92 and 98), by what percent is the second value actually larger (1 decimal place)?`, to: `A graph's axis runs from 90 to 100. Two bars show 92 and 98. By what percent is the second value actually larger (1 decimal place)?`, fig: "bars92" },
  { old: `With the 17% response rate above, the biggest concern is…`, to: `A survey had 2000 questionnaires mailed and 340 returned, a 17% response rate. The biggest concern is…` },
  { old: `For that graph (A = 55, B = 70), what is the actual ratio B ÷ A, to 2 decimal places?`, to: `A graph's axis starts at 50. Bar A reaches 55 and bar B reaches 70. What is the actual ratio B ÷ A, to 2 decimal places?`, fig: "bars55" },
  { old: `For those times, find the mean with the outlier removed (2 decimal places).`, to: `Times (s): 41, 44, 45, 47, 48, 50, 52, 55, 79. The value 79 is an outlier. Find the mean with the outlier removed (2 decimal places).` },
  { old: `In the histogram above (40 students), the median is in which interval?`, to: `The histogram shows the heights of 40 students. The median is in which interval?`, fig: "hist40" },
  { old: `For that frequency table (20 games), find the median number of goals.`, to: `A frequency table of goals: 0 goals: 3 games, 1: 5, 2: 7, 3: 4, 4: 1. Find the median number of goals.` },
  { old: `Find the range of the data in that box plot (min 25, max 60).`, to: `Find the range of the data in the box plot.`, fig: "box25" },
  { old: `For that line (slope −7.5 through (1.5, 92)), find the y-intercept.`, to: `A line of best fit passes through (1.5, 92) and (7.5, 47). Find its y-intercept.`, fb: ["92 = −11.25 + b.", "Slope −45 ÷ 6 = −7.5; 92 = −11.25 + b."] },
  { old: `For that run, how much faster (km/h) was the first part than the second?`, to: `A runner's distance–time graph goes from (0, 0) to (12, 3) and then to (30, 6) (minutes, km). How much faster (km/h) was the first part than the second?`, fig: "run" },
  { old: `In that graph, find the speed from 35 to 45 minutes in m/min.`, to: `The graph shows a person's distance from home. Find the speed from 35 to 45 minutes in m/min.`, fig: "stop" },
  { old: `For that T-shirt model, what is the greatest revenue (dollars)?`, to: `T-shirts sell 300 at 12 dollars; each 1-dollar increase loses 15 sales. What is the greatest revenue (dollars)?`, fb: ["16 × 240.", "R = (12 + x)(300 − 15x) is greatest at x = 4: 16 × 240."] },
  { old: `For that gym (25 dollars per month; 3 months = 125 dollars), what is the joining fee (dollars)?`, to: `A gym charges a joining fee plus a monthly fee. 3 months cost 125 dollars and 7 months cost 225 dollars. What is the joining fee (dollars)?`, fb: ["125 − 75.", "Monthly fee 100 ÷ 4 = 25; 125 − 75."] },
  { old: `The prediction at x = 8 in the previous question is…`, to: `The data in the graph go only to x = 6. Using the line to predict y at x = 8 is…`, fig: "predict" },
  { old: `For those rentals (X: 35 + 0.3k; Y: 60 + 0.2k), at how many km are they equal?`, to: `Car rental X: 35 dollars + 0.30 dollars/km. Y: 60 dollars + 0.20 dollars/km. At how many km do they cost the same?` },
  { old: `For that drop, by how much must wants and savings be cut in total to break even (dollars)?`, to: `A budget: net income 2450; rent 950, utilities 110, groceries 380, transit 156, phone 55, eating out 160, entertainment 120, savings 250 (dollars). Income drops 20%. By how much must wants and savings be cut in total to break even (dollars)?`, fb: ["The deficit.", "New income 1960; expenses 2181; the deficit is 221."] },
  { old: `For that budget (needs: rent, food, transit, phone), what percent of income goes to needs (1 decimal place)?`, to: `Expenses: rent 900, food 350, transit 156, phone 60, fun 200, savings 250 (dollars). Net income 2000 dollars. Needs are rent, food, transit and phone. What percent of income goes to needs (1 decimal place)?` },
  { old: `For that chart, what percent of total spending goes to savings (1 decimal place)?`, to: `The chart shows monthly spending. What percent of total spending goes to savings (1 decimal place)?`, fig: "spend" },

  // ---- questions that describe a graph or shape: figure added, wording kept ----
  { old: `A graph of a person's distance from a wall has a segment going down to 0 and then up again. What happened?`, fig: "wall" },
  { old: `A distance–time graph is a straight line through (0, 0) and (5, 2) (minutes, km). Which is true?`, fig: "line52" },
  { old: `A taxi's fare graph starts at (0, 3.75) and has slope 1.6. Which are true? Select all.`, fig: "taxi" },
  { old: `A car rental costs 40 dollars plus 0.25 dollars per km. Which graph feature shows the 40?`, fig: "rental" },
  { old: r`Which inequality has the boundary $y=x+2$ drawn solid and the region above shaded?`, fig: "ineq" },
  { old: `The family y = mx + 4 is drawn for m = −2, −1, 0, 1, 2. Which statement is true?`, fig: "family" },
  { old: `A box plot shows Q1 = 20 and Q3 = 32. Find the IQR.`, fig: "box20" },
  { old: `Box plot A has IQR 6 and box plot B has IQR 15 (same medians). Which statement is correct?`, fig: "boxAB" },
  { old: `A runner's distance–time graph goes from (0, 0) to (12, 3) and then to (30, 6) (minutes, km). Find the average speed for the whole run in km/h.`, fig: "run" },
  { old: `A distance–time graph falls from 9 km to 0 km between t = 30 min and t = 45 min. What is the speed in km/h?`, fig: "fall9" },
  { old: `The scatter plot of speed and stopping distance curves upward. The best model is…`, fig: "stopping" },
  { old: `Points A, B, C, D lie on a circle in order with ∠ABC = 98°. Find ∠ADC.`, fig: "cyclic" },
  { old: `A, B, C are on a circle with centre O and ∠OAB = 24°. Find the inscribed angle ∠ACB, with C on the major arc.`, fig: "oab" },
  { old: `The tangents at A and B meet at T, and ∠ATB = 52°. Find the inscribed angle ∠APB where P is on the major arc AB.`, fig: "tanP" },
  { old: `In △ABC, the exterior angle at C is 4 times ∠A, and ∠B = 51°. Find ∠A.`, fig: "extC" },
  { old: `Chord AB subtends a central angle of (4x − 10)° and an inscribed angle (on the major arc) of (x + 15)°. Find the central angle.`, fig: "chordAlg" },
  { old: `In isosceles △ABC with AB = AC, the exterior angle at B (extending CB beyond B) is 115°. Find ∠A.`, fig: "isoExt" },
  { old: `Triangle OAB is formed by two radii and a chord. The chord AB equals the radius. Find ∠AOB.`, fig: "radiiEq" },
  { old: `AB is a diameter of a circle, C is on the circle and AC = 6, BC = 8. Find the radius.`, fig: "semi68" },
  { old: `A design has 5 identical isosceles triangles meeting at the centre of a circle with their bases forming a regular pentagon. What is each base angle?`, fig: "pentagon" },
  { old: `From a point P outside a circle with radius 5, the tangent length PA is 12. How far is P from the centre?`, fig: "tanP13" },
  { old: `AB is a diameter and C is on the circle with ∠CAB = 27°. Find ∠CBA.`, fig: "semi27" },
  { old: `Two tangents from a point T touch a circle at A and B. If ∠AOB = 110°, find ∠ATB.`, fig: "tanT" },
  { old: `Inscribed angles ∠APB and ∠AQB stand on the same arc. ∠APB = 3x + 4 and ∠AQB = 5x − 12. Find x.`, fig: "sameArc" },
  { old: `Radius OA is drawn to the point A where tangent line TA touches the circle. ∠OTA = 34°. Find ∠AOT.`, fig: "tanOAT" },
  { old: `An inscribed angle stands on an arc of 124° (the central angle). Find the inscribed angle.`, fig: "arc124" },
  { old: `A central angle is 100°. Find an inscribed angle on the same arc.`, fig: "arc100" },
  { old: `An inscribed angle is 25°. Find the central angle on the same arc.`, fig: "arc25" },
  { old: `Two radii of a circle form a triangle with a chord. The angle between the radii is 80°. Find one of the other angles.`, fig: "radii80" },
  { old: `A 7.5 m ladder reaches 7.2 m up a wall. If its foot slides 0.6 m further from the wall, how far down the wall does the top slide (2 decimal places)?`, fig: "ladderSlide" },
  { old: `A ladder 5 m long leans against a wall with its foot 3 m from the wall. How high up does it reach?`, fig: "ladder53" },
  { old: `A point is 9 m from the foot of a 12 m pole.`, fig: "pole" },
  { old: `A square is inscribed in a circle of radius 5. Find the area of the square.`, fig: "sqR5" },
  { old: `A square is inscribed in a circle of diameter 10 cm. Find the square's perimeter to 1 decimal place.`, fig: "sqD10" },
  { old: `A rhombus has diagonals 16 cm and 30 cm. Find its side length.`, fig: "rhomb1630" },
  { old: `A rhombus has diagonals 10 and 24. Find its area.`, fig: "rhomb1024" },
  { old: `An isosceles triangle has equal sides 10 and base 12. Find its height.`, fig: "isos1012" },
  { old: `Find the area of the isosceles triangle with equal sides 10 and base 12.`, fig: "isos1012" },
  { old: `A 13 m ramp rises 5 m. How far does it run horizontally?`, fig: "ramp" },
  { old: `A Norman window is a rectangle 1.2 m wide and 1.5 m tall topped by a semicircle. Find the length of trim around it (2 decimal places).`, fig: "norman" },
  { old: `A frame of uniform width x surrounds a 24 cm by 18 cm photo. Its outer perimeter is 108 cm. Find x.`, fig: "frame" },
  { old: `Three identical circles of radius 2 are packed in a row inside a rectangle that just fits them. Find the rectangle's perimeter.`, fig: "threeCircles" },
  { old: `A path goes around a circular pond of radius 20 m at a constant distance of 3 m from the edge. How much longer is the path than the shoreline (2 decimal places)?`, fig: "pond" },
  { old: `A running track encloses a rectangle 100 m by 60 m with semicircular ends of diameter 60 m. Find the area inside the track (nearest m²).`, fig: "track" },
  { old: `A 2 m wide path runs around a 20 m by 12 m pool. Paving costs 45 dollars per m². Find the cost of the path.`, fig: "pool" },
  { old: `A garden is a semicircle on top of a 10 m by 6 m rectangle (the semicircle's diameter is the 10 m side). Find the total area (1 decimal place).`, fig: "garden" },
  { old: `A square path 1 m wide surrounds a 10 m by 10 m square garden. Find the path's area.`, fig: "sqPath" },
  { old: `A parallelogram has base 9, slanted side 6 and height 4. Find its area.`, fig: "para964" },
  { old: `Find the area of a parallelogram with base 8 and height 5.`, fig: "para85" },
  { old: `Find the area of a trapezoid with parallel sides 6 and 10 and height 4.`, fig: "trap" },
  { old: `An isosceles triangle has equal sides 13 cm and base 24 cm. Find its area.`, fig: "isos1324" },
  { old: `A grain silo is a cylinder (r = 4 m, h = 12 m) with a hemisphere roof. Find its volume (nearest m³).`, fig: "silo412" },
  { old: `A silo is a cylinder (r = 3 m, h = 10 m) with a hemisphere roof; the floor is not painted. Find the painted area (1 decimal place).`, fig: "silo310" },
  { old: `A hemisphere of radius 5 sits on top of a cylinder of radius 5 and height 8 (the cylinder's bottom is closed). Find the total exposed surface area (1 decimal place).`, fig: "silo58" },
  { old: `A frustum (a cone with its top cut off) is made from a cone of radius 6 and height 12 by removing a top cone of radius 3 and height 6. Find its volume (1 decimal place).`, fig: "frustum" },
  { old: `An open box is made from a 40 cm by 30 cm sheet by cutting 5 cm squares from the corners. Find its volume.`, fig: "openBox" },
  { old: `A cylinder fits exactly inside a cube of edge 8 cm (same height, touching all four sides). What percent of the cube does it fill (1 decimal place)?`, fig: "cylCube" },
  { old: `A sphere fits exactly inside a cube of edge 6 cm. Find the empty volume in the cube (1 decimal place).`, fig: "sphCube" },
  { old: `A hemisphere bowl has radius 9 cm. How many mL does it hold (nearest mL)?`, fig: "bowl" },
  { old: `A hemisphere (half ball) of radius 6 cm has a flat base. Find its total surface area (1 decimal place).`, fig: "hemi6" },
  { old: `A 4 × 4 × 4 cube has a 2 × 2 square hole drilled straight through the middle of two opposite faces. Find the new surface area.`, fig: "cubeHole" },
];

const ROOT = path.resolve("scripts");
const CHS = ["mth1w-ch3", "mth1w-ch4", "mth1w-ch5", "mth1w-ch6", "mth1w-ch7"];
const files = CHS.flatMap((c) => fs.readdirSync(path.join(ROOT, c, "bank")).filter((f) => /^(em|h)\d/.test(f)).map((f) => path.join(ROOT, c, "bank", f)));
const IMPORT = `import { FIG } from "../../mth1w-bank-figures/figs.mjs";\n`;
for (const p of PATCH) if (p.fig && !FIG[p.fig]) throw new Error("no figure " + p.fig);

if (process.argv.includes("--source")) {
  let done = 0;
  for (const p of PATCH) {
    const hits = files.filter((f) => fs.readFileSync(f, "utf8").includes(p.old));
    if (hits.length !== 1) throw new Error(`${hits.length} source files hold: ${p.old}`);
    const f = hits[0];
    const lines = fs.readFileSync(f, "utf8").split("\n");
    const at = lines.findIndex((l) => l.includes(p.old));
    let l = lines[at];
    if (p.to) l = l.replace(p.old, () => p.to);
    if (p.fb) { if (!l.includes(p.fb[0])) throw new Error("feedback not on the line: " + p.fb[0]); l = l.replace(p.fb[0], () => p.fb[1]); }
    if (p.fig) {
      const fig = `FIG.${p.fig}`;
      if (/, null, [\d.]+\),\s*$/.test(l)) l = l.replace(/, null, ([\d.]+)\),(\s*)$/, `, ${fig}, $1),$2`);
      else if (/\),\s*$/.test(l)) l = l.replace(/\),(\s*)$/, `, ${fig}),$1`);
      else throw new Error("line ending not recognised: " + l.slice(-40));
    }
    lines[at] = l;
    let text = lines.join("\n");
    if (p.fig && !text.includes(IMPORT)) text = IMPORT + text;
    fs.writeFileSync(f, text);
    done++;
  }
  console.log(`rewrote ${done} source lines`);
  process.exit(0);
}

// Everything below works from the rewritten sources, so the database and the files stay the same.
const pool = [];
for (const f of files) {
  const m = await import(pathToFileURL(f).href);
  for (const v of Object.values(m)) if (Array.isArray(v)) pool.push(...v.filter((q) => q && q.prompt));
}
const env = {};
for (const line of fs.readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const { createClient } = await import("@supabase/supabase-js");
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
const CID = "fef1dc8e-c6f7-4632-baa1-7eb940130557";
let rows = [];
for (let from = 0; ; from += 1000) {
  const { data, error } = await db.from("bank_questions").select("*").eq("course_id", CID).order("id").range(from, from + 999);
  if (error) throw error;
  rows.push(...data);
  if (data.length < 1000) break;
}
const APPLY = process.argv.includes("--apply");
if (APPLY) fs.writeFileSync(path.join(ROOT, "mth1w-bank-figures", "backup", `bank-before-${new Date().toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify(rows.filter((x) => PATCH.some((p) => x.prompt.startsWith(p.old))), null, 1));

let bad = 0, updated = 0, withFig = 0, reworded = 0;
for (const p of PATCH) {
  const now = p.to ?? p.old;
  const dbHits = rows.filter((x) => x.prompt.startsWith(p.old) || x.prompt.startsWith(now));
  const srcHits = pool.filter((q) => q.prompt.startsWith(now));
  if (dbHits.length !== 1 || srcHits.length !== 1) { bad++; console.log(`MATCH db=${dbHits.length} src=${srcHits.length}: ${p.old.slice(0, 70)}`); continue; }
  const row = dbHits[0], q = srcHits[0];
  // answers must not move: a choice question is compared by the text of its right answer, because new wording reshuffles letters
  const key = (a, c) => (Array.isArray(c) ? (Array.isArray(a) ? a : [a]).map((id) => c.find((x) => x.id === id)?.text).sort().join("|") : JSON.stringify(a));
  if (key(row.answer, row.choices) !== key(q.answer, q.choices)) { bad++; console.log(`ANSWER differs: ${p.old.slice(0, 60)}: ${key(row.answer, row.choices)} vs ${key(q.answer, q.choices)}`); continue; }
  if (p.fig && !q.fig) { bad++; console.log(`NO FIG in source: ${p.old.slice(0, 60)}`); continue; }
  if (p.fig && row.image_url && !row.prompt.startsWith(now)) { bad++; console.log(`ALREADY HAS IMAGE: ${p.old.slice(0, 60)}`); continue; }
  const fields = { prompt: q.prompt, choices: q.choices ?? null, answer: q.answer, feedback: q.feedback };
  if (APPLY) {
    if (p.fig) {
      const svg = FIG[p.fig];
      const key2 = `mth1w-fig/${p.fig}-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 8)}.svg`;
      const up = await db.storage.from("graph-images").upload(key2, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      fields.image_url = db.storage.from("graph-images").getPublicUrl(key2).data.publicUrl;
    }
    const u = await db.from("bank_questions").update(fields).eq("id", row.id);
    if (u.error) throw u.error;
  }
  updated++; if (p.fig) withFig++; if (p.to) reworded++;
}
const prompts = new Map();
for (const x of rows) { const p = PATCH.find((e) => x.prompt.startsWith(e.old)); const t = p?.to ?? x.prompt; const k = `${x.topic}|${t}`; prompts.set(k, (prompts.get(k) ?? 0) + 1); }
for (const [k, n] of prompts) if (n > 1 && PATCH.some((e) => e.to && k.endsWith(e.to))) { bad++; console.log("DUPLICATE prompt: " + k); }
console.log(`${APPLY ? "UPDATED" : "would update"} ${updated} of ${PATCH.length} rows (${reworded} reworded, ${withFig} new figures); ${bad} problems`);
process.exit(bad ? 1 : 0);
