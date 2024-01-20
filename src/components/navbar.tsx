"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

interface NavbarProps {
  navItems: NavItem[];
}


// ...

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div
      className="relative group"
      key={item.name}
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <Link
        key={item.name}
        href={item.href}
        className="flex items-center text-white hover:text-blue-200"
        onClick={(e) => {
          if (item.children) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {item.name}
        {item.children && (
          <FontAwesomeIcon
            icon={isDropdownVisible ? faChevronDown : faChevronRight}
            className="ml-1"
            style={{ fontSize: "0.75rem" }}
          />
        )}
      </Link>
      {isOpen && item.children && item.children.length > 0 && (
        <div className="submenu bg-blue-300 mt-2 rounded-md shadow-lg">
          {item.children.map((childItem) => (
            <Link
              key={childItem.name}
              href={childItem.href}
              className="block px-4 py-2 text-white hover:bg-blue-400 hover:text-white text-sm"
            >
              {childItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  return (
    <>
      <div className="top-4 z-10 w-full flex items-center justify-center px-4 md:px-8 lg:px-16 fixed">
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
            {navItems.map((item) => {
              const [isDropdownVisible, setIsDropdownVisible] = useState(false);

              return (
                <div
                  className="relative group"
                  key={item.name}
                  onMouseEnter={() => setIsDropdownVisible(true)}
                  onMouseLeave={() => setIsDropdownVisible(false)}
                >
                  <Link
                    className="text-white hover:text-blue-500"
                    href={item.href}
                  >
                    {item.name}
                    {item.children && (
                      <FontAwesomeIcon
                        icon={
                          isDropdownVisible ? faChevronDown : faChevronRight
                        }
                        className="ml-1"
                        style={{ fontSize: "0.75rem" }}
                      />
                    )}
                  </Link>
                  {item.children && (
                    <div className="absolute left-0 w-48 rounded-md shadow-lg bg-blue-200 backdrop-blur ring-1 ring-black ring-opacity-5 overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 delay-150 transition-delay-600">
                      {" "}
                      {item.children.map((child) => (
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-white"
                          href={child.href}
                          key={child.name}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center space-x-2">
              <Button
                variant="secondary"
                className="bg-yellow-300 hover:bg-yellow-400 "
              >
                Faire un Don
              </Button>
              <Link key="Rejoignez-nous" href="/participer#JoinUs">
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
              <MenuItem item={item} />
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
