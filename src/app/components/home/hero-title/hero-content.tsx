"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GlitchedText } from "../../global/glitch/glitch";
import { useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

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
    const width = useTransform(scrollYProgress, [0, 0.8], ["100%", "14rem"]);
    const height = useTransform(scrollYProgress, [0, 0.8], ["100%", "4rem"]);
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
        [0.1, 0.6],
        ["flex", "none"]
    );

    return (
        <section
            className="relative h-screen flex items-start mt-3 justify-center"
            ref={ref}
        >
            <motion.div
                className="fixed z-0  max-w-[40rem] mx-auto"
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
                    display: removeItem,
                }}
            ></motion.div>
            <motion.div
                className="fixed flex items-center justify-center flex-col"
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    borderRadius: borderRadius,
                    background: backgroundColor,
                    // opacity: opacity,
                    maxWidth: width,
                    maxHeight: height,
                }}
            >
                <div className=" flex items-center flex-col justify-center ">
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
                                Front-end developer
                            </span>{" "}
                            passionate
                        </span>
                        <span>
                            <span className="text-green-600">UI</span> and
                            <span className="text-green-600"> UX</span> designs.
                        </span>
                    </motion.p>
                </div>
                <motion.div
                    className="
                flex items-center justify-between w-fit gap-2 mx-auto py-4"
                >
                    <div className=" bg-zinc-900 p-3 rounded-full">
                        <FiPhoneCall className="text-2xl" />
                    </div>
                    <div className=" bg-zinc-900 p-3 rounded-full">
                        <FaLinkedinIn className="text-2xl" />
                    </div>
                    <div className=" bg-zinc-900 p-3 rounded-full">
                        <VscGithubAlt className="text-2xl" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
