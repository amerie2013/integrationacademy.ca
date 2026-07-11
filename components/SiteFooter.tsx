import Link from "next/link";

const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 8 };
const head: React.CSSProperties = { fontSize: 13, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0d5c30", margin: "0 0 4px" };
const lnk: React.CSSProperties = { color: "#475569", textDecoration: "none", fontSize: 14.5 };

function Col({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div style={col}>
      <p style={head}>{title}</p>
      {links.map(([label, href]) =>
        href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? (
          <a key={label} href={href} style={lnk}>{label}</a>
        ) : (
          <Link key={label} href={href} style={lnk}>{label}</Link>
        )
      )}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--border, #e2e8f0)", background: "#f6f8fc", marginTop: 48 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "44px 28px 20px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }} className="ia-foot-grid">
        <div style={{ maxWidth: 280 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.png" alt="Integration Academy" width={34} height={34} style={{ borderRadius: 8 }} />
            <span style={{ fontFamily: "Fraunces, serif", fontWeight: 700, fontSize: 18, color: "#0f172a" }}>Integration Academy</span>
          </div>
          <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Math Simplified, Success Amplified. Interactive senior-math lessons, auto-graded quizzes,
            worksheets, and a graphing calculator for Grade 9–12, college, and university.
          </p>
        </div>
        <Col title="Explore" links={[["Courses", "/courses"], ["Pricing", "/pricing"], ["Worksheets", "/worksheets"], ["Calculator", "/tools/graph"], ["Help", "/help"]]} />
        <Col title="Company" links={[["About", "/about"], ["Contact", "/contact"], ["Email us", "mailto:info@integrationacademy.ca"], ["226-602-8853", "tel:+12266028853"]]} />
        <Col title="Legal" links={[["Terms of Service", "/terms"], ["Privacy Policy", "/privacy"], ["Refund Policy", "/refund-policy"]]} />
      </div>
      <div style={{ borderTop: "1px solid var(--border, #e2e8f0)", padding: "16px 28px", textAlign: "center", color: "#94a3b8", fontSize: 13.5 }}>
        © {new Date().getFullYear()} Integration Academy · integrationacademy.ca · Made in Ontario, Canada 🇨🇦
      </div>
      <style>{`@media (max-width:760px){.ia-foot-grid{grid-template-columns:1fr 1fr !important;gap:24px !important;}}`}</style>
    </footer>
  );
}
