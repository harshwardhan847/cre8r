import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import BlurEffect from "react-progressive-blur";
import Navbar from "./pages/HomePage/components/Navbar";
import Footer from "./pages/HomePage/components/Footer";
import { organizationSchema, websiteSchema, SITE, seo } from "./seo";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    // Only the weights used in the codebase (200-700, no italics). The full
    // ital+100..900 request pulled 18 font files on every page load.
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap",
  },
  { rel: "icon", href: "/favicon.ico", sizes: "any" },
  { rel: "icon", href: "/favicon.png", type: "image/png" },
  { rel: "apple-touch-icon", href: "/favicon.png" },
];

/**
 * Fallback metadata. Every route exports its own `meta`, which replaces this
 * wholesale — this only covers the SPA fallback document that the host serves
 * for paths that were not prerendered.
 */
export const meta: Route.MetaFunction = () =>
  seo({
    title: "Influencer Marketing Platform",
    description: SITE.description,
    path: "/",
    noindex: true,
  });

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f6f5f3" />
        <meta name="author" content={SITE.legalName} />
        <Meta />
        <Links />
        {/*
          Organisation and WebSite identity, emitted on every page so answer
          engines resolve one entity across the site. Page-level schema is added
          by each route's `meta` export and references these by @id.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="">
        <div className="fixed z-50 top-0 left-0 w-screen h-auto">
          <BlurEffect position="top" intensity={100} className="h-20" />
        </div>
        <Navbar />
        {/* Several page components render their own <main>, so this stays a
            plain wrapper to avoid nesting landmarks. */}
        <div className="w-full h-full min-h-screen">{children}</div>

        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Something went wrong";
  let details = "An unexpected error occurred. Please try again.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Page not found" : "Something went wrong";
    details =
      error.status === 404
        ? "The link may be out of date or mistyped."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
        {message}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        {details}
      </p>
      <Link
        to="/"
        className="mt-8 text-sm font-medium text-foreground underline underline-offset-4"
      >
        Go back home
      </Link>
      {stack && (
        <pre className="mt-8 w-full overflow-x-auto p-4 text-left text-xs">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
}
