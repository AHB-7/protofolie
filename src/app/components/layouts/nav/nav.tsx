"use client";
import styles from "./nav.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const menuAnime = {
    initial: {
        opacity: 0,
        y: -150,
    },
    open: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
            delay: 0.1 * i,
        },
    }),
    close: {
        opacity: 0,
    },
};

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className={styles.menuContainer}>
            <p></p>
            <button
                title="menu"
                className={`${styles.menuBtn} z-50`}
                onClick={toggleMenu}
            ></button>
            {menuOpen && (
                <motion.div
                    className={styles.menuItemsContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {navItems.map((item, i) => (
                        <motion.button
                            key={i}
                            title={item.name}
                            variants={menuAnime}
                            initial="initial"
                            animate={menuOpen ? "open" : "close"}
                            custom={i}
                        >
                            <motion.a href={`${item.href}`}>
                                {item.name}
                            </motion.a>
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
