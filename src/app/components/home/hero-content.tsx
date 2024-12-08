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
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

    return (
        <section ref={ref} className="relative overflow-hidden h-screen">
            <motion.div
                className="relative border flex flex-col gap-4 rounded-3xl py-12 w-full h-[calc(100vh-14rem)] z-10"
                style={{ scale }}
            >
                <div className="absolute top-0 left-0 w-full h-full -z-10 rounded-3xl opacity-40 ">
                    <Image
                        src="/images/loading.gif"
                        alt="Hero Background"
                        fill
                        className="object-cover rounded-3xl"
                    />
                </div>
                <motion.h1 className="text-4xl font-bold text-center z-10">
                    Hello, I&apos;m
                </motion.h1>
                <GlitchedText
                    text="Alan Brim"
                    class="text-6xl md:text-8xl text-center z-10"
                />
                <p className="text-center text-xl z-10 px-2">
                    I&apos;m a Front-end Developer Loves new technologies and
                    web development.
                </p>
            </motion.div>
        </section>
    );
}
