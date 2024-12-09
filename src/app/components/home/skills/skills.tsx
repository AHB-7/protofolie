"use client";
import Image from "next/image";
// import { motion } from "framer-motion";
import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from "react-icons/fa";

export function Skills() {
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
        <section className="flex flex-col items-center justify-center h-screen p-8">
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center z-20"
                    >
                        <div className="relative w-24 h-24">
                            {/* SVG for circular progress */}
                            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="40%"
                                    fill="none"
                                    stroke="#444"
                                    strokeWidth="8"
                                />
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="40%"
                                    fill="none"
                                    stroke="#6c63ff"
                                    strokeWidth="8"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={
                                        251.2 - (251.2 * skill.level) / 100
                                    }
                                    strokeLinecap="round"
                                    className="circle-progress"
                                />
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center">
                                {skill.icon}
                            </div>
                        </div>
                        <p className="mt-4 text-center font-medium">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
