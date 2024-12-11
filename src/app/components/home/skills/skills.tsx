"use client";
import {
    motion,
    useAnimation,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from "react-icons/fa";
import { useRef, useEffect } from "react";

type Skill = {
    name: string;
    level: number;
    icon: JSX.Element;
};
// Individual SkillCard Component
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const rowDirection = Math.floor(index / 4) % 2 === 0 ? 100 : -100; // Alternating row direction
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-200px" });
    const animate = useAnimation();

    useEffect(() => {
        if (inView) {
            animate.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.5,
                    delay: (index % 4) * 0.2, // Stagger within the row
                },
            });
        } else {
            animate.start({
                x: rowDirection,
                opacity: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3,
                },
            });
        }
    }, [inView, animate, rowDirection, index]);

    return (
        <motion.div
            ref={ref}
            animate={animate}
            className="flex flex-col items-center justify-center p-2 rounded-lg"
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
                        fill="none"
                        stroke="rgb(13,63,74,1)"
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
    );
}

// Main Skills Component
export function Skills() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    });

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
                <Image
                    src="/icons/ts.svg"
                    alt="TypeScript"
                    width={32}
                    height={32}
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
                    width={32}
                    height={32}
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
                    width={32}
                    height={32}
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
                    width={32}
                    height={32}
                />
            ),
        },
        {
            name: "Styled-Components",
            level: 80,
            icon: (
                <Image
                    src="/icons/styled-components.svg"
                    alt="Styled-Components"
                    width={32}
                    height={32}
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
                    alt="Figma"
                    width={32}
                    height={32}
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
                    alt="WordPress"
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
                    alt="Hygraph"
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
                    alt="Supabase"
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
                className="mb-8 bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start max-w-[24rem] mx-auto sm:ms-10"
            >
                <h2 className="text-3xl font-bold text-pink-600">Skills</h2>
                <p className="text-lg">
                    Those are some of the skills I gained in my journey
                </p>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2 overflow-hidden">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
}
