import { supabase } from "./supabase";

/**
 * Turn a stored Supabase *public* storage URL into a short-lived *signed* URL.
 * Signing goes through the caller's session, so it is gated by the storage RLS
 * policies (course_access) — a user without access to the file's course gets
 * null instead of a working link. Non-Supabase / already-usable URLs pass
 * through unchanged.
 */
export async function signedUrl(publicUrl: string | null | undefined, expiresIn = 3600): Promise<string | null> {
  if (!publicUrl) return null;
  const m = publicUrl.match(/\/storage\/v1\/object\/(?:public|sign)\/([^/]+)\/(.+?)(?:\?|$)/);
  if (!m) return publicUrl; // external URL we can't sign — leave as-is
  const bucket = m[1];
  const path = decodeURIComponent(m[2]);
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, expiresIn);
  return error ? null : data.signedUrl;
}

/** Sign a known bucket + path directly (RLS-checked via the caller's session). */
export async function signedPathUrl(bucket: string, path: string, expiresIn = 3600): Promise<string | null> {
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, expiresIn);
  return error ? null : data.signedUrl;
}
