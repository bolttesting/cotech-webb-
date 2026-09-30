import type { NextConfig } from "next";
import { LEGACY_PAGES } from "./src/lib/legacy-pages";

const legacySlugs = Object.keys(LEGACY_PAGES);

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...legacySlugs.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
      { source: "/blog.html", destination: "/blog", permanent: false },
      { source: "/login.html", destination: "/login", permanent: true },
      { source: "/signup.html", destination: "/login", permanent: true },
      { source: "/team", destination: "/about", permanent: false },
      { source: "/team-details", destination: "/about", permanent: false },
    ];
  },
};

export default nextConfig;
