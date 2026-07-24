"use client";

import { useState } from "react";
import { signedUrl } from "../lib/storage";

/**
 * A link to a student's uploaded submission. The `submissions` bucket is private
 * (RLS: owner + course teacher + admin), so the stored URL isn't directly
 * openable — we mint a short-lived signed URL on click. Signing runs through the
 * caller's session, so a viewer without access simply gets no link.
 */
export function SubmissionLink({ url, name, style }: { url: string | null | undefined; name?: string | null; style?: React.CSSProperties }) {
  const [busy, setBusy] = useState(false);
  if (!url) return null;

  async function open(e: React.MouseEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    const signed = await signedUrl(url);
    setBusy(false);
    if (signed) window.open(signed, "_blank", "noopener,noreferrer");
    else alert("This file couldn't be opened — you may not have access, or it's no longer available.");
  }

  return (
    <a href={url} onClick={open} rel="noreferrer" style={style}>
      📎 {busy ? "Opening…" : name || "attached file"}
    </a>
  );
}
