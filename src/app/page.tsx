import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full mx-auto p-1">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <Image
                    className="mx-auto"
                    src="/images/loading.gif"
                    alt="alt"
                    width={120}
                    height={30}
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pt-64">
                <p className="text-xl font-bold tracking-widest text-center">
                    &lt; Alan Brim &gt;
                </p>
            </div>
        </div>
    );
}
