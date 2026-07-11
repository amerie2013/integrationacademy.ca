import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function LegalLayout({ badge, title, intro, updated, children }: {
  badge: string; title: string; intro?: string; updated?: string; children: React.ReactNode;
}) {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "44px 28px 56px", flex: 1 }}>
        <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0d5c30", background: "#e7f6ec", padding: "4px 10px", borderRadius: 999 }}>{badge}</span>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 40, fontWeight: 700, margin: "12px 0 8px", color: "#0f172a" }}>{title}</h1>
        {updated && <p style={{ color: "#94a3b8", fontSize: 14, margin: "0 0 18px" }}>Last updated: {updated}</p>}
        {intro && <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.65, margin: "0 0 12px", maxWidth: 680 }}>{intro}</p>}
        <div className="ia-prose">{children}</div>
      </div>
      <SiteFooter />
      <style>{`
        .ia-prose h2{font-family:Fraunces,serif;font-size:23px;font-weight:700;color:#0f172a;margin:30px 0 10px;}
        .ia-prose h3{font-size:17px;font-weight:700;color:#0f172a;margin:20px 0 6px;}
        .ia-prose p{color:#334155;font-size:16px;line-height:1.7;margin:0 0 12px;}
        .ia-prose ul{color:#334155;font-size:16px;line-height:1.7;margin:0 0 12px;padding-left:22px;}
        .ia-prose li{margin:4px 0;}
        .ia-prose a{color:#0d5c30;font-weight:600;}
        .ia-prose strong{color:#0f172a;}
      `}</style>
    </main>
  );
}
