import Link from "next/link";
import { LegalLayout } from "../../components/LegalLayout";

export const metadata = {
  title: "Contact — Integration Academy",
  description: "Get in touch with Integration Academy by email or phone, and find answers to common questions.",
};

const card: React.CSSProperties = { display: "block", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 22px", textDecoration: "none", color: "inherit", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" };

export default function ContactPage() {
  return (
    <LegalLayout
      badge="Contact"
      title="Get in touch"
      intro="Questions about a subscription, your account, or bringing Integration Academy to your classroom? We're happy to help."
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "8px 0 8px" }} className="ia-contact-grid">
        <a href="mailto:info@integrationacademy.ca" style={card}>
          <p style={{ fontWeight: 800, color: "#0d5c30", margin: "0 0 4px" }}>✉️ Email</p>
          <p style={{ margin: 0, color: "#334155" }}>info@integrationacademy.ca</p>
          <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: 14 }}>Best for billing &amp; account questions — we reply within 1–2 business days.</p>
        </a>
        <a href="tel:+12266028853" style={card}>
          <p style={{ fontWeight: 800, color: "#0d5c30", margin: "0 0 4px" }}>📞 Phone</p>
          <p style={{ margin: 0, color: "#334155" }}>226-602-8853</p>
          <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: 14 }}>Mon–Fri, 9am–5pm ET.</p>
        </a>
      </div>

      <h2>Frequently asked questions</h2>

      <h3>How do I start?</h3>
      <p>Create an account, then browse <Link href="/courses">Courses</Link> and enrol, or enter your teacher's class code on your <Link href="/dashboard">dashboard</Link>. See the full <Link href="/help">getting-started guide</Link>.</p>

      <h3>What does it cost?</h3>
      <p>See current options on the <Link href="/pricing">Pricing</Link> page. We offer monthly and annual plans for students and for tutors/teachers.</p>

      <h3>How do I cancel or get a refund?</h3>
      <p>Cancel anytime from Account → Manage billing; you keep access until the period ends. Refunds follow our <Link href="/refund-policy">Refund Policy</Link> (full refund within 7 days of your first charge).</p>

      <h3>Which courses are included?</h3>
      <p>Grade 9 (MTH1W), Grade 10 (MPM2D, MFM2P), and Grade 11–12 (MCR3U, MCF3M, MBF3C, MHF4U, MCV4U), aligned to the Ontario curriculum.</p>

      <h3>Can I use it as a teacher or tutor?</h3>
      <p>Yes — create classes, build quizzes from the question bank, and grade student work. Start from <Link href="/classes">My classes</Link>.</p>

      <h3>Is my data safe?</h3>
      <p>Yes. We use encrypted connections and database access controls, never sell your data, and don't advertise to students. Read our <Link href="/privacy">Privacy Policy</Link>.</p>

      <style>{`@media (max-width:640px){.ia-contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </LegalLayout>
  );
}
