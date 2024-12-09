"use client";
import { motion } from "framer-motion";

export function Skills() {
    return (
        <section className="relative h-screen px-4 flex items-start justify-start pt-36 flex-col">
            <motion.h2 className="z-10 text-5xl font-bold py-12 w-full max-w-[49rem] mx-auto">
                Skills
            </motion.h2>
            <motion.p className="z-10 text-lg pb-12 text-justify tracking-wide w-full max-w-[49rem] mx-auto">
                Programming Languages & Frameworks: JavaScript (JS), TypeScript
                (TS), React, Next.js, HTML5, CSS3, SCSS, Bootstrap, Tailwind,
                Styled-Components
            </motion.p>{" "}
            <motion.p className="z-10 text-lg pb-12 text-justify tracking-wide w-full max-w-[49rem] mx-auto">
                Design & Prototyping: Figma, Adobe XD, Framer Motion
            </motion.p>{" "}
            <motion.p className="z-10 text-lg pb-12 text-justify tracking-wide w-full max-w-[49rem] mx-auto">
                Content Management: WordPress, Hygraph and Supabase{" "}
            </motion.p>
            <motion.p className="z-10 text-lg pb-12 text-justify tracking-wide w-full max-w-[49rem] mx-auto">
                English Norwegian Arabic Kurdish
            </motion.p>
        </section>
    );
}
