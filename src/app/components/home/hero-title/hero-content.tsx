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
        ["3rem", "1rem"]
    );
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 1]);
    const width = useTransform(scrollYProgress, [0, 0.8], ["100%", "24rem"]);
    const height = useTransform(scrollYProgress, [0, 0.8], ["100%", "7rem"]);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.8],
        [
            "radial-gradient(circle, rgba(255,255,255, 0.2) 0%, rgba(0,0,0,0) 150%)",
            "radial-gradient(circle, rgba(9,9,11,1) 30%, rgba(9,9,11,0.8) 1500%)",
        ]
    );
    const removeItem = useTransform(
        scrollYProgress,
        [0.1, 0.69],
        ["flex", "none"]
    );

    const showNewContent = useTransform(scrollYProgress, [0.78, 0.8], [0, 1]);

    const toLeftOne = useTransform(
        scrollYProgress,
        [0.83, 0.9],
        ["-200%", "0%"]
    );
    const toLeftTow = useTransform(
        scrollYProgress,
        [0.83, 0.9],
        ["100%", "0%"]
    );
    const toTopOne = useTransform(scrollYProgress, [0.83, 0.9], ["360%", "0%"]);
    return (
        <section
            className="relative h-screen flex items-center mt-3 justify-center"
            ref={ref}
        >
            <motion.div
                className="fixed z-0"
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    backgroundImage: "url(/images/dark.jpg)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "center",
                    backgroundSize: "cover",
                    opacity: opacity,
                    maxWidth: width,
                    maxHeight: height,
                    borderRadius: borderRadius,
                    filter: "blur(5px)",
                }}
            ></motion.div>
            <motion.div
                className="fixed flex items-center justify-center flex-col"
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    borderRadius: borderRadius,
                    background: backgroundColor,
                    opacity: opacity,
                    maxWidth: width,
                    maxHeight: height,
                }}
            >
                <div className=" flex items-center flex-col justify-center mb-20">
                    <motion.h1
                        className="text-2xl font-bold -mb-3"
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
                            class="text-[4rem] font-extrabold -mb-2"
                        />
                    </motion.div>
                    <motion.p
                        className="flex items-start justify-start gap-1 flex-col text-md mt-2 text-center bg-zinc-950 rounded-xl px-4 py-2
                        bg-opacity-80"
                        style={{
                            display: removeItem,
                        }}
                    >
                        <span>
                            A<span> </span>
                            <span className=" text-pink-600">
                                front-end developer
                            </span>{" "}
                            with a passion for
                        </span>
                        <span>
                            <span className="text-green-600">UI</span> and
                            <span className="text-green-600"> UX</span> designs.
                        </span>
                    </motion.p>
                </div>
                <motion.div
                    className="text-center absolute flex items-center justify-center "
                    style={{
                        opacity: showNewContent,
                    }}
                >
                    <motion.p
                        className="flex items-start justify-start gap-1 flex-col text-md text-center bg-zinc-950 rounded-xl px-4 py-2
                        bg-opacity-80"
                    >
                        <span className="text-start text-lg">
                            Experienced in creating
                            <span className=" text-pink-600">
                                <span> </span>responsive, dynamic websites
                            </span>
                            <span>
                                <span> </span>
                                using modern
                                <span className="text-green-600">
                                    <span> </span>
                                    frameworks and technologies
                                </span>
                            </span>
                        </span>
                    </motion.p>
                </motion.div>
            </motion.div>
            <motion.div
                className="fixed top-0 w-full h-full -z-10"
                style={{
                    opacity: showNewContent,
                }}
            >
                <motion.p
                    className="absolute top-[20%] left-[20%] max-w-[20rem] bg-zinc-950 flex items-start justify-start gap-1 flex-col text-md text-center rounded-xl px-4 py-2"
                    style={{
                        x: toLeftOne,
                    }}
                >
                    <span className="text-start text-md text-nowrap">
                        <span className="text-pink-600">Design</span>
                    </span>
                </motion.p>
                <motion.p
                    className="absolute top-[30%] left-[40%] max-w-[20rem] bg-zinc-950 flex items-start justify-start gap-1 flex-col text-md text-center rounded-xl px-4 py-2 -z-0"
                    style={{
                        y: toTopOne,
                    }}
                >
                    <span className="text-start text-md text-nowrap">
                        <span className="text-green-600">front-end</span>
                    </span>
                </motion.p>
                <motion.p
                    className="absolute top-[60%] left-[50%] max-w-[20rem] bg-zinc-950 flex items-start justify-start gap-1 flex-col text-md text-center rounded-xl px-4 py-2"
                    style={{
                        x: toLeftTow,
                    }}
                >
                    <span className="text-start text-md text-nowrap">
                        <span className="text-green-600">
                            ContentMangegrent
                        </span>
                    </span>
                </motion.p>
                <motion.p
                    className="absolute top-[70%] left-[10%] max-w-[20rem] bg-zinc-950 flex items-start justify-start gap-1 flex-col text-md text-center rounded-xl px-4 py-2"
                    style={{
                        x: toLeftOne,
                    }}
                >
                    <span className="text-start text-md text-nowrap">
                        <span className="text-blue-500">CMS</span>
                    </span>
                </motion.p>
                <motion.p
                    className="absolute top-[10%] left-[60%] max-w-[20rem] bg-zinc-950 flex items-start justify-start gap-1 flex-col text-md text-center rounded-xl px-4 py-2"
                    style={{
                        x: toLeftTow,
                    }}
                >
                    <span className="text-start text-md text-nowrap">
                        <span className="text-blue-500">usersExperience</span>
                    </span>
                </motion.p>
            </motion.div>
        </section>
    );
}
