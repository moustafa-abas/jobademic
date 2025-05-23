"use client"
import React, { useState } from 'react'
import logo from'../assets/me.jpg'
import Image from 'next/image'
const Job = () => {
      const [saved, setSaved] = useState(false);
    
  return (
    <section className="  flex flex-col  justify-between  gap-4 mb-6 bg-gray-700 p-4   rounded-xl relative ">
    <svg width="30" height="36" viewBox="0 0 16 20" fill={`${saved ? 'var(--main-color)' : 'none'}`}  className=' absolute right-10 top-10 cursor-pointer '>
                      <path d="M13 1.18506H3C2.46957 1.18506 1.96086 1.39577 1.58579 1.77084C1.21071 2.14592 1 2.65463 1 3.18506V18.3231C1.00003 18.4106 1.02305 18.4966 1.06676 18.5725C1.11047 18.6484 1.17334 18.7114 1.24907 18.7554C1.32481 18.7993 1.41075 18.8226 1.49831 18.8229C1.58587 18.8232 1.67197 18.8005 1.748 18.7571L7.008 15.7521C7.31013 15.5795 7.65205 15.4887 8 15.4887C8.34795 15.4887 8.68987 15.5795 8.992 15.7521L14.252 18.7581C14.3281 18.8015 14.4143 18.8242 14.5019 18.8239C14.5896 18.8236 14.6756 18.8002 14.7514 18.7561C14.8271 18.7121 14.89 18.6489 14.9336 18.5729C14.9773 18.4968 15.0001 18.4107 15 18.3231V3.18506C15 2.65463 14.7893 2.14592 14.4142 1.77084C14.0391 1.39577 13.5304 1.18506 13 1.18506Z" stroke={`${saved ? 'var(--main-color)' :' #848484'}`} strokelinecap="round" strokelinejoin="round" />
                    </svg>
    <main className="flex flex-col sm:flex-row  gap-5 mb-3">
        <Image
            src={logo}
            alt="logo"
            className=" rounded-full w-20 h-20"
        />

        <div >
        <h1 className="text-2xl  text-[var(--main-color)]">Junior UI/UX Designer</h1>
        <h2 className="text-lg  text-orange-500">Innova Hub</h2>
        <p className="text-gray-400 ">Cairo, Egypt, (on site), Part Time</p>
        </div>
    </main>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis corporis ad, fugit quis fugiat aspernatur explicabo? Totam, quia. Accusamus, tempora provident culpa excepturi sint nisi eligendi eum aspernatur cumque!</p>
    <aside className='flex  justify-between items-center sm:mx-12'>
        <p className='text-orange-500'>4 weeks ago</p>

        <button
        className="h-10 w-36 bg-btn"
        >
        Apply Now
        </button>
                    </aside>
    </section>
  )
}

export default Job
