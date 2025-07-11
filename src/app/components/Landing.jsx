import React from 'react'
import Image from 'next/image'
import landing from '../assets/landing.png'

const Landing = () => {
  return (
<section className="Container flex sm:flex-row flex-col-reverse h-screen justify-between items-center ">
        <main className=" sm:w-1/2">
        <hgroup>
          <h1 className="text-6xl font-semibold tracking-wide">Learn and find job in <span className="text-[var(--main-color)]"> one platform</span></h1>
        <p className="mt-5 text-xl text-gray-500">With Jobademic you can get courses and get offers for work very easily.</p>
        </hgroup>
        </main>
       <aside className="sm:w-1/2">
        <Image src={landing} alt="landing" className='w-full'/>
       </aside>
    </section>
  )
}

export default Landing
