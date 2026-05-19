import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/influencer", "routes/influencer.tsx"),
  route("/product", "routes/product.tsx"),
  route("/brands_tc", "routes/brands_tc.tsx"),
  route("/creators_tc", "routes/creators_tc.tsx"),
  route("/privacy_policy", "routes/privacy_policy.tsx"),
] satisfies RouteConfig;
