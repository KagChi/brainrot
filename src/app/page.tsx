import SparklesText from "@/components/magicui/sparkles-text";
import WordPullUp from "@/components/magicui/word-pull-up";
import Image from "next/image";
import WavyText from "../components/magicui/wavy-text";
import { Card } from "@/components/fleet/card";

export default function Home() {
    return (
        <main className="container mb-12 flex max-w-4xl flex-col gap-y-20 py-12">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="md:w-2/3">
                    <SparklesText text="BrainRot" />
                    <WordPullUp
                        className="-mt-2 text-lg text-gray-300"
                        words="platform revolusioner yang dirancang untuk membantu Anda menemukan jawaban atas segala pertanyaan dengan cepat dan efisien!"
                    />
                </div>

                <Image className="w-full rounded-lg object-cover md:size-48" alt="Logo Header" src={"/assets/images/Logo.jpeg"} width={512} height={512} />
            </div>

            <div className="flex flex-col gap-4">
                <WavyText className="text-3xl" word="Available Platforms" />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card
                        name="RoboGuru"
                        description="Bantu Kamu Jawab Soal dengan Tepat, Cepat, dan Gratis!
                            Ayo, dapatkan jawaban yang terverifikasi Master Teacher untuk soalmu!"
                        image="/assets/images/Roboguru.jpg"
                    />

                    <Card
                        name="Brainly"
                        description="Brainly adalah tempat berbagi ilmu ratusan juta siswa dan pakar edukasi,
                            belajar bersama untuk menyelesaikan soal-soal yang paling rumit sekalipun"
                        image="/assets/images/Brainly.jpeg"
                    />
                </div>
            </div>
        </main>
    );
}
