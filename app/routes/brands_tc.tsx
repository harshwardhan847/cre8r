import React, { useState, useEffect } from "react";

import { seo, webPageSchema } from "~/seo";

const SEO_DESCRIPTION =
  "The terms of use governing brand access to the Cre8r platform, operated by Grunmech Technologies Private Limited — accounts, campaigns, payments and liability.";

export function meta() {
  return seo({
    title: "Terms & Conditions for Brands",
    description: SEO_DESCRIPTION,
    path: "/brands_tc",
    jsonLd: webPageSchema({
      name: "Terms & Conditions for Brands",
      description: SEO_DESCRIPTION,
      path: "/brands_tc",
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
    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400 mt-2" />
    <p>{children}</p>
  </li>
);

const NumItem = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <li className="flex gap-3 text-sm leading-relaxed text-stone-600">
    <span className="shrink-0 font-semibold text-stone-400 min-w-[1.75rem]">
      {label}
    </span>
    <p>{children}</p>
  </li>
);

const Card = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-xl border border-stone-200 p-6">
    {title && (
      <h3 className="text-sm font-semibold text-stone-800 mb-2">{title}</h3>
    )}
    <div className="text-sm leading-relaxed text-stone-600">{children}</div>
  </div>
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
  { id: "account", label: "1. Your Account" },
  { id: "services", label: "2. Our Services" },
  { id: "campaigns", label: "3. How Campaigns Run" },
  { id: "fees", label: "4. Fees, Invoices and Taxes" },
  { id: "products", label: "5. Products and Shipping" },
  { id: "compliance", label: "6. Advertising Compliance" },
  { id: "content", label: "7. Content Rights" },
  { id: "data", label: "8. Data" },
  { id: "noncircumvention", label: "9. Non-Circumvention" },
  { id: "results", label: "10. Results and Reporting" },
  { id: "cancellations", label: "11. Cancellations and Ending" },
  { id: "liability", label: "12. Liability and Indemnity" },
  { id: "disputes", label: "13. Disputes and Contact" },
  { id: "general", label: "14. General" },
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

const BrandsTc = () => {
  const [activeSection, setActiveSection] = useState("intro");

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
            Brand Terms
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
                These terms are the agreement between your company ("you",
                "the brand") and Grunmech Technologies Private Limited, which
                runs Cre8r.ai ("Cre8r", "we", "us"). They apply when you
                create a brand account, use the Cre8r platform, or book a
                campaign with us, either directly or as an agency acting for
                a brand.
              </Prose>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-3">
                  The short version
                </p>
                <Prose>
                  There is no subscription. You pay per campaign, as quoted
                  in your Order. You approve every creator and every piece of
                  content before it goes live. You are responsible for your
                  product and the claims you ask creators to make. We run the
                  campaign on the platform or with our team, and report
                  results honestly. Results can't be guaranteed, but
                  timelines and deliverables can, and these terms say what
                  happens if we miss them.
                </Prose>
              </div>

              <Prose>
                <strong className="text-stone-800">
                  How the documents fit together.
                </strong>{" "}
                Each campaign is confirmed in an Order: a quote, proposal,
                insertion order or in-platform booking that sets out the
                scope, creators, deliverables, fees and timeline. The Order,
                these terms and our{" "}
                <a
                  href="/privacy_policy"
                  className="text-amber-600 underline underline-offset-2"
                >
                  Privacy Policy
                </a>{" "}
                form the full agreement. If an Order says something
                different from these terms, the Order wins for that
                campaign. If you have a separately signed master agreement
                with us, it takes priority over these terms.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 1. Your account */}
          <section id="account" className="scroll-mt-8">
            <SectionHeading number="1" title="Your Account" />
            <ul className="space-y-3">
              <BulletItem>
                <strong className="text-stone-800">Business use only.</strong>{" "}
                Brand accounts are for companies, brands and agencies, not
                personal use. The person who creates the account confirms
                they have authority to bind the company to these terms.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Agencies.</strong> If you
                book on behalf of a client brand, you confirm you have the
                client's authority. You are responsible for paying us and
                for your client's compliance with these terms, unless the
                Order names the client as the paying party.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Accurate details.</strong>{" "}
                Keep your company name, GSTIN, billing address and contacts
                correct. Invoices are issued on these details.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Users and logins.
                </strong>{" "}
                Each team member uses their own login. Keep logins private.
                You are responsible for activity on your account and must
                tell us straight away at <MailLink email="campaign@cre8r.ai" />{" "}
                if you suspect misuse.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Our right to refuse.
                </strong>{" "}
                We may decline an account or campaign that conflicts with
                these terms, the law, or our content standards (section 6).
              </BulletItem>
            </ul>
          </section>

          <Divider />

          {/* 2. Our services */}
          <section id="services" className="scroll-mt-8">
            <SectionHeading number="2" title="Our Services" />
            <Prose>
              Cre8r offers two ways to work. An Order can use one or both.
            </Prose>
            <div className="mt-6">
              <Table
                columns={["", "Self-serve platform", "Managed campaigns"]}
                rows={[
                  ["Who runs it", "Your team", "Cre8r's campaign team, with your approvals"],
                  [
                    "What's included",
                    "Creator discovery and filters, AI matchmaking, briefs, messaging, two-round content approvals, Shiprocket shipping, affiliate and ROI tracking, lead-generation tools",
                    "Everything in self-serve, plus planning, creator shortlisting and negotiation, coordination, quality checks and reporting",
                  ],
                  [
                    "How you pay",
                    "Per campaign: platform fee per creator for barter, creator fees for paid work",
                    "Per campaign, as quoted in the Order",
                  ],
                ]}
              />
            </div>
            <div className="mt-6 space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  Creators of every size.
                </strong>{" "}
                We work with nano, micro, macro and celebrity creators.
                Celebrity bookings may need a separate contract with the
                talent's management, which the Order will state.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Discovery data.</strong>{" "}
                Creator search covers public profiles as well as creators
                who have joined Cre8r. Audience and performance data for
                public profiles are estimates based on public information.
                Data for registered creators comes from their connected
                accounts. Treat both as guidance for selection, not
                guarantees.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Changes to the platform.
                </strong>{" "}
                We improve the platform regularly and may change or remove
                features. We won't remove a feature you are using in a live
                campaign until that campaign ends.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 3. How campaigns run */}
          <section id="campaigns" className="scroll-mt-8">
            <SectionHeading number="3" title="How Campaigns Run" />
            <ol className="space-y-4">
              <NumItem label="1.">
                <strong className="text-stone-800">Brief.</strong> You give
                us a brief: product, goal, target audience, creator
                requirements, deliverables, key messages, mandatory claims
                and disclaimers, do's and don'ts, timelines and any usage
                rights you need. The brief must be accurate and complete.
                Changes after creators have accepted may affect cost and
                timeline.
              </NumItem>
              <NumItem label="2.">
                <strong className="text-stone-800">
                  Creator selection.
                </strong>{" "}
                We, or your team on the platform, shortlist creators. You
                approve every creator before an offer goes out. Creators
                decide whether to accept, so we can't guarantee any specific
                creator will take part.
              </NumItem>
              <NumItem label="3.">
                <strong className="text-stone-800">Timeline.</strong>{" "}
                Campaigns usually go live within 2–4 weeks of a confirmed
                Order and brief, depending on creator selection, shipping
                and approvals. The Order sets the agreed dates.
              </NumItem>
              <NumItem label="4.">
                <strong className="text-stone-800">
                  Content approval.
                </strong>{" "}
                Creators submit drafts on the platform. You approve or
                request changes within 3 working days of each submission.
                Each piece includes two rounds of revisions within the
                original brief. If you don't respond in time, the posting
                date may move. If you still haven't responded after a
                reminder and 2 further working days, the draft is treated as
                approved.
              </NumItem>
              <NumItem label="5.">
                <strong className="text-stone-800">
                  Respect the creator's voice.
                </strong>{" "}
                Ask for changes that fix facts, brand safety or legal
                issues, or that bring the content back to the brief.
                Creators know their audience, and heavy rewrites usually
                reduce performance.
              </NumItem>
              <NumItem label="6.">
                <strong className="text-stone-800">Going live.</strong>{" "}
                Creators post the approved content in the agreed window and
                keep it live for at least 30 days, or as stated in the
                Order.
              </NumItem>
              <NumItem label="7.">
                <strong className="text-stone-800">
                  Replacing a creator.
                </strong>{" "}
                If a creator drops out, misses a deadline or doesn't deliver
                to brief, we will offer you a replacement creator of similar
                reach and fee or a credit or refund for that creator's
                share, at your choice.
              </NumItem>
            </ol>
            <p className="text-sm text-stone-600 mt-6">
              All communication with creators about a Cre8r campaign happens
              on the platform or through our team, so there is one record of
              what was agreed.
            </p>
          </section>

          <Divider />

          {/* 4. Fees, invoices and taxes */}
          <section id="fees" className="scroll-mt-8">
            <SectionHeading number="4" title="Fees, Invoices and Taxes" />
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-stone-700 mb-3">
                  What you pay. Fees are set out in each Order. Unless the
                  Order says otherwise:
                </p>
                <ul className="space-y-3">
                  <BulletItem>
                    <strong className="text-stone-800">
                      Barter campaigns:
                    </strong>{" "}
                    a fixed platform fee per creator. You also supply the
                    products.
                  </BulletItem>
                  <BulletItem>
                    <strong className="text-stone-800">
                      Paid campaigns:
                    </strong>{" "}
                    an all-in fee per creator that includes the creator's
                    fee and Cre8r's margin.
                  </BulletItem>
                  <BulletItem>
                    <strong className="text-stone-800">
                      Managed services, paid media, travel or production:
                    </strong>{" "}
                    as quoted in the Order.
                  </BulletItem>
                  <BulletItem>
                    <strong className="text-stone-800">Shipping:</strong>{" "}
                    charged at cost plus a convenience fee set out in the
                    Order.
                  </BulletItem>
                </ul>
              </div>
              <Card title="No subscription">
                You are not charged between campaigns.
              </Card>
              <Card title="Invoices and payment">
                We invoice when the Order is confirmed. Payment terms,
                including any advance, credit period and due date, are set
                out in the Order. If the Order is silent, fees are payable
                in advance, before creators start content, and creator
                offers go out only after payment is received.
              </Card>
              <Card title="Taxes">
                Fees exclude GST, which we add to each invoice at the
                applicable rate. If you deduct TDS from our invoices, deduct
                only at the rate the Income-tax Act, 2025 requires, deposit
                it on time, and send us the TDS certificate within the
                statutory period. Until we receive the certificate, the
                deducted amount counts as unpaid.
              </Card>
              <Card title="Barter and TDS">
                When your products go to creators as barter, you are the
                giver of a benefit under section 393 of the Income-tax Act,
                2025 (formerly section 194R of the 1961 Act). If the
                products you give one creator in a financial year exceed
                ₹20,000 in value, you must deduct 10% TDS. We will give you
                each creator's product value and, only where your TDS
                filing needs it, their PAN. We will also help collect the
                TDS amount from the creator.
              </Card>
              <Card title="Late payment">
                If an invoice is overdue, we may pause the campaign after
                giving you 7 days' written notice, and charge late-payment
                interest if the Order provides for it.
              </Card>
              <Card title="Disputing an invoice">
                Tell us in writing within 10 working days of receiving an
                invoice, with the reason. Pay the undisputed part on time.
                We will work with you in good faith to resolve the rest
                within 15 days.
              </Card>
            </div>
          </section>

          <Divider />

          {/* 5. Products and shipping */}
          <section id="products" className="scroll-mt-8">
            <SectionHeading number="5" title="Products and Shipping" />
            <ul className="space-y-3">
              <BulletItem>
                <strong className="text-stone-800">Supply.</strong> Send the
                agreed products to our warehouse or ship them through the
                platform by the date in the Order. Late products move the
                campaign timeline.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Product quality and safety.
                </strong>{" "}
                Products must be genuine, safe, legally sold in India,
                within their expiry date, and correctly labelled under the
                Legal Metrology (Packaged Commodities) Rules, FSSAI rules
                and any other law that applies.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Shipping.</strong> We
                ship through Shiprocket and its courier partners, and you
                can track each parcel on the platform. You pay shipping cost
                plus the convenience fee in section 4.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Loss and damage.
                </strong>{" "}
                If a parcel is lost or damaged in transit, we will help you
                claim from the courier and arrange a reshipment. The cost of
                replacement products is yours, unless the loss was caused by
                our fault.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Returns.</strong>{" "}
                Products are not returned unless the Order says they must be
                (for example, loan samples). Return shipping is charged at
                cost.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Creator data.</strong> We
                share creators' delivery addresses only through the shipping
                system, for that shipment. You may not use them for any
                other purpose (section 8).
              </BulletItem>
            </ul>
          </section>

          <Divider />

          {/* 6. Advertising compliance */}
          <section id="compliance" className="scroll-mt-8">
            <SectionHeading number="6" title="Advertising Compliance" />
            <div className="space-y-4">
              <Prose>
                You are the advertiser. Under the Consumer Protection Act,
                2019, the CCPA Guidelines for Prevention of Misleading
                Advertisements, 2022 and the ASCI Code, you are responsible
                for what your campaign says about your product.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Your claims.</strong>{" "}
                Every claim in your brief, including quality, efficacy,
                results, price, "best", "No. 1", "natural", "clinically
                proven" and comparisons, must be true and backed by evidence
                you can produce on request. Don't ask creators to make
                claims you haven't substantiated, to speak about results
                they haven't experienced, or to criticise competitors.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Disclosure.</strong>{" "}
                Every campaign post will carry a disclosure label approved
                by ASCI (#ad, #collab, #promo, #sponsored or #partnership),
                as the Department of Consumer Affairs' endorsement
                guidelines require. Don't ask a creator to hide, remove or
                blur a disclosure. We will not run campaigns without one.
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                Regulated categories. Tell us in your brief if your product
                falls into any of these, and follow the rules for it:
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  <strong className="text-stone-800">
                    Financial products and investments:
                  </strong>{" "}
                  SEBI rules restrict regulated entities from working with
                  unregistered creators who give advice or make performance
                  claims. Banking, lending and insurance campaigns must
                  follow RBI and IRDAI advertising rules.
                </BulletItem>
                <BulletItem>
                  <strong className="text-stone-800">
                    Health, food supplements, cosmetics and medical devices:
                  </strong>{" "}
                  claims must comply with the Drugs and Magic Remedies
                  (Objectionable Advertisements) Act, FSSAI rules and the
                  ASCI health guidelines. Health advice requires a qualified
                  creator.
                </BulletItem>
                <BulletItem>
                  <strong className="text-stone-800">
                    Alcohol, tobacco and surrogate brands:
                  </strong>{" "}
                  direct and surrogate advertising is restricted. We will
                  decline these campaigns.
                </BulletItem>
                <BulletItem>
                  <strong className="text-stone-800">
                    Online money games and betting:
                  </strong>{" "}
                  advertising is prohibited under the Promotion and
                  Regulation of Online Gaming Act, 2025. We will not run
                  these campaigns.
                </BulletItem>
                <BulletItem>
                  <strong className="text-stone-800">
                    Products for children:
                  </strong>{" "}
                  content must not exploit children or encourage unsafe
                  behaviour.
                </BulletItem>
              </ul>
              <Prose>
                <strong className="text-stone-800">
                  Content we won't run.
                </strong>{" "}
                Campaigns that are illegal, misleading, hateful, sexually
                explicit, harmful to children, or that infringe others'
                rights. We may pause a campaign or remove content that we
                reasonably believe breaks the law or these terms, and will
                tell you why.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  If something goes wrong.
                </strong>{" "}
                If a regulator, ASCI, a platform or a consumer complains
                about a campaign, we will tell you within 2 working days.
                You must cooperate, provide substantiation and approve
                corrections or take-downs quickly.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 7. Content rights */}
          <section id="content" className="scroll-mt-8">
            <SectionHeading number="7" title="Content Rights" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  Creators own their content.
                </strong>{" "}
                Copyright stays with the creator unless the Order says the
                content is being bought outright and the creator has
                agreed.
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                What you get as standard. For each campaign post, you get a
                non-exclusive licence to:
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  Reshare, repost or link to it on your brand's own social
                  media accounts, website and app, with credit to the
                  creator, for 12 months from posting
                </BulletItem>
                <BulletItem>
                  Leave it where it was shared after that period ends,
                  without fresh promotion
                </BulletItem>
              </ul>
              <Prose>
                <strong className="text-stone-800">
                  What costs extra.
                </strong>{" "}
                Paid ads (including partnership or whitelisted ads run
                through the creator's handle), e-commerce listings, print,
                TV, outdoor, longer periods, or exclusive or perpetual
                rights must be listed in the Order, with their period and
                fee. Using content beyond the licence you paid for infringes
                the creator's copyright, and we may invoice the standard
                rate for the extra use.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Your materials.</strong>{" "}
                You give Cre8r and the creators a licence to use your logos,
                product images and brand assets as needed for the campaign.
                You confirm you have the rights to them.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Case studies.</strong> We
                may name you as a client and show campaign posts and results
                in our case studies, pitches and marketing, unless you tell
                us in writing that you don't want this.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Cre8r's platform.</strong>{" "}
                The platform, software, data and reports' format belong to
                Cre8r. You can use reports and exports for your internal
                business purposes.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 8. Data */}
          <section id="data" className="scroll-mt-8">
            <SectionHeading number="8" title="Data" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">Creator data.</strong>{" "}
                Through Cre8r you see creators' profiles, audience
                statistics, contact details, and for shipping, their
                addresses. You may use this data only to plan, run and
                measure campaigns with Cre8r. You may not:
              </Prose>
              <ul className="space-y-3">
                <BulletItem>
                  Copy, export or store it outside the platform, except
                  reports we provide
                </BulletItem>
                <BulletItem>
                  Contact creators outside Cre8r about a campaign, or for
                  any purpose they haven't agreed to (section 9)
                </BulletItem>
                <BulletItem>
                  Add creators to your mailing or marketing lists
                </BulletItem>
                <BulletItem>Sell or share it with anyone else</BulletItem>
              </ul>
              <Prose>
                <strong className="text-stone-800">
                  Each party's responsibility.
                </strong>{" "}
                For creator data you receive through Cre8r, you are a Data
                Fiduciary under the DPDP Act and must protect it, use it
                only as allowed here, and delete it when the campaign ends
                or on our request. Tell us within 24 hours if you become
                aware of a breach involving it.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Your data.</strong> We
                handle the personal data of your team and your campaign data
                as set out in our{" "}
                <a
                  href="/privacy_policy"
                  className="text-amber-600 underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                . We may use anonymised, aggregated campaign data, which
                identifies neither you nor any creator, to improve our
                matching and benchmarks.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Accounts and tracking.
                </strong>{" "}
                If you connect a store, analytics or affiliate tool for ROI
                tracking, you authorise us to read the order and conversion
                data needed to attribute sales to creators.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 9. Non-circumvention and confidentiality */}
          <section id="noncircumvention" className="scroll-mt-8">
            <SectionHeading
              number="9"
              title="Non-Circumvention and Confidentiality"
            />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  Working through Cre8r.
                </strong>{" "}
                For 12 months after a creator is introduced to you through
                Cre8r, you agree not to book that creator directly, or
                through another agency or platform, without going through
                Cre8r. This doesn't apply to creators who were already
                working with you before the introduction, if you can show
                it. If you break this, you will pay Cre8r a fee equal to 25%
                of what you paid the creator directly.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Confidentiality.</strong>{" "}
                Each of us will keep the other's non-public information
                confidential and use it only for the campaign. This includes
                briefs, launch plans, pricing, creator fees, rate cards and
                reports. These duties continue for 2 years after the last
                campaign. They don't apply to information that is already
                public, was already known, or must be disclosed by law.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 10. Results and reporting */}
          <section id="results" className="scroll-mt-8">
            <SectionHeading number="10" title="Results and Reporting" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  What we commit to.
                </strong>{" "}
                We will deliver the posts, creators and timelines in your
                Order, and report performance accurately from platform data
                and tracking links.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  What no one can guarantee.
                </strong>{" "}
                We can't guarantee specific views, reach, engagement,
                followers, clicks, sales or ROI, because they depend on
                platforms' algorithms, audiences and your product.
                Projections and benchmarks we share are estimates.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  How results are measured.
                </strong>{" "}
                Reports use data from Instagram and YouTube, creators'
                connected accounts and insights screenshots, and tracked
                links or promo codes. Sales attribution depends on your
                tracking being set up correctly. Platform data can change or
                be delayed, and we are not responsible for errors in data
                supplied by the platforms.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 11. Cancellations */}
          <section id="cancellations" className="scroll-mt-8">
            <SectionHeading
              number="11"
              title="Cancellations and Ending the Agreement"
            />
            <p className="text-sm font-medium text-stone-700 mb-4">
              If you cancel a campaign:
            </p>
            <Table
              columns={["When You Cancel", "What You Pay"]}
              rows={[
                [
                  "Before creator offers go out",
                  "Nothing; full refund of fees paid, less any third-party costs already incurred",
                ],
                [
                  "After creators accept, before content is shot",
                  "50% of the fees for those creators, plus shipping already incurred",
                ],
                [
                  "After content is shot or submitted",
                  "100% of the fees for those creators",
                ],
              ]}
            />
            <div className="mt-6 space-y-4">
              <Prose>
                Cancellation requests must be in writing to{" "}
                <MailLink email="campaign@cre8r.ai" />. Products already
                shipped are not returned unless the Order says so.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  If we can't deliver.
                </strong>{" "}
                If we fail to deliver posts in your Order and can't replace
                the creator (section 3), we will refund or credit the fees
                for the undelivered posts, at your choice.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Closing your account.
                </strong>{" "}
                You can close your account at any time once all invoices
                are paid. Live campaigns continue until they end, unless
                cancelled as above.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Suspension by us.
                </strong>{" "}
                We may pause a campaign or suspend your account if invoices
                are overdue (section 4), if a campaign breaks the law or
                section 6, or if you misuse creator data. Except where
                urgent action is needed, we will give you notice and 7 days
                to fix the problem first.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  After termination.
                </strong>{" "}
                Sections 4 (unpaid fees), 7, 8, 9, 12 and 13 continue to
                apply.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 12. Liability */}
          <section id="liability" className="scroll-mt-8">
            <SectionHeading
              number="12"
              title="Liability, Indemnity and Disclaimers"
            />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  Creators are independent.
                </strong>{" "}
                Creators are independent professionals, not Cre8r employees.
                We vet them and manage campaigns, but we can't control
                everything a creator posts on their own channels outside
                the approved campaign content.
              </Prose>
              <Prose>
                <strong className="text-stone-800">The platform.</strong> We
                provide the platform "as is" and work to keep it available
                and accurate, but don't promise it will be uninterrupted or
                error-free.
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                Your indemnity. You will cover Cre8r and the creators for
                losses, fines, penalties and reasonable legal costs arising
                from:
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  Your product, including defects, safety issues and
                  labelling
                </BulletItem>
                <BulletItem>
                  Claims, statements or materials in your brief, and content
                  you approved
                </BulletItem>
                <BulletItem>
                  Your breach of advertising, consumer protection or sector
                  rules (section 6)
                </BulletItem>
                <BulletItem>Your misuse of creator data (section 8)</BulletItem>
                <BulletItem>
                  Your use of content beyond the licence in section 7
                </BulletItem>
              </ul>
              <Prose>
                <strong className="text-stone-800">Our indemnity.</strong> We
                will cover you for losses and reasonable legal costs from
                claims that the Cre8r platform itself infringes someone
                else's intellectual property, or that we breached data
                protection law in handling your data.
              </Prose>
              <div className="bg-stone-900 text-stone-300 rounded-xl p-6 text-xs leading-relaxed tracking-wide">
                <p className="uppercase font-medium text-stone-200 mb-3">
                  Limit on liability
                </p>
                <p>
                  Neither of us is liable for indirect or consequential
                  losses, such as lost profits or lost business. Each side's
                  total liability for all claims about an Order is limited
                  to the fees paid or payable under that Order. These limits
                  don't apply to unpaid fees, your indemnity for your
                  product and claims, breach of confidentiality or data
                  obligations, or fraud.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* 13. Disputes */}
          <section id="disputes" className="scroll-mt-8">
            <SectionHeading number="13" title="Disputes, Grievances and Contact" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">Talk to us first.</strong>{" "}
                Write to your campaign manager or{" "}
                <MailLink email="campaign@cre8r.ai" />. Senior people from
                both sides will try to resolve any dispute within 30 days.
              </Prose>
              <p className="text-sm text-stone-600">
                <strong className="text-stone-800">
                  Grievance Officer.
                </strong>{" "}
                Complaints about the platform or how your data is handled
                can also go to our Grievance Officer, who will acknowledge
                them within 24 hours and aim to resolve them within 15 days.
              </p>
              <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-1 text-sm text-stone-600">
                <p>
                  <strong className="text-stone-800">Name:</strong> Gaurav
                  Sharma
                </p>
                <p>
                  <strong className="text-stone-800">Email:</strong>{" "}
                  <MailLink email="gs@cre8r.ai" />
                </p>
                <p>
                  <strong className="text-stone-800">Address:</strong>{" "}
                  Grunmech Technologies Private Limited, AltF Coworking,
                  Orchid Business Park, Badshahpur Sohna Road, Islampur
                  Village, Sector 38, Gurugram, Haryana 122018
                </p>
              </div>
              <Prose>
                <strong className="text-stone-800">Arbitration.</strong>{" "}
                Disputes not resolved within 30 days will be settled by
                arbitration under the Arbitration and Conciliation Act,
                1996, before a sole arbitrator appointed jointly by both
                parties or, failing agreement, under that Act. The seat will
                be Gurugram, Haryana, the language English, and hearings may
                be held online.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Governing law.</strong>{" "}
                These terms are governed by Indian law. Subject to
                arbitration, the courts at Gurugram, Haryana have exclusive
                jurisdiction. Either party may seek urgent interim relief
                from a court.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 14. General */}
          <section id="general" className="scroll-mt-8">
            <SectionHeading number="14" title="General" />
            <ul className="space-y-3">
              <BulletItem>
                <strong className="text-stone-800">
                  Changes to these terms.
                </strong>{" "}
                We may update these terms. We will email account admins at
                least 30 days before important changes take effect. Changes
                don't apply to Orders already confirmed.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Notices.</strong> Formal
                notices must be sent by email to the addresses in the Order,
                with a copy to <MailLink email="gs@cre8r.ai" /> for notices
                to us.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Force majeure.</strong>{" "}
                Neither side is liable for delays caused by events beyond
                its reasonable control, such as platform outages, natural
                disasters or government action. Fees for work not delivered
                because of such an event will be credited.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Assignment.</strong>{" "}
                Neither side may transfer this agreement without the
                other's consent, except to a company that takes over its
                business.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Relationship.</strong> We
                are independent contractors. These terms don't create a
                partnership, joint venture or agency.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Severability and waiver.
                </strong>{" "}
                If part of these terms is unenforceable, the rest still
                applies. Not enforcing a right straight away doesn't waive
                it.
              </BulletItem>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BrandsTc;
