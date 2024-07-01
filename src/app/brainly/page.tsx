"use client";

import SparklesText from "@/components/magicui/sparkles-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconChevronLeft, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import { getBrainlyMeta, BrainlyResult } from "./actions/get";
import { useState } from "react";
import Link from "next/link";

export default function RoboGuru() {
    const [result, setResult] = useState<BrainlyResult | null | undefined>(null);

    return (
        <main className="container mb-12 flex max-w-4xl flex-col gap-y-8 py-12">
            <Image className="h-80 w-full rounded-md object-cover" src={"/assets/images/Brainly.jpeg"} width={1920} height={720} alt="Header" />
            <div className="flex flex-col justify-center gap-4 md:flex-row">
                <Button asChild size={"icon"} className="size-14 rounded-full px-4">
                    <Link href={"/"}>
                        <IconChevronLeft />
                    </Link>
                </Button>
                <div className="flex flex-col gap-4">
                    <SparklesText text="Brainly" />
                    <WordPullUp
                        className="-mt-1 text-lg text-gray-300"
                        words="Brainly adalah tempat berbagi ilmu ratusan juta siswa dan pakar edukasi,
                                belajar bersama untuk menyelesaikan soal-soal yang paling rumit sekalipun"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Cari Jawaban</h2>

                <form action={form => {
                    const url = form.get("url")?.toString() ?? null;
                    if (url) {
                        void getBrainlyMeta(url)
                            .then(x => {
                                setResult(x);
                            });
                    }
                }} className="flex flex-col gap-4">
                    <Input required type="text" name="url" placeholder="Masukan link brainly" />

                    <Button type="submit" className="ml-auto w-fit gap-4 font-bold">
                        <IconSearch size={18} /> Cari
                    </Button>
                </form>
            </div>

            {
                result !== undefined && result !== null && <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Soal:</p>
                        <div className="break-words" dangerouslySetInnerHTML={{ __html: result.question }}/>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Jawaban:</p>

                        <div className="group relative ml-1 mt-4">
                            <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-dashed border-orange-200 opacity-100 transition-transform" />
                            <div className="-translate-x-2 -translate-y-2 rounded-lg bg-white px-4 py-2 text-black">
                                <p dangerouslySetInnerHTML={{ __html: result.question }}/>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </main>
    );
}
