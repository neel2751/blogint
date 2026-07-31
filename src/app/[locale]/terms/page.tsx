import type { Metadata } from 'next';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { LegalPage, LegalSection } from '../_components/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of BlogInt.',
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <LegalPage eyebrow="Legal" title="Terms of" emphasis="service." updated="31 July 2026">
      <LegalSection title="1. Your account">
        <p>
          You need an account to use BlogInt. You&apos;re responsible for the
          activity on it and for keeping your credentials secure — we support
          two-factor authentication and lock accounts after repeated failed
          sign-in attempts to help with this.
        </p>
      </LegalSection>

      <LegalSection title="2. Subscriptions & billing">
        <p>
          Paid plans are billed through Stripe on the cycle shown at checkout.
          New accounts get a 14-day free trial; you can cancel any time before it
          ends without being charged. Usage above your plan&apos;s limits is billed
          as overage at the rates shown on your plan.
        </p>
      </LegalSection>

      <LegalSection title="3. Your content">
        <p>
          You own the content you publish through BlogInt. You&apos;re responsible
          for having the rights to anything you upload, and for it complying with
          applicable law. We don&apos;t claim ownership of your posts, media, or
          author data.
        </p>
      </LegalSection>

      <LegalSection title="4. Acceptable use">
        <p>
          Don&apos;t use BlogInt to publish unlawful content, distribute malware,
          or attempt to disrupt or gain unauthorised access to the service. We may
          suspend accounts that violate this.
        </p>
      </LegalSection>

      <LegalSection title="5. Cancellation & termination">
        <p>
          You can cancel your subscription at any time from your dashboard; access
          continues until the end of the current billing period. We may suspend or
          terminate accounts for non-payment or violation of these terms.
        </p>
      </LegalSection>

      <LegalSection title="6. Liability">
        <p>
          BlogInt is provided &quot;as is&quot;. To the extent permitted by law, we&apos;re not
          liable for indirect or consequential damages arising from your use of the
          service.
        </p>
      </LegalSection>

      <LegalSection title="7. Changes to these terms">
        <p>
          We may update these terms as the product evolves. Material changes will
          be communicated by email or an in-app notice before they take effect.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact">
        <p>
          Questions about these terms? Reach out via our{' '}
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
