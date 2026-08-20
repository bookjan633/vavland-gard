import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vavlandgard.se";

  return [
    {
      url: base,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/ovre-bostadshus`,
      priority: 0.9,
    },
    {
      url: `${base}/nedre-bostadshus`,
      priority: 0.9,
    },
    {
      url: `${base}/maskinhall`,
      priority: 0.9,
    },
    {
      url: `${base}/bilgarage`,
      priority: 0.8,
    },
    {
      url: `${base}/mark`,
      priority: 0.9,
    },
    {
      url: `${base}/forradsbyggnad`,
      priority: 0.8,
    },
    {
      url: `${base}/ovriga-byggnader`,
      priority: 0.8,
    },
    {
      url: `${base}/saghus`,
      priority: 0.8,
    },
  ];
}
När sidan deployats kommer denna automatiskt att finnas på:
https://www.vavlandgard.se/sitemap.xml
3. Skapa app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.vavlandgard.se/sitemap.xml",
  };
}