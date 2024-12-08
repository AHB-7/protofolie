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
        [0, 0.5, 0.95],
        [0.6, 0.4, 0]
    );
    const saturate = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const filter = useMotionTemplate`brightness(90%) saturate(${saturate})`;

    return (
        <motion.div
            className="fixed h-full w-full z-10 bottom-0 left-0"
            style={{
                scale: imageScale,
                transformOrigin: "bottom",
                filter: filter,
            }}
        >
            <Image
                src="/images/profile-gj.png"
                alt="profile image"
                priority
                fill
                sizes="auto"
                className="object-cover w-full h-full overflow-visible"
            />
        </motion.div>
    );
}
