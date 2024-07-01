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
            questionSchema: AnswerSchema;
        };
    };
}

export interface RoboGuruRawResponse {
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
            questionSchema: string;
        };
    };
}

interface AnswerSchema {
    mainEntity: {
        acceptedAnswer: {
            text: string;
            image: string[];
        };
    };
}

export async function getRoboguruMeta(url: string | null): Promise<RoboGuruResponse | null> {
    if (url) {
        const response = await fetch(url);
        if (response.ok) {
            const $ = load(await response.text());
            const data = JSON.parse($("#__NEXT_DATA__").text()) as RoboGuruResponse;

            return data;
        }
    }

    return null;
}
