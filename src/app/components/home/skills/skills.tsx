"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from "react-icons/fa";
import { useRef } from "react";

export function Skills() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    });

    // Create parallax and fade-in effects
    // const yOffset = useTransform(scrollYProgress, [0, 1], ["0px", "150px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const skills = [
        {
            name: "JavaScript",
            level: 75,
            icon: <FaJsSquare size={32} color="#f7df1e" />,
        },
        {
            name: "React",
            level: 60,
            icon: <FaReact size={32} color="#61dafb" />,
        },
        {
            name: "HTML5",
            level: 80,
            icon: <FaHtml5 size={32} color="#e34f26" />,
        },
        {
            name: "CSS3",
            level: 90,
            icon: <FaCss3Alt size={32} color="#1572b6" />,
        },
        {
            name: "Bootstrap",
            level: 80,
            icon: <FaBootstrap size={32} color="#563d7c" />,
        },
        {
            name: "TypeScript",
            level: 75,
            icon: (
                <Image src="/icons/ts.svg" alt="asd" width={32} height={32} />
            ),
        },
        {
            name: "Next.js",
            level: 50,
            icon: (
                <Image
                    src="/icons/nextjs.svg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
            style: {
                backgroundColor: "rgb(255, 255, 255, 0.8)",
            },
        },

        {
            name: "SCSS",
            level: 80,
            icon: <FaBootstrap size={32} color="#563d7c" />,
        },
        {
            name: "Tailwind",
            level: 80,
            icon: <FaBootstrap size={32} color="#563d7c" />,
        },
        {
            name: "Styled-Components",
            level: 80,
            icon: (
                <Image
                    src="/icons/styled-components.svg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
            style: {
                backgroundColor: "rgb(255, 255, 255, 0.8)",
            },
        },
        {
            name: "Framer Motion",
            level: 60,
            icon: (
                <Image
                    src="/icons/framer-motion.svg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
        },
        {
            name: "Figma",
            level: 100,
            icon: (
                <Image
                    src="/icons/figma.svg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
        },
        {
            name: "Adobe XD",
            level: 60,
            icon: (
                <Image
                    src="/icons/adobe-xd.svg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
        },
        {
            name: "WordPress",
            level: 50,
            icon: (
                <Image
                    src="/icons/wordpress.svg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
        },
        {
            name: "Hygraph",
            level: 70,
            icon: (
                <Image
                    src="/icons/hygraph.jpeg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
        },
        {
            name: "Supabase",
            level: 50,
            icon: (
                <Image
                    src="/icons/supabase.svg"
                    alt="asd"
                    width={32}
                    height={32}
                />
            ),
        },
    ];

    return (
        <section
            ref={ref}
            className="relative w-full flex-wrap -mt-24 flex flex-col items-start justify-center"
        >
            <motion.div
                style={{ opacity }}
                className="mb-6 bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start ml-2"
            >
                <h2 className="text-3xl font-bold text-pink-600">Skills</h2>
                <p className="text-lg">
                    Those are some of the skills I gained in my journey
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center p-2 rounded-lg"
                        whileHover={{
                            scale: 1.1,
                            rotate: [0, 5, -5, 0],
                        }}
                        animate={{
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        style={{
                            opacity: opacity,
                        }}
                    >
                        <div className="relative w-20 h-20">
                            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="40%"
                                    fill="none"
                                    stroke="rgb(255, 255, 255, 0.7)"
                                    strokeWidth="8"
                                />
                                <motion.circle
                                    cx="50%"
                                    cy="50%"
                                    r="40%"
                                    fill={
                                        skill.style?.backgroundColor || "none"
                                    }
                                    stroke="rgb(22, 163, 74, 1)"
                                    strokeWidth="9"
                                    strokeDasharray="251.2"
                                    strokeDashoffset="251.2"
                                    strokeLinecap="round"
                                    className="circle-progress"
                                    whileInView={{
                                        strokeDashoffset:
                                            251.2 - 251.2 * (skill.level / 100),
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                    }}
                                />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center">
                                {skill.icon}
                            </div>
                        </div>
                        <p className="mt-2 text-center font-medium text-white">
                            {skill.name}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
