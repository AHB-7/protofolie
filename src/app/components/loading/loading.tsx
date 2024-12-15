"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 3000); 
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.body
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-14 h-14 rounded-full bg-[#c3ff3d] mb-4 shadow-[0_0_20px_2px_rgba(195,255,61,0.6)]"
                    ></motion.div>

                    <div className="flex text-2xl font-bold text-[#c3ff3d] space-x-1 mb-4">
                        {["T", "i", "k", " ", "T", "o", "k"].map(
                            (letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        y: [0, -5, 0], 
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                        delay: index * 0.2,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            )
                        )}
                    </div>
                </motion.body>
            )}
        </AnimatePresence>
    );
}
