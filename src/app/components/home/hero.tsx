"use client";
import useMousePosition from "./utils/use-mouse-potion";
import React, { useState } from "react";
import Image from "next/image";
import { GlitchedText } from "../global/glitch/glitch";
import { motion } from "framer-motion";
import style from "./hero.module.css";

export function Hero() {
    const [isHover, setIsHover] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHover ? 140 : 40;
    return (
        <section className=" relative">
            <section className="w-full relativ h-screen">
                <div className="absolute top-42 h-full left-0 w-full flex items-center flex-col gap-4 justify-center">
                    <motion.div
                        initial={{ height: "2rem" }}
                        animate={{ height: "20rem" }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        <Image
                            className="mx-auto w-44 h-full object-cover"
                            src="/images/loading.gif"
                            alt="alt"
                            priority
                            width={250}
                            height={100}
                        />
                    </motion.div>
                    <div className="font-bold tracking-widest text-center">
                        <div className="bg-clip-text text-transparent ">
                            <GlitchedText
                                text="Hello, I'm"
                                fontSize="text-2xl"
                            />
                        </div>
                        <GlitchedText
                            text="&lt;Alan Brim&gt;"
                            fontSize="text-2xl"
                        />
                        <p className="text-md font-light uppercase">
                            Front-end developer
                            <br />
                            Ui/UX designer
                        </p>
                    </div>
                </div>
            </section>
            <motion.section
                className={`${style.mask} w-full relativ h-screen`}
                animate={{
                    WebkitMaskPosition: `${x - size}px ${y - size * 2}px`,
                    WebkitMaskSize: `${size * 2}px`,
                }}
                transition={{ type: "tween", ease: "backOut" }}
            >
                <div className="absolute top-42 h-full left-0 w-full flex items-center flex-col gap-4 justify-center">
                    <div
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        {" "}
                        <motion.div
                            initial={{ height: "2rem" }}
                            animate={{ height: "20rem" }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Image
                                className="mx-auto w-44 h-full object-cover"
                                src="/images/profile.jpg"
                                alt="alt"
                                priority
                                width={250}
                                height={100}
                            />
                        </motion.div>
                        <div className="font-bold tracking-widest text-center">
                            <div className="bg-clip-text text-transparent ">
                                <GlitchedText
                                    text="Hello, I'm"
                                    fontSize="text-2xl"
                                />
                            </div>
                            <GlitchedText
                                text="&lt;Alan Brim&gt;"
                                fontSize="text-2xl"
                            />
                            <p className="text-md font-light uppercase">
                                Love gaming and cats
                                <br />
                                Art and Fun
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </section>
    );
}
