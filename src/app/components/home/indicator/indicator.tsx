"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Importing icons from react-icons
import {
    FaUser,
    FaBriefcase,
    FaCode,
    FaEnvelope,
    FaPlus,
} from "react-icons/fa";

export function Indicator() {
    const [activeSection, setActiveSection] = useState<number>(0);
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const sections = ["about", "works", "skills", "contact"]; // Section IDs and Labels

    // Define corresponding icons for each section
    const icons = [FaUser, FaBriefcase, FaCode, FaEnvelope];

    // Calculate scroll percentage for button fill
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percentage = Math.min((scrollTop / scrollHeight) * 100, 100);
            setScrollPercentage(percentage);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Detect active section using Intersection Observer
    useEffect(() => {
        const sectionElements = sections.map((id) =>
            document.getElementById(id.toLowerCase())
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionElements.indexOf(
                            entry.target as HTMLElement
                        );
                        if (index !== -1) {
                            setActiveSection(index);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionElements.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollToSection = (index: number): void => {
        const section = document.getElementById(sections[index].toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Button */}
            <div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <motion.div
                    className="w-14 h-14 flex items-center justify-center rounded-full border-4 shadow-lg cursor-pointer"
                    style={{
                        borderColor: "white",
                        background: `conic-gradient(rgba(195, 255, 61, 0.8) ${scrollPercentage}%, transparent ${scrollPercentage}%)`,
                        opacity: 0.6,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaPlus
                        size={28}
                        className={`transition-transform duration-300 ${
                            isMenuOpen ? "rotate-45" : "rotate-0"
                        }`}
                        style={{
                            color:
                                scrollPercentage === 100 ? "white" : "#c3ff3d",
                        }}
                    />
                </motion.div>
            </div>

            {/* Section Icons (Menu) */}
            <motion.div
                className="fixed bottom-28 transform flex flex-col items-center space-y-4 z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    scale: isMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    pointerEvents: isMenuOpen ? "auto" : "none",
                }}
            >
                {sections.map((label, i) => {
                    const isActive = activeSection === i;
                    const Icon = icons[i];

                    return (
                        <motion.div
                            key={i}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection(i)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <motion.div
                                className={`w-10 h-10 flex items-center justify-center rounded-full border-2  ${
                                    isActive ? "border-[#c3ff3d]" : "white"
                                }`}
                                style={{
                                    backgroundColor: isActive
                                        ? "rgba(195, 255, 61, 0.4)"
                                        : "rgba(255, 255, 255, 0.4)",
                                }}
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: isActive ? 1.3 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Icon
                                    size={20}
                                    color={isActive ? "white" : "#c3ff3d"}
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
