// MTH1W chapter 3 (coding) — same self-study lesson format as chapters 1–2, plus helpers for Python code.
// Every output quoted in a lesson is COMPUTED by running the code with lib/miniPython (the same
// interpreter the codeTracer widget uses), so the text can never disagree with what students see.
export * from "../mth1w-ch2/lib.mjs";
import { runAll } from "../../lib/miniPython.ts";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const PRE = `style="background:#0f172a;color:#e2e8f0;border-radius:8px;padding:10px 14px;margin:8px 0;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:14px;line-height:1.55;overflow-x:auto;white-space:pre;"`;

/** A Python listing as HTML. */
export const py = (code) => `<pre class="code" ${PRE}>${esc(code.replace(/^\n/, ""))}</pre>`;
/** Inline code. */
export const ic = (s) => `<code style="background:#eef2ff;border-radius:4px;padding:1px 5px;font-size:0.95em;">${esc(s)}</code>`;
/** The printed output of a program (trailing newline removed). Throws if the program fails. */
export function out(code) {
  const r = runAll(code.replace(/^\n/, ""));
  if (r.error) throw new Error(`program failed (${r.error.message}) in:\n${code}`);
  return r.output.replace(/\n$/, "");
}
/** The error a program raises, e.g. "NameError: name 'x' is not defined" (throws if it does NOT fail). */
export function err(code) {
  const r = runAll(code.replace(/^\n/, ""));
  if (!r.error) throw new Error(`expected an error in:\n${code}`);
  return { line: r.error.line, message: r.error.message, output: r.output.replace(/\n$/, "") };
}
/** Output shown as a console block. */
export const shell = (text) => `<pre style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:8px 12px;margin:6px 0;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:14px;white-space:pre-wrap;">${esc(text)}</pre>`;
