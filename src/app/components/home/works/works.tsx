"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { jetBrains } from "@/app/fonts/fonts";
import Image from "next/image";

export function Works() {
    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const works = [
        {
            link: "https://hollydays.netlify.app/",
            image: "/works/hollybig.png",
            alt: "Hollydays Booking Site",
        },
        {
            link: "https://e-com-zeta-plum.vercel.app/",
            image: "/works/hollybig.png",
            alt: "E-commerce Site",
        },
        {
            link: "https://frolicking-beignet-318578.netlify.app/",
            image: "/works/hollybig.png",
            alt: "Museum Site",
        },
        {
            link: "https://ahb-7.github.io/auctionIt/",
            image: "/works/hollybig.png",
            alt: "AuctionIt",
        },
        {
            link: "https://www.tarbush.no/",
            image: "/works/hollybig.png",
            alt: "Tarbush",
        },
        {
            link: "https://www.vikengullverksted.no/",
            image: "/works/hollybig.png",
            alt: "Viken Gull Verksted",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? works.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval); // Clear the interval on unmount
    }, []);

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
            <div
                className={`${jetBrains.className} mb-8 bg-gradient-to-br from-slate-900 to-zinc-950 px-4 py-2 rounded-xl text-start w-full border border-[#6663fd] border-opacity-20 sm:mt-0`}
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="relative flex items-center justify-center h-96 w-full">
                        <a
                            href={works[currentIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={works[currentIndex].image}
                                alt={works[currentIndex].alt}
                                fill
                                className="object-contain"
                            />
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handlePrev}
                            className="px-4 py-2 rounded-md hover:bg-gray-300"
                        >
                            ◀
                        </button>
                        <span className="text-gray-700">
                            {currentIndex + 1} / {works.length}
                        </span>
                        <button
                            onClick={handleNext}
                            className="px-4 py-2 rounded-md hover:bg-gray-300"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
