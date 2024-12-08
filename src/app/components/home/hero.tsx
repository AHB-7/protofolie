"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlitchedText } from "../global/glitch/glitch";

export function Hero() {
    const sectionRef = useRef(null); // Reference to the section
    const { scrollYProgress } = useScroll({
        target: sectionRef, // Set the section as the scroll reference
        offset: ["start end", "end start"], // Adjust scroll range mapping
    });

    const dynamicHeight = useTransform(
        scrollYProgress,
        [0, 1],
        ["30rem", "20rem"]
    );
    const dynamicHeightBox = useTransform(
        scrollYProgress,
        [0, 1],
        ["60rem", "20rem"]
    );
    return (
        <section
            ref={sectionRef}
            className="fixed w-full h-[calc(100vh-4rem)] flex items-start justify-center overflow-hidden px-12"
        >
            <motion.div
                className="relative border flex flex-col gap-4 rounded-3xl py-12"
                style={{ height: dynamicHeightBox }}
            >
                <div className="absolute top-0 left-0 w-full h-full -z-10 rounded-3xl opacity-40">
                    <Image
                        src="/images/loading.gif"
                        alt="Hero Background"
                        fill
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div>
                <h1 className="text-4xl font-bold text-center z-10">
                    Hello, I&apos;m
                </h1>
                <GlitchedText
                    text="Alan Brim"
                    class="text-7xl text-center z-10"
                />
                <p className="text-center text-xl z-10 px-12">
                    I&apos;m a full-stack developer with a passion for building
                    beautiful and functional applications.
                </p>
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-screen flex items-end">
                <motion.div
                    style={{ height: dynamicHeight }}
                    className="relative w-full z-20 brightness-75 saturate-0"
                >
                    <Image
                        src="/images/profile-gj.png"
                        alt="Hero"
                        priority
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
