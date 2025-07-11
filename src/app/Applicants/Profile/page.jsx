"use client"
import Image from 'next/image'
import React from 'react'
import img from'../../assets/me.jpg'
import { useStore } from '@/app/store/store'
import { selectApplicant } from '@/app/Functions'
const page = () => {
  const {applicant}=useStore()
  console.log(applicant)
  return (
    <div className='Container  flex  flex-col items-center pt-5 '>
          {applicant?.user?.profile_picture ? (
                    <Image
                      src={`http://localhost:8000/${applicant?.user?.profile_picture}`}
                      width={100}
                      height={100}
                      alt="user"
                      className="rounded-full w-60 h-60 "

                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 46 46"
                      fill="none"
                                            className="rounded-full w-80"

                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.875 10.5C12.875 7.84784 13.9286 5.3043 15.8039 3.42893C17.6793 1.55357 20.2228 0.5 22.875 0.5C25.5272 0.5 28.0707 1.55357 29.9461 3.42893C31.8214 5.3043 32.875 7.84784 32.875 10.5C32.875 13.1522 31.8214 15.6957 29.9461 17.5711C28.0707 19.4464 25.5272 20.5 22.875 20.5C20.2228 20.5 17.6793 19.4464 15.8039 17.5711C13.9286 15.6957 12.875 13.1522 12.875 10.5ZM12.875 25.5C9.55979 25.5 6.38037 26.817 4.03617 29.1612C1.69196 31.5054 0.375 34.6848 0.375 38C0.375 39.9891 1.16518 41.8968 2.5717 43.3033C3.97822 44.7098 5.88588 45.5 7.875 45.5H37.875C39.8641 45.5 41.7718 44.7098 43.1783 43.3033C44.5848 41.8968 45.375 39.9891 45.375 38C45.375 34.6848 44.058 31.5054 41.7138 29.1612C39.3696 26.817 36.1902 25.5 32.875 25.5H12.875Z"
                        fill="#626262"
                      />
                    </svg>
                  )}
                    <hgroup className='flex flex-col items-center mt-8'>
    <h1 className='text-2xl font-semibold'>{applicant?.user?.name}</h1>
    <p className='flex  items-center gap-2 mt-4'> {applicant?.user?.email}</p>

  </hgroup>
  <div className='flex gap-14 mt-10'>
    <button className=' border-green-600 text-green-600 border w-32 h-10 rounded-full' onClick={()=>selectApplicant('accepted')}>Accept</button>
    <button className=' border-red-600 text-red-600 border w-32 h-10 rounded-full' onClick={()=>selectApplicant('rejected')}>Reject</button>
  </div>
      <p className='mt-10 flex  items-center gap-2 text-xl'>Resume Link Here :

    <a href={applicant?.resume_url} target='_blank' className='cursor-pointer'> <span className='text-[var(--main-color)] '>{applicant?.resume_url} </span></a>
    </p>
  </div>
  )
}

export default page
