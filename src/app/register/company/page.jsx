"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import profile from'../../assets/upload-image.svg'
import { companyRegister } from '@/app/Functions';
const page = () => {
    const [company_logo, setCompany_logo] = useState();
    const {
        register,
        handleSubmit,
        formState:{errors},
      } = useForm();
 
      const onSubmit=(data)=>{
        companyRegister(data)
      }
  return (

        <form className='w-full sm:w-2/3 lg:w-1/3 Container mx-auto  py-5 lg:pt-10' onSubmit={handleSubmit(onSubmit)}
              >

        <h1 className='text-3xl font-semibold  text-center capitalize'>company data</h1>

        <div className="     mt-8   ">
            <input id="company_logo" name="company_logo"   type='file' accept='image/*'  className="hidden  " 
      {...register("company_logo",{
            required: "* select your company logo",
        onChange:(e)=>
            setCompany_logo(URL.createObjectURL(e.target.files[0]))
      })}                
             />
             <label htmlFor="company_logo" className='cursor-pointer flex justify-center'>
              <Image src={company_logo?company_logo:profile} alt="user" width={100} height={100}  className={`${company_logo?'rounded-full':null} h-40 w-40 object-center object-cover`}/>
             </label>

        </div>
         <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.company_logo?.message}
      </p>

        <div className="    h-12  mt-8  border-b  ">
            <input id="company_name" name="company_name"  autoComplete="company_name" type='text' placeholder='company name' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent" 
         {...register("company_name", {
            required: "* company name is required"
        })}
            />

        </div>
        <p className='capitalize ms-1 mt-1 mb-3 text-red-600'>{errors.company_name?.message}</p>     

        <div className="    h-12  mt-3  border-b  ">
            <input id="industry" name="industry"  autoComplete="industry" type='text' placeholder='industry' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent" 
         {...register("industry", {
            required: "* industry  is required"
        })}
            />

        </div>
        <p className='capitalize ms-1 mt-1 mb-3 text-red-600'>{errors.industry?.message}</p>     

        <div className="   border-b  ">
  
<textarea rows={4} name="company_description" id="company_description" autoComplete="company_description" placeholder='company description' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400   sm:text-sm/6 focus:outline-none bg-transparent"
         {...register("company_description", {
             required: "* company description  is required"
        })}>
</textarea>
        </div>
        <p className='capitalize ms-1 mt-1 mb-3 text-red-600'>{errors.company_description?.message}</p>     

             <div className="    h-12  mt-3  border-b  ">
                 <input id="website_url" name="website_url"  autoComplete="website url" type='url' placeholder='website_url' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent" 
              {...register("website_url", {
                 required: "* website url  is required",
                 pattern: {
                    value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                    message: "invalid url pattern"
                  }
             })}
                 />
     
             </div>
        <p className='capitalize ms-1 mt-1 mb-3 text-red-600'>{errors.website_url?.message}</p>     
             <div className="    h-12  mt-3  border-b  ">
                 <input id="contact_person_name" name="contact_person_name"  autoComplete="contact_person_name " type='text' placeholder='contact person name' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent" 
              {...register("contact_person_name", {
                 required: "* contact person name is required",
                 
             })}
                 />
     
             </div>
        <p className='capitalize ms-1 mt-1 mb-3 text-red-600'>{errors.contact_person_name?.message}</p>     
             <div className="    h-12  mt-3  border-b  ">
                 <input id="contact_phone" name="contact_phone"  autoComplete="contact_phone " type='tel' placeholder='contact phone' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent" 
              {...register("contact_phone", {
                 required: "* contact phone is required",
                 pattern: {
                    value: /^\+[1-9]\d{1,14}$/,

                    message: "contact phone must start with country code and be between 10 to 15 number"
                  }
                 
             })}
                 />
     
             </div>
        <p className='capitalize ms-1 mt-1 mb-3 text-red-600'>{errors.contact_phone?.message}</p>     

        


<div className='  border-b py-2 capitalize '>

<select name="company_size" id="company_size" {...register("company_size", { required:"* select your company size" })} className=' w-full sm:text-sm/6 focus:outline-none bg-transparent'>
              <option className='border border-b'   hidden value=''>
                company size
              </option>
              <option className=' text-gray-900' >
              0-1
              </option>
              <option className=' text-gray-900' >
              10-20
              </option>
              <option className=' text-gray-900' >
              20-30
              </option>
              <option className=' text-gray-900' >
              30-40
              </option>
          </select>
 
</div>
        <p className='capitalize ms-1 mt-1 mb-3 text-red-600'>{errors.company_size?.message}</p>     



         <button type='submit' className='w-full my-5 h-12  bg-btn '>Finish</button>
         <a href="/register/select-user" className="w-full border-btn h-14  flex justify-center items-center ">
         Back</a>
        </form>
  )
}

export default page
