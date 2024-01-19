import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewsSection from '../components/NewsSection'
import SponsorsSection from "../components/SponsorsSection";
import AboutUsSection from "../components/AboutUsSection";
import AboutUsPage from "./AboutUsPage";
import PageTitle from "../components/PageTitle";
import ParticipatePage from "./ParticipatePage";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <HeroSection />
      <AboutUsSection />
      <NewsSection />
      <SponsorsSection /> */}
      {/* <AboutUsPage/> */}
      <ParticipatePage/>
      <Footer />
    </main>
  );
}
