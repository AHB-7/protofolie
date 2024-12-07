"use client";

import React from "react";
import Image from "next/image";
import { GlitchedText } from "../global/glitch/glitch";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="w-full relativ h-screen ">
            <div className="absolute top-42 h-full left-0 w-full flex items-center flex-col gap-4 justify-center">
                <motion.div
                    initial={{ height: "20rem" }}
                    animate={{ height: "2rem" }}
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
                        <GlitchedText text="Hello, I'm" fontSize="text-2xl" />
                    </div>
                    <GlitchedText
                        text="&lt;Alan Brim&gt;"
                        fontSize="text-2xl"
                    />
                    <p className="text-md font-light uppercase">
                        Front-end developer
                    </p>
                </div>
            </div>
        </section>
    );
}
