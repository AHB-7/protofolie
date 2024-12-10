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
        [
            "radial-gradient(circle, rgba(0,0,0,0) 0%, #001A6E 150%)",
            "radial-gradient(circle, rgba(137,6,165,1) 30%, rgba(209,0,255,1) 200%)",
        ]
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
            <motion.div
                className="fixed z-0 blur-sm"
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    backgroundImage: "url(/images/way.gif)",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: opacity,
                    maxWidth: width,
                    maxHeight: height,
                    borderRadius: borderRadius,
                }}
            ></motion.div>
            <motion.div
                className="fixed flex items-center justify-center flex-col border border-white border-opacity-20"
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    borderRadius: borderRadius,
                    background: backgroundColor,
                    opacity: opacity,
                    maxWidth: width,
                    maxHeight: height,
                    objectFit: "cover",
                }}
            >
                <div className=" flex items-center flex-col justify-center mb-12">
                    <motion.h1
                        className="text-4xl font-bold text-center  mx-auto "
                        style={{
                            display: removeItem,
                        }}
                    >
                        Hi, I&apos;m
                    </motion.h1>
                    <motion.div
                        className="mb-4"
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
                        className="text-lg mt-2 text-center"
                        style={{
                            display: removeItem,
                        }}
                    >
                        A front-end developer with a passion for creating
                        seamless UI and UX designs.
                    </motion.p>
                </div>
                <motion.div
                    className="text-center absolute flex items-center justify-center"
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
