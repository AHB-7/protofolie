import { jetBrains } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export function Contact() {
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
        <div
            id="contact"
            className="flex flex-col items-start justify-start w-full max-w-[50rem] mx-auto h-full px-2 py-24"
        >
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
                    <p className="text-2xl font-extrabold">Contact()</p>
                    <p className="text-md md:text-lg font-normal text-textColor py-2">
                        Feel free to contact me anytime!
                    </p>
                </motion.h2>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.9 }}
                className={`${jetBrains.className} w-full`}
            >
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="mail"
                        className="text-md text-textColor first-letter:uppercase pb-1 py-3 "
                    >
                        mail
                    </label>
                    <input
                        type="email"
                        id="mail"
                        placeholder="Write your email here..."
                        className="bg-zinc-900 p-3 rounded-xl border border-[#6663fd] border-opacity-30 focus:outline-[#6663fd] focus:border-[#6663fd] focus:border-opacity-50"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-md text-textColor first-letter:uppercase pb-1 py-3 "
                    >
                        name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Write your Name..."
                        className="bg-zinc-900 p-3 rounded-xl border border-[#6663fd] border-opacity-30 focus:outline-[#6663fd] focus:border-[#6663fd] focus:border-opacity-50"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-md text-textColor first-letter:uppercase pb-1 py-3 "
                    >
                        message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Your Message..."
                        className="bg-zinc-900 p-3 rounded-xl border border-[#6663fd] border-opacity-30 focus:outline-[#6663fd] focus:border-[#6663fd] focus:border-opacity-50 "
                    ></textarea>
                </div>
                <div className="relative inline-flex group w-full items-center justify-center mt-24">
                    <div className="absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt w-full"></div>
                    <button
                        type="submit"
                        title="Get quote now"
                        className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-light text-textColor transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full"
                        role="button"
                    >
                        send
                    </button>
                </div>
            </motion.form>
            <div className="w-full pt-8 flex items-center justify-center flex-col text-textColor">
                <p>or</p>
                <p className="pt-4">call me: +4798698478</p>
                <p>mail me: ab@kodee.no</p>
            </div>
        </div>
    );
}
