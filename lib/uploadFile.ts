// Client-side file prep before a submission upload. Students photographing
// handwritten work is the single biggest driver of Supabase storage + egress —
// a raw phone photo is 3–5 MB, and 100 students add up fast. Shrinking images
// here (a 4 MB photo → a few hundred KB) is a ~10× saving that also makes
// uploads faster on classroom wifi. Everything else just gets a size cap.
//
// Pure browser APIs (canvas), no dependencies — so it works within the app's
// strict setup and adds nothing to the bundle.

export const MAX_UPLOAD_MB = 8; // hard ceiling for any single file after prep
const IMAGE_MAX_DIM = 2000; // longest edge after resize, px — plenty to read handwriting
const IMAGE_START_QUALITY = 0.72;
const IMAGE_TARGET_BYTES = 1_000_000; // stop stepping quality down once under ~1 MB

export type PreparedFile = { file: File; note?: string };

const isImage = (f: File) => f.type.startsWith("image/");

export function fmtSize(bytes: number): string {
  return bytes >= 1_000_000 ? `${(bytes / 1_000_000).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1000))} KB`;
}

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("decode failed")); };
    img.src = url;
  });
}

function toBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob | null> {
  return new Promise((res) => canvas.toBlob(res, "image/jpeg", quality));
}

/**
 * Downscale + re-encode an image as JPEG, stepping quality down until it's under
 * the target size. Returns the ORIGINAL if compression can't beat it or the
 * browser can't decode the format (e.g. some HEIC) — never makes a file bigger.
 */
async function compressImage(file: File): Promise<File> {
  try {
    const img = await loadImage(file);
    if (!img.width || !img.height) return file;
    const scale = Math.min(1, IMAGE_MAX_DIM / Math.max(img.width, img.height));
    const w = Math.round(img.width * scale);
    const h = Math.round(img.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(img, 0, 0, w, h);

    let best: Blob | null = null;
    let q = IMAGE_START_QUALITY;
    for (let i = 0; i < 4; i++) {
      const blob = await toBlob(canvas, q);
      if (!blob) break;
      best = blob;
      if (blob.size <= IMAGE_TARGET_BYTES || q <= 0.4) break;
      q -= 0.15;
    }
    if (!best || best.size >= file.size) return file; // no real win — keep original
    const base = file.name.replace(/\.[^.]+$/, "").trim() || "photo";
    return new File([best], `${base}.jpg`, { type: "image/jpeg" });
  } catch {
    return file; // undecodable — hand back the original; the size cap still guards it
  }
}

/**
 * Prepare a picked file for upload: compress images, then enforce a size cap on
 * whatever remains. Throws a friendly Error if the file is still too big.
 *
 * `maxMB` defaults to the student limit; admin/staff uploads (scanned course
 * materials, etc.) can pass a higher ceiling.
 */
export async function prepareUpload(file: File, opts: { maxMB?: number } = {}): Promise<PreparedFile> {
  const maxMB = opts.maxMB ?? MAX_UPLOAD_MB;
  let out = file;
  let note: string | undefined;

  if (isImage(file)) {
    out = await compressImage(file);
    if (out.size < file.size * 0.9) note = `Optimised ${fmtSize(file.size)} → ${fmtSize(out.size)}`;
  }

  if (out.size > maxMB * 1_000_000) {
    throw new Error(
      isImage(file)
        ? `This image is ${fmtSize(out.size)} even after optimising — the limit is ${maxMB} MB. Try taking the photo at a lower resolution.`
        : `That file is ${fmtSize(out.size)} — the limit is ${maxMB} MB. Please upload something smaller.`,
    );
  }
  return { file: out, note };
}
