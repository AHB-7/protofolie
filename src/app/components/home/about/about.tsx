import { jetBrains } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export function AboutMe() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: "spring",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    return (
        <div className="flex flex-col items-start justify-start w-full h-full px-2">
            <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% " }}
                variants={containerVariants}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-md md:text-lg font-bold text-pink-600 pb-5"
                >
                    <p className="text-2xl font-extrabold">About Me()</p>
                    <p className="text-md md:text-lg font-normal text-textColor py-2">
                        The best way to learn is to do.
                    </p>
                </motion.h2>
            </motion.div>

            {/* Title Description */}
            <motion.div
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.9 }}
                className={`${jetBrains.className} relative bg-gradient-to-br from-gray-900 to-zinc-900 p-4 rounded-xl text-start border border-[#6663fd] border-opacity-20 w-full py-8 mb-20`}
            >
                <div className="absolute top-1 right-2"> {`'`} </div>
                <h2 className="text-md md:text-lg font-bold text-pink-600">
                    origin() {"{"} {""}
                    <span className="font-normal text-green-600">
                        return <span className="text-textColor">{"("}</span>
                    </span>
                    <span className="text-md md:text-lg font-normal text-textColor flex flex-col">
                        <br />
                        <span className="text-justify">
                            I am Alan Brim, a Front-end Developer with a strong
                            foundation in web development, design, and sales.
                            Experienced in creating responsive, dynamic websites
                            using modern frameworks and technologies. Possess
                            excellent communication skills developed through
                            diverse work experiences, including youth worker,
                            sales, and cultural heritage roles. Multilingual
                            with fluency in English, Norwegian,, Arabic, and
                            Kurdish.
                        </span>
                        <br />
                        <span className="text-end w-full align-text-bottom">
                            I hope you enjoy my work and feel free to contact me
                        </span>
                        <br />
                        <span className="text-pink-600 font-bold">{"}"};</span>
                        <button className="text-end mt-4">
                            send a message
                        </button>
                    </span>
                </h2>
            </motion.div>
        </div>
    );
}
