import { LegalLayout } from "../../components/LegalLayout";

export const metadata = {
  title: "Refund Policy — Integration Academy",
  description: "Integration Academy's subscription cancellation and refund terms.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Refund &amp; Cancellation Policy"
      updated="June 27, 2026"
      intro="We want you to be happy with Integration Academy. This policy explains how cancellations and refunds work for our subscriptions."
    >
      <h2>Cancelling your subscription</h2>
      <p>You can cancel any time from your billing portal (Account → Manage billing) or by emailing us. When you cancel, your subscription stops renewing and you keep full access until the end of the period you've already paid for. We don't charge a cancellation fee.</p>

      <h2>Refunds</h2>
      <ul>
        <li><strong>7-day satisfaction window.</strong> If you're not satisfied, contact us within <strong>7 days</strong> of your first payment (or your first payment on a new annual term) and we'll refund that charge in full.</li>
        <li><strong>Monthly plans.</strong> After the 7-day window, monthly payments are non-refundable, but you can cancel to avoid future charges.</li>
        <li><strong>Annual plans.</strong> After the 7-day window, annual plans are generally non-refundable; in genuine cases (for example, an accidental renewal you contact us about promptly) we may offer a prorated refund at our discretion.</li>
        <li><strong>Duplicate or accidental charges</strong> are always refunded.</li>
      </ul>

      <h2>How to request a refund</h2>
      <p>Email <a href="mailto:info@integrationacademy.ca">info@integrationacademy.ca</a> from the address on your account, or call 226-602-8853. Approved refunds are returned to your original payment method via Stripe, usually within 5–10 business days.</p>

      <h2>Free trials &amp; changes</h2>
      <p>If a free trial is offered, you won't be charged until it ends; cancel before it ends to avoid a charge. We may update this policy from time to time; the version in effect when you were billed applies to that charge.</p>

      <h2>Your statutory rights</h2>
      <p>This policy is in addition to any rights you have under Ontario and Canadian consumer-protection law, which it does not limit.</p>
    </LegalLayout>
  );
}
