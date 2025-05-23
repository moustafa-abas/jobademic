"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const page = () => {
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm();
      const onSubmit=(data)=>{
        console.log(data)
      }
  return (

        <form className='w-full sm:w-2/3 lg:w-1/3 Container mx-auto pt-3 lg:pt-10' onSubmit={handleSubmit(onSubmit)}
              >

        <h1 className='text-3xl font-semibold  text-center'>Log in now</h1>
        <div className="    h-12  mt-8  border-b  ">
            <input id="email" name="email"  autoComplete="email" type='email' placeholder='name@example.com' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent" 
         {...register("email", {
            required: "* Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}                
             />

        </div>
        <p className='capitalize ms-1 mt-1 mb-3'>{errors.email?.message}</p>     
          <div className=" flex items-center  h-12  mt-8   border-b ">
                    <input id="password" name="password" type={showPass ? "text" : "password"} autoComplete="password" placeholder='password' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent " 
                    {...register('password',{required:'* password is required',
                        minLength:{
                            value:8,
                            message: "* password should be at least 8 characters",
                        },
                        maxLength:{
                            value:20,
                            message: "* password can't be more than 20 characters",
                        }
                    })}
                        
                     />
                                  <svg xmlns="http://www.w3.org/2000/svg"  className='cursor-pointer me-3'                 onClick={()=>setShowPass(!showPass)}
 width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.41998 13.98 8.41998 12C8.41998 10.02 10.02 8.42001 12 8.42001C13.98 8.42001 15.58 10.02 15.58 12Z" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47003 3.72 5.18003 5.8 2.89003 9.4C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
</svg>
                </div>
                <p className='capitalize ms-1 mt-1 mb-3'>{errors.password?.message}</p>
                {/* <p className='capitalize ms-1 mt-1 mb-3'>{errors.password?.message}</p> */}

        <a href='#' className='   flex justify-end text-[var(--main-color)] '>Forget Password ?</a>
                

         <button type='submit' className='w-full mt-5 h-12  bg-btn '>Log in</button>
         <div className='flex items-center  justify-center sm:justify-between my-5'>
         <svg xmlns="http://www.w3.org/2000/svg" width="180" height="2" viewBox="0 0 180 2" fill="none" className='hidden sm:block'>
  <path d="M180 1.00002L0 0.999985" stroke="#565656" strokeopacity="0.37" />
</svg>

Or login with
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="2" viewBox="0 0 180 2" fill="none" className='hidden sm:block'>
  <path d="M180 1.00002L0 0.999985" stroke="#565656" strokeopacity="0.37" />
</svg>
         </div>
         <button className='flex items-center justify-center gap-5 w-full border h-12 rounded mt-8'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_153_5578)">
    <mask id="mask0_153_5578" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M23.7209 9.81818H12.2791V14.4545H18.8651C18.2512 17.4 15.6837 19.0909 12.2791 19.0909C8.26047 19.0909 5.02326 15.9273 5.02326 12C5.02326 8.07273 8.26047 4.90909 12.2791 4.90909C14.0093 4.90909 15.5721 5.50909 16.8 6.49091L20.3721 3C18.1953 1.14545 15.4047 0 12.2791 0C5.46977 0 0 5.34545 0 12C0 18.6545 5.46977 24 12.2791 24C18.4186 24 24 19.6364 24 12C24 11.2909 23.8884 10.5273 23.7209 9.81818Z" fill="white" />
    </mask>
    <g mask="url(#mask0_153_5578)">
      <path d="M-1.11621 19.0909V4.90906L8.37216 12L-1.11621 19.0909Z" fill="#FBBC05" />
    </g>
    <mask id="mask1_153_5578" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M23.7209 9.81818H12.2791V14.4545H18.8651C18.2512 17.4 15.6837 19.0909 12.2791 19.0909C8.26047 19.0909 5.02326 15.9273 5.02326 12C5.02326 8.07273 8.26047 4.90909 12.2791 4.90909C14.0093 4.90909 15.5721 5.50909 16.8 6.49091L20.3721 3C18.1953 1.14545 15.4047 0 12.2791 0C5.46977 0 0 5.34545 0 12C0 18.6545 5.46977 24 12.2791 24C18.4186 24 24 19.6364 24 12C24 11.2909 23.8884 10.5273 23.7209 9.81818Z" fill="white" />
    </mask>
    <g mask="url(#mask1_153_5578)">
      <path d="M-1.11621 4.90906L8.37216 12L12.2791 8.67269L25.6745 6.54542V-1.09094H-1.11621V4.90906Z" fill="#EA4335" />
    </g>
    <mask id="mask2_153_5578" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M23.7209 9.81818H12.2791V14.4545H18.8651C18.2512 17.4 15.6837 19.0909 12.2791 19.0909C8.26047 19.0909 5.02326 15.9273 5.02326 12C5.02326 8.07273 8.26047 4.90909 12.2791 4.90909C14.0093 4.90909 15.5721 5.50909 16.8 6.49091L20.3721 3C18.1953 1.14545 15.4047 0 12.2791 0C5.46977 0 0 5.34545 0 12C0 18.6545 5.46977 24 12.2791 24C18.4186 24 24 19.6364 24 12C24 11.2909 23.8884 10.5273 23.7209 9.81818Z" fill="white" />
    </mask>
    <g mask="url(#mask2_153_5578)">
      <path d="M-1.11621 19.0909L15.628 6.54542L20.0373 7.09088L25.6745 -1.09094V25.0909H-1.11621V19.0909Z" fill="#34A853" />
    </g>
    <mask id="mask3_153_5578" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <path d="M23.7209 9.81818H12.2791V14.4545H18.8651C18.2512 17.4 15.6837 19.0909 12.2791 19.0909C8.26047 19.0909 5.02326 15.9273 5.02326 12C5.02326 8.07273 8.26047 4.90909 12.2791 4.90909C14.0093 4.90909 15.5721 5.50909 16.8 6.49091L20.3721 3C18.1953 1.14545 15.4047 0 12.2791 0C5.46977 0 0 5.34545 0 12C0 18.6545 5.46977 24 12.2791 24C18.4186 24 24 19.6364 24 12C24 11.2909 23.8884 10.5273 23.7209 9.81818Z" fill="white" />
    </mask>
    <g mask="url(#mask3_153_5578)">
      <path d="M25.6744 25.0909L8.37208 12L6.13953 10.3636L25.6744 4.90906V25.0909Z" fill="#4285F4" />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_153_5578">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
Log in using Google</button>
         <button className='flex items-center justify-center gap-5 w-full border h-12 rounded mt-8'>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
  <path d="M20.0736 13.6943C20.0617 11.571 21.0555 9.9684 23.0672 8.78816C21.9416 7.23186 20.2413 6.37561 17.9961 6.20783C15.8707 6.04584 13.5477 7.40543 12.6976 7.40543C11.7995 7.40543 9.73997 6.26569 8.12346 6.26569C4.78269 6.31776 1.23236 8.84023 1.23236 13.972C1.23236 15.4878 1.51974 17.0537 2.0945 18.6698C2.86084 20.7931 5.62686 26 8.51262 25.9132C10.0214 25.8785 11.0871 24.8776 13.0508 24.8776C14.9547 24.8776 15.9426 25.9132 17.6249 25.9132C20.5346 25.8727 23.0372 21.1402 23.7676 19.0111C19.8641 17.235 20.0736 13.8042 20.0736 13.6943ZM16.685 4.19448C18.3194 2.31998 18.1697 0.613262 18.1218 0C16.679 0.0809969 15.0086 0.948821 14.0566 2.01914C13.0089 3.16466 12.3922 4.58211 12.5239 6.17891C14.0866 6.29461 15.5115 5.51936 16.685 4.19448Z" fill="#090F24" />
</svg>
Log in using Apple</button>
<h1 className='text-lg  text-center mt-5 capitalize'>new in Jobademic ? <a href='/register/sign' className='underline  text-[var(--main-color)]'>New registration</a></h1>

        </form>
  )
}

export default page
