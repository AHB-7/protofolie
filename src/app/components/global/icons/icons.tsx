import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
} from "react-icons/fa";
import Image from "next/image";

export const getJavaScriptIcon = (size: number) => (
    <FaJsSquare size={size} color="#f7df1e" />
);
export const getReactIcon = (size: number) => (
    <FaReact size={size} color="#61dafb" />
);
export const getHTML5Icon = (size: number) => (
    <FaHtml5 size={size} color="#e34f26" />
);
export const getCSS3Icon = (size: number) => (
    <FaCss3Alt size={size} color="#1572b6" />
);
export const getBootstrapIcon = (size: number) => (
    <FaBootstrap size={size} color="#563d7c" />
);
export const getTypeScriptIcon = (size: number) => (
    <Image src="/icons/ts.svg" alt="TypeScript" width={size} height={size} />
);
export const getNextJsIcon = (size: number) => (
    <Image
        src="/icons/nextjs.svg"
        alt="Next.js"
        width={size}
        height={size}
        className="bg-white rounded-full"
    />
);
export const getSassIcon = (size: number) => (
    <Image
        src="/icons/sass.svg"
        alt="SASS"
        width={size}
        height={size}
        className="size-6"
    />
);
export const getTailwindIcon = (size: number) => (
    <Image
        src="/icons/tailwind.svg"
        alt="Tailwind"
        width={size}
        height={size}
        className="size-6"
    />
);
export const getStyledComponentsIcon = (size: number) => (
    <Image
        src="/icons/styled-components.svg"
        alt="Styled-Components"
        width={size}
        height={size}
        className="bg-white"
    />
);
export const getFramerMotionIcon = (size: number) => (
    <Image
        src="/icons/framer-motion.svg"
        alt="Framer Motion"
        width={size}
        height={size}
    />
);
export const getFigmaIcon = (size: number) => (
    <Image
        src="/icons/figma.svg"
        alt="Figma"
        width={size}
        height={size}
        className="p-1"
    />
);
export const getAdobeXdIcon = (size: number) => (
    <Image
        src="/icons/adobe-xd.svg"
        alt="Adobe XD"
        width={size}
        height={size}
    />
);
export const getWordPressIcon = (size: number) => (
    <Image
        src="/icons/wordpress.svg"
        alt="WordPress"
        width={size}
        height={size}
    />
);
export const getHygraphIcon = (size: number) => (
    <Image src="/icons/hygraph.jpeg" alt="Hygraph" width={size} height={size} />
);
export const getSupabaseIcon = (size: number) => (
    <Image
        src="/icons/supabase.svg"
        alt="Supabase"
        width={size}
        height={size}
    />
);
