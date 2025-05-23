import React from 'react'
import Image from 'next/image'
import landing from '../assets/jobs.svg'

const Jobs_landing = () => {
  return (
<section className="Container flex sm:flex-row flex-col-reverse justify-between items-center ">
        <main className=" sm:w-1/2">
        <hgroup>
          <h1 className="text-6xl font-semibold tracking-wide">Find The Best Job That You Deserved</h1>
        <p className="mt-5 text-xl text-gray-500">Visit our website to learn and achieve new Jobs that meet's your Requirements in different Careers.</p>
        </hgroup>
        <button className='bg-btn w-44 h-12 mt-8'>View Jobs</button>

        </main>
       <aside className="sm:w-1/2">
        <Image src={landing} alt="" className='w-full'/>
       </aside>
    </section>
  )
}

export default Jobs_landing
