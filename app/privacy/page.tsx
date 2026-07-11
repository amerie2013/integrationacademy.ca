import { LegalLayout } from "../../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Integration Academy",
  description: "How Integration Academy collects, uses, and protects your personal information, including students' data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Privacy Policy"
      updated="June 27, 2026"
      intro="Integration Academy respects your privacy. This policy explains what personal information we collect, how we use and protect it, and your choices. It is written to align with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA)."
    >
      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Account information</strong> — name, email, role (student/teacher/admin), grade or level, and password (stored hashed by our authentication provider).</li>
        <li><strong>Learning activity</strong> — courses you enrol in, lesson progress, quiz attempts and scores, assignment submissions and files, saved graphs, and teacher feedback.</li>
        <li><strong>Billing information</strong> — subscription plan and status. Card payments are processed by <strong>Stripe</strong>; we receive confirmation and limited metadata but <em>never</em> your full card number.</li>
        <li><strong>Technical data</strong> — basic log and device information needed to operate and secure the Service.</li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To provide the Service — deliver lessons, grade quizzes, track progress, and let teachers manage their classes.</li>
        <li>To process subscriptions and payments.</li>
        <li>To communicate with you about your account, security, and important changes.</li>
        <li>To maintain, secure, and improve the platform.</li>
      </ul>
      <p>We do <strong>not</strong> sell your personal information, and we do not show third-party advertising to students.</p>

      <h2>3. Students and minors</h2>
      <p>Much of our audience is in Grades 9–12. We collect only the information needed for the educational service. Where a student is a minor, a parent, guardian, or teacher is responsible for consent. A teacher with a class can see that class's students' names, submissions, scores, and progress for the purpose of instruction and grading. Parents or guardians may contact us to review or delete a child's information.</p>

      <h2>4. Service providers</h2>
      <p>We share data only with providers that help us run the Service, under appropriate safeguards:</p>
      <ul>
        <li><strong>Supabase</strong> — database, authentication, and file storage.</li>
        <li><strong>Stripe</strong> — payment processing (subject to Stripe's own privacy policy).</li>
        <li>Our hosting/infrastructure provider for serving the website.</li>
      </ul>

      <h2>5. Data retention</h2>
      <p>We keep your information while your account is active and as needed to provide the Service or meet legal and accounting obligations. You may request deletion of your account and associated personal data (see “Your rights” below); some records may be retained where required by law.</p>

      <h2>6. Security</h2>
      <p>We use industry-standard measures — encrypted connections (HTTPS), hashed passwords, and database access controls (row-level security) — to protect your information. No method of transmission or storage is perfectly secure, but we take reasonable steps to safeguard your data.</p>

      <h2>7. Your rights</h2>
      <p>Subject to applicable law, you may request to access, correct, or delete your personal information, or withdraw consent. To make a request, email <a href="mailto:info@integrationacademy.ca">info@integrationacademy.ca</a>. We will respond within a reasonable time.</p>

      <h2>8. Cookies</h2>
      <p>We use only the cookies and similar technologies necessary to keep you signed in and to operate the Service. We do not use third-party advertising or cross-site tracking cookies.</p>

      <h2>9. International transfer</h2>
      <p>Our providers may process or store data outside your province or country (for example, in the United States). Where this happens, the information remains subject to safeguards consistent with this policy and applicable law.</p>

      <h2>10. Changes &amp; contact</h2>
      <p>We may update this policy; material changes will be posted here with a new date. Questions or privacy requests: <a href="mailto:info@integrationacademy.ca">info@integrationacademy.ca</a> or 226-602-8853.</p>
    </LegalLayout>
  );
}
