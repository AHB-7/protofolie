"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlitchedText } from "../../global/glitch/glitch";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.8],
        ["3rem", "50rem"]
    );
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const backgroundScroll = useTransform(
        scrollYProgress,
        [0, 1],
        ["#000", "#fff"]
    );
    const scaleDown = useTransform(scrollYProgress, [0, 0.7], [1, 0.09]);
    // const width = useTransform(scrollYProgress, [0, 0.8], ["100%", "5rem"]);
    return (
        <motion.section
            ref={ref}
            className="relative overflow-hidden h-screen flex justify-center"
        >
            <motion.div
                className="fixed border flex flex-col gap-4 py-12 mx-auto overflow-hidden w-[calc(100%-4rem)] h-[calc(100vh-8rem)]"
                style={{
                    borderRadius: borderRadius,
                    backgroundColor: backgroundScroll,
                    backgroundImage: "url(/images/loading.gif)",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "screen",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    scale: scaleDown,
                }}
            >
                <motion.h1
                    className="text-4xl font-bold text-center z-20 pt-8 md:pt-20"
                    style={{ opacity }}
                >
                    Hello, I&apos;m
                </motion.h1>
                <GlitchedText
                    text="Alan Brim"
                    class="text-6xl md:text-8xl text-center z-20 py-4"
                />
                <motion.p
                    className="text-center text-2xl px-2 z-20 tracking-widest uppercase leading-8"
                    style={{ opacity }}
                >
                    I&apos;m a Front-end Developer Loves new technologies and
                    web development.
                </motion.p>
            </motion.div>
        </motion.section>
    );
}
