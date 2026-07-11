// Fully-authored MDM4U lessons (deep, hard examples & questions), keyed by code.
// The seed (seed-mdm4u.mjs) splices these over the scaffolds. Add lessons here
// unit by unit; anything not present stays a scaffold.
import { html, gframe, anim } from "./seed-mpm2d.mjs";

// Shared inline styles (match the flagship lessons).
const EX = "background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;";
const PR = "background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;";
const MK = "background-color:#fdecea;border-left:5px solid #d9534f;padding:10px 14px;margin:10px 0;border-radius:6px;";
const QA = "background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;";

export const authored = {
  // ── 1.1 The Fundamental Counting Principle ──────────────────
  "1.1": { code: "1.1", title: "The Fundamental Counting Principle", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔢 The Fundamental Counting Principle</h1>
  <p><strong>Overview.</strong> All of counting rests on two ideas. When a task is built from a <em>sequence</em> of choices ("first this, <strong>and</strong> then that"), you <strong>multiply</strong> the options. When a task falls into <em>separate, non-overlapping</em> alternatives ("this case <strong>or</strong> that case"), you <strong>add</strong> the counts. The whole art of MDM4U counting is reading a problem to see which principle applies — and handling restrictions that make later choices depend on earlier ones.</p>

  <h2>📌 The Multiplicative Principle (AND → ×)</h2>
  <p>If a task is completed in stages, with \(a\) ways for stage 1, \(b\) ways for stage 2, \(c\) ways for stage 3, …, then the whole task has \(a\times b\times c\times\cdots\) outcomes. The stages must be <strong>independent</strong> — the number of options at each stage should not depend on <em>which</em> option you picked earlier (though it may depend on <em>how many</em> were used, as with "no repeats").</p>

  <h2>📌 The Additive Principle (OR → +)</h2>
  <p>If the outcomes split into cases that <strong>cannot happen together</strong>, count each case and add. "A 3-character code that is all letters <strong>or</strong> all digits" = (all letters) + (all digits), because no code is both.</p>

  <h2>📌 Restrictions</h2>
  <p>Restrictions ("no repeats", "must be even", "can't start with 0") shrink the options at one or more stages. The golden rule: <strong>deal with the most restricted stage first</strong>, because its choice changes how many options remain for the others.</p>

  <h2>📌 Complementary Counting</h2>
  <p>When "at least one …" would splinter into many cases, count the <strong>total</strong> and subtract the one unwanted case (the "none" case). This is the counting-principle version of the complement, and it is often the difference between a one-line solution and a five-case slog.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Two divisibility + distinctness constraints</h3>
    <p>How many 4-digit numbers have <strong>all different digits</strong> and are <strong>divisible by 5</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Why cases?</strong> Divisible by 5 forces the units digit to be 0 or 5, and the choice of 0 vs 5 interacts with the "no leading zero" rule — so split on it.</div>
      <div class="step"><strong>Case A — units = 0:</strong> the other three positions are distinct digits from the remaining 9, and the thousands digit is automatically non-zero (0 is used): \(9\times8\times7=504\).</div>
      <div class="step"><strong>Case B — units = 5:</strong> thousands \(\ne 0,5\Rightarrow 8\); hundreds: 8 left; tens: 7. \(8\times8\times7=448\).</div>
      <div class="step"><strong>Add:</strong> \(504+448=952\).</div>
      <em>Conclusion: 952 numbers. The two "ending" digits are not symmetric — 0 relaxes the leading-digit rule, 5 does not. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: A position-dependent restriction</h3>
    <p>How many 5-digit numbers have <strong>no two adjacent digits equal</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> First digit: 1–9, so 9 ways.</div>
      <div class="step"><strong>Step 2:</strong> Each later digit must differ only from the one immediately before it — any of the 10 digits except that one: 9 ways each.</div>
      <div class="step"><strong>Step 3:</strong> \(9\times9\times9\times9\times9=9^{5}=59\,049\).</div>
      <em>Conclusion: 59 049. The constraint is "local" (only the neighbour matters), so every stage after the first has the same count. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Forbidden positions (the end seats)</h3>
    <p>3 teachers and 4 students stand in a row of 7 for a photo. In how many arrangements is <strong>no teacher at either end</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Both ends must be students. Fill the two ends with an ordered pair of distinct students: \(4\times3=12\).</div>
      <div class="step"><strong>Step 2:</strong> The middle 5 seats take the remaining 5 people (2 students + 3 teachers) in any order: \(5!=120\).</div>
      <div class="step"><strong>Step 3:</strong> \(12\times120=1440\).</div>
      <em>Conclusion: 1440 arrangements. Lock down the constrained positions first, then freely arrange the rest. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Complementary counting — "at least one digit"</h3>
    <p>A 6-character password uses letters and digits (36 symbols, repeats allowed) and must contain <strong>at least one digit</strong>. How many passwords?</p>
    <div class="solution">
      <div class="step"><strong>Total</strong> (no restriction): \(36^{6}=2\,176\,782\,336\).</div>
      <div class="step"><strong>Unwanted</strong> (letters only, no digit): \(26^{6}=308\,915\,776\).</div>
      <div class="step"><strong>Subtract:</strong> \(2\,176\,782\,336-308\,915\,776=1\,867\,866\,560\).</div>
      <em>Conclusion: 1 867 866 560. Counting "at least one" directly (exactly 1, 2, …, 6 digits) would take six cases; the complement takes one subtraction. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Couples as blocks</h3>
    <p>Three couples sit in a row of 6 seats so that <strong>each couple sits together</strong>. How many seatings?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Glue each couple into a block → 3 blocks to arrange: \(3!=6\).</div>
      <div class="step"><strong>Step 2:</strong> Each couple can sit in either internal order: \(2^{3}=8\).</div>
      <div class="step"><strong>Step 3:</strong> \(6\times8=48\).</div>
      <em>Conclusion: 48 seatings. "Together" collapses each pair to one object, then you restore its internal orderings. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 6: When counting <em>becomes</em> a combination</h3>
    <p>How many 3-digit numbers have <strong>strictly increasing</strong> digits (e.g. 137, 258)?</p>
    <div class="solution">
      <div class="step"><strong>Key insight:</strong> A strictly increasing number can't contain 0 (it would have to lead), so the digits come from \(\{1,\dots,9\}\), and <em>any</em> 3 distinct digits can be arranged in <strong>exactly one</strong> increasing order.</div>
      <div class="step"><strong>Step 1:</strong> Choosing the digits already determines the number — so just count the 3-element subsets: \(\binom{9}{3}=84\).</div>
      <em>Conclusion: 84 numbers. A "sequence with a forced order" is really an unordered <em>selection</em> — the bridge from counting principles to combinations (§1.5). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>How many 5-letter "words" (from 26 letters) have no two adjacent letters the same?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(26\times25^{4}=26\times390\,625=10\,156\,250\). <em>Answer: 10 156 250.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>How many 4-digit numbers have <strong>strictly decreasing</strong> digits (e.g. 9531, 8420)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Any 4 distinct digits from \(\{0,\dots,9\}\) have exactly one decreasing arrangement, and the largest (leading) digit is never 0: \(\binom{10}{4}=210\). <em>Answer: 210.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Three couples (6 people) sit in a row. In how many seatings does <strong>no</strong> couple sit together?</p><details><summary>View answer</summary><div class="solution"><div class="step">Inclusion–exclusion on \(A_i=\)"couple \(i\) together". Total \(6!=720\); \(\sum|A_i|=3(2\cdot5!)=720\); \(\sum|A_i\cap A_j|=3(2^2\cdot4!)=288\); \(|A_1\cap A_2\cap A_3|=2^3\cdot3!=48\). Union \(=720-288+48=480\); none together \(=720-480=240\). <em>Answer: 240.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>How many 3-digit numbers have a <strong>digit sum of 6</strong>?</p><details><summary>View answer</summary><div class="solution"><div class="step">Let the digits be \(a\ge1,\ b,c\ge0\) with \(a+b+c=6\). Substitute \(a'=a-1\ge0\): \(a'+b+c=5\); non-negative solutions \(=\binom{5+2}{2}=\binom{7}{2}=21\) (all upper bounds ≥5 are non-binding). <em>Answer: 21.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>How many 4-digit numbers are divisible by 5 (digits may repeat)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Units \(\in\{0,5\}\) → 2; thousands 1–9 → 9; hundreds and tens 10 each: \(9\times10\times10\times2=1800\). <em>Answer: 1800.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Treating the two "ending" digits (0 vs 5) as symmetric when a leading-digit rule is present.</li>
    <li>Applying "no repeats" (options drop each stage) when the rule is really "no <em>adjacent</em> repeat" (options stay constant).</li>
    <li>Enumerating "at least one" by cases when the complement is a single subtraction.</li>
    <li>Missing that a "forced-order" arrangement is an unordered selection (a combination).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Multiply or add?</h3><p><em>Multiply for a sequence of choices (AND); add for mutually exclusive cases (OR).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which stage do I count first?</h3><p><em>The most restricted one — its choice determines what's left for the others.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: When do I need cases?</h3><p><em>When one restriction's count depends on how another restriction was satisfied (e.g. "even" and "no leading zero" both touching the digit 0).</em></p></div>
</div>`)] },

  // ── 1.2 Factorials & Permutations of Distinct Objects ───────
  "1.2": { code: "1.2", title: "Factorials & Permutations of Distinct Objects", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔁 Factorials &amp; Permutations of Distinct Objects</h1>
  <p><strong>Overview.</strong> A <strong>permutation</strong> is an arrangement in which <em>order matters</em>. The factorial \(n!\) counts the arrangements of \(n\) distinct objects, and \({}_{n}P_{r}\) counts ordered selections of \(r\) from \(n\). This lesson makes factorial algebra fast, derives \({}_{n}P_{r}\), and handles the two hardest question types: solving for \(n\), and arranging with a positional restriction.</p>

  <h2>📌 Factorials</h2>
  <p>\(n!=n(n-1)(n-2)\cdots2\cdot1\), and by definition \(0!=1\). The definition \(0!=1\) is what makes every formula below work at the edges. Factorials grow explosively, so <strong>never expand fully</strong> when a fraction lets them cancel: \(\dfrac{8!}{5!}=\dfrac{8\cdot7\cdot6\cdot\cancel{5!}}{\cancel{5!}}=336\).</p>

  <h2>📌 Permutations of \(r\) from \(n\)</h2>
  <p>Filling \(r\) ordered positions from \(n\) distinct objects: \(n\) choices for the first, \(n-1\) for the second, …, down to \(n-r+1\). That product is</p>
  <p style="text-align:center;">\( {}_{n}P_{r}=\dfrac{n!}{(n-r)!}=n(n-1)\cdots(n-r+1) \)</p>
  <p>Arranging <em>all</em> \(n\) objects is the special case \({}_{n}P_{n}=n!\) (since \(0!=1\)).</p>

  <h2>📌 Relative-Order Constraints</h2>
  <p>Sometimes a subset of objects must appear in one <strong>fixed relative order</strong> (not necessarily adjacent). Of the \(k!\) orderings of those \(k\) objects, exactly one is allowed — so arrange everything and divide by \(k!\).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: A factorial equation</h3>
    <p>Solve \(\dfrac{(n+2)!}{n!}=56\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\dfrac{(n+2)!}{n!}=(n+2)(n+1)\).</div>
      <div class="step"><strong>Step 2:</strong> \((n+2)(n+1)=56\Rightarrow n^{2}+3n-54=0\Rightarrow(n+9)(n-6)=0\).</div>
      <div class="step"><strong>Step 3:</strong> \(n=6\) (reject \(n=-9\)).</div>
      <em>Conclusion: \(n=6\). Expand the factorial ratio to a small polynomial before solving. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: A required element (complement)</h3>
    <p>Eight sprinters race for gold, silver, and bronze. In how many podiums does <strong>the fastest runner win a medal</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Total podiums:</strong> \({}_{8}P_{3}=336\).</div>
      <div class="step"><strong>Podiums without her</strong> (medals go to the other 7): \({}_{7}P_{3}=210\).</div>
      <div class="step"><strong>With her:</strong> \(336-210=126\). (Check directly: she takes 1 of 3 medals, the rest \({}_{7}P_{2}\): \(3\times42=126\). ✓)</div>
      <em>Conclusion: 126 podiums. The complement and the direct count agree — a useful self-check. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: A fixed relative order</h3>
    <p>Seven distinct books are shelved. In how many arrangements do <strong>three particular books appear in a fixed left-to-right order</strong> (not necessarily adjacent)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Arrange all seven freely: \(7!=5040\).</div>
      <div class="step"><strong>Step 2:</strong> Among the \(3!=6\) relative orders of the three special books, exactly one is allowed, so divide: \(\dfrac{7!}{3!}=840\).</div>
      <em>Conclusion: 840 arrangements. "Fixed relative order" divides by \(k!\); it does <em>not</em> glue the objects together. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Solving a permutation equation</h3>
    <p>Solve \({}_{n}P_{3}=6\cdot{}_{n}P_{2}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(n(n-1)(n-2)=6\,n(n-1)\).</div>
      <div class="step"><strong>Step 2:</strong> For \(n\ge2\) divide by \(n(n-1)\): \(n-2=6\).</div>
      <div class="step"><strong>Step 3:</strong> \(n=8\).</div>
      <em>Conclusion: \(n=8\). Cancel the common factorial factor rather than expanding a cubic. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Vowels confined to even positions</h3>
    <p>How many arrangements of the letters of <strong>DAUGHTER</strong> (8 distinct letters) have <strong>all three vowels in even positions</strong>? (Vowels: A, U, E.)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The even positions are 2, 4, 6, 8 — four slots. Place the 3 vowels into 3 of them, order matters: \({}_{4}P_{3}=24\).</div>
      <div class="step"><strong>Step 2:</strong> The 5 consonants fill the 5 remaining positions: \(5!=120\).</div>
      <div class="step"><strong>Step 3:</strong> \(24\times120=2880\).</div>
      <em>Conclusion: 2880 arrangements. Seat the constrained objects into their allowed slots first, then fill the rest. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 6: A magnitude restriction</h3>
    <p>Using the digits 1–7 without repetition, how many 4-digit numbers are <strong>greater than 5000</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> "\(>5000\)" is controlled by the thousands digit, which must be 5, 6, or 7: 3 choices.</div>
      <div class="step"><strong>Step 2:</strong> The remaining 3 positions use 3 of the other 6 digits: \({}_{6}P_{3}=120\).</div>
      <div class="step"><strong>Step 3:</strong> \(3\times120=360\).</div>
      <em>Conclusion: 360 numbers. A size condition is a restriction on the leading digit — handle it first. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Solve \({}_{n}P_{4}=20\cdot{}_{n}P_{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\((n-2)(n-3)=20\Rightarrow n^{2}-5n-14=0\Rightarrow(n-7)(n+2)=0\Rightarrow n=7\). <em>Answer: \(n=7\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>How many arrangements of MONDAY (6 distinct letters) have the vowels O and A in the first and last positions?</p><details><summary>View answer</summary><div class="solution"><div class="step">Ends: O,A in \(2!=2\) orders; the 4 consonants fill the middle: \(4!=24\). \(2\times24=48\). <em>Answer: 48.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Five boys and three girls sit in a row so that the three girls appear in a fixed relative order among themselves. How many seatings?</p><details><summary>View answer</summary><div class="solution"><div class="step">All \(8!\), divided by the \(3!\) orders of the girls: \(\dfrac{8!}{3!}=6720\). <em>Answer: 6720.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>How many 4-digit numbers greater than 3000 have all distinct digits (from 0–9)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Thousands ∈ {3,…,9} → 7 choices; the other three positions use 3 of the remaining 9 digits: \({}_{9}P_{3}=504\). \(7\times504=3528\). <em>Answer: 3528.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>In how many ways can 8 people stand in a row if 3 particular people must all stand together?</p><details><summary>View answer</summary><div class="solution"><div class="step">Glue the 3 into one block → 6 units: \(6!=720\); times the \(3!\) internal orders: \(720\times6=4320\). <em>Answer: 4320.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Gluing objects together when the condition is a <em>fixed relative order</em> (divide by \(k!\) instead).</li>
    <li>Expanding a cubic in a permutation equation instead of cancelling the common factor.</li>
    <li>Keeping a negative or non-integer root when solving for \(n\).</li>
    <li>Filling the free positions before seating the objects that have a position/magnitude restriction.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When is it a permutation?</h3><p><em>When the order of the chosen objects matters (podium, ranking, sequence of positions).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I solve \({}_{n}P_{r}=\)number?</h3><p><em>Write it as a product \(n(n-1)\cdots\), set the polynomial to the number, and take the positive integer root.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why does \(0!=1\)?</h3><p><em>So that \({}_{n}P_{n}=\dfrac{n!}{0!}=n!\) and later the combination formula behave correctly at the boundaries.</em></p></div>
</div>`)] },

  // ── 1.3 Permutations with Identical Objects ─────────────────
  "1.3": { code: "1.3", title: "Permutations with Identical Objects", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔠 Permutations with Identical Objects</h1>
  <p><strong>Overview.</strong> When some of the objects being arranged are <em>identical</em>, treating them as distinct overcounts every arrangement. Dividing by the factorial of each group of repeats corrects it. This single idea powers word-rearrangement problems and — surprisingly — counting shortest routes on a grid.</p>

  <h2>📌 The Formula</h2>
  <p>For \(n\) objects where one kind repeats \(a\) times, another \(b\) times, and so on,</p>
  <p style="text-align:center;">\( \dfrac{n!}{a!\,b!\,c!\cdots} \)</p>
  <p><strong>Why divide?</strong> Swapping two identical letters produces the <em>same</em> word, yet \(n!\) counts it as new. The \(a\) identical copies can be permuted \(a!\) ways among themselves without changing anything, so we divide that overcount away — once per repeated group.</p>

  <h2>📌 Grid Paths</h2>
  <p>A shortest path that goes \(E\) blocks east and \(N\) blocks north is just an arrangement of \(E\) identical "E" moves and \(N\) identical "N" moves — so there are \(\dfrac{(E+N)!}{E!\,N!}\) routes.</p>

  <h2>📌 Two Advanced Techniques</h2>
  <p><strong>Sub-path products:</strong> a grid route forced through a checkpoint is the <em>product</em> of the two independent leg-counts (before and after the checkpoint). <strong>Gap method with identical objects:</strong> to keep identical objects apart, arrange the others first, then <em>choose</em> which gaps the identical objects occupy (no internal order, since they're identical).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: A multi-repeat word with an end condition</h3>
    <p>How many arrangements of the letters of <strong>MATHEMATICS</strong> (M×2, A×2, T×2, and H, E, I, C, S once each) <strong>begin and end with the same letter</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Only a repeated letter can occupy both ends — so the shared letter is M, A, or T (3 choices).</div>
      <div class="step"><strong>Step 2:</strong> Fix that pair at the two ends. The middle 9 positions hold the remaining letters, which still contain <em>two</em> repeated pairs. E.g. with M at the ends the middle is A,A,T,T,H,E,I,C,S: \(\dfrac{9!}{2!\,2!}=90\,720\).</div>
      <div class="step"><strong>Step 3:</strong> Each of the 3 shared-letter choices gives the same count: \(3\times90\,720=272\,160\).</div>
      <em>Conclusion: 272 160 arrangements. (For reference, the unrestricted total is \(\tfrac{11!}{2!2!2!}=4\,989\,600\).) ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: A grid path forced through a checkpoint</h3>
    <p>A courier travels from \((0,0)\) to \((5,4)\) moving only east or north, and must pass through the intersection \((2,2)\). How many routes?</p>
    <div class="solution">
      <div class="step"><strong>Leg 1</strong> \((0,0)\to(2,2)\): 2 E and 2 N → \(\dfrac{4!}{2!\,2!}=6\).</div>
      <div class="step"><strong>Leg 2</strong> \((2,2)\to(5,4)\): 3 E and 2 N → \(\dfrac{5!}{3!\,2!}=10\).</div>
      <div class="step"><strong>Multiply</strong> (independent legs): \(6\times10=60\).</div>
      <em>Conclusion: 60 routes. (Of the \(\binom{9}{5}=126\) total routes, only 60 pass through the checkpoint.) ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Keeping identical letters apart (gap method)</h3>
    <p>How many arrangements of the letters of <strong>BANANA</strong> have <strong>no two A's adjacent</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Set the A's aside. Arrange the non-A letters B, N, N: \(\dfrac{3!}{2!}=3\) arrangements. These create 4 gaps: \(\_\,?\,\_\,?\,\_\,?\,\_\)</div>
      <div class="step"><strong>Step 2:</strong> Drop the 3 identical A's into 3 of the 4 gaps — since the A's are identical, just <em>choose</em> the gaps: \(\binom{4}{3}=4\).</div>
      <div class="step"><strong>Step 3:</strong> \(3\times4=12\).</div>
      <em>Conclusion: 12 arrangements. The gap method needs \(\binom{4}{3}\), not \({}_{4}P_{3}\) — identical A's have no internal order. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: A "together" block inside a repeated-letter word</h3>
    <p>In how many arrangements of <strong>MISSISSIPPI</strong> (I×4, S×4, P×2, M) are <strong>all four I's together</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Glue the four I's into one block. The items to arrange are [IIII], S, S, S, S, P, P, M — 8 items, with S repeated 4× and P repeated 2×.</div>
      <div class="step"><strong>Step 2:</strong> \(\dfrac{8!}{4!\,2!}=\dfrac{40\,320}{48}=840\). (The [IIII] block has one internal order — identical I's.)</div>
      <em>Conclusion: 840 arrangements. Gluing works with repeated letters; just track the repeats that remain outside the block. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Parity of a number with repeated digits</h3>
    <p>Using all the digits of <strong>112233</strong>, how many distinct arrangements form an <strong>even</strong> number?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Even ⇒ the units digit is 2. Fix a 2 at the end; the remaining digits to arrange are 1, 1, 2, 3, 3.</div>
      <div class="step"><strong>Step 2:</strong> \(\dfrac{5!}{2!\,2!}=30\).</div>
      <em>Conclusion: 30 even numbers. (Check: odd numbers end in 1 or 3, giving \(30+30=60\); total \(30+60=90=\tfrac{6!}{2!2!2!}\). ✓) ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 6: Identical objects into distinct boxes (stars and bars)</h3>
    <p>In how many ways can <strong>10 identical candies</strong> be distributed among <strong>4 children</strong> (a child may get none)?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Encode a distribution as a row of 10 stars (candies) and 3 bars (dividers between 4 children) — an arrangement of identical objects.</div>
      <div class="step"><strong>Step 2:</strong> \(\dfrac{(10+3)!}{10!\,3!}=\binom{13}{3}=286\).</div>
      <em>Conclusion: 286 ways. "Identical items into distinct groups" is the same identical-object count in disguise — this is <strong>stars and bars</strong>. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>How many arrangements of the letters in <strong>TENNESSEE</strong>? (T, E×4, N×2, S×2.)</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{9!}{4!\,2!\,2!}=\dfrac{362\,880}{96}=3780\). <em>Answer: 3780.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Grid routes from \((0,0)\) to \((6,4)\) (east/north only) that <strong>avoid</strong> \((3,2)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Total \(\binom{10}{6}=210\); through \((3,2)\): \(\binom{5}{3}\binom{5}{3}=10\cdot10=100\); avoiding \(=210-100=110\). <em>Answer: 110.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>How many arrangements of <strong>PEPPER</strong> (P×3, E×2, R) have the three P's <strong>not</strong> all adjacent?</p><details><summary>View answer</summary><div class="solution"><div class="step">Total \(\dfrac{6!}{3!\,2!}=60\); P's together (glue PPP → [PPP],E,E,R): \(\dfrac{4!}{2!}=12\); not together \(=60-12=48\). <em>Answer: 48.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>In how many ways can 8 identical balls go into 3 distinct boxes with <strong>each box non-empty</strong>?</p><details><summary>View answer</summary><div class="solution"><div class="step">Give each box one ball first, then distribute the remaining 5 freely: \(\binom{5+2}{2}=\binom{7}{2}=21\). <em>Answer: 21.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>How many arrangements of the letters in <strong>BOOKKEEPER</strong>? (O×2, K×2, E×3.)</p><details><summary>View answer</summary><div class="solution"><div class="step">10 letters with those repeats: \(\dfrac{10!}{2!\,2!\,3!}=\dfrac{3\,628\,800}{24}=151\,200\). <em>Answer: 151 200.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>In the gap method for identical objects, using \({}_{n}P_{r}\) (ordered) instead of \(\binom{n}{r}\) (choose gaps).</li>
    <li>Forgetting the repeated letters that remain <em>outside</em> a glued block.</li>
    <li>Adding sub-path counts instead of multiplying them for a checkpoint route.</li>
    <li>Missing that "identical items into distinct boxes" is stars and bars, not a plain product.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why divide by the repeat factorials?</h3><p><em>Because permuting identical objects among themselves produces the same arrangement, which \(n!\) has overcounted.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why is a grid path an identical-object permutation?</h3><p><em>A route is a string of identical east-moves and identical north-moves; arranging that string is exactly the identical-object count.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Do I multiply a glued identical block by an internal order?</h3><p><em>No — identical letters have a single internal arrangement, so the internal factor is 1.</em></p></div>
</div>`)] },

  // ── 1.4 Permutations with Constraints ───────────────────────
  "1.4": { code: "1.4", title: "Permutations with Constraints", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔗 Permutations with Constraints</h1>
  <p><strong>Overview.</strong> The hardest permutation questions add a rule: certain objects must stay <strong>together</strong>, must stay <strong>apart</strong>, or are seated in a <strong>circle</strong>. Each has a reliable technique — glue-and-swap, the gap method, and the circular formula — and the together/apart pair are complements of each other.</p>

  <h2>📌 Objects That Must Be Together — Glue &amp; Swap</h2>
  <p>Treat the group as a single block, arrange the blocks, then multiply by the internal arrangements of the group. If \(k\) distinct objects must be adjacent among \(n\) total, arrange \((n-k+1)\) items, then \(\times\,k!\) inside the block.</p>

  <h2>📌 Objects That Must Be Apart</h2>
  <p>Two clean routes: <strong>(i) Complement</strong> — total minus "together". <strong>(ii) Gap method</strong> — arrange the <em>other</em> objects first, then drop the "apart" objects into the gaps between them (including the ends), so they can never touch.</p>

  <h2>📌 Circular Permutations</h2>
  <p>Around a round table there is no "first seat" — rotating everyone gives the same arrangement. Fixing one person as a reference removes the \(n\) rotations, leaving</p>
  <p style="text-align:center;">\( (n-1)! \)</p>

  <h2>📌 Multiple Blocks &amp; Alternating Patterns</h2>
  <p>When <em>several</em> groups must each stay together, arrange the groups, then multiply by each group's internal orderings. <strong>Alternating</strong> arrangements (men/women, etc.) fix the position pattern first: in a row there are usually two patterns; around a circle you seat one type to kill the rotations, then slot the other type into the gaps.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Several blocks at once</h3>
    <p>On a shelf, 4 maths, 3 physics, and 2 chemistry books are arranged so that <strong>each subject's books stay together</strong> (the subject-blocks may be in any order). How many arrangements? (All books distinct.)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Order the 3 subject-blocks: \(3!=6\).</div>
      <div class="step"><strong>Step 2:</strong> Order within each block: \(4!\times3!\times2!=24\times6\times2=288\).</div>
      <div class="step"><strong>Step 3:</strong> \(6\times288=1728\).</div>
      <em>Conclusion: 1728 arrangements. Each block contributes its own internal factorial. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Three objects all separated (gap method)</h3>
    <p>How many arrangements of the letters of <strong>PICTURE</strong> have <strong>no two vowels adjacent</strong>? (Vowels: I, U, E.)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Arrange the 4 consonants P, C, T, R: \(4!=24\), creating 5 gaps.</div>
      <div class="step"><strong>Step 2:</strong> Place the 3 distinct vowels into 3 different gaps, order matters: \({}_{5}P_{3}=60\).</div>
      <div class="step"><strong>Step 3:</strong> \(24\times60=1440\).</div>
      <em>Conclusion: 1440 arrangements. The gap method scales past two objects — you only need enough gaps. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: A block around a circular table</h3>
    <p>Eight people sit at a round table, and 3 particular friends must sit together. How many seatings?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Glue the 3 friends into one block → 6 units around the table: \((6-1)!=120\).</div>
      <div class="step"><strong>Step 2:</strong> Order the friends inside the block: \(3!=6\).</div>
      <div class="step"><strong>Step 3:</strong> \(120\times6=720\).</div>
      <em>Conclusion: 720 seatings. Gluing reduces the count of circular units before applying \((n-1)!\). ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: "Apart" around a circular table (complement)</h3>
    <p>Seven people sit at a round table so that <strong>two feuding guests are not adjacent</strong>. How many seatings?</p>
    <div class="solution">
      <div class="step"><strong>Total:</strong> \((7-1)!=720\).</div>
      <div class="step"><strong>The two together:</strong> glue → 6 circular units, \((6-1)!=120\), times \(2!\) internal \(=240\).</div>
      <div class="step"><strong>Apart:</strong> \(720-240=480\).</div>
      <em>Conclusion: 480 seatings. Circular "apart" is cleanest as total minus circular "together". ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Alternating in a row</h3>
    <p>Four men and four women stand in a row so that the genders <strong>alternate</strong>. How many arrangements?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Two patterns fit: MWMWMWMW or WMWMWMWM.</div>
      <div class="step"><strong>Step 2:</strong> Within each pattern, order the men (\(4!\)) and the women (\(4!\)): \(24\times24=576\).</div>
      <div class="step"><strong>Step 3:</strong> \(2\times576=1152\).</div>
      <em>Conclusion: 1152 arrangements. With equal numbers, both starting genders are possible — hence the factor of 2. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 6: Alternating around a circular table</h3>
    <p>Four couples (4 men, 4 women) sit at a round table with <strong>men and women alternating</strong>. How many seatings?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Seat the 4 men around the table first (this fixes the rotations): \((4-1)!=6\).</div>
      <div class="step"><strong>Step 2:</strong> The 4 women fill the 4 gaps between the men: \(4!=24\). (No extra factor-of-2: fixing the men already sets the pattern.)</div>
      <div class="step"><strong>Step 3:</strong> \(6\times24=144\).</div>
      <em>Conclusion: 144 seatings. The circular case has <em>one</em> pattern once you anchor the men — unlike the two patterns in a row. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Five couples (10 people) sit in a row, each couple together. How many arrangements?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(5!\times2^{5}=120\times32=3840\). <em>Answer: 3840.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>How many arrangements of <strong>ALGEBRA</strong> (A×2) have the two A's <strong>not</strong> adjacent?</p><details><summary>View answer</summary><div class="solution"><div class="step">Gap method: arrange L,G,E,B,R (\(5!=120\)), place 2 identical A's into 2 of 6 gaps \(\binom{6}{2}=15\): \(120\times15=1800\). (Check: total \(\tfrac{7!}{2!}=2520\) minus together \(6!=720\) = 1800.) <em>Answer: 1800.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>3 Americans, 3 Canadians, and 3 Mexicans sit in a row so that each nationality sits together. How many arrangements?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(3!\times(3!)^{3}=6\times216=1296\). <em>Answer: 1296.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Six boys and six girls sit around a round table, alternating by gender. How many seatings?</p><details><summary>View answer</summary><div class="solution"><div class="step">Seat the boys circularly \((6-1)!=120\); girls fill the 6 gaps \(6!=720\): \(120\times720=86\,400\). <em>Answer: 86 400.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>In how many distinct ways can 5 different keys be arranged on a circular keyring?</p><details><summary>View answer</summary><div class="solution"><div class="step">Circular arrangements \((5-1)!=24\), but a keyring can be flipped over, so reflections coincide: \(\tfrac{24}{2}=12\). <em>Answer: 12.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Forgetting a block's internal \(k!\) — every "together" group contributes one.</li>
    <li>Using \(n!\) instead of \((n-1)!\) for a circular arrangement (or gluing before reducing the unit count).</li>
    <li>Adding a factor of 2 for a <em>circular</em> alternating arrangement — anchoring one type already fixes the pattern.</li>
    <li>In the gap method with identical objects, ordering the gaps (\({}_{n}P_{r}\)) instead of choosing them (\(\binom{n}{r}\)).</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do I force objects together?</h3><p><em>Glue them into one block, arrange the blocks, then multiply by the block's internal \(k!\).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I force objects apart?</h3><p><em>Either subtract the "together" count from the total, or arrange the others first and drop the apart-objects into distinct gaps.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: Why \((n-1)!\) for a circle?</h3><p><em>A rotation of everyone is the same seating, and there are \(n\) rotations, so divide \(n!\) by \(n\).</em></p></div>
</div>`)] },

  // ── 1.6 Combinations with Cases, Complement & Inclusion–Exclusion ──
  "1.6": { code: "1.6", title: "Combinations with Cases & the Complement", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧩 Combinations with Cases, the Complement &amp; Inclusion–Exclusion</h1>
  <p><strong>Overview.</strong> Advanced counting problems are rarely one binomial coefficient. They stack constraints — "at least 2 of these <em>and</em> at least 2 of those", "no forbidden pair", "at least one of every type". Three heavy tools handle them: <strong>casework</strong> (partition into disjoint cases and add), the <strong>complement</strong> (count everything, subtract the bad), and <strong>inclusion–exclusion</strong> (for overlapping "bad" events). This lesson is where these combine — every example below requires setting up the count before any arithmetic.</p>

  <h2>📌 Inclusion–Exclusion</h2>
  <p>To count selections that avoid <em>all</em> of several forbidden conditions, you can't just subtract each one — you'd double-remove the overlaps. For two events, \(|A\cup B|=|A|+|B|-|A\cap B|\); for three, \(|A\cup B\cup C|=\sum|A|-\sum|A\cap B|+|A\cap B\cap C|\). "At least one of each type" is the complement of "missing at least one type", and that complement is an inclusion–exclusion sum.</p>

  <h2>📌 Layered Casework</h2>
  <p>When two "at least" conditions act at once (e.g. a committee needing ≥2 from group X <em>and</em> ≥2 from group Y drawn from three groups), enumerate every valid split of the counts, compute each with a product of binomials, and sum. The discipline is listing <em>all</em> valid splits and no invalid ones.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: At least one card of every suit (inclusion–exclusion)</h3>
    <p>How many 5-card hands contain <strong>at least one card from each of the four suits</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Strategy:</strong> Complement of "missing at least one suit". Let \(A_i\) = hands avoiding suit \(i\). Count \(|A_1\cup A_2\cup A_3\cup A_4|\) by inclusion–exclusion, then subtract from the total \(\binom{52}{5}=2\,598\,960\).</div>
      <div class="step"><strong>Single suits missing:</strong> \(\binom{4}{1}\binom{39}{5}=4\cdot575\,757=2\,303\,028\).</div>
      <div class="step"><strong>Two suits missing:</strong> \(\binom{4}{2}\binom{26}{5}=6\cdot65\,780=394\,680\).</div>
      <div class="step"><strong>Three suits missing:</strong> \(\binom{4}{3}\binom{13}{5}=4\cdot1287=5\,148\). (Four suits missing is impossible.)</div>
      <div class="step"><strong>Union:</strong> \(2\,303\,028-394\,680+5\,148=1\,913\,496\).</div>
      <div class="step"><strong>All four suits present:</strong> \(2\,598\,960-1\,913\,496=685\,464\).</div>
      <em>Conclusion: 685 464 hands. The sign pattern \(+,-,+\) is inclusion–exclusion correcting the double-counted overlaps. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: At least one from every group (three-set inclusion–exclusion)</h3>
    <p>A committee of 5 is formed from 4 teachers, 5 parents, and 6 students (15 people). How many committees contain <strong>at least one person from each group</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Total:</strong> \(\binom{15}{5}=3003\).</div>
      <div class="step"><strong>Missing a group (subtract):</strong> no teachers \(\binom{11}{5}=462\); no parents \(\binom{10}{5}=252\); no students \(\binom{9}{5}=126\). Sum \(=840\).</div>
      <div class="step"><strong>Missing two groups (add back):</strong> no teachers &amp; no parents \(\binom{6}{5}=6\); no teachers &amp; no students \(\binom{5}{5}=1\); no parents &amp; no students \(\binom{4}{5}=0\). Sum \(=7\).</div>
      <div class="step"><strong>Missing all three:</strong> \(0\).</div>
      <div class="step"><strong>Inclusion–exclusion:</strong> committees missing ≥1 group \(=840-7=833\); at least one of each \(=3003-833=2170\).</div>
      <em>Conclusion: 2170 committees. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: No forbidden pair (couples problem)</h3>
    <p>A group of 10 consists of 3 married couples and 4 single people. A committee of 4 is chosen with <strong>no complete couple</strong> on it. How many committees?</p>
    <div class="solution">
      <div class="step"><strong>Total:</strong> \(\binom{10}{4}=210\).</div>
      <div class="step"><strong>Bad = contains at least one full couple.</strong> Choose a couple (3 ways), place both, then fill 2 of the remaining 8: \(3\binom{8}{2}=3\cdot28=84\).</div>
      <div class="step"><strong>Overlap correction:</strong> committees with <em>two</em> full couples were counted twice. Two couples = 4 people = the whole committee: \(\binom{3}{2}=3\) such. Inclusion–exclusion: bad \(=84-3=81\).</div>
      <div class="step"><strong>Good:</strong> \(210-81=129\).</div>
      <em>Conclusion: 129 committees. Forgetting the 2-couple overlap gives the wrong 126. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: "At least 2 aces OR at least 2 kings" (union of two events)</h3>
    <p>How many 5-card hands contain <strong>at least 2 aces or at least 2 kings</strong>?</p>
    <div class="solution">
      <div class="step"><strong>Let</strong> \(A\) = ≥2 aces, \(B\) = ≥2 kings; want \(|A\cup B|=|A|+|B|-|A\cap B|\).</div>
      <div class="step"><strong>\(|A|\):</strong> \(\binom{4}{2}\binom{48}{3}+\binom{4}{3}\binom{48}{2}+\binom{4}{4}\binom{48}{1}=103\,776+4\,512+48=108\,336\). By symmetry \(|B|=108\,336\).</div>
      <div class="step"><strong>\(|A\cap B|\)</strong> (≥2 aces and ≥2 kings in 5 cards): splits (2 aces, 2 kings, 1 other) \(=\binom{4}{2}\binom{4}{2}\binom{44}{1}=6\cdot6\cdot44=1584\); (2 aces, 3 kings) \(=\binom{4}{2}\binom{4}{3}=24\); (3 aces, 2 kings) \(=24\). Total \(=1632\).</div>
      <div class="step"><strong>Union:</strong> \(108\,336+108\,336-1632=215\,040\).</div>
      <em>Conclusion: 215 040 hands. The overlap \(A\cap B\) itself needs casework — a problem inside the problem. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Counting a poker hand — exactly one pair</h3>
    <p>How many 5-card hands are <strong>exactly one pair</strong> (two cards of one rank, and three other cards of three different ranks)?</p>
    <div class="solution">
      <div class="step"><strong>Rank of the pair:</strong> \(\binom{13}{1}=13\); <strong>its two suits:</strong> \(\binom{4}{2}=6\).</div>
      <div class="step"><strong>Three other ranks</strong> (all distinct, none equal to the pair's rank): \(\binom{12}{3}=220\).</div>
      <div class="step"><strong>A suit for each of those three cards:</strong> \(4^3=64\).</div>
      <div class="step"><strong>Multiply:</strong> \(13\cdot6\cdot220\cdot64=1\,098\,240\).</div>
      <em>Conclusion: 1 098 240 hands. Order the decisions so no hand is counted twice — that's why the three "kickers" are chosen as an unordered set of ranks, then given suits. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 6: Two simultaneous "at least" constraints (full casework)</h3>
    <p>A delegation of 6 is chosen from 5 Anglophones, 4 Francophones, and 3 bilinguals. It must contain <strong>at least 2 Anglophones and at least 2 Francophones</strong>. How many delegations?</p>
    <div class="solution">
      <div class="step"><strong>Enumerate</strong> \((a,f,b)\) with \(a+f+b=6,\ a\ge2,\ f\ge2,\ a\le5,\ f\le4,\ b\le3\):</div>
      <div class="step">\((2,2,2){:}\ \binom{5}{2}\binom{4}{2}\binom{3}{2}=10\cdot6\cdot3=180\); \((2,3,1){:}\ 10\cdot4\cdot3=120\); \((2,4,0){:}\ 10\cdot1\cdot1=10\).</div>
      <div class="step">\((3,2,1){:}\ \binom{5}{3}\binom{4}{2}\binom{3}{1}=10\cdot6\cdot3=180\); \((3,3,0){:}\ 10\cdot4\cdot1=40\).</div>
      <div class="step">\((4,2,0){:}\ \binom{5}{4}\binom{4}{2}=5\cdot6=30\). (Every other split violates a bound.)</div>
      <div class="step"><strong>Sum:</strong> \(180+120+10+180+40+30=560\).</div>
      <em>Conclusion: 560 delegations. The hard part isn't the arithmetic — it's finding <em>all six</em> valid splits and no phantom ones. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>How many 5-card hands are "two pair" (two cards of one rank, two of another, one of a third)?</p><details><summary>View answer</summary><div class="solution"><div class="step">Two ranks for the pairs \(\binom{13}{2}=78\); suits \(\binom{4}{2}^2=36\); a fifth card of a new rank \(\binom{11}{1}\binom{4}{1}=44\). \(78\cdot36\cdot44=123\,552\). <em>Answer: 123 552.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>From 8 men and 6 women, how many committees of 5 have <strong>more men than women</strong>?</p><details><summary>View answer</summary><div class="solution"><div class="step">Splits \((m,w)\) with \(m>w\): (5,0),(4,1),(3,2). \(\binom{8}{5}+\binom{8}{4}\binom{6}{1}+\binom{8}{3}\binom{6}{2}=56+420+840=1316\). <em>Answer: 1316.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>How many 5-card hands contain <strong>at least one ace and at least one king</strong>?</p><details><summary>View answer</summary><div class="solution"><div class="step">Inclusion–exclusion: \(\binom{52}{5}-2\binom{48}{5}+\binom{44}{5}=2\,598\,960-3\,424\,608+1\,086\,008=260\,360\). <em>Answer: 260 360.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Eight people, including a feuding pair A and B, are split into a committee of 4 and the rest. How many committees of 4 contain <strong>exactly one</strong> of A, B?</p><details><summary>View answer</summary><div class="solution"><div class="step">Choose which of A,B is in (2 ways), exclude the other, fill 3 from the remaining 6: \(2\binom{6}{3}=2\cdot20=40\). <em>Answer: 40.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>How many 5-card hands are a <strong>flush</strong> (all one suit) but <strong>not a straight flush</strong>? (Each suit has exactly 10 straight flushes, A-high through 10-high including the A-2-3-4-5 wheel.)</p><details><summary>View answer</summary><div class="solution"><div class="step">Flushes: \(4\binom{13}{5}=4\cdot1287=5148\). Straight flushes: \(4\cdot10=40\). Plain flushes \(=5148-40=5108\). <em>Answer: 5108.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Subtracting each "bad" event without adding back the overlaps (the inclusion–exclusion sign error).</li>
    <li>In casework, missing a valid split — or including one that breaks a bound (e.g. \(f=5\) when only 4 Francophones exist).</li>
    <li>Counting a poker hand with an <em>ordered</em> choice of the non-pair cards, inflating the total.</li>
    <li>Forgetting that "at least 2 aces or at least 2 kings" double-counts hands with both.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When do I need inclusion–exclusion instead of a simple complement?</h3><p><em>When the "bad" conditions overlap — subtracting each alone removes the overlaps twice, so you must add them back.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I structure a poker-hand count so nothing is double-counted?</h3><p><em>Choose ranks as unordered sets first, then assign suits — never order the individual cards.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What's the discipline in two-constraint casework?</h3><p><em>List every count-split that satisfies all the bounds, compute each as a product of binomials, and add — the difficulty is completeness, not arithmetic.</em></p></div>
</div>`)] },

  // ── 1.7 Pascal's Triangle & Combinatorial Identities ────────
  "1.7": { code: "1.7", title: "Pascal's Triangle & Combinatorial Identities", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔺 Pascal's Triangle &amp; Combinatorial Identities</h1>
  <p><strong>Overview.</strong> Arrange the numbers \(\binom{n}{r}\) in a triangle and structure appears everywhere: each entry is the sum of the two above it, each row sums to a power of two, and the diagonals hide their own patterns. These identities aren't curiosities — they're shortcuts, and each has a <em>combinatorial</em> reason (a "choosing story") behind it.</p>

  <h2>📌 Building the Triangle</h2>
  <p>Row \(n\) (starting at row 0) holds \(\binom{n}{0},\binom{n}{1},\dots,\binom{n}{n}\). Rows 0–5:</p>
  <p style="text-align:center;">1<br>1&nbsp;&nbsp;1<br>1&nbsp;&nbsp;2&nbsp;&nbsp;1<br>1&nbsp;&nbsp;3&nbsp;&nbsp;3&nbsp;&nbsp;1<br>1&nbsp;&nbsp;4&nbsp;&nbsp;6&nbsp;&nbsp;4&nbsp;&nbsp;1<br>1&nbsp;&nbsp;5&nbsp;&nbsp;10&nbsp;&nbsp;10&nbsp;&nbsp;5&nbsp;&nbsp;1</p>

  <h2>📌 Pascal's Identity</h2>
  <p style="text-align:center;">\( \dbinom{n}{r}=\dbinom{n-1}{r-1}+\dbinom{n-1}{r} \)</p>
  <p><strong>The story:</strong> to choose \(r\) from \(n\), look at one particular object — either you include it (\(\binom{n-1}{r-1}\) ways to fill the rest) or you don't (\(\binom{n-1}{r}\)). Every selection falls into exactly one case, so the counts add.</p>

  <h2>📌 Row Sums and Symmetry</h2>
  <p>Each row sums to \(2^n\): \(\displaystyle\sum_{r=0}^{n}\binom{n}{r}=2^{n}\), because that counts <em>all</em> subsets of an \(n\)-element set (each object is in or out). And the triangle is symmetric, \(\binom{n}{r}=\binom{n}{n-r}\).</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: Grid routes = a Pascal entry (curriculum connection)</h3>
    <p>A school is 5 blocks west and 3 blocks south of a student's home. Moving only west or south, how many routes are there — and where does the answer sit in Pascal's triangle?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> A route is an arrangement of 5 W's and 3 S's: \(\dfrac{8!}{5!\,3!}=\binom{8}{3}=56\).</div>
      <div class="step"><strong>Step 2:</strong> \(\binom{8}{3}\) is the fourth entry of <strong>row 8</strong> of Pascal's triangle — each intersection's route-count is literally the triangle entry above it.</div>
      <em>Conclusion: 56 routes. Grid-path counting, combinations, and Pascal's triangle are three views of one idea. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Solve an equation with Pascal's identity</h3>
    <p>Find \(n\) if \(\binom{n}{4}+\binom{n}{5}=\binom{11}{5}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Pascal's identity: \(\binom{n}{4}+\binom{n}{5}=\binom{n+1}{5}\).</div>
      <div class="step"><strong>Step 2:</strong> \(\binom{n+1}{5}=\binom{11}{5}\Rightarrow n+1=11\Rightarrow n=10\).</div>
      <div class="step"><strong>Check:</strong> \(\binom{10}{4}+\binom{10}{5}=210+252=462=\binom{11}{5}\). ✓</div>
      <em>Conclusion: \(n=10\). Collapse the sum first, then match. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: Subsets of a given size-parity</h3>
    <p>How many subsets of a 7-element set have an <strong>even</strong> number of elements?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Even subsets total \(\binom{7}{0}+\binom{7}{2}+\binom{7}{4}+\binom{7}{6}=1+21+35+7=64\).</div>
      <div class="step"><strong>Step 2:</strong> This is exactly half of \(2^{7}=128\): the alternating identity \(\sum(-1)^k\binom{n}{k}=0\) forces even and odd subsets to be equal, so each is \(2^{n-1}=64\).</div>
      <em>Conclusion: 64 subsets. Row parity splits the \(2^{n}\) subsets evenly. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: Hockey stick at scale</h3>
    <p>Evaluate \(\binom{4}{4}+\binom{5}{4}+\binom{6}{4}+\cdots+\binom{10}{4}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The hockey-stick identity: \(\displaystyle\sum_{i=4}^{10}\binom{i}{4}=\binom{11}{5}\).</div>
      <div class="step"><strong>Step 2:</strong> \(\binom{11}{5}=462\). (Check: \(1+5+15+35+70+126+210=462\). ✓)</div>
      <em>Conclusion: 462. A whole diagonal collapses to one entry. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: Sum of squares of a row (Vandermonde)</h3>
    <p>Evaluate \(\binom{4}{0}^{2}+\binom{4}{1}^{2}+\binom{4}{2}^{2}+\binom{4}{3}^{2}+\binom{4}{4}^{2}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Direct: \(1^{2}+4^{2}+6^{2}+4^{2}+1^{2}=1+16+36+16+1=70\).</div>
      <div class="step"><strong>Step 2:</strong> This is the identity \(\displaystyle\sum_{k=0}^{n}\binom{n}{k}^{2}=\binom{2n}{n}\): with \(n=4\), \(\binom{8}{4}=70\).</div>
      <em>Conclusion: 70. (Why? Choosing \(n\) from \(2n\) people split into two halves of \(n\) — take \(k\) from one half and \(n-k\) from the other, then \(\binom{n}{k}\binom{n}{n-k}=\binom{n}{k}^2\), summed over \(k\).) ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 6: Paths in the triangle itself</h3>
    <p>Starting at the apex and stepping down-left or down-right, how many distinct paths reach the entry \(\binom{7}{3}\)? What does that count represent?</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Reaching \(\binom{7}{3}\) takes 7 steps, of which exactly 3 are "down-right" (the lower index): \(\binom{7}{3}=35\) paths.</div>
      <div class="step"><strong>Step 2:</strong> So the <em>value</em> of an entry equals the <em>number of paths</em> to it — the combinatorial reason Pascal's identity holds (a path arrives from one of the two entries above).</div>
      <em>Conclusion: 35 paths. The entry counts the ways to get there. ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A grid trip goes 6 blocks east and 4 blocks north. How many routes, and which Pascal entry is it?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\binom{10}{4}=210\) — an entry of row 10. <em>Answer: 210.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Solve \(\binom{n}{2}+\binom{n}{3}=\binom{9}{3}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\binom{n+1}{3}=\binom{9}{3}\Rightarrow n=8\). <em>Answer: \(n=8\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Evaluate \(\displaystyle\sum_{k=0}^{5}\binom{5}{k}^{2}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(=\binom{10}{5}=252\) (check: \(1+25+100+100+25+1=252\)). <em>Answer: 252.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>How many subsets of \(\{1,2,\dots,8\}\) have an <strong>odd</strong> number of elements?</p><details><summary>View answer</summary><div class="solution"><div class="step">Half of \(2^{8}\): \(2^{7}=128\). <em>Answer: 128.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Evaluate \(\displaystyle\sum_{k=0}^{20}\binom{20}{k}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">The full row sum is \(2^{20}=1\,048\,576\). <em>Answer: 1 048 576.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Applying Pascal's identity with non-consecutive lower indices — it needs \(\binom{n}{r-1}+\binom{n}{r}\).</li>
    <li>Misreading which single entry a hockey-stick diagonal collapses to (\(\binom{n+1}{r+1}\)).</li>
    <li>Confusing the sum of a row (\(2^n\)) with the sum of squares of a row (\(\binom{2n}{n}\)).</li>
    <li>Forgetting that a Pascal entry both <em>is</em> a value and <em>counts</em> the paths to it.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why is each entry the sum of the two above?</h3><p><em>That is Pascal's identity: a selection either uses a fixed object or not, and those two counts add.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why does a row sum to \(2^n\)?</h3><p><em>Because it counts every subset of \(n\) objects, and each object is independently in or out.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: What is the hockey-stick pattern?</h3><p><em>Summing \(\binom{r}{r}+\binom{r+1}{r}+\cdots+\binom{n}{r}=\binom{n+1}{r+1}\) — a diagonal collapses to the entry below-and-left.</em></p></div>
</div>`)] },

  // ── 1.8 The Binomial Theorem ────────────────────────────────
  "1.8": { code: "1.8", title: "The Binomial Theorem", blocks: [html(String.raw`<div class="lecture-box">
  <h1>➗ The Binomial Theorem</h1>
  <p><strong>Overview.</strong> Expanding \((a+b)^n\) by hand is hopeless for large \(n\) — but the coefficients are exactly Pascal's triangle, so combinations do the work. The real power is the <strong>general term</strong>: it lets you pull out a single coefficient, a specific power, or the constant term without expanding anything.</p>

  <h2>📌 The Theorem</h2>
  <p style="text-align:center;">\( (a+b)^{n}=\displaystyle\sum_{k=0}^{n}\dbinom{n}{k}\,a^{\,n-k}\,b^{\,k} \)</p>
  <p>The expansion has \(n+1\) terms; the exponents on \(a\) fall from \(n\) to \(0\) while those on \(b\) rise from \(0\) to \(n\), and every term's exponents sum to \(n\).</p>

  <h2>📌 The General Term</h2>
  <p>The term with \(b^{k}\) (call it \(t_{k+1}\)) is</p>
  <p style="text-align:center;">\( t_{k+1}=\dbinom{n}{k}\,a^{\,n-k}\,b^{\,k} \)</p>
  <p>To find a <em>specific</em> term, set the exponent you want equal to its expression and solve for \(k\) — then evaluate that one term. No full expansion needed.</p>

  <h2>🔵 Examples</h2>

  <div class="example-box" style="${EX}">
    <h3>Example 1: A coefficient with powers and a negative inside</h3>
    <p>Find the coefficient of \(x^{5}\) in \(\left(2x^{2}-\dfrac{3}{x}\right)^{7}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> General term: \(\binom{7}{k}(2x^{2})^{7-k}\left(-\dfrac{3}{x}\right)^{k}=\binom{7}{k}2^{7-k}(-3)^{k}x^{2(7-k)-k}=\binom{7}{k}2^{7-k}(-3)^{k}x^{14-3k}\).</div>
      <div class="step"><strong>Step 2:</strong> Want \(x^{5}\Rightarrow 14-3k=5\Rightarrow k=3\).</div>
      <div class="step"><strong>Step 3:</strong> \(\binom{7}{3}\,2^{4}\,(-3)^{3}=35\cdot16\cdot(-27)=-15\,120\).</div>
      <em>Conclusion: the coefficient is \(-15\,120\). Every factor — the 2, the −3, and both exponents — must be carried through. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 2: Recover \(n\) from a coefficient ratio</h3>
    <p>In the expansion of \((1+x)^{n}\), the coefficients of \(x^{2}\) and \(x^{3}\) are in the ratio \(1:2\). Find \(n\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> The coefficients are \(\binom{n}{2}\) and \(\binom{n}{3}\), so \(\dfrac{\binom{n}{2}}{\binom{n}{3}}=\dfrac{3}{n-2}\).</div>
      <div class="step"><strong>Step 2:</strong> Set equal to \(\dfrac12\): \(\dfrac{3}{n-2}=\dfrac12\Rightarrow n-2=6\Rightarrow n=8\).</div>
      <div class="step"><strong>Check:</strong> \(\binom{8}{2}:\binom{8}{3}=28:56=1:2\). ✓</div>
      <em>Conclusion: \(n=8\). The ratio of consecutive binomial coefficients simplifies to a linear equation. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 3: A term with a negative and a coefficient inside</h3>
    <p>Find the term containing \(x^{3}\) in \((2x-1)^{5}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Term: \(\binom{5}{k}(2x)^{5-k}(-1)^{k}\). Power of \(x\) is \(5-k=3\Rightarrow k=2\).</div>
      <div class="step"><strong>Step 2:</strong> \(\binom{5}{2}(2x)^{3}(-1)^{2}=10\cdot8x^{3}\cdot1=80x^{3}\).</div>
      <em>Conclusion: the term is \(80x^{3}\). Keep the \(2\) and the \(-1\) inside the powers! ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 4: The constant term</h3>
    <p>Find the constant term in \(\left(x+\dfrac{1}{x}\right)^{6}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Term: \(\binom{6}{k}x^{6-k}\left(\tfrac1x\right)^{k}=\binom{6}{k}x^{6-2k}\).</div>
      <div class="step"><strong>Step 2:</strong> Constant \(\Rightarrow 6-2k=0\Rightarrow k=3\).</div>
      <div class="step"><strong>Step 3:</strong> \(\binom{6}{3}=20\).</div>
      <em>Conclusion: the constant term is 20. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 5: A harder constant term</h3>
    <p>Find the constant term in \(\left(2x^{2}-\dfrac{1}{x}\right)^{6}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Term: \(\binom{6}{k}(2x^{2})^{6-k}\left(-\tfrac1x\right)^{k}=\binom{6}{k}2^{6-k}(-1)^{k}x^{2(6-k)-k}\).</div>
      <div class="step"><strong>Step 2:</strong> Exponent \(12-3k=0\Rightarrow k=4\).</div>
      <div class="step"><strong>Step 3:</strong> \(\binom{6}{4}2^{2}(-1)^{4}=15\cdot4\cdot1=60\).</div>
      <em>Conclusion: the constant term is 60. Track the coefficient, the sign, <em>and</em> the exponent from each factor. ✓</em>
    </div>
  </div>

  <div class="example-box" style="${EX}">
    <h3>Example 6: The middle term</h3>
    <p>Find the middle term of \(\left(x^{2}-\dfrac{2}{x}\right)^{6}\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> There are \(6+1=7\) terms, so the middle one is the 4th — that is \(k=3\).</div>
      <div class="step"><strong>Step 2:</strong> \(\binom{6}{3}(x^{2})^{3}\left(-\dfrac{2}{x}\right)^{3}=20\cdot x^{6}\cdot\left(-\dfrac{8}{x^{3}}\right)=20\cdot(-8)\,x^{3}=-160x^{3}\).</div>
      <em>Conclusion: the middle term is \(-160x^{3}\). For an even power \(n\), the single middle term is at \(k=\tfrac{n}{2}\). ✓</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Find the coefficient of \(x^{7}\) in \(\left(x^{2}+\dfrac{1}{x}\right)^{8}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Exponent \(16-3k=7\Rightarrow k=3\): \(\binom{8}{3}=56\). <em>Answer: 56.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>The coefficient of \(x^{2}\) in \((1+x)^{n}\) is 45. Find \(n\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\binom{n}{2}=45\Rightarrow n(n-1)=90\Rightarrow n=10\). <em>Answer: \(n=10\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Find the term containing \(x^{4}\) in \((3x-2)^{6}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(6-k=4\Rightarrow k=2\): \(\binom{6}{2}(3)^{4}(-2)^{2}x^{4}=15\cdot81\cdot4\,x^{4}=4860x^{4}\). <em>Answer: \(4860x^{4}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Find the constant term in \(\left(2x-\dfrac{1}{x^{2}}\right)^{9}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Exponent \((9-k)-2k=9-3k=0\Rightarrow k=3\): \(\binom{9}{3}2^{6}(-1)^{3}=84\cdot64\cdot(-1)=-5376\). <em>Answer: \(-5376\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Find the coefficient of \(x^{3}\) in \((1+2x)^{5}\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\binom{5}{3}(2x)^{3}=10\cdot8x^{3}=80x^{3}\). <em>Answer: 80.</em></div></div></details></div>

  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul>
    <li>Forgetting to raise the inner coefficient (the "2" in \((2x)^{k}\)) to the power too.</li>
    <li>Dropping the sign from a \((-1)^{k}\) or \(\left(-\tfrac1x\right)^{k}\) factor.</li>
    <li>Miscomputing the exponent of \(x\) when a term has \(x^2\) or \(1/x\) inside.</li>
    <li>Assuming a constant term exists — sometimes no integer \(k\) makes the exponent 0.</li>
  </ul></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Where do the coefficients come from?</h3><p><em>They are \(\binom{n}{k}\) — exactly row \(n\) of Pascal's triangle.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I get one term without expanding?</h3><p><em>Write the general term, set its exponent to the value you want, solve for \(k\), and evaluate that single term.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q3: How do I find a constant term?</h3><p><em>Set the total exponent of \(x\) to 0 and solve for \(k\); if \(k\) is a valid integer, that term is the constant.</em></p></div>
</div>`)] },

  // ── 2.1 Introduction to Probability ─────────────────────────
  "2.1": { code: "2.1", title: "Introduction to Probability", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎲 Introduction to Probability</h1>
  <p><strong>Overview.</strong> Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). There are three ways to assign it: <strong>theoretical</strong> (by counting equally likely outcomes), <strong>experimental</strong> (by observing data), and <strong>subjective</strong> (by informed judgement). Getting the sample space right is the foundation for everything that follows.</p>
  <h2>📌 Sample Space &amp; Events</h2>
  <p>The <strong>sample space</strong> \(S\) is the set of all possible outcomes; an <strong>event</strong> \(A\) is a subset of \(S\). When outcomes are equally likely, \(P(A)=\dfrac{n(A)}{n(S)}\). Every probability satisfies \(0\le P(A)\le1\), and the probabilities of all outcomes sum to 1.</p>
  <h2>📌 Three Sources of Probability</h2>
  <p><strong>Theoretical</strong>: count favourable ÷ total (a fair die: \(P(4)=\tfrac16\)). <strong>Experimental</strong>: favourable trials ÷ total trials (108 heads in 200 flips → \(0.54\)). <strong>Subjective</strong>: a judgement when neither counting nor repetition applies ("30% chance of rain"). Experimental probability approaches theoretical as trials increase (the law of large numbers).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A structured event on two dice</h3><p>Two fair dice are rolled. Find \(P(\text{the sum is prime})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(n(S)=36\). Prime sums are 2, 3, 5, 7, 11.</div><div class="step"><strong>Step 2:</strong> Count each: 2→1, 3→2, 5→4, 7→6, 11→2, giving \(1+2+4+6+2=15\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{15}{36}=\tfrac{5}{12}\).</div><em>Conclusion: \(\tfrac{5}{12}\). The event "prime sum" cuts across the table, so count sum by sum. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Product parity via the complement</h3><p>Two fair dice are rolled. Find \(P(\text{the product is even})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> A product is odd only when <em>both</em> dice are odd: \(P(\text{odd})=\tfrac{3}{6}\cdot\tfrac{3}{6}=\tfrac14\).</div><div class="step"><strong>Step 2:</strong> \(P(\text{even})=1-\tfrac14=\tfrac34\).</div><em>Conclusion: \(\tfrac34\). "Even product" is easier as the complement of "both odd". ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Three dice, all different</h3><p>Three fair dice are rolled. Find \(P(\text{all three show different numbers})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(n(S)=6^{3}=216\).</div><div class="step"><strong>Step 2:</strong> All different (ordered): \(6\times5\times4=120\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{120}{216}=\tfrac{5}{9}\).</div><em>Conclusion: \(\tfrac59\). Counting the favourable outcomes uses the counting principle from §1.1. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Inclusion–exclusion on a range</h3><p>An integer is chosen at random from 1 to 100. Find \(P(\text{divisible by 3 or 5})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiples of 3: 33; of 5: 20; of 15 (both): 6.</div><div class="step"><strong>Step 2:</strong> Divisible by 3 or 5: \(33+20-6=47\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{47}{100}\).</div><em>Conclusion: \(0.47\). Subtract the overlap (multiples of 15) so it isn't counted twice. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Probability via counting</h3><p>A 3-digit number (100–999) is chosen at random. Find \(P(\text{it is a palindrome})\) — e.g. 121, 343.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Total 3-digit numbers: 900.</div><div class="step"><strong>Step 2:</strong> A palindrome has the form \(\overline{aba}\): \(a\in\{1,\dots,9\}\) (9 ways), \(b\in\{0,\dots,9\}\) (10 ways), and the last digit is forced \(=a\): \(9\times10=90\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{90}{900}=\tfrac{1}{10}\).</div><em>Conclusion: \(\tfrac{1}{10}\). Probability = (count of favourable) ÷ (count of total), both by the counting principle. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Two dice: find \(P(\text{the sum is a perfect square})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Squares 4 and 9: \(3+4=7\) outcomes → \(\tfrac{7}{36}\). <em>Answer: \(\tfrac{7}{36}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A card is drawn. Find \(P(\text{red or a face card})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{26}{52}+\tfrac{12}{52}-\tfrac{6}{52}=\tfrac{32}{52}=\tfrac{8}{13}\) (6 red face cards overlap). <em>Answer: \(\tfrac{8}{13}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Three fair coins are tossed. Find \(P(\text{more heads than tails})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">More heads = 2 or 3 heads: HHH, HHT, HTH, THH = 4 of 8 → \(\tfrac12\). <em>Answer: \(\tfrac12\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Two dice: find \(P(\text{the larger of the two values is exactly 4})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Max \(\le4\): \(4^2=16\); max \(\le3\): \(3^2=9\); max \(=4\): \(16-9=7\) → \(\tfrac{7}{36}\). <em>Answer: \(\tfrac{7}{36}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A letter is chosen at random from the word PROBABILITY. Find \(P(\text{it is a vowel})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">PROBABILITY has 11 letters; vowels O, A, I, I → 4. \(P=\tfrac{4}{11}\). <em>Answer: \(\tfrac{4}{11}\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Assuming outcomes are equally likely when they aren't (e.g. sums 2–12 are <em>not</em> equally likely).</li><li>Getting \(n(S)\) wrong (36 for two dice, 216 for three).</li><li>Forgetting to subtract the overlap in an "or" event.</li><li>Counting an "at least/exactly" event directly when the complement is simpler.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What's the sample space?</h3><p><em>The set of all possible outcomes; probabilities are counted against it.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Theoretical vs experimental?</h3><p><em>Theoretical is by counting equally likely outcomes; experimental is from observed data. They converge over many trials.</em></p></div>
</div>`)] },

  // ── 2.2 Counting & Probability ──────────────────────────────
  "2.2": { code: "2.2", title: "Counting & Probability", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🃏 Counting &amp; Probability</h1>
  <p><strong>Overview.</strong> When a sample space is too large to list, Unit 1's counting tools compute the probability directly: \(P(A)=\dfrac{\text{favourable}}{\text{total}}\), where both are counted with permutations or combinations. The one rule that must never be broken: count the numerator and denominator <strong>the same way</strong> — both ordered, or both unordered.</p>
  <h2>📌 The Principle</h2>
  <p>For selections where order is irrelevant (hands, committees, lottery draws), use combinations top and bottom. For ordered outcomes (arrangements, sequences), use permutations top and bottom. Mixing the two corrupts the ratio.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A split committee</h3><p>A committee of 4 is chosen from 6 men and 5 women. Find \(P(\text{exactly 2 men and 2 women})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Favourable: choose 2 of 6 men and 2 of 5 women: \(\binom{6}{2}\binom{5}{2}=15\cdot10=150\).</div><div class="step"><strong>Step 2:</strong> Total: \(\binom{11}{4}=330\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{150}{330}=\tfrac{5}{11}\approx0.455\).</div><em>Conclusion: \(\tfrac{5}{11}\). Numerator and denominator are both unordered — combinations top and bottom. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: A poker probability (uses §1.6)</h3><p>Find \(P(\text{a 5-card hand is exactly one pair})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Favourable (from §1.6): \(\binom{13}{1}\binom{4}{2}\binom{12}{3}4^{3}=1\,098\,240\).</div><div class="step"><strong>Step 2:</strong> Total: \(\binom{52}{5}=2\,598\,960\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{1\,098\,240}{2\,598\,960}\approx0.423\).</div><em>Conclusion: ≈ 0.423 — a single pair is the most common "made" hand. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: All different colours</h3><p>A box has 4 red, 4 blue, and 4 green balls. Three are drawn without replacement. Find \(P(\text{one of each colour})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Favourable: \(\binom{4}{1}\binom{4}{1}\binom{4}{1}=64\).</div><div class="step"><strong>Step 2:</strong> Total: \(\binom{12}{3}=220\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{64}{220}=\tfrac{16}{55}\approx0.291\).</div><em>Conclusion: \(\tfrac{16}{55}\). Multiply the per-colour choices, divide by all unordered draws. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A flush of any suit</h3><p>Find \(P(\text{a 5-card hand is a flush — all five the same suit})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Favourable: choose the suit (4 ways) then 5 of its 13 cards: \(4\binom{13}{5}=4\cdot1287=5148\).</div><div class="step"><strong>Step 2:</strong> \(\tfrac{5148}{2\,598\,960}\approx0.00198\).</div><em>Conclusion: about 0.2%. Don't forget the factor of 4 for the choice of suit. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A full house</h3><p>Find \(P(\text{a 5-card hand is a full house — three of one rank and two of another})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Choose the triple's rank (13) and 3 of its suits \(\binom{4}{3}=4\); choose a <em>different</em> rank for the pair (12) and 2 suits \(\binom{4}{2}=6\).</div><div class="step"><strong>Step 2:</strong> Favourable \(=13\cdot4\cdot12\cdot6=3744\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac{3744}{2\,598\,960}\approx0.00144\).</div><em>Conclusion: ≈ 0.0014. The triple and pair ranks must differ, and order (which rank is the triple) matters — so it's \(13\times12\), not \(\binom{13}{2}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Find \(P(\text{a 5-card hand is "two pair"})\). (There are \(123\,552\) such hands — see §1.6.)</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{123\,552}{2\,598\,960}\approx0.0475\). <em>Answer: ≈ 0.048.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>From 10 people (including one specific couple), a committee of 3 is chosen. Find \(P(\text{both members of the couple are chosen})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Fix the couple, choose 1 more from 8: \(\binom{8}{1}/\binom{10}{3}=8/120=\tfrac{1}{15}\). <em>Answer: \(\tfrac{1}{15}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Find \(P(\text{a 5-card hand contains at least one ace})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Complement: \(1-\dfrac{\binom{48}{5}}{\binom{52}{5}}=1-\tfrac{1\,712\,304}{2\,598\,960}\approx0.341\). <em>Answer: ≈ 0.341.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Seven people are seated at random in a row. Find \(P(\text{two specific people sit next to each other})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Favourable \(6!\cdot2!\), total \(7!\): \(\dfrac{6!\cdot2!}{7!}=\tfrac{2}{7}\). <em>Answer: \(\tfrac{2}{7}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A box has 6 red, 4 green, and 2 blue balls. Three are drawn without replacement. Find \(P(\text{one of each colour})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{\binom{6}{1}\binom{4}{1}\binom{2}{1}}{\binom{12}{3}}=\dfrac{48}{220}=\tfrac{12}{55}\approx0.218\). <em>Answer: \(\tfrac{12}{55}\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Mixing ordered (permutation) and unordered (combination) counts between numerator and denominator.</li><li>Dropping a multiplicity factor (e.g. the 4 suits for a flush, or \(4^3\) suits for the kickers of a pair).</li><li>Using the binomial model when the draw is without replacement (use combinations / hypergeometric).</li><li>Forgetting the complement for an "at least one" probability.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Ordered or unordered?</h3><p><em>Match the situation: hands/committees → combinations; arrangements/sequences → permutations. Use the same choice top and bottom.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why can I use combinations for both?</h3><p><em>Because the ordering cancels in the ratio — as long as you're consistent.</em></p></div>
</div>`)] },

  // ── 2.3 Odds & the Complement ───────────────────────────────
  "2.3": { code: "2.3", title: "Odds & the Complement", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⚖️ Odds &amp; the Complement</h1>
  <p><strong>Overview.</strong> Odds and probability express the same information differently, and converting between them is a common exam skill. The <strong>complement</strong> — the event "not \(A\)" — turns awkward "at least one" problems into a single easy subtraction.</p>
  <h2>📌 Odds</h2>
  <p><strong>Odds in favour</strong> of \(A\) are \(a\!:\!b\), the ratio of favourable to unfavourable outcomes, and \(P(A)=\dfrac{a}{a+b}\). <strong>Odds against</strong> are \(b\!:\!a\). Conversely, if \(P(A)=\dfrac{p}{q}\) (lowest terms), the odds in favour are \(p:(q-p)\).</p>
  <h2>📌 The Complement</h2>
  <p>\(P(A')=1-P(A)\). For "at least one", the complement is "none", which is usually a single product: \(P(\text{at least one})=1-P(\text{none})\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Odds feeding into an independent event</h3><p>The odds <strong>against</strong> a horse winning are 7:3. Independently, the odds against rain are 3:2. Find \(P(\text{the horse wins and it rains})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Odds against 7:3 ⇒ \(P(\text{win})=\tfrac{3}{10}\); odds against 3:2 ⇒ \(P(\text{rain})=\tfrac{2}{5}\).</div><div class="step"><strong>Step 2:</strong> Independent ⇒ multiply: \(\tfrac{3}{10}\cdot\tfrac{2}{5}=\tfrac{6}{50}=0.12\).</div><em>Conclusion: 0.12. Convert odds to probability <em>first</em>, then combine. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: "At least one" over several trials</h3><p>A fair die is rolled 4 times. Find \(P(\text{at least one 6})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Complement "no 6 in 4 rolls": \(\left(\tfrac56\right)^{4}=\tfrac{625}{1296}\).</div><div class="step"><strong>Step 2:</strong> \(1-\tfrac{625}{1296}=\tfrac{671}{1296}\approx0.518\).</div><em>Conclusion: ≈ 0.518. Just over an even chance — many people guess far higher. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Complement inside a selection</h3><p>From 10 people (including Alex and Bo), a committee of 4 is chosen at random. Find \(P(\text{at least one of Alex, Bo is chosen})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Complement "neither chosen": \(\dfrac{\binom{8}{4}}{\binom{10}{4}}=\dfrac{70}{210}=\tfrac13\).</div><div class="step"><strong>Step 2:</strong> \(1-\tfrac13=\tfrac23\).</div><em>Conclusion: \(\tfrac23\). The complement of "at least one of A, B" is "neither" — one clean count. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Odds from a counted probability</h3><p>Two dice are rolled. State the <strong>odds in favour</strong> of a sum of 7 or 11.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Favourable: sum 7 (6 ways) + sum 11 (2 ways) = 8 of 36; \(P=\tfrac{8}{36}=\tfrac{2}{9}\).</div><div class="step"><strong>Step 2:</strong> Odds in favour = favourable : unfavourable = \(2:(9-2)=2:7\).</div><em>Conclusion: 2:7 in favour. Compute the probability, then split into the odds ratio. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A birthday-style complement</h3><p>Four people are asked their birth month. Assuming months are equally likely, find \(P(\text{at least two share a month})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Complement "all four different months": \(\dfrac{12\cdot11\cdot10\cdot9}{12^{4}}=\dfrac{11\,880}{20\,736}\approx0.573\).</div><div class="step"><strong>Step 2:</strong> \(1-0.573\approx0.427\).</div><em>Conclusion: ≈ 0.427. "At least one coincidence" is the complement of "all distinct" — the engine behind the birthday paradox. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>The odds against an event are 5:3. Find \(P(\text{the event occurs})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Against 5:3 ⇒ in favour 3:5 ⇒ \(P=\tfrac{3}{8}\). <em>Answer: \(\tfrac38\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A fair coin is tossed 5 times. Find \(P(\text{at least one head})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1-\left(\tfrac12\right)^{5}=1-\tfrac{1}{32}=\tfrac{31}{32}\). <em>Answer: \(\tfrac{31}{32}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Three cards are drawn from a deck (no replacement). Find \(P(\text{at least one heart})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1-\dfrac{\binom{39}{3}}{\binom{52}{3}}=1-\tfrac{9139}{22\,100}=\tfrac{12\,961}{22\,100}\approx0.587\). <em>Answer: ≈ 0.587.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>If \(P(A)=0.3\), state the odds against \(A\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(A)=\tfrac{3}{10}\) → favourable:unfavourable \(=3:7\); odds against \(=7:3\). <em>Answer: 7:3.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A fair die is rolled 3 times. Find \(P(\text{at least one even number})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Complement "all odd": \(\left(\tfrac36\right)^{3}=\tfrac18\); so \(1-\tfrac18=\tfrac78\). <em>Answer: \(\tfrac78\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Reading odds \(a\!:\!b\) as the probability \(\tfrac{a}{b}\) (it is \(\tfrac{a}{a+b}\)).</li><li>Combining odds directly instead of converting to probability first.</li><li>Adding per-trial probabilities for "at least one" instead of using \(1-P(\text{none})\).</li><li>Taking the complement of "at least one of A, B" as "neither A alone" rather than "neither A nor B".</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: How do odds relate to probability?</h3><p><em>Odds in favour \(a\!:\!b\) mean \(P=\tfrac{a}{a+b}\).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When is the complement best?</h3><p><em>For "at least one" — compute "none" and subtract from 1.</em></p></div>
</div>`)] },

  // ── 2.4 Mutually Exclusive Events & the Additive Rule ───────
  "2.4": { code: "2.4", title: "Mutually Exclusive Events & the Additive Rule", blocks: [html(String.raw`<div class="lecture-box">
  <h1>➕ Mutually Exclusive Events &amp; the Additive Rule</h1>
  <p><strong>Overview.</strong> "Or" questions use the additive rule. When two events can't happen together (<strong>mutually exclusive</strong>) you simply add; when they can overlap, you must subtract the overlap once so it isn't double-counted.</p>
  <h2>📌 The General Additive Rule</h2>
  <p style="text-align:center;">\( P(A\cup B)=P(A)+P(B)-P(A\cap B) \)</p>
  <p>Events are <strong>mutually exclusive</strong> when \(P(A\cap B)=0\), and then the rule collapses to \(P(A)+P(B)\). A Venn diagram makes the overlap visible.</p>
  <h2>📌 Three Sets &amp; "Exactly One"</h2>
  <p>For three events, \(P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C)\) — subtract the pairwise overlaps, then add back the triple. The probability of <strong>exactly one</strong> of \(A,B\) is \(P(A)+P(B)-2P(A\cap B)\) (the shared part is removed <em>twice</em>).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Three overlapping sets</h3><p>In a class of 30: 18 play soccer, 15 basketball, 12 tennis; 9 play soccer &amp; basketball, 6 soccer &amp; tennis, 5 basketball &amp; tennis, and 3 play all three. How many play <strong>none</strong>?</p><div class="solution"><div class="step"><strong>Step 1:</strong> At least one \(=18+15+12-9-6-5+3=28\).</div><div class="step"><strong>Step 2:</strong> None \(=30-28=2\).</div><em>Conclusion: 2 students. Subtract all three pairwise overlaps, then add back the triple. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Work backwards to the overlap, then "exactly one"</h3><p>Given \(P(A)=0.5,\ P(B)=0.4,\ P(A\cup B)=0.7\). Find \(P(A\cap B)\) and \(P(\text{exactly one of }A,B)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(A\cap B)=P(A)+P(B)-P(A\cup B)=0.5+0.4-0.7=0.2\).</div><div class="step"><strong>Step 2:</strong> Exactly one \(=P(A\cup B)-P(A\cap B)=0.7-0.2=0.5\).</div><em>Conclusion: overlap 0.2, exactly one 0.5. The additive rule runs in reverse to recover the overlap. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Three card categories</h3><p>Draw one card. Find \(P(\text{heart or face card or ace})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Hearts 13, face 12, aces 4.</div><div class="step"><strong>Step 2:</strong> Overlaps: heart &amp; face = 3, heart &amp; ace = 1, face &amp; ace = 0 (an ace is not a face card); all three = 0.</div><div class="step"><strong>Step 3:</strong> \(13+12+4-3-1-0+0=25\Rightarrow\tfrac{25}{52}\).</div><em>Conclusion: \(\tfrac{25}{52}\). Get the pairwise overlaps exactly right — aces and face cards don't intersect. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Divisibility on two dice</h3><p>Two dice are rolled. Find \(P(\text{the sum is a multiple of 3 or a multiple of 4})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Multiple of 3 (sums 3,6,9,12): \(2+5+4+1=12\). Multiple of 4 (sums 4,8,12): \(3+5+1=9\).</div><div class="step"><strong>Step 2:</strong> Both (multiple of 12 — sum 12): 1 outcome.</div><div class="step"><strong>Step 3:</strong> \(\tfrac{12+9-1}{36}=\tfrac{20}{36}=\tfrac{5}{9}\).</div><em>Conclusion: \(\tfrac59\). "Multiple of 3 <em>and</em> 4" means multiple of 12 — the overlap. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Three-set inclusion–exclusion with probabilities</h3><p>Given \(P(A)=0.4,\ P(B)=0.5,\ P(C)=0.3\); \(P(A\cap B)=0.2,\ P(A\cap C)=0.1,\ P(B\cap C)=0.15\); and \(P(A\cap B\cap C)=0.05\). Find \(P(A\cup B\cup C)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Add singles: \(0.4+0.5+0.3=1.2\).</div><div class="step"><strong>Step 2:</strong> Subtract pairwise: \(-0.2-0.1-0.15=-0.45\); add back the triple: \(+0.05\).</div><div class="step"><strong>Step 3:</strong> \(1.2-0.45+0.05=0.8\).</div><em>Conclusion: 0.8. The three-set rule works directly with probabilities, not just counts. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\(P(A)=0.7,\ P(B)=0.6,\ P(A\cap B)=0.5\). Find \(P(A\cup B)\) and \(P(\text{exactly one})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(A\cup B)=0.8\); exactly one \(=0.7+0.6-2(0.5)=0.3\). <em>Answer: 0.8 and 0.3.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>In a group, \(P(\text{coffee})=0.55,\ P(\text{tea})=0.40,\ P(\text{neither})=0.25\). Find \(P(\text{both})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(\text{either})=1-0.25=0.75=0.55+0.40-\text{both}\Rightarrow\text{both}=0.20\). <em>Answer: 0.20.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>40 students: 22 take French, 25 take Spanish, 8 take neither. How many take both?</p><details><summary>View answer</summary><div class="solution"><div class="step">At least one \(=40-8=32=22+25-\text{both}\Rightarrow\text{both}=15\). <em>Answer: 15.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A card is drawn. Find \(P(\text{spade or ace or king})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(13+4+4-1-1-0+0=19\Rightarrow\tfrac{19}{52}\) (spade&amp;ace=1, spade&amp;king=1, ace&amp;king=0). <em>Answer: \(\tfrac{19}{52}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A card is drawn. Find \(P(\text{a heart or a red face card})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Hearts 13; red face cards 6; overlap (face cards that are hearts) 3. \(13+6-3=16\Rightarrow\tfrac{16}{52}=\tfrac{4}{13}\). <em>Answer: \(\tfrac{4}{13}\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Forgetting to add back the triple overlap in a three-set problem.</li><li>Mis-identifying pairwise overlaps (e.g. thinking an ace is a face card).</li><li>Computing "exactly one" as \(P(A\cup B)\) instead of \(P(A\cup B)-P(A\cap B)\).</li><li>Assuming events are mutually exclusive without checking \(P(A\cap B)=0\).</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When do I just add?</h3><p><em>Only when the events are mutually exclusive (\(P(A\cap B)=0\)).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why subtract the intersection?</h3><p><em>Because outcomes in both \(A\) and \(B\) get counted twice otherwise.</em></p></div>
</div>`)] },

  // ── 2.5 Independent & Dependent Events ──────────────────────
  "2.5": { code: "2.5", title: "Independent & Dependent Events", blocks: [html(String.raw`<div class="lecture-box">
  <h1>✖️ Independent &amp; Dependent Events</h1>
  <p><strong>Overview.</strong> "And" questions use the multiplicative rule. When one event doesn't affect another (<strong>independent</strong>), multiply the plain probabilities. When it does (<strong>dependent</strong> — like drawing without replacement), the second probability is conditional. A crucial distinction: independent is <em>not</em> the same as mutually exclusive.</p>
  <h2>📌 The Rules</h2>
  <p><strong>Independent:</strong> \(P(A\cap B)=P(A)\,P(B)\). <strong>Dependent:</strong> \(P(A\cap B)=P(A)\,P(B\mid A)\). Sampling <em>with</em> replacement keeps events independent; <em>without</em> replacement makes them dependent.</p>
  <h2>📌 Independent ≠ Mutually Exclusive</h2>
  <p>Mutually exclusive events can't both happen (\(P(A\cap B)=0\)); independent events often <em>do</em> both happen — their occurring together is exactly \(P(A)P(B)\). Two events with nonzero probabilities can't be both.</p>
  <h2>📌 Series vs Parallel; Testing Independence</h2>
  <p>A <strong>series</strong> system works only if <em>all</em> independent parts work: \(P=\prod p_i\). A <strong>parallel</strong> (redundant) system fails only if <em>all</em> parts fail: \(P(\text{works})=1-\prod(1-p_i)\). To <strong>test independence</strong>, check whether \(P(A\cap B)=P(A)P(B)\) — if not, the events are dependent.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A series system</h3><p>A device has 3 independent components, each working with probability 0.9, and needs <strong>all three</strong> to function. Find \(P(\text{the device works})\) and \(P(\text{at least one component fails})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Works \(=0.9^{3}=0.729\).</div><div class="step"><strong>Step 2:</strong> At least one fails \(=1-0.729=0.271\).</div><em>Conclusion: 0.729 and 0.271. In series, one weak link drops reliability fast. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Parallel redundancy</h3><p>A system has 3 independent backup units, each failing with probability 0.2, and works if <strong>at least one</strong> works. Find \(P(\text{the system works})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> All three fail: \(0.2^{3}=0.008\).</div><div class="step"><strong>Step 2:</strong> Works \(=1-0.008=0.992\).</div><em>Conclusion: 0.992. Redundancy makes an unreliable part into a reliable system. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Is it independent?</h3><p>For events with \(P(A)=0.5,\ P(B)=0.4,\ P(A\cap B)=0.2\), decide whether \(A\) and \(B\) are independent.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(A)P(B)=0.5\times0.4=0.20\).</div><div class="step"><strong>Step 2:</strong> This equals \(P(A\cap B)=0.20\), so <strong>yes, independent</strong>. (Had the overlap been 0.25, they'd be dependent.)</div><em>Conclusion: independent. Independence is a numerical condition to test, not an assumption. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Dependent multi-draw</h3><p>Three cards are drawn without replacement. Find \(P(\text{all the same suit})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The first card fixes a suit (probability 1). The 2nd must match: \(\tfrac{12}{51}\); the 3rd must match: \(\tfrac{11}{50}\).</div><div class="step"><strong>Step 2:</strong> \(\tfrac{12}{51}\cdot\tfrac{11}{50}=\tfrac{132}{2550}=\tfrac{22}{425}\approx0.052\).</div><em>Conclusion: ≈ 0.052. Each draw changes the pool, so the probabilities are conditional. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: "At least one" with dependence</h3><p>A box has 5 defective and 15 good bulbs. Three are drawn without replacement. Find \(P(\text{at least one defective})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Complement "none defective": \(\tfrac{15}{20}\cdot\tfrac{14}{19}\cdot\tfrac{13}{18}=\tfrac{2730}{6840}\approx0.399\).</div><div class="step"><strong>Step 2:</strong> \(1-0.399=0.601\).</div><em>Conclusion: ≈ 0.601. Combine the complement with dependent multiplication. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A machine has 4 independent parts, each reliable with probability 0.95, all required. Find \(P(\text{it works})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(0.95^{4}\approx0.8145\). <em>Answer: ≈ 0.815.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\(P(A)=0.3,\ P(B)=0.5\), and \(A,B\) are independent. Find \(P(A\cup B)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(A)+P(B)-P(A)P(B)=0.3+0.5-0.15=0.65\). <em>Answer: 0.65.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Three cards are drawn without replacement. Find \(P(\text{all hearts})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{13}{52}\cdot\tfrac{12}{51}\cdot\tfrac{11}{50}=\tfrac{11}{850}\approx0.0129\). <em>Answer: ≈ 0.013.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Two independent alarms each detect a fire with probability 0.8. Find \(P(\text{at least one detects the fire})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1-(0.2)(0.2)=1-0.04=0.96\). <em>Answer: 0.96.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Two dice are rolled. Find \(P(\text{both show a value greater than 4})\), and confirm the events are independent.</p><details><summary>View answer</summary><div class="solution"><div class="step">Each die: \(P(>4)=\tfrac26=\tfrac13\); the dice are physically independent, so \(P=\tfrac13\cdot\tfrac13=\tfrac19\). <em>Answer: \(\tfrac19\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Treating "without replacement" as independent (later probabilities change).</li><li>Multiplying \(1-p\) for a series system (that's the parallel-failure formula).</li><li>Assuming independence instead of testing \(P(A\cap B)=P(A)P(B)\).</li><li>Confusing independent with mutually exclusive.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When do events multiply plainly?</h3><p><em>When independent — with replacement, or physically unconnected trials.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Can independent events be mutually exclusive?</h3><p><em>Not if both have nonzero probability — independent events co-occur with probability \(P(A)P(B)\neq0\).</em></p></div>
</div>`)] },

  // ── 2.6 Conditional Probability ─────────────────────────────
  "2.6": { code: "2.6", title: "Conditional Probability", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔀 Conditional Probability</h1>
  <p><strong>Overview.</strong> A <strong>conditional probability</strong> \(P(A\mid B)\) is the chance of \(A\) <em>given that</em> \(B\) has occurred — it shrinks the sample space to just the \(B\) outcomes. It underlies medical testing, spam filters, and risk assessment, and a key insight is that \(P(A\mid B)\) and \(P(B\mid A)\) are usually different.</p>
  <h2>📌 The Formula</h2>
  <p style="text-align:center;">\( P(A\mid B)=\dfrac{P(A\cap B)}{P(B)} \)</p>
  <p>Rearranged, this is the <strong>general product rule</strong>: \(P(A\cap B)=P(B)\,P(A\mid B)=P(A)\,P(B\mid A)\).</p>
  <h2>📌 Reading a Two-Way Table</h2>
  <p>A two-way frequency table makes conditionals concrete: restrict to the row or column of the given event, then read the proportion.</p>
  <h2>📌 Bayes' Rule</h2>
  <p>To reverse a conditional, expand the denominator with the <strong>law of total probability</strong>:</p>
  <p style="text-align:center;">\( P(A\mid B)=\dfrac{P(B\mid A)\,P(A)}{P(B\mid A)P(A)+P(B\mid A')P(A')} \)</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Two-way table — both conditionals</h3><p>Of 100 students: 45 studied and passed, 5 studied and failed, 15 didn't study but passed, 35 didn't study and failed. Find \(P(\text{pass}\mid\text{studied})\) and \(P(\text{studied}\mid\text{pass})\).</p><div class="solution"><div class="step"><strong>Studied:</strong> 50 total; 45 passed → \(P(\text{pass}\mid\text{studied})=\tfrac{45}{50}=0.90\).</div><div class="step"><strong>Passed:</strong> \(45+15=60\); 45 studied → \(P(\text{studied}\mid\text{pass})=\tfrac{45}{60}=0.75\).</div><em>Conclusion: 0.90 vs 0.75 — the two conditionals are genuinely different quantities. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: The medical-test base-rate (full Bayes)</h3><p>A disease affects 1% of people. The test detects it in 99% of sick people (sensitivity) but also flags 5% of healthy people (false positive). If a random person tests positive, find \(P(\text{disease}\mid+)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Numerator: \(P(+\mid D)P(D)=0.99\times0.01=0.0099\).</div><div class="step"><strong>Step 2:</strong> Denominator: \(0.0099+P(+\mid D')P(D')=0.0099+0.05\times0.99=0.0099+0.0495=0.0594\).</div><div class="step"><strong>Step 3:</strong> \(P(D\mid+)=\dfrac{0.0099}{0.0594}\approx0.167\).</div><em>Conclusion: only ≈ 16.7% — a positive test on a rare disease is usually a false alarm, because the 99% healthy generate many false positives. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Which supplier? (Bayes)</h3><p>Supplier X provides 70% of parts (3% defective); supplier Y provides 30% (8% defective). A part is defective — find \(P(\text{it came from X})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(X\cap\text{def})=0.70\times0.03=0.021\); \(P(Y\cap\text{def})=0.30\times0.08=0.024\).</div><div class="step"><strong>Step 2:</strong> \(P(\text{def})=0.021+0.024=0.045\).</div><div class="step"><strong>Step 3:</strong> \(P(X\mid\text{def})=\tfrac{0.021}{0.045}\approx0.467\).</div><em>Conclusion: ≈ 0.467. Even though X makes most parts, its low defect rate means under half of defectives are its. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Conditioning inside a sample space</h3><p>Two dice are rolled. Given that the sum is 7, find \(P(\text{one of the dice shows a 3})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Restrict to sum 7: \(\{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}\) — 6 equally likely outcomes.</div><div class="step"><strong>Step 2:</strong> Those containing a 3: \((3,4),(4,3)\) → 2.</div><div class="step"><strong>Step 3:</strong> \(\tfrac{2}{6}=\tfrac13\).</div><em>Conclusion: \(\tfrac13\). Conditioning shrinks the sample space to just the "sum 7" outcomes. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A chain of conditionals</h3><p>Three cards are drawn without replacement. Find \(P(\text{3rd is an ace}\mid\text{first two are aces})\), and then \(P(\text{all three are aces})\).</p><div class="solution"><div class="step"><strong>Conditional:</strong> two aces gone → 2 aces left of 50 cards: \(\tfrac{2}{50}=\tfrac{1}{25}\).</div><div class="step"><strong>All three (product rule):</strong> \(\tfrac{4}{52}\cdot\tfrac{3}{51}\cdot\tfrac{2}{50}=\tfrac{1}{5525}\).</div><em>Conclusion: \(\tfrac{1}{25}\) and \(\tfrac{1}{5525}\). The product rule chains conditionals across all three draws. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Using the Example 1 table, find \(P(\text{fail}\mid\text{didn't study})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{35}{50}=0.70\). <em>Answer: 0.70.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Two dice: find \(P(\text{sum}=8\mid\text{at least one die shows a 5})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">"At least one 5" has 11 outcomes; sum 8 among them: \((3,5),(5,3)\) → 2. \(P=\tfrac{2}{11}\). <em>Answer: \(\tfrac{2}{11}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>A spam filter: 40% of email is spam. It flags 95% of spam and 8% of legitimate mail. If an email is flagged, find \(P(\text{it is spam})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{0.4\cdot0.95}{0.4\cdot0.95+0.6\cdot0.08}=\dfrac{0.38}{0.428}\approx0.888\). <em>Answer: ≈ 0.888.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Two dice: find \(P(\text{sum}\ge10\mid\text{the first die is a 6})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">First die 6 → sum ≥ 10 needs second ∈ {4,5,6}: \(\tfrac{3}{6}=\tfrac12\). <em>Answer: \(\tfrac12\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A drawer has 3 fair coins and 1 two-headed coin. You pick one at random and it lands heads. Find \(P(\text{it is the two-headed coin})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Bayes: \(\dfrac{P(2\text{H})\cdot1}{P(2\text{H})\cdot1+P(\text{fair})\cdot\tfrac12}=\dfrac{\tfrac14}{\tfrac14+\tfrac34\cdot\tfrac12}=\dfrac{0.25}{0.625}=0.4\). <em>Answer: 0.4.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Confusing \(P(A\mid B)\) with \(P(B\mid A)\) — the medical test's sensitivity is <em>not</em> the chance you're sick.</li><li>Forgetting the false-positive branch in the Bayes denominator (law of total probability).</li><li>Ignoring the base rate, which dominates when the condition is rare.</li><li>Dividing by the wrong total — condition on the <em>given</em> event.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does conditioning do?</h3><p><em>It restricts the sample space to the given event and re-scales the probability.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Is \(P(A\mid B)=P(B\mid A)\)?</h3><p><em>Generally no — Example 2 gives 0.90 vs 0.75.</em></p></div>
</div>`)] },

  // ── 2.7 Tree Diagrams & Probability Tables ──────────────────
  "2.7": { code: "2.7", title: "Tree Diagrams & Probability Tables", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🌳 Tree Diagrams &amp; Probability Tables</h1>
  <p><strong>Overview.</strong> Multi-stage experiments become manageable with a tree: <strong>multiply</strong> probabilities along a branch to get a path's probability, and <strong>add</strong> the paths that lead to the outcome you want. Trees also compute conditional probabilities and handle "without replacement" naturally.</p>
  <h2>📌 The Two Operations</h2>
  <p>Along a path (this stage AND then that stage): multiply. Across separate paths to the same outcome (this path OR that path): add. At any branch point, the outgoing probabilities sum to 1.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A three-stage tree</h3><p>A bag has 3 red and 2 blue balls. Three are drawn without replacement. Find \(P(\text{exactly 2 red})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> "Exactly 2 red" happens on paths RRB, RBR, BRR.</div><div class="step"><strong>Step 2:</strong> RRB \(=\tfrac35\cdot\tfrac24\cdot\tfrac23=\tfrac15\); RBR \(=\tfrac35\cdot\tfrac24\cdot\tfrac23=\tfrac15\); BRR \(=\tfrac25\cdot\tfrac34\cdot\tfrac23=\tfrac15\).</div><div class="step"><strong>Step 3:</strong> \(\tfrac15+\tfrac15+\tfrac15=\tfrac35\).</div><em>Conclusion: \(\tfrac35\). All orderings of the same multiset give equal path products — a preview of the hypergeometric formula. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Total probability (two production lines)</h3><p>Line A makes 60% of parts (2% defective); line B makes 40% (5% defective). Find \(P(\text{a random part is defective})\).</p><div class="solution"><div class="step"><strong>Via A:</strong> \(0.60\times0.02=0.012\).</div><div class="step"><strong>Via B:</strong> \(0.40\times0.05=0.020\).</div><div class="step"><strong>Add the paths:</strong> \(0.012+0.020=0.032\).</div><em>Conclusion: 0.032 — the law of total probability, read off a tree. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Reverse the tree (Bayes)</h3><p>Given the part from Example 2 is defective, find \(P(\text{it came from line B})\).</p><div class="solution"><div class="step">\(P(B\mid\text{def})=\dfrac{P(B\cap\text{def})}{P(\text{def})}=\dfrac{0.020}{0.032}=0.625\).</div><em>Conclusion: 0.625. The smaller line produces most of the defectives because its defect rate is higher. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A surprising symmetry</h3><p>A bag has 2 gold and 3 silver coins. Two are drawn without replacement. Find \(P(\text{the 2nd coin is gold})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Sum the two paths ending in gold: \(P(GG)+P(SG)=\tfrac25\cdot\tfrac14+\tfrac35\cdot\tfrac24=\tfrac{2}{20}+\tfrac{6}{20}=\tfrac{8}{20}=\tfrac25\).</div><em>Conclusion: \(\tfrac25\) — exactly \(P(\text{1st is gold})\)! Without peeking, position doesn't matter: every coin is equally likely to be gold. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: With vs without replacement (curriculum comparison)</h3><p>A card is drawn 3 times <strong>with</strong> replacement. Find \(P(\text{exactly 1 face card})\). (There are 12 face cards, so \(p=\tfrac{3}{13}\).)</p><div class="solution"><div class="step"><strong>Step 1:</strong> With replacement, each draw is independent with \(p=\tfrac{3}{13}\) — a binomial.</div><div class="step"><strong>Step 2:</strong> \(\binom{3}{1}\left(\tfrac{3}{13}\right)^{1}\left(\tfrac{10}{13}\right)^{2}=3\cdot\tfrac{3\cdot100}{2197}=\tfrac{900}{2197}\approx0.410\).</div><em>Conclusion: ≈ 0.410. With replacement keeps \(p\) constant (binomial, §3.4); <em>without</em> replacement it would change each draw (hypergeometric, §3.6). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A bag has 4 red and 1 blue. Two are drawn without replacement. Find \(P(\text{both red})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{4}{5}\cdot\tfrac{3}{4}=\tfrac{12}{20}=\tfrac35\). <em>Answer: \(\tfrac35\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>In Example 2's factory, find \(P(\text{a defective part came from line A})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{0.012}{0.032}=0.375\). <em>Answer: 0.375.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>70% of students study; studiers pass 90% of the time, non-studiers 40%. Find \(P(\text{pass})\), then \(P(\text{studied}\mid\text{pass})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(\text{pass})=0.7(0.9)+0.3(0.4)=0.75\); \(P(\text{studied}\mid\text{pass})=\tfrac{0.63}{0.75}=0.84\). <em>Answer: 0.75, then 0.84.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Two cards are drawn without replacement. Using a tree, find \(P(\text{the 2nd card is an ace})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{4}{52}\cdot\tfrac{3}{51}+\tfrac{48}{52}\cdot\tfrac{4}{51}=\tfrac{12+192}{2652}=\tfrac{204}{2652}=\tfrac{1}{13}\) — the same as \(P(\text{1st is an ace})\). <em>Answer: \(\tfrac{1}{13}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A bag has 2 red and 3 blue balls. Three are drawn without replacement. Using a tree, find \(P(\text{all three are blue})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac35\cdot\tfrac24\cdot\tfrac13=\tfrac{6}{60}=\tfrac{1}{10}\). <em>Answer: \(\tfrac{1}{10}\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Adding along a branch or multiplying across paths (it's the reverse).</li><li>Forgetting to reduce probabilities on later branches (without replacement).</li><li>Branch probabilities at a node not summing to 1.</li><li>Using a binomial for a without-replacement draw (that's hypergeometric).</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Multiply or add?</h3><p><em>Multiply along a path (AND); add across paths to the same outcome (OR).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How does a tree give a conditional?</h3><p><em>Divide the target path's probability by the total probability of the conditioning event.</em></p></div>
</div>`)] },

  // ── 3.1 Random Variables & Discrete Distributions ───────────
  "3.1": { code: "3.1", title: "Random Variables & Discrete Distributions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📋 Random Variables &amp; Discrete Distributions</h1>
  <p><strong>Overview.</strong> A <strong>random variable</strong> \(X\) assigns a number to each outcome of an experiment; its <strong>probability distribution</strong> lists every value \(X\) can take with its probability. The defining check: all the probabilities must be non-negative and sum to exactly 1.</p>
  <h2>📌 Building a Distribution</h2>
  <p>List the values of \(X\), find the probability of each (by counting or a model), and verify \(\sum P(x)=1\).</p>
  <h2>📌 The Probability Histogram</h2>
  <p>Plot each value on a bar of <strong>width 1</strong> centred on \(x\), with <strong>height</strong> \(P(X=x)\). Then each bar's <em>area</em> equals its probability, and the <strong>total area is 1</strong> — the same logic that, in the limit, becomes the area-under-a-curve of a continuous distribution (§4.1). It mirrors a frequency histogram, but heights are probabilities, not counts.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Number of heads in 3 flips</h3><p>\(X=\) number of heads in three fair-coin flips. Build the distribution and describe its histogram.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Of \(2^{3}=8\) equally likely outcomes: \(P(0)=\tfrac18,\ P(1)=\tfrac38,\ P(2)=\tfrac38,\ P(3)=\tfrac18\).</div><div class="step"><strong>Step 2:</strong> Sum \(=\tfrac{1+3+3+1}{8}=1\). ✓ The histogram is symmetric, peaking at 1 and 2.</div><em>Conclusion: a symmetric distribution — the row-3 pattern 1,3,3,1 of Pascal's triangle. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Sum of two dice (a triangular distribution)</h3><p>\(X=\) sum of two fair dice. Give the distribution and the shape of its histogram.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Counts of each sum over 36 outcomes: 2→1, 3→2, 4→3, …, 7→6, …, 11→2, 12→1.</div><div class="step"><strong>Step 2:</strong> So \(P(7)=\tfrac{6}{36}=\tfrac16\) is the peak; probabilities fall off symmetrically toward 2 and 12.</div><em>Conclusion: a <strong>triangular</strong> histogram centred at 7 — note it is <em>not</em> uniform even though each die is. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: A hypergeometric distribution + its mean</h3><p>Draw 3 balls from 4 red and 2 blue. Let \(X=\) number of reds. Build the distribution and find \(E(X)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(1)=\dfrac{\binom{4}{1}\binom{2}{2}}{\binom{6}{3}}=\tfrac{4}{20}\), \(P(2)=\dfrac{\binom{4}{2}\binom{2}{1}}{20}=\tfrac{12}{20}\), \(P(3)=\dfrac{\binom{4}{3}}{20}=\tfrac{4}{20}\) (and \(P(0)=0\) — only 2 blue).</div><div class="step"><strong>Step 2:</strong> Sum \(=\tfrac{20}{20}=1\). ✓</div><div class="step"><strong>Step 3:</strong> \(E(X)=1\cdot\tfrac{4}{20}+2\cdot\tfrac{12}{20}+3\cdot\tfrac{4}{20}=\tfrac{40}{20}=2\).</div><em>Conclusion: expected 2 reds. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Solve for a parameter, then a cumulative probability</h3><p>A distribution is \(P(0)=0.1,\ P(1)=2a,\ P(2)=0.3,\ P(3)=a\). Find \(a\) and \(P(X\ge2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(0.1+2a+0.3+a=1\Rightarrow 3a=0.6\Rightarrow a=0.2\).</div><div class="step"><strong>Step 2:</strong> \(P(X\ge2)=P(2)+P(3)=0.3+0.2=0.5\).</div><em>Conclusion: \(a=0.2\), \(P(X\ge2)=0.5\). Use the "sums to 1" law to solve, then read off the cumulative. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: The minimum of two dice</h3><p>\(X=\) the smaller of the two values on two dice. Build the distribution and find \(E(X)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(\min=k)=P(\text{both}\ge k)-P(\text{both}\ge k+1)\). This gives \(P(1)=\tfrac{11}{36},\ P(2)=\tfrac{9}{36},\ P(3)=\tfrac{7}{36},\ P(4)=\tfrac{5}{36},\ P(5)=\tfrac{3}{36},\ P(6)=\tfrac{1}{36}\) (sum \(=1\)).</div><div class="step"><strong>Step 2:</strong> \(E(X)=\dfrac{1(11)+2(9)+3(7)+4(5)+5(3)+6(1)}{36}=\dfrac{91}{36}\approx2.53\).</div><em>Conclusion: a decreasing distribution with \(E(X)\approx2.53\). The min of two dice skews low, just as the max skews high. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\(P(x)=cx\) for \(x=1,2,3,4\). Find \(c\), then \(P(X\ge3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(c(1+2+3+4)=10c=1\Rightarrow c=0.1\); \(P(X\ge3)=0.3+0.4=0.7\). <em>Answer: \(c=0.1\), 0.7.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Two dice, \(X=\) the larger value shown. Find \(P(X=6)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Max \(\le6\): 36; max \(\le5\): 25; so \(P(X=6)=\tfrac{36-25}{36}=\tfrac{11}{36}\). <em>Answer: \(\tfrac{11}{36}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Find \(E(X)\) for the distribution \(P(1)=0.2,\ P(2)=0.3,\ P(3)=0.4,\ P(4)=0.1\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1(0.2)+2(0.3)+3(0.4)+4(0.1)=0.2+0.6+1.2+0.4=2.4\). <em>Answer: 2.4.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>Is \(P(0)=0.5,\ P(1)=0.3,\ P(2)=0.1\) a valid distribution?</p><details><summary>View answer</summary><div class="solution"><div class="step">Sum \(=0.9\ne1\) → not valid. <em>Answer: no.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Draw 2 from 5 red and 3 blue. Let \(X=\) reds. Build the distribution and find \(E(X)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(0)=\tfrac{\binom32}{\binom82}=\tfrac{3}{28},\ P(1)=\tfrac{15}{28},\ P(2)=\tfrac{10}{28}\); \(E(X)=\tfrac{0\cdot3+1\cdot15+2\cdot10}{28}=\tfrac{35}{28}=1.25\). <em>Answer: \(E(X)=1.25\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Probabilities that don't sum to 1 (or a negative probability).</li><li>Assuming the distribution of a sum is uniform because the parts are (it's triangular).</li><li>Plotting counts instead of probabilities on a probability histogram.</li><li>Confusing an outcome with the random variable's value.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What makes a distribution valid?</h3><p><em>Every \(P(x)\ge0\) and \(\sum P(x)=1\).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What is a random variable?</h3><p><em>A rule assigning a number to each outcome — e.g. the number of heads.</em></p></div>
</div>`)] },

  // ── 3.2 Expected Value ──────────────────────────────────────
  "3.2": { code: "3.2", title: "Expected Value", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Expected Value</h1>
  <p><strong>Overview.</strong> The <strong>expected value</strong> \(E(X)\) is the long-run average of a random variable — what you'd get per trial averaged over many trials. It's how insurers set premiums, how casinos guarantee profit, and how a rational decision-maker compares risky options.</p>
  <h2>📌 The Formula</h2>
  <p style="text-align:center;">\( E(X)=\sum x\,P(x) \)</p>
  <p>A game is <strong>fair</strong> when \(E(\text{net gain})=0\). The expected value need not be a value \(X\) can actually take (a die's \(E=3.5\)).</p>
  <h2>📌 Linearity</h2>
  <p>Expectation adds: \(E(X+Y)=E(X)+E(Y)\), even when \(X,Y\) aren't independent, and \(E(aX+b)=aE(X)+b\). This lets you find the mean of a sum without building its whole distribution.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Expectation from a full distribution</h3><p>\(X\) takes values 0, 1, 2, 3 with probabilities 0.1, 0.3, 0.4, 0.2. Find \(E(X)\).</p><div class="solution"><div class="step">\(E(X)=0(0.1)+1(0.3)+2(0.4)+3(0.2)=0+0.3+0.8+0.6=1.7\).</div><em>Conclusion: 1.7 — a weighted average, not the middle value. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: The prize-case problem (curriculum)</h3><p>Of six sealed cases, three each hold \$1, two each hold \$1000, and one holds \$100 000. You open one at random. Find the expected value.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(E(X)=\dfrac{3(1)+2(1000)+1(100\,000)}{6}=\dfrac{3+2000+100\,000}{6}\).</div><div class="step"><strong>Step 2:</strong> \(=\dfrac{102\,003}{6}=\$17\,000.50\).</div><em>Conclusion: ≈ \$17 000.50. One huge prize dominates the mean, even though most cases hold \$1 — this is why \(E(X)\) can sit far from every typical outcome. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: A decision between two investments</h3><p>Investment A gains \$1000 with probability 0.5 and loses \$200 otherwise. Investment B gains \$5000 with probability 0.1 and loses \$300 otherwise. Which has the higher expected return?</p><div class="solution"><div class="step"><strong>A:</strong> \(1000(0.5)+(-200)(0.5)=500-100=\$400\).</div><div class="step"><strong>B:</strong> \(5000(0.1)+(-300)(0.9)=500-270=\$230\).</div><em>Conclusion: A (\$400 vs \$230). Expected value ranks risky options on a common scale. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Insurance</h3><p>An insurer charges \$300 for a policy that pays \$5000 with probability 0.04. Find the insurer's expected gain per policy.</p><div class="solution"><div class="step">\(300-5000(0.04)=300-200=\$100\).</div><em>Conclusion: \$100 expected gain. The premium exceeds the expected payout — that margin is the business. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Linearity beats brute force</h3><p>Find the expected value of the sum of two fair dice.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Each die has mean \(3.5\).</div><div class="step"><strong>Step 2:</strong> \(E(X+Y)=E(X)+E(Y)=3.5+3.5=7\).</div><em>Conclusion: 7 — no need to build the 11-row distribution of the sum. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A spinner pays \$1, \$4, \$9 with probabilities \(\tfrac12,\tfrac13,\tfrac16\). Find \(E(X)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac12+\tfrac43+\tfrac96=\tfrac{3+8+9}{6}=\tfrac{20}{6}\approx\$3.33\). <em>Answer: ≈ \$3.33.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A \$2 ticket wins \$100 with probability \(\tfrac{1}{80}\). Find the expected profit.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(100\cdot\tfrac{1}{80}-2=1.25-2=-\$0.75\). <em>Answer: −\$0.75.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>You roll a die and win \$ equal to the number shown, but pay \$4 to play. Find the expected profit, and decide whether to play.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(E(\text{profit})=3.5-4=-\$0.50\) → don't play. <em>Answer: −\$0.50; no.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A raffle sells 500 tickets at \$5 each. Prizes: one \$1000, five \$100. Find the expected value of a single ticket (net of its cost).</p><details><summary>View answer</summary><div class="solution"><div class="step">Expected winnings \(=\dfrac{1000+5(100)}{500}=\dfrac{1500}{500}=\$3\); net \(=3-5=-\$2\). <em>Answer: −\$2.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>You roll a die and are paid \$ equal to the number shown. What price to play makes the game fair?</p><details><summary>View answer</summary><div class="solution"><div class="step">Fair when the price equals the expected winnings \(E(X)=3.5\). <em>Answer: \$3.50.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Forgetting to subtract the cost to play when asked for profit.</li><li>Averaging the payouts instead of weighting by their probabilities.</li><li>Expecting \(E(X)\) to be an achievable outcome (it often isn't).</li><li>Building a full distribution when linearity gives the mean directly.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does \(E(X)\) mean?</h3><p><em>The average value per trial over the long run.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When is a game fair?</h3><p><em>When the expected net gain is 0.</em></p></div>
</div>`)] },

  // ── 3.3 The Uniform Distribution ────────────────────────────
  "3.3": { code: "3.3", title: "The Uniform Distribution", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📏 The Uniform Distribution</h1>
  <p><strong>Overview.</strong> In a <strong>discrete uniform distribution</strong> every outcome is equally likely — the model behind fair dice, spinners, and random draws. Its probabilities and mean are especially simple, and recognizing when the equal-likelihood assumption is (or isn't) valid is the real lesson.</p>
  <h2>📌 The Model</h2>
  <p>For \(n\) equally likely values, \(P(X=x)=\dfrac{1}{n}\). If the values are the consecutive integers \(1\) to \(n\), the mean is the midpoint \(\dfrac{1+n}{2}\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A game on a uniform spinner</h3><p>A spinner has equal sectors 1–10. You win \$ equal to the number if it is <strong>prime</strong>, otherwise you lose \$2. Find the expected value of one spin.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Primes 1–10: 2, 3, 5, 7 (win their value). The other six values (1,4,6,8,9,10) lose \$2.</div><div class="step"><strong>Step 2:</strong> \(E=\dfrac{(2+3+5+7)+(-2)(6)}{10}=\dfrac{17-12}{10}=\$0.50\).</div><em>Conclusion: \$0.50 per spin. Uniform outcomes, but a non-uniform payoff. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Variance of a fair die</h3><p>Find the variance of a fair die (a preview of §5.3), using \(\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(E(X)=3.5\); \(E(X^{2})=\tfrac{1+4+9+16+25+36}{6}=\tfrac{91}{6}\).</div><div class="step"><strong>Step 2:</strong> \(\operatorname{Var}(X)=\tfrac{91}{6}-\left(\tfrac72\right)^{2}=\tfrac{91}{6}-\tfrac{49}{4}=\tfrac{182-147}{12}=\tfrac{35}{12}\approx2.92\).</div><em>Conclusion: \(\tfrac{35}{12}\). The mean isn't enough — spread needs \(E(X^{2})\) too. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: A uniform on non-consecutive values</h3><p>\(X\) is uniform on \(\{2, 4, 6, 8, 10\}\). Find \(E(X)\) and \(P(X>5)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(E(X)=\dfrac{2+4+6+8+10}{5}=6\) (the midpoint of equally spaced values).</div><div class="step"><strong>Step 2:</strong> \(X>5\) for 6, 8, 10 → \(P=\tfrac35\).</div><em>Conclusion: \(E(X)=6,\ P(X>5)=\tfrac35\). The \(\tfrac{1+n}{2}\) shortcut only works for \(1..n\); here use the actual midpoint. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A uniform's sum is not uniform</h3><p>Each of two fair dice is uniform on 1–6. Is the <strong>sum</strong> uniform? Explain.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(\text{sum}=2)=\tfrac{1}{36}\) but \(P(\text{sum}=7)=\tfrac{6}{36}\) — the sums are far from equally likely.</div><div class="step"><strong>Step 2:</strong> There are many ways to make 7 but only one to make 2 or 12.</div><em>Conclusion: no — the sum is <strong>triangular</strong>, not uniform. Uniformity is not preserved by adding. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Probability on a uniform range</h3><p>A random integer is chosen uniformly from 1 to 20. Find \(P(\text{it is prime})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Primes ≤ 20: 2, 3, 5, 7, 11, 13, 17, 19 → 8 values.</div><div class="step"><strong>Step 2:</strong> \(P=\tfrac{8}{20}=\tfrac25\).</div><em>Conclusion: \(\tfrac25\). On a uniform distribution, probability is just the fraction of values that qualify. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A spinner 1–12: you win \$3 on a multiple of 3, else lose \$1. Find the expected value.</p><details><summary>View answer</summary><div class="solution"><div class="step">Multiples of 3: 4 of them. \(E=\dfrac{4(3)+8(-1)}{12}=\dfrac{12-8}{12}=\tfrac13\approx\$0.33\). <em>Answer: ≈ \$0.33.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>\(X\) is uniform on \(\{5,10,15,20\}\). Find \(E(X)\) and \(P(X\ge15)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(E(X)=12.5\); \(P(X\ge15)=\tfrac24=\tfrac12\). <em>Answer: 12.5 and \(\tfrac12\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A random integer is chosen from 1 to 100. Find \(P(\text{it is a multiple of 10})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Multiples of 10: 10 of them → \(\tfrac{10}{100}=\tfrac{1}{10}\). <em>Answer: \(\tfrac{1}{10}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>\(X\) is uniform on \(\{3,6,9,12,15\}\). Find \(E(X)\) and \(P(X<10)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(E(X)=9\) (midpoint); \(X<10\) for 3, 6, 9 → \(\tfrac35\). <em>Answer: 9 and \(\tfrac35\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Find the standard deviation of a fair 4-sided die (values 1–4).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(E(X)=2.5\); \(E(X^{2})=\tfrac{1+4+9+16}{4}=7.5\); \(\operatorname{Var}=7.5-6.25=1.25\); \(\sigma=\sqrt{1.25}\approx1.12\). <em>Answer: ≈ 1.12.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Using \(\tfrac{1+n}{2}\) when the values aren't the consecutive integers \(1..n\).</li><li>Assuming the sum (or any combination) of uniforms stays uniform.</li><li>Forgetting \(E(X^{2})\ne[E(X)]^{2}\) when computing variance.</li><li>Assuming a real situation is uniform without checking equal likelihood.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What makes a distribution uniform?</h3><p><em>Every outcome has the same probability \(\tfrac1n\).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Where's the mean?</h3><p><em>At the midpoint of the values (for equally spaced values).</em></p></div>
</div>`)] },

  // ── 3.5 The Geometric Distribution ──────────────────────────
  "3.5": { code: "3.5", title: "The Geometric Distribution", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⏳ The Geometric Distribution</h1>
  <p><strong>Overview.</strong> The geometric distribution models the number of independent trials <em>until the first success</em> — how many rolls to get a six, how many calls to reach a sale. It's a "waiting-time" model, and it has the surprising <strong>memoryless</strong> property: past failures don't change what's coming.</p>
  <h2>📌 The Model</h2>
  <p>With success probability \(p\) and \(q=1-p\), the first success occurs on trial \(n\) with probability</p>
  <p style="text-align:center;">\( P(X=n)=q^{\,n-1}\,p \)</p>
  <p>(the first \(n-1\) trials fail, the \(n\)-th succeeds). The expected number of trials is \(E(X)=\dfrac{1}{p}\).</p>
  <h2>📌 Tails &amp; the Memoryless Property</h2>
  <p>The probability of <strong>still waiting</strong> after \(n\) trials is \(P(X>n)=q^{\,n}\) (all \(n\) failed). The geometric is <strong>memoryless</strong>: \(P(X>m+n\mid X>m)=P(X>n)\) — past failures don't make you "due". A run of bad luck changes nothing about what comes next.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A telemarketing wait</h3><p>Each call results in a sale with probability \(p=0.1\). Find \(P(\text{first sale on the 5th call})\) and the expected number of calls to a sale.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(X=5)=(0.9)^{4}(0.1)=0.6561\times0.1=0.0656\).</div><div class="step"><strong>Step 2:</strong> \(E(X)=\tfrac{1}{0.1}=10\) calls.</div><em>Conclusion: ≈ 0.0656, and 10 calls on average. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: A tail probability</h3><p>With \(p=0.2\), find \(P(\text{more than 5 trials are needed})\).</p><div class="solution"><div class="step">\(P(X>5)=(0.8)^{5}=0.32768\).</div><em>Conclusion: ≈ 0.328. "More than 5 trials" means the first 5 all failed — a pure power of \(q\). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: A range of trials</h3><p>With \(p=0.3\), find \(P(\text{the first success occurs on trial 3, 4, or 5})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Use the tails: \(P(3\le X\le5)=P(X>2)-P(X>5)=(0.7)^{2}-(0.7)^{5}\).</div><div class="step"><strong>Step 2:</strong> \(0.49-0.16807=0.32193\).</div><em>Conclusion: ≈ 0.322. Differencing two tail probabilities beats summing three separate terms. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Memoryless in action</h3><p>A die has produced no 6 in its first 2 rolls. Find \(P(\text{it takes more than 3 further rolls to get a 6})\), and compare to a fresh start.</p><div class="solution"><div class="step"><strong>Step 1:</strong> By the memoryless property, the past 2 failures are irrelevant: \(P(X>5\mid X>2)=P(X>3)=\left(\tfrac56\right)^{3}=\tfrac{125}{216}\approx0.579\).</div><div class="step"><strong>Step 2:</strong> A brand-new die also has \(P(X>3)=0.579\) — identical.</div><em>Conclusion: ≈ 0.579, same as starting over. The die is never "due" for a 6. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A "first failure" wait</h3><p>A basketball player makes each free throw with probability 0.7. Find \(P(\text{the first miss is on the 3rd attempt})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Treat a <em>miss</em> as the success event, with probability \(p=0.3\) and \(q=0.7\).</div><div class="step"><strong>Step 2:</strong> \(P(X=3)=q^{2}p=(0.7)^{2}(0.3)=0.147\).</div><em>Conclusion: ≈ 0.147. The geometric works for "first failure" too — just relabel which outcome is the "success". ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>With \(p=0.4\), find \(P(\text{first success within the first 3 trials})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1-P(X>3)=1-(0.6)^{3}=1-0.216=0.784\). <em>Answer: 0.784.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A quality check passes with probability 0.9. Find \(P(\text{first failure on the 4th item})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">"Failure" is the success event, \(p=0.1\): \((0.9)^{3}(0.1)=0.0729\). <em>Answer: ≈ 0.073.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A fair coin is tossed. Find \(P(\text{the first head is on the 3rd toss})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\((0.5)^{2}(0.5)=\tfrac18\). <em>Answer: \(\tfrac18\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>With \(p=0.2\), find \(P(\text{more than 4 trials are needed})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(X>4)=(0.8)^{4}=0.4096\). <em>Answer: ≈ 0.410.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>With \(p=0.25\), find \(P(\text{the first success occurs on an even-numbered trial})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\sum_{k\ge1}q^{2k-1}p=\dfrac{qp}{1-q^{2}}=\dfrac{0.75(0.25)}{1-0.5625}=\dfrac{0.1875}{0.4375}=\tfrac{3}{7}\approx0.429\). <em>Answer: \(\tfrac37\).</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Using \(q^{n}\) for \(P(X=n)\) instead of \(q^{\,n-1}p\).</li><li>Confusing "first success on trial \(n\)" with "within \(n\) trials".</li><li>Believing a long failure streak makes a success "due" (memorylessness says no).</li><li>Applying the geometric model when trials aren't independent or \(p\) changes.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does the geometric variable count?</h3><p><em>The trial number of the first success.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why is \(E(X)=1/p\)?</h3><p><em>Rarer successes (small \(p\)) mean longer waits on average — the reciprocal captures this.</em></p></div>
</div>`), anim("p*(1-p)^(x-1)", "p", { from: 0.15, to: 0.7, xMin: 0, xMax: 11, yMin: 0, yMax: 0.75, caption: "▶ P(first success on trial x) = p(1−p)ˣ⁻¹ — always a decay. Small p → a long, slow tail (you wait many trials, E(X)=1/p is large); large p → the probability collapses fast onto the first trial." })] },

  // ── 3.6 The Hypergeometric Distribution ─────────────────────
  "3.6": { code: "3.6", title: "The Hypergeometric Distribution", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🫙 The Hypergeometric Distribution</h1>
  <p><strong>Overview.</strong> The hypergeometric distribution models <strong>sampling without replacement</strong> from a finite population — quality-control samples, card hands, committees drawn from a fixed pool. Because each draw changes what's left, the trials are dependent, which is exactly what separates it from the binomial.</p>
  <h2>📌 The Model</h2>
  <p>From \(n\) objects of which \(a\) are "successes", draw \(r\) without replacement. The probability of exactly \(k\) successes is</p>
  <p style="text-align:center;">\( P(X=k)=\dfrac{\dbinom{a}{k}\dbinom{n-a}{r-k}}{\dbinom{n}{r}} \)</p>
  <p><strong>Binomial vs hypergeometric:</strong> replacement (or a very large population) keeps \(p\) constant → binomial; sampling a small population without replacement → hypergeometric.</p>
  <h2>📌 The Mean</h2>
  <p>Like the binomial, a hypergeometric variable has mean \(E(X)=r\cdot\dfrac{a}{n}\) — the sample size times the population success fraction.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: With vs without replacement (curriculum)</h3><p>A card is drawn 3 times from a standard deck. Find \(P(\text{exactly 2 face cards})\) (a) <strong>with</strong> replacement and (b) <strong>without</strong> replacement. (12 face cards.)</p><div class="solution"><div class="step"><strong>(a) With replacement (binomial), \(p=\tfrac{12}{52}=\tfrac{3}{13}\):</strong> \(\binom{3}{2}\left(\tfrac{3}{13}\right)^{2}\left(\tfrac{10}{13}\right)=\tfrac{270}{2197}\approx0.123\).</div><div class="step"><strong>(b) Without replacement (hypergeometric):</strong> \(\dfrac{\binom{12}{2}\binom{40}{1}}{\binom{52}{3}}=\dfrac{66\cdot40}{22\,100}=\dfrac{2640}{22\,100}\approx0.119\).</div><em>Conclusion: 0.123 vs 0.119 — close, because 3 draws barely deplete 52 cards, but genuinely different models. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Exactly \(k\) of a colour</h3><p>From 5 red and 7 blue, draw 3 without replacement. Find \(P(\text{exactly 2 red})\).</p><div class="solution"><div class="step">\(\dfrac{\binom{5}{2}\binom{7}{1}}{\binom{12}{3}}=\dfrac{10\cdot7}{220}=\tfrac{7}{22}\approx0.318\).</div><em>Conclusion: ≈ 0.318. \(\binom52\) picks the reds, \(\binom71\) the non-reds. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: The mean of a draw</h3><p>Five cards are dealt from a deck. Find the expected number of hearts.</p><div class="solution"><div class="step">\(E(X)=r\cdot\dfrac{a}{n}=5\cdot\dfrac{13}{52}=1.25\).</div><em>Conclusion: 1.25 hearts on average — no need to build the whole distribution. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A lottery match</h3><p>In 6/49, six numbers are drawn from 49. Find \(P(\text{you match exactly 4})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Your 6 numbers split the pool into 6 "winners" and 43 "losers"; the draw is a sample of 6.</div><div class="step"><strong>Step 2:</strong> \(\dfrac{\binom{6}{4}\binom{43}{2}}{\binom{49}{6}}=\dfrac{15\cdot903}{13\,983\,816}=\dfrac{13\,545}{13\,983\,816}\approx0.00097\).</div><em>Conclusion: ≈ 0.001. Lotteries are textbook hypergeometric. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: "At least one" defective (complement)</h3><p>A shipment of 20 items contains 4 defective. An inspector samples 5. Find \(P(\text{at least one defective})\).</p><div class="solution"><div class="step"><strong>Complement:</strong> \(P(\text{none})=\dfrac{\binom{16}{5}}{\binom{20}{5}}=\dfrac{4368}{15\,504}\approx0.282\).</div><div class="step">\(P(\text{at least one})=1-0.282=0.718\).</div><em>Conclusion: ≈ 0.718. The complement avoids summing exactly-1,-2,-3,-4. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>A committee of 5 is drawn from 6 women and 4 men. Find \(P(\text{exactly 3 women})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{\binom{6}{3}\binom{4}{2}}{\binom{10}{5}}=\dfrac{20\cdot6}{252}=\dfrac{120}{252}=\tfrac{10}{21}\approx0.476\). <em>Answer: ≈ 0.476.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Five cards are dealt. Find the expected number of aces.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(5\cdot\tfrac{4}{52}=\tfrac{5}{13}\approx0.385\). <em>Answer: ≈ 0.385.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>From 8 red and 4 green balls, draw 3 without replacement. Find \(P(\text{exactly 1 green})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{\binom{4}{1}\binom{8}{2}}{\binom{12}{3}}=\dfrac{4\cdot28}{220}=\dfrac{112}{220}=\tfrac{28}{55}\approx0.509\). <em>Answer: \(\tfrac{28}{55}\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4</h3><p>From 10 items of which 3 are defective, draw 4. Find the expected number of defective items.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(E(X)=r\cdot\tfrac{a}{n}=4\cdot\tfrac{3}{10}=1.2\). <em>Answer: 1.2.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>In 6/49, find \(P(\text{you match exactly 5})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{\binom{6}{5}\binom{43}{1}}{\binom{49}{6}}=\dfrac{6\cdot43}{13\,983\,816}=\dfrac{258}{13\,983\,816}\approx1.8\times10^{-5}\). <em>Answer: ≈ 0.0000185.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Using the binomial formula for sampling without replacement.</li><li>Getting the non-success pool \(n-a\) or the count \(r-k\) wrong.</li><li>Forgetting that \(k\) can't exceed \(a\) or \(r\).</li><li>Assuming with- and without-replacement give the same answer (they only converge for large populations).</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Binomial or hypergeometric?</h3><p><em>Without replacement from a small population → hypergeometric; with replacement or a huge population → binomial.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What does each binomial coefficient count?</h3><p><em>\(\binom{a}{k}\) chooses the successes, \(\binom{n-a}{r-k}\) the non-successes, over \(\binom{n}{r}\) total draws.</em></p></div>
</div>`)] },

  // ── 4.1 Continuous Random Variables ─────────────────────────
  "4.1": { code: "4.1", title: "Continuous Random Variables", blocks: [html(String.raw`<div class="lecture-box">
  <h1>〰️ Continuous Random Variables</h1>
  <p><strong>Overview.</strong> A <strong>continuous</strong> random variable can take any value in an interval — a height, a time, a temperature. Because there are infinitely many possible values, probability is no longer "count the outcomes"; it becomes <strong>area under a density curve</strong>. A surprising consequence: the probability of any single exact value is 0.</p>
  <h2>📌 Density &amp; Area</h2>
  <p>A <strong>probability density curve</strong> is non-negative and encloses a total area of 1. The probability that \(X\) lands in an interval is the area above that interval. Since a single point has zero width, \(P(X=a)=0\); only intervals carry probability, so \(P(a\le X\le b)=P(a<X<b)\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: A uniform waiting time</h3><p>A bus arrives at a uniformly random time in the next 15 minutes. Find \(P(\text{you wait more than 10 min})\) and \(P(\text{you wait between 5 and 10 min})\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The density is flat at height \(\tfrac{1}{15}\) on \([0,15]\).</div><div class="step"><strong>Step 2:</strong> \(P(X>10)=\tfrac{5}{15}=\tfrac13\); \(P(5<X<10)=\tfrac{5}{15}=\tfrac13\).</div><em>Conclusion: both \(\tfrac13\). For a uniform, probability is just the fraction of the interval's length. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: A ramp density (area = probability)</h3><p>A density rises linearly, \(f(x)=\tfrac{x}{2}\) on \([0,2]\). Verify it's valid, then find \(P(X<1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Total area is a triangle: \(\tfrac12(\text{base }2)(\text{height }1)=1\). ✓</div><div class="step"><strong>Step 2:</strong> \(P(X<1)\) is the area from 0 to 1 — a small triangle of base 1 and height \(f(1)=0.5\): \(\tfrac12(1)(0.5)=0.25\).</div><em>Conclusion: 0.25. No calculus needed — the region is a triangle. ✓</em></div>
    ${gframe(["y = x/2"], { title: "Density f(x)=x/2 on [0,2] — P(X<1) is the area from 0 to 1", zoom: 200, ox: -200, oy: 100, labels: [{ x: 1, y: 0.5, t: "f(1)=0.5", c: "#a3327a" }] })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 3: A piecewise (trapezoidal) density</h3><p>A density is \(0.2\) on \([0,3]\) and \(0.1\) on \([3,7]\). Verify it's valid and find \(P(X>3)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Total area \(=0.2(3)+0.1(4)=0.6+0.4=1\). ✓</div><div class="step"><strong>Step 2:</strong> \(P(X>3)=0.1(4)=0.4\).</div><em>Conclusion: 0.4. Add the rectangular pieces. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A symmetric triangular ("tent") density</h3><p>A density forms a tent on \([0,4]\), peaking at \(x=2\) with height \(0.5\). Find \(P(X<1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Check area: \(\tfrac12(4)(0.5)=1\). ✓ The left edge rises as \(f(x)=0.25x\).</div><div class="step"><strong>Step 2:</strong> \(P(X<1)\) is the triangle from 0 to 1 with height \(f(1)=0.25\): \(\tfrac12(1)(0.25)=0.125\).</div><em>Conclusion: 0.125. Symmetry also tells you \(P(X<2)=0.5\) (the median is the peak). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A decreasing-ramp density — solve for \(k\)</h3><p>A density is \(f(x)=k(4-x)\) on \([0,4]\) (a right triangle, tallest at \(x=0\)). Find \(k\), then \(P(X>2)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Area is a triangle of base 4 and height \(f(0)=4k\): \(\tfrac12(4)(4k)=8k=1\Rightarrow k=\tfrac18\).</div><div class="step"><strong>Step 2:</strong> \(P(X>2)\) is the triangle from 2 to 4, base 2 and height \(f(2)=\tfrac18(2)=0.25\): \(\tfrac12(2)(0.25)=0.25\).</div><em>Conclusion: \(k=\tfrac18\), \(P(X>2)=0.25\). Set the total area to 1 to find the unknown height constant. ✓</em></div>
    ${gframe(["y = (4-x)/8"], { title: "Density f(x)=(4−x)/8 on [0,4] — a decreasing ramp", zoom: 120, zoomY: 300, ox: -240, oy: 75, labels: [{ x: 0, y: 0.5, t: "f(0)=0.5", c: "#a3327a" }] })}
  </div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\(X\) is uniform on \([0,20]\). Find \(P(8<X<14)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{14-8}{20}=\tfrac{6}{20}=0.3\). <em>Answer: 0.3.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A density is flat on \([1,5]\). Find its height and \(P(X>4)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Height \(=\tfrac14\); \(P(X>4)=\tfrac14(1)=0.25\). <em>Answer: 0.25.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>\(X\) is uniform on \([10,30]\). Find \(P(X<18)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Height \(\tfrac{1}{20}\); \(P(X<18)=\tfrac{18-10}{20}=0.4\). <em>Answer: 0.4.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A tent density peaks at \(x=1.5\) on \([0,3]\). Find its peak height and \(P(X<1.5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Area \(\tfrac12(3)(h)=1\Rightarrow h=\tfrac23\); by symmetry \(P(X<1.5)=0.5\) (the median). <em>Answer: \(h=\tfrac23\), \(P=0.5\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>An increasing-ramp density \(f(x)=\tfrac{x}{18}\) on \([0,6]\). Confirm the peak height and find \(P(X>3)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Peak \(f(6)=\tfrac13\); area \(\tfrac12(6)(\tfrac13)=1\) ✓. \(P(X\le3)=\tfrac12(3)f(3)=\tfrac12(3)(\tfrac16)=0.25\), so \(P(X>3)=0.75\). <em>Answer: 0.75.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Treating density height as probability (it's the <em>area</em> that's the probability).</li><li>Claiming \(P(X=a)>0\) for a continuous variable.</li><li>Forgetting the total area must equal 1 when solving for a height.</li><li>Thinking a density height can't exceed 1 (a narrow density must be tall).</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Where does probability live?</h3><p><em>In the area under the density curve over an interval.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why is \(P(X=a)=0\)?</h3><p><em>A single point has zero width, hence zero area.</em></p></div>
</div>`)] },

  // ── 4.3 Normal Probabilities & Percentiles ──────────────────
  "4.3": { code: "4.3", title: "Normal Probabilities & Percentiles", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📐 Normal Probabilities &amp; Percentiles</h1>
  <p><strong>Overview.</strong> The empirical rule only handles values exactly at \(\mu\pm1\sigma,\pm2\sigma,\pm3\sigma\). For <em>any</em> value you standardize to a z-score and read the area from a z-table or calculator. Reversing the process — going from a probability or percentile back to an \(x\)-value — is the other half of this skill.</p>
  <h2>📌 From \(x\) to a Probability</h2>
  <p>Standardize with \(z=\dfrac{x-\mu}{\sigma}\), then look up \(\Phi(z)=P(Z<z)\). Use symmetry (\(P(Z>z)=1-\Phi(z)\)) and subtraction (\(P(a<X<b)=\Phi(z_b)-\Phi(z_a)\)).</p>
  <h2>📌 From a Percentile back to \(x\)</h2>
  <p>Find the \(z\) whose left area is the target (e.g. 90th percentile → \(z\approx1.28\)), then invert: \(x=\mu+z\sigma\). Useful \(z\)-values: 90th ≈ 1.28, 95th ≈ 1.645, 97.5th ≈ 1.96.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: An upper tail</h3><p>Test scores are normal with \(\mu=500,\ \sigma=100\). Find \(P(X>650)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(z=\dfrac{650-500}{100}=1.5\).</div><div class="step"><strong>Step 2:</strong> \(P(Z>1.5)=1-\Phi(1.5)=1-0.9332=0.0668\).</div><em>Conclusion: ≈ 0.067. Read the table for the left area, then subtract for the upper tail. ✓</em></div>
    ${gframe(["y = exp(-x^2/2)"], { title: "Standard normal — the upper tail beyond z = 1.5", zoom: 40, labels: [{ x: 0, y: 0, t: "μ", c: "#2563a0", point: false }, { x: 1.5, y: 0, t: "z = 1.5", c: "#a3327a", point: false }] })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: A real-world rejection rate</h3><p>A machine fills bottles with volume \(\sim N(500\text{ ml},\ 5\text{ ml})\). Bottles under 493 ml are rejected. What fraction is rejected?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(z=\dfrac{493-500}{5}=-1.4\).</div><div class="step"><strong>Step 2:</strong> \(P(X<493)=\Phi(-1.4)=0.0808\).</div><em>Conclusion: ≈ 8% rejected. A one-sided spec limit is a single tail. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Solve for \(\sigma\) from a percentile</h3><p>Marks are normal with \(\mu=70\), and the 90th percentile is 82. Find \(\sigma\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> 90th percentile ⇒ \(z\approx1.28\), and \(z=\dfrac{82-70}{\sigma}\).</div><div class="step"><strong>Step 2:</strong> \(1.28=\dfrac{12}{\sigma}\Rightarrow\sigma=\dfrac{12}{1.28}\approx9.4\).</div><em>Conclusion: \(\sigma\approx9.4\). Standardizing gives an equation you can solve for the unknown parameter. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Recover both \(\mu\) and \(\sigma\) from two quartiles</h3><p>A normal distribution has 25th percentile 60 and 75th percentile 80. Find \(\mu\) and \(\sigma\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Quartiles sit at \(z=\pm0.674\), symmetric about the mean: \(\mu=\dfrac{60+80}{2}=70\).</div><div class="step"><strong>Step 2:</strong> The gap \(80-60=20\) spans \(2(0.674)\sigma\): \(\sigma=\dfrac{20}{1.348}\approx14.8\).</div><em>Conclusion: \(\mu=70,\ \sigma\approx14.8\). Two percentiles give two equations for the two parameters. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A middle band</h3><p>For \(\mu=500,\ \sigma=100\), find \(P(460<X<540)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(z=\pm0.4\).</div><div class="step"><strong>Step 2:</strong> \(\Phi(0.4)-\Phi(-0.4)=0.6554-0.3446=0.3108\).</div><em>Conclusion: ≈ 0.311. A band is a difference of two left areas. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Heights are \(N(170,8)\). Find \(P(X<180)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(z=1.25\), \(\Phi(1.25)=0.8944\). <em>Answer: ≈ 0.894.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Scores are \(N(500,100)\). Find the 90th-percentile score.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(z\approx1.28\): \(x=500+1.28(100)=628\). <em>Answer: ≈ 628.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Heights are normal with \(\sigma=6\), and the 95th percentile is 180 cm. Find \(\mu\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(1.645=\dfrac{180-\mu}{6}\Rightarrow\mu=180-9.87\approx170.1\). <em>Answer: ≈ 170.1 cm.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A normal distribution has 16th percentile 52 and 84th percentile 68. Find \(\mu\) and \(\sigma\).</p><details><summary>View answer</summary><div class="solution"><div class="step">Those are \(\mu\mp1\sigma\) (since \(z=\pm1\)): \(\mu=60,\ \sigma=8\). <em>Answer: \(\mu=60,\ \sigma=8\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>IQ scores are \(N(100,15)\). Find \(P(85<X<130)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(z=-1\) and \(z=2\): \(\Phi(2)-\Phi(-1)=0.9772-0.1587=0.8185\). <em>Answer: ≈ 0.819.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Reporting \(\Phi(z)\) when the question wants the upper tail \(1-\Phi(z)\).</li><li>Forgetting to invert (\(x=\mu+z\sigma\)) for a percentile question.</li><li>Sign errors on a below-the-mean \(z\).</li><li>Not setting up an equation when \(\sigma\) or \(\mu\) is the unknown.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Probability from a value?</h3><p><em>Standardize to \(z\), then read \(\Phi(z)\); combine with symmetry/subtraction as needed.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Value from a percentile?</h3><p><em>Find the \(z\) for that left area, then \(x=\mu+z\sigma\).</em></p></div>
</div>`), anim("exp(-(x-a)^2/2)/sqrt(2*pi)", "a", { from: -3, to: 3, xMin: -6, xMax: 6, yMin: 0, yMax: 0.55, caption: "▶ Shifting the mean a = μ slides the whole bell — its shape never changes. A z-score just measures how many σ-steps a value sits from this moving centre." })] },

  // ── 4.4 The Normal Approximation to the Binomial ────────────
  "4.4": { code: "4.4", title: "The Normal Approximation to the Binomial", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔗 The Normal Approximation to the Binomial</h1>
  <p><strong>Overview.</strong> Computing a binomial probability for large \(n\) (say \(P(X\ge60)\) out of 100) means summing dozens of terms. When \(np\) and \(nq\) are both at least 5, the binomial is close enough to a normal to approximate it — turning a huge sum into a single z-score, with one adjustment: the <strong>continuity correction</strong>.</p>
  <h2>📌 The Method</h2>
  <p>Check \(np\ge5\) and \(nq\ge5\). Then model \(X\) as normal with \(\mu=np\) and \(\sigma=\sqrt{npq}\). Because a discrete count is being approximated by a continuous curve, widen the interval by 0.5 on each relevant side (the <strong>continuity correction</strong>): \(P(X\ge60)\to P(X\ge59.5)\), \(P(X\le40)\to P(X\le40.5)\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: An upper tail</h3><p>Flip a fair coin 100 times. Approximate \(P(X\ge60)\).</p><div class="solution"><div class="step"><strong>Check:</strong> \(np=nq=50\ge5\). \(\mu=50,\ \sigma=\sqrt{100(0.5)(0.5)}=5\).</div><div class="step"><strong>Continuity:</strong> \(P(X\ge59.5)\); \(z=\dfrac{59.5-50}{5}=1.9\).</div><div class="step"><strong>Area:</strong> \(1-\Phi(1.9)=1-0.9713=0.0287\).</div><em>Conclusion: ≈ 0.029 — a single z-score replaces a 41-term binomial sum. ✓</em></div>
    ${gframe(["y = exp(-x^2/2)"], { title: "For large n the binomial's bars fit under a normal curve", zoom: 40, labels: [{ x: 0, y: 0, t: "μ = np", c: "#2563a0", point: false }] })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: A polling application</h3><p>30% of voters favour a measure. In a random sample of 500, approximate \(P(\text{at least 160 favour it})\).</p><div class="solution"><div class="step"><strong>Check:</strong> \(np=150,\ nq=350\), both \(\ge5\). \(\mu=150,\ \sigma=\sqrt{500(0.3)(0.7)}=\sqrt{105}\approx10.25\).</div><div class="step"><strong>Continuity:</strong> \(P(X\ge159.5)\); \(z=\dfrac{159.5-150}{10.25}\approx0.93\).</div><div class="step"><strong>Area:</strong> \(1-\Phi(0.93)=1-0.8238\approx0.176\).</div><em>Conclusion: ≈ 0.176. This is how sampling margins in polls are computed. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: An "exactly" probability</h3><p>In 100 fair-coin flips, approximate \(P(X=50)\).</p><div class="solution"><div class="step"><strong>Continuity:</strong> a single count becomes a unit-wide band: \(P(49.5<X<50.5)\).</div><div class="step"><strong>Standardize:</strong> \(z=\pm0.1\); area \(=\Phi(0.1)-\Phi(-0.1)=0.5398-0.4602=0.0796\).</div><em>Conclusion: ≈ 0.080. An exact value needs the \(\pm0.5\) band on <em>both</em> sides. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A middle range</h3><p>Coin flipped 100 times. Approximate \(P(40\le X\le60)\).</p><div class="solution"><div class="step"><strong>Continuity:</strong> \(P(39.5\le X\le60.5)\); \(z=\pm2.1\).</div><div class="step"><strong>Area:</strong> \(2\Phi(2.1)-1=2(0.9821)-1=0.9642\).</div><em>Conclusion: ≈ 0.964. Widen <em>outward</em> on both ends for an inclusive range. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A quality-control lower tail</h3><p>A factory's items are 4% defective. In a batch of 300, approximate \(P(\text{fewer than 8 defective})\).</p><div class="solution"><div class="step"><strong>Check:</strong> \(np=12,\ nq=288\), both \(\ge5\). \(\mu=12,\ \sigma=\sqrt{300(0.04)(0.96)}=\sqrt{11.52}\approx3.39\).</div><div class="step"><strong>Continuity:</strong> "fewer than 8" means \(X\le7\) → \(P(X\le7.5)\); \(z=\dfrac{7.5-12}{3.39}\approx-1.33\).</div><div class="step"><strong>Area:</strong> \(\Phi(-1.33)\approx0.092\).</div><em>Conclusion: ≈ 0.092. "Fewer than 8" is \(X\le7\), so the correction lands at 7.5. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\(n=200,\ p=0.5\). Find \(\mu\) and \(\sigma\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\mu=100,\ \sigma=\sqrt{200(0.25)}=\sqrt{50}\approx7.07\). <em>Answer: 100 and ≈ 7.07.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Is the normal approximation valid for \(n=20,\ p=0.1\)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(np=2<5\) → not valid. <em>Answer: no.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>A 200-question true/false test is answered by guessing. Approximate \(P(\text{at least 110 correct})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\mu=100,\ \sigma=\sqrt{200(0.25)}\approx7.07\); \(P(X\ge109.5)\), \(z=\dfrac{9.5}{7.07}\approx1.34\); \(1-\Phi(1.34)\approx0.090\). <em>Answer: ≈ 0.090.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Coin, \(n=100\). Approximate \(P(X\le45)\) with continuity correction.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(P(X\le45.5)\); \(z=\dfrac{45.5-50}{5}=-0.9\); \(\Phi(-0.9)=0.1841\). <em>Answer: ≈ 0.184.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>\(n=64,\ p=0.5\). Approximate \(P(X>40)\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\mu=32,\ \sigma=\sqrt{16}=4\); "\(>40\)" means \(X\ge41\) → \(P(X\ge40.5)\), \(z=\dfrac{8.5}{4}\approx2.13\); \(1-\Phi(2.13)\approx0.017\). <em>Answer: ≈ 0.017.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Skipping the \(np\ge5,\ nq\ge5\) check.</li><li>Omitting the continuity correction, or adjusting it the wrong direction.</li><li>Using only one \(\pm0.5\) for an "exactly \(k\)" (it needs both sides).</li><li>Using \(\sigma=np\) instead of \(\sqrt{npq}\).</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: When can I approximate?</h3><p><em>When \(np\ge5\) and \(nq\ge5\).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which way does the 0.5 go?</h3><p><em>Widen the interval to include the boundary count: \(\ge60\to\ge59.5\), \(\le40\to\le40.5\).</em></p></div>
</div>`), anim("exp(-x^2/(2*s^2))/(s*sqrt(2*pi))", "s", { from: 0.6, to: 2.4, xMin: -6, xMax: 6, yMin: 0, yMax: 0.7, caption: "▶ The spread s = σ = √(npq). More trials → larger σ → the bell flattens and widens, yet its area stays 1. That widening normal is what the binomial bars settle into." })] },

  // ── 5.1 Sampling Techniques & Bias ──────────────────────────
  "5.1": { code: "5.1", title: "Sampling Techniques & Bias", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🎯 Sampling Techniques &amp; Bias</h1>
  <p><strong>Overview.</strong> Statistics generalizes from a <strong>sample</strong> to a <strong>population</strong>, so the sample must represent the whole. This lesson covers the standard sampling methods and — just as important — the biases that quietly wreck a study even when the sample is large.</p>
  <h2>📌 Key Terms &amp; Methods</h2>
  <p>A <strong>population</strong> is everyone of interest; a <strong>sample</strong> is the subset studied. A <strong>parameter</strong> describes the population; a <strong>statistic</strong> estimates it from the sample. Methods: <strong>simple random</strong> (everyone equally likely), <strong>stratified</strong> (sample each subgroup proportionally), <strong>systematic</strong> (every \(k\)-th), <strong>cluster</strong> (sample whole groups).</p>
  <h2>📌 Bias</h2>
  <p><strong>Sampling bias</strong> (some members can't be chosen), <strong>non-response/self-selection bias</strong> (only certain people reply), and <strong>measurement/response bias</strong> (leading questions, faulty tools) all distort results — and a bigger sample does <em>not</em> fix bias.</p>
  <h2>📌 Types of Data</h2>
  <p>Before analysing, classify the data along several axes: <strong>qualitative/categorical</strong> (labels) vs <strong>quantitative/numerical</strong> (numbers); within categorical, <strong>nominal</strong> (no order — eye colour) vs <strong>ordinal</strong> (ranked — satisfaction 1–5); within numerical, <strong>discrete</strong> (countable — siblings) vs <strong>continuous</strong> (measured — height). Also: <strong>primary</strong> (you collect it) vs <strong>secondary</strong> (existing source); <strong>experimental</strong> (a treatment is imposed) vs <strong>observational</strong> (measured as-is); <strong>microdata</strong> (individual records) vs <strong>aggregate</strong> (summarized totals). The classification decides which graphs and statistics are valid.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Classify the data</h3><p>Classify each variable fully: (a) eye colour, (b) body temperature, (c) a satisfaction rating 1–5, (d) number of siblings.</p><div class="solution"><div class="step"><strong>(a)</strong> qualitative, <strong>nominal</strong> (no natural order).</div><div class="step"><strong>(b)</strong> quantitative, <strong>continuous</strong> (measured).</div><div class="step"><strong>(c)</strong> qualitative/ordinal (ranked categories) — often treated as ordinal, not true numbers.</div><div class="step"><strong>(d)</strong> quantitative, <strong>discrete</strong> (a count).</div><em>Conclusion: the type dictates the tools — you can average (d) but not (a). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Stratified allocation</h3><p>A school has 2400 Grade 9s, 1800 Grade 10s, 1200 Grade 11s, and 600 Grade 12s (6000 total). Design a proportional stratified sample of 200.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Sample each grade in proportion: multiply 200 by each grade's share.</div><div class="step"><strong>Step 2:</strong> \(200\cdot\tfrac{2400}{6000}=80\), \(\tfrac{1800}{6000}\to60\), \(\tfrac{1200}{6000}\to40\), \(\tfrac{600}{6000}\to20\).</div><em>Conclusion: 80, 60, 40, 20 (sum 200). Each stratum is represented in its true proportion. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Experimental vs observational</h3><p>Study A randomly assigns patients to a new drug or a placebo and compares recovery. Study B compares recovery in people who <em>chose</em> to take a supplement vs those who didn't. Which can support a causal claim?</p><div class="solution"><div class="step"><strong>Study A (experimental):</strong> randomization balances confounders, so a difference can be attributed to the drug — supports causation.</div><div class="step"><strong>Study B (observational):</strong> the groups self-selected and may differ in health habits (confounders), so it shows association only.</div><em>Conclusion: only the randomized experiment supports cause and effect. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Spot every bias</h3><p>A magazine mails a survey to its subscribers, 5% respond, and the key question is "How much do you enjoy our award-winning magazine?" Identify the biases.</p><div class="solution"><div class="step"><strong>Sampling bias:</strong> only subscribers (fans) are polled — non-readers can't be chosen.</div><div class="step"><strong>Non-response bias:</strong> only 5% reply, likely the most enthusiastic.</div><div class="step"><strong>Response/measurement bias:</strong> "award-winning" is a leading phrase.</div><em>Conclusion: three biases compound — the result is worthless as an estimate of general opinion. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Cluster vs systematic sampling</h3><p>A researcher must survey a large university. Describe a <strong>cluster</strong> and a <strong>systematic</strong> sample, and give one advantage of the cluster method.</p><div class="solution"><div class="step"><strong>Cluster:</strong> randomly select a few whole lecture sections and survey <em>everyone</em> in them.</div><div class="step"><strong>Systematic:</strong> from an alphabetical list of all students, pick every 20th name (after a random start).</div><div class="step"><strong>Advantage of cluster:</strong> far cheaper and easier — you visit a few rooms instead of chasing scattered individuals.</div><em>Conclusion: both are random, but cluster trades a little precision for a lot of convenience. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Classify: (a) postal code, (b) exam score out of 100, (c) t-shirt size (S/M/L).</p><details><summary>View answer</summary><div class="solution"><div class="step">(a) qualitative/nominal; (b) quantitative/discrete; (c) qualitative/ordinal. <em>Answer: as shown.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A town of 9000 (4500 adults, 3000 teens, 1500 children) wants a stratified sample of 300. Give the allocation.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(300\cdot\tfrac{4500}{9000}=150\), teens 100, children 50. <em>Answer: 150, 100, 50.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>A pollster samples every 7th house on a street where every 7th house is a corner lot. Name the risk of this systematic sample.</p><details><summary>View answer</summary><div class="solution"><div class="step">The sampling interval aligns with a hidden periodic pattern, so every sampled house is a corner lot — a systematic bias. <em>Answer: periodicity aligns with the interval.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Why can't a very large sample overcome self-selection bias?</p><details><summary>View answer</summary><div class="solution"><div class="step">Bias shifts <em>who</em> is included, not how many; more biased responses just give a precise estimate of the wrong quantity. <em>Answer: size ≠ representativeness.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A restaurant leaves comment cards; only very happy or very angry diners fill them out. Name the bias.</p><details><summary>View answer</summary><div class="solution"><div class="step">Voluntary-response (self-selection) bias — the sample over-represents people with strong opinions. <em>Answer: voluntary-response bias.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Treating ordinal ratings as true numbers (averaging a 1–5 satisfaction scale can mislead).</li><li>Thinking a large sample removes bias.</li><li>Confusing stratified (proportional subgroups) with cluster (whole groups) sampling.</li><li>Claiming causation from an observational study.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Parameter vs statistic?</h3><p><em>A parameter describes the population; a statistic estimates it from a sample.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Does sample size fix bias?</h3><p><em>No — bias is about who's included, not how many.</em></p></div>
</div>`)] },

  // ── 5.2 Measures of Central Tendency ────────────────────────
  "5.2": { code: "5.2", title: "Measures of Central Tendency", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📍 Measures of Central Tendency</h1>
  <p><strong>Overview.</strong> The mean, median, and mode each summarize the "centre" of data differently. The key judgement is which to use: the mean is efficient but outlier-sensitive; the median resists outliers; the mode captures the most common value.</p>
  <h2>📌 The Three Measures</h2>
  <p><strong>Mean</strong> \(\bar x=\dfrac{\sum x}{n}\) (or a <strong>weighted</strong> mean for grouped/weighted data). <strong>Median</strong> = the middle value when ordered. <strong>Mode</strong> = the most frequent value. In a right-skewed set, mean > median; the median is the honest centre for skewed data (e.g. incomes).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: All three from a frequency table</h3><p>A survey of 20 households records the number of cars: value 1 (×3), 2 (×5), 3 (×8), 4 (×3), 5 (×1). Find the mean, median, and mode.</p><div class="solution"><div class="step"><strong>Mean:</strong> \(\dfrac{\sum fx}{\sum f}=\dfrac{1(3)+2(5)+3(8)+4(3)+5(1)}{20}=\dfrac{54}{20}=2.7\).</div><div class="step"><strong>Median:</strong> the 10th–11th values. Cumulative counts 3, 8, 16 — both land in the "3-car" group, so median \(=3\).</div><div class="step"><strong>Mode:</strong> the most frequent value, \(3\) (8 households).</div><em>Conclusion: mean 2.7, median 3, mode 3. Use \(\sum fx/\sum f\), not the raw list. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Find a missing value</h3><p>A student's four tests average 78. Three of the scores are 72, 85, and 80. Find the fourth.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Total needed \(=4\times78=312\).</div><div class="step"><strong>Step 2:</strong> Known sum \(=72+85+80=237\); fourth \(=312-237=75\).</div><em>Conclusion: 75. Work back from the mean to the total. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Combining two groups</h3><p>Class A has 20 students averaging 75; class B has 30 students averaging 82. Find the combined mean.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Total marks \(=20(75)+30(82)=1500+2460=3960\).</div><div class="step"><strong>Step 2:</strong> \(\dfrac{3960}{50}=79.2\).</div><em>Conclusion: 79.2 — <em>not</em> the simple average \(78.5\) of the two means, because the classes differ in size. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Grouped-data mean from class intervals</h3><p>Ages are grouped: 0–10 (4 people), 10–20 (10 people), 20–30 (6 people). Estimate the mean using interval midpoints.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Midpoints 5, 15, 25.</div><div class="step"><strong>Step 2:</strong> \(\dfrac{4(5)+10(15)+6(25)}{20}=\dfrac{20+150+150}{20}=16\).</div><em>Conclusion: ≈ 16. With only grouped data, midpoints stand in for the actual values. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: The outlier effect</h3><p>To the data 3, 7, 7, 9, 14 add the value 200. What happens to the mean vs the median?</p><div class="solution"><div class="step"><strong>Mean:</strong> jumps from 8 to \(\tfrac{240}{6}=40\).</div><div class="step"><strong>Median:</strong> moves only from 7 to \(\tfrac{7+9}{2}=8\).</div><em>Conclusion: the mean is dragged far up; the median barely moves — the median is <strong>resistant</strong> to outliers. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Five quizzes average 16. Four scores are 14, 18, 15, 20. Find the fifth.</p><details><summary>View answer</summary><div class="solution"><div class="step">Total \(5(16)=80\); known \(=67\); fifth \(=13\). <em>Answer: 13.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Marks 70, 85, 90 count for 20%, 30%, 50%. Find the weighted mean.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(0.2(70)+0.3(85)+0.5(90)=14+25.5+45=84.5\). <em>Answer: 84.5.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>Group X: 15 students, mean 60. Group Y: 25 students, mean 76. Find the combined mean.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\dfrac{15(60)+25(76)}{40}=\dfrac{900+1900}{40}=\dfrac{2800}{40}=70\). <em>Answer: 70.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>If every value in a data set is increased by 5, what happens to the mean and the median?</p><details><summary>View answer</summary><div class="solution"><div class="step">Both increase by exactly 5 (a shift moves the whole distribution). <em>Answer: each +5.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Six values have a mean of 20. A seventh value of 41 is added. Find the new mean.</p><details><summary>View answer</summary><div class="solution"><div class="step">Original sum \(6\times20=120\); new sum \(120+41=161\); new mean \(\tfrac{161}{7}=23\). <em>Answer: 23.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Averaging two group means directly instead of weighting by group size.</li><li>Forgetting to order the data (or use cumulative frequencies) before finding the median.</li><li>Using the plain mean when weights or frequencies apply.</li><li>Reporting the mean for heavily skewed data.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Mean or median?</h3><p><em>Median when outliers or skew are present; mean for roughly symmetric data.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: When is the mode best?</h3><p><em>For categorical data or when the most common value matters (e.g. best-selling size).</em></p></div>
</div>`)] },

  // ── 5.3 Measures of Spread ──────────────────────────────────
  "5.3": { code: "5.3", title: "Measures of Spread", blocks: [html(String.raw`<div class="lecture-box">
  <h1>↔️ Measures of Spread</h1>
  <p><strong>Overview.</strong> Two data sets can share a mean yet feel completely different — one tightly clustered, one wildly scattered. <strong>Spread</strong> captures that difference. The <strong>standard deviation</strong> is the workhorse: the typical distance of a value from the mean.</p>
  <h2>📌 The Measures</h2>
  <p><strong>Range</strong> = max − min (crude, outlier-sensitive). <strong>Variance</strong> \(\sigma^{2}=\dfrac{\sum (x-\mu)^{2}}{n}\) averages squared deviations. <strong>Standard deviation</strong> \(\sigma=\sqrt{\sigma^{2}}\) returns to the original units. Small \(\sigma\) = consistent; large \(\sigma\) = variable.</p>
  <h2>📌 The Computational Formula &amp; Transformations</h2>
  <p>A faster route to the variance is \(\sigma^{2}=\dfrac{\sum x^{2}}{n}-\mu^{2}\) (mean of squares minus square of the mean). Two useful facts: <strong>adding</strong> a constant to every value leaves \(\sigma\) unchanged (the spread doesn't move); <strong>multiplying</strong> every value by \(k\) multiplies \(\sigma\) by \(|k|\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Standard deviation by hand</h3><p>Find the (population) standard deviation of 4, 8, 6, 10, 7.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\mu=\tfrac{35}{5}=7\); deviations \(-3, 1, -1, 3, 0\); squares \(9, 1, 1, 9, 0\) (sum 20).</div><div class="step"><strong>Step 2:</strong> \(\sigma^{2}=\tfrac{20}{5}=4\Rightarrow\sigma=2\).</div><em>Conclusion: \(\sigma=2\) — the typical value sits about 2 units from the mean of 7. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: The computational formula</h3><p>Find the variance of 2, 4, 6, 8 using \(\sigma^{2}=\tfrac{\sum x^{2}}{n}-\mu^{2}\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\mu=5\); \(\sum x^{2}=4+16+36+64=120\).</div><div class="step"><strong>Step 2:</strong> \(\sigma^{2}=\tfrac{120}{4}-5^{2}=30-25=5\Rightarrow\sigma=\sqrt5\approx2.24\).</div><em>Conclusion: \(\sigma\approx2.24\). One pass for \(\sum x^{2}\) beats computing every deviation. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Effect of a transformation</h3><p>A data set has \(\sigma=6\). What is the new standard deviation if (a) 10 is added to every value, (b) every value is doubled?</p><div class="solution"><div class="step"><strong>(a) Shift by +10:</strong> spread is unchanged → \(\sigma=6\).</div><div class="step"><strong>(b) Scale by ×2:</strong> \(\sigma\) scales too → \(\sigma=12\).</div><em>Conclusion: shifts don't change \(\sigma\); scaling does. (Converting °C to °F, \(F=1.8C+32\), multiplies \(\sigma\) by 1.8.) ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Comparing consistency</h3><p>Machine A's fill weights are 500, 502, 498, 501, 499 g; Machine B's are 490, 510, 500, 480, 520 g. Both average 500 g — which is more consistent?</p><div class="solution"><div class="step"><strong>A:</strong> squared deviations \(0,4,4,1,1\) (sum 10) → \(\sigma_A=\sqrt{2}\approx1.4\) g.</div><div class="step"><strong>B:</strong> squared deviations \(100,100,0,400,400\) (sum 1000) → \(\sigma_B=\sqrt{200}\approx14.1\) g.</div><em>Conclusion: A is far more consistent (\(1.4\) vs \(14.1\) g), though the means are identical. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Standard deviation from a frequency table</h3><p>A quiz score of 2 occurs twice, 4 occurs three times, and 6 occurs five times (\(n=10\)). Find the population standard deviation.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Mean \(=\dfrac{2(2)+4(3)+6(5)}{10}=\dfrac{46}{10}=4.6\).</div><div class="step"><strong>Step 2:</strong> \(\sum fx^{2}=2^{2}(2)+4^{2}(3)+6^{2}(5)=8+48+180=236\), so \(E(X^{2})=23.6\).</div><div class="step"><strong>Step 3:</strong> \(\sigma^{2}=23.6-4.6^{2}=23.6-21.16=2.44\Rightarrow\sigma\approx1.56\).</div><em>Conclusion: ≈ 1.56. Weight each squared value by its frequency, then apply the computational formula. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Find the population standard deviation of 10, 12, 14, 16, 18.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\mu=14\); squares \(16,4,0,4,16\) (sum 40); \(\sigma=\sqrt{8}\approx2.83\). <em>Answer: ≈ 2.83.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Use the computational formula on 1, 3, 5, 7, 9.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\mu=5\); \(\sum x^2=1+9+25+49+81=165\); \(\sigma^2=33-25=8\); \(\sigma\approx2.83\). <em>Answer: ≈ 2.83.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3 — Challenge</h3><p>A data set has \(\mu=50,\ \sigma=8\). Each value is transformed by \(y=3x-10\). Find the new mean and standard deviation.</p><details><summary>View answer</summary><div class="solution"><div class="step">New mean \(=3(50)-10=140\); new \(\sigma=|3|\cdot8=24\) (the \(-10\) shift doesn't affect spread). <em>Answer: 140 and 24.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>What does \(\sigma=0\) tell you about a data set?</p><details><summary>View answer</summary><div class="solution"><div class="step">Every value equals the mean — no spread at all. <em>Answer: all values identical.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Find the population standard deviation of 6, 6, 6, 6, 16.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\mu=8\); deviations \(-2,-2,-2,-2,8\); squares \(4,4,4,4,64\) (sum 80); \(\sigma=\sqrt{16}=4\). <em>Answer: 4 — one outlier drives most of the spread.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Forgetting to square the deviations (or to take the final square root).</li><li>Thinking a shift (\(+c\)) changes \(\sigma\) — only scaling (\(\times k\)) does.</li><li>Reporting variance when the standard deviation (original units) is wanted.</li><li>Trusting the range alone — one outlier controls it.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why square the deviations?</h3><p><em>So positives and negatives don't cancel, and larger deviations count more.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What does \(\sigma\) mean?</h3><p><em>The typical distance of a data value from the mean.</em></p></div>
</div>`)] },

  // ── 5.4 Quartiles, Percentiles & Box Plots ──────────────────
  "5.4": { code: "5.4", title: "Quartiles, Percentiles & Box Plots", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📦 Quartiles, Percentiles &amp; Box Plots</h1>
  <p><strong>Overview.</strong> Quartiles cut ordered data into four equal parts, giving a five-number summary that resists outliers and drives the box plot. The interquartile range also provides a standard, objective test for what counts as an outlier.</p>
  <h2>📌 The Five-Number Summary &amp; IQR</h2>
  <p>Minimum, \(Q_1\) (median of the lower half), \(Q_2\) (the median), \(Q_3\) (median of the upper half), maximum. The <strong>interquartile range</strong> \(\text{IQR}=Q_3-Q_1\) holds the middle 50%. A value is an <strong>outlier</strong> if it lies below \(Q_1-1.5\,\text{IQR}\) or above \(Q_3+1.5\,\text{IQR}\).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Five-number summary (odd \(n\))</h3><p>Find the five-number summary and IQR of 3, 5, 7, 8, 12, 13, 14, 18, 21.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(n=9\), so \(Q_2=\) the 5th value \(=12\).</div><div class="step"><strong>Step 2:</strong> Exclude the median. Lower half {3,5,7,8} → \(Q_1=\tfrac{5+7}{2}=6\); upper half {13,14,18,21} → \(Q_3=\tfrac{14+18}{2}=16\).</div><div class="step"><strong>Step 3:</strong> Summary 3, 6, 12, 16, 21; IQR \(=16-6=10\).</div><em>Conclusion: IQR = 10. For odd \(n\), the median is in neither half. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: The outlier test with computed fences</h3><p>Test 4, 7, 8, 9, 10, 11, 13, 15, 40 for outliers.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(Q_2=10\); \(Q_1=\tfrac{7+8}{2}=7.5\), \(Q_3=\tfrac{13+15}{2}=14\); IQR \(=6.5\).</div><div class="step"><strong>Step 2:</strong> Fences: lower \(7.5-1.5(6.5)=-2.25\); upper \(14+1.5(6.5)=23.75\).</div><div class="step"><strong>Step 3:</strong> \(40>23.75\) → 40 is an outlier; nothing is below \(-2.25\).</div><em>Conclusion: 40 is the lone outlier. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: A percentile position</h3><p>In a ranked list of 20 scores, which position corresponds to the 80th percentile?</p><div class="solution"><div class="step">\(0.80\times20=16\) → the 80th percentile is at the 16th value (or the average of the 16th and 17th, by convention).</div><em>Conclusion: the 16th score. Percentiles locate a position, not a value. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Reading a box plot's skew</h3><p>A box plot has \(Q_1=25,\ Q_2=30,\ Q_3=55\) with a long right whisker. Describe the shape.</p><div class="solution"><div class="step">The median sits closer to \(Q_1\) than \(Q_3\) (the right box is wider), and the right whisker is long → <strong>right-skewed</strong>.</div><em>Conclusion: right skew. A box plot shows skew through the box halves and whisker lengths. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Interpret a full summary</h3><p>A distribution has min 10, \(Q_1=25\), median 40, \(Q_3=55\), max 100. Is 100 an outlier, and is the data skewed?</p><div class="solution"><div class="step"><strong>Step 1:</strong> IQR \(=55-25=30\); upper fence \(=55+1.5(30)=100\).</div><div class="step"><strong>Step 2:</strong> 100 is exactly at the fence — <em>not</em> beyond it, so not flagged as an outlier (borderline).</div><div class="step"><strong>Step 3:</strong> Lower half spans \(10\)–\(40=30\); upper half spans \(40\)–\(100=60\) → <strong>right-skewed</strong>.</div><em>Conclusion: 100 is borderline (not an outlier); the data is right-skewed. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Find the five-number summary of 2, 5, 6, 8, 9, 12, 15.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(Q_2=8\); lower {2,5,6}→\(Q_1=5\); upper {9,12,15}→\(Q_3=12\). Summary 2, 5, 8, 12, 15. <em>Answer: as shown.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>With \(Q_1=20,\ Q_3=32\), is 5 an outlier?</p><details><summary>View answer</summary><div class="solution"><div class="step">IQR 12; lower fence \(20-18=2\); \(5>2\) → not an outlier. <em>Answer: no.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>In a ranked list of 40 values, which position is the 90th percentile?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(0.90\times40=36\) → the 36th value. <em>Answer: 36th.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Test 12, 15, 17, 18, 20, 21, 45 for outliers.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(Q_2=18\); \(Q_1=15,\ Q_3=21\), IQR 6; upper fence \(21+9=30\); \(45>30\) → 45 is an outlier. <em>Answer: 45.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Why does the IQR resist outliers better than the range or the standard deviation?</p><details><summary>View answer</summary><div class="solution"><div class="step">The IQR uses only the middle 50% and ignores the extreme tails, where outliers live; the range and \(\sigma\) both react strongly to a single extreme value. <em>Answer: it discards the tails.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Not ordering the data first.</li><li>Including the median in both halves when finding \(Q_1,Q_3\) (for odd \(n\), exclude it).</li><li>Forgetting the \(1.5\times\) factor in the outlier fences.</li><li>Calling a value at the fence an outlier — it must be strictly beyond.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What's the IQR?</h3><p><em>\(Q_3-Q_1\) — the range of the middle 50% of the data.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: The outlier rule?</h3><p><em>Beyond \(Q_1-1.5\,\text{IQR}\) or \(Q_3+1.5\,\text{IQR}\).</em></p></div>
</div>`)] },

  // ── 5.5 Displaying & Describing Distributions ───────────────
  "5.5": { code: "5.5", title: "Displaying & Describing Distributions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📊 Displaying &amp; Describing Distributions</h1>
  <p><strong>Overview.</strong> A histogram turns raw numbers into a picture of a distribution's <strong>shape</strong>. Describing that shape — symmetric, skewed, unimodal, bimodal — and knowing how shape connects to the choice of centre is the core skill here.</p>
  <h2>📌 Histograms &amp; Shape</h2>
  <p>A <strong>histogram</strong> groups data into bins and plots frequency (or relative frequency = frequency ÷ total). Describe: <strong>symmetry</strong> vs <strong>skew</strong> (right-skew has a long right tail, and mean > median), <strong>modes</strong> (one peak = unimodal, two = bimodal), and <strong>spread/outliers</strong>.</p>
  <h2>📌 Choosing the Right Graph</h2>
  <p>The graph must match the <strong>data type</strong> (§5.1): <strong>categorical</strong> data → bar graph or circle (pie) graph; <strong>quantitative</strong> data → histogram, stem-and-leaf plot, or box plot. A histogram's bins are <em>ordered numbers</em> (bars touch); a bar graph's categories are not.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Skew from the mean–median gap</h3><p>A data set has mean 62 and median 55. What shape is it, and which measure of centre is more representative?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Mean > median → the long tail is on the <strong>right</strong> → right-skewed.</div><div class="step"><strong>Step 2:</strong> The median (55) better represents a typical value; the mean is pulled up by the tail.</div><em>Conclusion: right-skewed; report the median. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Relative and cumulative frequency</h3><p>Bins with frequencies 4, 10, 6 (\(n=20\)). Build the relative-frequency and cumulative-frequency columns.</p><div class="solution"><div class="step"><strong>Relative:</strong> \(\tfrac{4}{20}=0.20\), \(\tfrac{10}{20}=0.50\), \(\tfrac{6}{20}=0.30\) (sum 1).</div><div class="step"><strong>Cumulative:</strong> 4, 14, 20.</div><em>Conclusion: relative frequencies make different-sized data sets comparable; cumulative frequencies answer "how many at most X". ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Reading a stem-and-leaf plot</h3><p>A stem-and-leaf plot has 1 | 2 5 8&nbsp;&nbsp;&nbsp;2 | 0 3 3 7&nbsp;&nbsp;&nbsp;3 | 1 4. Find the median and range.</p><div class="solution"><div class="step"><strong>Step 1:</strong> The data is 12, 15, 18, 20, 23, 23, 27, 31, 34 (\(n=9\)).</div><div class="step"><strong>Step 2:</strong> Median = 5th value = 23; range \(=34-12=22\).</div><em>Conclusion: median 23, range 22. A stem-and-leaf keeps every original value visible. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Bimodal data</h3><p>A histogram of exam scores has two clear peaks around 55 and 85. What does this suggest, and why can the mean mislead?</p><div class="solution"><div class="step">Two peaks → <strong>bimodal</strong>, likely two subgroups (e.g. those who studied vs didn't).</div><div class="step">The mean would land in the sparse "valley" between the peaks — a value few students actually scored.</div><em>Conclusion: report the two groups separately, not one average. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Match the graph to the data</h3><p>Which display suits (a) students' favourite pizza topping, (b) the distribution of 200 heights?</p><div class="solution"><div class="step"><strong>(a)</strong> Toppings are <em>categorical</em> → a bar graph or pie chart (a histogram would be wrong — there's no numeric order).</div><div class="step"><strong>(b)</strong> Heights are <em>continuous</em> → a histogram (or box plot).</div><em>Conclusion: the data type dictates the graph. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Mean 40, median 48 — describe the skew.</p><details><summary>View answer</summary><div class="solution"><div class="step">Mean < median → left-skewed (long left tail). <em>Answer: left skew.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>8 of 25 data points fall in a bin. Find its relative frequency.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{8}{25}=0.32\). <em>Answer: 0.32.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A stem-and-leaf plot: 2 | 1 4 4&nbsp;&nbsp;&nbsp;3 | 0 2 5. Find the mode and median.</p><details><summary>View answer</summary><div class="solution"><div class="step">Data 21, 24, 24, 30, 32, 35: mode 24; median \(\tfrac{24+30}{2}=27\). <em>Answer: mode 24, median 27.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>For a strongly right-skewed distribution, which is larger — mean or median — and why?</p><details><summary>View answer</summary><div class="solution"><div class="step">The mean — the long right tail of large values pulls it above the median. <em>Answer: mean.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Would a histogram or a bar graph be correct for the data "students' countries of birth"? Explain.</p><details><summary>View answer</summary><div class="solution"><div class="step">A bar graph — country is categorical (nominal), with no numeric order, so a histogram (which needs ordered numeric bins) is inappropriate. <em>Answer: bar graph.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Confusing left- and right-skew (the tail names the direction).</li><li>Using a histogram for categorical data (that's a bar graph).</li><li>Reporting one mean for clearly bimodal data.</li><li>Ignoring how bin width distorts a histogram's impression.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Right-skew and the mean?</h3><p><em>The long right tail pulls the mean above the median.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What might bimodal data mean?</h3><p><em>Two distinct subgroups are mixed together.</em></p></div>
</div>`)] },

  // ── 5.6 The z-Score & Comparing Data ────────────────────────
  "5.6": { code: "5.6", title: "The z-Score & Comparing Data", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧮 The z-Score &amp; Comparing Data</h1>
  <p><strong>Overview.</strong> A <strong>z-score</strong> restates a value as its distance from the mean in standard deviations, which makes values from completely different data sets comparable and — for normal data — convertible to percentiles.</p>
  <h2>📌 The z-Score</h2>
  <p style="text-align:center;">\( z=\dfrac{x-\mu}{\sigma} \)</p>
  <p>Positive \(z\) is above the mean, negative below; \(|z|\) is how many standard deviations away. Because it's unitless, a \(z\) from a maths test and a \(z\) from a swim time can be compared directly.</p>
  <h2>📌 Margin of Error &amp; Confidence Level</h2>
  <p>A sample statistic (like a poll's proportion) is an estimate, reported as "\(52\%\) <strong>± a margin of error</strong>, at a given <strong>confidence level</strong>" — e.g. "accurate to within 3 percentage points, 19 times out of 20" (a 95% confidence level). Two facts matter: a <strong>larger sample</strong> shrinks the margin of error, and the margin is roughly proportional to \(\dfrac{1}{\sqrt{n}}\) — so to <em>halve</em> the margin you must <strong>quadruple</strong> the sample size.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Compute and interpret a z-score</h3><p>Find the z-score of 88 in a set with \(\mu=75,\ \sigma=6\), and say roughly what percentile it is (normal data).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(z=\dfrac{88-75}{6}=\dfrac{13}{6}\approx2.17\).</div><div class="step"><strong>Step 2:</strong> \(\Phi(2.17)\approx0.985\) → about the 98th percentile.</div><em>Conclusion: ≈ 2.17, top ~2%. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Compare across different tests</h3><p>Student X scored 82 (\(\mu=78,\ \sigma=4\)); Student Y scored 91 (\(\mu=85,\ \sigma=9\)). Who did relatively better?</p><div class="solution"><div class="step">X: \(z=\tfrac{82-78}{4}=1.0\). Y: \(z=\tfrac{91-85}{9}\approx0.67\).</div><em>Conclusion: X ranks higher relative to their class (\(z=1.0>0.67\)), despite Y's larger raw mark. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Back out a value from a z-score</h3><p>A value has \(z=2\) in a set with \(\mu=60,\ \sigma=5\). Find the value.</p><div class="solution"><div class="step">\(x=\mu+z\sigma=60+2(5)=70\).</div><em>Conclusion: 70. Rearranging the z-formula recovers the raw value. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Interpreting a poll's margin of error</h3><p>A poll of 1000 people finds 52% support, with a margin of error of ±3%, 19 times out of 20. What can you conclude about majority support?</p><div class="solution"><div class="step"><strong>Step 1:</strong> The 95% confidence interval is \(52\%\pm3\%=[49\%,\ 55\%]\).</div><div class="step"><strong>Step 2:</strong> Since 49% is below 50%, the interval includes "no majority" — the lead is <em>within</em> the margin of error.</div><em>Conclusion: it's a statistical tie; you cannot confidently claim majority support. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Sample size and the margin of error</h3><p>A survey of 600 people has a margin of error of ±4%. Roughly how many people are needed to cut the margin to ±2%?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Margin \(\propto\dfrac{1}{\sqrt{n}}\); halving the margin requires \(4\times\) the sample.</div><div class="step"><strong>Step 2:</strong> \(4\times600=2400\).</div><em>Conclusion: ≈ 2400 people. Precision is expensive — each doubling of accuracy needs quadruple the data. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Find the z-score of 64 when \(\mu=70,\ \sigma=3\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(z=\tfrac{64-70}{3}=-2\). <em>Answer: −2.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A value has \(z=-1.5\) with \(\mu=40,\ \sigma=8\). Find the value.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(40+(-1.5)(8)=28\). <em>Answer: 28.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Test A: 90 (\(\mu=80,\ \sigma=5\)); Test B: 85 (\(\mu=70,\ \sigma=10\)). Which is the stronger result?</p><details><summary>View answer</summary><div class="solution"><div class="step">A: \(z=2.0\); B: \(z=1.5\). A is stronger. <em>Answer: Test A.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A poll reports 47% support with a margin of error of ±3.5%, 19 times out of 20. Could the true level of support actually exceed 50%?</p><details><summary>View answer</summary><div class="solution"><div class="step">The interval is \([43.5\%,\ 50.5\%]\); since 50.5% > 50%, a slim majority is plausible — the result doesn't rule it out. <em>Answer: yes, it's possible.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A survey of 400 has a margin of error of ±5%. Roughly what sample size gives ±2.5%?</p><details><summary>View answer</summary><div class="solution"><div class="step">Halving the margin needs \(4\times\) the sample: \(4\times400=1600\). <em>Answer: ≈ 1600.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Comparing raw scores across different tests instead of z-scores.</li><li>Dropping the sign of a below-mean z-score, or forgetting to invert (\(x=\mu+z\sigma\)).</li><li>Reading a poll's headline number without its margin of error (a lead inside the margin is a tie).</li><li>Thinking doubling the sample halves the margin — it takes \(4\times\) the sample.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Why use a z-score to compare?</h3><p><em>It removes units and scale, so different distributions line up on one standard axis.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: How do I get a value from a z-score?</h3><p><em>\(x=\mu+z\sigma\).</em></p></div>
</div>`)] },

  // ── 6.1 Scatter Plots & Correlation ─────────────────────────
  "6.1": { code: "6.1", title: "Scatter Plots & Correlation", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔵 Scatter Plots &amp; Correlation</h1>
  <p><strong>Overview.</strong> A <strong>scatter plot</strong> is the first look at paired data — one variable against another. Reading it means naming which variable explains which, then describing the relationship's <strong>direction</strong>, <strong>form</strong>, and <strong>strength</strong> before any number is computed.</p>
  <h2>📌 The Vocabulary</h2>
  <p>The <strong>explanatory</strong> (independent) variable goes on the \(x\)-axis; the <strong>response</strong> (dependent) variable on the \(y\)-axis. Describe the plot by <strong>direction</strong> (positive/negative/none), <strong>form</strong> (linear/curved), and <strong>strength</strong> (how tightly the points follow the pattern). Watch for <strong>outliers</strong> that don't fit.</p>
  <h2>📌 Contingency (Two-Way) Tables</h2>
  <p>When <em>both</em> variables are categorical, a scatter plot doesn't apply — instead use a <strong>contingency table</strong> that cross-tabulates the counts. Comparing <strong>conditional proportions</strong> across rows (or columns) reveals whether the two variables are associated: if the proportion changes from row to row, there's an association.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Explanatory vs response</h3><p>A study relates hours studied to test score. Identify the variables and which axis each goes on.</p><div class="solution"><div class="step">Hours studied is the <strong>explanatory</strong> variable (\(x\)-axis); test score is the <strong>response</strong> (\(y\)-axis) — we ask whether studying predicts the score, not the reverse.</div><em>Conclusion: hours on \(x\), score on \(y\). ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Describe a scatter fully</h3><p>Points fall from upper-left to lower-right, clustering tightly around a straight line, with one point far below. Describe direction, form, and strength.</p><div class="solution"><div class="step"><strong>Direction:</strong> negative; <strong>form:</strong> linear; <strong>strength:</strong> strong (tight cluster).</div><div class="step">The single far-below point is an <strong>outlier</strong> that would weaken the measured correlation.</div><em>Conclusion: strong negative linear, with one outlier. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: A contingency table</h3><p>Of 100 people surveyed: among 50 men, 30 prefer coffee and 20 tea; among 50 women, 20 prefer coffee and 30 tea. Is drink preference associated with gender?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(\text{coffee}\mid\text{man})=\tfrac{30}{50}=0.60\).</div><div class="step"><strong>Step 2:</strong> \(P(\text{coffee}\mid\text{woman})=\tfrac{20}{50}=0.40\).</div><div class="step"><strong>Step 3:</strong> The conditional proportions differ (0.60 vs 0.40), so preference <strong>is</strong> associated with gender.</div><em>Conclusion: association exists — equal proportions would mean none. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Estimate \(r\) from a scatter</h3><p>A scatter of height vs shoe size rises steadily with points hugging a line. Estimate the sign and rough size of \(r\).</p><div class="solution"><div class="step">Rising → positive; tight → strong. So \(r\) is close to \(+1\), roughly \(0.8\)–\(0.95\).</div><em>Conclusion: a strong positive \(r\). The scatter's tightness estimates \(|r|\) before any calculation. ✓</em></div>
    ${gframe([], { title: "A tight rising scatter → strong positive r", zoom: 90, zoomY: 38, ox: -270, oy: 152, labels: [{ x: 1, y: 2, t: "", c: "#2563a0" }, { x: 2, y: 3, t: "", c: "#2563a0" }, { x: 3, y: 5, t: "", c: "#2563a0" }, { x: 4, y: 6, t: "", c: "#2563a0" }, { x: 5, y: 7, t: "", c: "#2563a0" }] })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 5: Strong pattern, weak correlation</h3><p>A scatter forms a clear symmetric U-shape. What is its linear correlation, and what does that reveal about \(r\)?</p><div class="solution"><div class="step">A U-shape has a strong <em>curved</em> relationship but no consistent up-or-down linear trend, so \(r\approx0\).</div><em>Conclusion: \(r\approx0\) despite an obvious pattern — \(r\) measures only <strong>linear</strong> association, so always look at the plot. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Temperature vs ice-cream sales — name the explanatory and response variables.</p><details><summary>View answer</summary><div class="solution"><div class="step">Explanatory = temperature; response = sales. <em>Answer: as shown.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>In the Example 3 table, find \(P(\text{tea}\mid\text{woman})\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\tfrac{30}{50}=0.60\). <em>Answer: 0.60.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Points are scattered with no trend at all. What is the approximate value of \(r\)?</p><details><summary>View answer</summary><div class="solution"><div class="step">\(r\approx0\) (no linear relationship). <em>Answer: ≈ 0.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A contingency table shows \(P(\text{pass}\mid\text{tutored})=0.8\) and \(P(\text{pass}\mid\text{not tutored})=0.8\). Is passing associated with tutoring?</p><details><summary>View answer</summary><div class="solution"><div class="step">No — the conditional proportions are equal, so the two variables are <em>not</em> associated. <em>Answer: no association.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Why can an outlier make a genuinely strong relationship look weak?</p><details><summary>View answer</summary><div class="solution"><div class="step">A point far off the trend inflates the scatter around the line, lowering \(|r|\) even though most points follow the pattern tightly. <em>Answer: it inflates the spread.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Putting the response variable on the \(x\)-axis.</li><li>Trying to make a scatter plot from two categorical variables (use a contingency table).</li><li>Reading equal conditional proportions as an association (equal = none).</li><li>Calling a curved pattern "no relationship".</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What three things describe a scatter?</h3><p><em>Direction, form, and strength (plus any outliers).</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which variable goes where?</h3><p><em>Explanatory on \(x\), response on \(y\).</em></p></div>
</div>`)] },

  // ── 6.3 The Coefficient of Determination & Prediction ───────
  "6.3": { code: "6.3", title: "The Coefficient of Determination & Prediction", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📈 The Coefficient of Determination &amp; Prediction</h1>
  <p><strong>Overview.</strong> Once you have a line of best fit, two questions follow: how <em>good</em> is the fit, and how far can you trust its predictions? The <strong>coefficient of determination</strong> \(r^{2}\) answers the first; the interpolation/extrapolation distinction answers the second.</p>
  <h2>📌 \(r^{2}\) — Variation Explained</h2>
  <p>\(r^{2}\) is the square of the correlation coefficient, and it gives the <strong>proportion of the variation in \(y\) explained by the linear relationship with \(x\)</strong>. If \(r=0.8\), then \(r^{2}=0.64\): 64% of the variation is explained, 36% is not.</p>
  <h2>📌 Residuals, Interpolation &amp; Extrapolation</h2>
  <p>A <strong>residual</strong> = observed \(-\) predicted; a good line has small, patternless residuals. <strong>Interpolation</strong> (predicting inside the data range) is reliable; <strong>extrapolation</strong> (outside it) is risky because the pattern may not continue.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Interpreting \(r^{2}\)</h3><p>A regression of exam score on hours studied has \(r=0.8\). What does \(r^{2}\) tell you?</p><div class="solution"><div class="step">\(r^{2}=0.64\): 64% of the variation in scores is explained by hours studied; the other 36% is due to everything else (aptitude, sleep, luck).</div><em>Conclusion: 64% explained. \(r^{2}\) is a "proportion of variation", not "percent of points on the line". ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: A residual</h3><p>A line of best fit is \(\hat y=0.9x+1.3\). At \(x=3\) the observed value is 5. Find the residual.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Predicted \(\hat y=0.9(3)+1.3=4.0\).</div><div class="step"><strong>Step 2:</strong> Residual \(=\text{observed}-\text{predicted}=5-4.0=+1.0\).</div><em>Conclusion: +1.0 — the point sits one unit above the line. ✓</em></div>
    ${gframe(["y = 0.9*x + 1.3"], { title: "ŷ = 0.9x + 1.3 — residual at (3,5) is +1", zoom: 90, zoomY: 38, ox: -270, oy: 152, labels: [{ x: 3, y: 5, t: "(3,5) observed", c: "#a3327a" }, { x: 3, y: 4, t: "(3,4) predicted", c: "#3b7d3b" }] })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 3: Predict — and label the risk</h3><p>Sales vs ad-spend (in \$1000s) over the range \(x=0\) to \(20\) fit \(\hat y=3x+12\). Predict sales at \(x=5\) and at \(x=40\), and label each.</p><div class="solution"><div class="step"><strong>\(x=5\):</strong> \(\hat y=3(5)+12=27\) — <strong>interpolation</strong> (inside 0–20), so reliable.</div><div class="step"><strong>\(x=40\):</strong> \(\hat y=3(40)+12=132\) — <strong>extrapolation</strong> (double the data range), so treat with caution; the linear trend may break down.</div><em>Conclusion: 27 (safe) and 132 (risky). Always flag which side of the data range a prediction is on. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Recover \(r\) from \(r^{2}\)</h3><p>A downward-sloping scatter has \(r^{2}=0.64\). Find \(r\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(r=\pm\sqrt{0.64}=\pm0.8\).</div><div class="step"><strong>Step 2:</strong> The scatter slopes <em>down</em>, so \(r\) is negative: \(r=-0.8\).</div><em>Conclusion: \(r=-0.8\). \(r^{2}\) loses the sign — restore it from the direction of the scatter. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Residual plots reveal a bad fit</h3><p>A line is fit to some data and the residuals, plotted against \(x\), form a clear U-shape rather than random scatter. What does this mean?</p><div class="solution"><div class="step">A pattern in the residuals means the line has missed real structure — the true relationship is <strong>curved</strong>, so a non-linear model (§6.4) would fit better.</div><em>Conclusion: a patterned residual plot signals the wrong model, even if \(r^{2}\) looks decent. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>\(r=0.9\). Find \(r^{2}\) and interpret it.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(r^{2}=0.81\) → 81% of the variation is explained. <em>Answer: 0.81.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>A line predicts \(\hat y=2x+1\). At \(x=4\), the observed \(y=11\). Find the residual.</p><details><summary>View answer</summary><div class="solution"><div class="step">Predicted 9; residual \(=11-9=+2\). <em>Answer: +2.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Using \(\hat y=3x+12\) (data range 0–20), predict at \(x=8\) and state whether it's interpolation or extrapolation.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(\hat y=36\); \(x=8\) is inside 0–20 → interpolation (reliable). <em>Answer: 36, interpolation.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>An upward-sloping scatter has \(r^{2}=0.36\). Find \(r\).</p><details><summary>View answer</summary><div class="solution"><div class="step">\(r=+\sqrt{0.36}=+0.6\) (positive, since the scatter rises). <em>Answer: +0.6.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>A model has \(r^{2}=0.96\). Does that justify predicting 30 years beyond the data?</p><details><summary>View answer</summary><div class="solution"><div class="step">No — a high \(r^{2}\) measures fit <em>within</em> the observed range; it says nothing about whether the trend continues far outside it. <em>Answer: no.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Confusing \(r\) with \(r^{2}\), or losing the sign when taking \(\sqrt{r^{2}}\).</li><li>Reading \(r^{2}\) as "percent of points on the line" (it's percent of <em>variation</em>).</li><li>Trusting extrapolated predictions because \(r^{2}\) is high.</li><li>Ignoring a patterned residual plot that signals a non-linear relationship.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What does \(r^{2}\) measure?</h3><p><em>The fraction of the variation in \(y\) explained by the linear model.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Interpolate or extrapolate?</h3><p><em>Trust interpolation (inside the data); be wary of extrapolation (outside it).</em></p></div>
</div>`)] },

  // ── 6.4 Non-Linear Regression & Modelling ───────────────────
  "6.4": { code: "6.4", title: "Non-Linear Regression & Modelling", blocks: [html(String.raw`<div class="lecture-box">
  <h1>📉 Non-Linear Regression &amp; Modelling</h1>
  <p><strong>Overview.</strong> When a scatter curves, a straight line is the wrong tool. Recognizing the <em>shape</em> of the data points you to the right model — quadratic, exponential, or power — and \(r^{2}\) (with a look at the residuals) helps you compare candidates.</p>
  <h2>📌 Matching Shape to Model</h2>
  <p><strong>Quadratic</strong>: a single arch (up-then-down, or a bowl) — projectile height, area vs side. <strong>Exponential</strong>: rapid, accelerating growth or decay by a constant factor — populations, compound interest, radioactive decay. <strong>Power</strong>: a curve through the origin flattening or steepening. Fit each, then compare \(r^{2}\) and residual patterns.</p>
  <h2>📌 First &amp; Second Differences</h2>
  <p>For equally spaced \(x\)-values, the pattern of differences names the model: <strong>constant first differences</strong> → linear; <strong>constant second differences</strong> → quadratic; a <strong>constant ratio</strong> between terms → exponential.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Constant ratio → exponential</h3><p>Data at \(x=0,1,2,3\): 5, 10, 20, 40. Identify the model and predict \(x=4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Ratios \(\tfrac{10}{5}=\tfrac{20}{10}=\tfrac{40}{20}=2\) — constant → exponential \(y=5(2)^{x}\).</div><div class="step"><strong>Step 2:</strong> At \(x=4\): \(y=5(2)^{4}=80\).</div><em>Conclusion: exponential; next value 80. ✓</em></div>
    ${gframe(["y = 5*2^x"], { title: "y = 5·2ˣ — exponential growth (constant ratio 2)", zoom: 128, zoomY: 4, ox: -256, oy: 160 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 2: Constant second differences → quadratic</h3><p>Data: 1, 4, 9, 16, 25. Which model?</p><div class="solution"><div class="step"><strong>First differences:</strong> 3, 5, 7, 9 (not constant → not linear).</div><div class="step"><strong>Second differences:</strong> 2, 2, 2 (constant) → <strong>quadratic</strong>. (Indeed \(y=x^{2}\).)</div><em>Conclusion: quadratic. Second differences catch curvature a ratio test would miss. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: A projectile</h3><p>Height vs time rises to a peak then falls symmetrically. Which model, and why not exponential?</p><div class="solution"><div class="step">A single symmetric arch that comes back down → <strong>quadratic</strong>. Exponential growth never turns around, so it can't model a projectile.</div><em>Conclusion: quadratic. ✓</em></div>
    ${gframe(["y = -(x-3)^2 + 5"], { title: "A projectile's height — a single arch (quadratic)", zoom: 100, zoomY: 48, ox: -300, oy: 120 })}
  </div>
  <div class="example-box" style="${EX}"><h3>Example 4: A percentage-growth model</h3><p>A town of 200 people grows 5% per year. Write the model and find the population after 3 years.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Growth by a constant factor \(1.05\) → exponential \(P=200(1.05)^{t}\).</div><div class="step"><strong>Step 2:</strong> \(P(3)=200(1.05)^{3}=200(1.157625)\approx231.5\).</div><em>Conclusion: ≈ 232 people. Percentage change signals an exponential model. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Comparing models</h3><p>A linear fit gives \(r^{2}=0.90\); an exponential fit gives \(r^{2}=0.99\). Which is better, and what else should you check?</p><div class="solution"><div class="step">The exponential explains 99% vs 90% of the variation. But also check the <strong>residual plots</strong> (the better model has no leftover pattern) and whether the model makes physical sense.</div><em>Conclusion: prefer the exponential, after confirming its residuals are patternless. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Data: 3, 6, 12, 24, 48. Linear, quadratic, or exponential?</p><details><summary>View answer</summary><div class="solution"><div class="step">Constant ratio ×2 → exponential. <em>Answer: exponential.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Data: 2, 5, 8, 11, 14. Which model?</p><details><summary>View answer</summary><div class="solution"><div class="step">Constant first difference +3 → linear. <em>Answer: linear.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Data: 2, 6, 12, 20, 30. Which model? (Use differences.)</p><details><summary>View answer</summary><div class="solution"><div class="step">First differences 4, 6, 8, 10; second differences constant at 2 → quadratic. <em>Answer: quadratic.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A \$1000 investment earns 8% per year, compounded annually. Write the model and find its value after 5 years.</p><details><summary>View answer</summary><div class="solution"><div class="step">\(A=1000(1.08)^{t}\); \(A(5)=1000(1.08)^{5}\approx\$1469.33\). <em>Answer: ≈ \$1469.33.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Two competing models both give \(r^{2}=0.97\). What should decide between them?</p><details><summary>View answer</summary><div class="solution"><div class="step">The residual plots (no leftover pattern) and whether the model fits the context and extrapolates sensibly — not \(r^{2}\) alone. <em>Answer: residuals &amp; context.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Fitting a line to obviously curved data.</li><li>Confusing constant differences (linear) with constant ratios (exponential).</li><li>Forgetting second differences catch a quadratic when first differences aren't constant.</li><li>Choosing a model on \(r^{2}\) alone, ignoring residuals and context.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Linear vs exponential — the tell?</h3><p><em>Constant differences → linear; constant ratios → exponential.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Is the highest \(r^{2}\) always best?</h3><p><em>Usually, but check the residual pattern and whether the model fits the context.</em></p></div>
</div>`), anim("b^x", "b", { from: 1.15, to: 3, xMin: -1, xMax: 5, yMin: 0, yMax: 12, caption: "▶ One family, y = bˣ. Sweeping the base b changes how fast it climbs — a steeper curve is a larger growth ratio. Linear data would never bend like this; that curvature is the fingerprint of an exponential model." })] },

  // ── 6.5 Correlation vs Causation ────────────────────────────
  "6.5": { code: "6.5", title: "Correlation vs Causation", blocks: [html(String.raw`<div class="lecture-box">
  <h1>⚠️ Correlation vs Causation</h1>
  <p><strong>Overview.</strong> This is the single most important idea in data management: a strong correlation, however tight, does <strong>not</strong> prove that one variable causes the other. Understanding <em>why</em> — and what would actually establish causation — protects you from the most common statistical error in the real world.</p>
  <h2>📌 Why Correlation ≠ Causation</h2>
  <p>Two correlated variables might be linked because (a) one really does cause the other, (b) a hidden <strong>confounding (lurking) variable</strong> drives both, (c) the causation runs the <em>other</em> way (reverse causation), or (d) it's pure coincidence. Only a well-designed <strong>controlled experiment</strong> — randomly assigning the treatment — can support a causal claim.</p>
  <h2>📌 How Statistics Mislead in the Media</h2>
  <p>Even correct numbers can deceive. Watch for a <strong>truncated \(y\)-axis</strong> (starting above 0 to exaggerate a small change), a <strong>causal claim from a weak or observational correlation</strong>, <strong>cherry-picked</strong> time ranges, and headline percentages with no sample size or source. Assessing validity means asking: who collected the data, how, on whom, and does the conclusion overreach?</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: The classic confounder</h3><p>Ice-cream sales correlate strongly with drownings. Does ice cream cause drowning?</p><div class="solution"><div class="step">No — <strong>hot weather</strong> drives both ice-cream sales and swimming (hence drownings). Weather is the lurking variable.</div><em>Conclusion: a <strong>common cause</strong>, not causation. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: A lifestyle confounder</h3><p>A study finds coffee drinkers live longer. Should everyone drink coffee?</p><div class="solution"><div class="step">Not necessarily — coffee drinkers may differ in income, diet, or activity level, any of which could drive longevity. The study is observational, so it can't isolate coffee.</div><em>Conclusion: unaccounted confounders block a causal claim. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Reverse causation</h3><p>Cities with more police officers report more crime. Do police cause crime?</p><div class="solution"><div class="step">The arrow likely runs the other way — high-crime cities <em>hire</em> more police. This is reverse causation.</div><em>Conclusion: correlation doesn't tell you the direction of any effect. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A misleading graph</h3><p>A headline reads "Big Increase in Profits!" over a bar chart whose \(y\)-axis starts at \$17 billion and rises to \$23 billion, making the bars look to triple. Profits actually went from \$20.1B to \$20.4B. What's the distortion?</p><div class="solution"><div class="step"><strong>Step 1:</strong> The truncated axis (starting at 17, not 0) magnifies a tiny change.</div><div class="step"><strong>Step 2:</strong> The real increase is \(\tfrac{20.4-20.1}{20.1}\approx1.5\%\) — modest, not "big".</div><em>Conclusion: the graph is technically accurate but visually deceptive; redraw with the axis from 0. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Establishing cause</h3><p>How could researchers actually show a drug lowers blood pressure?</p><div class="solution"><div class="step">A <strong>randomized controlled experiment</strong>: randomly assign patients to drug or placebo and compare. Randomization spreads confounders evenly, so a difference can be attributed to the drug.</div><em>Conclusion: only a controlled experiment supports causation — not an observational correlation. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Shoe size correlates with reading ability in children. Name the confounder.</p><details><summary>View answer</summary><div class="solution"><div class="step">Age — older children have bigger feet <em>and</em> read better. <em>Answer: age.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Name the four possible reasons two variables can be correlated.</p><details><summary>View answer</summary><div class="solution"><div class="step">Direct cause, common cause (confounder), reverse cause, coincidence. <em>Answer: as listed.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>An ad claims "9 out of 10 dentists recommend our toothpaste." List two questions you'd ask to assess its validity.</p><details><summary>View answer</summary><div class="solution"><div class="step">How many dentists were asked (sample size)? Who funded the study, and exactly what were they asked (bias / question wording)? <em>Answer: sample size &amp; source/wording.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>A graph's \(y\)-axis runs from 95 to 100 to show a "dramatic" rise in a satisfaction score from 96 to 98. Why is this misleading, and how should it be drawn?</p><details><summary>View answer</summary><div class="solution"><div class="step">The truncated axis exaggerates a 2-point change; drawn from 0 (or 0–100) the rise looks small, as it is. <em>Answer: truncated axis; start at 0.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Why does randomization in an experiment help establish causation?</p><details><summary>View answer</summary><div class="solution"><div class="step">It distributes confounding variables evenly across the treatment and control groups, so any difference in outcome can be attributed to the treatment. <em>Answer: it balances confounders.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Claiming causation from an observational correlation.</li><li>Overlooking a lurking variable, or assuming the causal arrow's "obvious" direction.</li><li>Trusting a graph without checking whether its axis starts at 0.</li><li>Accepting a headline statistic with no sample size or source.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Does a high \(r\) prove causation?</h3><p><em>No — it only shows association; a confounder, reverse causation, or coincidence may explain it.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: What establishes causation?</h3><p><em>A randomized controlled experiment, not an observational correlation.</em></p></div>
</div>`)] },

  // ── 7.1 Designing the Study ─────────────────────────────────
  "7.1": { code: "7.1", title: "Designing the Study", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🧭 Designing the Study</h1>
  <p><strong>Overview.</strong> The culminating investigation begins with design. A vague question yields a worthless study; a sharp, measurable one makes every later step possible. This lesson turns curiosity into a researchable question with clear variables, a hypothesis, and an appropriate design.</p>
  <h2>📌 From Curiosity to a Researchable Question</h2>
  <p>A good question is <strong>specific, measurable, and answerable with data</strong>. Identify the <strong>explanatory</strong> and <strong>response</strong> variables, state a <strong>hypothesis</strong> (a testable prediction), and choose a <strong>design</strong>: a <em>survey</em> (measure as-is), an <em>observational study</em> (compare existing groups), or an <em>experiment</em> (impose a treatment — the only design that can show causation).</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Sharpen the question</h3><p>Turn "Does sleep matter?" into a researchable question.</p><div class="solution"><div class="step">"Among Grade 12 students, is more nightly sleep associated with higher test scores?" — specific population, measurable variables.</div><em>Conclusion: now testable. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Variables &amp; hypothesis</h3><p>Identify the variables and a hypothesis for the sleep study.</p><div class="solution"><div class="step">Explanatory: hours of sleep; response: test score. Hypothesis: "More sleep is associated with higher scores."</div><em>Conclusion: variables and prediction stated. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Choose a design</h3><p>Which design would let you claim sleep <em>causes</em> better scores?</p><div class="solution"><div class="step">Only an <strong>experiment</strong> (randomly assign sleep amounts) — a survey or observational study can show correlation but not causation.</div><em>Conclusion: experiment for causation. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Feasibility check</h3><p>Why might the sleep <em>experiment</em> be impractical, pushing you to an observational study?</p><div class="solution"><div class="step">Controlling students' sleep is ethically and practically hard, so you'd observe self-reported sleep instead — accepting that confounders limit causal claims.</div><em>Conclusion: design is a trade-off. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Identify and control a confounder</h3><p>A proposed study compares test scores of students who drink energy drinks vs those who don't. Name a likely confounder and how a stronger design would handle it.</p><div class="solution"><div class="step"><strong>Confounder:</strong> sleep or study habits — heavy energy-drink users may sleep less or cram, which affects scores independently of the drink.</div><div class="step"><strong>Control:</strong> a randomized experiment (randomly assign who drinks) balances such confounders across groups; if that's impossible, at least measure and adjust for sleep.</div><em>Conclusion: name the confounder, then design it out. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Rewrite "Is exercise good?" as a researchable question.</p><details><summary>View answer</summary><div class="solution"><div class="step">E.g. "Among adults 30–40, is weekly exercise time associated with resting heart rate?" <em>Answer: specific &amp; measurable.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Name the explanatory and response variables in "Does screen time affect sleep?"</p><details><summary>View answer</summary><div class="solution"><div class="step">Explanatory = screen time; response = hours of sleep. <em>Answer: as shown.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Design an <em>experiment</em> to test whether background music improves memory recall.</p><details><summary>View answer</summary><div class="solution"><div class="step">Randomly assign participants to "music" or "silence", give both the same recall task under identical conditions, and compare mean scores. <em>Answer: randomized two-group experiment.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Why can an observational study never fully establish causation?</p><details><summary>View answer</summary><div class="solution"><div class="step">Its groups self-select and differ in uncontrolled ways (confounders), so an observed difference can't be attributed solely to the explanatory variable. <em>Answer: confounders.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Why should you state the hypothesis <em>before</em> collecting data?</p><details><summary>View answer</summary><div class="solution"><div class="step">It commits you to what you're testing and how you'll measure it, preventing cherry-picking a "finding" from the data after the fact. <em>Answer: avoids post-hoc bias.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>A question too vague to measure.</li><li>No stated hypothesis, or forming it after seeing the data.</li><li>Choosing a design that can't answer the question (e.g. a survey for a causal claim).</li><li>Ignoring an obvious confounder at the design stage.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What makes a question researchable?</h3><p><em>It's specific, measurable, and answerable with data.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Which design shows causation?</h3><p><em>Only a controlled, randomized experiment.</em></p></div>
</div>`)] },

  // ── 7.2 Collecting & Managing Data ──────────────────────────
  "7.2": { code: "7.2", title: "Collecting & Managing Data", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🗂️ Collecting &amp; Managing Data</h1>
  <p><strong>Overview.</strong> A study is only as trustworthy as its data. This lesson covers where data comes from (primary vs secondary), how to clean and organize it, and the ethics of collecting information — especially from people.</p>
  <h2>📌 Sources, Cleaning &amp; Ethics</h2>
  <p><strong>Primary</strong> data you collect yourself (surveys, experiments); <strong>secondary</strong> data comes from an existing source (Statistics Canada, a database). <strong>Cleaning</strong> handles missing values, duplicates, obvious errors, and inconsistent formats. <strong>Ethics</strong>: informed consent, privacy/anonymization, honest reporting, and citing sources.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Primary or secondary?</h3><p>You download census tables to study income. Which type of data?</p><div class="solution"><div class="step">Secondary — collected by someone else (the census).</div><em>Conclusion: secondary data. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: Cleaning</h3><p>A survey column has blanks, a "999" placeholder, and both "M" and "male". What cleaning is needed?</p><div class="solution"><div class="step">Decide how to handle blanks (drop/impute), treat "999" as missing (not a real value), and standardize the category labels.</div><em>Conclusion: consistent, valid data. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Anonymizing</h3><p>How do you protect respondents in a school survey?</p><div class="solution"><div class="step">Remove names/IDs, report only aggregates, and store data securely — no individual should be identifiable.</div><em>Conclusion: privacy preserved. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: A secondary-source risk</h3><p>You reuse a dataset with no documented methodology. What's the danger?</p><div class="solution"><div class="step">You can't judge its bias or accuracy, so conclusions built on it may be unreliable.</div><em>Conclusion: vet the source. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Randomization, replication &amp; control</h3><p>You test whether a fertilizer speeds plant growth. Why grow <em>many</em> plants per group and keep light and water identical?</p><div class="solution"><div class="step"><strong>Replication</strong> (many plants per group) averages out individual plant variation, so a real effect isn't masked by chance.</div><div class="step"><strong>Control</strong> (same light/water) removes confounders, and <strong>randomizing</strong> which plants get fertilizer prevents systematic bias.</div><em>Conclusion: replication + control + randomization are the pillars of trustworthy primary data. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>You run your own survey. Primary or secondary data?</p><details><summary>View answer</summary><div class="solution"><div class="step">Primary. <em>Answer: primary.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Give one reason to remove a duplicate record before analysis.</p><details><summary>View answer</summary><div class="solution"><div class="step">It over-weights that observation, distorting every statistic. <em>Answer: avoids double-counting.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>A survey records a respondent's age as 200. What cleaning step is appropriate?</p><details><summary>View answer</summary><div class="solution"><div class="step">Flag it as invalid (out of range) — verify against the source if possible, otherwise treat as missing or remove it. <em>Answer: flag/remove the impossible value.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Why is informed consent essential when surveying minors?</p><details><summary>View answer</summary><div class="solution"><div class="step">Minors can't fully consent, so guardian permission and a clear statement of purpose protect their rights and privacy. <em>Answer: ethics/consent.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Why should a study replicate (collect many observations per condition) rather than measure just one?</p><details><summary>View answer</summary><div class="solution"><div class="step">A single measurement could be a fluke; replication averages out random variation so a genuine effect can be distinguished from chance. <em>Answer: reduces the impact of random variation.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Treating placeholder codes (like 999) or impossible values as real data.</li><li>Skipping the cleaning stage.</li><li>Failing to anonymize or cite sources.</li><li>Drawing conclusions from a single, un-replicated measurement.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: Primary vs secondary?</h3><p><em>Primary you collect; secondary already exists.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why clean data?</h3><p><em>Errors, duplicates, and inconsistencies bias every statistic computed from them.</em></p></div>
</div>`)] },

  // ── 7.3 Analyzing the Data ──────────────────────────────────
  "7.3": { code: "7.3", title: "Analyzing the Data", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🔬 Analyzing the Data</h1>
  <p><strong>Overview.</strong> Analysis is where the whole course converges: choose the right one- and two-variable tools for the question, apply them, and interpret the results while staying honest about bias and variability.</p>
  <h2>📌 Choosing Tools</h2>
  <p><strong>One variable:</strong> centre (mean/median), spread (standard deviation, IQR), shape (histogram/box plot). <strong>Two variables:</strong> scatter plot, correlation \(r\), line of best fit, \(r^{2}\). Match the tool to the question, and always report the <strong>variability</strong> and any <strong>bias</strong> that could limit the conclusion.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: Which summary?</h3><p>To describe a skewed set of incomes, which centre and spread do you report?</p><div class="solution"><div class="step">Median (centre) and IQR (spread) — both resist the skew and outliers.</div><em>Conclusion: median &amp; IQR. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: One or two variables?</h3><p>You want to know if hours studied predicts marks. One-variable or two-variable analysis?</p><div class="solution"><div class="step">Two-variable — a scatter plot, \(r\), and a line of best fit.</div><em>Conclusion: two-variable. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Spotting bias in analysis</h3><p>Your data came from a voluntary online form. How does that affect the conclusion?</p><div class="solution"><div class="step">Self-selection bias means the sample may not represent the population, so generalize cautiously and state the limitation.</div><em>Conclusion: qualify the conclusion. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Variability matters</h3><p>Two groups have the same mean but very different spreads. Why report both?</p><div class="solution"><div class="step">The mean alone hides consistency; a large \(\sigma\) means the average is less representative of individuals.</div><em>Conclusion: centre + spread together. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: Choosing the right centre (computational)</h3><p>Five reported salaries (in \$1000s) are 30, 32, 35, 38, 200. Which measure of centre best describes a "typical" salary, and what is it?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Mean \(=\dfrac{30+32+35+38+200}{5}=\dfrac{335}{5}=67\).</div><div class="step"><strong>Step 2:</strong> Median (middle of the ordered list) \(=35\).</div><div class="step"><strong>Step 3:</strong> The \$200k value is an outlier that inflates the mean to \$67k — far above four of the five salaries. Report the <strong>median (\$35k)</strong>.</div><em>Conclusion: with a skewing outlier, the median is the honest centre. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Which tool measures the strength of a linear relationship?</p><details><summary>View answer</summary><div class="solution"><div class="step">The correlation coefficient \(r\). <em>Answer: \(r\).</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>For a roughly symmetric data set, which centre is appropriate?</p><details><summary>View answer</summary><div class="solution"><div class="step">The mean. <em>Answer: mean.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Which centre would you report for the data 4, 4, 5, 6, 100, and what is it?</p><details><summary>View answer</summary><div class="solution"><div class="step">The median (100 is an outlier): ordered middle value \(=5\). <em>Answer: median 5.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>You find \(r=0.9\) between two variables in an <em>observational</em> study. Can you report that one causes the other?</p><details><summary>View answer</summary><div class="solution"><div class="step">No — a strong correlation in observational data shows association only; a confounder could drive both. <em>Answer: no, correlation ≠ causation.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Why can a single statistic (like the mean) mislead without more context?</p><details><summary>View answer</summary><div class="solution"><div class="step">It ignores spread, shape, outliers, and sample bias — all of which change what the number actually tells you. <em>Answer: it omits spread/shape/bias.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Using the mean/standard deviation on skewed data.</li><li>Reporting a statistic without its variability.</li><li>Ignoring bias that limits generalization.</li><li>Claiming causation from an observational correlation.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: One- or two-variable analysis?</h3><p><em>One variable to summarize a single quantity; two variables to study a relationship.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why report variability?</h3><p><em>Because the centre alone can't tell you how representative it is.</em></p></div>
</div>`)] },

  // ── 7.4 Communicating Conclusions ───────────────────────────
  "7.4": { code: "7.4", title: "Communicating Conclusions", blocks: [html(String.raw`<div class="lecture-box">
  <h1>🗣️ Communicating Conclusions</h1>
  <p><strong>Overview.</strong> A result is only as strong as the argument that presents it. Good communication ties the analysis back to the original question, states conclusions <em>in context</em>, honestly acknowledges limitations, and can withstand scrutiny.</p>
  <h2>📌 A Defensible Conclusion</h2>
  <p>Answer the <strong>original question</strong> using the evidence; state findings <strong>in context</strong> (with units and the population); disclose <strong>limitations</strong> (sample size, bias, confounders); and never overstate — in particular, don't claim causation from a correlation. Anticipate objections and address them.</p>
  <h2>🔵 Examples</h2>
  <div class="example-box" style="${EX}"><h3>Example 1: In context</h3><p>Rewrite "\(r=0.7\)" as a conclusion a reader understands.</p><div class="solution"><div class="step">"There is a moderately strong positive relationship between study hours and test scores in our sample of Grade 12 students."</div><em>Conclusion: contextual and clear. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 2: State a limitation</h3><p>Your sample was 30 students from one class. Name a limitation.</p><div class="solution"><div class="step">Small, non-random sample from one class → results may not generalize to all students.</div><em>Conclusion: disclosed honestly. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 3: Avoid overclaiming</h3><p>Your observational study found a correlation. What must the conclusion <em>not</em> say?</p><div class="solution"><div class="step">It must not say the explanatory variable <strong>causes</strong> the response — only that they're associated.</div><em>Conclusion: correlation, not causation. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 4: Answer an objection</h3><p>A reader says "maybe smarter students just study more." How do you respond?</p><div class="solution"><div class="step">Acknowledge it as a plausible confounder, note your study can't rule it out, and suggest a controlled experiment as follow-up.</div><em>Conclusion: engage, don't dismiss. ✓</em></div></div>
  <div class="example-box" style="${EX}"><h3>Example 5: A full defensible conclusion</h3><p>Your survey of 40 classmates found a moderate positive correlation (\(r=0.6\)) between hours slept and test scores. Write a one-sentence conclusion that is honest and defensible.</p><div class="solution"><div class="step">"In our sample of 40 Grade 12 students, more sleep was <em>moderately associated</em> with higher test scores (\(r=0.6\)); because this was an observational survey of one class, it cannot establish that sleep <em>causes</em> better scores, and may not generalize."</div><em>Conclusion: it states the finding in context, gives the number, and flags both the causal and generalization limits. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="${PR}"><h3>Question 1</h3><p>Why state conclusions "in context" rather than as bare numbers?</p><details><summary>View answer</summary><div class="solution"><div class="step">So a reader understands what the number means for the actual population and variables. <em>Answer: clarity/meaning.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 2</h3><p>Name one limitation worth disclosing in most student studies.</p><details><summary>View answer</summary><div class="solution"><div class="step">A small or non-random sample (limits generalization). <em>Answer: sample size/bias.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 3</h3><p>Rewrite the bare result "\(r=0.85\)" as a conclusion a general reader understands.</p><details><summary>View answer</summary><div class="solution"><div class="step">E.g. "There is a strong positive linear relationship between the two variables in our sample." <em>Answer: contextual restatement.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 4 — Challenge</h3><p>Your observational study suggests a link. What follow-up would let a future researcher make a <em>causal</em> claim?</p><details><summary>View answer</summary><div class="solution"><div class="step">A randomized controlled experiment that assigns the treatment and controls confounders. <em>Answer: a controlled experiment.</em></div></div></details></div>
  <div class="practice-box" style="${PR}"><h3>Question 5 — Challenge</h3><p>Why does acknowledging limitations <em>strengthen</em> a report rather than weaken it?</p><details><summary>View answer</summary><div class="solution"><div class="step">It shows the analysis is honest and self-aware, making the surviving conclusions more credible and harder to attack. <em>Answer: builds credibility.</em></div></div></details></div>
  <div class="mistake-box" style="${MK}"><h3>⚠️ Common Mistakes</h3><ul><li>Claiming causation from a correlational study.</li><li>Hiding or ignoring limitations.</li><li>Reporting numbers without context or units.</li><li>Overstating how far the results generalize.</li></ul></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="${QA}"><h3>Q1: What makes a conclusion defensible?</h3><p><em>It answers the question with evidence, in context, with limitations acknowledged and no overreach.</em></p></div>
  <div class="qa-box" style="${QA}"><h3>Q2: Why disclose limitations?</h3><p><em>Honesty about weaknesses makes the remaining claims more trustworthy.</em></p></div>
</div>`)] },
};
