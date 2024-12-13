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
            gitLink: "",
        },
        {
            link: "https://e-com-zeta-plum.vercel.app/",
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
        },
    ];

    return (
        <section
            ref={ref}
            className="relative w-full flex-wrap flex flex-col items-start justify-start px-2 mt-28"
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
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
                viewport={{ once: true, margin: "-30%" }}
                className={`${jetBrains.className} mb-8 bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20 sm:mt-0`}
            >
                <h2 className="text-md md:text-lg font-bold text-pink-600">
                    {" "}
                    WorkExperiences ( ) {"{"}{" "}
                    <p className="text-md md:text-lg font-normal text-green-600 tracking-widest">
                        return <span className="text-textColor">{"("}</span>
                    </p>
                    <p className="text-md md:text-lg font-normal text-textColor">
                        The best way to learn is to do.
                        <br /> )<span className="text-pink-600">{"}"};</span>
                    </p>
                </h2>
                <div className=" absolute top-2 right-4 opacity-90">
                    {" "}
                    {`**`}{" "}
                </div>
            </motion.div>
            <div className=" grid grid-cols-1 gap-2 lg:grid-cols-2 w-full ">
                {works.map((work, index) => {
                    return (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50,
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
                            viewport={{ once: true, margin: "-20%" }}
                            className={`${jetBrains.className} ${styles.codingBok} relative w-full h-36`}
                            key={index}
                        >
                            <div className="w-full">
                                <h3 className="text-lg font-bold text-green-600">
                                    {work.alt}
                                </h3>
                                <p className="text-md md:text-lg font-normal text-textColor">
                                    {work.description}
                                </p>
                            </div>
                            <div className="flex flex-row items-start justify-start gap-1 mt-auto h-full">
                                {work.tools}
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <p className=" text-4xl font-extrabold opacity-20">
                                    {index + 1}
                                </p>
                            </div>
                            <div className="absolute top-2 right-4">
                                <p className=" flex flex-row gap-2 items-center justify-center">
                                    <a
                                        href={`${work.link}`}
                                        className="flex items-center justify-center rounded-full opacity-70 hover:opacity-100 duration-300"
                                        title="GitHub Link"
                                    >
                                        <FaGithub size={29} />
                                    </a>
                                    <a
                                        href={`${work.gitLink}`}
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
