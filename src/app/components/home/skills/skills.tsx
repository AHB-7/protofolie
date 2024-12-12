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
import { useRef } from "react";

type Skill = {
    name: string;
    level: number;
    icon: JSX.Element;
};
// Individual SkillCard Component
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-200px" });
    const animate = useAnimation();

    return (
        <motion.div
            ref={ref}
            className="flex items-start justify-start flex-row gap-2 p-2 rounded-lg bg-gradient-to-br from-gray-900 to-zinc-900 border border-[#6663fd] border-opacity-20"
        >
            <div className="relative w-10 h-10 ">
                <svg className="absolute top-0 left-0 w-full h-full">
                    <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        stroke="rgb(255, 255, 255, 0.7)"
                        strokeWidth="3"
                    />
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        stroke="grey"
                        strokeWidth="4"
                        strokeDasharray={skill.level}
                        strokeDashoffset={skill.level}
                        origin={0}
                        strokeLinecap="round"
                        className="circle-progress"
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
    ];

    return (
        <section
            ref={ref}
            className="relative w-full flex-wrap -mt-24 flex flex-col items-start justify-center"
        >
            <motion.div
                style={{ opacity }}
                className="mb-8 bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20"
            >
                <h2 className="text-2xl font-bold text-pink-600">
                    {" "}
                    Skills ( ) {"{"}{" "}
                    <p className="text-xl font-normal text-green-600 tracking-widest">
                        return
                    </p>
                    <p className="text-xl font-normal text-textColor">
                        {"{"} <br /> &quot; Those are some of the skills I
                        gained in my journey &quot; <br /> {"}"}
                    </p>
                </h2>
            </motion.div>
            <motion.div
                style={{ opacity }}
                className="bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20"
            >
                <h2 className="text-2xl font-bold text-green-600 py-4">
                    Teknologis :
                </h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 overflow-hidden mx-2 py-6 ">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
            <motion.div
                style={{ opacity }}
                className="bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20"
            >
                <h2 className="text-2xl font-bold text-pink-600 py-4">
                    Languages :
                </h2>
            </motion.div>
        </section>
    );
}
