import Link from "next/link";
import { LegalLayout } from "../../components/LegalLayout";

export const metadata = {
  title: "About — Integration Academy",
  description: "Integration Academy is an Ontario-built online platform for senior high-school, college, and university math — interactive lessons, auto-graded quizzes, worksheets, and a graphing calculator.",
};

export default function AboutPage() {
  return (
    <LegalLayout
      badge="About us"
      title="Math Simplified, Success Amplified"
      intro="Integration Academy is an Ontario-built online math platform for Grade 9–12, college, and university students — and the teachers and tutors who guide them."
    >
      <h2>Our mission</h2>
      <p>Senior math is where many students lose confidence — not because they can't do it, but because static textbooks and slide decks don't let them <em>see</em> what's happening. We built Integration Academy to fix that: every concept is taught with worked examples and <strong>interactive graphs you can move</strong>, so ideas like slope, transformations, and the derivative become something you watch, not just read.</p>

      <h2>What you get</h2>
      <ul>
        <li><strong>Complete courses</strong> for Grade 9 (MTH1W), Grade 10 (MPM2D, MFM2P), and Grade 11–12 (MCR3U, MCF3M, MBF3C, MHF4U, MCV4U), aligned to the Ontario curriculum.</li>
        <li><strong>Interactive lessons</strong> — deep worked examples with embedded graphs and a narrated “Present” mode.</li>
        <li><strong>Auto-graded quizzes</strong> and a large <strong>question bank</strong> teachers can build from.</li>
        <li><strong>Printable worksheets</strong> with full solutions for offline practice.</li>
        <li>A dependency-free <Link href="/tools/graph">graphing calculator</Link> and a live <Link href="/tools/whiteboard">teaching whiteboard</Link>.</li>
      </ul>

      <h2>For teachers &amp; tutors</h2>
      <p>Create classes, share a join code, curate which lessons and quizzes your students see, build quizzes from the question bank, and grade submissions with feedback — all in one place. See the <Link href="/help">getting-started guide</Link>.</p>

      <h2>Built in Ontario</h2>
      <p>Integration Academy is made in Ontario, Canada, by educators who teach this material. Have a question or want to bring it to your classroom? <Link href="/contact">Get in touch</Link> — we'd love to hear from you.</p>

      <p style={{ marginTop: 22 }}>
        <Link href="/pricing" style={{ display: "inline-block", background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", fontWeight: 700, padding: "12px 24px", borderRadius: 12, textDecoration: "none" }}>See plans &amp; pricing →</Link>
      </p>
    </LegalLayout>
  );
}
