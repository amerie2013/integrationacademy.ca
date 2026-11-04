// MHF4U chapter 4 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mhf4u-ch4/written.mjs           -> dry run
//   node scripts/mhf4u-ch4/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
// Run --apply only after the chapter 4 lessons exist and renumber4.mjs has run (it links each row to its lesson by title).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "./bank/fig.mjs";
import { UC, ARM, SECTOR, TG } from "./trigfig.mjs";

const S = String.raw;
const T = {
  1: "4.1 Radian Measure", 2: "4.2 Trigonometric Ratios and Special Angles", 3: "4.3 Equivalent Trigonometric Expressions",
  4: "4.4 Compound Angle Formulas", 5: "4.5 Double Angle Formulas", 6: "4.6 Proving Trigonometric Identities",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, S`The sector shown has radius 9 cm and angle $\frac{4\pi}3$. (a) Convert the angle to degrees. (b) Find the arc length. (c) Find the area.`,
    S`(a) $240^\circ$. (b) $s=12\pi\approx37.70$ cm. (c) $A=\frac12(81)\frac{4\pi}3=54\pi\approx169.65$ cm$^2$. [1, 1, 2.]`,
    planeDoc(SECTOR(9, (4 * Math.PI) / 3))),
  W(1, "hard", 4, S`A belt joins pulleys of radii 9 cm and 15 cm. The small pulley turns at 100 revolutions per minute. (a) Find its angular speed in rad/s. (b) Find the speed of the belt in cm/s. (c) Find the angular speed of the large pulley in rad/s.`,
    S`(a) $\frac{100\cdot2\pi}{60}=\frac{10\pi}3$. (b) $9\cdot\frac{10\pi}3=30\pi\approx94.25$ cm/s. (c) $\frac{30\pi}{15}=2\pi$ rad/s. [1, 1, 2.]`,
    planeDoc(SECTOR(9, 2))),
  W(2, "medium", 4, S`The terminal arm of $\theta$ passes through $(-8,15)$. (a) Find $r$. (b) Find the six ratios. (c) Find $\theta$ in radians, to 2 decimals.`,
    S`(a) 17. (b) $\sin=\frac{15}{17}$, $\cos=-\frac8{17}$, $\tan=-\frac{15}8$, $\csc=\frac{17}{15}$, $\sec=-\frac{17}8$, $\cot=-\frac8{15}$. (c) $\pi-\tan^{-1}\frac{15}8\approx2.06$. [1, 2, 1.]`,
    planeDoc(ARM(-8, 15, "(−8, 15)"))),
  W(2, "hard", 4, S`(a) Find all $\theta$ in $[0,2\pi]$ with $2\sin^2\theta=1$, and mark them on the unit circle. (b) Evaluate $\tan\theta$ at each one. (c) Explain why $\sec\theta$ exists at all of them.`,
    S`(a) $\sin\theta=\pm\frac{\sqrt2}2$: $\frac\pi4,\frac{3\pi}4,\frac{5\pi}4,\frac{7\pi}4$. (b) $1,-1,1,-1$. (c) $\cos\theta=\pm\frac{\sqrt2}2\ne0$ at each. [2, 1, 1.]`,
    planeDoc(UC(45, "π/4"))),
  W(3, "medium", 4, S`The graphs of $y=\cos x$ and $y=\sin\left(\frac\pi2-x\right)$ are shown. (a) Explain why they coincide, using the unit circle. (b) Simplify $\sin\left(\frac\pi2-x\right)+\cos(\pi+x)$. (c) Given $\cos\frac{\pi}{5}\approx0.8090$, find $\sin\frac{3\pi}{10}$.`,
    S`(a) reflecting in $y=x$ swaps the coordinates. (b) $\cos x-\cos x=0$. (c) $\frac\pi2-\frac\pi5=\frac{3\pi}{10}$: $0.8090$. [2, 1, 1.]`,
    planeDoc(TG([[Math.cos, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  W(3, "hard", 4, S`Let $\sin x=a$, with $x$ in Q2. (a) Express $\cos x$ in terms of $a$. (b) Express $\sin(\pi+x)$, $\cos(\pi-x)$ and $\tan\left(\frac\pi2-x\right)$ in terms of $a$. (c) Evaluate your expressions at $a=\frac35$.`,
    S`(a) $-\sqrt{1-a^2}$. (b) $-a$; $\sqrt{1-a^2}$; $\cot x=-\frac{\sqrt{1-a^2}}a$. (c) $-\frac35,\ \frac45,\ -\frac43$. [1, 2, 1.]`,
    planeDoc(ARM(-4, 3, "(−4, 3)"))),
  W(4, "medium", 4, S`(a) Find the exact value of $\sin\frac{5\pi}{12}$. (b) Find the exact value of $\cos\frac{5\pi}{12}$. (c) Use (a) and (b) to find the exact value of $\tan\frac{5\pi}{12}$, in simplest form.`,
    S`(a) $\frac{\sqrt6+\sqrt2}4$. (b) $\frac{\sqrt6-\sqrt2}4$. (c) $\frac{\sqrt6+\sqrt2}{\sqrt6-\sqrt2}=2+\sqrt3$. [1, 1, 2.]`,
    planeDoc(UC(75, "5π/12"))),
  W(4, "hard", 4, S`$a$ has the terminal arm shown, and $\sin b=-\frac{15}{17}$ with $b$ in Q3. (a) Find $\sin(a+b)$. (b) Find $\cos(a+b)$. (c) State the quadrant of $a+b$, with a reason.`,
    S`$\sin a=\frac45,\cos a=-\frac35,\cos b=-\frac8{17}$. (a) $\frac45\left(-\frac8{17}\right)+\left(-\frac35\right)\left(-\frac{15}{17}\right)=\frac{13}{85}$. (b) $\left(-\frac35\right)\left(-\frac8{17}\right)-\frac45\left(-\frac{15}{17}\right)=\frac{84}{85}$. (c) both positive, so the terminal arm of $a+b$ is in Q1. [2, 1, 1.]`,
    planeDoc(ARM(-3, 4, "a: (−3, 4)"))),
  W(5, "medium", 4, S`$\cos x=-\frac{5}{13}$ with $x$ in Q2. (a) Find $\sin x$. (b) Find $\sin2x$ and $\cos2x$. (c) State the quadrant of $2x$, using the signs from (b).`,
    S`(a) $\frac{12}{13}$. (b) $-\frac{120}{169}$; $-\frac{119}{169}$. (c) both negative: Q3. [1, 2, 1.]`,
    planeDoc(ARM(-5, 12, "(−5, 12)"))),
  W(5, "hard", 4, S`(a) Use a double angle formula to write $y=4\sin x\cos x+1$ as a single sinusoid. (b) State its amplitude, period and range. (c) Solve $y=3$ in $[0,\pi]$.`,
    S`(a) $y=2\sin2x+1$. (b) 2; $\pi$; $[-1,3]$. (c) $\sin2x=1$: $x=\frac\pi4$. [1, 2, 1.]`,
    planeDoc(TG([[(x) => 2 * Math.sin(2 * x) + 1, "violet"]], { xmin: -3.5, xmax: 3.5, ymin: -2, ymax: 4 }))),
  W(6, "medium", 4, S`(a) Prove $\dfrac{\sin^2x}{1-\cos x}=1+\cos x$. (b) State the restriction on $x$. (c) The left side and right side are graphed as one curve. Explain why the graph is not a proof.`,
    S`(a) $\frac{1-\cos^2x}{1-\cos x}=\frac{(1-\cos x)(1+\cos x)}{1-\cos x}=1+\cos x$. (b) $\cos x\ne1$: $x\ne2n\pi$. (c) a graph shows finitely many values, at limited accuracy. [2, 1, 1.]`,
    planeDoc(TG([[(x) => 1 + Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 3 }))),
  W(6, "hard", 4, S`(a) Prove $\dfrac{\sin x+\sin2x}{1+\cos x+\cos2x}=\tan x$. (b) Is $\dfrac{\sin x+\sin2x}{\cos x+\cos2x}=\tan x$ an identity? Justify. (c) State where the identity in (a) has its restrictions.`,
    S`(a) numerator $\sin x(1+2\cos x)$; denominator $\cos x+2\cos^2x=\cos x(1+2\cos x)$. (b) no: at $x=\frac\pi4$, LS $\approx2.41$ but RS $=1$. (c) $\cos x\ne0$, $\cos x\ne-\frac12$. [2, 1, 1.]`,
    planeDoc(TG([[Math.tan, "violet"]], { xmin: -1.4, xmax: 1.4, ymin: -4, ymax: 4 }))),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MHF4U").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = [...new Set(WRITTEN.map((w) => w.topic))].filter((t) => !lessons.some((l) => l.title === t));
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (missing.length) console.log("lessons not loaded yet:", missing);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  if (missing.length) { console.log("Load the lessons first."); process.exit(1); }
  for (const w of todo) {
    const key = `mhf4u-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
