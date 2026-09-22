import { useEffect } from "react";
import { CTA } from "~/constants";
import { seo } from "~/seo";

export function meta() {
  return seo({
    title: "Creator Sign Up",
    description:
      "Sign up as a creator on Cre8r and start collaborating with brands.",
    path: "/influencer-sign-up",
    noindex: true,
  });
}

/**
 * Legacy URL from the old site. Creator onboarding now lives on the Ylytic
 * platform, so this sends visitors straight there with a link as a fallback for
 * anyone whose browser blocks the automatic redirect.
 */
export default function InfluencerSignUp() {
  useEffect(() => {
    window.location.replace(CTA.CREATOR.href);
  }, []);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="h1">
        Taking you to creator sign up
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        Creator registration has moved to our platform. You'll be redirected in a
        moment.
      </p>
      <a
        href={CTA.CREATOR.href}
        className="mt-6 text-sm font-medium text-foreground underline underline-offset-4"
      >
        Continue to sign up
      </a>
    </main>
  );
}
