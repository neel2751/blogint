import type { Metadata } from 'next';

import type { Locale } from '@/lib/i18n';
import { localeHref, appHref } from '@/lib/marketing-links';
import { LegalPage, LegalSection } from '../../_components/legal';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Set up your first site, invite your team, and configure domains step by step.',
};

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <LegalPage eyebrow="Resources" title="Get started" emphasis="with BlogInt." updated="8 October 2026">
      <LegalSection title="1. Create your first site">
        <p>
          From your dashboard, click <strong>New site</strong> and give it a name. Each site
          is an isolated tenant with its own authors, categories, and content — you can run
          as many as your plan allows from the same account.
        </p>
      </LegalSection>

      <LegalSection title="2. Connect a domain">
        <p>
          New sites get a free <code>yourname.blogint.site</code> subdomain automatically.
          To use your own domain, add it under Site Settings → Domains and point a CNAME
          record at the host shown there — BlogInt provisions the SSL certificate for you.
        </p>
      </LegalSection>

      <LegalSection title="3. Invite your team">
        <p>
          Add collaborators from Site Settings → Authors & Roles. Workspace roles (Owner,
          Editor, Author, Viewer) scope what each person can see and change, per site.
        </p>
      </LegalSection>

      <LegalSection title="4. Write & schedule content">
        <p>
          Use the editor to draft posts, attach media, and set categories. Publish
          immediately or schedule a future publish time — every edit is kept as a revision
          you can roll back to.
        </p>
      </LegalSection>

      <LegalSection title="5. Pull content via the API">
        <p>
          Every site exposes a versioned REST API for posts, authors, categories, and
          search, so you can render your content in any frontend. See the{' '}
          <a
            href={localeHref(locale, '/resources/api')}
            className="text-primary underline underline-offset-2"
          >
            API reference
          </a>{' '}
          for endpoints and authentication.
        </p>
      </LegalSection>

      <LegalSection title="6. Manage billing">
        <p>
          Every account starts on a 14-day free trial. From there, pick a plan and top up
          websites, API requests, storage, or seats as prepaid add-ons — usage and limits
          are visible in your dashboard at all times.
        </p>
      </LegalSection>

      <LegalSection title="Need more help?">
        <p>
          Can&apos;t find what you&apos;re looking for?{' '}
          <a
            href={localeHref(locale, '/contact')}
            className="text-primary underline underline-offset-2"
          >
            Contact us
          </a>{' '}
          or{' '}
          <a href={appHref('/signup')} className="text-primary underline underline-offset-2">
            start a free trial
          </a>{' '}
          to explore the dashboard yourself.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
