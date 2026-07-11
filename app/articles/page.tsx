import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { ARTICLES } from "../../lib/articles";

export const metadata = {
  title: "Articles — Integration Academy",
  description: "Deep-dives, study strategies, and the big ideas behind high-school and university math.",
};

export default function ArticlesPage() {
  const articles = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = articles;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 28px" }}>
        <span style={badge}>Articles</span>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 40, fontWeight: 700, margin: "12px 0 8px" }}>
          Ideas worth a read
        </h1>
        <p style={{ color: "#475569", fontSize: 17, margin: "0 0 36px", maxWidth: 620 }}>
          The intuition behind the math, study strategies that actually work, and the big
          concepts that tie it all together.
        </p>

        {featured && (
          <Link href={`/articles/${featured.slug}`} style={featuredCard}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                {featured.tags.map((t) => <span key={t} style={tagPill}>{t}</span>)}
              </div>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "0 0 10px", color: "#f0fff6" }}>
                {featured.title}
              </h2>
              <p style={{ color: "#bfe9cf", fontSize: 16, lineHeight: 1.6, margin: "0 0 14px", maxWidth: 640 }}>
                {featured.excerpt}
              </p>
              <div style={{ color: "#8fd6ab", fontSize: 13, fontWeight: 600 }}>
                {fmtDate(featured.date)} · {featured.readMins} min read · Read →
              </div>
            </div>
          </Link>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18, marginTop: 24 }}>
          {rest.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`} style={card}>
              <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                {a.tags.map((t) => <span key={t} style={tagPillLight}>{t}</span>)}
              </div>
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 700, margin: "0 0 8px", color: "#0f172a" }}>
                {a.title}
              </h3>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.55, margin: "0 0 14px" }}>{a.excerpt}</p>
              <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600, marginTop: "auto" }}>
                {fmtDate(a.date)} · {a.readMins} min read
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

function fmtDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}

const badge: React.CSSProperties = { display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0d5c30", background: "#e7f6ec", padding: "5px 12px", borderRadius: 999 };
const featuredCard: React.CSSProperties = { position: "relative", overflow: "hidden", display: "block", textDecoration: "none", borderRadius: 20, padding: 32, background: "radial-gradient(800px 400px at 80% -20%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" };
const card: React.CSSProperties = { display: "flex", flexDirection: "column", textDecoration: "none", background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: 22 };
const tagPill: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#9fe7bd", background: "rgba(52,210,127,.12)", border: "1px solid rgba(52,210,127,.3)", padding: "3px 10px", borderRadius: 999 };
const tagPillLight: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#0d5c30", background: "#e7f6ec", padding: "3px 10px", borderRadius: 999 };
