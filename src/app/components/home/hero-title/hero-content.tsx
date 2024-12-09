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

    const startValue = window.innerHeight - 14 * 12;
    const endValue = 5 * 16;
    const height = useTransform(
        scrollYProgress,
        [0, 1],
        [startValue, endValue]
    );
    const width = useTransform(
        scrollYProgress,
        [0, 0.8],
        [startValue, endValue]
    );
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const backgroundScroll = useTransform(
        scrollYProgress,
        [0, 1],
        ["#000", "#fff"]
    );

    // const showBtn = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden h-screen flex justify-center"
        >
            <motion.div
                className="fixed border flex flex-col gap-4 py-12 w-[calc(100%-2rem)]  max-w-[100rem] mx-auto overflow-hidden"
                style={{
                    borderRadius: borderRadius,
                    backgroundColor: backgroundScroll,
                    width: width,
                    height: height,
                    backgroundImage: "url(/images/loading.gif)",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "screen",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                <p className="text-center text-2xl px-2 z-20 tracking-widest uppercase"></p>
            </motion.div>
            {/* <motion.div
                className="fixed border flex flex-col gap-4 py-12 w-[calc(100%-2rem)]  max-w-[100rem] mx-auto z-10"
                style={{
                    borderRadius: borderRadius,
                    backgroundColor: backgroundScroll,
                    opacity: showBtn,
                    width: width,
                    height: height,
                }}
            ></motion.div> */}
        </section>
    );
}
