"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 z-10 w-full flex items-center justify-center px-4 md:px-8 lg:px-16">
        <nav className="flex items-center justify-between p-4 bg-blue-200 backdrop-blur bg-opacity-60 text-white rounded-3xl mx-auto w-full max-w-screen-xl  ">
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
            className="md:hidden hover:bg-blue-200 w-6 rounded-sm "
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-500"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                className="bg-yellow-300 hover:bg-yellow-400 "
              >
                Faire un Don
              </Button>
              <Link 
                key="Rejoignez-nous"
                href="/participer#JoinUs"
              >
                <Button
                  variant="outline"
                  className="hover:bg-blue-300 bg-white hover:border-blue-300  text-blue-400 "
                >
                  Rejoignez-nous
                </Button>
              </Link>
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
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-200"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="secondary"
              className="bg-yellow-300 hover:bg-yellow-400"
            >
              Faire un Don
            </Button>
            <Button
              variant="outline"
              className="hover:bg-blue-300 bg-white hover:border-blue-300  text-blue-400 "
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
