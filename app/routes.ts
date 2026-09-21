import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { featureFlags } from "./featureFlags";
import { LEGACY_REDIRECTS } from "./redirects";

export default [
  index("routes/home.tsx"),
  route("/about-us", "routes/about-us.tsx"),
  route("/contact-us", "routes/contact-us.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/faq-brands", "routes/faq-brands.tsx"),
  route("/faq-influencers", "routes/faq-influencers.tsx"),
  route("/influencer", "routes/influencer.tsx"),
  route("/influencer-sign-up", "routes/influencer-sign-up.tsx"),
  route("/product", "routes/product.tsx"),
  route("/product/discovery", "routes/product-discovery.tsx"),
  route("/product/execution", "routes/product-execution.tsx"),
  route("/product/affiliate-roi", "routes/product-affiliate.tsx"),
  route("/product/lead-gen", "routes/product-lead-gen.tsx"),
  route("/demo", "routes/demo.tsx"),
  ...(featureFlags.enableCaseStudies ? [route("/case-studies", "routes/case-studies.tsx")] : []),
  ...(featureFlags.enableResources ? [route("/resources", "routes/resources.tsx")] : []),
  route("/barter-collabs", "routes/barter-collabs.tsx"),
  route("/creator", "routes/creator.tsx"),
  route("/hiring", "routes/hiring.tsx"),
  route("/brands_tc", "routes/brands_tc.tsx"),
  route("/creators_tc", "routes/creators_tc.tsx"),
  route("/privacy_policy", "routes/privacy_policy.tsx"),

  // Paths carried over from the old cre8r.ai site. They all share one module,
  // which looks the incoming pathname up in LEGACY_REDIRECTS.
  ...Object.keys(LEGACY_REDIRECTS).map((path) =>
    route(path, "routes/legacy-redirect.tsx", { id: `legacy:${path}` }),
  ),
  route("/post/*", "routes/legacy-redirect.tsx", { id: "legacy:/post" }),

  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
