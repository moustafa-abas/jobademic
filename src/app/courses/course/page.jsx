"use client"
import Course from '@/app/components/Course'
import { deleteCourse, getLessons } from '@/app/Functions'
import { useStore } from '@/app/store/store'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const page = () => {
  const{courses , course,lessons,user}=useStore()
    const [postOption, setPostOption] = useState(false);
  
  useEffect(() => {
  getLessons()
  }, [])
  return (
    <div className='Container flex justify-between gap-10'>
{user?.role==='instructor'?
          <div className="relative">
                <button
                  type="button"
                  onClick={() => setPostOption(!postOption)}
                  className={`flex justify-center md::bg-gray-400 ${
                    postOption ? "bg-slate-300" : null
                  } w-9 h-9 duration-300 rounded-full`}
                  aria-expanded="false"
                >
                  <svg width="8" height="32" viewBox="0 0 8 32" fill="none">
                    <path
                      d="M4.27134 7.76452C3.80891 7.76452 3.35101 7.67337 2.92378 7.49627C2.49655 7.31917 2.10836 7.0596 1.78138 6.73237C1.45439 6.40514 1.19501 6.01665 1.01805 5.5891C0.841083 5.16156 0.75 4.70331 0.75 4.24054C0.75 3.77776 0.841083 3.31951 1.01805 2.89197C1.19501 2.46442 1.45439 2.07594 1.78138 1.7487C2.10836 1.42147 2.49655 1.1619 2.92378 0.9848C3.35101 0.807703 3.80891 0.716553 4.27134 0.716553C5.20526 0.716553 6.10093 1.08783 6.76131 1.7487C7.42169 2.40958 7.79268 3.30592 7.79268 4.24054C7.79268 5.17515 7.42169 6.07149 6.76131 6.73237C6.10093 7.39324 5.20526 7.76452 4.27134 7.76452ZM4.27134 19.8467C3.33742 19.8467 2.44176 19.4755 1.78138 18.8146C1.121 18.1537 0.75 17.2574 0.75 16.3228C0.75 15.3881 1.121 14.4918 1.78138 13.8309C2.44176 13.1701 3.33742 12.7988 4.27134 12.7988C5.20526 12.7988 6.10093 13.1701 6.76131 13.8309C7.42169 14.4918 7.79268 15.3881 7.79268 16.3228C7.79268 17.2574 7.42169 18.1537 6.76131 18.8146C6.10093 19.4755 5.20526 19.8467 4.27134 19.8467ZM0.75 28.405C0.75 29.3396 1.121 30.2359 1.78138 30.8968C2.44176 31.5577 3.33742 31.929 4.27134 31.929C5.20526 31.929 6.10093 31.5577 6.76131 30.8968C7.42169 30.2359 7.79268 29.3396 7.79268 28.405C7.79268 27.4704 7.42169 26.574 6.76131 25.9132C6.10093 25.2523 5.20526 24.881 4.27134 24.881C3.33742 24.881 2.44176 25.2523 1.78138 25.9132C1.121 26.574 0.75 27.4704 0.75 28.405Z"
                      fill="#536471"
                    />
                  </svg>
                </button>
      
                {postOption ? (
                  <div className=" absolute left-8 -top-4 z-10 mt-5 flex w-screen max-w-max px-4  ">
                    <div className="  max-w-md flex-auto overflow-hidden rounded-xl  text-sm/6 shadow-lg  bg-gray-700  ring-1 ring-gray-900/5 ">
                      <div className="">
                        <div className="group relative flex items-center gap-x-3 rounded-lg p-4 hover:bg-gray-600 cursor-pointer duration-200" onClick={()=>deleteCourse()}>
      
                          <p className="  capitalize">delete this course</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              :null
}

        <section className='w-full mx-auto md:w-4/5'>
{/* 
      <Image src={`http://localhost:8000/${course?.thumbnail}`}   className='w-96 rounded-xl'
      width={100}
      height={100}/> */}
      <hgroup className='my-5 text-center'>
      <h1 className='text-4xl text-[var(--main-color)]'>{course?.title} </h1>
<p className='  text-lg mt-2 text-[var(--second-color)]'>{course?.description}</p>
      </hgroup>
   
      <hgroup className='flex gap-6 items-center my-6'> 
        <h2 className='bg-white text-[var(--second-color)] w-10 h-10 rounded-full flex justify-center items-center'>1</h2>
{/* <a href={lesson?.video_url} target='_blank' className='flex flex-col text-xl'>
<span className='text-[var(--main-color)]'>{lesson?.title}</span>
<span className='text-[var(--second-color)]'>{lesson?.content}</span>
</a> */}
      </hgroup>
        </section>
        <section className='w-1/5 hidden  md:block'>
        <h1 className='mb-6 text-xl'>Other Courses </h1>
        {
          courses?.sort(() => Math.random() - 0.5).slice(0,2).map((course)=>
            <Course data={course} key={course?.id}/>
          )
        }
        </section>
    </div>
  )
}

export default page
