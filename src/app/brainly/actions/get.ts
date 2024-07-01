"use server";

import { generateBrainlyCookie } from "@/lib/utils";
import { load } from "cheerio";

export interface BrainlyResult {
    answer: string;
    question: string;
}

export async function getBrainlyMeta(url: string | null): Promise<BrainlyResult | null> {
    if (url) {
        const response = await fetch(url, {
            headers: {
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "if-modified-since": "Thu, 14 Dec 2023 02:44:48 GMT",
                priority: "u=0, i",
                "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "cross-site",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                cookie: `${generateBrainlyCookie()}`,
                Referer: "https://www.bing.com/",
                "Referrer-Policy": "origin-when-cross-origin"
            },
            method: "GET"
        });

        if (response.ok && response.status !== 304) {
            const text = await response.text();
            const $ = load(text);

            console.log(text);

            return { answer: $(".js-answer-content").text(), question: $(".QuestionBoxContent-module__primary--F++oO").text() };
        }
    }

    return null;
}
