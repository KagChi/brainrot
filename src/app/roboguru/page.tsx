"use client";

import SparklesText from "@/components/magicui/sparkles-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import { getRoboguruMeta, RoboGuruResponse } from "./actions/get";
import { useState } from "react";

export default function RoboGuru() {
    const [result, setResult] = useState<RoboGuruResponse | null | undefined>(null);

    return (
        <main className="container mb-12 flex max-w-4xl flex-col gap-y-8 py-12">
            <Image className="h-80 w-full rounded-md object-cover" src={"/assets/images/Roboguru.jpg"} width={1920} height={720} alt="Header" />
            <div className="flex flex-col gap-4">
                <SparklesText text="Roboguru" />
                <WordPullUp
                    className="-mt-1 text-lg text-gray-300"
                    words="Bantu Kamu Jawab Soal dengan Tepat, Cepat, dan Gratis!
                            Ayo, dapatkan jawaban yang terverifikasi Master Teacher untuk soalmu"
                />
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Cari Jawaban</h2>

                <form action={form => {
                    void getRoboguruMeta(form.get("url")?.toString() ?? null)
                        .then(x => {
                            console.log(x);
                            setResult(x);
                        });
                }} className="flex flex-col gap-4">
                    <Input required type="text" name="url" placeholder="Masukan link roboguru" />

                    <Button type="submit" className="ml-auto w-fit gap-4 font-bold">
                        <IconSearch size={18} /> Cari
                    </Button>
                </form>
            </div>

            {
                result !== undefined && result !== null && <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold">Jawaban Ditemukan!</h2>

                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Soal:</p>
                        <p dangerouslySetInnerHTML={{ __html: result.props.pageProps.question.contents }}/>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Jawaban:</p>

                        <div>
                            <p dangerouslySetInnerHTML={{ __html: result.props.pageProps.question.contentDefinition }}/>
                            {result.props.pageProps.question.answers.map((x, i) => <p key={i} dangerouslySetInnerHTML={{ __html: x }}/>)}
                        </div>
                    </div>
                </div>
            }
        </main>
    );
}
