import type { Metadata } from "next";
import "./styles/globals.css";
import { poppins } from "./fonts/fonts";

export const metadata: Metadata = {
    title: "Alan Brim",
    description: "A front-end developer and designer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.className}`}>
            {children}
        </html>
    );
}
