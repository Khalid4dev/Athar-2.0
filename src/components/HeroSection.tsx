import React from "react";
import heroImage from "../assets/images/heroSectionImage.jpg";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen flex justify-center items-center text-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Hero Image"
        className="absolute w-full h-full -z-50 object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-shadow">
          We are People of Action
        </h1>
        <p className="text-sm sm:text-xl text-white mb-8">This is some text.</p>
        <Button
          variant="secondary"
          className="bg-yellow-300 hover:bg-yellow-400"
        >
          Faire un Don
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
