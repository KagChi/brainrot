import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateBrainlyCookie() {
    const chars =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
			"abcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";

    for (let i = 0; i < 80; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return (
        `Zadanepl_cookie[Token][Guest]=${
            token
        };path=/;max-age=${
            2 * 365 * 24 * 3600}`
    );
}
