import { execFileSync } from "child_process";
import path from "path";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = path.resolve("scripts/_pdf");
const names = process.argv.slice(2);
for (const n of names) {
  const png = path.join(OUT, "preview_" + n + ".png");
  const html = "file:///" + path.join(OUT, n + ".html").replace(/\\/g, "/");
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--window-size=860,1180", `--screenshot=${png}`, html], { stdio: "ignore" });
  console.log("shot", n);
}
