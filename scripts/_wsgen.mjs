// Reusable .ca Tectonic worksheet generator (theme = scripts/mpm2d-worksheets/_preamble.tex).
// Reads TOPICS from _ch4data.mjs, emits {code}_worksheet.pdf + {code}_answers.pdf,
// uploads to the "worksheets" bucket, and updates the worksheets row. MTH1W.
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { createClient } from "@supabase/supabase-js";
// Data file selectable via WS_DATA env (default the chapter-4 set).
const { TOPICS } = await import(process.env.WS_DATA || "./_ch4data.mjs");

const env = Object.fromEntries(fs.readFileSync(".env.local","utf8").split("\n").filter(l=>l.includes("=")).map(l=>{const i=l.indexOf("=");return [l.slice(0,i).trim(), l.slice(i+1).trim().replace(/^["']|["']$/g,"")];}));
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth:{persistSession:false} });
const cid = "fef1dc8e-c6f7-4632-baa1-7eb940130557";
const BIN = "C:\\Users\\am778\\tools\\tectonic\\tectonic.exe";
const DIR = path.resolve("scripts/mpm2d-worksheets");
const B = sb.storage.from("worksheets");
const only = process.argv[2]; // optional code filter e.g. "4.2"

const head = (code) => String.raw`\documentclass[11pt]{article}
\input{_preamble}
\fancyhead[R]{\footnotesize MTH1W \textperiodcentered{} ${code}}
\fancyfoot[C]{\small Page~\thepage}
\definecolor{probgreen}{HTML}{15803D}
\definecolor{probbg}{HTML}{EAF7EF}
\newtcolorbox{qboxg}[1]{colframe=probgreen,colback=probbg,coltitle=white,colbacktitle=probgreen,fonttitle=\bfseries,title={#1},arc=3pt,boxrule=1pt}
\newtcolorbox{recapboxT}[1]{colframe=keygray,colback=keybg,coltitle=white,colbacktitle=keygray,fonttitle=\bfseries,title={#1},arc=3pt,breakable,boxrule=1pt}
\newtcolorbox{keyboxT}[1]{colframe=keygray,colback=keybg,coltitle=white,colbacktitle=keygray,fonttitle=\bfseries,title={#1},arc=3pt,breakable,boxrule=1pt}
`;

const esc = (s) => String(s).replace(/&/g, "\\&");
const titleBlock = (t, ans=false) => String.raw`\begin{center}
{\LARGE\bfseries\color{titleblue}Worksheet ${t.code} --- ${esc(t.title)}}\\[2pt]
{\small Grade 9 Academic (MTH1W) \textperiodcentered{} ${esc(t.unit)}${ans ? String.raw` \textperiodcentered{} Answer Key` : ``}}
\end{center}
`;

function worksheetTex(t){
  const ex = t.examples.map((e,i)=>String.raw`\begin{example}{ex${i}}{Example ${i+1} --- ${e[0]}}
${e[1]}
\soln ${e[2]}
\end{example}
`).join("\n");
  const probs = t.problems.map((p)=>{
    const body = typeof p[2]==="number" ? String.raw`\workspace{${p[2]}cm}` : p[2];
    return String.raw`\begin{qboxg}{${p[0]}}
${p[1]}${body ? "\n"+body : ""}
\end{qboxg}
`;}).join("\n");
  const concepts = t.concepts.map(([h,b])=>String.raw`\lh{${h}}${b}`).join("\n");
  return head(t.code) + String.raw`
\begin{document}

${titleBlock(t)}
\begin{ideabox}
${t.bigideas}
\end{ideabox}

\begin{learnbox}
${concepts}
\end{learnbox}

\sech{Worked Examples}

${ex}
\begin{center}
\textbf{\large\color{titleblue}${t.cheer ?? "Now push yourself on the problems below!"}}
\end{center}

\clearpage
\sech{${t.code} ${esc(t.title)}: Practice questions}
For each problem, show your reasoning clearly in the space provided.

${probs}
\end{document}
`;
}

function answersTex(t){
  const recap = t.problems.map(p=>String.raw`  \item ${p[1]}`).join("\n");
  const key = t.answers.map(a=>String.raw`  \item ${a}`).join("\n");
  return head(t.code) + String.raw`
\begin{document}

${titleBlock(t,true)}
\vspace{4pt}

\begin{recapboxT}{${t.code} ${esc(t.title)}: Practice questions}
\begin{enumerate}[leftmargin=*,itemsep=5pt]
${recap}
\end{enumerate}
\end{recapboxT}

\begin{keyboxT}{${t.code} ${esc(t.title)}: Answer key}
\begin{enumerate}[leftmargin=*,itemsep=5pt]
${key}
\end{enumerate}
\end{keyboxT}

\end{document}
`;
}

const pub = (n)=>B.getPublicUrl(`${cid}/${n}`).data.publicUrl;
let done=0;
for(const t of TOPICS){
  if(only && t.code!==only) continue;
  if(t.examples.length!==9) throw new Error(`${t.code}: need 9 examples, got ${t.examples.length}`);
  if(t.problems.length!==13 || t.answers.length!==13) throw new Error(`${t.code}: need 13 problems+answers`);
  const wf=`_g_${t.code}_w`, af=`_g_${t.code}_a`;
  fs.writeFileSync(path.join(DIR,wf+".tex"), worksheetTex(t));
  fs.writeFileSync(path.join(DIR,af+".tex"), answersTex(t));
  for(const f of [wf,af]){
    try { execFileSync(BIN, ["-X","compile",f+".tex","--outdir","."], {cwd:DIR, stdio:"pipe"}); }
    catch(e){ console.error(`COMPILE FAIL ${f}:`, (e.stderr?.toString()||e.message).split("\n").filter(l=>/error/i.test(l)).slice(0,4).join(" | ")); process.exit(1); }
  }
  if (process.env.WS_DRY) { console.log(`DRY ${t.code}: compiled ${wf}.pdf / ${af}.pdf in ${DIR} (nothing uploaded)`); done++; continue; }
  const wpdf=fs.readFileSync(path.join(DIR,wf+".pdf")), apdf=fs.readFileSync(path.join(DIR,af+".pdf"));
  await B.upload(`${cid}/${t.code}_worksheet.pdf`, wpdf, {upsert:true, contentType:"application/pdf"});
  await B.upload(`${cid}/${t.code}_answers.pdf`, apdf, {upsert:true, contentType:"application/pdf"});
  await sb.from("worksheets").update({
    worksheet_url: pub(`${t.code}_worksheet.pdf`), worksheet_name:`${t.code}_worksheet.pdf`,
    answers_url: pub(`${t.code}_answers.pdf`), answers_name:`${t.code}_answers.pdf`,
  }).eq("course_id",cid).eq("code",t.code);
  // page counts via pdf trailer scan (rough) — just report sizes
  console.log(`✓ ${t.code} ${t.title}  (worksheet ${Math.round(wpdf.length/1024)}kb, answers ${Math.round(apdf.length/1024)}kb)`);
  for(const f of [wf,af]) for(const ext of [".tex",".pdf",".aux",".log"]) { try{fs.unlinkSync(path.join(DIR,f+ext));}catch{} }
  done++;
}
console.log(`\nDone: ${done} worksheet(s) generated + published.`);
