import { useEffect } from "react";

import { toAbsoluteUrl } from "utils/seo";

function upsertMeta(attr, key, content){
    if(!content){
        return;
    }

    let element = document.head.querySelector(`meta[${attr}="${key}"]`);

    if(!element){
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
}

function upsertCanonical(url){
    let element = document.head.querySelector('link[rel="canonical"]');

    if(!element){
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
    }

    element.setAttribute("href", url);
}

function clearStructuredData(){
    const scripts = document.head.querySelectorAll('script[data-seo-jsonld="true"]');
    scripts.forEach((script) => script.remove());
}

function appendStructuredData(entry){
    if(!entry){
        return;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "true");
    script.textContent = JSON.stringify(entry);
    document.head.appendChild(script);
}

export default function SEO({
    title,
    description,
    path = "/",
    image = "/images/gpt/hero-therapy.png",
    type = "website",
    robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    structuredData = []
}){
    useEffect(() => {
        const canonicalUrl = toAbsoluteUrl(path);
        const imageUrl = toAbsoluteUrl(image);
        const safeDescription = description || "Espaco PsicoEducar";
        const safeTitle = title || "Espaco PsicoEducar";

        document.title = safeTitle;
        upsertCanonical(canonicalUrl);

        upsertMeta("name", "description", safeDescription);
        upsertMeta("name", "robots", robots);

        upsertMeta("property", "og:locale", "pt_BR");
        upsertMeta("property", "og:site_name", "Espaco PsicoEducar");
        upsertMeta("property", "og:type", type);
        upsertMeta("property", "og:title", safeTitle);
        upsertMeta("property", "og:description", safeDescription);
        upsertMeta("property", "og:url", canonicalUrl);
        upsertMeta("property", "og:image", imageUrl);
        upsertMeta("property", "og:image:alt", "Espaco PsicoEducar");

        upsertMeta("name", "twitter:card", "summary_large_image");
        upsertMeta("name", "twitter:title", safeTitle);
        upsertMeta("name", "twitter:description", safeDescription);
        upsertMeta("name", "twitter:image", imageUrl);

        clearStructuredData();

        const normalizedStructuredData = Array.isArray(structuredData)
            ? structuredData
            : [structuredData];

        normalizedStructuredData.forEach((entry) => appendStructuredData(entry));
    }, [description, image, path, robots, structuredData, title, type]);

    return null;
}
