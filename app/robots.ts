import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://www.kougioumoutzakisbakery.gr/sitemap.xml",
    host: "https://www.kougioumoutzakisbakery.gr",
  };
}
