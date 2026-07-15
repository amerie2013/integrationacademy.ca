"use client";

// Last-resort boundary: fires only if the root layout itself throws (the normal
// app/error.tsx can't render then). Must supply its own <html>/<body>.
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", background: "#f6f8fc", color: "#0f172a" }}>
        <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 28 }}>
          <div style={{ maxWidth: 520, textAlign: "center" }}>
            <p style={{ fontSize: 52, fontWeight: 800, color: "#1b7a44", margin: 0 }}>Oops</p>
            <h1 style={{ fontSize: 24, fontWeight: 700, margin: "10px 0 8px" }}>Something went wrong</h1>
            <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.6, margin: "0 0 24px" }}>
              An unexpected error occurred. Try again, or reload the page. If it keeps happening, email{" "}
              <a href="mailto:info@integrationacademy.ca" style={{ color: "#0d5c30", fontWeight: 600 }}>info@integrationacademy.ca</a>.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={reset} style={{ background: "#1b7a44", color: "#fff", fontWeight: 700, padding: "12px 24px", borderRadius: 12, border: "none", cursor: "pointer", fontSize: 15 }}>Try again</button>
              <a href="/" style={{ background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", fontWeight: 700, padding: "12px 24px", borderRadius: 12, textDecoration: "none" }}>Go home</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
