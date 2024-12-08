"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlitchedText } from "../global/glitch/glitch";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden h-screen flex justify-center"
        >
            <motion.div
                className="fixed border flex flex-col gap-4 rounded-3xl py-12 w-[calc(100%-4rem)] h-[calc(100vh-14rem)]"
                style={{ scale }}
            >
                <div className="absolute top-0 left-0 w-full h-full rounded-3xl opacity-40 z-10">
                    <Image
                        src="/images/loading.gif"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover rounded-3xl"
                    />
                </div>
                <motion.h1 className="text-4xl font-bold text-center z-20">
                    Hello, I&apos;m
                </motion.h1>
                <GlitchedText
                    text="Alan Brim"
                    class="text-6xl md:text-8xl text-center z-20"
                />
                <p className="text-center text-xl px-2 z-20 tracking-widest">
                    I&apos;m a Front-end Developer Loves new technologies and
                    web development.
                </p>
            </motion.div>
        </section>
    );
}
