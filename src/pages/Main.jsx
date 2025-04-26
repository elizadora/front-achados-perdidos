import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RecentItems from "../components/RecentItems";
import Footer from "../components/Footer";

export default function Main() {
    return (
        <main className="min-h-screen flex flex-col justify-between bg-white">
            <Header />
            <div>
                <HeroSection />
                <RecentItems />
            </div>
            <Footer />
        </main>
    )
};