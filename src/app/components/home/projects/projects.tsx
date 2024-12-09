"use client";
import { motion } from "framer-motion";
export function Projects() {
    return (
        <section className="relative h-screen px-4 flex items-start justify-start pt-36 flex-col">
            <motion.h2 className="z-10 text-5xl font-bold py-12 w-full max-w-[49rem] mx-auto">
                Projects
            </motion.h2>
            <motion.p className="z-10 text-lg pb-12 text-justify tracking-wide w-full max-w-[49rem] mx-auto">
                <a href="" className="text-blue-500">
                    Project 1
                </a>
            </motion.p>
        </section>
    );
}
