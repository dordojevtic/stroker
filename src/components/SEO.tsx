import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEO = ({
  title = "Šlep Služba Stroker 24h | Pomoć na Putu Srbija | Šlepanje Vozila",
  description = "Šlep služba Stroker 24/7 - brza pomoć na putu u celoj Srbiji. Šlepanje vozila do 3.5t, izvlačenje, startovanje, zamena gume. Dostupni 24h. ☎ +381 62 274 049",
  keywords = "šlep služba, pomoć na putu, šlepanje vozila, šlep Beograd, šlep Srbija, 24h šlep, izvlačenje vozila",
  canonicalUrl = "https://slepsluzbastroker.rs/",
  ogImage = "/placeholder.svg",
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", ogImage, true);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEO;
