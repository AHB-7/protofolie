"use client";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
} from "framer-motion";
import Image from "next/image";

export function ProfileImage() {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"],
    });

    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.35, 0.35, 1],
        [0.4, 0.3, 0.3, 0.3]
    );
    const saturate = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const brightness = useTransform(
        scrollYProgress,
        [0, 0.35, 0.35, 1],
        [1, 0, 0, 0]
    );
    const filter = useMotionTemplate`brightness(${brightness}) saturate(${saturate})`;
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <section className="relative flex items-start mt-3 justify-center">
            <motion.div
                className="fixed h-full w-full bottom-0 left-0"
                style={{
                    scale: imageScale,
                    transformOrigin: "bottom",
                    filter: filter,
                    opacity,
                }}
            >
                <Image
                    src="/images/profile-gj.png"
                    alt="profile image"
                    priority
                    fill
                    sizes="auto"
                    className="object-cover w-full h-full overflow-visible max-w-[42rem] mx-auto"
                />
            </motion.div>
        </section>
    );
}
