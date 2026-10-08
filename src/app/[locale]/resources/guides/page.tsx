import type { Metadata } from 'next';
import { Globe, Code2, CalendarClock, Users } from 'lucide-react';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { SectionLabel } from '../../_components/site-ui';
import { PageHero, IconCard } from '../../_components/marketing';
import { LegalSection } from '../../_components/legal';
import { CtaBand } from '../../_components/cta-band';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Practical playbooks for migrating, scheduling, and scaling your publishing.',
};

const GUIDES = [
  { icon: <Globe className="size-5" />, title: 'Migrating from WordPress', anchor: 'migrating' },
  { icon: <Code2 className="size-5" />, title: 'Rendering content in Next.js', anchor: 'nextjs' },
  { icon: <Users className="size-5" />, title: 'Running multiple client blogs', anchor: 'agencies' },
  { icon: <CalendarClock className="size-5" />, title: 'Scheduling & revisions workflow', anchor: 'scheduling' },
];

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PageHero
        label="Resources"
        title="Playbooks for"
        emph="scaling publishing."
        subtitle="Practical guides for migrating, scheduling, and running multiple sites from one BlogInt account."
      />

      <section className="px-5 pb-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>On this page</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {GUIDES.map((g) => (
              <a key={g.anchor} href={`#${g.anchor}`}>
                <IconCard icon={g.icon} title={g.title}>
                  Jump to the guide below.
                </IconCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div id="migrating">
            <LegalSection title="Migrating from WordPress">
              <p>
                Export your WordPress content as a standard WXR file, then import it from
                Site Settings → Import. Posts, categories, and authors map automatically;
                media is re-hosted on BlogInt&apos;s storage so you can safely retire your old
                host once the import is verified.
              </p>
              <p>
                Set up 301 redirects from your old URLs to their BlogInt equivalents before
                switching DNS, so you don&apos;t lose search rankings on the move.
              </p>
            </LegalSection>
          </div>

          <div id="nextjs">
            <LegalSection title="Rendering content in Next.js">
              <p>
                Fetch posts from the{' '}
                <a
                  href={localeHref(locale, '/resources/api')}
                  className="text-primary underline underline-offset-2"
                >
                  content API
                </a>{' '}
                in a server component and render them with your own layout — BlogInt stays
                headless, so you keep full control of markup, styling, and routing.
              </p>
              <p>
                Use <code>generateStaticParams</code> against the posts endpoint to
                pre-render pages at build time, and revalidate on a schedule or via a
                webhook when content changes.
              </p>
            </LegalSection>
          </div>

          <div id="agencies">
            <LegalSection title="Running multiple client blogs">
              <p>
                Create one site per client under a single BlogInt account. Each site has
                its own authors, domain, and analytics, so clients never see each other&apos;s
                data — while you manage every site from one login and one bill.
              </p>
              <p>
                Give client stakeholders the Viewer role so they can review drafts without
                being able to publish or change settings.
              </p>
            </LegalSection>
          </div>

          <div id="scheduling">
            <LegalSection title="Scheduling & revisions workflow">
              <p>
                Draft in the editor, set a future publish time, and BlogInt publishes it
                automatically — no need to be online when it goes live.
              </p>
              <p>
                Every save creates a revision, so you can compare changes or roll back a
                post to any earlier version from the post&apos;s History tab.
              </p>
            </LegalSection>
          </div>
        </div>
      </section>

      <CtaBand title="Put these guides" emph="into practice." />
    </>
  );
}
