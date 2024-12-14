"use client";
import { jetBrains } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

export function Contact() {
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
        robot: "",
    });
    const [isHuman, setIsHuman] = useState(false);

    const validateInputs = (
        name: string,
        email: string,
        message: string
    ): boolean => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "", robot: "" };

        if (name.length < 5) {
            newErrors.name = "Name must be at least 5 characters long.";
            isValid = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }
        if (message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long.";
            isValid = false;
        }
        if (!isHuman) {
            newErrors.robot = "Please confirm that you are not a robot.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage("");

        const form = event.currentTarget;
        const name = form.user_name.value.trim();
        const email = form.user_email.value.trim();
        const message = form.message.value.trim();

        if (!validateInputs(name, email, message)) {
            return;
        }

        setStatus("loading");

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            )
            .then(
                () => {
                    setStatus("success");
                    setMessage("Email sent successfully!");
                    form.reset();
                    setIsHuman(false); // Reset the robot checkbox
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("error");
                    setMessage("Failed to send email. Please try again later.");
                }
            );
    };

    return (
        <div
            id="contact"
            className="flex flex-col items-start justify-start w-full max-w-[50rem] mx-auto h-full px-2 py-24"
        >
            <motion.div
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% " }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
            >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 },
                        },
                    }}
                    className="text-md md:text-lg font-bold text-pink-600 pb-5"
                >
                    <p className="text-2xl font-extrabold">Contact()</p>
                    <p className="text-md md:text-lg font-normal text-textColor py-2">
                        Feel free to contact me anytime!
                    </p>
                </motion.h2>
            </motion.div>
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.9 }}
                className={`${jetBrains.className} w-full`}
            >
                <input type="hidden" name="to_email" value="ab@kodee.no" />
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-md text-textColor first-letter:uppercase pb-1 py-3"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Write your Name..."
                        className="bg-zinc-900 p-3 rounded-xl border border-[#6663fd] border-opacity-30 focus:outline-[#6663fd] focus:border-[#6663fd] focus:border-opacity-50"
                        required
                        disabled={status === "loading"}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="mail"
                        className="text-md text-textColor first-letter:uppercase pb-1 py-3"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="mail"
                        name="user_email"
                        placeholder="Write your email here..."
                        className="bg-zinc-900 p-3 rounded-xl border border-[#6663fd] border-opacity-30 focus:outline-[#6663fd] focus:border-[#6663fd] focus:border-opacity-50"
                        required
                        disabled={status === "loading"}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-md text-textColor first-letter:uppercase pb-1 py-3"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message..."
                        className="bg-zinc-900 p-3 rounded-xl border border-[#6663fd] border-opacity-30 focus:outline-[#6663fd] focus:border-[#6663fd] focus:border-opacity-50"
                        required
                        disabled={status === "loading"}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                </div>
                <div
                    onClick={() => status !== "loading" && setIsHuman(!isHuman)}
                    className={`flex items-center gap-4 mt-6 bg-gray-800 p-3 rounded-lg border cursor-pointer ${
                        isHuman
                            ? "border-green-500 bg-green-900"
                            : "border-gray-700"
                    } hover:shadow-lg transition-all duration-300 ${
                        status === "loading"
                            ? "cursor-not-allowed opacity-50"
                            : ""
                    }`}
                >
                    <label
                        className={`text-md font-medium w-full text-center ${
                            isHuman ? "text-green-500" : "text-textColor"
                        } first-letter:uppercase`}
                    >
                        If you are not a robot, click here
                    </label>
                </div>
                {errors.robot && (
                    <p className="text-red-500 text-sm">{errors.robot}</p>
                )}
                {status === "loading" && (
                    <div className="flex justify-center items-center w-full pt-5 -mb-16">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-500"></div>
                    </div>
                )}
                <div className="relative inline-flex group w-full items-center justify-center mt-24">
                    <div
                        className={`absolute transition-all duration-1000 opacity-50 -inset-px rounded-xl blur-lg w-full ${
                            status === "success"
                                ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600"
                                : status === "error"
                                ? "bg-gradient-to-r from-red-400 via-red-500 to-red-600"
                                : "bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"
                        } group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}
                    ></div>
                    <button
                        type="submit"
                        title="Send message"
                        disabled={status === "loading"}
                        className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-light text-textColor transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full"
                        role="button"
                    >
                        {status === "loading" && "Sending..."}
                        {status === "success" && (
                            <div className="text-green-500">{message}</div>
                        )}
                        {status === "idle" && "Send"}
                        {status === "error" && (
                            <div className="text-red-600">{message}</div>
                        )}
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
