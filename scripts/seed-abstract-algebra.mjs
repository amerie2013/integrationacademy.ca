// Seeds a PRIVATE "Abstract Algebra I — Groups" course for one-on-one tutoring.
// Follows the professor's own 4 lectures topic-for-topic (Groups → Cayley
// tables & order of an element → Subgroups & cosets → Intersection/union of
// subgroups, the center, cyclic groups), expanded with more worked detail and
// bilingual (English + Arabic) explanations — the class itself is taught in
// English, so English terminology stays primary throughout; Arabic boxes
// explain the *idea*, never replace the English vocabulary the student needs
// for lecture and exams.
//
// The course is created UNPUBLISHED (private/unlisted — never appears on the
// public /courses catalog) and reached only via a class join code, per
// supabase/migrations/2026-09-08_private_course_class_access.sql (which must
// be run once in the Supabase SQL Editor before this script, so the enrolled
// student's browser can actually read the unpublished course row).
//
// Usage: node scripts/seed-abstract-algebra.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { html } from "./seed-mpm2d.mjs";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
// The class (not the course) is taught under Dr. Merie's own teacher account —
// matches how her other classes (e.g. "Grade 9 Math — Period 1") are set up.
const CLASS_TEACHER_EMAIL = "dr.merie@integrationacademy.ca";
const COURSE_TITLE = "Abstract Algebra I — Groups";
const COURSE_CODE = "ABALG1";
const DESC = "University Abstract (Modern) Algebra — Group Theory, following the course lectures topic-for-topic with extra worked detail. Private one-on-one course: bilingual English/Arabic explanations, English terminology throughout (matches the lecture and exams). Join with a class code.";
const CLASS_NAME = "Abstract Algebra — Private Tutoring";

// ── shared box styles (matches the house lesson theme) ─────────
const EX   = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR   = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA   = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PF   = `style="background-color:#f3f0ff;border-left:5px solid #7c5cbf;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const VOC  = `style="background-color:#eefaf3;border-left:5px solid #1b7a44;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
// Arabic explanation box — right-to-left, system Arabic-friendly font stack.
// English technical terms stay in Latin script *inside* the Arabic sentence on
// purpose, so the student keeps mapping the idea to the word used in class.
const AR   = `dir="rtl" style="background-color:#eef2ff;border-right:5px solid #3b5bdb;padding:10px 14px;margin:10px 0;border-radius:6px;text-align:right;font-family:Tahoma,'Segoe UI',Arial,sans-serif;line-height:1.9;"`;

const arBox = (title, bodyHtml) => `<div class="ar-box" ${AR}><h3 style="margin-top:0;">🗣️ ${title}</h3>${bodyHtml}</div>`;
const vocab = (pairs) => `<div class="vocab-box" ${VOC}><h3 style="margin-top:0;">🔤 Key Vocabulary (English ↔ Arabic)</h3><ul style="margin:0;padding-inline-start:20px;">${pairs
  .map(([en, ar, gloss]) => `<li><strong>${en}</strong> — <span dir="rtl" style="font-family:Tahoma,'Segoe UI',Arial,sans-serif;">${ar}</span>${gloss ? ` <span style="color:#475569;">(${gloss})</span>` : ""}</li>`)
  .join("")}</ul></div>`;

const L = (code, title, blocks) => ({ code, title, blocks });

// ================================================================
// 1.1 — Groups: Definition & Basic Examples  (Lecture 1)
// ================================================================
const L1_1 = L("1.1", "Groups: Definition and Basic Examples", [
  html(String.raw`<div class="lecture-box">
  <h1>🧩 Groups: Definition and Basic Examples</h1>
  <p><strong>Overview.</strong> Abstract algebra studies <strong>sets with structure</strong> — a set together with an operation that combines its elements. The single most important structure is the <strong>group</strong>. Once you can recognize the four group axioms in any setting (numbers, matrices, remainders, symmetries, …) you can reuse every theorem proved about groups in general, for free, in every example.</p>

  ${arBox("بالعربي: ما هي الزمرة (Group)؟", `<p>الجبر المجرد (Abstract Algebra) يدرس <strong>مجموعات</strong> (Sets) عليها <strong>عملية ثنائية</strong> (Binary Operation) تربط كل عنصرين بعنصر ثالث من نفس المجموعة. أهم بنية من هذا النوع تسمى <strong>Group</strong> (زمرة). بمجرد أن تتعرّف على الشروط الأربعة (Axioms) في أي مثال — أرقام، مصفوفات (Matrices)، بواقي القسمة (Remainders) — يمكنك استخدام كل النظريات المُثبتة عن الـ Group مباشرة في هذا المثال، دون إثبات جديد.</p>`)}

  <h2>📌 Binary Operation</h2>
  <p>A <strong>binary operation</strong> \(*\) on a set \(G\) is a rule that assigns to <em>every</em> ordered pair \((a,b)\) of elements of \(G\) a single, well-defined element \(a*b\), and \(a*b\) must itself land back in \(G\) — this "landing back inside" property is called <strong>closure</strong>. Every group operation is, first of all, a binary operation on \(G\).</p>
  ${arBox("العملية الثنائية والانغلاق (Closure)", `<p>العملية الثنائية \\(*\\) على المجموعة \\(G\\) تأخذ كل زوج مرتّب \\((a,b)\\) من عناصر \\(G\\) وتُخرج عنصرًا واحدًا محدّدًا \\(a*b\\). الشرط المهم هو <strong>Closure</strong> (الانغلاق): يجب أن تبقى النتيجة \\(a*b\\) داخل نفس المجموعة \\(G\\) — لا تخرج منها أبدًا.</p>`)}

  <h2>📌 The Group Axioms</h2>
  <p>Let \(G\) be a nonempty set with a binary operation \(*\). The pair \((G,*)\) is a <strong>group</strong> if it satisfies:</p>
  <ol class="math">
    <li><strong>Closure:</strong> \(a*b\in G\) for all \(a,b\in G\). <em>(built into "binary operation" above — stated separately here so all four conditions are in one place.)</em></li>
    <li><strong>Associativity:</strong> \((a*b)*c=a*(b*c)\), for all \(a,b,c\in G\).</li>
    <li><strong>Identity:</strong> there exists \(e\in G\) such that \(a*e=a=e*a\) for all \(a\in G\).</li>
    <li><strong>Inverse:</strong> for every \(a\in G\) there exists \(a^{-1}\in G\) such that \(a*a^{-1}=e=a^{-1}*a\).</li>
  </ol>
  <p><em>Notation:</em> when the operation is understood we drop the \(*\) and write \(ab\) for \(a*b\), matching the lecture's own shorthand.</p>

  ${arBox("الشروط الأربعة للزمرة", `<p>المجموعة \\(G\\) مع عملية \\(*\\) تُسمّى <strong>Group</strong> إذا تحقّقت:</p>
  <ol style="margin:6px 0;padding-inline-start:22px;">
    <li><strong>Closure</strong> (الانغلاق): الناتج يبقى داخل \\(G\\).</li>
    <li><strong>Associative</strong> (التجميعية): \\((a*b)*c=a*(b*c)\\) — ترتيب التجميع لا يهم.</li>
    <li><strong>Identity</strong> (العنصر المحايد): يوجد عنصر \\(e\\) لا يغيّر أي عنصر آخر عند الضرب/الجمع به.</li>
    <li><strong>Inverse</strong> (العنصر النظير/المعكوس): لكل عنصر \\(a\\) يوجد عنصر \\(a^{-1}\\) يعيدنا إلى \\(e\\).</li>
  </ol>`)}

  <h2>📌 Abelian vs Non-Abelian Groups</h2>
  <p>A group \((G,*)\) is <strong>abelian</strong> (commutative) if \(a*b=b*a\) for <em>all</em> \(a,b\in G\). If there exists even <em>one</em> pair with \(a*b\ne b*a\), the group is called <strong>non-abelian</strong>. (Named after Niels Henrik Abel.)</p>
  ${arBox("زمرة أبيلية (Abelian) وغير أبيلية (Non-Abelian)", `<p>الزمرة <strong>Abelian</strong> (تبديلية) هي التي فيها \\(a*b=b*a\\) لكل عنصرين. يكفي وجود <em>مثال واحد</em> يخالف ذلك حتى تصبح الزمرة <strong>Non-Abelian</strong> (غير تبديلية) — تسمّى نسبة للعالم Niels Abel.</p>`)}

  <h2>🔵 Examples</h2>

  <div class="example-box" ${EX}>
    <h3>Example 1: The integers under addition</h3>
    <p>Show that \((\mathbb{Z},+)\) is an abelian group, where \(\mathbb{Z}=\{0,\pm1,\pm2,\pm3,\dots\}\).</p>
    <div class="solution">
      <div class="step"><strong>Closure:</strong> the sum of two integers is an integer. ✓</div>
      <div class="step"><strong>Associative:</strong> \((a+b)+c=a+(b+c)\) for integers. ✓</div>
      <div class="step"><strong>Identity:</strong> \(e=0\), since \(a+0=a=0+a\). ✓</div>
      <div class="step"><strong>Inverse:</strong> for \(a\), take \(-a\), since \(a+(-a)=0=(-a)+a\). ✓</div>
      <div class="step"><strong>Abelian:</strong> \(a+b=b+a\). ✓</div>
      <em>Conclusion: \((\mathbb{Z},+)\) is an abelian group. ✓</em>
    </div>
  </div>

  <div class="example-box" ${EX}>
    <h3>Example 2: Invertible \(2\times2\) integer matrices (non-abelian)</h3>
    <p>Let \(G=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\ \middle|\ a,b,c,d\in\mathbb{R},\ ad-bc\ne0\right\}\) under matrix multiplication. Verify the axioms and show \(G\) is <strong>non-abelian</strong>.</p>
    <div class="solution">
      <div class="step"><strong>Identity:</strong> \(\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}1&0\\0&1\end{pmatrix}=\begin{pmatrix}a&b\\c&d\end{pmatrix}\), so \(e=\begin{pmatrix}1&0\\0&1\end{pmatrix}\) (the identity matrix).</div>
      <div class="step"><strong>Inverse:</strong> \(\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\dfrac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\) — this exists <em>exactly because</em> \(ad-bc\ne0\); that determinant condition is why we required it when defining \(G\).</div>
      <div class="step"><strong>Associative:</strong> matrix multiplication is always associative — \(A(BC)=(AB)C\) (a fact from linear algebra, "check" on the professor's slide).</div>
      <div class="step"><strong>Non-abelian counterexample:</strong> \(\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}1&0\\3&-1\end{pmatrix}=\begin{pmatrix}7&-2\\15&-4\end{pmatrix}\), but \(\begin{pmatrix}1&0\\3&-1\end{pmatrix}\begin{pmatrix}1&2\\3&4\end{pmatrix}=\begin{pmatrix}1&2\\0&2\end{pmatrix}\) — different matrices.</div>
      <em>Conclusion: \(G\) is a group (in fact this is \(GL_2(\mathbb{R})\), the "general linear group"), but it is <strong>non-abelian</strong>. ✓</em>
    </div>
  </div>

  ${arBox("مثال المصفوفات: لماذا غير تبديلية؟", `<p>ضرب المصفوفات (Matrix Multiplication) عمومًا <strong>غير تبديلي</strong>: \\(AB\\) ليس دائمًا نفس \\(BA\\). المثال في الأعلى يثبت ذلك برقمين محدّدين (Counterexample) — هذه هي طريقة إثبات "غير تبديلية": يكفي مثال واحد مخالف، بعكس إثبات "تبديلية" الذي يحتاج برهانًا عامًا لكل العناصر.</p>`)}

  <div class="example-box" ${EX}>
    <h3>Example 3: Addition modulo \(n\), \((\mathbb{Z}_n,+_n)\)</h3>
    <p>Define \(\mathbb{Z}_n=\{0,1,2,\dots,n-1\}\) with \(a+_n b=(a+b)\bmod n\). Show \((\mathbb{Z}_6,+_6)\) is an abelian group and compute \(3+_5 4\) in \(\mathbb{Z}_5\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \(\mathbb{Z}_n\) is <em>finite</em> and \(+_n\) satisfies closure, associativity, identity \(e=0\), and every \(a\) has inverse \(n-a\) (or \(0\) is its own inverse). It is abelian since ordinary addition is.</div>
      <div class="step"><strong>Step 2:</strong> \(3+_5 4=(3+4)\bmod5=7\bmod5=2\), since \(7=1\cdot5+2\).</div>
      <em>Conclusion: \((\mathbb{Z}_6,+_6)\) is a finite abelian group, and \(3+_5 4=2\). ✓</em>
    </div>
  </div>

  <div class="callout-box" ${PF}>
    <h3>⚠️ A precision the professor's board glosses over: multiplication mod \(n\) is <em>not</em> automatically a group</h3>
    <p>The lecture also writes \(4\cdot_6 5=(4\cdot5)\bmod6=20\bmod6=2\) as an example of the <em>operation</em> "multiplication modulo \(n\)". That computation is correct — but be careful: \((\mathbb{Z}_n,\cdot_n)\) on the <strong>whole</strong> set \(\{0,1,\dots,n-1\}\) is <em>not</em> a group in general, because \(0\) has no multiplicative inverse, and if \(n\) is composite, other nonzero elements can also fail to have one (e.g. in \(\mathbb{Z}_6\), \(2\cdot_6 3=0\), so \(2\) and \(3\) can never multiply their way back to the identity \(1\)). The fix — restricting to exactly the elements that <em>do</em> have inverses — is the group \(U(n)\) introduced next.</p>
  </div>
  ${arBox("تنبيه مهم: الضرب Modulo n وحده ليس زمرة", `<p>عملية الجمع \\(+_n\\) على كل \\(\\mathbb{Z}_n\\) تُكوّن زمرة دائمًا. لكن عملية الضرب \\(\\cdot_n\\) على <strong>كل</strong> \\(\\mathbb{Z}_n\\) <strong>ليست زمرة</strong> بشكل عام — لأن العنصر \\(0\\) ليس له معكوس ضربي (Inverse)، وفي حالة \\(n\\) غير أوّلي قد تكون هناك عناصر أخرى بلا معكوس أيضًا. الحل هو تقييد المجموعة على العناصر التي <em>لها</em> معكوس فقط — وهذا بالضبط تعريف \\(U(n)\\) القادم.</p>`)}

  <h2>📌 The Group \(U(n)\)</h2>
  <p>\(U(n)\) is the set of integers less than \(n\) and <strong>relatively prime</strong> to \(n\) (i.e. \(\gcd(k,n)=1\)), under multiplication modulo \(n\). Because every element of \(U(n)\) is coprime to \(n\), each one <em>does</em> have a multiplicative inverse mod \(n\) — this is exactly what makes \((U(n),\cdot_n)\) a group (it is always abelian).</p>
  <div class="example-box" ${EX}>
    <h3>Example 4: Listing \(U(n)\)</h3>
    <p>Find \(U(10)\), \(U(8)\), and \(U(7)\).</p>
    <div class="solution">
      <div class="step">\(U(10)=\{1,3,7,9\}\) — every number from \(1\) to \(9\) that shares no common factor with \(10\).</div>
      <div class="step">\(U(8)=\{1,3,5,7\}\) — the odd numbers below \(8\) (any even number shares a factor of \(2\) with \(8\)).</div>
      <div class="step">\(U(7)=\{1,2,3,4,5,6\}\) — since \(7\) is prime, <em>every</em> nonzero remainder is coprime to it: \(U(p)=\{1,\dots,p-1\}\) whenever \(p\) is prime.</div>
    </div>
  </div>
  ${arBox("الزمرة U(n)", `<p>\\(U(n)\\) هي مجموعة الأعداد الأصغر من \\(n\\) والأوّلية نسبيًا (Relatively Prime) معه — أي \\(\\gcd(k,n)=1\\) — مع عملية الضرب Modulo \\(n\\). بما أن كل عنصر في \\(U(n)\\) لا يشترك بعامل مشترك مع \\(n\\)، فإن له دائمًا معكوسًا ضربيًا Mod \\(n\\)؛ ولهذا \\(U(n)\\) زمرة تبديلية (Abelian) دائمًا. ملاحظة: عندما يكون \\(n\\) عددًا أوّليًا (Prime)، فإن \\(U(n)\\) تحوي كل الأعداد من \\(1\\) إلى \\(n-1\\).</p>`)}

  ${vocab([
    ["Group", "زمرة"],
    ["Binary operation", "عملية ثنائية"],
    ["Closure", "الانغلاق"],
    ["Associative", "تجميعية"],
    ["Identity element", "العنصر المحايد"],
    ["Inverse element", "العنصر النظير / المعكوس"],
    ["Abelian group", "زمرة أبيلية (تبديلية)"],
    ["Non-abelian", "غير تبديلية"],
    ["Relatively prime / coprime", "أوّلي نسبيًا"],
  ])}

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Check the four axioms to show that \((\mathbb{Q},+)\) (the rationals) is a group. Is it abelian?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Yes to both — closure, associativity, identity \(0\), inverse \(-a\), and \(a+b=b+a\). Abelian.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Is \((\mathbb{Z},\cdot)\) (integers under ordinary multiplication) a group? Which axiom fails?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>No — inverse fails. \(e=1\), but e.g. \(2\) has no integer \(x\) with \(2x=1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Compute \(5+_7 4\) and \(3\cdot_5 4\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5+_7 4=9\bmod7=2\). \(3\cdot_5 4=12\bmod5=2\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>List \(U(9)\) and \(U(12)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(U(9)=\{1,2,4,5,7,8\}\) (excludes multiples of \(3\)). \(U(12)=\{1,5,7,11\}\) (excludes multiples of \(2\) and \(3\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Let \(G=\{1,-1\}\) under ordinary multiplication. Show \(G\) is an abelian group.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Closed: \(1\cdot1=1,\ 1\cdot(-1)=-1,\ (-1)(-1)=1\), all in \(G\). Identity \(1\). Every element is its own inverse. Multiplication of real numbers is associative and commutative, so \(G\) is abelian.</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What four things must I check to prove a set with an operation is a group?</h3><p><em>Closure, associativity, identity, inverse — in that order is a good habit, since closure and associativity are usually quick, and identity/inverse are where real work happens.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do I prove a group is <em>non</em>-abelian?</h3><p><em>Find one concrete counterexample pair \(a,b\) with \(ab\ne ba\) — you never need to check every pair.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Is \((\mathbb{Z}_n,\cdot_n)\) always a group?</h3><p><em>No — only \(U(n)\), the coprime-to-\(n\) elements, form a group under multiplication mod \(n\). \((\mathbb{Z}_n,+_n)\) IS always a group, under addition.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: What's special about \(U(p)\) for prime \(p\)?</h3><p><em>Every nonzero element of \(\mathbb{Z}_p\) is coprime to \(p\), so \(U(p)=\{1,2,\dots,p-1\}\) — the biggest possible \(U(n)\) for that modulus.</em></p></div>
</div>`),
]);

// ================================================================
// 1.2 — Cayley Tables & the Order of an Element  (Lecture 2)
// ================================================================
const L1_2 = L("1.2", "Cayley Tables and the Order of an Element", [
  html(String.raw`<div class="lecture-box">
  <h1>📊 Cayley Tables and the Order of an Element</h1>
  <p><strong>Overview.</strong> A <strong>Cayley table</strong> is the "multiplication table" of a finite group — it lists every possible product at a glance, and lets you <em>read off</em> whether the group is abelian, what the identity and inverses are, and (later) whether the group is cyclic. This lesson also introduces the <strong>order of an element</strong>: how many times you must apply the operation to an element before you return to the identity.</p>
  ${arBox("بالعربي: جدول Cayley ورتبة العنصر", `<p><strong>Cayley Table</strong> هو جدول يعرض ناتج العملية بين كل زوج من عناصر الزمرة المنتهية (Finite Group) — يشبه جدول الضرب. من هذا الجدول وحده يمكن معرفة: هل الزمرة تبديلية (Abelian)؟ ما هو العنصر المحايد (Identity)؟ وما معكوس (Inverse) كل عنصر؟ سنتعلّم أيضًا <strong>Order of an Element</strong> (رتبة العنصر): عدد المرّات التي نطبّق فيها العملية على عنصر حتى نعود إلى العنصر المحايد.</p>`)}

  <h2>📌 Building a Cayley Table</h2>
  <p>List the group's elements once across the top and once down the side (same order). Fill entry \((\text{row } a,\ \text{col } b)\) with \(a*b\). Two quick reading rules:</p>
  <ul>
    <li>The table is <strong>symmetric across the main diagonal</strong> exactly when the group is abelian (since a symmetric table means the \((a,b)\) entry equals the \((b,a)\) entry, i.e. \(a*b=b*a\)).</li>
    <li>Each row and each column contains every element of the group <strong>exactly once</strong> — this is called the <strong>Latin square property</strong>, and it follows from the fact that every element has a unique inverse.</li>
  </ul>

  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 1: Cayley table for \((\mathbb{Z}_6,+_6)\)</h3>
    <p>Build the addition table for \(\mathbb{Z}_6=\{0,1,2,3,4,5\}\).</p>
    <div class="solution">
      <table style="border-collapse:collapse;margin-top:6px;">
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">\(+_6\)</td>${[0,1,2,3,4,5].map(c=>`<td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">${c}</td>`).join("")}</tr>
        ${[0,1,2,3,4,5].map(r=>`<tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">${r}</td>${[0,1,2,3,4,5].map(c=>`<td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">${(r+c)%6}</td>`).join("")}</tr>`).join("")}
      </table>
      <div class="step" style="margin-top:8px;"><em>Notice the table is symmetric about the diagonal (abelian), and row \(4\) reads \(4,5,0,1,2,3\) — every element exactly once (Latin square).</em></div>
    </div>
  </div>

  <div class="example-box" ${EX}>
    <h3>Example 2: Cayley table for \(U(12)\)</h3>
    <p>\(U(12)=\{1,5,7,11\}\) under multiplication mod \(12\). Build its table.</p>
    <div class="solution">
      <table style="border-collapse:collapse;margin-top:6px;">
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">\(\cdot_{12}\)</td>${[1,5,7,11].map(c=>`<td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">${c}</td>`).join("")}</tr>
        ${[1,5,7,11].map(r=>`<tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">${r}</td>${[1,5,7,11].map(c=>`<td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">${(r*c)%12}</td>`).join("")}</tr>`).join("")}
      </table>
      <div class="step" style="margin-top:8px;"><em>Every row/column is \(1,5,7,11\) in some order — the Latin square property. \(1\) is the identity (its row/column just copies the header); every element is its own inverse here since every entry on the diagonal is \(1\).</em></div>
    </div>
  </div>

  <div class="example-box" ${EX}>
    <h3>Example 3: Is \(\{1,-1,i,-i\}\) an abelian group under multiplication?</h3>
    <p>Here \(i=\sqrt{-1}\). Check the axioms and build the table.</p>
    <div class="solution">
      <div class="step"><strong>Identity:</strong> \(1\). <strong>Inverses:</strong> \(1\cdot1=1\), \((-1)(-1)=1\), \(i\cdot(-i)=-i^2=-(-1)=1\) — so \(i\) and \(-i\) are each other's inverse.</div>
      <table style="border-collapse:collapse;margin-top:6px;">
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">\(\cdot\)</td>${["1","-1","i","-i"].map(c=>`<td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">${c}</td>`).join("")}</tr>
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-i</td></tr>
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">-1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">i</td></tr>
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">1</td></tr>
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">-i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">i</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">1</td><td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">-1</td></tr>
      </table>
      <div class="step" style="margin-top:8px;"><em>Conclusion: symmetric table ⇒ abelian group (the 4th roots of unity). ✓</em></div>
    </div>
  </div>

  <div class="example-box" ${EX}>
    <h3>Example 4: Is \(\{1,2,3,4\}\) abelian under multiplication mod \(5\)?</h3>
    <div class="solution">
      <table style="border-collapse:collapse;margin-top:6px;">
        <tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">\(\cdot_5\)</td>${[1,2,3,4].map(c=>`<td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">${c}</td>`).join("")}</tr>
        ${[1,2,3,4].map(r=>`<tr><td style="border:1px solid #94a3b8;padding:4px 10px;font-weight:700;background:#f1f5f9;">${r}</td>${[1,2,3,4].map(c=>`<td style="border:1px solid #94a3b8;padding:4px 10px;text-align:center;">${(r*c)%5}</td>`).join("")}</tr>`).join("")}
      </table>
      <div class="step" style="margin-top:8px;"><em>Conclusion: symmetric, Latin square, identity \(1\) — an abelian group. (This is exactly \(U(5)\), since \(5\) is prime.) ✓</em></div>
    </div>
  </div>
  ${arBox("قراءة جدول Cayley بسرعة", `<p>إذا كان الجدول <strong>متماثلًا حول القطر الرئيسي</strong> (Symmetric across the diagonal)، فالزمرة <strong>Abelian</strong>. وإذا ظهر كل عنصر <strong>مرّة واحدة بالضبط</strong> في كل صف وعمود (خاصية Latin Square)، فهذا يؤكد أن كل عنصر له معكوس فريد.</p>`)}

  <h2>📌 Order of an Element</h2>
  <p>The <strong>order</strong> of \(a\in G\), written \(O(a)\), is the smallest <strong>positive</strong> integer \(n\) such that \(a^n=e\) (multiplicative notation) — or, in additive notation, the smallest positive \(n\) with \(na=0\). If \(O(a)=n\), notice also \(O(a^{-1})=n\), since \((a^{-1})^n=(a^n)^{-1}=e^{-1}=e\).</p>
  <div class="example-box" ${EX}>
    <h3>Example 5: Orders in \((\mathbb{Z}_6,+_6)\)</h3>
    <div class="solution">
      <div class="step">\(O(0)=1\) (already the identity).</div>
      <div class="step">\(O(1)\): \(1,2,3,4,5,0\) — takes \(6\) steps to hit \(0\), so \(O(1)=6\).</div>
      <div class="step">\(O(2)\): \(2,4,0\) — \(3\cdot2=6\equiv0\), so \(O(2)=3\).</div>
      <div class="step">\(O(3)\): \(3,0\) — \(2\cdot3=6\equiv0\), so \(O(3)=2\).</div>
      <div class="step">Similarly \(O(4)=3\), \(O(5)=6\).</div>
      <em>Conclusion: orders are \(1,6,3,2,3,6\) for \(0,1,2,3,4,5\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 6: Orders in \((U(10),\cdot_{10})\)</h3>
    <p>\(U(10)=\{1,3,7,9\}\). Find the order of each element.</p>
    <div class="solution">
      <div class="step">\(O(1)=1\), since \(1^1=1\).</div>
      <div class="step">\(3^1=3,\ 3^2=9,\ 3^3=27\equiv7,\ 3^4=81\equiv1\) ⇒ \(O(3)=4\).</div>
      <div class="step">\(7^1=7,\ 7^2=49\equiv9,\ 7^3\equiv63\equiv3,\ 7^4\equiv21\equiv1\) ⇒ \(O(7)=4\).</div>
      <div class="step">\(9^1=9,\ 9^2=81\equiv1\) ⇒ \(O(9)=2\).</div>
      <em>Conclusion: \(O(1)=1,\ O(3)=4,\ O(7)=4,\ O(9)=2\). ✓</em>
    </div>
  </div>
  ${arBox("رتبة العنصر (Order of an Element)", `<p><strong>Order of an Element</strong> \\(a\\) هي أصغر عدد صحيح موجب \\(n\\) بحيث \\(a^n=e\\) (في حالة الضرب) أو \\(na=0\\) (في حالة الجمع). بمعنى آخر: كم مرّة يجب أن "أُكرّر" العملية على العنصر حتى أصل إلى العنصر المحايد؟ لاحظ من المثال أن \\(O(a)\\) و \\(O(a^{-1})\\) متساويان دائمًا.</p>`)}

  ${vocab([
    ["Cayley table", "جدول كايلي"],
    ["Latin square (property)", "مربّع لاتيني"],
    ["Order of an element", "رتبة العنصر"],
    ["Identity element", "العنصر المحايد"],
  ])}

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Build the Cayley table for \(U(8)=\{1,3,5,7\}\) under \(\cdot_8\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Every entry on the diagonal is \(1\) (each element is its own inverse): \(3\cdot3=9\equiv1\), \(5\cdot5=25\equiv1\), \(7\cdot7=49\equiv1\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Find the order of every element of \((\mathbb{Z}_5,+_5)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(O(0)=1\); \(O(1)=O(2)=O(3)=O(4)=5\) (since \(5\) is prime, every nonzero element needs all \(5\) steps).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>In \(U(12)=\{1,5,7,11\}\), find \(O(5)\), \(O(7)\), \(O(11)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(5^2=25\equiv1\Rightarrow O(5)=2\). \(7^2=49\equiv1\Rightarrow O(7)=2\). \(11^2=121\equiv1\Rightarrow O(11)=2\). (Every non-identity element of \(U(12)\) has order \(2\).)</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>What does it mean about a group's Cayley table if the table is <strong>not</strong> symmetric?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>The group is non-abelian — some pair \(a,b\) has \(ab\ne ba\), which shows up as the \((a,b)\) and \((b,a)\) entries differing.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>If \(O(a)=n\), explain why \(a^k=e\) forces \(n\mid k\) (n divides k).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Write \(k=qn+r\) with \(0\le r&lt;n\) (division algorithm). Then \(a^k=a^{qn+r}=(a^n)^q a^r=e^q a^r=a^r=e\). Since \(n\) is the <strong>smallest</strong> positive exponent giving \(e\), and \(0\le r&lt;n\), we must have \(r=0\) — so \(k=qn\), i.e. \(n\mid k\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What two things can I instantly read off a Cayley table?</h3><p><em>Whether the group is abelian (symmetric table) and each element's inverse (find where the identity \(e\) appears in that element's row).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why does every row/column contain each element exactly once?</h3><p><em>Because the map \(x\mapsto a*x\) is a bijection \(G\to G\) (it has an inverse map \(x\mapsto a^{-1}*x\)) — this is the Latin square property.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Is order defined for the identity element?</h3><p><em>Yes — \(O(e)=1\) always, since \(e^1=e\).</em></p></div>
</div>`),
]);

// ================================================================
// 1.3 — Subgroups and Cosets  (Lecture 3)
// ================================================================
const L1_3 = L("1.3", "Subgroups and Cosets", [
  html(String.raw`<div class="lecture-box">
  <h1>🧱 Subgroups and Cosets</h1>
  <p><strong>Overview.</strong> A <strong>subgroup</strong> is a subset of a group that is itself a group under the same operation. Before subgroups, we lock in two basic facts about inverses that the proofs in this lesson lean on repeatedly. Then: the subgroup test, several worked "show \(G\) is abelian" proofs (the professor's favorite exercise style), and finally <strong>cosets</strong> — the building block for the next lesson's deeper structure theory.</p>
  ${arBox("بالعربي: نظرة عامة", `<p><strong>Subgroup</strong> (زمرة جزئية) هي مجموعة جزئية من زمرة أكبر، وهي نفسها زمرة تحت نفس العملية. سنبدأ بخاصيتين أساسيتين عن المعكوس (Inverse) نحتاجهما لاحقًا في الإثباتات، ثم <strong>اختبار الزمرة الجزئية</strong> (Subgroup Test)، وأخيرًا <strong>Cosets</strong> (المجموعات الجانبية) — وهي حجر الأساس للدرس القادم.</p>`)}

  <h2>📌 Two Basic Facts About Inverses</h2>
  <p><strong>Fact 1 (uniqueness of inverse):</strong> each \(a\in G\) has exactly <em>one</em> inverse. <strong>Fact 2 (inverse of a product):</strong> \((ab)^{-1}=b^{-1}a^{-1}\) — note the order <strong>reverses</strong>.</p>
  <div class="proof-box" ${PF}>
    <h3>🧮 Proof that \((ab)^{-1}=b^{-1}a^{-1}\)</h3>
    <p>We must check \((ab)(b^{-1}a^{-1})=e\) and \((b^{-1}a^{-1})(ab)=e\).</p>
    <div class="step"><strong>Step 1:</strong> \((ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=a\,e\,a^{-1}=aa^{-1}=e\).</div>
    <div class="step"><strong>Step 2:</strong> \((b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=b^{-1}\,e\,b=b^{-1}b=e\).</div>
    <em>Conclusion: \(b^{-1}a^{-1}\) is a two-sided inverse of \(ab\), and since inverses are unique (Fact 1), \((ab)^{-1}=b^{-1}a^{-1}\). ✓</em>
  </div>
  ${arBox("لماذا ينعكس الترتيب؟", `<p>معكوس حاصل الضرب \\((ab)^{-1}\\) <strong>ليس</strong> \\(a^{-1}b^{-1}\\) بل \\(b^{-1}a^{-1}\\) — الترتيب ينعكس! فكّر بمثال يومي: إذا "ارتديت الجوارب ثم الحذاء"، فلعكس ذلك (خلعه) يجب أن "تخلع الحذاء أولًا ثم الجوارب" — بالترتيب المعاكس.</p>`)}

  <h2>🔵 Worked Proofs: Showing a Group is Abelian</h2>
  <p>These three problems share a pattern the professor repeats: start from a given identity that holds for <em>all</em> elements, and manipulate it (multiply both sides by inverses, in the same position on both sides) until you reach \(ab=ba\).</p>

  <div class="example-box" ${EX}>
    <h3>Example 1: If \((ab)^2=a^2b^2\) for all \(a,b\in G\), then \(G\) is abelian</h3>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> \((ab)^2=a^2b^2\) means \((ab)(ab)=a\,a\,b\,b\), i.e. \(abab=aabb\).</div>
      <div class="step"><strong>Step 2:</strong> Multiply on the <strong>left</strong> by \(a^{-1}\) and on the <strong>right</strong> by \(b^{-1}\) (same operation, both sides):
      \[a^{-1}(abab)b^{-1}=a^{-1}(aabb)b^{-1}\]</div>
      <div class="step"><strong>Step 3:</strong> Simplify each side using \(a^{-1}a=e\) and \(bb^{-1}=e\): left side becomes \(ba\), right side becomes \(ab\).</div>
      <em>Conclusion: \(ba=ab\) — \(G\) is abelian. ✓</em>
    </div>
  </div>

  <div class="example-box" ${EX}>
    <h3>Example 2: If \(a^2=e\) for all \(a\in G\), then \(G\) is abelian</h3>
    <p>("Every element is its own inverse" ⇒ abelian.)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Since \(a^2=e\) for every element, in particular \(a^{-1}=a\) and \(b^{-1}=b\) for any \(a,b\in G\).</div>
      <div class="step"><strong>Step 2:</strong> Also \((ab)^2=e\), i.e. \((ab)^{-1}=ab\). But by the inverse-of-a-product rule, \((ab)^{-1}=b^{-1}a^{-1}=ba\) (using \(a^{-1}=a,\ b^{-1}=b\)).</div>
      <em>Conclusion: \(ab=(ab)^{-1}=ba\) — \(G\) is abelian. ✓</em>
    </div>
  </div>

  <div class="example-box" ${EX}>
    <h3>Example 3: If \(a^{-1}=a\) for all \(a\in G\), then \(G\) is abelian</h3>
    <p>(Same statement as Example 2, phrased directly in terms of inverses — good to recognize both phrasings.)</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> Let \(a,b\in G\). By hypothesis \(a^{-1}=a\) and \(b^{-1}=b\).</div>
      <div class="step"><strong>Step 2:</strong> Also \((ab)^{-1}=ab\) (hypothesis applied to the element \(ab\)).</div>
      <div class="step"><strong>Step 3:</strong> By the inverse-of-a-product rule, \((ab)^{-1}=b^{-1}a^{-1}=ba\).</div>
      <em>Conclusion: \(ab=ba\). ✓</em>
    </div>
  </div>
  ${arBox("نمط الإثباتات الثلاثة", `<p>الأنماط الثلاثة في الأعلى تتشارك فكرة واحدة: نبدأ من معطى صحيح لكل عناصر الزمرة، ثم "نضرب" في المعكوس المناسب من نفس الجهة على الطرفين حتى نصل إلى \\(ab=ba\\). احفظ هذا النمط جيدًا — يتكرر كثيرًا في اختبارات الجبر المجرد.</p>`)}

  <h2>📌 Subgroup: Definition and Test</h2>
  <p>Let \(G\) be a group. A <strong>nonempty</strong> subset \(H\subseteq G\) is a <strong>subgroup</strong> of \(G\) if, using the <em>same</em> operation as \(G\):</p>
  <ol class="math">
    <li>\(a*b\in H\) for all \(a,b\in H\) (closure within \(H\)).</li>
    <li>\(a^{-1}\in H\) for all \(a\in H\) (closed under inverses).</li>
  </ol>
  <p>Notice associativity is automatic (it already holds for all of \(G\), so certainly for \(H\subseteq G\)), and the identity \(e\) is automatically in \(H\): pick any \(a\in H\) (nonempty!), then \(a^{-1}\in H\) by (2), so \(a*a^{-1}=e\in H\) by (1). That is why the <strong>subgroup test</strong> only needs to check these two conditions, not all four axioms from scratch.</p>
  ${arBox("اختبار الزمرة الجزئية (Subgroup Test)", `<p>لإثبات أن \\(H\\) زمرة جزئية من \\(G\\)، يكفي التحقق من شرطين فقط:</p>
  <ol style="margin:6px 0;padding-inline-start:22px;">
    <li>الانغلاق: حاصل ضرب أي عنصرين من \\(H\\) يبقى في \\(H\\).</li>
    <li>معكوس أي عنصر من \\(H\\) يبقى في \\(H\\).</li>
  </ol>
  <p>لا حاجة للتحقق من التجميعية (Associative) لأنها متحقّقة أصلًا في \\(G\\) الأكبر، ولا من العنصر المحايد لأنه يُستنتج تلقائيًا من الشرطين أعلاه (بشرط أن \\(H\\) غير خالية).</p>`)}

  <h2>🔵 Subgroup Examples</h2>
  <div class="example-box" ${EX}>
    <h3>Example 4: \(2\mathbb{Z}\) is a subgroup of \((\mathbb{Z},+)\)</h3>
    <p>\(2\mathbb{Z}=\{0,\pm2,\pm4,\pm6,\dots\}\) — the even integers.</p>
    <div class="solution">
      <div class="step"><strong>Closure:</strong> even + even = even. ✓</div>
      <div class="step"><strong>Inverses:</strong> \(-(2k)=-2k\) is even. ✓</div>
      <em>Conclusion: \(2\mathbb{Z}\le\mathbb{Z}\) (the \(\le\) symbol means "is a subgroup of"). ✓</em>
    </div>
  </div>
  <div class="callout-box" ${PF}>
    <h3>A non-example</h3>
    <p>\(S=\{0,\pm1,\pm3,\pm5,\dots\}\) (zero and the odd integers) is <strong>not</strong> a subgroup of \(\mathbb{Z}\): it fails closure — \(1+3=4\notin S\).</p>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 5: All subgroups of \((\mathbb{Z}_6,+_6)\)</h3>
    <div class="solution">
      <div class="step"><strong>Trivial subgroups</strong> (always present, in every group): \(\{0\}\) and all of \(\mathbb{Z}_6\) itself.</div>
      <div class="step"><strong>Nontrivial:</strong> \(2\mathbb{Z}_6=\{0,2,4\}\) (multiples of \(2\)) ✓ and \(3\mathbb{Z}_6=\{0,3\}\) (multiples of \(3\)) ✓ — both closed and closed under inverses (check directly).</div>
      <em>Conclusion: the subgroups of \(\mathbb{Z}_6\) are \(\{0\}\), \(\{0,3\}\), \(\{0,2,4\}\), and \(\mathbb{Z}_6\). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 6: Nontrivial subgroups of \(U(10)\) and \(U(8)\)</h3>
    <div class="solution">
      <div class="step">\(U(10)=\{1,3,7,9\}\): the nontrivial subgroup is \(\{1,9\}\) (check: \(9\cdot9=81\equiv1\), closed and self-inverse).</div>
      <div class="step">\(U(8)=\{1,3,5,7\}\): nontrivial subgroups are \(\{1,3\}\), \(\{1,5\}\), \(\{1,7\}\) — each pair is closed since every element squares to \(1\) mod \(8\).</div>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 7: Upper-triangular invertible matrices form a subgroup of \(GL_2(\mathbb{R})\)</h3>
    <p>Let \(G=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\middle|a,b,c,d\in\mathbb{R},ad-bc\ne0\right\}\) and \(H=\left\{\begin{pmatrix}a&b\\0&d\end{pmatrix}\middle|a,b,d\in\mathbb{R},ad\ne0\right\}\). Show \(H\le G\).</p>
    <div class="solution">
      <div class="step"><strong>Nonempty:</strong> the identity matrix \(\begin{pmatrix}1&0\\0&1\end{pmatrix}\in H\). ✓</div>
      <div class="step"><strong>Inverse:</strong> \(\begin{pmatrix}a&b\\0&d\end{pmatrix}^{-1}=\dfrac1{ad}\begin{pmatrix}d&-b\\0&a\end{pmatrix}=\begin{pmatrix}\tfrac1a&\tfrac{-b}{ad}\\0&\tfrac1d\end{pmatrix}\) — still upper triangular, and its "\(ad\)" product is \(\tfrac1a\cdot\tfrac1d=\tfrac1{ad}\ne0\), so it's in \(H\). ✓</div>
      <div class="step"><strong>Closure:</strong> \(\begin{pmatrix}a_1&b_1\\0&d_1\end{pmatrix}\begin{pmatrix}a_2&b_2\\0&d_2\end{pmatrix}=\begin{pmatrix}a_1a_2&a_1b_2+b_1d_2\\0&d_1d_2\end{pmatrix}\) — still upper triangular, and \(a_1d_1\ne0,\ a_2d_2\ne0\Rightarrow a_1d_1a_2d_2\ne0\). ✓</div>
      <em>Conclusion: \(H\) is a subgroup of \(G\). ✓</em>
    </div>
  </div>

  <h2>📌 Cosets</h2>
  <p>Let \(H\) be a subgroup of \(G\). We say \(a\) is <strong>congruent to \(b\) mod \(H\)</strong>, written \(a\equiv b\pmod H\), when \(ab^{-1}\in H\). This relation partitions \(G\) into <strong>cosets</strong>: for \(a\in G\), the <strong>right coset</strong> is \(Ha=\{ha:h\in H\}\) and the <strong>left coset</strong> is \(aH=\{ah:h\in H\}\).</p>
  <div class="example-box" ${EX}>
    <h3>Example 8: Cosets of \(H=\{1,5\}\) in \(U(12)=\{1,5,7,11\}\)</h3>
    <div class="solution">
      <div class="step">\(1H=1\cdot\{1,5\}=\{1,5\}=H\) itself.</div>
      <div class="step">\(7H=7\cdot\{1,5\}=\{7,35\bmod12\}=\{7,11\}\).</div>
      <div class="step">\(11H=11\cdot\{1,5\}=\{11,55\bmod12\}=\{11,7\}=\{7,11\}\) — same coset as \(7H\).</div>
      <em>Conclusion: \(U(12)\) splits into exactly two cosets of \(H\): \(\{1,5\}\) and \(\{7,11\}\) — together they cover all of \(U(12)\), with no overlap. ✓</em>
    </div>
  </div>
  ${arBox("المجموعات الجانبية (Cosets)", `<p>إذا كانت \\(H\\) زمرة جزئية من \\(G\\)، فإن \\(a\\) و \\(b\\) "متطابقان Modulo \\(H\\)" إذا كان \\(ab^{-1}\\in H\\). هذا يقسّم \\(G\\) إلى مجموعات تسمى <strong>Cosets</strong> (مجموعات جانبية): \\(Ha\\) هي Right Coset و \\(aH\\) هي Left Coset. الملاحظة المهمة في المثال: كل الـ Cosets لها نفس الحجم، وتغطي الزمرة بالكامل دون أي تداخل بينها — وهذه هي الفكرة التي تُبنى عليها نظرية Lagrange لاحقًا في المقرر.</p>`)}

  ${vocab([
    ["Subgroup", "زمرة جزئية"],
    ["Subgroup test", "اختبار الزمرة الجزئية"],
    ["Trivial subgroup", "الزمرة الجزئية التافهة"],
    ["Coset (left / right)", "مجموعة جانبية (يسرى / يمنى)"],
    ["Congruent modulo H", "متطابق Modulo H"],
  ])}

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Is \(3\mathbb{Z}=\{0,\pm3,\pm6,\dots\}\) a subgroup of \((\mathbb{Z},+)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Yes — closed under addition and negation, by the same argument as \(2\mathbb{Z}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Is \(H=\{0,1,2\}\) a subgroup of \((\mathbb{Z}_6,+_6)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>No — \(1+_6 2=3\notin H\), fails closure.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>List all nontrivial subgroups of \(U(9)=\{1,2,4,5,7,8\}\). (Hint: check which small subsets are closed.)</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\{1,8\}\) (since \(8^2=64\equiv1\)) and \(\{1,4,7\}\) (since \(4^2=16\equiv7\), \(4\cdot7=28\equiv1\), \(7^2=49\equiv4\)) are subgroups.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Find the cosets of \(H=\{0,2,4\}\) in \((\mathbb{Z}_6,+_6)\).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0+H=\{0,2,4\}=H\); \(1+H=\{1,3,5\}\). Two cosets, covering all of \(\mathbb{Z}_6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>Prove: if \(H\le G\) and \(a\in H\), then \(Ha=H\) (the coset of an element already inside \(H\) is just \(H\) itself).</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Since \(a\in H\) and \(H\) is closed, \(Ha\subseteq H\). Conversely, for any \(h\in H\), \(h=(ha^{-1})a\) and \(ha^{-1}\in H\) (closure + inverses), so \(h\in Ha\); thus \(H\subseteq Ha\). Both inclusions give \(Ha=H\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Do I need to check associativity when proving \(H\) is a subgroup?</h3><p><em>No — it's inherited automatically from \(G\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: Why is the identity automatically in every subgroup?</h3><p><em>Take any \(a\in H\) (nonempty); closure under inverses gives \(a^{-1}\in H\); closure under the operation gives \(a\,a^{-1}=e\in H\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: What's the fastest way to show something is <em>not</em> a subgroup?</h3><p><em>Find one product (or one inverse) that leaves the subset — one counterexample is enough.</em></p></div>
</div>`),
]);

// ================================================================
// 1.4 — Combining Subgroups, the Center, and Cyclic Groups  (Lecture 4)
// ================================================================
const L1_4 = L("1.4", "Combining Subgroups, the Center, and Cyclic Groups", [
  html(String.raw`<div class="lecture-box">
  <h1>🔗 Combining Subgroups, the Center, and Cyclic Groups</h1>
  <p><strong>Overview.</strong> This lesson closes out the subgroup toolkit: what happens when you <strong>intersect</strong> or <strong>union</strong> two subgroups, the special subgroup called the <strong>center</strong> of a group, and <strong>cyclic groups</strong> — groups generated by a single element, which turn out to be the simplest and most completely understood groups in the theory.</p>
  ${arBox("بالعربي: نظرة عامة", `<p>سننهي في هذا الدرس أدوات الزمر الجزئية: ماذا يحدث عند أخذ <strong>تقاطع</strong> (Intersection) أو <strong>اتحاد</strong> (Union) زمرتين جزئيتين، ثم <strong>مركز الزمرة</strong> (Center)، وأخيرًا <strong>الزمر الدورية</strong> (Cyclic Groups) — وهي زمر "يولّدها" عنصر واحد فقط، وتُعتبر أبسط الزمر وأكثرها فهمًا في النظرية.</p>`)}

  <h2>📌 Intersection of Subgroups</h2>
  <p><strong>Theorem:</strong> if \(H\) and \(K\) are both subgroups of \(G\), then \(H\cap K\) is also a subgroup of \(G\).</p>
  <div class="proof-box" ${PF}>
    <h3>🧮 Proof</h3>
    <div class="step"><strong>Nonempty:</strong> \(e\in H\) and \(e\in K\) (identity is in every subgroup), so \(e\in H\cap K\).</div>
    <div class="step"><strong>Closure:</strong> let \(x,y\in H\cap K\). Then \(x,y\in H\) so \(xy\in H\) (H is a subgroup); and \(x,y\in K\) so \(xy\in K\). Hence \(xy\in H\cap K\).</div>
    <div class="step"><strong>Inverses:</strong> let \(x\in H\cap K\). Then \(x\in H\Rightarrow x^{-1}\in H\), and \(x\in K\Rightarrow x^{-1}\in K\). Hence \(x^{-1}\in H\cap K\).</div>
    <em>Conclusion: \(H\cap K\) passes the subgroup test, so \(H\cap K\le G\). ✓</em>
  </div>

  <h2>📌 Union of Subgroups — a Trap</h2>
  <p><strong>Warning:</strong> unlike intersection, \(H\cup K\) is <strong>not</strong> a subgroup in general.</p>
  <div class="callout-box" ${PF}>
    <h3>⚠️ Counterexample: \(2\mathbb{Z}\cup3\mathbb{Z}\)</h3>
    <p>\(2\in2\mathbb{Z}\subseteq2\mathbb{Z}\cup3\mathbb{Z}\) and \(3\in3\mathbb{Z}\subseteq2\mathbb{Z}\cup3\mathbb{Z}\), but \(2+3=5\notin2\mathbb{Z}\cup3\mathbb{Z}\) (5 is neither even nor a multiple of 3). Closure fails, so \(2\mathbb{Z}\cup3\mathbb{Z}\) is <strong>not</strong> a subgroup of \(\mathbb{Z}\).</p>
  </div>
  ${arBox("لماذا يفشل الاتحاد Union؟", `<p><strong>Intersection</strong> (التقاطع) لزمرتين جزئيتين هو دائمًا زمرة جزئية — الإثبات بسيط ومباشر. أما <strong>Union</strong> (الاتحاد) فعادة <strong>ليس</strong> زمرة جزئية، لأن عنصرًا من كل طرف قد لا يُنتج ناتجًا داخل الاتحاد عند دمجهما — كما في المثال \\(2\\mathbb{Z}\\cup3\\mathbb{Z}\\) حيث \\(2+3=5\\) خارج الاتحاد تمامًا.</p>`)}

  <h2>📌 The Center of a Group</h2>
  <p>The <strong>center</strong> of \(G\), written \(Z(G)\), is the set of elements that commute with <em>everything</em> in \(G\):</p>
  \[Z(G)=\{x\in G\mid xy=yx\ \text{ for all } y\in G\}.\]
  <p>Note \(G\) is abelian exactly when \(Z(G)=G\).</p>
  <div class="proof-box" ${PF}>
    <h3>🧮 Proof: \(Z(G)\) is a subgroup of \(G\)</h3>
    <div class="step"><strong>Nonempty:</strong> \(ex=xe\) for all \(x\), so \(e\in Z(G)\).</div>
    <div class="step"><strong>Closure:</strong> let \(x,z\in Z(G)\), so \(xy=yx\) and \(zy=yz\) for every \(y\in G\). Then for any \(y\in G\):
    \[(xz)y=x(zy)=x(yz)=(xy)z=(yx)z=y(xz),\]
    using associativity and the commuting hypotheses on \(x\) and \(z\) in turn. So \(xz\in Z(G)\).</div>
    <div class="step"><strong>Inverses:</strong> let \(x\in Z(G)\), so \(xy=yx\) for all \(y\). Multiply both sides on the left <em>and</em> right by \(x^{-1}\):
    \[x^{-1}(xy)x^{-1}=x^{-1}(yx)x^{-1}\ \Rightarrow\ yx^{-1}=x^{-1}y.\]
    So \(x^{-1}\) also commutes with every \(y\in G\), i.e. \(x^{-1}\in Z(G)\).</div>
    <em>Conclusion: \(Z(G)\) passes the subgroup test — \(Z(G)\le G\). ✓</em>
  </div>
  ${arBox("مركز الزمرة (Center)", `<p>\\(Z(G)\\) هو مجموعة كل العناصر التي "تتبادل" (Commute) مع <strong>كل</strong> عنصر آخر في \\(G\\). إذا كانت \\(G\\) نفسها تبديلية (Abelian)، فإن \\(Z(G)=G\\) كاملة. الإثبات في الأعلى يستخدم نفس أسلوب "الضرب من نفس الجهة على الطرفين" الذي رأيناه في الدرس السابق.</p>`)}

  <h2>📌 Cyclic Groups</h2>
  <p>A group \(G\) is <strong>cyclic</strong> if there exists some element \(g\in G\) — called a <strong>generator</strong> — such that every element of \(G\) is a power of \(g\): \(G=\{g^n:n\in\mathbb{Z}\}\). A group can have more than one generator.</p>
  <div class="example-box" ${EX}>
    <h3>Example 1: \(U(10)=\{1,3,7,9\}\) is cyclic</h3>
    <div class="solution">
      <div class="step">Powers of \(3\): \(3^1=3,\ 3^2=9,\ 3^3=27\equiv7,\ 3^4=81\equiv1\) — hits every element of \(U(10)\).</div>
      <div class="step">Powers of \(7\): \(7^1=7,\ 7^2=49\equiv9,\ 7^3\equiv63\equiv3,\ 7^4\equiv1\) — also hits every element.</div>
      <em>Conclusion: \(U(10)\) is cyclic, with generators \(3\) and \(7\) (note \(O(3)=O(7)=4=|U(10)|\)). ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 2: \(U(8)=\{1,3,5,7\}\) is <strong>not</strong> cyclic</h3>
    <div class="solution">
      <div class="step">\(3^1=3,\ 3^2=9\equiv1\) — only reaches \(\{1,3\}\), not all of \(U(8)\).</div>
      <div class="step">\(5^1=5,\ 5^2=25\equiv1\) — only \(\{1,5\}\).</div>
      <div class="step">\(7^1=7,\ 7^2=49\equiv1\) — only \(\{1,7\}\).</div>
      <em>Conclusion: no element of \(U(8)\) generates the whole group (every non-identity element has order \(2\), but \(|U(8)|=4\)), so \(U(8)\) is <strong>not</strong> cyclic. ✓</em>
    </div>
  </div>
  <div class="example-box" ${EX}>
    <h3>Example 3: \(U(9)=\{1,2,4,5,7,8\}\) is cyclic</h3>
    <div class="solution">
      <div class="step">Powers of \(2\): \(2,4,8,16\equiv7,14\equiv5,10\equiv1\) — that's \(2,4,8,7,5,1\), all six elements. ✓</div>
      <em>Conclusion: \(U(9)\) is cyclic; \(2\) is a generator. ✓</em>
    </div>
  </div>

  <div class="callout-box" ${PF}>
    <h3>📎 Note: Cyclic ⟹ Abelian, but NOT conversely</h3>
    <p>Every cyclic group is abelian: if \(G=\{g^n:n\in\mathbb{Z}\}\), then \(g^mg^n=g^{m+n}=g^{n+m}=g^ng^m\) for any two elements, so they always commute. But the converse is <strong>false</strong> — an abelian group need not be cyclic. Example: the Klein four-group \(V=\{e,a,b,c\}\) with \(a^2=b^2=c^2=e\) and \(ab=c\) (this is exactly the structure of \(U(8)\) above!) is abelian, since every element is its own inverse (Lesson 1.3, Example 2 shows that condition always gives abelian) — but Example 2 just showed \(U(8)\cong V\) is not cyclic, since no single element generates it.</p>
  </div>
  ${arBox("الزمر الدورية (Cyclic Groups)", `<p>الزمرة \\(G\\) تسمى <strong>Cyclic</strong> (دورية) إذا وُجد عنصر واحد \\(g\\) — يسمى <strong>Generator</strong> (مولّد) — بحيث كل عناصر \\(G\\) هي قوى (Powers) لهذا العنصر. كل زمرة دورية هي بالضرورة <strong>Abelian</strong>، لكن العكس غير صحيح: توجد زمر تبديلية ليست دورية، مثل \\(U(8)\\) — كل عناصرها تتبادل، لكن لا يوجد عنصر واحد "يولّد" الزمرة بأكملها.</p>`)}

  ${vocab([
    ["Intersection", "تقاطع"],
    ["Union", "اتّحاد"],
    ["Center of a group", "مركز الزمرة"],
    ["Commute", "يتبادل"],
    ["Cyclic group", "زمرة دورية"],
    ["Generator", "مولّد"],
  ])}

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Find \(2\mathbb{Z}\cap3\mathbb{Z}\) in \((\mathbb{Z},+)\). What familiar subgroup is it?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2\mathbb{Z}\cap3\mathbb{Z}=6\mathbb{Z}\) — multiples of \(\text{lcm}(2,3)=6\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Give another counterexample (besides \(2\mathbb{Z}\cup3\mathbb{Z}\)) showing a union of subgroups need not be a subgroup.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>In \(\mathbb{Z}_6\): \(\{0,3\}\cup\{0,2,4\}=\{0,2,3,4\}\); but \(2+_6 3=5\notin\{0,2,3,4\}\), so closure fails.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Find \(Z(G)\) when \(G\) is abelian. Find \(Z(G)\) when \(G=GL_2(\mathbb{R})\) is known to be non-abelian — is \(Z(G)\) necessarily just \(\{e\}\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>If \(G\) is abelian, \(Z(G)=G\) (everything commutes with everything). For non-abelian \(G\), \(Z(G)\) can still be bigger than \(\{e\}\) — e.g. in \(GL_2(\mathbb{R})\), every nonzero scalar multiple of the identity matrix \(kI\) commutes with everything, so \(Z(G)\supsetneq\{e\}\) even though \(G\) itself is non-abelian.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Is \((\mathbb{Z}_6,+_6)\) cyclic? Name a generator.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Yes — \(1\) generates it: \(1,2,3,4,5,0\) hits every element. So does \(5\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5 — Challenge</h3><p>\(U(5)=\{1,2,3,4\}\) — is it cyclic? If so, list all its generators.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Yes. Powers of \(2\): \(2,4,3,1\) — all four, so \(2\) generates. Powers of \(3\): \(3,4,2,1\) — also all four. Powers of \(4\): \(4,1\) — only \(\{1,4\}\), so \(4\) is NOT a generator. Generators: \(2\) and \(3\).</em></div></div></details></div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: Intersection or union — which is always a subgroup?</h3><p><em>Intersection, always. Union, only in special cases (e.g. if one subgroup contains the other).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What's the fastest way to show \(Z(G)=G\)?</h3><p><em>Show \(G\) is abelian — then by definition every element commutes with every other, so \(Z(G)\) is everything.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: If a group is abelian, must it be cyclic?</h3><p><em>No — \(U(8)\) (and the Klein four-group it matches) is abelian but not cyclic. Cyclic is a strictly stronger property.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How many generators can a cyclic group have?</h3><p><em>Often more than one — \(U(10)\) has generators \(3\) and \(7\); \(U(5)\) has generators \(2\) and \(3\). (The exact count connects to Euler's \(\varphi\) function, coming up later in the course.)</em></p></div>
</div>`),
]);

const LESSONS = [L1_1, L1_2, L1_3, L1_4];

// ── seeding ──────────────────────────────────────────────────
async function getTeacherId() {
  const { data: created, error } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher: " + (error?.message ?? ""));
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

function genCode() {
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => A[Math.floor(Math.random() * A.length)]).join("");
}

async function getClassTeacherId() {
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === CLASS_TEACHER_EMAIL);
  if (!found) throw new Error(`Could not find class teacher account: ${CLASS_TEACHER_EMAIL}`);
  return found.id;
}

async function run() {
  const teacherId = await getTeacherId();
  console.log("Content-authoring (course owner) id:", teacherId);
  const classTeacherId = await getClassTeacherId();
  console.log("Class teacher id (Dr. Merie):", classTeacherId);

  // Course: created UNPUBLISHED (private/unlisted). Requires
  // supabase/migrations/2026-09-08_private_course_class_access.sql to already
  // be applied, so the enrolled student's browser can still read this row.
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: COURSE_CODE, description: DESC, level: "university", published: false }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: COURSE_CODE, title: COURSE_TITLE, description: DESC, level: "university", published: false }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id, "(private — published:false)");

  await db.from("lessons").delete().eq("course_id", course.id);
  let pos = 0;
  for (const s of LESSONS) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    console.log(`  Lesson ${s.code} ${s.title}`);
  }

  // Private class: reuse an existing join_code across re-runs so a link
  // already shared with the student keeps working.
  let klass;
  const existingClass = await db.from("classes").select("id, join_code, teacher_id").eq("course_id", course.id).eq("name", CLASS_NAME).maybeSingle();
  if (existingClass.data) {
    klass = existingClass.data;
    if (klass.teacher_id !== classTeacherId) {
      await db.from("classes").update({ teacher_id: classTeacherId }).eq("id", klass.id);
    }
  } else {
    let lastErr = null;
    for (let i = 0; i < 5; i++) {
      const ins = await db.from("classes").insert({ teacher_id: classTeacherId, course_id: course.id, name: CLASS_NAME, join_code: genCode() }).select("id, join_code").single();
      if (!ins.error) { klass = ins.data; lastErr = null; break; }
      lastErr = ins.error;
      if (!String(ins.error.message).toLowerCase().includes("duplicate")) break;
    }
    if (!klass) throw lastErr;
  }

  console.log(`\nDone. Seeded ${LESSONS.length} lessons for "${COURSE_TITLE}".`);
  console.log(`Class: "${CLASS_NAME}" (${klass.id})`);
  console.log(`\n>>> Join code for the student: ${klass.join_code} <<<`);
  console.log(`The student logs in, goes to /dashboard, and enters this code under "Join a class".`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("SEED FAILED:", e.message ?? e); process.exit(1); });
}
