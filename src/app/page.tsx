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
        [0, 0.05, 0.1, 1],
        [
            "radial-gradient(circle, rgba(22,8,8,1) 0%, rgba(5,7,25,1) 100%)",
            " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(13,18,55,1) 100%)",
            "radial-gradient(circle, rgba(22,8,8,1) 0%, rgba(5,7,25,1) 100%)",
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(13,18,55,1) 100%);",
        ]
    );

    return (
        <motion.body
            className="flex flex-col items-center justify-start w-full"
            style={{
                background: backgroundScroll,
                height: "100vh",
            }}
        >
            {/* <Nav /> */}
            <main>
                <Hero />
                {/* <ProfileImage /> */}
                <Skills />
                <Works />
            </main>
        </motion.body>
    );
}
