import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata = {
  title: "Getting Started — Integration Academy",
  description: "How to use Integration Academy: lessons, quizzes, worksheets, math games, the graphing calculator, and the teaching whiteboard.",
};

export default function HelpPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "44px 28px 64px" }}>
        <span style={badge}>Getting started</span>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 38, fontWeight: 700, margin: "12px 0 8px" }}>How to use Integration Academy</h1>
        <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.6, margin: "0 0 32px", maxWidth: 640 }}>
          Everything you need to learn and teach senior math — interactive lessons, auto-graded quizzes,
          printable worksheets, math games, a graphing calculator, and a live teaching whiteboard.
        </p>

        <Section title="👩‍🎓 For students">
          <Step n="1" title="Join your class or enroll">Enter the <strong>class code</strong> from your teacher on your <Link style={lnk} href="/dashboard">dashboard</Link>, or browse <Link style={lnk} href="/courses">Courses</Link> and enroll.</Step>
          <Step n="2" title="Work through lessons">Open a course and read its <strong>Lessons</strong> — interactive graphs, narrated <strong>Present</strong> mode, and PDF lessons under the <strong>Materials</strong> tab.</Step>
          <Step n="3" title="Practice & get graded">Do the <strong>Quizzes</strong> (auto-graded) and <strong>Assignments</strong> (submit text or a file). Download <strong>Worksheets</strong> to practise offline.</Step>
          <Step n="4" title="Track your progress">See scores, grades, and teacher feedback on <Link style={lnk} href="/progress">My progress</Link>.</Step>
          <Step n="5" title="Have fun">Sharpen up with <Link style={lnk} href="/games">Math Games</Link> and explore the <Link style={lnk} href="/tools/graph">graphing calculator</Link>.</Step>
        </Section>

        <Section title="👨‍🏫 For teachers">
          <Step n="1" title="Create or claim a class">Admins create classes; teachers <strong>claim</strong> one from <Link style={lnk} href="/classes">My classes</Link>, then share the join code with students.</Step>
          <Step n="2" title="Curate the content">On a class page, drag to <strong>reorder</strong> lessons, quizzes, assignments, and worksheets, and toggle <strong>Visible/Hidden</strong> per class.</Step>
          <Step n="3" title="Build quizzes from the bank">Use <strong>Build a quiz</strong> to assemble a quiz from the question bank for your class.</Step>
          <Step n="4" title="Grade & give feedback">Open an assignment's <strong>Submissions</strong> to enter grades and comments — students see them on their progress page.</Step>
          <Step n="5" title="Teach live">Use the <Link style={lnk} href="/tools/whiteboard">Whiteboard</Link> for online lessons (see below).</Step>
        </Section>

        <Section title="🧮 Graphing calculator">
          <p style={p}>Open <Link style={lnk} href="/tools/graph">Calculator</Link>. Add functions (explicit, implicit, parametric, polar), <strong>sliders</strong> with animation, tables, and labels. Toggle the left panel with the <strong>‹ / ›</strong> bar, and use <strong>Save / Copy embed</strong> to reuse a graph in a lesson.</p>
        </Section>

        <Section title="🖍️ Teaching whiteboard">
          <p style={p}>Open <Link style={lnk} href="/tools/whiteboard">Whiteboard</Link> for online teaching:</p>
          <ul style={ul}>
            <li><strong>Draw</strong> with pen, lines, arrows, shapes; pick colors & widths.</li>
            <li><strong>Type math</strong> with the <strong>∑</strong> tool (proper equations); plain text with <strong>T</strong>.</li>
            <li><strong>Move ✋</strong>: click to select, drag to move, double-click to edit; resize graphs by their corner.</li>
            <li><strong>Erase</strong>: ⌫ Object (whole strokes), ▱ Erase (rub out), or 🧹 Clear all.</li>
            <li><strong>Backgrounds</strong>: grid, graph (axes), dots, lined — great for math.</li>
            <li><strong>📈 Graph</strong>: open the calculator on the board and <strong>📷 Add to board</strong> to stamp the graph in.</li>
            <li><strong>Pages</strong>, <strong>💾 Save</strong> / <strong>📂 Open</strong>, <strong>⬇ PDF</strong> (all pages), and <strong>📡 Go live</strong> to share a read-only link students watch in real time.</li>
          </ul>
        </Section>

        <div style={{ marginTop: 36, padding: "18px 22px", background: "#e7f6ec", border: "1px solid #bfe3cd", borderRadius: 16 }}>
          <strong style={{ color: "#0d5c30" }}>Need a hand?</strong>{" "}
          <span style={{ color: "#365" }}>Email </span>
          <a style={lnk} href="mailto:info@integrationacademy.ca">info@integrationacademy.ca</a>.
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 30 }}>
      <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: "#0f172a" }}>{title}</h2>
      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: "8px 20px" }}>{children}</div>
    </section>
  );
}
function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: "1px solid #f1f5f9" }}>
      <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: "#1b7a44", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 14 }}>{n}</div>
      <div><strong style={{ display: "block", marginBottom: 2 }}>{title}</strong><span style={{ color: "#475569", fontSize: 15, lineHeight: 1.55 }}>{children}</span></div>
    </div>
  );
}
const badge: React.CSSProperties = { display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0d5c30", background: "#e7f6ec", padding: "5px 12px", borderRadius: 999 };
const lnk: React.CSSProperties = { color: "#0d5c30", fontWeight: 700, textDecoration: "none" };
const p: React.CSSProperties = { color: "#475569", fontSize: 15, lineHeight: 1.6, margin: "10px 0" };
const ul: React.CSSProperties = { color: "#475569", fontSize: 15, lineHeight: 1.8, margin: "6px 0 12px 18px" };
