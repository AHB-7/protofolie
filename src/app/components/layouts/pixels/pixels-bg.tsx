import React, { useEffect, useState, useMemo } from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";

// Define animation variants
const anim = {
    initial: {
        opacity: 0,
    },
    open: (i) => ({
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.05 * i,
        },
    }),
    closed: (i) => ({
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0.05 * i,
        },
    }),
};

interface Dimensions {
    width: number;
    height: number;
}

export function Pixels({ menu }: { menu: boolean }) {
    const [blockSize, setBlockSize] = useState<number>(0);
    const [amountOfBlocks, setAmountOfBlocks] = useState<number>(0);

    // Shuffle function
    const shuffle = (array: number[]): number[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Initialize block size and amount of blocks
    useEffect(() => {
        const updateDimensions = () => {
            const { innerWidth, innerHeight } = window;
            const size = innerWidth * 0.05;
            setBlockSize(size);
            setAmountOfBlocks(Math.ceil(innerHeight / size));
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    // Memoize the shuffled delays for consistent rendering
    const delays = useMemo(() => {
        if (!amountOfBlocks) return [];
        return shuffle([...Array(amountOfBlocks).keys()]);
    }, [amountOfBlocks]);

    // Generate blocks for one column
    const getBlocks = useMemo(() => {
        if (!blockSize || !amountOfBlocks) return [];
        return delays.map((randomIndex, i) => (
            <motion.div
                key={i}
                className={styles.block}
                variants={anim}
                initial="initial"
                animate={menu ? "open" : "closed"}
                custom={randomIndex}
            ></motion.div>
        ));
    }, [blockSize, amountOfBlocks, menu, delays]);

    return (
        <div className={styles.menuContainer}>
            <div className={styles.pixelBackground}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={styles.column}>
                        {getBlocks}
                    </div>
                ))}
            </div>
        </div>
    );
}
