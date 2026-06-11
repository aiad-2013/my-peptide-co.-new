import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/context/CartContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "My Peptide Co. - Precision Biotech Solutions" },
      {
        name: "description",
        content:
          "Pioneering peptide synthesis for advanced research and metabolic optimization. Lab-tested, third-party verified.",
      },
      { name: "author", content: "My Peptide Co." },
      { property: "og:title", content: "My Peptide Co. - Precision Biotech Solutions" },
      {
        property: "og:description",
        content:
          "Pioneering peptide synthesis for advanced research and metabolic optimization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </QueryClientProvider>
  );
}

function SiteNav() {
  return (
    <nav className="flex items-center justify-between border-b border-brand-navy/5 px-8 py-6">
      <Link
        to="/"
        className="text-sm font-semibold uppercase tracking-tighter text-brand-navy"
      >
        My Peptide Co.
      </Link>
      <div className="hidden gap-10 text-[11px] uppercase tracking-widest text-brand-navy md:flex">
        <Link to="/" className="transition-opacity hover:opacity-60">
          Research
        </Link>
        <Link to="/" className="transition-opacity hover:opacity-60">
          Catalog
        </Link>
        <Link to="/" className="transition-opacity hover:opacity-60">
          Science
        </Link>
        <Link
          to="/about"
          activeProps={{ className: "opacity-60" }}
          className="transition-opacity hover:opacity-60"
        >
          About
        </Link>
      </div>
      <button className="rounded-full bg-brand-navy px-5 py-2 text-[10px] uppercase tracking-widest text-white transition-opacity hover:opacity-90">
        Shop Portal
      </button>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-brand-navy px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 grid gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="mb-6 text-xl font-semibold tracking-tighter">
              MY PEPTIDE CO.
            </div>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-white/50">
              Providing the highest purity peptides for researchers and innovators globally. All products are for research use only.
            </p>
          </div>
          <div>
            <h5 className="mb-6 text-[10px] uppercase tracking-widest text-white/30">
              Discovery
            </h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-mint">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-mint">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-brand-mint">Lab Testing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="mb-6 text-[10px] uppercase tracking-widest text-white/30">
              Company
            </h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-brand-mint">Our Story</Link></li>
              <li><a href="#" className="hover:text-brand-mint">Compliance</a></li>
              <li><a href="#" className="hover:text-brand-mint">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 text-[10px] uppercase tracking-widest text-white/20 md:flex-row">
          <div>&copy; 2026 My Peptide Co. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
