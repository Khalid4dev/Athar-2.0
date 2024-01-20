import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewsSection from "../components/NewsSection";
import SponsorsSection from "../components/SponsorsSection";
import AboutUsSection from "../components/AboutUsSection";
import AboutUsPage from "./AboutUs/page";
import PageTitle from "../components/PageTitle";
import ParticipatePage from "./Participate/page";
import TeamMembersPage from "./TeamMembersPage";

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
