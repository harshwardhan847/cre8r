import React, { useState, useEffect, useRef } from "react";

import { seo, webPageSchema } from "~/seo";

const SEO_DESCRIPTION =
  "How Cre8r.ai collects, uses, stores and shares personal data for brands and creators, including your rights, retention periods and how to contact us.";

export function meta() {
  return seo({
    title: "Privacy Policy",
    description: SEO_DESCRIPTION,
    path: "/privacy_policy",
    jsonLd: webPageSchema({
      name: "Privacy Policy",
      description: SEO_DESCRIPTION,
      path: "/privacy_policy",
    }),
  });
}

// ─── Reusable Sub-components ──────────────────────────────────────────────────

const SectionHeading = ({
  number,
  title,
}: {
  number?: string;
  title: string;
}) => (
  <div className="mb-6">
    {number && (
      <span className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-1 block">
        Section {number}
      </span>
    )}
    <h2 className="text-2xl font-serif text-stone-900">{title}</h2>
  </div>
);

const Prose = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm leading-relaxed text-stone-600">{children}</p>
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-sm leading-relaxed text-stone-600">
    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400 mt-2" />
    <p>{children}</p>
  </li>
);

const Divider = () => <hr className="border-stone-200 my-12" />;

const MailLink = ({ email }: { email: string }) => (
  <a
    href={`mailto:${email}`}
    className="text-amber-600 underline underline-offset-2 hover:text-amber-700 transition-colors"
  >
    {email}
  </a>
);

const Table = ({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) => (
  <div className="overflow-x-auto rounded-xl border border-stone-200">
    <table className="w-full text-sm text-left border-collapse">
      <thead>
        <tr className="bg-stone-100">
          {columns.map((c) => (
            <th
              key={c}
              className="px-4 py-3 font-semibold text-stone-700 border-b border-stone-200"
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="odd:bg-white even:bg-stone-50">
            {row.map((cell, j) => (
              <td
                key={j}
                className="px-4 py-3 align-top text-stone-600 border-b border-stone-100 leading-relaxed"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ─── Table of Contents ────────────────────────────────────────────────────────

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "collect", label: "What We Collect" },
  { id: "why", label: "Why We Use It" },
  { id: "social", label: "Instagram and YouTube Data" },
  { id: "discovery", label: "Public Creator Profiles" },
  { id: "sharing", label: "Who We Share Data With" },
  { id: "storage", label: "Where Your Data Is Stored" },
  { id: "retention", label: "How Long We Keep Data" },
  { id: "security", label: "Security and Breaches" },
  { id: "rights", label: "Your Rights" },
  { id: "children", label: "Children" },
  { id: "cookies", label: "Cookies and Analytics" },
  { id: "contact", label: "Contact and Grievance Officer" },
  { id: "changes", label: "Changes to This Policy" },
];

const TableOfContents = ({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) => (
  <nav className="sticky top-8 bg-white border border-stone-200 rounded-2xl p-5 w-64 flex-shrink-0 self-start hidden lg:block">
    <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-4">
      Contents
    </p>
    <ul className="space-y-1">
      {sections.map((s) => (
        <li key={s.id}>
          <button
            onClick={() => onSelect(s.id)}
            className={`w-full text-left text-xs px-3 py-1.5 rounded-lg transition-colors ${
              active === s.id
                ? "bg-amber-50 text-amber-700 font-semibold"
                : "text-stone-500 hover:text-stone-800 hover:bg-stone-50"
            }`}
          >
            {s.label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased pt-24 md:pt-32">
      {/* Page Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Grunmech Technologies Private Limited
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 leading-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-stone-500">
            Platform:{" "}
            <span className="font-medium text-stone-700">www.cre8r.ai</span>
            &nbsp;·&nbsp;©Cre8r {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 flex gap-12 items-start">
        <TableOfContents active={activeSection} onSelect={scrollTo} />

        <main className="flex-1 space-y-10 md:space-y-12 min-w-0">
          {/* Intro */}
          <section id="intro" className="scroll-mt-8">
            <div className="space-y-4">
              <Prose>
                This policy explains what personal data Grunmech Technologies
                Private Limited collects through Cre8r.ai ("Cre8r", "we",
                "us"), why, who we share it with, and the choices and rights
                you have. We are the Data Fiduciary for this data under
                India's Digital Personal Data Protection Act, 2023 (DPDP Act).
              </Prose>
              <Prose>
                Who this covers: creators who sign up, people at brands and
                agencies who use Cre8r, visitors to cre8r.ai, and creators
                whose public social media profiles appear in our discovery
                tool.
              </Prose>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-3">
                  The short version
                </p>
                <ul className="space-y-2">
                  {[
                    "We collect what we need to match brands with creators, run campaigns, pay creators and report results.",
                    "When you connect Instagram or YouTube, we read your account statistics through the platforms' official tools. We never post for you or read your private messages.",
                    "We share creator profiles and campaign results with brands. We don't sell your personal data.",
                    "You can see, correct or delete your data, withdraw consent, and complain to us or to the Data Protection Board of India.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-amber-900"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <Prose>This policy is available in English.</Prose>
            </div>
          </section>

          <Divider />

          {/* What we collect */}
          <section id="collect" className="scroll-mt-8">
            <SectionHeading number="1" title="What We Collect" />
            <Table
              columns={["Who You Are", "What We Collect", "Where It Comes From"]}
              rows={[
                [
                  "Creator who signs up",
                  "Name, email, phone, city, date of birth, gender (optional), languages, niche, profile photo, social handles, rates",
                  "You",
                ],
                [
                  "Creator who signs up",
                  "Follower counts, audience age, gender and location, reach, impressions, engagement, post and video performance",
                  "Instagram and YouTube, when you connect your account (section 3)",
                ],
                [
                  "Creator who signs up",
                  "PAN, bank account or UPI ID, GSTIN (if registered), delivery address",
                  "You, when you get paid or receive products",
                ],
                [
                  "Creator who signs up",
                  "Briefs, drafts, messages, approvals, posting links, campaign results and payment history",
                  "Your use of the platform",
                ],
                [
                  "Brand or agency user",
                  "Name, work email, phone, company, job title, billing and GST details, campaign briefs",
                  "You or your company",
                ],
                [
                  "Creator in our discovery tool (not signed up)",
                  "Name or handle, public bio, public posts, follower counts, public engagement and contact details listed publicly for business",
                  "Public social media profiles (section 4)",
                ],
                [
                  "Website visitor",
                  "IP address, device and browser type, pages viewed, referring site, cookie identifiers; anything you type into a demo or contact form",
                  "Your browser, cookies (section 11), and you",
                ],
              ]}
            />
            <div className="mt-6 space-y-3">
              <Prose>
                <strong className="text-stone-800">Audience data.</strong>{" "}
                Audience statistics from Instagram and YouTube are
                aggregated, such as "62% of followers are aged 18–24". We
                don't collect the names or profiles of your individual
                followers.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Sensitive data.</strong>{" "}
                We don't ask for religion, caste, health, sexual orientation
                or political views. Please don't put them in your profile.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Why we use it */}
          <section id="why" className="scroll-mt-8">
            <SectionHeading number="2" title="Why We Use It" />
            <Table
              columns={["Purpose", "Data Used", "Legal Basis Under the DPDP Act"]}
              rows={[
                [
                  "Create and run your account",
                  "Account and contact details",
                  "Consent, and data you gave us for this purpose",
                ],
                [
                  "Show your creator profile to brands and match you with campaigns",
                  "Profile, audience and performance data",
                  "Consent",
                ],
                [
                  "Run campaigns: briefs, approvals, shipping, messages",
                  "Contact details, address, campaign content",
                  "Consent, and data you gave us for this purpose",
                ],
                [
                  "Measure and report campaign results to brands",
                  "Post links and performance data",
                  "Consent",
                ],
                [
                  "Pay creators, deduct TDS, issue TDS certificates, keep tax records",
                  "PAN, bank or UPI details, GSTIN, payment history",
                  "Legal obligation under tax laws",
                ],
                [
                  "Detect fake followers, fraud and misuse",
                  "Profile, audience and engagement data, device and log data",
                  "Consent, and legitimate uses permitted by the Act",
                ],
                [
                  "Show brands public creator profiles in discovery",
                  "Publicly available profile data",
                  "Data the creator made public (section 4)",
                ],
                [
                  "Reply to demo and contact requests",
                  "Contact details, message",
                  "Data you gave us for this purpose",
                ],
                [
                  "Improve the website and platform",
                  "Usage and cookie data",
                  "Consent (non-essential cookies)",
                ],
                [
                  "Send updates and marketing emails",
                  "Email, name",
                  "Consent. Unsubscribe any time",
                ],
                [
                  "Meet legal requests and protect our rights",
                  "Any relevant data",
                  "Legal obligation",
                ],
              ]}
            />
            <div className="mt-6 space-y-3">
              <Prose>
                <strong className="text-stone-800">
                  Withdrawing consent.
                </strong>{" "}
                You can withdraw consent as easily as you gave it, from your
                account settings or by writing to us (section 12). Withdrawal
                doesn't affect what we did before. If you withdraw consent
                needed to run your account, we may have to close it. We will
                still keep records the law requires, such as tax records.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Automated matching.
                </strong>{" "}
                We use software, including AI, to suggest creators for a
                brief and to flag unusual engagement patterns. A person at
                Cre8r or the brand makes the final decision about who is
                offered a campaign. If you think a flag on your account is
                wrong, ask us to review it.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Data from Instagram and YouTube */}
          <section id="social" className="scroll-mt-8">
            <SectionHeading number="3" title="Data From Instagram and YouTube" />
            <div className="space-y-4">
              <Prose>
                When you connect an account, you sign in on Meta's or
                Google's own page and choose what to allow. We never see your
                password.
              </Prose>
              <Prose>
                <strong className="text-stone-800">What we read:</strong>{" "}
                your profile details, follower and subscriber counts,
                aggregated audience demographics, reach, impressions, views,
                likes, comments, saves, and the performance of your posts and
                videos, including campaign posts.
              </Prose>
              <Prose>
                <strong className="text-stone-800">What we don't do:</strong>{" "}
                we don't post, comment, like or message on your behalf. We
                don't read your private messages, and we don't collect your
                followers' individual identities.
              </Prose>
              <Prose>
                <strong className="text-stone-800">YouTube.</strong> Cre8r
                uses YouTube API Services. By connecting YouTube, you agree
                to the YouTube Terms of Service, and Google's use of your
                data is covered by the Google Privacy Policy. You can revoke
                Cre8r's access at any time from your Google security
                settings.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Instagram and Facebook.
                </strong>{" "}
                We access Instagram data through Meta's official APIs, under
                Meta's Platform Terms and the Meta Privacy Policy. You can
                remove Cre8r from Instagram under Settings → Website
                permissions → Apps and websites, or from Facebook's Business
                Integrations settings.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  When you disconnect
                </strong>{" "}
                an account, we stop collecting new data from it straight
                away. We delete the stored platform data within 30 days,
                except campaign results already reported to a brand and data
                we must keep by law. You can also ask us to delete it sooner
                (section 9).
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Public creator profiles */}
          <section id="discovery" className="scroll-mt-8">
            <SectionHeading
              number="4"
              title="Public Creator Profiles in Our Discovery Tool"
            />
            <div className="space-y-4">
              <Prose>
                To help brands find creators, our discovery tool includes
                profiles built from information that creators have made
                public on Instagram and YouTube for promotion and business.
                This includes their handle, bio, public posts, follower
                counts, public engagement and any business contact details
                they list publicly.
              </Prose>
              <Prose>
                We only use data that is publicly visible without logging in
                or passing a privacy setting. We don't include private
                accounts, and we use this data only to help brands find and
                evaluate creators for campaigns.
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                If your public profile appears in Cre8r and you don't want it
                to:
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  Write to our Grievance Officer (section 12) with your
                  handle and we will remove it within 15 days and keep it
                  out, or
                </BulletItem>
                <BulletItem>
                  Sign up as a creator to take control of your profile,
                  correct it and add your own details.
                </BulletItem>
              </ul>
              <Prose>
                If you change your account to private or delete it, we stop
                showing it when our next update runs.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Who we share data with */}
          <section id="sharing" className="scroll-mt-8">
            <SectionHeading number="5" title="Who We Share Data With" />
            <Prose>
              We don't sell personal data. We share it only in these cases:
            </Prose>
            <ul className="space-y-3 mt-5">
              <BulletItem>
                <strong className="text-stone-800">
                  Brands and agencies
                </strong>{" "}
                running campaigns see creator profiles, audience statistics,
                rates, campaign content and results. They get a creator's
                delivery address only when shipping requires it, and never
                the creator's bank details. They receive a creator's PAN only
                when a brand must file TDS on products it gives (section 393
                of the Income-tax Act, 2025).
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Creators</strong> taking
                part in a campaign see the brand's brief and the contact
                details of the people managing it.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Service providers</strong>{" "}
                who work for us under contract and only on our instructions:
                cloud hosting, payment processing, shipping (Shiprocket and
                its couriers), email and messaging, analytics (Google
                Analytics) and customer support tools.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Authorities</strong>, when
                the law, a court or a government agency requires it,
                including tax authorities for TDS and GST filings.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  A buyer or successor
                </strong>{" "}
                if Cre8r's business is merged, sold or restructured. We will
                tell you before your data becomes subject to a different
                privacy policy.
              </BulletItem>
            </ul>
            <p className="text-sm text-stone-600 mt-6">
              Service providers must protect your data and may not use it
              for their own purposes.
            </p>
          </section>

          <Divider />

          {/* Where your data is stored */}
          <section id="storage" className="scroll-mt-8">
            <SectionHeading number="6" title="Where Your Data Is Stored" />
            <Prose>
              We store data with established cloud hosting providers. Some
              of our service providers, such as email or analytics tools,
              may process data outside India. When that happens, we use
              providers with strong security commitments, and we will never
              transfer data to a country the Government of India restricts
              under section 16 of the DPDP Act.
            </Prose>
          </section>

          <Divider />

          {/* How long we keep data */}
          <section id="retention" className="scroll-mt-8">
            <SectionHeading number="7" title="How Long We Keep Data" />
            <Prose>
              We keep personal data only as long as we need it for the
              purpose we collected it for, or as long as the law requires.
            </Prose>
            <div className="mt-6">
              <Table
                columns={["Data", "How Long We Keep It"]}
                rows={[
                  [
                    "Creator account and profile",
                    "While your account is open; deleted within 30 days of closing it, except as below",
                  ],
                  [
                    "Instagram and YouTube data",
                    "While connected; deleted within 30 days of disconnecting",
                  ],
                  [
                    "Campaign content, results and messages",
                    "3 years after the campaign, for brand reporting and disputes",
                  ],
                  [
                    "PAN, payment, TDS and GST records",
                    "Up to 8 years, as tax laws require",
                  ],
                  [
                    "Brand user contact and billing details",
                    "While the business relationship lasts, then 3 years",
                  ],
                  [
                    "Demo and contact form enquiries",
                    "2 years after the last contact",
                  ],
                  [
                    "Public discovery profiles",
                    "Until removed on request or no longer public",
                  ],
                  [
                    "Security and access logs",
                    "At least 1 year, as the DPDP Rules require",
                  ],
                  ["Marketing email list", "Until you unsubscribe"],
                ]}
              />
            </div>
            <p className="text-sm text-stone-600 mt-6">
              When the period ends, we delete the data or remove anything
              that identifies you.
            </p>
          </section>

          <Divider />

          {/* Security and data breaches */}
          <section id="security" className="scroll-mt-8">
            <SectionHeading number="8" title="Security and Data Breaches" />
            <div className="space-y-4">
              <Prose>
                We protect data with encryption in transit and at rest,
                access limited to staff who need it, multi-factor login for
                our systems, access logs and regular security reviews.
                Payment details are handled by our payment provider and are
                not stored in plain text.
              </Prose>
              <Prose>
                No system is perfectly secure. If a personal data breach
                affects you, we will tell you without delay: what happened,
                what data was involved, what it could mean for you, what we
                are doing about it and what you can do. We will also report
                it to the Data Protection Board of India as the DPDP Rules
                require.
              </Prose>
              <Prose>
                Keep your login private. Tell us straight away at{" "}
                <MailLink email="gs@cre8r.ai" /> if you think your account
                has been accessed by someone else.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Your rights */}
          <section id="rights" className="scroll-mt-8">
            <SectionHeading number="9" title="Your Rights" />
            <p className="text-sm text-stone-600 mb-5">
              Under the DPDP Act, you can:
            </p>
            <ul className="space-y-3">
              <BulletItem>
                <strong className="text-stone-800">Access:</strong> ask for a
                summary of the personal data we hold about you, what we do
                with it, and who we have shared it with.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Correct and update:
                </strong>{" "}
                fix anything inaccurate or incomplete. Most profile details
                can be edited directly in your settings.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Erase:</strong> ask us to
                delete your data when it's no longer needed for the purpose
                you gave it for, or when you withdraw consent. We will keep
                only what the law requires.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Withdraw consent
                </strong>{" "}
                at any time (section 2).
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Nominate</strong> someone
                to exercise your rights if you die or become unable to act.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Complain</strong> to our
                Grievance Officer, and then to the Data Protection Board of
                India (section 12).
              </BulletItem>
            </ul>
            <p className="text-sm text-stone-600 mt-6">
              <strong className="text-stone-800">How to ask.</strong> Email{" "}
              <MailLink email="gs@cre8r.ai" /> or use the privacy option in
              your account settings. We may ask you to confirm your identity
              before acting. We will respond within 30 days. Exercising your
              rights is free.
            </p>
          </section>

          <Divider />

          {/* Children */}
          <section id="children" className="scroll-mt-8">
            <SectionHeading number="10" title="Children" />
            <div className="space-y-4">
              <Prose>
                Cre8r is for people aged 18 and over. We don't knowingly
                create accounts for, or collect data from, anyone under 18.
                We don't track, profile or target advertising at children.
              </Prose>
              <Prose>
                If we learn that someone under 18 has signed up, we will
                close the account and delete their data. If a parent or
                guardian believes their child has given us data, please
                contact our Grievance Officer.
              </Prose>
              <Prose>
                Creators must have permission from a parent or guardian
                before showing a child in campaign content, and must follow
                our Creator Terms on content that features other people.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Cookies and analytics */}
          <section id="cookies" className="scroll-mt-8">
            <SectionHeading number="11" title="Cookies and Analytics" />
            <Prose>
              Cookies are small files a website stores in your browser.
            </Prose>
            <div className="mt-6">
              <Table
                columns={["Type", "What It Does"]}
                rows={[
                  [
                    "Essential",
                    "Keeps you logged in and keeps the site secure. The site can't work without them.",
                  ],
                  [
                    "Analytics",
                    "Google Analytics tells us which pages people visit and how they use the site. It doesn't tell us who you are.",
                  ],
                ]}
              />
            </div>
            <p className="text-sm text-stone-600 mt-6">
              We don't use advertising or tracking cookies. You can block or
              delete cookies in your browser settings, or stop Google
              Analytics with Google's opt-out browser add-on. Blocking
              essential cookies may stop parts of the site from working.
            </p>
          </section>

          <Divider />

          {/* Contact */}
          <section id="contact" className="scroll-mt-8">
            <SectionHeading
              number="12"
              title="Contact, Grievance Officer and Complaints"
            />
            <Prose>
              For any question or request about your personal data, contact
              our Grievance Officer:
            </Prose>
            <div className="bg-white rounded-xl border border-stone-200 p-6 mt-5 space-y-1 text-sm text-stone-600">
              <p>
                <strong className="text-stone-800">Name:</strong> Gaurav
                Sharma
              </p>
              <p>
                <strong className="text-stone-800">Email:</strong>{" "}
                <MailLink email="gs@cre8r.ai" />
              </p>
              <p>
                <strong className="text-stone-800">Address:</strong> Grunmech
                Technologies Private Limited, AltF Coworking, Orchid Business
                Park, Badshahpur Sohna Road, Islampur Village, Sector 38,
                Gurugram, Haryana 122018
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <Prose>
                We acknowledge complaints within 24 hours and aim to resolve
                them within 15 days, and in all cases within the time the
                DPDP Rules allow.
              </Prose>
              <Prose>
                If you're not satisfied with our response, you can complain
                to the Data Protection Board of India through its official
                website.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Changes */}
          <section id="changes" className="scroll-mt-8">
            <SectionHeading number="13" title="Changes to This Policy" />
            <Prose>
              We will update this policy when our practices or the law
              change, and show the new "Last updated" date at the top. For
              important changes, we will email account holders at least 15
              days before they take effect. If a change needs your consent,
              we will ask for it.
            </Prose>
          </section>
        </main>
      </div>
    </div>
  );
}
