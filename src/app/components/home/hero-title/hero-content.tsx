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

    // Animations
    const borderRadius = useTransform(
        scrollYProgress,
        [0, 1],
        ["3rem", "8rem"]
    );
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 1]);
    const width = useTransform(scrollYProgress, [0, 0.8], ["100%", "7rem"]);
    const height = useTransform(scrollYProgress, [0, 0.8], ["100%", "7rem"]);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 1],
        ["#000000", "#1A1A1D"]
    );
    const removeItem = useTransform(
        scrollYProgress,
        [0.1, 0.5],
        ["flex", "none"]
    );

    // Content Visibility
    const showNewContent = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

    return (
        <section
            className="relative h-screen flex items-center mt-3 justify-center"
            ref={ref}
        >
            {/* Initial Animated Center Block */}
            <motion.div
                className="fixed flex items-center justify-center flex-col border border-white border-opacity-20"
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    borderRadius: borderRadius,
                    opacity: opacity,
                    background: backgroundColor,
                    maxWidth: width,
                    maxHeight: height,
                }}
            >
                <div className="">
                    <motion.h1
                        className="text-4xl font-bold mb-4"
                        style={{
                            display: removeItem,
                        }}
                    >
                        Hi, I&apos;m
                    </motion.h1>
                    <motion.div
                        style={{
                            display: removeItem,
                        }}
                    >
                        <GlitchedText
                            text="Alan Brim"
                            class="text-6xl font-extrabold"
                        />
                    </motion.div>
                    <motion.p
                        className="text-lg mt-2"
                        style={{
                            display: removeItem,
                        }}
                    >
                        A front-end developer with a passion for creating
                        seamless UI and UX designs.
                    </motion.p>
                </div>
                <motion.div
                    className="text-center"
                    style={{
                        opacity: showNewContent,
                    }}
                >
                    <h2 className="text-4xl font-bold">Skills</h2>
                </motion.div>
            </motion.div>
        </section>
    );
}
