// One-off: move inline base64 images in already-saved graphs into the
// `graph-images` storage bucket, replacing each data: URL with a short public
// URL. New uploads already do this (see components/Calculator.tsx); this fixes
// figures saved before that change so their embeds/JSON shrink too.
//
// Run AFTER the graphs + graph_images migrations are applied. Re-runnable: rows
// with no base64 images are skipped.
// Usage: node scripts/migrate-graph-images.mjs

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const BUCKET = "graph-images";
const EXT_FROM_MIME = { "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif", "image/webp": "webp", "image/svg+xml": "svg" };

// Decode a data: URL into { buffer, contentType, ext }.
function decodeDataUrl(src) {
  const m = /^data:([^;,]+)?(;base64)?,(.*)$/s.exec(src);
  if (!m) return null;
  const contentType = m[1] || "image/png";
  const isB64 = !!m[2];
  const data = m[3];
  const buffer = isB64 ? Buffer.from(data, "base64") : Buffer.from(decodeURIComponent(data), "utf8");
  return { buffer, contentType, ext: EXT_FROM_MIME[contentType] || "png" };
}

async function run() {
  const { data: rows, error } = await db.from("graphs").select("id, data");
  if (error) throw error;
  console.log(`Scanning ${rows.length} graph(s)…`);

  let changedRows = 0;
  let uploaded = 0;

  for (const row of rows) {
    const data = row.data;
    if (!data || !Array.isArray(data.images) || data.images.length === 0) continue;

    let rowChanged = false;
    for (const img of data.images) {
      if (typeof img.src !== "string" || !img.src.startsWith("data:")) continue;
      const decoded = decodeDataUrl(img.src);
      if (!decoded) { console.warn(`  ! ${row.id}: unreadable data URL, skipping`); continue; }

      const path = `migrated/${row.id}-${Math.random().toString(36).slice(2, 8)}.${decoded.ext}`;
      const up = await db.storage.from(BUCKET).upload(path, decoded.buffer, { contentType: decoded.contentType, upsert: false });
      if (up.error) { console.warn(`  ! ${row.id}: upload failed (${up.error.message})`); continue; }

      img.src = db.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
      uploaded++;
      rowChanged = true;
    }

    if (rowChanged) {
      const upd = await db.from("graphs").update({ data }).eq("id", row.id);
      if (upd.error) { console.warn(`  ! ${row.id}: row update failed (${upd.error.message})`); continue; }
      changedRows++;
      console.log(`  ✓ ${row.id}`);
    }
  }

  console.log(`Done. Uploaded ${uploaded} image(s) across ${changedRows} graph(s).`);
}

run().catch((e) => { console.error(e); process.exit(1); });
