"use server";

import { load } from "cheerio";

export interface RoboGuruResponse {
    props: {
        pageProps: {
            question: {
                contentDefinition: string;
                answers: string[];
                contents: string;
                options: string[];
                createdByUser: {
                    photoUrl: string;
                    username: string;
                    role: string;
                };
            };
        };
    };
}

export async function getRoboguruMeta(url: string | null): Promise<RoboGuruResponse | null> {
    if (url) {
        const response = await fetch(url);
        if (response.ok) {
            const $ = load(await response.text());
            return JSON.parse($("#__NEXT_DATA__").text());
        }
    }

    return null;
}
