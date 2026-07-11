// Resolves the seed teacher/admin password without committing a secret to source.
// Priority: process.env.SEED_TEACHER_PASSWORD, then the passed `env` object
// (parsed from .env.local). If neither is set, a strong random password is
// generated once and printed so the operator can record it.
import { randomBytes } from "crypto";

let _cached;
export function teacherPassword(env = {}) {
  if (_cached) return _cached;
  const fromEnv = (process.env.SEED_TEACHER_PASSWORD || env.SEED_TEACHER_PASSWORD || "").trim();
  if (fromEnv) { _cached = fromEnv; return _cached; }
  _cached = "IA-" + randomBytes(12).toString("base64url");
  console.warn(
    `\n[seed] SEED_TEACHER_PASSWORD is not set — generated a random admin password:\n` +
    `        ${_cached}\n` +
    `  Record it now, or set SEED_TEACHER_PASSWORD in .env.local for a stable value.\n`
  );
  return _cached;
}
