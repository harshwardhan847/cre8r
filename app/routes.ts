import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/influencer", "routes/influencer.tsx"),
  route("/product", "routes/product.tsx"),
  route("/demo", "routes/demo.tsx"),
  route("/case-studies", "routes/case-studies.tsx"),
  route("/resources", "routes/resources.tsx"),
  route("/barter-collabs", "routes/barter-collabs.tsx"),
  route("/creator", "routes/creator.tsx"),
  route("/hiring", "routes/hiring.tsx"),
  route("/brands_tc", "routes/brands_tc.tsx"),
  route("/creators_tc", "routes/creators_tc.tsx"),
  route("/privacy_policy", "routes/privacy_policy.tsx"),
] satisfies RouteConfig;
