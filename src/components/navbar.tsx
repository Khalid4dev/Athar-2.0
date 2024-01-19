"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// Actualités
// Boutique : Comming soon
// A propos : Qui sommes-nous,  Mission, vision, et valeurs, Équipe dirigeante et membres clés
// Galerie : Photos, Vidéos
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 z-10 w-full flex items-center justify-center">
        <nav className="flex items-center justify-between p-4 bg-gray-200 bg-opacity-70 text-white rounded-3xl mx-auto w-full max-w-screen-xl">
          {" "}
          <div className="flex items-center flex-shrink-0">
            <Image
              width={40}
              height={40}
              alt="logo"
              src="/images/Athar_logo.jpg"
              className="h-10 w-10 mx-auto rounded-full"
            />
          </div>
          <button
            className="sm:hidden hover:bg-blue-300 w-6 rounded-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-blue-500">
              Accueil
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              À Propos
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              Boutique
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              Actualités
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              Galerie
            </a>
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                className="bg-yellow-300 hover:bg-yellow-400 "
              >
                Faire un Don
              </Button>
              <Button
                variant="outline"
                className="hover:bg-blue-300 bg-transparent border-blue-300 text-blue-400"
              >
                Rejoignez-nous
              </Button>
            </div>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-0 h-full w-64 z-20 bg-blue-200 p-4 rounded-l-xl bg-opacity-60 backdrop-blur">
          <button
            className="absolute top-0 right-0 m-4 hover:bg-blue-200 w-6 rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className="flex flex-col items-center space-y-4 mt-16">
            <a href="#" className="text-white hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              About
            </a>
            <Button
              variant="secondary"
              className="bg-yellow-300 hover:bg-yellow-400"
            >
              Faire un Don
            </Button>
            <Button
              variant="outline"
              className="hover:bg-blue-300 bg-transparent border-blue-300 text-blue-400"
            >
              Rejoignez-nous
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
