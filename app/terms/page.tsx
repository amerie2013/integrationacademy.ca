import { LegalLayout } from "../../components/LegalLayout";

export const metadata = {
  title: "Terms of Service — Integration Academy",
  description: "The terms governing your use of Integration Academy's online math learning platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Terms of Service"
      updated="June 27, 2026"
      intro="These Terms of Service (“Terms”) govern your access to and use of the Integration Academy website and learning platform at integrationacademy.ca (the “Service”). By creating an account or using the Service, you agree to these Terms."
    >
      <h2>1. Who we are</h2>
      <p>The Service is operated by Integration Academy (“Integration Academy”, “we”, “us”, or “our”), based in Ontario, Canada. You can reach us at <a href="mailto:info@integrationacademy.ca">info@integrationacademy.ca</a> or 226-602-8853.</p>

      <h2>2. Eligibility &amp; accounts</h2>
      <p>You must provide accurate registration information and keep it up to date. You are responsible for safeguarding your password and for all activity under your account. If you are under the age of majority in your province, you may use the Service only with the involvement and consent of a parent, guardian, or teacher who agrees to these Terms on your behalf.</p>
      <p>Accounts are personal. You may not share your login, resell access, or let others use your subscription.</p>

      <h2>3. Subscriptions, billing &amp; renewals</h2>
      <ul>
        <li>Paid plans (student and tutor, monthly or annual) are billed in advance through our payment processor, <strong>Stripe</strong>. We do not store your full card details.</li>
        <li>Subscriptions <strong>renew automatically</strong> at the end of each billing period at the then-current price, unless you cancel before the renewal date.</li>
        <li>You can cancel at any time from your account billing portal; access continues until the end of the paid period.</li>
        <li>We may change prices on a going-forward basis; we will give reasonable notice before a change affects you.</li>
      </ul>
      <p>Refunds are handled under our <a href="/refund-policy">Refund Policy</a>.</p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to: (a) copy, scrape, redistribute, or republish lessons, worksheets, question banks, or other content; (b) attempt to disrupt, reverse-engineer, or gain unauthorized access to the Service; (c) upload unlawful, infringing, or harmful material; or (d) use the Service to cheat on graded school assessments in violation of your institution's policies.</p>

      <h2>5. Intellectual property</h2>
      <p>All lessons, worksheets, question banks, graphics, software, and other materials on the Service are owned by Integration Academy or its licensors and are protected by copyright and other laws. We grant you a limited, non-exclusive, non-transferable licence to access the content for your own personal or classroom educational use while your account is active. Teachers may use the materials with their own students within the platform; bulk download or external redistribution is not permitted.</p>

      <h2>6. User submissions</h2>
      <p>You retain ownership of work you submit (assignment answers, files, saved graphs). You grant us a licence to store, display, and process those submissions as needed to operate the Service (for example, to show a teacher your work for grading). You are responsible for ensuring you have the right to upload anything you submit.</p>

      <h2>7. Availability &amp; changes</h2>
      <p>We work to keep the Service available but do not guarantee uninterrupted access. We may add, change, or remove features, and may suspend or terminate accounts that violate these Terms.</p>

      <h2>8. Disclaimers &amp; limitation of liability</h2>
      <p>The Service is provided “as is” and “as available.” Integration Academy is an educational resource and does not guarantee any particular academic result, grade, or exam outcome. To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages, and our total liability for any claim is limited to the amount you paid us in the twelve months before the claim.</p>

      <h2>9. Governing law</h2>
      <p>These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable there, without regard to conflict-of-laws rules. Any disputes will be subject to the courts located in Ontario.</p>

      <h2>10. Changes to these Terms</h2>
      <p>We may update these Terms from time to time. Material changes will be posted here with a new “Last updated” date and, where appropriate, communicated by email. Continued use after changes take effect means you accept the revised Terms.</p>

      <h2>11. Contact</h2>
      <p>Questions about these Terms? Email <a href="mailto:info@integrationacademy.ca">info@integrationacademy.ca</a> or call 226-602-8853.</p>
    </LegalLayout>
  );
}
