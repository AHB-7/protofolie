import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full mx-auto p-1">
            {/* <h1 className="text-7xl md:text-9xl font-extrabold font-poppins text-center">
                Portofolie
            </h1> */}
            <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
                <Image
                    className="mx-auto"
                    src="/images/loading.gif"
                    alt="alt"
                    width={80}
                    height={30}
                />
            </div>
        </div>
    );
}
