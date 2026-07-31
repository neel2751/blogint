import type { Metadata } from 'next';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { LegalPage, LegalSection } from '../_components/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How BlogInt collects, uses, and protects your data.',
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy"
      emphasis="policy."
      updated="31 July 2026"
    >
      <LegalSection title="1. What we collect">
        <p>
          Account details you give us directly (name, email, workspace and website
          information), content you create or upload (posts, media, author profiles),
          and usage data such as login times, API calls, and plan/usage limits shown
          in your dashboard.
        </p>
      </LegalSection>

      <LegalSection title="2. How we use it">
        <p>
          To operate your account and websites, enforce plan limits, send
          transactional email (password resets, billing receipts, trial reminders),
          and — only if you connect it — sync subscriber data with Mailchimp.
        </p>
      </LegalSection>

      <LegalSection title="3. Who we share it with">
        <p>
          We use a small set of subprocessors to run the service: Stripe for
          billing, AWS S3 for media storage, and an email provider for transactional
          mail. We do not sell your data, and these processors only receive what
          they need to provide their service to us.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies">
        <p>
          We use a small number of first-party cookies: your locale/region
          preference, and your authentication session. We don&apos;t use third-party
          advertising or tracking cookies on the marketing site.
        </p>
      </LegalSection>

      <LegalSection title="5. Your rights">
        <p>
          If you&apos;re in the UK or EU, you have rights under UK/EU GDPR to access,
          correct, export, or delete your personal data. You can delete your account
          and content from your dashboard, or contact us to request this directly.
        </p>
      </LegalSection>

      <LegalSection title="6. Data retention">
        <p>
          We retain account and content data for as long as your account is active.
          Deleted content and cancelled accounts are purged from active systems
          within 30 days, subject to what we&apos;re legally required to keep (e.g.
          billing records).
        </p>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>
          Questions about this policy or a data request? Reach out via our{' '}
          <a
            href={localeHref(locale, '/contact')}
            className="text-primary underline underline-offset-2"
          >
            contact page
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
