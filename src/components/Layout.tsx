import React, { ReactNode } from "react";
import NavBar from "./navbar"; // Assuming you have a NavBar component
import Footer from "./footer"; // Assuming you have a Footer component
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
