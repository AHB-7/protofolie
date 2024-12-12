import { Poppins, JetBrains_Mono } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});
export const jetBrains = JetBrains_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});
