// import Image from "next/image";

export function ProfessionalSummary() {
    return (
        <section className="relative h-screen px-4 flex items-start justify-start pt-36 flex-col">
            <section
                className="w-full h-full fixed top-0 left-0 bg-gradient-to-br from-slate-950 to-zinc-950 -z-10"
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.5 }}
            ></section>
            {/* <Image
                    className="mx-auto object-cover -z-10 opacity-10"
                    src="/images/noise.gif"
                    alt="alt"
                    priority
                    width={1920}
                    height={1080}
                /> */}
            <h2 className="z-10 text-5xl font-bold py-12 w-full max-w-[49rem] mx-auto">
                Professional Summary
            </h2>
            <p className="z-10 text-lg pb-12 text-justify tracking-wide w-full max-w-[49rem] mx-auto">
                Front-end Developer with a strong foundation in web development,
                design, and sales. Experienced in creating responsive, dynamic
                websites using modern frameworks and technologies. Possess
                excellent communication skills developed through diverse work
                experiences, including youth worker, sales, and cultural
                heritage roles. Multilingual with fluency in English,
                Norwegian,, Arabic, and Kurdish.
            </p>
        </section>
    );
}
