"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { useStore } from "./store/store";
import Loading from "./components/Loading";
import Process from "./components/Process";

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
  const {loading ,error}=useStore()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white relative z-10`}
      >

        {pathname.startsWith('/register')||pathname.startsWith('/sign')?
null:<Nav/>
}
  {children}
{pathname.startsWith('/register')||pathname.startsWith('/sign')?
null:<Footer/>
}

        {
          loading?
          <Loading/>
          :null
        }
        {
          error===''?
          null:
          <Process/>
        }
            </body>
    </html>
  );
}
