import { supabase } from "./supabase";

export type Worksheet = {
  id: string;
  course_id: string;
  code: string;
  title: string;
  position: number;
  worksheet_url: string | null;
  worksheet_name: string | null;
  answers_url: string | null;
  answers_name: string | null;
  published: boolean;
};

/** List a course's worksheets. `supported` is false if the table is missing. */
export async function fetchWorksheets(courseId: string): Promise<{ supported: boolean; items: Worksheet[] }> {
  const { data, error } = await supabase
    .from("worksheets")
    .select("*")
    .eq("course_id", courseId)
    .order("position", { ascending: true })
    .order("code", { ascending: true });
  if (error) return { supported: false, items: [] };
  return { supported: true, items: (data ?? []) as Worksheet[] };
}

export async function fetchWorksheet(id: string): Promise<Worksheet | null> {
  const { data } = await supabase.from("worksheets").select("*").eq("id", id).single();
  return (data as Worksheet) ?? null;
}

/** Upload a worksheet PDF to the `worksheets` bucket; returns its public URL. */
export async function uploadWorksheetFile(file: File, courseId: string, code: string, kind: "worksheet" | "answers"): Promise<{ url: string; name: string }> {
  const safe = file.name.replace(/[^\w.\-]/g, "_");
  const path = `${courseId}/${code}-${kind}-${Date.now()}-${safe}`;
  const { error } = await supabase.storage.from("worksheets").upload(path, file, { upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from("worksheets").getPublicUrl(path);
  return { url: data.publicUrl, name: file.name };
}
