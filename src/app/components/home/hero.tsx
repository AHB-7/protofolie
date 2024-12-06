import Image from "next/image";

export function Hero() {
    return (
        <section className="w-full relativ h-screen ">
            <div className="noise"></div>
            <div className="absolute top-42 h-full left-0 w-full flex items-center flex-col gap-4 justify-center">
                <Image
                    className="mx-auto"
                    src="/images/loading.gif"
                    alt="alt"
                    width={145}
                    height={30}
                />
                <p className="text-2xl font-extrabold tracking-widest text-center">
                    &lt; Alan Brim &gt;
                </p>
            </div>
        </section>
    );
}
