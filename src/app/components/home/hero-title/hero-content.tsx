"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GlitchedText } from "../../global/glitch/glitch";
import { useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { jetBrains } from "@/app/fonts/fonts";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Create a smoother scroll progress using `useSpring`
    const scrollSpring = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
    });

    // Smooth transitions for transformable styles
    const borderRadius = useTransform(scrollSpring, [0, 0.3], ["3rem", "1rem"]);
    const opacity = useTransform(scrollSpring, [0, 0.3], [1, 1]);
    const width = useTransform(scrollSpring, [0, 0.3], ["100%", "14rem"]);
    const height = useTransform(scrollSpring, [0, 0.3], ["100%", "4rem"]);
    const backgroundColor = useTransform(
        scrollSpring,
        [0, 0.3],
        [
            "radial-gradient(circle, rgba(255,255,255, 0.2) 0%, rgba(0,0,0,0) 150%)",
            "radial-gradient(circle, #c3ff3d 0%, rgba(9,9,11,0.8) 300%)",
        ]
    );
    const removeItem = useTransform(
        scrollSpring,
        [0.1, 0.25],
        ["flex", "none"]
    );
    const sectionHeight = useTransform(scrollSpring, [0, 0.3], ["100%", "40%"]);

    return (
        <motion.section
            className="relative flex items-start mt-3 justify-center"
            ref={ref}
            style={{
                height: sectionHeight,
            }}
        >
            {/* Background Blur Section */}
            <motion.div
                className="fixed z-0 max-w-[40rem] mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    backgroundImage: "url(/images/dark.jpg)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: opacity,
                    maxWidth: width,
                    maxHeight: height,
                    borderRadius: borderRadius,
                    filter: "blur(2px)",
                    display: removeItem,
                }}
            ></motion.div>

            {/* Foreground Section */}
            <motion.div
                className="fixed flex items-center justify-center flex-col z-10"
                style={{
                    width: "calc(100% - 2rem)",
                    height: "calc(100% - 2rem)",
                    borderRadius: borderRadius,
                    background: backgroundColor,
                    maxWidth: width,
                    maxHeight: height,
                }}
            >
                {/* Introduction Text */}
                <div className="flex-col">
                    <motion.h1
                        className="text-2xl font-bold -mb-3 justify-self-end"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        style={{
                            display: removeItem,
                        }}
                    >
                        <span className="text-[#c3ff3d]">Hi</span>, I&apos;m
                    </motion.h1>
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        style={{
                            display: removeItem,
                        }}
                    >
                        <GlitchedText
                            text="Alan Brim"
                            class="text-[4.3rem] font-extrabold"
                        />
                    </motion.div>

                    {/* Title Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 400 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 }}
                        style={{ display: removeItem }}
                        className={`${jetBrains.className} relative mb-2 bg-gradient-to-br from-gray-900 to-zinc-900 p-4 rounded-xl text-start max-w-[23.5rem] mr-auto border border-[#6663fd] border-opacity-20`}
                    >
                        <div className="absolute top-2 right-2"> {`*`} </div>
                        <h2 className="text-md md:text-lg font-bold text-pink-600">
                            Title ( ) {"{"} {""}
                            <span className="font-normal text-green-600">
                                return{" "}
                                <span className="text-textColor">{"("}</span>
                            </span>
                            <span className="text-md md:text-lg font-normal text-textColor">
                                <br />
                                <span className="underline underline-offset-4">
                                    Front-end Developer
                                </span>{" "}
                                with great, experienced in{" "}
                                <span className="underline underline-offset-4">
                                    UI/UX{" "}
                                </span>{" "}
                                Design {")"}
                                <span className="text-pink-600 font-bold">
                                    {"}"};
                                </span>
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    className="flex items-center justify-between w-fit gap-2 mx-auto py-2"
                    initial={{ opacity: 0, y: 120 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 }}
                >
                    <div className="bg-zinc-900 p-3 rounded-full">
                        <FiPhoneCall className="text-2xl" />
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-full">
                        <FaLinkedinIn className="text-2xl" />
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-full">
                        <VscGithubAlt className="text-2xl" />
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
