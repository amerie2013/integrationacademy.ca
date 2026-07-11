"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { fetchMaterials, uploadMaterialFile, prettySize, type Material, type OwnerType } from "../lib/materials";

/**
 * Admin authoring panel: set the single "main" PDF (embedded for students) and
 * manage any number of downloadable attachment files. Writes to the `materials`
 * table + `materials` storage bucket (admin RLS).
 */
export function MaterialsEditor({ ownerType, ownerId }: { ownerType: OwnerType; ownerId: string }) {
  const [supported, setSupported] = useState(true);
  const [items, setItems] = useState<Material[]>([]);
  const [busy, setBusy] = useState("");
  const [err, setErr] = useState("");

  async function reload() {
    const { supported, items } = await fetchMaterials(ownerType, ownerId);
    setSupported(supported);
    setItems(items);
  }
  useEffect(() => { reload(); /* eslint-disable-next-line */ }, [ownerType, ownerId]);

  const main = items.find((m) => m.kind === "main");
  const attachments = items.filter((m) => m.kind === "attachment");

  async function add(file: File, kind: "main" | "attachment") {
    setErr(""); setBusy(kind);
    try {
      const { url, name, size } = await uploadMaterialFile(file, ownerType, ownerId);
      if (kind === "main" && main) {
        await supabase.from("materials").delete().eq("id", main.id); // replace existing main
      }
      const pos = kind === "attachment" ? attachments.length : 0;
      const { error } = await supabase.from("materials").insert({ owner_type: ownerType, owner_id: ownerId, kind, url, name, size_bytes: size, position: pos });
      if (error) throw error;
      await reload();
    } catch (e: any) {
      setErr(e?.message?.includes("policy") || e?.message?.includes("row-level") ? "Blocked by RLS — run the 2026-06-17_materials.sql migration." : (e?.message || "Upload failed."));
    } finally { setBusy(""); }
  }

  async function remove(id: string) {
    await supabase.from("materials").delete().eq("id", id);
    await reload();
  }

  if (!supported) {
    return (
      <div style={box}>
        <strong style={{ color: "#9a5b00" }}>📄 Materials</strong>
        <p style={{ color: "#64748b", fontSize: 14, margin: "6px 0 0" }}>
          Run the <code>2026-06-17_materials.sql</code> migration in Supabase to enable PDF lessons & attachments.
        </p>
      </div>
    );
  }

  return (
    <div style={box}>
      <strong style={{ fontSize: 15 }}>📄 Materials (PDF)</strong>

      {/* main PDF */}
      <div style={{ marginTop: 12 }}>
        <div style={lbl}>Main PDF — shown in an embedded viewer</div>
        {main ? (
          <Row name={main.name} size={main.size_bytes} onRemove={() => remove(main.id)}>
            <label style={ghostBtn}>{busy === "main" ? "Uploading…" : "Replace"}
              <input type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && add(e.target.files[0], "main")} />
            </label>
          </Row>
        ) : (
          <label style={uploadBtn}>{busy === "main" ? "Uploading…" : "⬆ Upload main PDF"}
            <input type="file" accept="application/pdf" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && add(e.target.files[0], "main")} />
          </label>
        )}
      </div>

      {/* attachments */}
      <div style={{ marginTop: 16 }}>
        <div style={lbl}>Downloadable materials (worksheet, answer key, …)</div>
        {attachments.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 10 }}>
            {attachments.map((a) => <Row key={a.id} name={a.name} size={a.size_bytes} onRemove={() => remove(a.id)} />)}
          </div>
        )}
        <label style={uploadBtn}>{busy === "attachment" ? "Uploading…" : "⬆ Add a file"}
          <input type="file" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && add(e.target.files[0], "attachment")} />
        </label>
      </div>

      {err && <div style={{ color: "#dc2626", fontSize: 13, marginTop: 10 }}>{err}</div>}
    </div>
  );
}

function Row({ name, size, onRemove, children }: { name: string | null; size: number | null; onRemove: () => void; children?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: "#fff", border: "1px solid var(--border)", borderRadius: 10 }}>
      <span style={{ display: "inline-grid", placeItems: "center", width: 24, height: 24, borderRadius: 6, background: "#dc2626", color: "#fff", fontSize: 8, fontWeight: 800 }}>PDF</span>
      <span style={{ flex: 1, fontWeight: 600, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name || "File"}</span>
      {size != null && <span style={{ color: "#94a3b8", fontSize: 12 }}>{prettySize(size)}</span>}
      {children}
      <button onClick={onRemove} style={{ background: "none", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 7, padding: "4px 9px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Remove</button>
    </div>
  );
}

const box: React.CSSProperties = { background: "#f8fafc", border: "1px solid var(--border)", borderRadius: 14, padding: 18, marginTop: 16 };
const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", marginBottom: 8 };
const uploadBtn: React.CSSProperties = { display: "inline-block", background: "#e7f6ec", color: "#0d5c30", borderRadius: 9, padding: "9px 16px", fontWeight: 700, fontSize: 14, cursor: "pointer" };
const ghostBtn: React.CSSProperties = { display: "inline-block", background: "#fff", border: "1px solid var(--border)", color: "#334155", borderRadius: 8, padding: "5px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer" };
