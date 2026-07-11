import Link from "next/link";
import { notFound } from "next/navigation";
import katex from "katex";
import { SiteHeader } from "../../../components/SiteHeader";
import { ARTICLES, getArticle } from "../../../lib/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  return a ? { title: `${a.title} — Integration Academy`, description: a.excerpt } : { title: "Article — Integration Academy" };
}

function renderMath(html: string): string {
  const tex = (s: string, d: boolean) => {
    try { return katex.renderToString(s, { throwOnError: false, displayMode: d }); }
    catch { return s; }
  };
  return html
    .replace(/\\\[([\s\S]+?)\\\]/g, (_m, t) => tex(t, true))
    .replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => tex(t, false));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const body = renderMath(a.body);
  const date = new Date(a.date + "T00:00:00").toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "44px 28px 64px" }}>
        <Link href="/articles" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All articles</Link>

        <div style={{ display: "flex", gap: 8, margin: "20px 0 14px", flexWrap: "wrap" }}>
          {a.tags.map((t) => (
            <span key={t} style={{ fontSize: 12, fontWeight: 700, color: "#0d5c30", background: "#e7f6ec", padding: "4px 11px", borderRadius: 999 }}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 38, fontWeight: 700, lineHeight: 1.1, margin: "0 0 12px", color: "#0f172a" }}>
          {a.title}
        </h1>
        <div style={{ color: "#64748b", fontSize: 14, marginBottom: 28, borderBottom: "1px solid var(--border)", paddingBottom: 20 }}>
          {a.author} · {date} · {a.readMins} min read
        </div>

        <div className="ia-article" dangerouslySetInnerHTML={{ __html: body }} />

        <div style={{ marginTop: 40, padding: "20px 22px", background: "#e7f6ec", border: "1px solid #bfe3cd", borderRadius: 16 }}>
          <strong style={{ color: "#0d5c30" }}>Keep going.</strong>{" "}
          <span style={{ color: "#365" }}>Put the idea to work in a </span>
          <Link href="/courses" style={{ color: "#0d5c30", fontWeight: 700 }}>course</Link>
          <span style={{ color: "#365" }}> or test your reflexes with a </span>
          <Link href="/games" style={{ color: "#0d5c30", fontWeight: 700 }}>math game</Link>.
        </div>

        <style>{`
          .ia-article{font-size:18px;line-height:1.75;color:#1e293b;}
          .ia-article h2{font-family:Fraunces,serif;font-size:25px;font-weight:700;margin:32px 0 10px;color:#0f172a;}
          .ia-article p{margin:0 0 18px;}
          .ia-article a{color:#0d5c30;font-weight:700;}
          .ia-article .katex-display{margin:22px 0;overflow-x:auto;overflow-y:hidden;padding:4px 0;}
        `}</style>
      </article>
    </main>
  );
}
