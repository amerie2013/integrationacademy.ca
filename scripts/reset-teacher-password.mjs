// One-shot: reset teacher@integrationacademy.ca password.
// Usage: node scripts/reset-teacher-password.mjs [newPassword]
import { createClient } from "@supabase/supabase-js";
import { readFileSync, appendFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { randomBytes } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
const env = {};
for (const line of readFileSync(envPath, "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}

const EMAIL = "teacher@integrationacademy.ca";
const pwArg = (process.argv[2] || "").trim();
const password =
  pwArg ||
  (env.SEED_TEACHER_PASSWORD || "").trim() ||
  "IA-" + randomBytes(9).toString("base64url");

const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const { data: list, error: listErr } = await db.auth.admin.listUsers({ perPage: 1000 });
if (listErr) throw listErr;
const user = list.users.find((u) => u.email === EMAIL);
if (!user) {
  console.error(`No user found for ${EMAIL}. Create/seed first.`);
  process.exit(1);
}

const { error } = await db.auth.admin.updateUserById(user.id, {
  password,
  email_confirm: true,
});
if (error) throw error;

if (!env.SEED_TEACHER_PASSWORD) {
  appendFileSync(envPath, `\nSEED_TEACHER_PASSWORD=${password}\n`);
  console.log("Wrote SEED_TEACHER_PASSWORD to .env.local");
}

console.log("\nLogin with:");
console.log(`  Email:    ${EMAIL}`);
console.log(`  Password: ${password}\n`);
