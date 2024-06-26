import type { Metadata } from "next/types";

export const baseUrl = "https://niftables-nine.vercel.app";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      type: "website",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      images: [
        {
          alt: "banner",
          width: "1200",
          height: "630",
          url: "/banner.webp",
        },
      ],
      siteName: "niftables",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [
        {
          alt: "banner",
          width: "1200",
          height: "630",
          url: "/banner.webp",
        },
      ],
      ...override.twitter,
    },
    metadataBase: new URL(baseUrl),
  };
}