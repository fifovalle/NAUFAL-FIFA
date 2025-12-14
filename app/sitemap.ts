import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://naufal-fifa.is-a.dev/",
      lastModified: new Date(),
    },
  ];
}
