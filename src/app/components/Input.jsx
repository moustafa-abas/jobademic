"use client"
import React from 'react'
import email from "../assets/fluent_mail-24-regular.svg";
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const Input = () => {
const{register,formState:{errors}}=useForm()
       return (
<>
          <div className=" flex items-center  h-12  mt-2 relative  border rounded border-gray-300">
            <input id="email" name="email" type="name" autoComplete="email" placeholder='name@example.com' className="block relative w-full h-full  rounded-xl   px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none" 
            {...register('email',{required:'email is required'})}
                
             />
          <label htmlFor="email" className="absolute left-3 -top-3 placeholder:ms-7 bg-white px-2 text-sm/6 font-medium text-gray-900">Email</label>
        </div>
        <p className='capitalize ms-1 text-red-700 mt-1'>{errors.email?.message}</p>
        </>
  )
}

export default Input
