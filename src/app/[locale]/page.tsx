'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  Star,
  Sparkles,
  Play,
  TrendingUp,
  Calendar,
  Globe,
  Code2,
  Rss,
  Users,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { localeHref } from '@/lib/marketing-links';
import {
  Pill,
  SectionLabel,
  Display,
  Serif,
  serif,
} from './_components/site-ui';
import { WaitlistForm } from './_components/waitlist-form';
import { useMarketing } from './_components/marketing-context';

/* ------------------------------------------------------------------ */
/* Hero + dashboard mockup                                            */
/* ------------------------------------------------------------------ */

function DashboardMock() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3">
        <span className="size-2.5 rounded-full bg-neutral-200" />
        <span className="size-2.5 rounded-full bg-neutral-200" />
        <span className="size-2.5 rounded-full bg-neutral-200" />
        <div className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-neutral-100 px-3 text-xs text-neutral-400 sm:flex">
          app.blogint.com/dashboard
        </div>
      </div>
      <div className="flex">
        <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-neutral-100 p-3 sm:flex">
          <div className="mb-2 flex items-center gap-2 px-2">
            <span className="bg-primary/10 text-primary grid size-6 place-items-center rounded">
              <Sparkles className="size-3.5" />
            </span>
            <span className="text-xs font-semibold">Overview</span>
          </div>
          {(
            [
              ['Dashboard', true],
              ['Websites', false],
              ['Posts', false],
              ['Authors', false],
              ['Analytics', false],
              ['Billing', false],
            ] as const
          ).map(([label, active]) => (
            <div
              key={label}
              className={cn(
                'flex items-center gap-2 rounded-md px-2 py-1.5 text-xs',
                active ? 'bg-primary/10 text-primary font-medium' : 'text-neutral-500',
              )}
            >
              <span
                className={cn('size-1.5 rounded-full', active ? 'bg-primary' : 'bg-neutral-300')}
              />
              {label}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ['Monthly reads', '64,938', '+12%'],
              ['Subscribers', '8,214', '+4.2%'],
              ['Published', '142', '+7'],
              ['API calls', '318K', '+9%'],
            ].map(([label, value, delta]) => (
              <div
                key={label}
                className="rounded-lg border border-neutral-100 bg-neutral-50/60 p-3"
              >
                <p className="text-[10px] text-neutral-400">{label}</p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">{value}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                  <TrendingUp className="size-3" />
                  {delta}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-neutral-100 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-neutral-700">Audience growth</p>
              <span className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500">
                Last 30 days
              </span>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {[38, 52, 44, 61, 55, 72, 66, 80, 74, 88, 82, 95].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={cn('flex-1 rounded-t', i > 8 ? 'bg-primary' : 'bg-primary/25')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { locale } = useMarketing();
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(232,120,60,0.12),transparent)]" />
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Pill>Now in early access</Pill>
        </div>
        <h1 className="mt-6 text-4xl leading-[1.03] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          Run Every Blog From
          <br />
          <Serif className="text-primary">One Headless CMS</Serif>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-neutral-500">
          BlogInt is the multi-tenant blog CMS for modern teams. Manage unlimited
          authors, publish across every site, and serve it all through a fast
          content API — from a single dashboard.
        </p>
        <div className="mt-8">
          <WaitlistForm source="website/home-hero" />
        </div>
        <div className="mt-5 flex items-center justify-center gap-5 text-sm text-neutral-500">
          <a href="#features" className="inline-flex items-center gap-1.5 hover:text-neutral-900">
            <Play className="size-3.5" /> See how it works
          </a>
          <span className="text-neutral-300">·</span>
          <a href={localeHref(locale, '/book-a-demo')} className="hover:text-neutral-900">
            Book a demo
          </a>
        </div>
      </div>
      <div className="mt-14">
        <DashboardMock />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Logo cloud (illustrative placeholders, not real customers)        */
/* ------------------------------------------------------------------ */

const BRANDS = ['Northwind', 'Acme', 'Lumen', 'Vertex', 'Monogram', 'Cadence', 'Helio'];

function LogoCloud() {
  return (
    <section className="border-y border-neutral-200/70 px-5 py-8">
      <p className="mb-5 text-center text-xs tracking-widest text-neutral-400 uppercase">
        Built for content teams of every size
      </p>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {BRANDS.map((b) => (
          <span key={b} className="text-lg font-semibold tracking-tight text-neutral-400/80">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Intro statement + capability tiles                                 */
/* ------------------------------------------------------------------ */

const CAPABILITIES: [string, string][] = [
  ['14-day', 'Free trial, no card required'],
  ['Multi-site', 'One dashboard for every blog'],
  ['REST API', 'Headless content delivery'],
  ['2FA', 'Secure accounts by default'],
];

function Intro() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>About BlogInt</SectionLabel>
        <p className="mt-6 max-w-3xl text-2xl leading-snug tracking-tight text-neutral-900 sm:text-3xl">
          BlogInt is the{' '}
          <Serif className="text-primary">headless, multi-tenant blog CMS</Serif> built
          for modern teams. Plan, publish, and deliver content everywhere —
          without the manual chaos.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-y-10 border-t border-neutral-200 pt-10 md:grid-cols-4">
          {CAPABILITIES.map(([value, label]) => (
            <div key={label} className="px-2">
              <p className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Use cases (tabbed)                                                 */
/* ------------------------------------------------------------------ */

const TEAMS = {
  Publishers: {
    title: 'Every publication, one workspace',
    body: 'Run dozens of blogs and brands side by side, each with its own authors, categories, and domain.',
    rows: [
      ['techdaily.blog', '42 authors', 'Live'],
      ['the-lumen-review', '18 authors', 'Live'],
      ['field-notes.io', 'Draft site', 'Setup'],
    ],
  },
  Marketing: {
    title: 'Ship campaigns on schedule',
    body: 'Plan editorial calendars, schedule launches, and keep every channel in sync from one place.',
    rows: [
      ['Product launch post', 'Scheduled', 'Fri 9:00'],
      ['Customer story', 'In review', 'Active'],
      ['Newsletter → Mailchimp', 'Synced', 'Done'],
    ],
  },
  Developers: {
    title: 'A content API, not a monolith',
    body: 'Query posts, authors, and categories over REST and render them in any frontend you like.',
    rows: [
      ['GET /api/v1/posts', '200 OK', '38ms'],
      ['GET /api/v1/authors', '200 OK', '24ms'],
      ['GET /feed/rss', '200 OK', '19ms'],
    ],
  },
  Agencies: {
    title: 'One login, every client',
    body: 'Manage each client blog as its own tenant with scoped team access and per-site analytics.',
    rows: [
      ['Client · Northwind', '3 members', 'Owner'],
      ['Client · Acme', '2 members', 'Editor'],
      ['Client · Helio', '1 member', 'Viewer'],
    ],
  },
  Startups: {
    title: 'Launch a blog in an afternoon',
    body: 'Start on the free trial, publish on a subdomain, and add a custom domain when you are ready.',
    rows: [
      ['blog.yourstartup.com', 'Custom domain', 'Live'],
      ['First 5 posts', 'Published', 'Done'],
      ['14-day trial', 'Active', '9 days left'],
    ],
  },
};

function UseCases() {
  const teams = Object.keys(TEAMS) as (keyof typeof TEAMS)[];
  const [active, setActive] = useState<keyof typeof TEAMS>(teams[0]);
  const data = TEAMS[active];

  return (
    <section className="bg-[#f4efe7] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Use cases</SectionLabel>
        <Display lead="Built for every team" emph="that ships content." className="mt-6 max-w-2xl" />
        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr]">
          <div className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-0">
            {teams.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={cn(
                  'flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors md:rounded-none md:border-l-2 md:px-4',
                  t === active
                    ? 'bg-white font-medium text-neutral-900 md:border-primary md:bg-transparent md:text-primary'
                    : 'text-neutral-500 hover:text-neutral-900 md:border-transparent',
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-900 p-6 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.4)]">
            <div className="rounded-xl bg-neutral-800/60 p-5">
              <div className="flex items-center justify-between">
                <span className="bg-primary/20 text-primary rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase">
                  {active}
                </span>
                <span className="text-[10px] text-white/40">Live workspace</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-white">{data.title}</h3>
              <p className="mt-2 max-w-md text-sm text-white/60">{data.body}</p>
              <div className="mt-6 space-y-2">
                {data.rows.map(([label, meta, tag]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="bg-primary/20 text-primary grid size-5 place-items-center rounded">
                        <Check className="size-3" />
                      </span>
                      <span className="font-mono text-xs text-white/80">{label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-white/40">{meta}</span>
                      <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                        {tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Feature grid                                                       */
/* ------------------------------------------------------------------ */

function FeatureCard({
  title,
  children,
  mock,
}: {
  title: string;
  children: React.ReactNode;
  mock: React.ReactNode;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <div className="p-6">
        <h3 className="text-lg font-medium tracking-tight text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm text-neutral-500">{children}</p>
      </div>
      <div className="mt-auto px-6 pb-6">{mock}</div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>The platform</SectionLabel>
        <div className="mt-6">
          <Display lead="One dashboard." emph="Every blog you run." />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <FeatureCard
            title="Every site in one place."
            mock={
              <div className="space-y-2">
                {[
                  ['techdaily.blog', <Globe key="a" className="size-3.5" />],
                  ['the-lumen-review', <Globe key="b" className="size-3.5" />],
                  ['field-notes.io', <Globe key="c" className="size-3.5" />],
                ].map(([site, icon]) => (
                  <div
                    key={site as string}
                    className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50/60 px-3 py-2 text-xs text-neutral-600"
                  >
                    <span className="text-primary">{icon}</span>
                    {site}
                  </div>
                ))}
              </div>
            }
          >
            Manage unlimited blogs as separate tenants — each with its own domain,
            authors, and categories.
          </FeatureCard>

          <FeatureCard
            title="Publish on your schedule."
            mock={
              <div className="space-y-2">
                {['Draft saved', 'Scheduled · Fri 9:00', 'Auto-published'].map((t, i) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50/60 px-3 py-2 text-xs text-neutral-600"
                  >
                    <span
                      className={cn(
                        'grid size-5 place-items-center rounded',
                        i === 1 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-500',
                      )}
                    >
                      <Calendar className="size-3" />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            }
          >
            Draft, revise, and schedule posts to publish themselves — with full
            revision history on every change.
          </FeatureCard>

          <FeatureCard
            title="A fast API for your content."
            mock={
              <div className="rounded-lg border border-neutral-100 bg-neutral-950 p-4 font-mono text-[11px] leading-relaxed">
                <p className="text-emerald-400">GET /api/v1/posts</p>
                <p className="mt-1 text-neutral-500">{'{'}</p>
                <p className="text-neutral-300"> &quot;title&quot;: &quot;Hello world&quot;,</p>
                <p className="text-neutral-300"> &quot;author&quot;: &quot;Ada L.&quot;,</p>
                <p className="text-neutral-300"> &quot;status&quot;: &quot;published&quot;</p>
                <p className="text-neutral-500">{'}'}</p>
              </div>
            }
          >
            Query posts, authors, and categories over REST and render them in any
            frontend — Next.js, mobile, anywhere.
          </FeatureCard>

          <FeatureCard
            title="Plays well with your stack."
            mock={
              <div className="flex flex-wrap gap-2">
                {[
                  [<Rss key="r" className="size-4" />, 'RSS'],
                  [<Code2 key="c" className="size-4" />, 'Atom'],
                  [<Globe key="g" className="size-4" />, 'Sitemap'],
                  [<Users key="m" className="size-4" />, 'Mailchimp'],
                ].map(([icon, label]) => (
                  <span
                    key={label as string}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-600"
                  >
                    <span className="text-primary">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            }
          >
            Auto-generated RSS, Atom, and sitemaps, plus Mailchimp audience sync —
            no plugins to wrangle.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Developer / headless API section (replaces the fake "AI" section) */
/* ------------------------------------------------------------------ */

const ENDPOINTS: [string, string][] = [
  ['GET', '/api/v1/posts'],
  ['GET', '/api/v1/posts/{slug}'],
  ['GET', '/api/v1/authors'],
  ['GET', '/api/v1/categories'],
  ['GET', '/api/v1/search'],
  ['GET', '/api/v1/feed/rss'],
];

function Developers() {
  return (
    <section className="bg-[#f4efe7] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>For developers</SectionLabel>
        <div className="mt-6">
          <Display lead="Headless by design." emph="Yours to build on." className="max-w-2xl" />
        </div>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium tracking-tight text-neutral-900">
              A clean REST API for every site.
            </h3>
            <p className="mt-2 max-w-md text-sm text-neutral-500">
              Content lives in BlogInt; you decide how it&apos;s rendered. Every
              blog exposes the same predictable, versioned endpoints — with
              per-plan usage limits you can watch from the dashboard.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
              {ENDPOINTS.map(([method, path], i) => (
                <div
                  key={path}
                  className={cn(
                    'flex items-center gap-3 px-5 py-3 text-sm',
                    i !== ENDPOINTS.length - 1 && 'border-b border-neutral-100',
                  )}
                >
                  <span className="text-primary bg-primary/10 rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold">
                    {method}
                  </span>
                  <span className="font-mono text-neutral-700">{path}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
              <span className="size-2.5 rounded-full bg-neutral-700" />
              <span className="size-2.5 rounded-full bg-neutral-700" />
              <span className="size-2.5 rounded-full bg-neutral-700" />
              <span className="ml-2 font-mono text-[11px] text-neutral-500">example.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-relaxed text-neutral-300">
              <span className="text-neutral-500">// Fetch the latest posts for a site</span>
              {'\n'}
              <span className="text-purple-400">const</span> res ={' '}
              <span className="text-purple-400">await</span>{' '}
              <span className="text-sky-400">fetch</span>(
              {'\n'} <span className="text-emerald-400">
                &quot;https://api.blogint.com/v1/posts&quot;
              </span>
              ,{'\n'} {'{'} headers: {'{'} Authorization:{' '}
              <span className="text-emerald-400">&quot;Bearer •••&quot;</span> {'}'} {'}'}
              {'\n'});
              {'\n'}
              <span className="text-purple-400">const</span> {'{'} data {'}'} ={' '}
              <span className="text-purple-400">await</span> res.
              <span className="text-sky-400">json</span>();
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials (illustrative)                                        */
/* ------------------------------------------------------------------ */

const TESTIMONIALS = [
  {
    quote:
      'We moved eight brand blogs onto BlogInt and manage them all from one login now. Onboarding a new site takes minutes.',
    name: 'Anita Menéndez',
    role: 'Head of Content, Northwind',
  },
  {
    quote:
      'The content API meant our engineers could keep our Next.js frontend and drop the old monolith CMS. Editors never noticed a thing.',
    name: 'Gianluca Moscato',
    role: 'CTO, Lumen',
  },
  {
    quote:
      'Scheduling, revisions, and Mailchimp sync in one place replaced three tools. Our editors just write and hit publish.',
    name: 'Francesca Romano',
    role: 'Editorial Lead, Cadence',
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return (
    <span className="bg-primary/15 text-primary grid size-9 place-items-center rounded-full text-xs font-semibold">
      {initials}
    </span>
  );
}

function Testimonials() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Loved by teams</SectionLabel>
        <div className="mt-6">
          <Display lead="Loved by editors." emph="Trusted by developers." />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <div className="text-primary flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
                <Avatar name={t.name} />
                <div>
                  <p className="text-sm font-medium text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'How is BlogInt different from other blog tools?',
    a: 'BlogInt is multi-tenant and headless from the start: run many blogs from one dashboard, and deliver content through a REST API to any frontend — instead of being locked into a single themed website.',
  },
  {
    q: 'Is my data secure?',
    a: 'Accounts support two-factor authentication and automatic lockout after repeated failed logins. Sessions are short-lived and every sensitive change is written to an audit log.',
  },
  {
    q: 'Can I import content from another tool?',
    a: 'Yes — you can bring posts and authors across from WordPress, Ghost, and Medium, and everything is available over the API once imported.',
  },
  {
    q: 'What does each plan include?',
    a: 'Every plan includes unlimited posts and authors. Higher tiers raise your number of websites, API request allowance, storage, and team seats — and you can top any dimension up as a prepaid add-on.',
  },
  {
    q: 'How does the free trial work?',
    a: 'Signing up starts a 14-day free trial with elevated limits and no card required. When it ends you drop to the free plan automatically unless you upgrade.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Plans are billed month-to-month with no lock-in, and you keep API and export access to your content.',
  },
];

function Faq() {
  const { locale } = useMarketing();
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#f4efe7] px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <div className="mt-6">
            <h2 className="text-3xl leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Every common question
              <br />
              <Serif className="text-primary">captured here</Serif>
            </h2>
          </div>
          <p className="mt-4 max-w-xs text-sm text-neutral-500">
            Everything you need to know about BlogInt. Still stuck?{' '}
            <a href={localeHref(locale, '/contact')} className="text-primary underline underline-offset-4">
              Contact our team
            </a>
            .
          </p>
        </div>
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-medium text-neutral-900">{f.q}</span>
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-neutral-300 text-neutral-500">
                    {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-4 text-sm leading-relaxed text-neutral-500">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA (dark) with waitlist form                                */
/* ------------------------------------------------------------------ */

function CtaSection() {
  const { locale } = useMarketing();
  return (
    <section className="px-5 py-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0f0d0c] px-6 py-20 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_50%_80%_at_50%_0%,rgba(232,120,60,0.25),transparent)]" />
        <div className="relative">
          <div className="flex justify-center">
            <Pill dark>Join the early access list</Pill>
          </div>
          <h2 className="mt-6 text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            One CMS.
            <br />
            <span className={cn(serif.className, 'text-primary italic')}>Every blog you run.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
            Get an invite and a 14-day free trial — no card required.
          </p>
          <div className="mt-8">
            <WaitlistForm source="website/home-cta" dark />
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm">
            <a href={localeHref(locale, '/book-a-demo')} className="text-white/60 hover:text-white">
              Prefer a walkthrough? Book a demo
              <ArrowRight className="ml-1 inline size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function WebsiteLandingPage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Intro />
      <UseCases />
      <Features />
      <Developers />
      <Testimonials />
      <Faq />
      <CtaSection />
    </>
  );
}
