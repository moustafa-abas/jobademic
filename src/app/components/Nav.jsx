"use client"
import { useStore } from "../store/store";
import logo from'../assets/logo.jpg'
import Image from "next/image";
import user from'../assets/me.jpg'
import {  useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const isLogined = useStore((state) => state.logined)
const [openMenu, setOpenMenu] = useState(false);
const pathname = usePathname();
  return (
<header className="sticky top-0 Container">
  <nav className="mx-auto flex  items-center justify-between p-6 " aria-label="Global">
    <div className="flex ">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image className="h-8 w-full" src={logo} alt="logo"  />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button onClick={()=>setOpenMenu(true)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    {isLogined?
    <form className="  none sm:flex items-center mx-10  " role="search">
        <input className="form-control p-2 w-fit focus:outline-none border border-gray-500 rounded-full " type="search" placeholder="Search for products..." aria-label="Search" autoComplete='true'/>
        </form>:null
}
    <div className="hidden lg:flex lg:gap-x-12">


      <a href="/" className={`text-sm/6 font-semibold capitalize ${pathname==('/')?'border-b-2  border-[var(--main-color)] text-[var(--main-color)]':' hover:bg-[var(--main-color)] hover:text-white rounded-xl'} duration-300 w-24 h-10 flex items-center justify-center  ` }>Home</a>
      <a href="/community" className={`text-sm/6 font-semibold capitalize ${pathname.startsWith('/community')?'border-b-2 border-[var(--main-color)] text-[var(--main-color)]':' hover:bg-[var(--main-color)] hover:text-white rounded-xl'} duration-300 w-24 h-10 flex items-center justify-center  ` }>Community</a>
      <a href="/jobs" className={`text-sm/6 font-semibold capitalize ${pathname.startsWith('/jobs')?'border-b-2 border-[var(--main-color)] text-[var(--main-color)]':' hover:bg-[var(--main-color)] hover:text-white rounded-xl'} duration-300 w-24 h-10 flex items-center justify-center  ` }>Jobs</a>
      <a href="/courses" className={`text-sm/6 font-semibold capitalize ${pathname.startsWith('/courses')?'border-b-2 border-[var(--main-color)] text-[var(--main-color)]':' hover:bg-[var(--main-color)] hover:text-white rounded-xl'} duration-300 w-24 h-10 flex items-center justify-center  ` }>courses</a>
    </div>

    <div className="relative hidden lg:flex  lg:justify-end gap-5 ">
       {isLogined?
        <button type="button"  aria-expanded="false">
        <a href="/profile" className="w-full  ">

        <Image src={user} alt="user" className="rounded-full w-8"/>
        </a>

        </button>
       :<>
        <button type="button" className=" border-btn w-20 flex h-8  justify-center capitalize items-center gap-x-1 text-sm/6 font-semibold " aria-expanded="false">
        <a href="/register/login" className="w-full  ">

        log in 
        </a>

        </button>
            <button type="button" className="border-bg flex  w-20 h-8  capitalize  justify-center items-center gap-x-1 text-sm/6 font-semibold " aria-expanded="false">
            <a href="/register/sign" className="w-full  ">

            sign up
            </a>
        </button></>
}
      </div>
  </nav>




  { /* Mobile menu, show/hide based on menu open state. */ }
{openMenu?
  <div className="lg:hidden" role="dialog" aria-modal="true">
    { /* Background backdrop, show/hide based on slide-over state. */ }
    <div className="fixed inset-0 z-10" />
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex  items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src={logo} alt="logo" />
        </a>
        <button onClick={()=>setOpenMenu(false)} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
      <a href="/" className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${pathname.startsWith('/')?'  bg-[var(--main-color)] text-white rounded':'text-gray-900 '}` }>Home</a>
      <a href="/community" className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${pathname.startsWith('/community')?'  bg-[var(--main-color)] text-white rounded':'text-gray-900 '}` }>community</a>
      <a href="/jobs" className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${pathname.startsWith('/jobs')?'  bg-[var(--main-color)] text-white rounded':'text-gray-900 '}` }>jobs</a>
      <a href="/courses" className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold capitalize ${pathname.startsWith('/courses')?'  bg-[var(--main-color)] text-white rounded':'text-gray-900 '}` }>courses</a>
           
          </div>
          <div className="py-6">
            <a href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 capitalize ">Log in</a>
            <a href="/sign" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 capitalize ">sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>:null
}
</header>
  )
}

export default Nav
