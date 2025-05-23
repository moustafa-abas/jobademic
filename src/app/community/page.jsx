"use client"
import React from "react";
import Post from "../components/Post";
import SendPost from "../components/SendPost";
import Image from "next/image";
 import company from '../assets/course3.jpg'
 import me from '../assets/me.jpg'
const page = () => {

  return (
 
    <div className=" pt-4 relative mb-10">

    <div className="Container flex  gap-5 ">
      <aside className="hidden lg:block w-1/4 border rounded h-fit p-3 border-gray-800 shadow-lg shadow-gray-800">
      <h1 className="text-2xl mb-6">Some jobs for you : </h1>
      <div className="flex gap-4 items-center mb-5 border-b pb-2 border-gray-800 last-of-type:border-none">
<Image src={company} alt="" className="w-12 h-12 rounded-full" />
<hgroup className="tracking-tight leading-tight">
<h2 className="text-[var(--main-color)]">Junior Digtal Designer</h2>
<p className="text-[var(--second-color)]">Sarayaher</p>
<p className="text-gray-500">Cairo, Egypt, (on site), Part Time</p>
</hgroup>
      </div>
      <div className="flex gap-4 items-center mb-5 border-b pb-2 border-gray-800 last-of-type:border-none">
<Image src={company} alt="" className="w-12 h-12 rounded-full" />
<hgroup className="tracking-tight leading-tight">
<h2 className="text-[var(--main-color)]">Junior Digtal Designer</h2>
<p className="text-[var(--second-color)]">Sarayaher</p>
<p className="text-gray-500">Cairo, Egypt, (on site), Part Time</p>
</hgroup>
      </div>
      <div className="flex gap-4 items-center mb-5 border-b pb-2 border-gray-800 last-of-type:border-none">
<Image src={company} alt="" className="w-12 h-12 rounded-full" />
<hgroup className="tracking-tight leading-tight">
<h2 className="text-[var(--main-color)]">Junior Digtal Designer</h2>
<p className="text-[var(--second-color)]">Sarayaher</p>
<p className="text-gray-500">Cairo, Egypt, (on site), Part Time</p>
</hgroup>
      </div>

<a href="/jobs" className="underline text-[var(--main-color)] flex items-center gap-1 text-sm">See More jobs <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none">
  <path d="M10 4L6 8L2 4" stroke={`var(--main-color)`} strokeLinecap="round" strokeLinejoin="round" />
</svg></a>
      </aside>
      <main className="w-full sm:w-3/4 lg:w-1/2  ">
      <SendPost/>
      <Post/>
      <Post/>
      <Post/>
      </main>
      <aside className="hidden sm:block w-1/4 border rounded h-fit p-3 border-gray-800 shadow-lg shadow-gray-800 ">
     <div className="relative mb-28">

      <Image src={company} alt=" profile cover" className="h-36 w-full rounded object-center  "/>
      <Image src={me} alt=" profile cover" className="absolute -bottom-1/2 w-28 h-28 rounded-full left-1/2 -translate-x-1/2 border-4"/>
     </div>
     <hgroup className="text-center">
      <h1 className="text-xl">Mostafa Abas        </h1>
      <p className="text-sm text-gray-500">email@gmail.com</p>
     </hgroup>
      </aside>
    </div>
    
  </div>
  );
};

export default page;
