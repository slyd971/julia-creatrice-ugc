import { brand, contact, hero, socialLinks } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.name,
    jobTitle: brand.tagline,
    description: hero.description,
    image: `${siteUrl}${contact.photo.src}`,
    url: siteUrl,
    sameAs: [socialLinks.instagram.url, socialLinks.tiktok.url],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
