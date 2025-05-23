'use client'
import React from 'react'
import Image from 'next/image'
import job_details from '../../assets/job details.svg'
import Job_form from '../../components/Job_form'
import { useStore } from '../../store/store'

const page = () => {
    const { handleOpen,setAlert} = useStore()
  
  return (
    <div className='relative'>
<section className="Container flex gap-5 sm:flex-row flex-col-reverse justify-between items-center  ">
          {/* <h1 className="text-5xl font-semibold tracking-wide text-center mb-24">Job<span className="text-[var(--main-color)]"> Details</span> </h1> */}

        <main className=" sm:w-1/2">
        <hgroup className='mb-12'>
          <h1 className="text-2xl sm:text-5xl font-semibold  text-[var(--main-color)]"> Junior Graphic Designer </h1>
        <p className="mt-5 sm:text-lg text-gray-500">4 weeks ago • Over 200 applicants 9 connections</p>
        <p className="mt-5 text-lg text-gray-400 flex items-center gap-3  "><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none">
  <path d="M16.7143 3.85742C21.1472 3.85742 25.3985 5.61839 28.5331 8.75292C31.6676 11.8875 33.4286 16.1388 33.4286 20.5717C33.4286 27.6346 28.4657 35.3317 18.6686 43.7454C18.1238 44.2134 17.4292 44.4704 16.7111 44.4698C15.9929 44.4692 15.2988 44.2109 14.7549 43.742L14.1069 43.1797C4.74343 34.9854 0 27.4768 0 20.5717C0 16.1388 1.76096 11.8875 4.8955 8.75292C8.03004 5.61839 12.2814 3.85742 16.7143 3.85742ZM16.7143 6.42885C12.9634 6.42885 9.36608 7.9189 6.71378 10.5712C4.06148 13.2235 2.57143 16.8208 2.57143 20.5717C2.57143 26.5751 6.93943 33.4923 15.7954 41.2408L16.4349 41.7946C16.5126 41.8614 16.6117 41.8982 16.7143 41.8982C16.8168 41.8982 16.916 41.8614 16.9937 41.7946C26.2783 33.8197 30.8571 26.7174 30.8571 20.5717C30.8571 18.7144 30.4913 16.8754 29.7806 15.1595C29.0698 13.4436 28.0281 11.8845 26.7148 10.5712C25.4015 9.25791 23.8424 8.21616 22.1265 7.50541C20.4106 6.79467 18.5716 6.42885 16.7143 6.42885ZM16.7143 14.1431C18.4193 14.1431 20.0544 14.8204 21.26 16.026C22.4656 17.2316 23.1429 18.8667 23.1429 20.5717C23.1429 22.2767 22.4656 23.9118 21.26 25.1174C20.0544 26.323 18.4193 27.0003 16.7143 27.0003C15.0093 27.0003 13.3742 26.323 12.1686 25.1174C10.963 23.9118 10.2857 22.2767 10.2857 20.5717C10.2857 18.8667 10.963 17.2316 12.1686 16.026C13.3742 14.8204 15.0093 14.1431 16.7143 14.1431ZM16.7143 16.7146C15.6913 16.7146 14.7102 17.1209 13.9869 17.8443C13.2635 18.5676 12.8571 19.5487 12.8571 20.5717C12.8571 21.5947 13.2635 22.5758 13.9869 23.2991C14.7102 24.0225 15.6913 24.4288 16.7143 24.4288C17.7373 24.4288 18.7183 24.0225 19.4417 23.2991C20.1651 22.5758 20.5714 21.5947 20.5714 20.5717C20.5714 19.5487 20.1651 18.5676 19.4417 17.8443C18.7183 17.1209 17.7373 16.7146 16.7143 16.7146Z" fill="gray" />
</svg>
Cairo , New Cairo , Egypt</p>
        <p className="mt-5 text-lg text-gray-400 flex items-center gap-3  "><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
  <path d="M16.25 25.6667C22.4632 25.6667 27.5 20.8164 27.5 14.8333C27.5 8.85025 22.4632 4 16.25 4C10.0368 4 5 8.85025 5 14.8333C5 20.8164 10.0368 25.6667 16.25 25.6667Z" stroke="#626262" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M8.78372 23.2004L8.76709 35.5004C8.76709 37.0004 9.8171 37.7337 11.1171 37.1171L15.5838 35.0004C15.9504 34.8171 16.5671 34.8171 16.9337 35.0004L21.4171 37.1171C22.7004 37.7171 23.7671 37.0004 23.7671 35.5004V22.9004" stroke="#626262" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
</svg>
1 year experience</p>
        <p className="mt-5 text-lg text-gray-400 flex items-center gap-3  "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="none">
  <path d="M22.667 27.3334H9.33366C5.33366 27.3334 2.66699 25.3334 2.66699 20.6667V11.3334C2.66699 6.66675 5.33366 4.66675 9.33366 4.66675H22.667C26.667 4.66675 29.3337 6.66675 29.3337 11.3334V20.6667C29.3337 25.3334 26.667 27.3334 22.667 27.3334Z" stroke="#626262" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="#626262" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M7.33301 12.6665V19.3332" stroke="#626262" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M24.667 12.6665V19.3332" stroke="#626262" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
</svg>
1500$ monthly</p>
        </hgroup>
        

        </main>
       <aside className="sm:w-1/2">
        <Image src={job_details} alt="banner" className='w-full'/>
       </aside>
    </section>
    <section className='Container flex flex-col' id='details'>
<hgroup className='my-10  md:w-1/2 '>
  <h1 className='text-2xl  sm:text-4xl text-[var(--main-color)]'>About Job :</h1>
  <p className='  sm:text-lg mt-6 text-gray-400 '>Hello everyone looking for a challenger graphic designer unleash your protentional with one of the biggest companies in Egypt join us now and be one of the company employees “” Graphic Designer “”</p>
</hgroup>
<hgroup className='my-10  md:w-1/2'>
  <h1 className='text-2xl sm:text-4xl text-[var(--main-color)]'>Job Summary :</h1>
  <p className=' sm:text-lg mt-6 text-gray-400 '>As a Graphic Designer, you will be responsible for creating visual concepts and designs to communicate ideas that inspire, inform, or captivate our target audience. You will collaborate with various teams to understand project requirements and translate them into compelling visual solutions. Your creativity, attention to detail, and proficiency in design software will be crucial in producing high-quality graphics across various mediums.</p>
</hgroup>
<hgroup className='my-10 '>
  <h1 className='text-2xl sm:text-4xl text-[var(--main-color)]'>Job Requirements :</h1>
  <ul className=' sm:text-lg mt-6   flex flex-col gap-4 list-disc list-inside' >
    <li className='text-gray-400'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error itaque quaerat quas quisquam nulla non fugit voluptatum? Quisquam, maiores.
    </li>
    <li className='text-gray-400'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error itaque quaerat quas quisquam nulla non fugit voluptatum? Quisquam, maiores.
    </li>
    <li className='text-gray-400'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error itaque quaerat quas quisquam nulla non fugit voluptatum? Quisquam, maiores.
    </li>
    <li className='text-gray-400'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error itaque quaerat quas quisquam nulla non fugit voluptatum? Quisquam, maiores.
    </li>

  </ul>
</hgroup>
  <hgroup className='my-10  sm:w-3/4'>
  <h1 className='text-2xl sm:text-4xl text-[var(--main-color)]'>About the company :</h1>
  <p className=' sm:text-lg mt-6 text-gray-400 '>At Innova Hub , we are at the forefront of software innovation, dedicated to creating cutting-edge solutions that transform industries. As we continue to push boundaries, we recognize the crucial role that design plays in communicating our brand and product vision.</p>
</hgroup>
<button className='bg-btn w-3/4 sm:w-1/2 lg:w-1/4 my-4 mx-auto h-12' onClick={()=>handleOpen()} >Apply</button>
<a href='/jobs/all' className='border-btn w-3/4 sm:w-1/2 lg:w-1/4 my-4 mx-auto h-12 flex justify-center items-center'>View All Jobs</a>
<button className='bg-btn w-3/4 sm:w-1/2 lg:w-1/4 my-4 mx-auto h-12'> Save This Job</button>
    </section>
    <Job_form/>
    </div>
  )
}

export default page
