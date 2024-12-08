import { Hero } from "./components/home/hero-content";
import { ProfessionalSummary } from "./components/home/professional-summary";
import { ProfileImage } from "./components/home/profile-image";

export default function Home() {
    return (
        <main>
            <Hero />
            <ProfileImage />
            <ProfessionalSummary />
        </main>
    );
}
