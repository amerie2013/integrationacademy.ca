// Seeds the full MDM4U (Mathematics of Data Management, Grade 12, University
// Preparation) course — a deep, rigorous build in the same lecture-box theme as
// the other courses.
// Strands: A Counting & Probability · B Probability Distributions ·
//          C One-Variable Statistics · D Two-Variable Statistics · E Culminating.
// Four flagship lessons are authored in full depth (1.5 Combinations,
// 3.4 Binomial Distribution, 4.2 Normal Distribution & z-scores,
// 6.2 Correlation & Regression); the rest are rich scaffolds. Every lesson gets
// a hard 10-question K/Application/Thinking assignment.
// Usage: node scripts/seed-mdm4u.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { sk, html, gframe, anim } from "./seed-mpm2d.mjs";
import { authored } from "./mdm4u-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Mathematics of Data Management (MDM4U)";
const DESC = "Ontario Grade 12 Mathematics of Data Management, University Preparation (MDM4U). Rigorous, interactive lessons across Counting & Permutations, Combinations & the Binomial Theorem, Probability, discrete & continuous Probability Distributions, the Normal Distribution, One- and Two-Variable Statistics, and a culminating data-management investigation.";

async function getTeacherId() {
  const { data: created } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher.");
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

// ── FLAGSHIP 1.5 — Combinations (full depth) ─────────────────
const L15 = {
  code: "1.5", title: "Combinations",
  blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Combinations</h1>
  <p><strong>Overview.</strong> A <strong>permutation</strong> counts arrangements where <em>order matters</em>; a <strong>combination</strong> counts selections where <em>order does not</em>. Choosing a president, then a treasurer, from a club is a permutation — the two roles are different. Choosing a two-person committee from the same club is a combination — Alex-and-Bo is the <em>same</em> committee as Bo-and-Alex. This lesson derives the combination formula from permutations, exploits its symmetry, and — the real MDM4U skill — teaches you to <strong>decide</strong> which tool a problem needs and how to break a hard selection into cases.</p>

  <h2>📌 From Permutations to Combinations</h2>
  <p>To choose \(r\) objects from \(n\) distinct objects <em>and arrange them</em> there are \( {}_{n}P_{r}=\dfrac{n!}{(n-r)!} \) ways. But every unordered selection of \(r\) objects gets counted \(r!\) times — once for each of its orderings. Divide that overcount away:</p>
  <p style="text-align:center;">\( {}_{n}C_{r}=\dbinom{n}{r}=\dfrac{{}_{n}P_{r}}{r!}=\dfrac{n!}{r!\,(n-r)!} \)</p>
  <p>Read \( \dbinom{n}{r} \) as "\(n\) choose \(r\)". It is always a whole number, and \( \dbinom{n}{0}=\dbinom{n}{n}=1 \): there is exactly one way to choose nothing, and one way to choose everything.</p>

  <h2>📌 The Symmetry Identity</h2>
  <p>Choosing which \(r\) objects to <strong>include</strong> is the same as choosing which \(n-r\) to <strong>leave out</strong>. So</p>
  <p style="text-align:center;">\( \dbinom{n}{r}=\dbinom{n}{n-r} \)</p>
  <p>Use it to kill arithmetic: \( \dbinom{20}{18}=\dbinom{20}{2}=190 \) is far easier than expanding \( \dbinom{20}{18} \) directly.</p>

  <h2>📌 "Does order matter?" — the deciding question</h2>
  <p>Before you count, ask: <em>if I swapped two of the chosen objects, would that be a different outcome?</em> If yes → permutation. If no → combination. Words like <strong>committee, team, hand, group, set, sample, selection</strong> signal combinations; <strong>ranking, schedule, code, password, podium, arrangement, order</strong> signal permutations.</p>

  <h2>📌 Cases and the Complement</h2>
  <p>Hard counting problems usually split into <strong>cases</strong> joined by the additive principle. "A committee of 4 with <em>at least</em> 2 seniors" = (exactly 2 seniors) + (exactly 3) + (exactly 4). When "at least one" would span many cases, the <strong>complement</strong> is faster: count <em>everything</em>, then subtract the single unwanted "none" case.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: A straight selection</h3>
    <p>A class of 10 students sends 3 delegates (no ranking) to a conference. How many delegations are possible?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Order does not matter → combination: \( \dbinom{10}{3} \).</div>
      <div class="step"><strong>Step 2:</strong> \( \dfrac{10!}{3!\,7!}=\dfrac{10\cdot9\cdot8}{3\cdot2\cdot1}=120 \).</div>
      <em>Conclusion: 120 possible delegations. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Use the symmetry</h3>
    <p>Evaluate \( \dbinom{20}{18} \) without a calculator.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( \dbinom{20}{18}=\dbinom{20}{2} \) (choose the 2 to leave out).</div>
      <div class="step"><strong>Step 2:</strong> \( \dfrac{20\cdot19}{2}=190 \).</div>
      <em>Conclusion: 190. Choosing 18 to keep = choosing 2 to drop. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Selecting from two groups (a product of choices)</h3>
    <p>A committee of 4 is formed from 5 teachers and 6 students. How many committees have <strong>exactly 2 teachers</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Choose 2 of 5 teachers <em>and</em> 2 of 6 students — independent choices multiply.</div>
      <div class="step"><strong>Step 2:</strong> \( \dbinom{5}{2}\dbinom{6}{2}=10\cdot15=150 \).</div>
      <em>Conclusion: 150 committees. "Exactly 2 teachers" fixes the split, so the other 2 must be students. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: "At least one" — use the complement</h3>
    <p>A 5-card hand is dealt from a standard 52-card deck. How many hands contain <strong>at least one ace</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Total hands: \( \dbinom{52}{5}=2{,}598{,}960 \).</div>
      <div class="step"><strong>Step 2:</strong> Hands with <em>no</em> ace (choose 5 of the 48 non-aces): \( \dbinom{48}{5}=1{,}712{,}304 \).</div>
      <div class="step"><strong>Step 3:</strong> Subtract: \( 2{,}598{,}960-1{,}712{,}304=886{,}656 \).</div>
      <em>Conclusion: 886 656 hands. Counting "no aces" once beats summing exactly-1, exactly-2, …, exactly-4. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: An exact multi-group hand</h3>
    <p>How many 5-card hands contain <strong>exactly 2 aces</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Choose 2 of the 4 aces: \( \dbinom{4}{2}=6 \).</div>
      <div class="step"><strong>Step 2:</strong> Fill the other 3 cards from the 48 non-aces: \( \dbinom{48}{3}=17{,}296 \).</div>
      <div class="step"><strong>Step 3:</strong> Multiply: \( 6\cdot17{,}296=103{,}776 \).</div>
      <em>Conclusion: 103 776 hands. "Exactly 2 aces" means the remaining 3 must avoid aces entirely. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>How many ways can a coach pick a starting 5 from a roster of 12 players (positions not assigned)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \dbinom{12}{5}=792 \). <em>Answer: 792.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>Evaluate \( \dbinom{15}{13} \) using the symmetry identity.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \dbinom{15}{13}=\dbinom{15}{2}=105 \). <em>Answer: 105.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>From 7 men and 5 women, how many committees of 4 have exactly 3 women?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \dbinom{5}{3}\dbinom{7}{1}=10\cdot7=70 \). <em>Answer: 70.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4</h3><p>A 3-card hand is drawn from 52. How many contain at least one face card (J, Q, K — 12 of them)?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \dbinom{52}{3}-\dbinom{40}{3}=22100-9880=12220 \). <em>Answer: 12 220.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A committee of 5 is chosen from 6 seniors and 4 juniors and must contain <strong>at least</strong> 3 seniors. How many committees are possible?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">Cases (3, 4, or 5 seniors): \( \dbinom{6}{3}\dbinom{4}{2}+\dbinom{6}{4}\dbinom{4}{1}+\dbinom{6}{5}\dbinom{4}{0}=20\cdot6+15\cdot4+6\cdot1=120+60+6=186 \). <em>Answer: 186.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Using a permutation when order is irrelevant — a committee is <strong>not</strong> ranked, so use \( {}_{n}C_{r} \), not \( {}_{n}P_{r} \).</li>
      <li><strong>Adding</strong> the two group-choices instead of multiplying them (choosing teachers <em>and</em> students is a product).</li>
      <li>Reading "at least 2" as "exactly 2" — "at least" needs cases or the complement.</li>
      <li>Forgetting that "exactly 2 aces" forces the remaining cards to be <em>non</em>-aces.</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I know it's a combination, not a permutation?</h3><p><em>Ask whether reordering the chosen objects changes the outcome. If not, it's a combination.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: When do I multiply combinations vs add them?</h3><p><em>Multiply when a selection is built from several independent groups at once ("2 from A AND 2 from B"); add when a selection falls into separate cases ("exactly 2 OR exactly 3").</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: When is the complement worth it?</h3><p><em>For "at least one …", when the direct count would need many cases. Count the total and subtract only the "none" case.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q4: Why is \( \dbinom{n}{r}=\dbinom{n}{n-r} \)?</h3><p><em>Every selection of \(r\) to keep is paired with the selection of the \(n-r\) you discard, so the two counts must be equal.</em></p></div>
</div>`)],
};

// ── FLAGSHIP 3.4 — The Binomial Distribution (full depth) ────
const L34 = {
  code: "3.4", title: "The Binomial Distribution",
  blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎲 The Binomial Distribution</h1>
  <p><strong>Overview.</strong> The binomial distribution models the number of <strong>successes</strong> in a fixed number of independent, identical yes/no trials — flips of a coin, correct guesses on a quiz, defective items on a line. It fuses everything from Unit 1 (combinations count <em>which</em> trials succeed) with Unit 2 (independence lets probabilities multiply). Recognizing when a situation is binomial, and computing "exactly", "at least", and "at most" probabilities, is one of the most tested skills in MDM4U.</p>

  <h2>📌 The Four Conditions (BINS)</h2>
  <p>A random variable \(X\) is <strong>binomial</strong> exactly when:</p>
  <ul>
    <li><strong>B</strong>inary — each trial is a success or a failure.</li>
    <li><strong>I</strong>ndependent — one trial's result does not affect another's.</li>
    <li><strong>N</strong>umber of trials \(n\) is fixed in advance.</li>
    <li><strong>S</strong>ame probability of success \(p\) on every trial.</li>
  </ul>
  <p>If any condition fails, it is <em>not</em> binomial. (Drawing cards <em>without</em> replacement breaks independence — that is the hypergeometric distribution of §3.6.)</p>

  <h2>📌 The Formula</h2>
  <p>With \(n\) trials, success probability \(p\), and failure probability \(q=1-p\), the probability of <strong>exactly \(k\)</strong> successes is</p>
  <p style="text-align:center;">\( P(X=k)=\dbinom{n}{k}\,p^{k}\,q^{\,n-k} \)</p>
  <p>The three pieces have a story: \( \dbinom{n}{k} \) counts <em>which</em> \(k\) trials succeed, \(p^{k}\) is the probability those \(k\) all succeed, and \(q^{\,n-k}\) is the probability the rest all fail.</p>

  <h2>📌 Mean and Standard Deviation</h2>
  <p>Rather than summing \( \sum k\,P(X=k) \), a binomial has clean formulas:</p>
  <p style="text-align:center;">\( \mu=E(X)=np \qquad \sigma=\sqrt{npq} \)</p>
  <p>Expect \(np\) successes; the spread around that is \( \sqrt{npq} \).</p>

  <h2>📌 "At least" and "at most"</h2>
  <p>These are sums of exact probabilities. For "at least one", always use the complement: \( P(X\ge1)=1-P(X=0)=1-q^{\,n} \). For "at most 2" over small \(n\), add \( P(0)+P(1)+P(2) \) directly.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Exactly \(k\) successes</h3>
    <p>A fair coin is flipped 5 times. Find \(P(\text{exactly 3 heads})\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Binomial with \(n=5,\;p=\tfrac12,\;q=\tfrac12,\;k=3\).</div>
      <div class="step"><strong>Step 2:</strong> \( P(X=3)=\dbinom{5}{3}\left(\tfrac12\right)^{3}\left(\tfrac12\right)^{2}=10\cdot\tfrac{1}{32} \).</div>
      <em>Conclusion: \( \tfrac{10}{32}=0.3125 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: "At least one" via the complement</h3>
    <p>A student guesses on 10 multiple-choice questions, each with 4 options (\(p=0.25\)). Find \(P(\text{at least 1 correct})\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Complement: \( P(X\ge1)=1-P(X=0) \).</div>
      <div class="step"><strong>Step 2:</strong> \( P(X=0)=\dbinom{10}{0}(0.25)^{0}(0.75)^{10}=(0.75)^{10}\approx0.0563 \).</div>
      <div class="step"><strong>Step 3:</strong> \( 1-0.0563=0.9437 \).</div>
      <em>Conclusion: about \(0.944\) — guessing almost always yields at least one hit. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Mean and standard deviation</h3>
    <p>A machine produces parts that are defective 10% of the time. In a batch of 200, find the expected number of defectives and the standard deviation.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( \mu=np=200(0.10)=20 \).</div>
      <div class="step"><strong>Step 2:</strong> \( \sigma=\sqrt{npq}=\sqrt{200(0.10)(0.90)}=\sqrt{18}\approx4.24 \).</div>
      <em>Conclusion: expect \(20\) defectives, give or take about \(4.2\). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: "At most" — a cumulative sum</h3>
    <p>An inspector checks 8 items, each defective with probability \(0.1\). Find \(P(\text{at most 1 defective})\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( P(X\le1)=P(0)+P(1) \).</div>
      <div class="step"><strong>Step 2:</strong> \( P(0)=(0.9)^{8}\approx0.4305 \).</div>
      <div class="step"><strong>Step 3:</strong> \( P(1)=\dbinom{8}{1}(0.1)(0.9)^{7}=8(0.1)(0.4783)\approx0.3826 \).</div>
      <em>Conclusion: \(0.4305+0.3826\approx0.813 \). ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: Exactly \(k\) in a real setting</h3>
    <p>A basketball player makes 60% of free throws. In 10 attempts, find \(P(\text{exactly 7 made})\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Binomial with \(n=10,\ p=0.6,\ k=7\).</div>
      <div class="step"><strong>Step 2:</strong> \( P(X=7)=\dbinom{10}{7}(0.6)^{7}(0.4)^{3}=120(0.0279936)(0.064)\approx0.215 \).</div>
      <em>Conclusion: ≈ 0.215. The three pieces — count, successes, failures — apply to any binomial setting. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>A die is rolled 4 times. Find \(P(\text{exactly two 6's})\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \dbinom{4}{2}(\tfrac16)^2(\tfrac56)^2=6\cdot\tfrac{25}{1296}=\tfrac{150}{1296}\approx0.116 \). <em>Answer: ≈ 0.116.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>70% of voters support a measure. In a sample of 12, find the expected number of supporters and the standard deviation.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \mu=12(0.7)=8.4 \); \( \sigma=\sqrt{12(0.7)(0.3)}=\sqrt{2.52}\approx1.59 \). <em>Answer: 8.4 and ≈ 1.59.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>A free-throw shooter makes 80% of shots. Find \(P(\text{at least 1 miss in 5 attempts})\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( 1-P(\text{0 misses})=1-(0.8)^5=1-0.3277=0.6723 \). <em>Answer: ≈ 0.672.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4 — Challenge</h3><p>A quiz has 6 true/false questions. Guessing, find \(P(\text{at least 4 correct})\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( P(4)+P(5)+P(6)=\big[\dbinom{6}{4}+\dbinom{6}{5}+\dbinom{6}{6}\big](\tfrac12)^6=(15+6+1)/64=22/64\approx0.344 \). <em>Answer: ≈ 0.344.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>A multiple-choice test has 5 questions, each with 4 options. Guessing, find \(P(\text{exactly 2 correct})\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \dbinom{5}{2}(0.25)^{2}(0.75)^{3}=10(0.0625)(0.421875)\approx0.264 \). <em>Answer: ≈ 0.264.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Applying the binomial when trials are <strong>not independent</strong> (e.g. drawing without replacement — use the hypergeometric).</li>
      <li>Dropping the \( \dbinom{n}{k} \) factor — \(p^k q^{n-k}\) alone counts <em>one</em> specific order only.</li>
      <li>Swapping \(k\) and \(n-k\) in the exponents — successes get \(p^k\), failures get \(q^{n-k}\).</li>
      <li>Summing exact terms for "at least one" instead of using \(1-q^{n}\).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: How do I know a situation is binomial?</h3><p><em>Check BINS: Binary trials, Independent, fixed Number of trials, Same \(p\). All four must hold.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Binomial or hypergeometric?</h3><p><em>Replacement (or a huge population) keeps \(p\) constant → binomial. Sampling a small population without replacement changes \(p\) each draw → hypergeometric.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Why is the mean just \(np\)?</h3><p><em>Each trial contributes \(p\) success on average, and expectation adds over \(n\) independent trials.</em></p></div>
</div>`), anim("exp(-(x-20*p)^2/(2*20*p*(1-p)))/sqrt(2*pi*20*p*(1-p))", "p", { from: 0.15, to: 0.85, xMin: 0, xMax: 20, yMin: 0, yMax: 0.28, caption: "▶ The binomial for n = 20 trials, traced as a smooth envelope. As the success chance p grows, the centre np = 20p slides right; the shape is tallest and most symmetric near p = 0.5 and skews toward the ends — this is exactly the bell the normal approximation later exploits." })],
};

// ── FLAGSHIP 4.2 — The Normal Distribution & z-Scores (full) ─
const L42 = {
  code: "4.2", title: "The Normal Distribution & z-Scores",
  blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔔 The Normal Distribution &amp; z-Scores</h1>
  <p><strong>Overview.</strong> Heights, test scores, measurement errors, and countless natural quantities pile up in a symmetric <strong>bell shape</strong> — the normal distribution. It is completely described by two numbers: the mean \( \mu \) (the centre) and the standard deviation \( \sigma \) (the spread). The <strong>z-score</strong> converts any normal value into a universal scale of "standard deviations from the mean", which lets you read off percentages with the empirical rule and compare values from entirely different distributions.</p>

  <h2>📌 The Shape</h2>
  <p>A normal curve is symmetric about \( \mu \), single-peaked, and never touches the axis. The total area under it is \(1\) — area <em>is</em> probability. Changing \( \mu \) slides the curve left/right; changing \( \sigma \) makes it wider (bigger \( \sigma \)) or narrower.</p>

  <h2>📌 The Empirical (68–95–99.7) Rule</h2>
  <p>For any normal distribution, the area within \(k\) standard deviations of the mean is fixed:</p>
  <ul>
    <li>about <strong>68%</strong> lies within \( \mu\pm1\sigma \),</li>
    <li>about <strong>95%</strong> lies within \( \mu\pm2\sigma \),</li>
    <li>about <strong>99.7%</strong> lies within \( \mu\pm3\sigma \).</li>
  </ul>
  <p>By symmetry you can slice these: e.g. the area <em>above</em> \( \mu+2\sigma \) is \( \tfrac{100\%-95\%}{2}=2.5\% \).</p>
  ${gframe(["y = exp(-x^2/2)"], { title: "Standard normal: centred at μ, symmetric", zoom: 40, labels: [{ x: 0, y: 0, t: "μ", c: "#2563a0", point: false }, { x: 1, y: 0, t: "+1σ", c: "#a3327a", point: false }, { x: -1, y: 0, t: "−1σ", c: "#a3327a", point: false }, { x: 2, y: 0, t: "+2σ", c: "#3b7d3b", point: false }, { x: -2, y: 0, t: "−2σ", c: "#3b7d3b", point: false }] })}

  <h2>📌 The z-Score</h2>
  <p>The <strong>z-score</strong> of a value \(x\) is its distance from the mean, measured in standard deviations:</p>
  <p style="text-align:center;">\( z=\dfrac{x-\mu}{\sigma} \)</p>
  <p>\(z=0\) is exactly average; \(z=1.5\) is one-and-a-half standard deviations above the mean; a negative \(z\) is below the mean. Standardizing turns <em>every</em> normal distribution into the one <strong>standard normal</strong> curve (\( \mu=0,\ \sigma=1 \)), so a single table of areas works for all of them.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Empirical rule — an interval</h3>
    <p>Adult heights are normal with \( \mu=170 \) cm, \( \sigma=8 \) cm. What percent of adults are between 162 cm and 178 cm?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(162=\mu-\sigma\) and \(178=\mu+\sigma\) — this is \( \mu\pm1\sigma \).</div>
      <div class="step"><strong>Step 2:</strong> The empirical rule gives 68%.</div>
      <em>Conclusion: about 68% of adults. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: Empirical rule — a tail</h3>
    <p>Using the same heights, what percent of adults are <strong>taller than</strong> 186 cm?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(186=\mu+2\sigma\).</div>
      <div class="step"><strong>Step 2:</strong> 95% lie within \( \mu\pm2\sigma \), so 5% lie outside, split evenly between the two tails.</div>
      <em>Conclusion: about \( \tfrac{5\%}{2}=2.5\% \) are taller than 186 cm. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Computing a z-score</h3>
    <p>A test has \( \mu=70 \), \( \sigma=10 \). Find the z-score of a mark of 85.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( z=\dfrac{85-70}{10}=\dfrac{15}{10}=1.5 \).</div>
      <em>Conclusion: the mark is 1.5 standard deviations above the mean. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Comparing across distributions</h3>
    <p>Ava scored 82 on a test with \( \mu=75,\ \sigma=5 \). Ben scored 88 on a different test with \( \mu=80,\ \sigma=8 \). Who did relatively better?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Ava: \( z=\dfrac{82-75}{5}=1.4 \).</div>
      <div class="step"><strong>Step 2:</strong> Ben: \( z=\dfrac{88-80}{8}=1.0 \).</div>
      <em>Conclusion: Ava's \(z=1.4>1.0\), so Ava ranked higher <em>relative to her class</em>, even though Ben's raw mark was larger. The z-score is what makes the two tests comparable. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: The middle 95% (an interval)</h3>
    <p>Adult heights are normal with \( \mu=170 \) cm, \( \sigma=8 \) cm. Between which two heights do the middle 95% of adults lie?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> By the empirical rule, the middle 95% is within \( \mu\pm2\sigma \).</div>
      <div class="step"><strong>Step 2:</strong> \( 170\pm2(8)=170\pm16 \Rightarrow [154,\ 186] \) cm.</div>
      <em>Conclusion: 154 cm to 186 cm. "Middle 95%" is the two-sided \( \mu\pm2\sigma \) band. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>IQ scores are normal with \( \mu=100,\ \sigma=15 \). What percent of people have an IQ between 85 and 115?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">That is \( \mu\pm1\sigma \) → 68%. <em>Answer: about 68%.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>For the same IQ scores, what percent score below 70?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(70=\mu-2\sigma\); below that is \( \tfrac{100\%-95\%}{2}=2.5\% \). <em>Answer: 2.5%.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>A value has z-score \(-2\) in a distribution with \( \mu=50,\ \sigma=6 \). Find the value.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( x=\mu+z\sigma=50+(-2)(6)=38 \). <em>Answer: 38.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4 — Challenge</h3><p>Delivery times are normal with \( \mu=30 \) min, \( \sigma=4 \) min. Using the empirical rule, what percent take between 34 and 38 minutes?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(34=\mu+1\sigma,\ 38=\mu+2\sigma\). Area within 1σ is 68% (34% on each side); within 2σ is 95% (47.5% each side). Between +1σ and +2σ: \(47.5\%-34\%=13.5\%\). <em>Answer: 13.5%.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>Test scores are normal with \( \mu=72,\ \sigma=6 \). What percent of students score above 84?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\(84=\mu+2\sigma\); above \( \mu+2\sigma \) is \( \tfrac{100\%-95\%}{2}=2.5\% \). <em>Answer: 2.5%.</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Forgetting to <strong>halve</strong> the leftover area when you only want one tail.</li>
      <li>Using \( x-\mu \) alone and skipping the division by \( \sigma \) — a z-score is <em>always</em> in units of \( \sigma \).</li>
      <li>Comparing raw scores across different tests instead of comparing z-scores.</li>
      <li>Applying the empirical rule when the data is clearly skewed (it needs a roughly normal shape).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What does a z-score actually mean?</h3><p><em>How many standard deviations a value sits above (+) or below (−) the mean.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Why standardize at all?</h3><p><em>It collapses every normal distribution onto one standard curve, so a single set of areas (or one calculator function) handles them all — and it makes different distributions comparable.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: When can I use the empirical rule?</h3><p><em>Only when the distribution is (approximately) normal, and cleanest when the values land exactly on \( \mu\pm1\sigma,\ \pm2\sigma,\ \pm3\sigma \). Otherwise use a z-table or technology.</em></p></div>
</div>`), anim("exp(-x^2/(2*s^2))/(s*sqrt(2*pi))", "s", { from: 0.6, to: 2.5, xMin: -6, xMax: 6, yMin: 0, yMax: 0.7, caption: "▶ σ is the whole personality of a normal curve. Small s = σ → tall and narrow (values cluster); large σ → short and wide (values scatter). The area always stays 1, which is why a z-score — distance measured in σ-units — makes every one of these curves comparable." })],
};

// ── FLAGSHIP 6.2 — Correlation & Linear Regression (full) ────
const L62 = {
  code: "6.2", title: "Correlation & Linear Regression",
  blocks: [html(String.raw`<div class="lecture-box">
  <h1>📊 Correlation &amp; Linear Regression</h1>
  <p><strong>Overview.</strong> Two-variable statistics asks whether two quantities move together, how strongly, and whether one can predict the other. The <strong>correlation coefficient</strong> \(r\) measures the strength and direction of a <em>linear</em> relationship; the <strong>line of best fit</strong> (least-squares regression) is the single line that best predicts \(y\) from \(x\). This lesson computes both by hand on a small data set, interprets them honestly, and sets up the crucial warning of §6.5: correlation is not causation.</p>

  <h2>📌 The Correlation Coefficient \(r\)</h2>
  <p>\(r\) is a number between \(-1\) and \(+1\):</p>
  <ul>
    <li><strong>Sign</strong> = direction: \(r>0\) means \(y\) tends to rise with \(x\); \(r<0\) means it falls.</li>
    <li><strong>Magnitude</strong> = strength: \(|r|\) near 1 is a tight linear pattern; near 0 is little or no <em>linear</em> pattern.</li>
  </ul>
  <p>A compact hand formula, using \(S_{xy}=\sum (x-\bar x)(y-\bar y)\), \(S_{xx}=\sum (x-\bar x)^2\), \(S_{yy}=\sum (y-\bar y)^2\):</p>
  <p style="text-align:center;">\( r=\dfrac{S_{xy}}{\sqrt{S_{xx}\,S_{yy}}} \)</p>

  <h2>📌 The Line of Best Fit</h2>
  <p>The least-squares line \( \hat y=ax+b \) minimizes the total squared vertical distance to the points. Its slope and intercept are</p>
  <p style="text-align:center;">\( a=\dfrac{S_{xy}}{S_{xx}} \qquad b=\bar y-a\,\bar x \)</p>
  <p>The line always passes through the mean point \( (\bar x,\bar y) \). Use it to <strong>predict</strong>: substitute an \(x\) to estimate \(y\).</p>

  <h2>📌 Reading \(r\) Honestly</h2>
  <p>\(r\) only measures <em>linear</em> association — a strong curved pattern can have \(r\approx0\). And a large \(|r|\) never proves that \(x\) <em>causes</em> \(y\); a hidden third variable may drive both (§6.5).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Compute \(r\) by hand</h3>
    <p>For the data \((1,2),(2,3),(3,5),(4,4),(5,6)\), find the correlation coefficient.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Means: \( \bar x=3,\ \bar y=4 \).</div>
      <div class="step"><strong>Step 2:</strong> \( S_{xy}=(-2)(-2)+(-1)(-1)+(0)(1)+(1)(0)+(2)(2)=4+1+0+0+4=9 \).</div>
      <div class="step"><strong>Step 3:</strong> \( S_{xx}=4+1+0+1+4=10 \), \( S_{yy}=4+1+1+0+4=10 \).</div>
      <div class="step"><strong>Step 4:</strong> \( r=\dfrac{9}{\sqrt{10\cdot10}}=\dfrac{9}{10}=0.9 \).</div>
      <em>Conclusion: \(r=0.9\) — a strong positive linear relationship. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 2: The line of best fit</h3>
    <p>Find the least-squares line for the same data and graph it through the points.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( a=\dfrac{S_{xy}}{S_{xx}}=\dfrac{9}{10}=0.9 \).</div>
      <div class="step"><strong>Step 2:</strong> \( b=\bar y-a\bar x=4-0.9(3)=1.3 \).</div>
      <em>Conclusion: \( \hat y=0.9x+1.3 \). Notice it passes through \( (\bar x,\bar y)=(3,4) \). ✓</em>
    </div>
    ${gframe(["y = 0.9*x + 1.3"], { title: "Least-squares line ŷ = 0.9x + 1.3  (r = 0.9)", labels: [{ x: 1, y: 2, t: "(1,2)", c: "#2563a0" }, { x: 2, y: 3, t: "(2,3)", c: "#2563a0" }, { x: 3, y: 5, t: "(3,5)", c: "#2563a0" }, { x: 4, y: 4, t: "(4,4)", c: "#2563a0" }, { x: 5, y: 6, t: "(5,6)", c: "#2563a0" }] })}
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 3: Predict — and know when to trust it</h3>
    <p>Using \( \hat y=0.9x+1.3 \), predict \(y\) at \(x=3.5\) and at \(x=20\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(x=3.5\): \( \hat y=0.9(3.5)+1.3=4.45 \) — this is <strong>interpolation</strong> (inside the data range \(1\)–\(5\)), so it is trustworthy.</div>
      <div class="step"><strong>Step 2:</strong> \(x=20\): \( \hat y=0.9(20)+1.3=19.3 \) — this is <strong>extrapolation</strong>, far outside the data. The linear pattern may not hold there, so treat it with caution.</div>
      <em>Conclusion: predictions inside the data range are reliable; far outside, they are guesses. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 4: Strong correlation, no causation</h3>
    <p>Across summer weeks, ice-cream sales and drowning incidents have \(r\approx0.9\). Does eating ice cream cause drowning?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The correlation is real and strong.</div>
      <div class="step"><strong>Step 2:</strong> But a <em>lurking variable</em> — hot weather — drives both: heat raises ice-cream sales <em>and</em> swimming (hence drownings).</div>
      <em>Conclusion: a high \(r\) shows association, not cause. Always ask what third variable might explain both. ✓</em>
    </div>
  </div>

  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 5: A perfect negative relationship</h3>
    <p>For the data \((1,10),(2,8),(3,6),(4,4),(5,2)\), find \(r\) and the line of best fit.</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \( \bar x=3,\ \bar y=6 \). \( S_{xy}=(-2)(4)+(-1)(2)+(0)(0)+(1)(-2)+(2)(-4)=-20 \).</div>
      <div class="step"><strong>Step 2:</strong> \( S_{xx}=10,\ S_{yy}=40 \) → \( r=\dfrac{-20}{\sqrt{10\cdot40}}=\dfrac{-20}{20}=-1 \).</div>
      <div class="step"><strong>Step 3:</strong> \( a=\dfrac{S_{xy}}{S_{xx}}=-2,\ b=6-(-2)(3)=12 \) → \( \hat y=-2x+12 \).</div>
      <em>Conclusion: \(r=-1\) — the points lie exactly on the falling line \( \hat y=-2x+12 \). Perfect correlation (\(|r|=1\)) means every point is on the line. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3><p>Interpret \(r=-0.85\): describe the direction and strength.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>Strong, negative linear relationship — as \(x\) increases, \(y\) tends to decrease, and the points cluster tightly around a falling line.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 2</h3><p>For \((0,1),(1,3),(2,5)\), find the line of best fit.</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \bar x=1,\bar y=3 \); \( S_{xy}=(-1)(-2)+0+(1)(2)=4 \), \( S_{xx}=2 \) → \( a=2,\ b=3-2(1)=1 \). <em>Answer: \( \hat y=2x+1 \).</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 3</h3><p>A study finds \(r=0.98\) between a curve-shaped data set. Why might reporting only \(r\) be misleading?</p>
    <details><summary>View answer</summary><div class="solution"><div class="step"><em>\(r\) measures only <strong>linear</strong> fit; a strongly curved pattern can still have a high \(r\), and a non-linear model may fit far better. Always look at the scatter plot.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 4 — Challenge</h3><p>For \((2,4),(4,6),(6,7),(8,9)\), find the line of best fit and predict \(y\) at \(x=5\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \bar x=5,\bar y=6.5 \); \( S_{xy}=(-3)(-2.5)+(-1)(-0.5)+(1)(0.5)+(3)(2.5)=7.5+0.5+0.5+7.5=16 \), \( S_{xx}=9+1+1+9=20 \) → \( a=0.8,\ b=6.5-0.8(5)=2.5 \), so \( \hat y=0.8x+2.5 \); at \(x=5\), \( \hat y=6.5 \). <em>Answer: \( \hat y=0.8x+2.5 \), prediction 6.5.</em></div></div></details>
  </div>

  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 5 — Challenge</h3><p>For \((1,5),(2,4),(3,2),(4,1)\), find the line of best fit and state the sign of \(r\).</p>
    <details><summary>View answer</summary><div class="solution"><div class="step">\( \bar x=2.5,\ \bar y=3 \); \( S_{xy}=(-1.5)(2)+(-0.5)(1)+(0.5)(-1)+(1.5)(-2)=-7 \), \( S_{xx}=5 \) → \( a=-1.4,\ b=3-(-1.4)(2.5)=6.5 \), so \( \hat y=-1.4x+6.5 \); \(r\) is negative (falling line). <em>Answer: \( \hat y=-1.4x+6.5 \), \(r<0\).</em></div></div></details>
  </div>

  <div class="mistake-box" style="background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>⚠️ Common Mistakes</h3>
    <ul>
      <li>Concluding \(x\) <strong>causes</strong> \(y\) from a large \(|r|\) — correlation is not causation.</li>
      <li>Trusting <strong>extrapolated</strong> predictions far outside the data range.</li>
      <li>Reporting \(r\) for an obviously curved pattern (it only measures <em>linear</em> association).</li>
      <li>Swapping the slope formula: \( a=S_{xy}/S_{xx} \), not \( S_{xy}/S_{yy} \).</li>
    </ul>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q1: What do the sign and size of \(r\) tell me?</h3><p><em>Sign = direction (rising or falling); size \(|r|\) = how tightly the points hug a straight line.</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q2: Interpolation vs extrapolation?</h3><p><em>Interpolation predicts inside the observed range (reliable); extrapolation predicts outside it (risky — the pattern may change).</em></p></div>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q3: Does a strong correlation prove cause and effect?</h3><p><em>No. A lurking variable can drive both quantities. Establishing causation needs a controlled experiment, not just a high \(r\).</em></p></div>
</div>`), anim("a*x + (3 - 2*a)", "a", { from: 0.2, to: 1.6, xMin: -1, xMax: 6, yMin: -2, yMax: 8, caption: "▶ A family of candidate lines, all pivoting through the mean point (x̄, ȳ) = (2, 3). Technology reports the single line of best fit that summarizes the trend; the sign of its slope gives the direction of the relationship and its steepness the rate of change." })],
};

// ── All lessons (flagships spliced in over the scaffolds) ────
const subjects = [
  // UNIT 1 — Counting, Permutations & Combinations
  sk("1.1", "The Fundamental Counting Principle", "Counting outcomes without listing them. The multiplicative principle handles choices made in sequence (AND); the additive principle handles mutually exclusive alternatives (OR). Restrictions — a fixed first digit, no repeats, a forbidden pairing — are the whole game.", ["Multiplicative principle: independent stages multiply (AND)", "Additive principle: disjoint cases add (OR)", "Counting with position/repetition restrictions"]),
  sk("1.2", "Factorials & Permutations of Distinct Objects", "Arrangements where order matters. Factorials count full orderings; ₙPᵣ counts ordered selections of r from n distinct objects.", ["Factorial notation and simplifying factorial fractions", "\\( {}_{n}P_{r}=\\dfrac{n!}{(n-r)!} \\) for ordered selections", "Arranging all, or some, distinct objects"]),
  sk("1.3", "Permutations with Identical Objects", "When some objects are indistinguishable, dividing by the factorials of the repeats removes the overcount — the key to word-rearrangement and grid-path problems.", ["Why identical objects overcount arrangements", "\\( \\dfrac{n!}{a!\\,b!\\cdots} \\) for repeated letters", "Counting routes on a street grid"]),
  sk("1.4", "Permutations with Constraints", "The hard permutations: objects forced together, forced apart, or arranged in a circle.", ["'Together' — glue the block, then arrange inside it", "'Apart' — arrange the rest, then slot into the gaps", "Circular permutations: \\((n-1)!\\)"]),
  L15, // 1.5 Combinations — flagship
  sk("1.6", "Combinations with Cases & the Complement", "Real selection problems split into cases or invert through the complement. Deciding which is faster is the skill.", ["Splitting a selection into additive cases", "'At least one' via the complement", "Drawing a fixed number from several groups"]),
  sk("1.7", "Pascal's Triangle & Combinatorial Identities", "The triangle of \\( \\binom{n}{r} \\) values, Pascal's identity, and the patterns hidden in its rows and diagonals.", ["Building Pascal's triangle from \\( {}_{n}C_{r} \\)", "Pascal's identity \\( \\binom{n}{r}=\\binom{n-1}{r-1}+\\binom{n-1}{r} \\)", "Row sums \\( =2^{n} \\) and diagonal patterns"]),
  sk("1.8", "The Binomial Theorem", "Expanding \\((a+b)^n\\) without multiplying it out, and pulling a single term or coefficient straight from the general term.", ["General term \\( \\binom{n}{k}a^{n-k}b^{k} \\)", "Finding a specific term or coefficient", "Connecting the expansion to Pascal's triangle"]),

  // UNIT 2 — Probability
  sk("2.1", "Introduction to Probability", "Sample spaces, events, and the three sources of a probability: theoretical (by counting), experimental (by data), and subjective (by judgement).", ["Sample space and events", "Theoretical vs experimental vs subjective probability", "Probability as a value in \\([0,1]\\)"]),
  sk("2.2", "Counting & Probability", "Marrying Unit 1 to probability: favourable ÷ total, where both are counted with permutations or combinations.", ["\\( P(A)=\\dfrac{\\text{favourable}}{\\text{total}} \\) by counting", "Card, committee and lottery probabilities", "Choosing ordered vs unordered counting"]),
  sk("2.3", "Odds & the Complement", "Odds and probability are two languages for the same information; the complement turns hard 'at least' events into easy ones.", ["Odds in favour \\(a\\!:\\!b \\Leftrightarrow \\dfrac{a}{a+b}\\)", "Complement \\( P(A')=1-P(A) \\)", "Converting between odds and probability"]),
  sk("2.4", "Mutually Exclusive Events & the Additive Rule", "When events can overlap, the general additive rule prevents double-counting the intersection.", ["Recognizing mutually exclusive events", "\\( P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\)", "Venn diagrams for overlapping events"]),
  sk("2.5", "Independent & Dependent Events", "The multiplicative rule for 'and', and the crucial difference between independent events and mutually exclusive ones.", ["\\( P(A\\cap B)=P(A)P(B) \\) for independent events", "Dependent events: drawing without replacement", "Independent \\(\\ne\\) mutually exclusive"]),
  sk("2.6", "Conditional Probability", "Updating a probability once you know another event occurred — the foundation of everything from medical testing to spam filters.", ["\\( P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)} \\)", "Reading conditions off a two-way table", "General product rule \\( P(A\\cap B)=P(A)P(B\\mid A) \\)"]),
  sk("2.7", "Tree Diagrams & Probability Tables", "Multi-stage experiments made visual: multiply along the branches, add across the paths.", ["Multiplying probabilities along branches", "Adding disjoint paths to one outcome", "Two-way frequency tables"]),

  // UNIT 3 — Discrete Probability Distributions
  sk("3.1", "Random Variables & Discrete Distributions", "A random variable assigns a number to each outcome; its distribution lists every value with its probability (and they sum to 1).", ["Discrete random variables", "Probability distributions summing to 1", "Building a distribution from an experiment"]),
  sk("3.2", "Expected Value", "The long-run average of a random variable — how casinos, insurers, and rational gamblers all make decisions.", ["\\( E(X)=\\sum x\\,P(x) \\)", "Fair games and expected payoff", "Decision-making with expected value"]),
  sk("3.3", "The Uniform Distribution", "The simplest model: every outcome equally likely.", ["The discrete uniform distribution", "Its mean is the middle value", "When equal-likelihood is a valid assumption"]),
  L34, // 3.4 Binomial Distribution — flagship
  sk("3.5", "The Geometric Distribution", "Counting trials until the first success — a waiting-time model.", ["\\( P(X=n)=q^{\\,n-1}p \\)", "When the geometric model applies", "Expected wait \\( \\dfrac{1}{p} \\)"]),
  sk("3.6", "The Hypergeometric Distribution", "Sampling without replacement, where each draw changes the odds — the counterpart to the binomial.", ["Sampling without replacement", "\\( P(X=k)=\\dfrac{\\binom{a}{k}\\binom{n-a}{r-k}}{\\binom{n}{r}} \\)", "Binomial vs hypergeometric: replacement is the difference"]),

  // UNIT 4 — Continuous & Normal Distributions
  sk("4.1", "Continuous Random Variables", "When a variable can take any value in a range, probability becomes area under a density curve.", ["Continuous vs discrete random variables", "Probability as area under a density curve", "Why \\( P(X=a)=0 \\) for a continuous variable"]),
  L42, // 4.2 Normal Distribution & z-Scores — flagship
  sk("4.3", "Normal Probabilities & Percentiles", "Beyond the empirical rule: using z-scores and technology to find any normal probability, and working backwards from a percentile to a value.", ["Finding \\( P(a<X<b) \\) with z-scores", "Percentiles and the inverse normal", "From a target probability back to an \\(x\\)-value"]),
  sk("4.4", "The Normal Approximation to the Binomial", "For large \\(n\\), a binomial is nearly normal — a shortcut once \\(np\\) and \\(nq\\) are both at least 5.", ["Approximating a binomial by a normal", "The continuity correction \\((\\pm0.5)\\)", "Checking \\(np\\ge5\\) and \\(nq\\ge5\\)"]),

  // UNIT 5 — One-Variable Statistics
  sk("5.1", "Sampling Techniques & Bias", "Good conclusions need good samples. Sampling methods, and the biases that quietly wreck a study.", ["Population vs sample; parameter vs statistic", "Simple, stratified, systematic and cluster sampling", "Sampling, response and measurement bias"]),
  sk("5.2", "Measures of Central Tendency", "Mean, median, and mode — what each captures, and how outliers and skew pull them apart.", ["Mean, median, mode and when each is best", "Weighted and grouped-data means", "The effect of outliers and skew"]),
  sk("5.3", "Measures of Spread", "Two data sets can share a mean yet differ wildly. Range, variance, and standard deviation quantify the spread.", ["Range and interquartile range", "Variance and standard deviation", "Interpreting the standard deviation in context"]),
  sk("5.4", "Quartiles, Percentiles & Box Plots", "Slicing a distribution into quarters, flagging outliers with the 1.5×IQR test, and picturing it all with a box plot.", ["Quartiles and the five-number summary", "The \\(1.5\\times\\text{IQR}\\) outlier test", "Box-and-whisker plots"]),
  sk("5.5", "Displaying & Describing Distributions", "Histograms and the vocabulary of shape — symmetric, skewed, unimodal — for describing and comparing data.", ["Frequency and relative-frequency histograms", "Describing shape: symmetry, skew, modes", "Comparing two distributions"]),
  sk("5.6", "The z-Score & Comparing Data", "Standardized position lets you compare a value against its own data set, or rank values from different sets on one scale.", ["z-score as standardized distance from the mean", "Comparing values across different data sets", "From z to a percentile for normal data"]),

  // UNIT 6 — Two-Variable Statistics
  sk("6.1", "Scatter Plots & Correlation", "The first look at paired data: which variable explains which, and how to read a scatter's direction, form, and strength.", ["Explanatory vs response variables", "Describing direction, form and strength", "Linear vs non-linear patterns"]),
  L62, // 6.2 Correlation & Regression — flagship
  sk("6.3", "The Coefficient of Determination & Prediction", "How much of the variation the line explains (\\(r^2\\)), and the honest limits of predicting with it.", ["\\(r^2\\) as the proportion of variation explained", "Interpolation vs extrapolation", "Residuals and goodness of fit"]),
  sk("6.4", "Non-Linear Regression & Modelling", "When the pattern curves, a line is the wrong tool — fit a quadratic, exponential, or power model instead.", ["Choosing a model from the scatter's shape", "Exponential, power and quadratic regression", "Comparing models by \\(r^2\\)"]),
  sk("6.5", "Correlation vs Causation", "The most important idea in the course: a strong correlation never, by itself, proves cause and effect.", ["Why correlation does not imply causation", "Confounding (lurking) variables", "Common-cause, reverse-cause and coincidental links"]),

  // UNIT 7 — The Culminating Investigation
  sk("7.1", "Designing the Study", "Turning curiosity into a researchable question, with clear variables and a design that can actually answer it.", ["Posing a focused, researchable question", "Identifying variables and a hypothesis", "Choosing an appropriate study design"]),
  sk("7.2", "Collecting & Managing Data", "Sourcing, cleaning, and organizing data — and doing it ethically.", ["Primary vs secondary data sources", "Cleaning and organizing raw data", "Ethics, privacy and citing sources"]),
  sk("7.3", "Analyzing the Data", "Putting the whole course to work: the right one- and two-variable tools, applied with an eye on bias and variability.", ["Selecting the right statistical tools", "Combining one- and two-variable analysis", "Accounting for bias and variability"]),
  sk("7.4", "Communicating Conclusions", "A result is only as good as its argument: interpret in context, own the limitations, defend the conclusion.", ["Interpreting results in real-world context", "Acknowledging limitations and assumptions", "Presenting and defending conclusions"]),
];

// Splice fully-authored lessons over their scaffolds (mdm4u-lessons.mjs).
for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

// ── Assignments — 10 questions in 3 categories (K / Application / Thinking) ──
const A3 = (code, topic, knowledge, application, thinking) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = [
    "Knowledge & Understanding", ...sec(knowledge),
    "Application", ...sec(application),
    "Thinking", ...sec(thinking),
  ].join("\n");
  return { title: `Assignment ${code} — ${topic}`, description };
};

const ASSIGN = {
  "1.1": A3("1.1", "The Fundamental Counting Principle",
    ["How many 4-digit PINs are possible (digits may repeat)?", "How many 4-digit PINs have no repeated digit?", "A menu has 3 starters, 5 mains, 4 desserts — how many meals?", "State the difference between the multiplicative and additive principles."],
    ["How many license plates have 3 letters followed by 3 digits?", "How many 5-letter 'words' from A–Z start and end with a vowel?", "A test has 8 true/false and 4 multiple-choice (5 options each); how many ways to answer all?"],
    ["Explain when to multiply and when to add.", "Explain why 'no repeats' shrinks the count at each stage.", "How many 4-digit numbers are even and have distinct digits? Justify the stage order."]),
  "1.2": A3("1.2", "Factorials & Permutations of Distinct Objects",
    ["Evaluate $\\dfrac{8!}{5!}$.", "Compute $_{7}P_{3}$.", "How many ways can 6 distinct books be arranged on a shelf?", "State the formula for $_{n}P_{r}$."],
    ["How many ways can 8 runners finish 1st, 2nd, 3rd?", "Solve $_{n}P_{2}=42$ for $n$.", "How many 3-letter arrangements use distinct letters from the word PRIME?"],
    ["Explain why $0!=1$ is needed for the formula to work.", "Explain why $_{n}P_{n}=n!$.", "Explain the difference between $_{n}P_{r}$ and $r^{\\,n}$ arrangements."]),
  "1.3": A3("1.3", "Permutations with Identical Objects",
    ["How many arrangements of the letters in BOOK?", "How many arrangements of the letters in BANANA?", "How many arrangements of the digits 1,1,2,2,2?", "State the identical-objects arrangement formula."],
    ["How many arrangements of the letters in MISSISSIPPI?", "On a grid, how many shortest routes go 4 blocks east and 3 blocks north?", "How many ways to arrange 3 red, 2 blue, 4 green identical flags in a row?"],
    ["Explain why identical objects reduce the count.", "Explain how a grid-path problem becomes an identical-object permutation.", "Derive the number of arrangements of a word with two different repeated letters."]),
  "1.4": A3("1.4", "Permutations with Constraints",
    ["In how many ways can 5 people sit in a row if 2 specific people must sit together?", "In how many ways can 6 people sit at a round table?", "How many arrangements of ABCDE keep A and B apart?", "State the circular-permutation formula."],
    ["How many ways can 4 girls and 3 boys line up if the boys must be together?", "How many ways can 7 people sit around a table if 2 refuse to be adjacent?", "How many arrangements of the word NUMBERS keep the vowels together?"],
    ["Explain the 'glue' trick for objects that must be together.", "Explain the gap method for objects that must be apart.", "Explain why circular arrangements divide by $n$ compared with a row."]),
  "1.5": A3("1.5", "Combinations",
    ["Evaluate $\\dbinom{9}{4}$.", "Use symmetry to evaluate $\\dbinom{18}{16}$.", "How many 3-person committees from 12 people?", "State when to use a combination rather than a permutation."],
    ["From 6 men and 8 women, how many committees of 5 have exactly 3 women?", "How many 5-card hands contain exactly 2 kings?", "How many 5-card hands contain at least one heart?"],
    ["Explain why order not mattering divides the permutation count by $r!$.", "Explain when to multiply combinations vs add cases.", "Explain why the complement is efficient for 'at least one' problems."]),
  "1.6": A3("1.6", "Combinations with Cases & the Complement",
    ["From 10 people, how many committees of 4 include a specific person?", "How many exclude that person?", "State the complement approach for 'at least one'.", "When do you add cases rather than multiply?"],
    ["A committee of 5 from 7 seniors and 5 juniors must have at least 4 seniors — how many?", "From a 52-card deck, how many 4-card hands have at least one ace?", "From 4 vowels and 5 consonants, how many 4-letter selections have at least 2 vowels?"],
    ["Explain how to break 'at least 2' into cases.", "Explain why 'at least one' is faster via the complement.", "Explain the risk of double-counting when cases overlap."]),
  "1.7": A3("1.7", "Pascal's Triangle & Combinatorial Identities",
    ["Write row 5 of Pascal's triangle (starting row 0).", "State Pascal's identity.", "Find $\\dbinom{7}{3}+\\dbinom{7}{4}$ as a single term.", "What is the sum of the entries in row $n$?"],
    ["Use Pascal's identity to find $\\dbinom{10}{4}$ from row 9.", "How many paths spell a word down a Pascal-style triangle of a given size?", "Show $\\dbinom{6}{0}+\\dbinom{6}{1}+\\cdots+\\dbinom{6}{6}=64$."],
    ["Explain why $\\dbinom{n}{r}=\\dbinom{n-1}{r-1}+\\dbinom{n-1}{r}$ by a choosing argument.", "Explain why row sums are powers of 2.", "Explain the symmetry of the triangle in terms of combinations."]),
  "1.8": A3("1.8", "The Binomial Theorem",
    ["Expand $(x+2)^3$.", "State the general term of $(a+b)^n$.", "Find the coefficient of $x^2$ in $(x+3)^4$.", "How many terms are in the expansion of $(a+b)^{10}$?"],
    ["Find the term containing $x^3$ in $(2x-1)^5$.", "Find the constant term in $\\left(x+\\dfrac{1}{x}\\right)^6$.", "Find the coefficient of $x^4$ in $(1+x)^{10}$."],
    ["Explain how the binomial theorem uses combinations.", "Explain how to isolate a single term without full expansion.", "Explain why the coefficients match a Pascal's-triangle row."]),
  "2.1": A3("2.1", "Introduction to Probability",
    ["List the sample space for rolling two dice.", "Find $P(\\text{sum}=7)$ with two dice.", "Classify: a weather forecaster's '30% chance of rain'.", "State the range of any probability value."],
    ["Find $P(\\text{sum is even})$ with two dice.", "A bag has 3 red, 5 blue, 2 green; find $P(\\text{not blue})$.", "From a deck, find $P(\\text{face card})$."],
    ["Explain theoretical vs experimental probability.", "Explain when subjective probability is appropriate.", "Explain why experimental probability approaches theoretical over many trials."]),
  "2.2": A3("2.2", "Counting & Probability",
    ["From 5 red and 4 blue balls, find $P(\\text{2 drawn are both red})$.", "Find $P(\\text{a random 3-letter arrangement of CAT spells CAT})$.", "State $P(A)$ in terms of counting.", "When must you count with order?"],
    ["A committee of 3 is chosen from 4 men and 5 women; find $P(\\text{all women})$.", "Find $P(\\text{a 5-card hand is a flush of hearts})$.", "In a lottery, 6 numbers from 49; find $P(\\text{matching all 6})$."],
    ["Explain why favourable and total must be counted the same way (both ordered or both unordered).", "Explain when combinations, not permutations, give the probability.", "Explain how counting large sample spaces stays tractable."]),
  "2.3": A3("2.3", "Odds & the Complement",
    ["Convert odds 3:2 in favour to a probability.", "Convert $P=0.25$ to odds against.", "If $P(A)=0.7$, find $P(A')$.", "State the relationship between odds and probability."],
    ["The odds against rain are 4:1; find $P(\\text{rain})$.", "A game has $P(\\text{win})=\\tfrac{2}{9}$; state the odds in favour.", "Find $P(\\text{at least one 6 in two rolls})$ using the complement."],
    ["Explain how odds and probability encode the same information.", "Explain when the complement simplifies a calculation.", "Explain why odds can exceed 1 but probability cannot."]),
  "2.4": A3("2.4", "Mutually Exclusive Events & the Additive Rule",
    ["Are 'roll a 2' and 'roll a 5' mutually exclusive?", "State the general additive rule.", "For a card, find $P(\\text{king or queen})$.", "For a card, find $P(\\text{king or heart})$."],
    ["In a class, $P(\\text{music})=0.4,\\ P(\\text{art})=0.3,\\ P(\\text{both})=0.1$; find $P(\\text{music or art})$.", "Find $P(\\text{sum}=5\\text{ or }9)$ with two dice.", "Given a Venn diagram of two overlapping events, compute $P(A\\cup B)$."],
    ["Explain why you subtract $P(A\\cap B)$.", "Explain how mutually exclusive is a special case of the rule.", "Explain how a Venn diagram makes the rule visible."]),
  "2.5": A3("2.5", "Independent & Dependent Events",
    ["Are consecutive coin flips independent?", "State the multiplication rule for independent events.", "Find $P(\\text{two heads in a row})$.", "Distinguish independent from mutually exclusive."],
    ["From a deck, find $P(\\text{two kings drawn without replacement})$.", "Find $P(\\text{red then red})$ from 4 red, 6 blue, no replacement.", "Two machines fail independently with $P=0.1$ each; find $P(\\text{both fail})$."],
    ["Explain why 'without replacement' creates dependence.", "Explain why independent events can still both occur (unlike mutually exclusive).", "Explain how dependence changes the second-draw probability."]),
  "2.6": A3("2.6", "Conditional Probability",
    ["State the conditional probability formula.", "If $P(A\\cap B)=0.2,\\ P(B)=0.5$, find $P(A\\mid B)$.", "From a two-way table, read a conditional probability.", "State the general product rule."],
    ["A test is 98% accurate; given a positive result and 1% base rate, set up $P(\\text{disease}\\mid+)$.", "From 4 red and 6 blue, find $P(\\text{2nd is red}\\mid\\text{1st was red})$, no replacement.", "Using a two-way table of 100 students, find $P(\\text{passed}\\mid\\text{studied})$."],
    ["Explain how conditioning shrinks the sample space.", "Explain why $P(A\\mid B)\\ne P(B\\mid A)$ in general.", "Explain the role of the base rate in a diagnostic test."]),
  "2.7": A3("2.7", "Tree Diagrams & Probability Tables",
    ["Draw the tree for two coin flips and label the probabilities.", "How do you find the probability of a full path?", "How do you combine paths to the same outcome?", "What must the branch probabilities at each node sum to?"],
    ["A bag has 3 red, 2 blue; draw two without replacement — find $P(\\text{one of each})$ with a tree.", "Two spinners give a total; use a table to find $P(\\text{total}=6)$.", "A factory has two lines producing 60%/40% with defect rates 2%/5%; find $P(\\text{defective})$."],
    ["Explain why branch probabilities multiply and paths add.", "Explain how to handle 'without replacement' on a tree.", "Explain how a tree computes a conditional probability."]),
  "3.1": A3("3.1", "Random Variables & Discrete Distributions",
    ["Define a discrete random variable.", "What must the probabilities in a distribution sum to?", "For two coin flips, tabulate the distribution of the number of heads.", "Is 'height of a student' discrete or continuous?"],
    ["A distribution has $P(0)=0.2,P(1)=0.5,P(2)=k$; find $k$.", "Roll two dice; tabulate the distribution of the sum.", "Draw 2 from 3 red / 2 blue; tabulate the distribution of reds drawn."],
    ["Explain why the probabilities must total 1.", "Explain the difference between an outcome and a random variable.", "Explain how to check a proposed distribution is valid."]),
  "3.2": A3("3.2", "Expected Value",
    ["State the expected-value formula.", "A game pays \\$5 with $P=0.2$, else \\$0; find $E(X)$.", "Find the expected value of one die roll.", "What does expected value represent?"],
    ["A \\$2 ticket wins \\$100 with $P=\\tfrac{1}{80}$; find the expected profit.", "An insurance policy costs \\$300 and pays \\$5000 with $P=0.04$; find the company's expected gain.", "A spinner pays \\$1,\\$4,\\$9 with probabilities $\\tfrac12,\\tfrac13,\\tfrac16$; find $E(X)$."],
    ["Explain why a game is 'fair' when $E(X)=0$.", "Explain how expected value guides a decision under risk.", "Explain why the expected value need not be a possible outcome."]),
  "3.3": A3("3.3", "The Uniform Distribution",
    ["Define a discrete uniform distribution.", "For a fair die, state $P(X=k)$.", "What is the mean of a uniform distribution on $1..n$?", "Give an example of a uniform model."],
    ["A spinner has 8 equal sectors 1–8; find $E(X)$.", "A random integer from 1 to 20 is chosen; find $P(X>15)$.", "Find the mean and range of a uniform distribution on the faces of a 12-sided die."],
    ["Explain the assumption that makes a model uniform.", "Explain why the mean is the midpoint.", "Explain a situation wrongly assumed uniform."]),
  "3.4": A3("3.4", "The Binomial Distribution",
    ["State the four conditions (BINS) for a binomial variable.", "Write the binomial probability formula.", "A coin is flipped 6 times; find $P(\\text{exactly 4 heads})$.", "State the mean and standard deviation of a binomial."],
    ["A student guesses 12 four-option questions; find $P(\\text{at least 1 correct})$.", "A machine is 95% reliable over 20 runs; find the expected failures and the standard deviation.", "8 items each defective with $P=0.15$; find $P(\\text{at most 1 defective})$."],
    ["Explain why the $\\dbinom{n}{k}$ factor is necessary.", "Explain when binomial fails and hypergeometric is needed.", "Explain why the mean of a binomial is $np$."]),
  "3.5": A3("3.5", "The Geometric Distribution",
    ["State the geometric probability formula.", "What does the geometric variable count?", "Find $P(\\text{first six on the 3rd roll})$.", "State the expected number of trials until success."],
    ["A shooter hits with $P=0.3$; find $P(\\text{first hit on the 4th shot})$.", "Find the expected number of rolls to get a 6.", "Find $P(\\text{first success within the first 2 trials})$ for $p=0.4$."],
    ["Explain how the geometric differs from the binomial.", "Explain why success is 'memoryless'.", "Explain why $E(X)=\\tfrac{1}{p}$ is reasonable."]),
  "3.6": A3("3.6", "The Hypergeometric Distribution",
    ["State the hypergeometric probability formula.", "What key assumption separates it from the binomial?", "From 5 red and 7 blue, draw 3; find $P(\\text{exactly 2 red})$.", "What does 'without replacement' change?"],
    ["A committee of 4 is drawn from 6 women and 5 men; find $P(\\text{exactly 2 women})$.", "From a 52-card deck, draw 5; find $P(\\text{exactly 3 hearts})$.", "From 10 items with 3 defective, draw 4; find $P(\\text{no defective})$."],
    ["Explain why drawing without replacement is not binomial.", "Explain when a hypergeometric is well-approximated by a binomial.", "Explain how each factor in the formula is counted."]),
  "4.1": A3("4.1", "Continuous Random Variables",
    ["Distinguish discrete from continuous random variables.", "How is probability found for a continuous variable?", "Why is $P(X=a)=0$ for a continuous variable?", "What is the total area under a density curve?"],
    ["A uniform density is flat on $[0,10]$; find $P(3<X<7)$.", "Interpret an area of 0.2 under a density curve.", "For a density that is a triangle on $[0,2]$, argue what the peak height must be."],
    ["Explain why area, not height, gives probability.", "Explain why a single point has probability 0.", "Explain how a density curve can exceed height 1."]),
  "4.2": A3("4.2", "The Normal Distribution & z-Scores",
    ["State the empirical (68–95–99.7) rule.", "Write the z-score formula.", "For $\\mu=50,\\sigma=5$, find the z-score of 62.", "What two parameters fully describe a normal distribution?"],
    ["Heights are normal with $\\mu=165,\\sigma=7$; what percent are between 158 and 172?", "For the same heights, what percent are above 179?", "Test A: score 78, $\\mu=70,\\sigma=4$. Test B: score 85, $\\mu=80,\\sigma=10$. Which is relatively better?"],
    ["Explain what a z-score of $-1.5$ means.", "Explain why standardizing lets one table serve all normal distributions.", "Explain why the empirical rule fails for skewed data."]),
  "4.3": A3("4.3", "Normal Probabilities & Percentiles",
    ["What z-score corresponds to the 50th percentile?", "How do you find $P(X<x)$ from a z-score?", "Find the z-score for the 90th percentile (approx 1.28).", "Define a percentile."],
    ["For $\\mu=500,\\sigma=100$ (SAT-like), find $P(X>650)$.", "Find the score at the 95th percentile for $\\mu=70,\\sigma=8$.", "Find $P(460<X<540)$ for $\\mu=500,\\sigma=100$."],
    ["Explain the difference between a probability and a percentile.", "Explain how to work backwards from a probability to an $x$.", "Explain why symmetry halves much of the z-table work."]),
  "4.4": A3("4.4", "The Normal Approximation to the Binomial",
    ["State the condition for using the normal approximation.", "What are $\\mu$ and $\\sigma$ for the approximating normal?", "What is the continuity correction?", "Why approximate a binomial at all?"],
    ["For $n=100,p=0.5$, approximate $P(X\\ge60)$.", "For $n=50,p=0.2$, check the condition and find $\\mu,\\sigma$.", "Approximate $P(40\\le X\\le60)$ for $n=100,p=0.5$ using continuity correction."],
    ["Explain why the correction adds or subtracts 0.5.", "Explain why large $n$ makes the binomial look normal.", "Explain what happens to the approximation when $p$ is far from 0.5."]),
  "5.1": A3("5.1", "Sampling Techniques & Bias",
    ["Define population, sample, parameter, statistic.", "Describe stratified sampling.", "Describe systematic sampling.", "Give one example of sampling bias."],
    ["Design a stratified sample of a school by grade.", "Identify the bias in an online opt-in survey.", "Explain why a phone-book survey may misrepresent a city."],
    ["Explain why a large sample can still be biased.", "Explain how non-response distorts results.", "Explain why random selection matters more than sample size for bias."]),
  "5.2": A3("5.2", "Measures of Central Tendency",
    ["Find the mean, median, and mode of 3, 7, 7, 9, 14.", "Which measure is most affected by an outlier?", "Compute a weighted mean of marks 80(40%), 90(60%).", "When is the median preferred over the mean?"],
    ["Estimate the mean of grouped data given class midpoints and frequencies.", "A data set gains an outlier of 200; describe the effect on mean vs median.", "Find the median of an even-sized data set of 8 values."],
    ["Explain how skew separates the mean from the median.", "Explain when the mode is the most useful measure.", "Explain why income is usually reported by median, not mean."]),
  "5.3": A3("5.3", "Measures of Spread",
    ["Find the range of 4, 8, 15, 16, 23.", "Define standard deviation in words.", "Compute the standard deviation of 2, 4, 6 (population).", "Why is spread as important as centre?"],
    ["Two classes share a mean of 70 but $\\sigma=4$ vs $\\sigma=15$; interpret.", "Compute the variance of 5, 5, 8, 12.", "Which data set is more consistent: A ($\\sigma=2$) or B ($\\sigma=9$)?"],
    ["Explain why deviations are squared in the variance.", "Explain what a standard deviation of 0 means.", "Explain how an outlier inflates the standard deviation."]),
  "5.4": A3("5.4", "Quartiles, Percentiles & Box Plots",
    ["Find $Q_1,Q_2,Q_3$ of 2,4,6,8,10,12,14,16.", "Compute the IQR of that data.", "State the five-number summary.", "State the $1.5\\times$IQR outlier test."],
    ["Test whether 40 is an outlier in a set with $Q_1=10,Q_3=20$.", "Draw a box plot for 5,7,8,10,12,15,20.", "Find the 80th percentile of a 20-value data set."],
    ["Explain why the IQR resists outliers.", "Explain what a long whisker indicates.", "Explain how a box plot reveals skew."]),
  "5.5": A3("5.5", "Displaying & Describing Distributions",
    ["What does a histogram show that a bar graph does not?", "Describe a right-skewed distribution.", "What is a relative-frequency histogram?", "Name three features used to describe a distribution's shape."],
    ["Given a frequency table, sketch and describe the histogram.", "Identify the skew of a data set whose mean exceeds its median.", "Compare two histograms and state which has greater spread."],
    ["Explain how bin width changes a histogram's impression.", "Explain how shape hints at the better centre measure.", "Explain what bimodal data might indicate about the population."]),
  "5.6": A3("5.6", "The z-Score & Comparing Data",
    ["Write the z-score formula.", "Find the z-score of 88 when $\\mu=75,\\sigma=6$.", "What does a positive vs negative z-score indicate?", "Why standardize before comparing?"],
    ["Student X: 82 ($\\mu=78,\\sigma=4$); Student Y: 91 ($\\mu=85,\\sigma=9$). Compare with z-scores.", "A z-score is 2.0 for a value in a set with $\\mu=60,\\sigma=5$; find the value.", "Convert a z-score of 1.0 to a percentile for normal data."],
    ["Explain why raw scores across different tests are not comparable.", "Explain what makes a z-score 'unitless'.", "Explain the link between z-scores and percentiles."]),
  "6.1": A3("6.1", "Scatter Plots & Correlation",
    ["Distinguish explanatory and response variables.", "Describe what 'positive correlation' looks like.", "Sketch a scatter with strong negative correlation.", "What does 'no correlation' look like?"],
    ["Given paired data, plot it and describe direction, form, strength.", "Classify a clearly curved scatter's form.", "Decide which of two scatters shows the stronger relationship."],
    ["Explain the difference between form and strength.", "Explain why a scatter can show a pattern that $r$ misses.", "Explain how an outlier can distort a perceived correlation."]),
  "6.2": A3("6.2", "Correlation & Linear Regression",
    ["Interpret $r=0.92$.", "Interpret $r=-0.15$.", "State the least-squares slope formula.", "Through which point does the line of best fit always pass?"],
    ["For $(1,3),(2,5),(3,4),(4,7)$, compute $r$.", "Find the line of best fit for that data.", "Use the line to predict $y$ at $x=2.5$ and at $x=15$; label each interpolation or extrapolation."],
    ["Explain why $|r|$ near 1 does not prove causation.", "Explain why $r$ can be near 0 for a strong curved pattern.", "Explain the difference between interpolation and extrapolation."]),
  "6.3": A3("6.3", "The Coefficient of Determination & Prediction",
    ["Define $r^2$ in words.", "If $r=0.8$, find $r^2$ and interpret it.", "What is a residual?", "Why is extrapolation risky?"],
    ["A regression has $r=0.6$; what percent of variation is explained?", "Given a line and data, compute a residual for one point.", "Explain whether predicting 50 years ahead from 5 years of data is sound."],
    ["Explain what $r^2=0.49$ tells a researcher.", "Explain how residual patterns reveal a poor linear fit.", "Explain why a high $r^2$ still does not justify extrapolation."]),
  "6.4": A3("6.4", "Non-Linear Regression & Modelling",
    ["Name two non-linear models used in regression.", "What scatter shape suggests an exponential model?", "How do you compare competing models?", "When is a line the wrong model?"],
    ["Population doubling each period suggests which model? Justify.", "Given curved data, argue for a quadratic vs exponential fit.", "Two models give $r^2=0.90$ and $0.97$; which fits better and why?"],
    ["Explain how the shape of the scatter guides the model choice.", "Explain a limitation of using $r^2$ alone to pick a model.", "Explain why an over-fitted model can predict poorly."]),
  "6.5": A3("6.5", "Correlation vs Causation",
    ["State why correlation does not imply causation.", "Define a confounding variable.", "Give an example of a spurious correlation.", "What kind of study can establish causation?"],
    ["Ice-cream sales correlate with drownings — identify the lurking variable.", "A study links coffee to longevity; propose a confounder.", "Explain reverse causation with an example."],
    ["Explain the difference between common-cause and reverse-cause links.", "Explain why a controlled experiment can support causation.", "Explain how a confounder can create a correlation with no direct link."]),
  "7.1": A3("7.1", "Designing the Study",
    ["What makes a question researchable?", "Distinguish a hypothesis from a question.", "Name the explanatory and response variables in a sample study.", "List two common study designs."],
    ["Turn 'do students who sleep more score higher?' into a testable design.", "Identify variables and a hypothesis for a chosen topic.", "Choose an appropriate design (survey/experiment/observational) for a given question."],
    ["Explain why a vague question weakens a study.", "Explain the trade-offs between an experiment and an observational study.", "Explain how design choices affect what conclusions are valid."]),
  "7.2": A3("7.2", "Collecting & Managing Data",
    ["Distinguish primary and secondary data.", "Give one data-cleaning step.", "Name one ethical concern in data collection.", "Why cite data sources?"],
    ["Describe how you would clean a data set with missing and duplicate entries.", "Choose a suitable secondary source for a chosen topic and justify it.", "Explain how to anonymize personal data in a survey."],
    ["Explain why dirty data can invalidate an analysis.", "Explain the ethics of collecting data from minors.", "Explain the risk of secondary data with an unknown methodology."]),
  "7.3": A3("7.3", "Analyzing the Data",
    ["Which tool summarizes one-variable spread?", "Which tool measures a two-variable linear relationship?", "When would you use a box plot vs a histogram?", "Name one source of variability to report."],
    ["Given a data set, choose and justify the right summary statistics.", "Given paired data, decide between one- and two-variable analysis.", "Identify a bias present in a sample analysis and its effect."],
    ["Explain how to choose between competing analyses.", "Explain how variability affects the confidence in a conclusion.", "Explain why a single statistic can mislead without context."]),
  "7.4": A3("7.4", "Communicating Conclusions",
    ["What should a conclusion connect back to?", "Name one limitation worth disclosing.", "Why acknowledge assumptions?", "What makes a conclusion defensible?"],
    ["Write a one-paragraph conclusion for a given result, in context.", "List the limitations of a small-sample study.", "Anticipate one objection to a conclusion and answer it."],
    ["Explain why stating limitations strengthens a report.", "Explain how to avoid overstating a correlation as a cause.", "Explain how to present results honestly to a non-expert audience."]),
};

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: "MDM4U", description: DESC, level: "12", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: "MDM4U", title: COURSE_TITLE, description: DESC, level: "12", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  await db.from("assignments").delete().eq("course_id", course.id);
  let pos = 0, full = 0, asg = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    if (!JSON.stringify(s.blocks).includes("are being written")) full++;
    const ad = ASSIGN[s.code];
    if (ad) {
      const { error: ae } = await db.from("assignments").insert({ course_id: course.id, title: ad.title, description: ad.description, published: true });
      if (ae) throw ae;
      asg++;
    }
    console.log(`  ${s.code} ${s.title}`);
  }
  console.log(`\nDone. Seeded ${subjects.length} MDM4U lessons (${full} full, ${subjects.length - full} scaffold) + ${asg} assignments.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}

export { subjects };
