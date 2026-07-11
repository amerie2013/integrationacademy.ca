import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = { title: "Page not found — Integration Academy" };

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ flex: 1, maxWidth: 640, margin: "0 auto", padding: "80px 28px", textAlign: "center" }}>
        <p style={{ fontFamily: "Fraunces, serif", fontSize: 80, fontWeight: 700, color: "#1b7a44", margin: 0, lineHeight: 1 }}>404</p>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, color: "#0f172a", margin: "12px 0 8px" }}>We couldn't find that page</h1>
        <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.6, margin: "0 0 28px" }}>
          The link may be broken or the page may have moved. Let's get you back on track.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={btnPrimary}>Go home</Link>
          <Link href="/courses" style={btnGhost}>Browse courses</Link>
          <Link href="/help" style={btnGhost}>Get help</Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

const btnPrimary: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", fontWeight: 700, padding: "12px 24px", borderRadius: 12, textDecoration: "none" };
const btnGhost: React.CSSProperties = { background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", fontWeight: 700, padding: "12px 24px", borderRadius: 12, textDecoration: "none" };
