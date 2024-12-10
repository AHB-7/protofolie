"use client";
import { Hero } from "./components/home/hero-title/hero-content";
import { ProfessionalSummary } from "./components/home/summary/professional-summary";
import { ProfileImage } from "./components/home/image/profile-image";
// import { Nav } from "./components/layouts/nav/nav";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const backgroundScroll = useTransform(
        scrollYProgress,
        [0, 1],
        [
            " linear-gradient(0deg, rgba(20,43,45,1) 35%, rgba(14,4,1,1) 100%)",
            "linear-gradient(0deg, rgba(17,35,37,1) 35%, rgba(14,4,1,1) 100%)",
        ]
    );

    return (
        <motion.body
            className="flex flex-col items-center justify-start w-full"
            style={{
                background: backgroundScroll,
                height: "300rem",
            }}
        >
            {/* <Nav /> */}
            <main>
                <Hero />
                <ProfileImage />
                <ProfessionalSummary />
            </main>
        </motion.body>
    );
}
