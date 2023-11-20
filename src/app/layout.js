"use client"
import "./styles/reset.css";
import "./Main.scss"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

import Splash from "./components/Splash"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)


  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  return (
    <html lang="en">
      <body className="Body">
      {isLoading && isHome ? (
        <Splash/>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}



      </body>
    </html>
  );
}
