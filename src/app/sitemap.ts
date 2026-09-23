import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "marianaapapico.com.br/",
      lastModified: "2026-09-23T15:55:04.201Z",
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
};

export default sitemap;
