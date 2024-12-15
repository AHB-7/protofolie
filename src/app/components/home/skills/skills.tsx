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

    // Animation variants for better motion
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="relative w-full h-fit flex-wrap flex flex-col items-start justify-center px-2 mt-12"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-24% " }}
                variants={containerVariants}
                className={`${jetBrains.className}  mb-8 sm:mt-0`}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-md md:text-lg font-bold text-pink-600 pt-9"
                >
                    <p className="text-2xl font-extrabold">Skills()</p>
                    <p className="text-md md:text-lg font-normal text-textColor py-2">
                        Those are some of the skills I gained in my journey
                    </p>
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15% " }}
                variants={containerVariants}
                className={`${jetBrains.className} relative ${styles.gradientBg}`}
            >
                <motion.h2
                    variants={itemVariants}
                    className={`${styles.underTitle}`}
                >
                    Technologies :
                </motion.h2>{" "}
                <motion.div
                    variants={itemVariants}
                    className="absolute top-2 right-2"
                >
                    {`'`}
                </motion.div>
            </motion.div>

            {/* Technologies Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20% " }}
                variants={containerVariants}
                className={`${styles.skillesContainerTek}`}
            >
                {skills.slice(0, -4).map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <SkillCard skill={skill} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Languages Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20% " }}
                variants={containerVariants}
                className={`${jetBrains.className} relative ${styles.gradientBg}`}
            >
                <motion.h2
                    variants={itemVariants}
                    className={`${styles.underTitle}`}
                >
                    Languages :
                </motion.h2>
                <motion.div
                    variants={itemVariants}
                    className="absolute top-2 right-2"
                >
                    {`'`}
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15% " }}
                variants={containerVariants}
                className={`${styles.skillsContainer}`}
            >
                {skills.slice(-4).map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <SkillCard skill={skill} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
