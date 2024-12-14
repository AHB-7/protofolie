"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { jetBrains } from "@/app/fonts/fonts";
import { SkillCard } from "./skill-card";
import styles from "./skills.module.css";
import {
    getAdobeXdIcon,
    getBootstrapIcon,
    getCSS3Icon,
    getFigmaIcon,
    getFramerMotionIcon,
    getHTML5Icon,
    getHygraphIcon,
    getJavaScriptIcon,
    getNextJsIcon,
    getReactIcon,
    getSassIcon,
    getStyledComponentsIcon,
    getSupabaseIcon,
    getTailwindIcon,
    getTypeScriptIcon,
    getWordPressIcon,
} from "../../global/icons/icons";

export function Skills() {
    const ref = useRef(null);
    const skills = [
        {
            name: "JavaScript",
            level: 75,
            icon: getJavaScriptIcon(16),
        },
        { name: "React", level: 60, icon: getReactIcon(16) },
        { name: "HTML5", level: 80, icon: getHTML5Icon(16) },
        { name: "CSS3", level: 90, icon: getCSS3Icon(16) },
        { name: "Bootstrap", level: 80, icon: getBootstrapIcon(16) },
        { name: "TypeScript", level: 75, icon: getTypeScriptIcon(16) },
        { name: "Next.js", level: 50, icon: getNextJsIcon(16) },
        { name: "SASS", level: 80, icon: getSassIcon(16) },
        { name: "Tailwind", level: 80, icon: getTailwindIcon(16) },
        {
            name: "Styled-Components",
            level: 80,
            icon: getStyledComponentsIcon(16),
        },
        { name: "Framer Motion", level: 60, icon: getFramerMotionIcon(16) },
        { name: "Figma", level: 100, icon: getFigmaIcon(16) },
        { name: "Adobe XD", level: 60, icon: getAdobeXdIcon(16) },
        { name: "WordPress", level: 50, icon: getWordPressIcon(16) },
        { name: "Hygraph", level: 70, icon: getHygraphIcon(16) },
        { name: "Supabase", level: 50, icon: getSupabaseIcon(16) },
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
            className="relative w-full flex-wrap flex flex-col items-start justify-center px-2"
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
                className={`${jetBrains.className} ${styles.gradientBg}  mb-8  sm:mt-0 `}
            >
                <h2 className="text-md md:text-lg font-bold text-pink-600 py-4">
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
                className={`${jetBrains.className} relative ${styles.gradientBg}`}
            >
                <h2 className={`${styles.underTitle}`}>Teknologis :</h2>{" "}
                <div className=" absolute top-2 right-2"> {`***`} </div>
            </motion.div>
            <div className={`${styles.skillesContainerTek}`}>
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
                className={`${jetBrains.className} relative ${styles.gradientBg}`}
            >
                <h2 className={`${styles.underTitle}`}>Languages :</h2>{" "}
                <div className=" absolute top-2 right-2"> {`***`} </div>
            </motion.div>
            <div className={`${styles.skillsContainer}`}>
                {skills.slice(-4).map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
}
