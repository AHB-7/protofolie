"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Pixels } from "./pixels/pixels-bg";

export function NavComp() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className="w-full mx-auto p-4 flex gap-4 font-bold text-lg z-50 justify-between ">
            <div className="z-50">
                <p className="uppercase font-light">Front-end developer</p>
            </div>
            <motion.button
                title="menu"
                className="menu-btn"
                onClick={toggleMenu}
                initial={{
                    transform: "rotate(0deg)",
                    color: "red",
                }}
                animate={{
                    transform: menu ? "rotate(0deg)" : "rotate(20deg)",
                }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                }}
            ></motion.button>
            {menu && (
                <Pixels menu={menu} />
                // <motion.div
                //     key="menu"
                //     // initial={{
                //     //     transform: "translateY(-1100rem)",
                //     //     opacity: 0,
                //     // }}
                //     // animate={{
                //     //     transform: "translateY(0px)",
                //     //     opacity: 1,
                //     // }}
                //     // exit={{
                //     //     transform: "translateY(-1100rem)",
                //     //     opacity: 0,
                //     // }}
                //     // transition={{
                //     //     type: "spring",
                //     //     duration: 1,
                //     // }}
                //     className="menu-container"
                // >
                //     <button title="about me">
                //         <Link href="/">About</Link>
                //     </button>
                //     <button title="Projects">
                //         <Link href="">Projects</Link>
                //     </button>
                //     <button title="Contact">
                //         <Link href="">Contact</Link>
                //     </button>
                // </motion.div>
            )}
        </nav>
    );
}
