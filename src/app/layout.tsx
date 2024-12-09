import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});
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
