import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  siteName?: string;
  keywords?: string;
  robots?: string;
  ogType?: "website" | "article";
  imagePath?: string;
  imageAlt?: string;
  twitterSite?: string;
  twitterCreator?: string;
  locale?: string;
  noIndex?: boolean;
  schema?: object | object[];
};

const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  const existed = Boolean(tag);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  return { tag, existed };
};

export const Seo = ({
  title,
  description,
  path,
  siteName = "NexMindSystems",
  keywords,
  robots,
  ogType = "website",
  imagePath = "/nexmindsystems.png",
  imageAlt,
  twitterSite = "@NexMindSystems",
  twitterCreator = "@NexMindSystems",
  locale = "en_US",
  noIndex = false,
  schema,
}: SeoProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = `${window.location.origin}${normalizedPath}`;
    const imageUrl = imagePath.startsWith("http") ? imagePath : `${window.location.origin}${imagePath}`;
    const resolvedImageAlt = imageAlt ?? `${siteName} - ${title}`;

    const restoreActions: Array<() => void> = [];

    const setMetaByName = (name: string, content: string) => {
      const selector = `meta[name="${name}"]`;
      const { tag, existed } = ensureMeta(selector, () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", name);
        return meta;
      });
      const previous = tag.getAttribute("content");
      tag.setAttribute("content", content);
      restoreActions.push(() => {
        if (!existed) {
          tag.remove();
          return;
        }
        if (previous === null) {
          tag.removeAttribute("content");
        } else {
          tag.setAttribute("content", previous);
        }
      });
    };

    const setMetaByProperty = (property: string, content: string) => {
      const selector = `meta[property="${property}"]`;
      const { tag, existed } = ensureMeta(selector, () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        return meta;
      });
      const previous = tag.getAttribute("content");
      tag.setAttribute("content", content);
      restoreActions.push(() => {
        if (!existed) {
          tag.remove();
          return;
        }
        if (previous === null) {
          tag.removeAttribute("content");
        } else {
          tag.setAttribute("content", previous);
        }
      });
    };

    document.title = title;

    setMetaByName("application-name", siteName);
    setMetaByName("author", siteName);

    setMetaByName("description", description);
    setMetaByName("robots", noIndex ? "noindex, nofollow" : robots ?? "index, follow");
    if (keywords) setMetaByName("keywords", keywords);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:type", ogType);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:site_name", siteName);
    setMetaByProperty("og:locale", locale);
    setMetaByProperty("og:image", imageUrl);
    setMetaByProperty("og:image:alt", resolvedImageAlt);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:site", twitterSite);
    setMetaByName("twitter:creator", twitterCreator);
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", imageUrl);
    setMetaByName("twitter:image:alt", resolvedImageAlt);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonicalExisted = Boolean(canonical);
    const previousCanonicalHref = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
    restoreActions.push(() => {
      if (!canonical) return;
      if (!canonicalExisted) {
        canonical.remove();
        return;
      }
      if (previousCanonicalHref === null) {
        canonical.removeAttribute("href");
      } else {
        canonical.setAttribute("href", previousCanonicalHref);
      }
    });

    let schemaScript: HTMLScriptElement | null = null;
    if (schema) {
      schemaScript = document.createElement("script");
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.text = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
      restoreActions.push(() => {
        schemaScript?.remove();
      });
    }

    return () => {
      document.title = previousTitle;
      restoreActions.reverse().forEach((restore) => restore());
    };
  }, [description, imageAlt, imagePath, keywords, locale, noIndex, ogType, path, robots, schema, siteName, title, twitterCreator, twitterSite]);

  return null;
};
