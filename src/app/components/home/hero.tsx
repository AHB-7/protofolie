import Image from "next/image";
import { GlitchedText } from "../global/glitch/glitch";

export function Hero() {
    return (
        <section className="w-full relativ h-screen ">
            <div className="noise"></div>
            <div className="absolute top-42 h-full left-0 w-full flex items-center flex-col gap-4 justify-center">
                <Image
                    className="mx-auto w-44 h-80 object-cover"
                    src="/images/glitched-profile.gif"
                    alt="alt"
                    width={250}
                    height={100}
                />
                <p className="text-2xl font-extrabold tracking-widest text-center">
                    <GlitchedText text="&lt;Alan Brim&gt;" />
                </p>
            </div>
        </section>
    );
}
