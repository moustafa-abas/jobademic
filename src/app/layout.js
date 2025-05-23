"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
      >

        {pathname.startsWith('/register')||pathname.startsWith('/sign')?
        null:<Nav/>
        }
            {children}
        {pathname.startsWith('/register')||pathname.startsWith('/sign')?
        null:<Footer/>
        }
            </body>
    </html>
  );
}
