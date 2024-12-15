"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ProfileImage() {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"],
    });

    const removeImage = useTransform(
        scrollYProgress,
        [0, 0.04],
        ["flex", "none"]
    );

    return (
        <motion.div
            className="sticky top-0 z-50 w-[8rem] h-[8rem] aspect-square bottom-0 bg-gradient-to-r from-[#1d2d35] via-[#090509] to-[#080504] rounded-full  overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.4 }}
            style={{
                transformOrigin: "bottom",
                display: removeImage,
            }}
        >
            <Image
                src="/images/profile-gj.png"
                alt="profile image"
                priority
                fill
                className="scale-125 object-contain rounded-full"
            />
        </motion.div>
    );
}
