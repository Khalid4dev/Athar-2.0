import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/AboutUs" },
    { name: "Actualités", href: "/participer" },
    { name: "Boutique", href: "/boutique" },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar navItems={navItems} />
        {children}
        <Footer navItems={navItems} />
      </body>
    </html>
  );
}
