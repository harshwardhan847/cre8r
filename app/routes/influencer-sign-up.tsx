import { useEffect } from "react";
import { CONSTANTS } from "~/constants";

export function meta() {
  return [
    { title: "Creator Sign Up · Cre8r AI" },
    {
      name: "description",
      content:
        "Sign up as a creator on Cre8r and start collaborating with brands.",
    },
    { name: "robots", content: "noindex" },
  ];
}

/**
 * Legacy URL from the old site. Creator onboarding now lives on the Ylytic
 * platform, so this sends visitors straight there with a link as a fallback for
 * anyone whose browser blocks the automatic redirect.
 */
export default function InfluencerSignUp() {
  useEffect(() => {
    window.location.replace(CONSTANTS.CREATOR_SIGNUP_URL);
  }, []);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-light tracking-tight md:text-3xl">
        Taking you to creator sign up
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        Creator registration has moved to our platform. You'll be redirected in a
        moment.
      </p>
      <a
        href={CONSTANTS.CREATOR_SIGNUP_URL}
        className="mt-6 text-sm font-medium text-foreground underline underline-offset-4"
      >
        Continue to sign up
      </a>
    </main>
  );
}
