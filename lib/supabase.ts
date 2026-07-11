import { createClient } from "@supabase/supabase-js";

// Fall back to harmless placeholders so the app still renders before
// .env.local is filled in. Real auth/DB calls stay inert until configured.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "public-anon-placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
