import React, { ReactNode } from "react";
import NavBar from "./navbar"; // adjust the path as needed
import Footer from "./footer"; // adjust the path as needed

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    { name: "Accueil", href: "/accueil" },
    { name: "À Propos", href: "/à-propos" },
    { name: "Actualités", href: "/actualites" },
    { name: "Boutique", href: "/boutique" },
    // Add more items as needed
  ];

  return (
    <>
      <NavBar navItems={navItems} />
      {children}
      <Footer navItems={navItems} />
    </>
  );
};

export default Layout;