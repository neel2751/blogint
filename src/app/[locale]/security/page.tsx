import type { Metadata } from 'next';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { LegalPage, LegalSection } from '../_components/legal';

export const metadata: Metadata = {
  title: 'Security',
  description: 'How BlogInt protects your account and content.',
};

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <LegalPage eyebrow="Legal" title="Security" emphasis="practices." updated="31 July 2026">
      <LegalSection title="Account protection">
        <p>
          Optional two-factor authentication and automatic account lockout after
          repeated failed sign-in attempts. Sessions are tied to your device and
          expire on inactivity.
        </p>
      </LegalSection>

      <LegalSection title="Data in transit & at rest">
        <p>
          All traffic to BlogInt is encrypted over HTTPS. Media uploads are stored
          in AWS S3; database backups and stored credentials are encrypted at rest.
        </p>
      </LegalSection>

      <LegalSection title="Access control">
        <p>
          Role-based access control scopes what each team member can see and do
          within a workspace. Sensitive administrative actions are recorded in an
          audit log.
        </p>
      </LegalSection>

      <LegalSection title="Payments">
        <p>
          We never store your card details — all payment processing and card
          storage is handled by Stripe, a PCI-DSS Level 1 certified provider.
        </p>
      </LegalSection>

      <LegalSection title="Reporting a vulnerability">
        <p>
          Found a security issue? Please report it responsibly via our{' '}
          <a
            href={localeHref(locale, '/contact')}
            className="text-primary underline underline-offset-2"
          >
            contact page
          </a>{' '}
          rather than a public issue tracker, and we&apos;ll respond as quickly as we
          can.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
