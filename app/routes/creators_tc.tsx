import React, { useState } from "react";

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

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white rounded-xl border border-stone-200 p-6">
    {children}
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-sm font-semibold text-stone-800 mb-2">{children}</h3>
);

const LetterItem = ({
  letter,
  children,
}: {
  letter: string;
  children: React.ReactNode;
}) => (
  <li className="flex gap-4 text-sm leading-relaxed text-stone-600">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold flex items-center justify-center mt-0.5">
      {letter}
    </span>
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
    <span className="flex-shrink-0 font-semibold text-stone-400 w-5">
      {label}
    </span>
    <p>{children}</p>
  </li>
);

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-sm leading-relaxed text-stone-600">
    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400 mt-2" />
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
  { id: "definition", label: "Definition" },
  { id: "non-exclusivity", label: "Non-Exclusivity" },
  { id: "obligations", label: "Influencer's Obligation" },
  { id: "eligibility", label: "Influencer Eligibility" },
  { id: "submission", label: "Submission of Content" },
  { id: "third-party", label: "Third Party Websites" },
  { id: "rights-granted", label: "Rights Granted by CRE8R" },
  { id: "ip", label: "Intellectual Property" },
  { id: "influencer-rights", label: "Influencer Rights in Posts" },
  { id: "consideration", label: "Consideration" },
  { id: "cre8r-ip", label: "CRE8R's Intellectual Property" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "indemnification", label: "Indemnification" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "dispute", label: "Dispute Resolution" },
  { id: "jurisdiction", label: "Jurisdiction" },
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

export default function InfluencerAgreement() {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased pt-32">
      {/* Page Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-3">
            Grunmech Technologies Private Limited
          </p>
          <h1 className="text-5xl font-serif text-stone-900 leading-tight mb-2">
            Influencer Agreement
          </h1>
          <p className="text-sm text-stone-500">
            Platform:{" "}
            <span className="font-medium text-stone-700">www.cre8r.ai</span>
            &nbsp;·&nbsp;©CRE8R {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex gap-12 items-start">
        <TableOfContents active={activeSection} onSelect={scrollTo} />

        <main className="flex-1 space-y-12">
          {/* Copyright Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 text-xs leading-relaxed text-amber-800">
            <strong>©CRE8R [{new Date().getFullYear()}].</strong> All rights
            reserved; reproduction, adaptation, or translation without
            permission is prohibited except as allowed under the International
            copyright laws. All the text, graphics, design, content, and other
            works on the website and app are trademarked works of CRE8R.
          </div>

          <Prose>
            CRE8R has created the CRE8R Platform to allow Brands and influencers
            to interact, form relationships, buy and sell Paid Content, and
            create and distribute sponsored Posts through the influencer's
            Channels (Instagram, YouTube, Twitter and/or Facebook), with
            facilitation, support, control, and direction provided by CRE8R and
            in accordance with these Terms of Use.
          </Prose>

          <Divider />

          {/* Introduction */}
          <section id="intro" className="scroll-mt-8">
            <SectionHeading title="Introduction" />
            <div className="space-y-4">
              <Prose>
                By accessing or using CRE8R services, you agree to be bound by
                these terms, including our Privacy and Cookies Policies, upon
                creating an account. We may update the terms from time to time,
                so you should check this page regularly for updates.
              </Prose>
              <Prose>
                Welcome to CRE8R, operated for users globally. As used in this
                Agreement, the terms "CRE8R," "us," "we," the "Company", and
                "our" shall refer as appropriate.
              </Prose>
              <Prose>
                By accessing or using our Services on CRE8R (the "Website"), We
                reserve the right to modify, amend, or change the Terms at any
                time. Notice of any material change will be posted on this page
                with an updated effective date. Responsibility for regularly
                checking this page for notice of any change shall solely be of
                the user. Your continued use of our Services to construe your
                acceptance of any change, and you will be legally bound by the
                updated Terms. If you do not accept a change to the terms, you
                should stop using our Services immediately.
              </Prose>
              <Prose>
                You further acknowledge that you are willing to interact with
                the brands, advertisers, marketing agencies. By including your
                name as an influencer, you may get requests from brands,
                advertisers, marketing agencies asking you to support them in
                their brand promotions by making suitable social media postings
                in return for some fees or products. You have the liberty to
                accept/refuse these requests from brands, advertisers, and
                marketing agencies. You may understand that CRE8r is merely a
                facilitator/medium (intermediary) to connect.
              </Prose>
              <Prose>
                We do not provide any assurance about brands, advertisers, and
                marketing agencies in any aspects. You understand that CRE8r is
                a digital platform that (a) collects your data/Personal
                information available in various social media platforms like
                Instagram, Facebook, Twitter, YouTube etc., (b) monetize the
                Content of your Personal information through our Application
                Program Interface (API) and web crawlers and (c) showcase your
                ability, creativity and passion to various brands, advertisers,
                market agencies and thereby helping you to monetise your social
                media presence.
              </Prose>
              <Prose>
                CRE8r website is an Influencer marketplace platform. This
                agreement set forth is legally binding for all the users of the
                website. This Terms of Use is published in accordance with the
                provisions of Rule 3 (1) of the Information Technology
                (Intermediaries Guidelines) Rules, 2011.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Definitions */}
          <section id="definition" className="scroll-mt-8">
            <SectionHeading title="Definition" />
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  term: "Services",
                  def: 'Any services offered on or through the Site, to a guest or a registered user (hereafter "Agreement").',
                },
                {
                  term: "Content",
                  def: "Shall mean and include any inputs on specific brands/topics by any user including any blogger/individuals/social media influencers which may be in the form of text, reviews, comments, data, information, images, photographs, music, sound, video or any other material or any reactions thereto.",
                },
                {
                  term: "User",
                  def: "Shall mean and include digital marketing companies/brands, individuals, and influencers.",
                },
                {
                  term: "Influencer",
                  def: "Shall mean persons who is active in social medias (like Facebook, Twitter, Instagram, YouTube etc and/or who has substantial followers, subscribers, and who has the ability to influence other social media users who have been included in CRE8R database either as registered influencers or unregistered influencers.",
                },
                {
                  term: "Registered Influencer",
                  def: "Shall mean those who have volunteered to provide their personal details into the CRE8R database and registered on the platform as an influencer.",
                },
                {
                  term: "Unregistered Influencers",
                  def: "Shall mean influencer identified by CRE8R from its own research whose insights and coordinates are extracted from various public sources.",
                },
                {
                  term: "Personal Information",
                  def: "Shall mean and include any information relating to the user's Instagram Handle including name, email id, phone number, location, gender, IP address, address, photograph and economic, cultural, or social identity of the user along with user's audience data and any other information that the influencer may choose to share or be available in the public domain.",
                },
              ].map(({ term, def }) => (
                <Card key={term}>
                  <CardTitle>{term}</CardTitle>
                  <Prose>{def}</Prose>
                </Card>
              ))}
            </div>
          </section>

          <Divider />

          {/* Non-Exclusivity */}
          <section id="non-exclusivity" className="scroll-mt-8">
            <SectionHeading title="Non-Exclusivity" />
            <Prose>
              This Agreement does not create an exclusive agreement between the
              parties and both parties reserve the right to recommend similar
              products and services of third parties and to work with other
              parties in connection with the design, sale, installation,
              implementation and use of similar services and products of third
              parties, though without express or implied disclosures of
              confidential information of the other party.
            </Prose>
          </section>

          <Divider />

          {/* Influencer Obligations */}
          <section id="obligations" className="scroll-mt-8">
            <SectionHeading title="Influencer's Obligation" />
            <p className="text-sm text-stone-600 mb-5">
              By accepting all the terms influencer is liable for the following
              obligations:
            </p>
            <ul className="space-y-3">
              {[
                "Influencer's profile shall accurately represent his/her experience, skills, expertise, and personal information.",
                "Influencer's profile photos shall be clear and appropriate for a professional, global community.",
                "Heavily digitally manipulated pictures are prohibited.",
                "Each Influencer shall be allowed to have only one account.",
                "Influencer's account shall not be shared or duplicated in any way.",
                "Attempting to mislead by falsely implying a relationship with the Company or any Advertiser shall not be allowed.",
                "The Influencer must abide by the Advertising Standards Council of India (ASCI) guidelines in all the posts.",
                "Any offer of Services that is spam in nature shall be strictly prohibited.",
                "The Influencer shall never post and/or say any kind of negative communication including but not limited to the defamatory, derogatory, abusive, false or incorrect comments, bad words, misrepresentations, complaints, grievances etc., in any media pertaining to or in relation to the Company, Advertiser(s), its employees, representatives, group companies, clients or affiliates, the Campaign, Brands/Topics, Consideration, remuneration, payments process etc.",
                "The Influencer shall not edit a Post after Brand has approved the Post.",
                "The Influencer is solely responsible for all the content published and which remains unapproved by the brand.",
                "The Influencer must keep the post on the social media on their page for at least 30 days or as specified in campaign brief and agreed mutually.",
                "After a Post is published, the Influencer will not publish any Post where the effect would be to reduce the prominence of the earlier Post.",
                "Brand has the right at any time to moderate any Post after publication for a valid reason and the Influencer will immediately make any reasonable modification or amendment requested by Brand.",
                "Brand has the right at any time to request that the Post be removed, and the Influencer will comply with such a request immediately upon receipt of such notification.",
                "In case of any defect or shortcomings in the agreed deliverables, Influencer shall remove such defect or shortcoming post receipt of request from Brand.",
                "You should keep up to speed with the latest developments and best practice on how to label your posts in a transparent way to show that it is paid for by the brand. Normally, that will mean labelling your content with #ad or ADVERT in the title or thumbnail of your content.",
                "We work exclusively with influencers who've organically grown their audience. If you're misrepresenting the size of your audience or engagement in your content, we reserve the right to terminate your account.",
                "You must clearly disclose in each sponsored Post your relationship with the Brand through prominent hashtags such as #advertisement or #ad.",
              ].map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </ul>
          </section>

          <Divider />

          {/* Influencer Eligibility */}
          <section id="eligibility" className="scroll-mt-8">
            <SectionHeading title="Influencer Eligibility" />
            <p className="text-sm text-stone-600 mb-5">
              Before you create an account, make sure you are eligible to use
              our Services. By using our Services, you represent and warrant
              that you possess following eligibility:
            </p>
            <ul className="space-y-3">
              {[
                "Any person over the age of 18 years, or over the age of 13 years with the written consent of a parent or legal guardian.",
                "You are legally qualified to enter a binding contract with CRE8R.",
                "You must be eligible to use each of the social media platforms through which you sign in to the Application (under the relevant platform's prevailing terms and conditions).",
                "You must have at least 1000 followers on Instagram while signing up to the Application.",
                "Your account should be public (viewable by anyone); and either a business account or creator account and all the prerequisite pages are linked with your account/profile as required by social media platforms.",
                "The said Channels may not contain content that is contrary to these Terms of Use or to the terms of use of the relevant social media platform.",
                "You must not misrepresent the size of your audience or your numbers of followers or level of engagement. You must have obtained your followers organically and not through unethical or unsportsmanlike behaviour such as (but not limited to) purchasing or fabricating followers, likes or engagement.",
              ].map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </ul>
          </section>

          <Divider />

          {/* Submission of Content */}
          <section id="submission" className="scroll-mt-8">
            <SectionHeading number="6" title="Submission of Content" />
            <div className="space-y-4 mb-8">
              <Prose>
                It is important that you understand your rights and
                responsibilities with regard to the content on our Services,
                including any content you provide or post. You are expressly
                prohibited from posting inappropriate content. Each Post or Paid
                Content that you upload should be submitted to the brand for
                prior approval. We are not obliged to submit any Post or Paid
                Content that you upload to the Application to the Brand. Posts
                and Paid Content that do not comply with the above-mentioned
                clause may be made inaccessible by the Brand and/or removed.
              </Prose>
            </div>
            <p className="text-sm font-medium text-stone-700 mb-4">
              You must not:
            </p>
            <ul className="space-y-3">
              {[
                {
                  label: "i.",
                  text: "Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of any Person, including but not limited to the Brands/Topics, Campaign(s), Company, Advertiser(s), employees, directors, or representatives of the Company and/or Advertiser(s).",
                },
                {
                  label: "ii.",
                  text: "Publish, post, upload, distribute or disseminate any inappropriate, profane, offensive, defamatory, derogatory, negative, abusive, infringing, obscene, indecent, or unlawful topic, name, material or information through any blog, tag, or keyword.",
                },
                {
                  label: "iii.",
                  text: "Post Content or items in inappropriate categories.",
                },
                {
                  label: "iv.",
                  text: "Publish, post, or upload any Content with an intent to cause any harm to the reputation of any other brand/topics.",
                },
                {
                  label: "v.",
                  text: "Upload Content that shall infringe upon or misappropriate any Intellectual Property Rights or proprietary rights or rights of publicity or privacy of any Person or contain software or other material protected by Intellectual Property Rights of any third party, unless the Influencer owns or controls the said rights or has received all necessary consents thereto.",
                },
                {
                  label: "vi.",
                  text: "Transmit, access, or communicate any data that he/she/they do not have a right to transmit under any law or under contractual or fiduciary relationships.",
                },
                {
                  label: "vii.",
                  text: "Transfer his/her account, username and/or password to a third party.",
                },
                {
                  label: "viii.",
                  text: "Distribute or post spam, unsolicited, or bulk electronic communications, chain letters, or pyramid schemes.",
                },
                {
                  label: "ix.",
                  text: "In any manual or automated way copy, appropriate, use or disclose any copyrighted text, or other intellectual property, rights of publicity, privacy, or contract rights or otherwise misuse or misappropriate CRE8R Platform information or content.",
                },
                {
                  label: "x.",
                  text: "Upload or distribute Content that contain viruses, corrupted files, 'Trojan horses' or any other similar software or programs that may interrupt, harm, overload, collapse, destroy, detrimentally interfere with, or expropriate any system, data, or personal information.",
                },
                {
                  label: "xi.",
                  text: "Use any automated system including but not limited to robots, spiders, offline readers, crawlers, scrapers to access, copy, maintain or compile the CRE8R Platform or content thereon for any purpose without CRE8R's prior written approval.",
                },
                {
                  label: "xii.",
                  text: "Impersonate any person or entity or falsely state or otherwise misrepresent his/her affiliation with a person or entity.",
                },
                { label: "xiii.", text: "Engage any illegal activity." },
                {
                  label: "xiv.",
                  text: "Share or disseminate material linked to terrorist activities.",
                },
                {
                  label: "xv.",
                  text: "Share or disseminate information on development, design, manufacture, or production of missiles, or nuclear, chemical, or biological weapons.",
                },
                {
                  label: "xvi.",
                  text: "Violate any applicable laws or regulations for the time being in force in or outside India.",
                },
                {
                  label: "xvii.",
                  text: "By act, word, deed or otherwise make any statement to the effect that the Influencer is associated with the Company in any manner.",
                },
                {
                  label: "xviii.",
                  text: "Threaten the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence.",
                },
                {
                  label: "xix.",
                  text: "Violate the terms of engagement, terms of use, privacy policy or any other terms and conditions as may be applicable to him/her.",
                },
              ].map(({ label, text }) => (
                <NumItem key={label} label={label}>
                  {text}
                </NumItem>
              ))}
            </ul>
            <div className="mt-6 space-y-4">
              <Prose>
                This license shall automatically terminate if you violate any of
                the above restrictions. Upon termination of the license, you
                must destroy any downloaded materials in your possession in any
                format whatsoever including in electronic or printed format.
              </Prose>
              <Prose>
                We may alter, suspend, or discontinue any aspect of the Services
                at any time, including the availability of any feature,
                database, or content. We may also impose limits on certain
                features and aspects of the Services or restrict your access to
                parts or all of the Services without notice or liability.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Third Party */}
          <section id="third-party" className="scroll-mt-8">
            <SectionHeading
              number="7"
              title="Third Party Websites / Mobile Applications, Goods and Services"
            />
            <div className="space-y-4">
              <Prose>
                The Platform provides links to third party websites and/or
                mobile applications. We make no representations as to the
                quality, suitability, functionality, or legality of any sites to
                which we may provide links, or any goods or services available
                from such sites. You acknowledge that when you access a link
                that leaves the website of the Platform, the site you will enter
                into is not controlled by us and different terms of use and
                privacy policies may apply. By accessing links to other sites,
                you acknowledge that We are not responsible for those sites.
                Cre8r reserves the right to disable links from third-party sites
                to the Platform, although we are under no obligation to do so.
              </Prose>
              <Prose>
                All matters concerning any goods and/or services that you
                purchase from a third party site, including without limitation
                all contract terms, are solely between you and the owner of that
                site and you agree not to hold us responsible or liable for any
                costs or damages to you or any third party arising directly or
                indirectly out of the purchase/availing by you of goods and/or
                services from any third party website and/or mobile application.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Rights Granted */}
          <section id="rights-granted" className="scroll-mt-8">
            <SectionHeading
              number="9"
              title="Rights You Are Granted by CRE8R"
            />
            <Prose>
              CRE8R grants you the right to use and enjoy our Services, subject
              to these Terms. For as long as you comply with these Terms, CRE8R
              grants you a personal, worldwide, royalty-free, non-assignable,
              non-exclusive, revocable, and non-sub licensable license to access
              and use our Services for purposes as intended by CRE8R and
              permitted by these Terms and applicable laws.
            </Prose>
          </section>

          <Divider />

          {/* IP */}
          <section id="ip" className="scroll-mt-8">
            <SectionHeading number="10" title="Intellectual Property" />
            <Prose>
              Nothing in these Terms of Use grants you any ownership or other
              rights in, the Intellectual Property Rights of the Brand. Nothing
              in these Terms of Use prohibits the Brand to make use of any
              content made by the influencer for promotion of brand to use on
              their platform.
            </Prose>
          </section>

          <Divider />

          {/* Influencer Rights */}
          <section id="influencer-rights" className="scroll-mt-8">
            <SectionHeading number="11" title="Influencer Rights in Posts" />
            <Prose>
              All rights, title, and interest (including all Intellectual
              Property Rights) in Posts will remain held by you for all the
              social media pages owned by you.
            </Prose>
          </section>

          <Divider />

          {/* Consideration */}
          <section id="consideration" className="scroll-mt-8">
            <SectionHeading
              number="12"
              title="Consideration — Requirements for Payment"
            />
            <Prose>
              You shall duly provision your account details and affirm to
              acceptance of payments to be remitted to you as per agreed terms
              or within 45 days from the date of getting the post live on the
              said platforms.
            </Prose>
          </section>

          <Divider />

          {/* CRE8R IP */}
          <section id="cre8r-ip" className="scroll-mt-8">
            <SectionHeading number="13" title="CRE8R's Intellectual Property" />
            <div className="space-y-4">
              <Prose>
                All CRE8R Materials on the CRE8R Platform are protected by all
                applicable laws, including copyright and trademark laws, and may
                not be used except as permitted in these Terms of Use. Nothing
                in these Terms of Use will be taken to constitute a transfer,
                assignment or grant of any ownership rights in any Intellectual
                Property Rights in the CRE8R Materials to a Brand or Influencer.
              </Prose>
              <Prose>
                All right, title and interest in all Intellectual Property
                Rights in all of CRE8R brands, logos, images, buttons, codes,
                layout, text, content, graphics, and products and services as
                displayed on the CRE8R Platform as well as the look and feel of
                the CRE8R Platform (the "Brand Features") are the property of
                CRE8R and will remain or be vested in CRE8R at all times and may
                not be copied, imitated or used in whole or in part without
                CRE8R prior written consent. Your use of the CRE8R Platform will
                not under any circumstances be taken to constitute a transfer,
                assignment or grant of any ownership rights in any of the Brand
                Features or the Platform. CRE8R grants to you a limited,
                non-exclusive licence to use the Brand Features solely for the
                purpose, and to the extent necessary, to enable you to use the
                CRE8R Platform in accordance with these Terms of Use.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Confidentiality */}
          <section id="confidentiality" className="scroll-mt-8">
            <SectionHeading number="14" title="Confidentiality" />
            <Prose>
              Each of you and CRE8R understands that the other has disclosed or
              may disclose business, technical or financial information relating
              to its business, including in the case of CRE8R (Confidential
              Information), and agrees:
            </Prose>
            <ul className="space-y-3 mt-5">
              {[
                "To take reasonable precautions to protect the other party's Confidential Information.",
                "Not to use the other party's Confidential Information except for the purposes of these Terms of Use.",
                "Not to disclose the other party's Confidential Information to any third person except to the extent required by law or with the consent of the other party.",
              ].map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </ul>
            <p className="text-sm text-stone-600 mt-6 mb-4">
              The obligations will not apply to any information that you or
              CRE8R can document:
            </p>
            <ul className="space-y-3">
              {[
                "Is or has become generally available to the public.",
                "Was in its possession, or known by it, prior to receipt from the other party.",
                "Was rightfully disclosed to it without restriction by a third person.",
                "Was independently developed by it without use of any Confidential Information of the other party.",
              ].map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </ul>
          </section>

          <Divider />

          {/* Indemnification */}
          <section id="indemnification" className="scroll-mt-8">
            <SectionHeading number="15" title="Indemnification" />
            <p className="text-sm text-stone-600 mb-5">
              You agree to indemnify, and must defend and hold harmless, CRE8R
              and its related bodies corporate, personnel, servants, and agents,
              from and against any claims, liabilities, damages, losses, and
              expenses (including reasonable legal fees) arising out of or in
              any way connected with any of the following:
            </p>
            <ul className="space-y-3">
              {[
                {
                  letter: "a",
                  text: "Your Content or access to the CRE8R Platform.",
                },
                {
                  letter: "b",
                  text: "Your use or inability to use the CRE8R Platform.",
                },
                {
                  letter: "c",
                  text: "Your breach or alleged breach of these Terms of Use.",
                },
                {
                  letter: "d",
                  text: "(Where you are an influencer) your claim against a Brand for any reason.",
                },
                {
                  letter: "e",
                  text: "(Where you are a Brand) your claim against an influencer for any reason.",
                },
                {
                  letter: "f",
                  text: "Any claim or allegation that your Content infringes a third party's rights, including Intellectual Property Rights.",
                },
                { letter: "g", text: "Your violation of any applicable Laws." },
                { letter: "h", text: "Any misrepresentation made by you." },
              ].map(({ letter, text }) => (
                <LetterItem key={letter} letter={letter}>
                  {text}
                </LetterItem>
              ))}
            </ul>
          </section>

          <Divider />

          {/* Limitation of Liability */}
          <section id="liability" className="scroll-mt-8">
            <SectionHeading number="16" title="Limitation of Liability" />
            <div className="bg-stone-900 text-stone-300 rounded-xl p-6 text-xs leading-relaxed tracking-wide space-y-4">
              <p>
                In using the CRE8R Platform, you may be exposed to Content that
                is harmful, obscene, misleading, or inaccurate. Under no
                circumstances will CRE8R be liable in any way for any Content,
                including but not limited to any errors or omissions in such
                Content or any loss or damage of any kind incurred as a result
                of any use of Content posted, transmitted, or otherwise made
                available via the CRE8R Platform.
              </p>
              <p className="uppercase">
                IN NO EVENT SHALL THE AGGREGATE LIABILITY OF CRE8R FOR ANY
                DAMAGES ARISING UNDER THESE TERMS OR OUT OF YOUR USE OF, OR
                INABILITY TO USE, EXCEED THE TOTAL AMOUNT OF FEES, IF ANY, PAID
                TO YOU BY CRE8R FOR OFFERING YOUR SERVICES OR USING THE SITE
                DURING THE THREE (3) MONTHS PRIOR TO BRINGING THE CLAIM.
              </p>
              <p>
                The CRE8R Group shall not be liable to the influencer for
                damages of any kind arising out of the influencer's use of the
                CRE8R Platform otherwise required by Law.
              </p>
            </div>
          </section>

          <Divider />

          {/* Disclaimers */}
          <section id="disclaimers" className="scroll-mt-8">
            <SectionHeading number="17" title="Disclaimers" />
            <div className="bg-stone-100 border border-stone-200 rounded-xl p-6">
              <Prose>
                Whilst CRE8R endeavours to take all reasonable steps to ensure
                that the CRE8R Platform operates as expected, the CRE8R Platform
                and its entire contents are provided on an "as is" and "as
                available" basis without any warranties of any kind, either
                expressed or implied, to the fullest extent permissible pursuant
                to applicable law, including, without limitation, any implied
                warranties of merchantability, satisfactory quality,
                non-infringement or fitness for a particular purpose. CRE8R does
                not make any guarantees and does not provide any undertaking
                that the CRE8R Platform will be available at all times or that
                it will be error free, reliable, or secure or free from viruses
                or other harmful components or that any defects will be
                corrected. You agree that you use the CRE8R Platform at your own
                risk and that CRE8R disclaims any and all responsibility for any
                damage or loss that you may suffer or incur as a result of using
                the CRE8R Platform, whether they are direct, indirect, punitive,
                or consequential (including but not limited to loss of profits,
                loss of business revenue or loss of goodwill). This includes any
                loss that results from any interference, malfunction, delays,
                failures, or damage that occurs to your device or that results
                from accessing, installing, updating, or using the CRE8R
                Platform. You assume total responsibility for your use of the
                CRE8R Platform, including compliance with all applicable road
                rules and regulations. Subject to the Consumer Guarantees, your
                sole remedy against CRE8R for dissatisfaction with the CRE8R
                Platform or any content is to stop using the CRE8R Platform or
                such Content. This limitation of relief is a part of the bargain
                between the parties.
              </Prose>
            </div>
          </section>

          <Divider />

          {/* Dispute Resolution */}
          <section id="dispute" className="scroll-mt-8">
            <SectionHeading number="18" title="Dispute Resolution" />
            <Prose>
              In the unlikely event that we have a legal dispute, here is what
              you need to know. If you are dissatisfied with our Services for
              any reason, please contact CRE8R Customer Service first so that we
              can try to resolve your concerns without the need of outside
              assistance. If you choose to pursue a claim against CRE8R, these
              terms will apply.
            </Prose>
          </section>

          <Divider />

          {/* Jurisdiction */}
          <section id="jurisdiction" className="scroll-mt-8">
            <SectionHeading
              number="19"
              title="Jurisdiction and Dispute Resolution"
            />
            <Prose>
              Any question or difference which may arise concerning the
              construction meaning or effect of this Agreement or concerning the
              rights and liabilities of the parties hereunder or any other
              matter arising out of or in connection with this Agreement shall
              be referred to a single arbitrator who shall conduct proceeding in
              Gurgaon, Haryana which shall be appointed by us within 30 days
              from the written request from the Member. The decision of such
              arbitrator shall be final and binding upon the parties. The cost
              of proceedings shall be borne equally by the parties. Any
              reference under this clause shall be deemed to be a reference to
              arbitration within the meaning of the Arbitration Act 1996. The
              courts at Gurgaon, Haryana (India) shall have exclusive
              jurisdiction in all the matters arising out of Agreement. For the
              purpose of Jurisdiction this Agreement shall be deemed to be
              accepted by the User/Member in India.
            </Prose>
          </section>
        </main>
      </div>
    </div>
  );
}
