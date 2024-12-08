"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
export function ProfileImage() {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"],
    });
    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.6, 0.4, 0]
    );
    return (
        <motion.div
            className="fixed h-full w-full z-10 bottom-0 left-0"
            style={{
                scale: imageScale,
                transformOrigin: "bottom",
            }}
        >
            <Image
                src="/images/profile-gj.png"
                alt="profile image"
                priority
                fill
                className="object-cover overflow-visible w-full h-full"
            />
        </motion.div>
    );
}
