// Creates the 2026-10 price list in Stripe (CAD) plus a 13% HST tax rate, and
// prints the env vars to set on Vercel. Safe to rerun: prices are found by
// lookup_key and the tax rate by metadata before creating.
//
//   STRIPE_SECRET_KEY=sk_live_... node scripts/stripe-create-prices.mjs
//
// Existing subscribers stay on their old prices; only new checkouts use these.
const KEY = process.env.STRIPE_SECRET_KEY;
if (!KEY) {
  console.error("Set STRIPE_SECRET_KEY first.");
  process.exit(1);
}

const PRICES = [
  { env: "STRIPE_PRICE_STUDENT_MONTHLY", lookup: "ia_student_monthly_2026_10", product: "Integration Academy — One course (monthly)", amount: 1499, recurring: true },
  { env: "STRIPE_PRICE_STUDENT_SEMESTER", lookup: "ia_student_semester_2026_10", product: "Integration Academy — One course (semester pass)", amount: 6900 },
  { env: "STRIPE_PRICE_STUDENT_ANNUAL", lookup: "ia_student_annual_2026_10", product: "Integration Academy — One course (school-year pass)", amount: 11900 },
  { env: "STRIPE_PRICE_ALLACCESS_MONTHLY", lookup: "ia_allaccess_monthly_2026_10", product: "Integration Academy — All-access (monthly)", amount: 2999, recurring: true },
  { env: "STRIPE_PRICE_ALLACCESS_ANNUAL", lookup: "ia_allaccess_annual_2026_10", product: "Integration Academy — All-access (school-year pass)", amount: 23900 },
];

async function stripe(method, path, params) {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: params ? new URLSearchParams(params).toString() : undefined,
  });
  const json = await res.json();
  if (json.error) throw new Error(`${path}: ${json.error.message}`);
  return json;
}

console.log(`Stripe mode: ${KEY.includes("_live_") ? "LIVE" : "TEST"}\n`);
const lines = [];
for (const p of PRICES) {
  const found = await stripe("GET", `prices?lookup_keys[]=${p.lookup}&active=true`);
  let price = found.data[0];
  if (!price) {
    const product = await stripe("POST", "products", { name: p.product });
    price = await stripe("POST", "prices", {
      product: product.id,
      currency: "cad",
      unit_amount: String(p.amount),
      lookup_key: p.lookup,
      ...(p.recurring ? { "recurring[interval]": "month" } : {}),
    });
    console.log(`created  ${p.lookup}  ${(p.amount / 100).toFixed(2)} CAD`);
  } else {
    console.log(`exists   ${p.lookup}`);
  }
  lines.push(`${p.env}=${price.id}`);
}

// 13% HST, added on top of the listed price at checkout.
const TAX_TAG = "ia_hst_13";
const rates = await stripe("GET", "tax_rates?active=true&limit=100");
let rate = rates.data.find((r) => r.metadata?.tag === TAX_TAG);
if (!rate) {
  rate = await stripe("POST", "tax_rates", {
    display_name: "HST",
    percentage: "13",
    inclusive: "false",
    country: "CA",
    jurisdiction: "ON",
    "metadata[tag]": TAX_TAG,
  });
  console.log("created  HST 13% tax rate");
} else {
  console.log("exists   HST 13% tax rate");
}
lines.push(`STRIPE_TAX_RATE_ID=${rate.id}`);

console.log("\nSet these on Vercel (Production + Preview), then redeploy:\n");
console.log(lines.join("\n"));
