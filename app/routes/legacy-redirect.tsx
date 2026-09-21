import { Navigate, useLocation } from "react-router";
import { resolveLegacyPath } from "~/redirects";

/**
 * Shared handler for every legacy cre8r.ai path. The app runs as an SPA, so the
 * host serves index.html for these URLs and the redirect happens here on the
 * client, replacing the history entry so Back returns to where the visitor came
 * from rather than bouncing them through the old URL again.
 */
export default function LegacyRedirect() {
  const location = useLocation();
  return <Navigate to={resolveLegacyPath(location.pathname)} replace />;
}
