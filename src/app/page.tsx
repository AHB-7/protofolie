"use client";
import { useState, useEffect } from "react";
import { Hero } from "./components/home/hero-title/hero-content";
import { useScroll, useTransform, motion } from "framer-motion";
import { Skills } from "./components/home/skills/skills";
import { Works } from "./components/home/works/works";
import { AboutMe } from "./components/home/about/about";
import { Contact } from "./components/home/contact/contact";
import { Indicator } from "./components/home/indicator/indicator";
import LoadingScreen from "./components/loading/loading";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false); 
        }, 2000); 

        return () => clearTimeout(timeout); 
    }, []);

    const { scrollYProgress } = useScroll();
    const backgroundScroll = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 1],
        [
            "radial-gradient(circle, rgba(10,5,15,1) 0%, rgba(2,2,12,1) 100%)",
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(10,20,50,1) 100%)",
            "radial-gradient(circle, rgba(5,5,10,1) 0%, rgba(3,3,20,1) 100%)",
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(8,10,40,1) 100%)",
        ]
    );

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <motion.body
                    className="flex flex-col items-center justify-start relative"
                    style={{
                        background: backgroundScroll,
                    }}
                >
                    <Indicator />
                    <Hero />
                    <main className="flex flex-col w-full h-screen relative">
                        <AboutMe />
                        <Works />
                        <Skills />
                        <Contact />
                    </main>
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 80%)",
                        }}
                    ></motion.div>
                </motion.body>
            )}
        </>
    );
}
