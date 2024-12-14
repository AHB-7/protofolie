import { useRef } from "react";
import { motion } from "framer-motion";

type Skill = {
    name: string;
    level: number;
    icon?: JSX.Element;
};

export function SkillCard({ skill }: { skill: Skill }) {
    const ref = useRef(null);
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const clampedLevel = Math.min(100, Math.max(0, skill.level || 0));

    return (
        <motion.div
            ref={ref}
            className="relative flex items-center justify-center flex-row gap-0 py-1 rounded-lg bg-gradient-to-br from-slate-900 to-zinc-950 border border-[#6663fd] border-opacity-20 w-full"
        >
            <div className="relative w-12 h-12">
                <svg className="absolute top-0 left-0 w-full h-full">
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        stroke="grey"
                        strokeWidth="4"
                    />
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        stroke="#c3ff3d"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        initial={{
                            strokeDashoffset: circumference,
                        }}
                        animate={{
                            strokeDashoffset:
                                circumference -
                                (circumference * clampedLevel) / 100,
                        }}
                        strokeLinecap="round"
                        style={{ rotate: "-90deg", transformOrigin: "center" }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {skill.icon ? skill.icon : null}
                </div>
            </div>
            <div className=" px-2 flex-1 flex items-center h-full   ">
                <p className="text-start font-medium text-textColor">
                    {skill.name}
                </p>
            </div>
        </motion.div>
    );
}
