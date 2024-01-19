import Image from "next/image";
import Navbar from "../components/navbar"; // Import the 'Navbar' component
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar /> {/* Use the 'Navbar' component */}
      {/* Rest of the code */}
      {/* <Hero />
      <AboutUsSection />
      <NewsSection />
      <SponsorsSection /> */}
      {/* <AboutUsPage/> */}
      {/* <ParticipatePage/> */}
      <Footer />
    </main>
  );
}
