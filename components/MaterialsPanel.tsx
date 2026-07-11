"use client";

import { useEffect, useState } from "react";
import { fetchMaterials, prettySize, type Material, type OwnerType } from "../lib/materials";
import { signedUrl } from "../lib/storage";

/**
 * Student-facing viewer: embeds the item's "main" PDF in the browser's native
 * PDF viewer (page nav / zoom / print / fullscreen come for free) and lists any
 * attachment files for download. Renders nothing when there's nothing to show.
 */
export function MaterialsPanel({
  ownerType,
  ownerId,
  fallbackPdf,
  embedHeight = "75vh",
}: {
  ownerType: OwnerType;
  ownerId: string;
  fallbackPdf?: { url: string; name?: string | null } | null;
  embedHeight?: string;
}) {
  const [main, setMain] = useState<{ url: string; name: string | null } | null>(null);
  const [attachments, setAttachments] = useState<{ id: string; url: string; name: string | null; size_bytes: number | null }[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const { items } = await fetchMaterials(ownerType, ownerId);
      const mainRow = items.find((m) => m.kind === "main");
      const rawMain = mainRow ? { url: mainRow.url, name: mainRow.name } : fallbackPdf ? { url: fallbackPdf.url, name: fallbackPdf.name ?? null } : null;
      const signedMain = rawMain ? await signedUrl(rawMain.url) : null;
      setMain(signedMain ? { url: signedMain, name: rawMain!.name } : null);
      const atts = items.filter((m) => m.kind === "attachment");
      const signedAtts = await Promise.all(atts.map(async (a) => ({ id: a.id, url: await signedUrl(a.url), name: a.name, size_bytes: a.size_bytes })));
      setAttachments(signedAtts.filter((a): a is { id: string; url: string; name: string | null; size_bytes: number | null } => !!a.url));
      setLoaded(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownerType, ownerId]);

  if (!loaded) return null;
  if (!main && attachments.length === 0) return null;

  const downloadAll = () => {
    const all = [main, ...attachments].filter(Boolean) as { url: string; name?: string | null }[];
    all.forEach((f, i) => setTimeout(() => window.open(f.url, "_blank", "noopener"), i * 250));
  };

  return (
    <div>
      {main && (
        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", marginBottom: attachments.length ? 24 : 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: "1px solid var(--border)", background: "#f8fafc" }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", display: "flex", alignItems: "center", gap: 8 }}>
              <PdfIcon /> {main.name || "Document.pdf"}
            </span>
            <a href={main.url} target="_blank" rel="noreferrer" style={{ color: "#1b7a44", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open ↗</a>
          </div>
          <iframe src={`${main.url}#view=FitH`} title={main.name || "PDF"} style={{ width: "100%", height: embedHeight, minHeight: 460, border: "none", display: "block" }} />
        </div>
      )}

      {attachments.length > 0 && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 700, margin: 0 }}>Lesson Materials</h3>
            {attachments.length + (main ? 1 : 0) > 1 && (
              <button onClick={downloadAll} style={{ background: "none", border: "none", color: "#1b7a44", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Download all</button>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {attachments.map((a) => (
              <a key={a.id} href={a.url} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#f1f5f9", border: "1px solid var(--border)", borderRadius: 12, textDecoration: "none", color: "#0f172a" }}>
                <PdfIcon />
                <span style={{ flex: 1, fontWeight: 600 }}>{a.name || "File"}</span>
                {a.size_bytes != null && <span style={{ color: "#94a3b8", fontSize: 13 }}>{prettySize(a.size_bytes)}</span>}
                <span style={{ color: "#1b7a44", fontWeight: 700, fontSize: 14 }}>⬇ Download</span>
              </a>
            ))}
          </div>
          <div style={{ color: "#94a3b8", fontSize: 13, marginTop: 8 }}>{attachments.length} item{attachments.length !== 1 ? "s" : ""}</div>
        </div>
      )}
    </div>
  );
}

function PdfIcon() {
  return (
    <span style={{ display: "inline-grid", placeItems: "center", width: 26, height: 26, borderRadius: 6, background: "#dc2626", color: "#fff", fontSize: 9, fontWeight: 800, flexShrink: 0 }}>PDF</span>
  );
}
