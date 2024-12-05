import Link from "next/link";

export function NavComp() {
    return (
        <nav className="w-full mx-auto p-4 flex gap-4 font-bold text-lg">
            <button title="about me">
                <Link href="">About</Link>
            </button>
            <button title="Projects">
                <Link href="">Projects</Link>
            </button>
            <button title="Contact">
                <Link href="">Contact</Link>
            </button>
        </nav>
    );
}
