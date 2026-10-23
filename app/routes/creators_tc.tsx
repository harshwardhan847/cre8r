import React, { useState, useEffect } from "react";

import { seo, webPageSchema } from "~/seo";

const SEO_DESCRIPTION =
  "The creator terms governing participation on Cre8r — campaign acceptance, content ownership, disclosure obligations, payouts and termination.";

export function meta() {
  return seo({
    title: "Terms & Conditions for Creators",
    description: SEO_DESCRIPTION,
    path: "/creators_tc",
    jsonLd: webPageSchema({
      name: "Terms & Conditions for Creators",
      description: SEO_DESCRIPTION,
      path: "/creators_tc",
    }),
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

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

const Divider = () => <hr className="border-stone-200 my-12" />;

const MailLink = ({ email }: { email: string }) => (
  <a
    href={`mailto:${email}`}
    className="text-amber-600 underline underline-offset-2 hover:text-amber-700 transition-colors"
  >
    {email}
  </a>
);

// ─── Table of Contents ────────────────────────────────────────────────────────

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "eligibility", label: "1. Who Can Join" },
  { id: "account", label: "2. Your Account" },
  { id: "campaigns", label: "3. How Campaigns Work" },
  { id: "content", label: "4. Content and Posting" },
  { id: "disclosure", label: "5. Disclosure Rules" },
  { id: "payments", label: "6. Payments, Barter and Taxes" },
  { id: "rights", label: "7. Rights to Your Content" },
  { id: "products", label: "8. Products and Shipping" },
  { id: "notallowed", label: "9. What's Not Allowed" },
  { id: "confidentiality", label: "10. Confidentiality" },
  { id: "suspension", label: "11. Suspension and Ending" },
  { id: "liability", label: "12. Liability and Indemnity" },
  { id: "disputes", label: "13. Disputes and Contact" },
  { id: "changes", label: "14. Changes to These Terms" },
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

export default function CreatorsTc() {
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
            Creator Terms
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
                These terms are the agreement between you, a creator, and
                Grunmech Technologies Private Limited, which runs Cre8r.ai
                ("Cre8r", "we", "us"). They apply when you sign up as a
                creator, use the Cre8r platform, or accept a campaign
                through us.
              </Prose>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-3">
                  The short version
                </p>
                <Prose>
                  Joining is free. You choose which campaigns to accept.
                  Every offer shows the brand, the work and the pay before
                  you say yes. You keep ownership of what you create. You
                  label every sponsored post clearly, and we pay you on the
                  timeline in these terms. The full terms below are what
                  legally applies. If anything in this summary differs from
                  them, the full terms win.
                </Prose>
              </div>

              <Prose>
                These terms work together with our{" "}
                <a
                  href="/privacy_policy"
                  className="text-amber-600 underline underline-offset-2"
                >
                  Privacy Policy
                </a>{" "}
                and the Campaign Brief for each campaign you accept. If a
                Campaign Brief says something different from these terms for
                that campaign, the Campaign Brief wins for that campaign
                only.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 1. Who can join */}
          <section id="eligibility" className="scroll-mt-8">
            <SectionHeading number="1" title="Who Can Join" />
            <p className="text-sm text-stone-600 mb-5">
              You can join Cre8r as a creator if all of these are true:
            </p>
            <ol className="space-y-3">
              <NumItem label="1.">
                You are 18 or older and able to enter a contract under the
                Indian Contract Act, 1872.
              </NumItem>
              <NumItem label="2.">
                You live in India and have a bank account and PAN in your
                own name.
              </NumItem>
              <NumItem label="3.">
                You run at least one public Instagram or YouTube account
                that you own, set up as a creator or business account where
                the platform requires it.
              </NumItem>
              <NumItem label="4.">
                Your account has at least 5,000 followers or subscribers.
                There is no upper limit: we work with nano, micro, macro and
                celebrity creators.
              </NumItem>
              <NumItem label="5.">
                Your followers and engagement are real. You have not bought
                followers, likes, views or comments, or used bots or
                engagement pods to inflate them.
              </NumItem>
              <NumItem label="6.">
                You are allowed to use each social platform you connect,
                under that platform's own rules.
              </NumItem>
            </ol>
            <div className="mt-6 space-y-4">
              <Prose>
                Some campaigns have extra requirements, such as a minimum
                engagement rate. Barter campaigns currently need an
                engagement rate of at least 2%. Each Campaign Brief lists
                its own requirements.
              </Prose>
              <Prose>
                If you manage a creator as a talent manager or agency, you
                may sign up on their behalf only with their written
                permission. You are responsible for their compliance with
                these terms.
              </Prose>
              <Prose>
                Meeting these requirements does not guarantee that you will
                receive campaigns. Brands choose creators based on their
                brief.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 2. Your account */}
          <section id="account" className="scroll-mt-8">
            <SectionHeading
              number="2"
              title="Your Account and Connected Profiles"
            />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">Keep it accurate.</strong>{" "}
                The details in your Cre8r profile, including your name,
                contact details, city, niche, languages and rates, must be
                true and up to date. Brands rely on them when they choose
                creators.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  One person, one account.
                </strong>{" "}
                You may hold one creator account. Don't share it, sell it or
                let someone else use it. You are responsible for everything
                done through your login, so keep your password private and
                tell us at <MailLink email="collabs@cre8r.ai" /> straight
                away if you think someone else has access.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Connecting Instagram or YouTube.
                </strong>{" "}
                When you connect a social account, you allow us to read the
                data that platform makes available through its official
                tools. This includes follower counts, audience
                demographics, reach, engagement and post performance. We use
                this data to show your profile to brands, match you with
                campaigns and report campaign results. We never post on your
                behalf. You can disconnect an account at any time from your
                settings or from the social platform. Our Privacy Policy
                explains how we handle this data.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Profiles we create from public data.
                </strong>{" "}
                Cre8r's discovery tool also shows brands public information
                about creators who have not signed up. If you join, your
                registered profile replaces that public profile, and you can
                correct it. If you are not a member and want your public
                profile removed, write to our Grievance Officer (section
                13).
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 3. How campaigns work */}
          <section id="campaigns" className="scroll-mt-8">
            <SectionHeading number="3" title="How Campaigns Work" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">Offers.</strong> When a
                brand's brief fits your profile, we send you an offer by
                phone, email or the platform. Each offer comes with a
                Campaign Brief that sets out:
              </Prose>
              <ul className="space-y-3">
                <BulletItem>The brand and product</BulletItem>
                <BulletItem>
                  The deliverables (for example, one Reel and two Stories),
                  the platform and the posting window
                </BulletItem>
                <BulletItem>
                  What you receive: a cash fee, a product (barter), an
                  affiliate commission, or a mix
                </BulletItem>
                <BulletItem>
                  Any exclusivity period, usage rights, hashtags, mentions
                  or links the brand needs
                </BulletItem>
                <BulletItem>How long the post must stay live</BulletItem>
              </ul>
              <Prose>
                <strong className="text-stone-800">Accepting.</strong> You
                have 48 hours to accept or decline. Some offers have limited
                spots and are filled in the order creators accept. You can
                decline any offer without giving a reason, and declining
                does not count against you. Once you accept, the Campaign
                Brief and these terms form a binding agreement for that
                campaign.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Who you are working with.
                </strong>{" "}
                Cre8r manages the campaign on the brand's behalf. All
                briefs, drafts, messages and approvals go through Cre8r.
                Unless the Campaign Brief says otherwise, Cre8r pays you,
                not the brand directly.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Pricing.</strong> Cre8r
                sets the fee offered for each campaign based on your reach,
                engagement, content quality and the brand's budget. The fee
                shown in the offer is the amount you will receive before any
                taxes deducted under section 6. You are free to decline an
                offer if the fee doesn't work for you.
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                Cancellations.
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  <strong className="text-stone-800">
                    If the brand or Cre8r cancels
                  </strong>{" "}
                  after you have accepted, we will tell you as soon as
                  possible. If you had already started work, we will pay you
                  for the work done as agreed in the Campaign Brief. If a
                  product was already shipped, you can keep it unless the
                  brief says it must be returned.
                </BulletItem>
                <BulletItem>
                  <strong className="text-stone-800">
                    If you need to cancel,
                  </strong>{" "}
                  tell us as early as possible and at least 72 hours before
                  the posting date. You must return any product received, or
                  pay its value, unless we agree otherwise. Repeated late
                  cancellations may lead to fewer offers or suspension.
                </BulletItem>
              </ul>
            </div>
          </section>

          <Divider />

          {/* 4. Content, approvals and posting */}
          <section id="content" className="scroll-mt-8">
            <SectionHeading number="4" title="Content, Approvals and Posting" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  Your voice, the brand's facts.
                </strong>{" "}
                You create the content in your own style. Product claims,
                prices, offers and any mandatory wording must match the
                Campaign Brief exactly. Don't add claims the brand hasn't
                approved, such as health benefits, results or comparisons
                with other brands.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Drafts and revisions.
                </strong>{" "}
                Upload your draft to the platform by the date in the brief.
                The brand may ask for up to two rounds of revisions that
                keep to the original brief. Requests that go beyond the
                brief, such as a new concept or extra deliverables, need
                your agreement and may carry an extra fee.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Posting.</strong> Post
                only the approved version, within the posting window, on the
                account named in the brief. Don't edit the caption, audio,
                tags or disclosure after posting. Share the live link on the
                platform within 24 hours of posting.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Keeping it live.</strong>{" "}
                Keep the post public for at least 30 days, or the period in
                the Campaign Brief if different. Don't archive, hide or
                delete it early, and don't bury it on purpose, for example
                by pinning other paid posts over it.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Corrections and take-downs.
                </strong>{" "}
                If a brand or Cre8r asks you to correct or remove a post
                because of a legal, regulatory or factual problem, please do
                it within 24 hours. If removal is not caused by your
                mistake, you will still be paid in full.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Performance data.
                </strong>{" "}
                After posting, you agree to share screenshots or platform
                insights (reach, views, saves, clicks) when asked, or keep
                your account connected so we can collect them automatically.
                Brands use these to measure results.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 5. Disclosure and advertising rules */}
          <section id="disclosure" className="scroll-mt-8">
            <SectionHeading
              number="5"
              title="Disclosure and Advertising Rules"
            />
            <div className="space-y-4">
              <Prose>
                Every post you make through Cre8r is an advertisement,
                including barter posts where you only receive a product.
                Indian law and advertising rules require you to make that
                clear. This is not optional, and it protects you as much as
                the brand.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Label every sponsored post
                </strong>{" "}
                with one of the labels approved by the Advertising Standards
                Council of India (ASCI): #ad, #collab, #promo, #sponsored or
                #partnership. Under the Department of Consumer Affairs'
                endorsement guidelines for influencers, you can also use
                words like "advertisement" or "paid promotion".
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                Make it hard to miss.
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  Put the label at the start of the caption, not hidden
                  among other hashtags or after "more".
                </BulletItem>
                <BulletItem>
                  For images and Stories, put the label on the image
                  itself.
                </BulletItem>
                <BulletItem>
                  For videos and Reels, say it out loud and show it on
                  screen. For live streams, show it continuously.
                </BulletItem>
                <BulletItem>
                  Use the platform's paid-partnership tag when the brief
                  asks for it. It does not replace your own label.
                </BulletItem>
                <BulletItem>Use a language your audience understands.</BulletItem>
              </ul>
              <Prose>
                <strong className="text-stone-800">Be honest.</strong> Only
                endorse a product you have actually used or tried. Your
                opinions must be your own. Don't make claims you can't back
                up.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Specialist categories.
                </strong>{" "}
                Some products have extra rules, including health, food
                supplements, financial products, crypto and real-money
                gaming. ASCI requires health and finance creators to hold
                relevant qualifications or registrations, and to show them,
                before giving advice. We will only offer you these
                campaigns if you meet the requirements, and the brief will
                list the mandatory disclaimers.
              </Prose>
              <Prose>
                If a regulator, ASCI or a platform flags your post, tell us
                straight away and follow the correction they ask for.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 6. Payments, barter and taxes */}
          <section id="payments" className="scroll-mt-8">
            <SectionHeading number="6" title="Payments, Barter and Taxes" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  When you get paid.
                </strong>{" "}
                For paid campaigns, we pay the agreed fee on the payment
                terms set out in your Campaign Brief, counted from the day
                your post goes live and we verify it against the brief. You
                can track every payment's status on the platform. If a
                payment is late, write to{" "}
                <MailLink email="collabs@cre8r.ai" /> and we will reply
                within 2 working days with a date.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  How you get paid.
                </strong>{" "}
                We pay by bank transfer or UPI to an account in your own
                name. We can't pay third parties, including managers,
                unless you and they give us written instructions. Make sure
                your bank details are correct. We are not responsible for
                payments sent to details you gave us that turn out to be
                wrong.
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                What can reduce or stop a payment. We will only withhold or
                reduce a fee if:
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  The post was not published, was published late without
                  our agreement, or did not follow the approved draft or
                  brief
                </BulletItem>
                <BulletItem>
                  The post was removed or hidden before the minimum live
                  period, through your action
                </BulletItem>
                <BulletItem>The disclosure label was missing or hidden</BulletItem>
                <BulletItem>
                  We have clear evidence of fake followers, bought
                  engagement or other fraud on the campaign
                </BulletItem>
              </ul>
              <Prose>
                We will tell you the reason in writing, and you can respond
                before we make a final decision.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Barter campaigns.
                </strong>{" "}
                In a barter campaign, the product is your payment. You
                don't receive cash unless the brief also includes a fee or
                affiliate commission. The product's value counts as income
                for tax purposes.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Affiliate campaigns.
                </strong>{" "}
                Where a brief includes commission, you earn it on tracked
                sales through your link or code, after returns and
                cancellations, as set out in the brief. Commission is paid
                monthly in arrears.
              </Prose>
              <Prose>
                <strong className="text-stone-800">PAN and TDS.</strong> You
                must give us your PAN before your first payment. We deduct
                tax at source (TDS) from fees at the rate the Income-tax
                Act, 2025 requires. Without a valid PAN, the law requires a
                higher deduction. We deposit TDS with the government and
                issue you a TDS certificate so you can claim the credit.
              </Prose>
              <Prose>
                <strong className="text-stone-800">TDS on barter.</strong>{" "}
                If the products and other non-cash benefits you receive from
                the same giver in a financial year are worth more than
                ₹20,000, the giver must deduct 10% TDS on their value under
                section 393 of the Income-tax Act, 2025 (formerly section
                194R of the 1961 Act). Because there is no cash to deduct
                from, we will tell you the amount before the product ships.
                You can pay it, have it adjusted from your next Cre8r
                payout, or decline the product.
              </Prose>
              <Prose>
                <strong className="text-stone-800">GST.</strong> If you are
                registered for GST, add your GSTIN to your profile and
                raise a GST invoice for each paid campaign. We will pay the
                GST on top of your fee. If you are not registered, you
                confirm you are not required to be.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Your own taxes.</strong>{" "}
                You are responsible for reporting your income and paying
                any tax due on it.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 7. Rights to your content */}
          <section id="rights" className="scroll-mt-8">
            <SectionHeading number="7" title="Rights to Your Content" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  You own what you create.
                </strong>{" "}
                Copyright in your photos, videos, captions and other content
                stays with you. Neither Cre8r nor the brand becomes the
                owner unless the Campaign Brief clearly says the content is
                being bought outright and you accept that offer.
              </Prose>
              <p className="text-sm font-medium text-stone-700">
                What the brand can do with it. By accepting a campaign, you
                give the brand a non-exclusive licence to:
              </p>
              <ul className="space-y-3">
                <BulletItem>
                  Reshare, repost or link to your post on the brand's own
                  social media accounts, website and app, with credit to
                  you, for 12 months from posting
                </BulletItem>
                <BulletItem>
                  Keep it visible where it was shared after that period
                  ends, without new promotion
                </BulletItem>
              </ul>
              <Prose>
                <strong className="text-stone-800">
                  Ads and other uses need your agreement in the brief.
                </strong>{" "}
                The brand can use your content in paid ads (including
                partnership or "whitelisted" ads run from your handle), on
                e-commerce listings, in print, on TV or outdoors only if the
                Campaign Brief says so and states how long and where. Those
                rights usually carry a higher fee.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  What Cre8r can do with it.
                </strong>{" "}
                You allow Cre8r to show your campaign posts, name and handle
                in campaign reports to the brand, and in our case studies,
                pitches and marketing, with credit to you. You can ask us to
                stop using a post in our own marketing at any time.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Your promises.</strong>{" "}
                You confirm that your content is original, or that you have
                permission for everything in it. This includes music,
                footage, fonts, artwork, and anyone who appears in it,
                especially children. Use only music the platform licenses
                for branded content, or music the brand provides.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Our name and logo.
                </strong>{" "}
                Cre8r's name, logo and platform belong to us. You can say
                you work with Cre8r. Don't use our logo or suggest you
                represent Cre8r without our written permission.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 8. Products and shipping */}
          <section id="products" className="scroll-mt-8">
            <SectionHeading number="8" title="Products and Shipping" />
            <ul className="space-y-3">
              <BulletItem>
                <strong className="text-stone-800">Address.</strong> Give a
                delivery address where you can receive parcels. We share it
                only with the brand and our delivery partner (such as
                Shiprocket) for that shipment.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Tracking.</strong> You
                can track your parcel on the platform.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">
                  Damaged or wrong item.
                </strong>{" "}
                Tell us within 48 hours of delivery, with photos. We will
                arrange a replacement or adjust the timeline.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Returns.</strong> You
                keep the product unless the Campaign Brief says it must be
                returned (for example, high-value items or loan samples). If
                it must be returned, we will arrange pickup at no cost to
                you.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">Safety.</strong> Use
                products as instructed. Tell us before posting if you have
                an allergy or medical condition that a product could
                affect. If you have a reaction, stop using it and tell us.
                You don't have to post about a product that harmed you.
              </BulletItem>
              <BulletItem>
                <strong className="text-stone-800">No resale.</strong>{" "}
                Don't sell products you received before the campaign is
                complete.
              </BulletItem>
            </ul>
          </section>

          <Divider />

          {/* 9. What's not allowed */}
          <section id="notallowed" className="scroll-mt-8">
            <SectionHeading number="9" title="What's Not Allowed" />
            <p className="text-sm text-stone-600 mb-5">
              Don't do any of the following:
            </p>
            <ol className="space-y-3">
              <NumItem label="1.">
                Buy, swap or fake followers, views, likes, comments or
                saves, or use bots, engagement pods or giveaway loops to
                inflate numbers.
              </NumItem>
              <NumItem label="2.">
                Create more than one account, share your account, or
                pretend to be someone else.
              </NumItem>
              <NumItem label="3.">
                Ask a brand you met through Cre8r to work with you directly
                instead, or accept a direct offer from them, for 12 months
                after your last Cre8r campaign with that brand, unless Cre8r
                agrees in writing.
              </NumItem>
              <NumItem label="4.">
                Promote a directly competing brand during any exclusivity
                period stated in the Campaign Brief. There is no exclusivity
                unless the brief states one.
              </NumItem>
              <NumItem label="5.">
                Post anything that is unlawful, defamatory, hateful,
                obscene, harmful to children, or that infringes someone
                else's rights, in campaign content or on the accounts you
                use for campaigns.
              </NumItem>
              <NumItem label="6.">
                Make false or misleading statements about a brand, its
                product or Cre8r. You are free to share an honest opinion,
                including a negative one, outside a sponsored post, as long
                as it is true and fair.
              </NumItem>
              <NumItem label="7.">
                Scrape, copy or reverse-engineer the platform, or access it
                with automated tools.
              </NumItem>
              <NumItem label="8.">
                Ask brands, Cre8r staff or other creators for money, gifts
                or favours outside an agreed campaign.
              </NumItem>
            </ol>
            <p className="text-sm text-stone-600 mt-6">
              If we find a breach, we may withhold payment for the affected
              campaign (section 6), remove you from current campaigns, or
              suspend your account (section 11).
            </p>
          </section>

          <Divider />

          {/* 10. Confidentiality */}
          <section id="confidentiality" className="scroll-mt-8">
            <SectionHeading number="10" title="Confidentiality" />
            <div className="space-y-4">
              <Prose>
                Campaign Briefs often include product launches, prices and
                plans that aren't public yet. Until the brand makes them
                public, keep them to yourself, and only share them with
                people who help you make the content and need to know.
                Don't post or talk about a campaign before the agreed date.
              </Prose>
              <Prose>
                Your fee for a campaign is between you and Cre8r. Please
                don't share it with the brand or publicly. You can always
                discuss it with your manager, accountant or lawyer.
              </Prose>
              <Prose>
                These duties don't apply to information that is already
                public through no fault of yours, or that you are required
                by law to disclose.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 11. Suspension and ending */}
          <section id="suspension" className="scroll-mt-8">
            <SectionHeading
              number="11"
              title="Suspension and Ending Your Account"
            />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">
                  You can leave at any time
                </strong>{" "}
                by deleting your account in settings or emailing{" "}
                <MailLink email="collabs@cre8r.ai" />. Please finish any
                campaign you have already accepted, or cancel it under
                section 3. We will pay everything you have earned for
                completed work.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  We may suspend or close your account
                </strong>{" "}
                if you seriously or repeatedly break these terms, if we
                find fraud or fake engagement, if a regulator or platform
                requires it, or if your account stays inactive for more
                than 24 months. Except in cases of fraud, illegal activity
                or risk to others, we will first tell you why and give you
                7 days to respond or fix the problem.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  What happens after.
                </strong>{" "}
                We pay you for completed, compliant campaigns, unless the
                closure was for fraud on that campaign. The licences in
                section 7 for content already posted continue for their
                agreed period. Sections 6, 7, 10, 12 and 13 continue to
                apply after your account closes. We handle your data after
                closure as described in our Privacy Policy.
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
                  Independent creator.
                </strong>{" "}
                You work with Cre8r as an independent creator, not as an
                employee, agent or partner. Nothing in these terms creates
                an employment relationship.
              </Prose>
              <Prose>
                <strong className="text-stone-800">The platform.</strong> We
                work hard to keep Cre8r running and accurate, but we provide
                it "as is". We don't promise it will always be available or
                error-free, and we don't guarantee you any number of
                campaigns or any level of earnings.
              </Prose>
              <Prose>
                <strong className="text-stone-800">
                  Brands' products.
                </strong>{" "}
                Brands are responsible for their products and the claims in
                their briefs. We check brands before they run campaigns,
                but we can't guarantee every product.
              </Prose>
              <div className="bg-stone-900 text-stone-300 rounded-xl p-6 text-xs leading-relaxed tracking-wide">
                <p className="uppercase font-medium text-stone-200 mb-3">
                  Limit on our liability
                </p>
                <p>
                  To the extent the law allows, our total liability to you
                  for any claim about these terms or the platform is limited
                  to the fees we paid or owe you in the 3 months before the
                  claim arose. We are not liable for indirect losses, such
                  as lost profits or lost opportunities. This limit does not
                  apply to fees you have earned and we have not paid, or to
                  loss caused by our fraud or gross negligence.
                </p>
              </div>
              <p className="text-sm font-medium text-stone-700">
                Your responsibility. You agree to cover Cre8r and the brand
                for losses, fines and reasonable legal costs that arise
                because you:
              </p>
              <ul className="space-y-3">
                <BulletItem>Broke these terms or a Campaign Brief</BulletItem>
                <BulletItem>
                  Posted content that infringes someone else's rights
                </BulletItem>
                <BulletItem>
                  Failed to disclose a sponsored post as section 5 requires
                </BulletItem>
                <BulletItem>Made claims that were not in the approved brief</BulletItem>
              </ul>
              <Prose>
                You are not responsible for claims the brand gave you to
                use, as long as you used them exactly as approved.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 13. Disputes */}
          <section id="disputes" className="scroll-mt-8">
            <SectionHeading number="13" title="Disputes, Grievances and Contact" />
            <div className="space-y-4">
              <Prose>
                <strong className="text-stone-800">Talk to us first.</strong>{" "}
                Most problems are solved fastest by writing to{" "}
                <MailLink email="collabs@cre8r.ai" />.
              </Prose>
              <p className="text-sm text-stone-600">
                <strong className="text-stone-800">
                  Grievance Officer.
                </strong>{" "}
                If you have a complaint about the platform, your content,
                your data or how you were treated, you can write to our
                Grievance Officer. We acknowledge complaints within 24 hours
                and aim to resolve them within 15 days.
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
                <strong className="text-stone-800">Arbitration.</strong> If
                a dispute isn't resolved within 30 days, either of us may
                refer it to arbitration under the Arbitration and
                Conciliation Act, 1996. A sole arbitrator will be appointed
                by agreement between us or, if we can't agree, under that
                Act. The arbitration will be held in Gurugram, Haryana, in
                English, and may be held online. Each side bears its own
                costs unless the arbitrator decides otherwise.
              </Prose>
              <Prose>
                <strong className="text-stone-800">Governing law.</strong>{" "}
                These terms are governed by the laws of India. Subject to
                the arbitration clause, the courts at Gurugram, Haryana have
                jurisdiction. Nothing here stops you from approaching a
                consumer forum or regulator where the law allows it.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* 14. Changes */}
          <section id="changes" className="scroll-mt-8">
            <SectionHeading number="14" title="Changes to These Terms" />
            <div className="space-y-4">
              <Prose>
                We may update these terms as the platform or the law
                changes. For important changes, we will email you at least
                15 days before they take effect and show a notice on the
                platform. Changes don't apply to campaigns you have already
                accepted. If you don't agree with a change, you can close
                your account before it takes effect. If you keep using Cre8r
                after that, the new terms apply.
              </Prose>
              <Prose>
                If any part of these terms is found to be unenforceable, the
                rest still applies. If we don't enforce a term straight
                away, we haven't given up the right to enforce it later. You
                may not transfer these terms to anyone else. We may transfer
                them to a company that takes over the Cre8r business, and we
                will tell you if we do.
              </Prose>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
