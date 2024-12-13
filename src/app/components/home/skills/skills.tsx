"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from "react-icons/fa";
import { useRef } from "react";
import { jetBrains } from "@/app/fonts/fonts";
import { SkillCard } from "./skill-card";

export function Skills() {
    const ref = useRef(null);

    const skills = [
        {
            name: "JavaScript",
            level: 75,
            icon: <FaJsSquare size={16} color="#f7df1e" />,
        },
        {
            name: "React",
            level: 60,
            icon: <FaReact size={16} color="#61dafb" />,
        },
        {
            name: "HTML5",
            level: 80,
            icon: <FaHtml5 size={16} color="#e34f26" />,
        },
        {
            name: "CSS3",
            level: 90,
            icon: <FaCss3Alt size={16} color="#1572b6" />,
        },
        {
            name: "Bootstrap",
            level: 80,
            icon: <FaBootstrap size={16} color="#563d7c" />,
        },
        {
            name: "TypeScript",
            level: 75,
            icon: (
                <Image
                    src="/icons/ts.svg"
                    alt="TypeScript"
                    width={16}
                    height={16}
                />
            ),
        },
        {
            name: "Next.js",
            level: 50,
            icon: (
                <Image
                    src="/icons/nextjs.svg"
                    alt="Next.js"
                    width={16}
                    height={16}
                    className="bg-white rounded-full"
                />
            ),
        },
        {
            name: "SASS",
            level: 80,
            icon: (
                <Image
                    src="/icons/sass.svg"
                    alt="SASS"
                    width={16}
                    height={16}
                    className="size-6"
                />
            ),
        },
        {
            name: "Tailwind",
            level: 80,
            icon: (
                <Image
                    src="/icons/tailwind.svg"
                    alt="Tailwind"
                    width={16}
                    height={16}
                    className="size-6"
                />
            ),
        },
        {
            name: "Styled-Comp...",
            level: 80,
            icon: (
                <Image
                    src="/icons/styled-components.svg"
                    alt="Styled-Components"
                    width={16}
                    height={16}
                    className="bg-white"
                />
            ),
        },
        {
            name: "Framer Motion",
            level: 60,
            icon: (
                <Image
                    src="/icons/framer-motion.svg"
                    alt="Framer Motion"
                    width={16}
                    height={16}
                />
            ),
        },
        {
            name: "Figma",
            level: 100,
            icon: (
                <Image
                    src="/icons/figma.svg"
                    alt="Figma"
                    width={16}
                    height={16}
                    className="p-1"
                />
            ),
        },
        {
            name: "Adobe XD",
            level: 60,
            icon: (
                <Image
                    src="/icons/adobe-xd.svg"
                    alt="Adobe XD"
                    width={16}
                    height={16}
                />
            ),
        },
        {
            name: "WordPress",
            level: 50,
            icon: (
                <Image
                    src="/icons/wordpress.svg"
                    alt="WordPress"
                    width={16}
                    height={16}
                />
            ),
        },
        {
            name: "Hygraph",
            level: 70,
            icon: (
                <Image
                    src="/icons/hygraph.jpeg"
                    alt="Hygraph"
                    width={16}
                    height={16}
                />
            ),
        },
        {
            name: "Supabase",
            level: 50,
            icon: (
                <Image
                    src="/icons/supabase.svg"
                    alt="Supabase"
                    width={16}
                    height={16}
                />
            ),
        },
        {
            name: "English",
            level: 100,
        },
        {
            name: "Norwegian",
            level: 100,
        },
        {
            name: "Arabic",
            level: 100,
        },
        {
            name: "Kurdish",
            level: 100,
        },
    ];

    return (
        <section
            ref={ref}
            className="relative w-full flex-wrap -mt-24 flex flex-col items-start justify-center px-2"
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 150,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        duration: 1,
                        bounce: 0.5,
                    },
                }}
                viewport={{ once: true, margin: "-24% " }}
                className={`${jetBrains.className} mb-8 bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20 -mt-16 sm:mt-0`}
            >
                <h2 className="text-md md:text-lg font-bold text-pink-600">
                    {" "}
                    Skills ( ) {"{"}{" "}
                    <p className="text-md md:text-lg font-normal text-green-600 tracking-widest">
                        return <span className="text-textColor">{"("}</span>
                    </p>
                    <p className="text-md md:text-lg font-normal text-textColor">
                        Those are some of the skills I gained in my journey
                        <br /> )<span className="text-pink-600">{"}"};</span>
                    </p>
                </h2>
                <div className=" absolute top-2 right-4 opacity-90">
                    {" "}
                    {`**`}{" "}
                </div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 150,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        duration: 1,
                        bounce: 0.5,
                    },
                }}
                viewport={{ once: true, margin: "-15% " }}
                className={`${jetBrains.className} relative bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20`}
            >
                <h2 className="text-md md:text-lg text-yellow-500 py-4">
                    Teknologis :
                </h2>{" "}
                <div className=" absolute top-2 right-2"> {`***`} </div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 overflow-hidden py-6  w-full">
                {skills.slice(0, -4).map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 150,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        duration: 1,
                        bounce: 0.5,
                    },
                }}
                viewport={{ once: true, margin: "-20px " }}
                className={`${jetBrains.className} relative bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20`}
            >
                <h2 className="text-md md:text-lg text-yellow-500 py-4">
                    Languages :
                </h2>{" "}
                <div className=" absolute top-2 right-2"> {`***`} </div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 overflow-hidden py-6 w-full">
                {skills.slice(-4).map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
}
