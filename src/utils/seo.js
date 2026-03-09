const DEFAULT_SITE_URL = "https://espacopsicoeducar.com";

export function getSiteUrl(){
    const configured = process.env.REACT_APP_SITE_URL;

    if(!configured){
        return DEFAULT_SITE_URL;
    }

    return configured.replace(/\/+$/, "");
}

export function toAbsoluteUrl(path = "/"){
    if(!path){
        return `${getSiteUrl()}/`;
    }

    if(/^https?:\/\//i.test(path)){
        return path;
    }

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${getSiteUrl()}${normalizedPath}`;
}

