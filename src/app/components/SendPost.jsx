"use client"
import React from 'react'
import user from'../assets/me.jpg'
import Image from 'next/image'
import { useStore } from '../store/store'
import CommunityFlow from './PostsFlow'
import PostsFlow from './PostsFlow'


const SendPost = () => {
  const { handleOpen,alert} = useStore()
  return (
    <div className="head mb-6 ">
    <div className="flex items-center gap-4 mb-4 pt-3 ps-3">
        <Image src={user} alt="user" className="rounded-full"  width={50} height={50} />
        <h5
        className="text-gray-500 "
            onClick={()=>{handleOpen('create post') }}
        >
        What do you want to talk about?
        </h5>
    </div>
    <ul className="flex justify-between border-y  border-gray-600">
        <li className="flex w-1/3 h-12 hover:bg-gray-700 duration-300 justify-center items-center  gap-2 cursor-pointer ">
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2.25 15.75L7.409 10.591C7.61793 10.3821 7.86597 10.2163 8.13896 10.1033C8.41194 9.99018 8.70452 9.93198 9 9.93198C9.29548 9.93198 9.58806 9.99018 9.86104 10.1033C10.134 10.2163 10.3821 10.3821 10.591 10.591L15.75 15.75M14.25 14.25L15.659 12.841C15.8679 12.6321 16.116 12.4663 16.389 12.3533C16.6619 12.2402 16.9545 12.182 17.25 12.182C17.5455 12.182 17.8381 12.2402 18.111 12.3533C18.384 12.4663 18.6321 12.6321 18.841 12.841L21.75 15.75M3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V6C21.75 5.60218 21.592 5.22064 21.3107 4.93934C21.0294 4.65804 20.6478 4.5 20.25 4.5H3.75C3.35218 4.5 2.97064 4.65804 2.68934 4.93934C2.40804 5.22064 2.25 5.60218 2.25 6V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5ZM14.25 8.25H14.258V8.258H14.25V8.25ZM14.625 8.25C14.625 8.34946 14.5855 8.44484 14.5152 8.51517C14.4448 8.58549 14.3495 8.625 14.25 8.625C14.1505 8.625 14.0552 8.58549 13.9848 8.51517C13.9145 8.44484 13.875 8.34946 13.875 8.25C13.875 8.15054 13.9145 8.05516 13.9848 7.98484C14.0552 7.91451 14.1505 7.875 14.25 7.875C14.3495 7.875 14.4448 7.91451 14.5152 7.98484C14.5855 8.05516 14.625 8.15054 14.625 8.25Z" stroke="var(--main-color)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
</svg> Photo 
        </li>
        <li className="flex w-1/3 h-12 hover:bg-gray-700 duration-300 justify-center items-center  gap-2 cursor-pointer border-x border-gray-600">
        <svg  width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M22.5 8L16.5 12L22.5 16V8Z" stroke="var(--main-color)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M14.5 6H4.5C3.39543 6 2.5 6.89543 2.5 8V16C2.5 17.1046 3.39543 18 4.5 18H14.5C15.6046 18 16.5 17.1046 16.5 16V8C16.5 6.89543 15.6046 6 14.5 6Z" stroke="var(--main-color)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg> 
        Video
        </li>
        <li className="flex w-1/3 h-12 hover:bg-gray-700 duration-300 justify-center items-center  gap-2 cursor-pointer">
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.728 3H7.5C6.90326 3 6.33097 3.23705 5.90901 3.65901C5.48705 4.08097 5.25 4.65326 5.25 5.25V18.75C5.25 19.3467 5.48705 19.919 5.90901 20.341C6.33097 20.7629 6.90326 21 7.5 21H16.5C17.0967 21 17.669 20.7629 18.091 20.341C18.5129 19.919 18.75 19.3467 18.75 18.75V12M9.728 3C10.971 3 12 4.007 12 5.25V7.5C12 8.09674 12.2371 8.66903 12.659 9.09099C13.081 9.51295 13.6533 9.75 14.25 9.75H16.5C17.0967 9.75 17.669 9.98705 18.091 10.409C18.5129 10.831 18.75 11.4033 18.75 12M9.728 3C13.418 3 18.75 8.36 18.75 12" stroke="var(--main-color)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
</svg>        File
        </li>

    </ul>
    {
alert==='create post'?
      <PostsFlow/>:null
    }
  
    </div>
  )
}

export default SendPost
