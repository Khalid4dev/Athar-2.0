import HeroSection from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import SponsorsSection from "../components/SponsorsSection";
import AboutUsSection from "../components/AboutUsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <NewsSection /> 
      <SponsorsSection />
    </main>
  );
}
