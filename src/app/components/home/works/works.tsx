"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { jetBrains } from "@/app/fonts/fonts";
import styles from "./works.module.css";
import {
    getCSS3Icon,
    getFigmaIcon,
    getFramerMotionIcon,
    getHTML5Icon,
    getJavaScriptIcon,
    getNextJsIcon,
    getReactIcon,
    getSassIcon,
    getStyledComponentsIcon,
    getTailwindIcon,
    getTypeScriptIcon,
} from "../../global/icons/icons";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export function Works() {
    const ref = useRef(null);

    const works = [
        {
            link: "https://hollydays.netlify.app/",
            alt: "Hollydays Booking Site",
            description: "A booking site for a hotel",
            tools: (
                <div className="flex flex-row gap-2 items-center h-full">
                    Tools: {getReactIcon(20)}
                    {getTypeScriptIcon(20)}
                    {getStyledComponentsIcon(20)}
                    {getFigmaIcon(20)}
                </div>
            ),
            gitLink: "https://github.com/AHB-7/hollydayiz",
        },
        {
            link: "https://eeecomm.netlify.app/",
            alt: "E-commerce Site",
            description: "An e-commerce site",
            tools: (
                <div className="flex flex-row gap-2 items-center h-full">
                    Tools: {getReactIcon(20)}
                    {getTypeScriptIcon(20)}
                    {getStyledComponentsIcon(20)}
                    {getFigmaIcon(20)}
                </div>
            ),
            gitLink: "https://github.com/AHB-7/e-com",
        },
        {
            link: "https://frolicking-beignet-318578.netlify.app/",
            alt: "Museum Site",
            description: "A museum site",
            tools: (
                <div className="flex flex-row gap-2 items-center h-full">
                    Tools: {getCSS3Icon(20)}
                    {getHTML5Icon(20)}
                    {getJavaScriptIcon(20)}
                    {getFigmaIcon(20)}
                </div>
            ),
            gitLink: "https://github.com/AHB-7/Simple-Static-Website",
        },
        {
            link: "https://ahb-7.github.io/auctionIt/",
            alt: "AuctionIt",
            description: "An auction site",
            tools: (
                <div className="flex flex-row gap-2 items-center h-full">
                    Tools: {getTypeScriptIcon(20)}
                    {getSassIcon(20)}
                    {getStyledComponentsIcon(20)}
                    {getFigmaIcon(20)}
                </div>
            ),
            gitLink: "https://github.com/AHB-7/Simple-Static-Website",
        },
        {
            link: "https://www.tarbush.no/",
            alt: "Tarbush",
            description: "A restaurant site",
            tools: (
                <div className="flex flex-row gap-2 items-center h-full">
                    Tools: {getFramerMotionIcon(20)}
                    {getNextJsIcon(20)}
                    {getTailwindIcon(20)}
                    {getFigmaIcon(20)}
                    {getReactIcon(20)}
                    {getStyledComponentsIcon(20)}
                    {getJavaScriptIcon(20)}
                </div>
            ),
            gitLink: "https://github.com/AHB-7/tarbush",
        },
        {
            link: "https://www.vikengullverksted.no/",
            alt: "Viken Gull Verksted",
            description: "A jewelry site",
            tools: (
                <div className="flex flex-row gap-2 items-center h-full">
                    Tools: {getFramerMotionIcon(20)}
                    {getNextJsIcon(20)}
                    {getTailwindIcon(20)}
                    {getFigmaIcon(20)}
                    {getJavaScriptIcon(20)}
                </div>
            ),
            gitLink: "https://github.com/AHB-7/viken",
        },
    ];
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
            ref={ref}
            className="relative w-full flex-wrap flex flex-col items-start justify-start px-2 mt-12"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15% " }}
                variants={containerVariants}
                className={`${jetBrains.className}`}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-md md:text-lg font-bold text-pink-600 pb-5"
                >
                    <p className="text-2xl font-extrabold">WorkExperiences()</p>
                    <p className="text-md md:text-lg font-normal text-textColor py-2">
                        The best way to learn is to do.
                    </p>
                </motion.h2>
            </motion.div>
            <div className=" grid grid-cols-1 gap-2 lg:grid-cols-2 w-full ">
                {works.map((work, index) => {
                    return (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-15% " }}
                            variants={containerVariants}
                            className={`${jetBrains.className} ${styles.codingBok} relative w-full h-36`}
                            key={index}
                        >
                            <div className="w-full">
                                <motion.h3
                                    variants={itemVariants}
                                    className="text-lg font-bold text-green-600"
                                >
                                    {work.alt}
                                </motion.h3>
                                <motion.p
                                    variants={itemVariants}
                                    className="text-md md:text-lg font-normal text-textColor"
                                >
                                    {work.description}
                                </motion.p>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mt-auto h-full">
                                {work.tools}
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <p className=" text-6xl rotate-12 font-extrabold opacity-50 filter text-gray-600">
                                    {index + 1}
                                </p>
                            </div>
                            <div className="absolute top-2 right-4">
                                <p className=" flex flex-row gap-2 items-center justify-center">
                                    <a
                                        href={`${work.gitLink}`}
                                        className="flex items-center justify-center rounded-full opacity-70 hover:opacity-100 duration-300"
                                        title="GitHub Link"
                                    >
                                        <FaGithub size={29} />
                                    </a>
                                    <a
                                        href={`${work.link}`}
                                        className="flex items-center justify-center text-black bg-[#c3ff3d] p-1 rounded-full bg-opacity-70 hover:bg-opacity-100 duration-300"
                                        title="External Link"
                                    >
                                        <GoArrowUpRight
                                            size={22}
                                            color="#000"
                                        />
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
