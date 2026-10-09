export const featureFlags = {
  enableCaseStudies: false,
  enableFounderVideos: false,
  enableCalculators: false,
  enableResources: false,
  // Pages hidden until they are relaunched. While a flag is off its route is
  // not registered, its nav links are hidden, and the URL redirects (see
  // app/redirects.ts) — flip it to true to bring the page back as it was.
  enableBarterCollabs: false,
  enableCreatorCommunity: false,
  enableLeadGen: false,
  // WhatsApp support isn't live yet — keep this off so every WhatsApp CTA
  // falls back to the Calendly link until it's ready.
  enableWhatsApp: false,
};
