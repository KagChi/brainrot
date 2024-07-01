"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

interface WavyTextProps {
    word: string;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    delay?: number;
}
const WavyText = ({
    word,
    className,
    variant,
    duration = 0.5,
    delay = 0.05
}: WavyTextProps) => {
    const defaultVariants = {
        hidden: { y: 10 },
        visible: { y: -10 }
    };
    const combinedVariants = variant ?? defaultVariants;
    const characters = useMemo(() => word.split(""), [word]);
    return (
        <div className="flex space-x-2 overflow-hidden p-3">
            <AnimatePresence>
                {characters.map((char, i) => <motion.h1
                    key={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={combinedVariants}
                    transition={{
                        yoyo: Infinity,
                        duration,
                        delay: i * delay
                    }}
                    className={cn(
                        className,
                        "font-bold tracking-[-0.5rem]"
                    )}
                >
                    {char}
                </motion.h1>)}
            </AnimatePresence>
        </div>
    );
};

export default WavyText;
