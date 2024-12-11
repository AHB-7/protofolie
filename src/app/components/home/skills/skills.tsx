"use client";
import {
    animate,
    inView,
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
import { useEffect, useRef } from "react";
import { body, tr } from "framer-motion/client";

export function Skills() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"],
    });
    const newRef = useRef(null);
    const inView = useInView(newRef, {
        once: true,
    });
    const animate = useAnimation();
    useEffect(() => {
        if (inView) {
            animate.start({
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3,
                    delay: 0.5,
                },
            });
        } else {
            animate.start({
                x: -100,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3,
                },
            });
        }
    }, [inView, animate]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const itemsOpacity = useTransform(scrollYProgress, [0.18, 0.25], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

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
                    className=" bg-white rounded-full"
                />
            ),
        },

        {
            name: "SASS",
            level: 80,
            icon: (
                <Image src="/icons/sass.svg" alt="asd" width={32} height={32} />
            ),
        },
        {
            name: "Tailwind",
            level: 80,
            icon: (
                <Image
                    src="/icons/tailwind.svg"
                    alt="asd"
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
                    alt="asd"
                    width={32}
                    height={32}
                    className=" bg-white"
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
                    className="p-1`"
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
                className="mb-8 bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start max-w-[24rem] mx-auto sm:ms-10"
            >
                <h2 className="text-3xl font-bold text-pink-600">Skills</h2>
                <p className="text-lg">
                    Those are some of the skills I gained in my journey
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2 overflow-hidden"
                initial="hidden"
                animate="visible"
                ref={newRef}
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
                {skills.map((skill, index) => {
                    const rowDirection =
                        Math.floor(index / 4) % 2 === 0 ? 100 : -100; // Alternating row direction

                    const ref = useRef(null);
                    const inView = useInView(ref, {
                        once: true,
                        margin: "-200px",
                    });
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
                                    delay: (index % 4) * 0.2,
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
                    }, [inView, animate, rowDirection]);

                    return (
                        <motion.div
                            ref={ref}
                            animate={animate}
                            key={index}
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
                                                251.2 -
                                                251.2 * (skill.level / 100),
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
                })}
            </motion.div>
        </section>
    );
}
