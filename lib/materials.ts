import { supabase } from "./supabase";

export type OwnerType = "lesson" | "assignment" | "quiz";

export type Material = {
  id: string;
  owner_type: OwnerType;
  owner_id: string;
  kind: "main" | "attachment";
  url: string;
  name: string | null;
  size_bytes: number | null;
  position: number;
};

/** Fetch a content item's materials. `supported` is false if the table is missing. */
export async function fetchMaterials(ownerType: OwnerType, ownerId: string): Promise<{ supported: boolean; items: Material[] }> {
  const { data, error } = await supabase
    .from("materials")
    .select("*")
    .eq("owner_type", ownerType)
    .eq("owner_id", ownerId)
    .order("kind", { ascending: true })
    .order("position", { ascending: true });
  if (error) return { supported: false, items: [] };
  return { supported: true, items: (data ?? []) as Material[] };
}

/** Upload a file to the `materials` storage bucket and return its public URL. */
export async function uploadMaterialFile(file: File, ownerType: OwnerType, ownerId: string): Promise<{ url: string; name: string; size: number }> {
  const safe = file.name.replace(/[^\w.\-]/g, "_");
  const path = `${ownerType}/${ownerId}/${Date.now()}-${safe}`;
  const { error } = await supabase.storage.from("materials").upload(path, file, { upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from("materials").getPublicUrl(path);
  return { url: data.publicUrl, name: file.name, size: file.size };
}

export function prettySize(bytes: number | null | undefined): string {
  if (!bytes && bytes !== 0) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} kb`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
