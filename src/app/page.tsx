"use client";
import { Hero } from "./components/home/hero-title/hero-content";
// import { ProfileImage } from "./components/home/image/profile-image";
// import { Nav } from "./components/layouts/nav/nav";
import { useScroll, useTransform, motion } from "framer-motion";
import { Skills } from "./components/home/skills/skills";
import { Works } from "./components/home/works/works";

export default function Home() {
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
    const particleOpacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1, 0.5, 0]
    );
    const particleTranslateY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <motion.body
            className="flex flex-col items-center justify-start w-full relative"
            style={{
                background: backgroundScroll,
                height: "100vh",
            }}
        >
            {/* <Nav /> */}
            <main>
                <Hero />
                {/* <ProfileImage /> */}
                <Works />
                <Skills />
            </main>
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 80%)",
                }}
            ></motion.div>
        </motion.body>
    );
}
