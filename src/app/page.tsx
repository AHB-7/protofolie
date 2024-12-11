"use client";
import { Hero } from "./components/home/hero-title/hero-content";
import { ProfessionalSummary } from "./components/home/summary/professional-summary";
import { ProfileImage } from "./components/home/image/profile-image";
// import { Nav } from "./components/layouts/nav/nav";
import { useScroll, useTransform, motion } from "framer-motion";
import { Skills } from "./components/home/skills/skills";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const backgroundScroll = useTransform(
        scrollYProgress,
        [0, 0.05, 0.1, 1],
        [
            "linear-gradient(0deg, rgba(74,74,77,1) 0%, rgba(0,0,0,1) 100%)",
            "linear-gradient(0deg, rgba(74,74,77,1) 0%, rgba(0,0,0,1) 100%)",
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(25,25,26,1) 100%)",
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(25,25,26,1) 100%);",
        ]
    );

    return (
        <motion.body
            className="flex flex-col items-center justify-start w-full "
            style={{
                background: backgroundScroll,
                height: "300rem",
            }}
        >
            {/* <Nav /> */}
            <main>
                <Hero />
                <ProfileImage />
                <Skills />
                <ProfessionalSummary />
            </main>
        </motion.body>
    );
}
