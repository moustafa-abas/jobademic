"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createCourse, createJob } from "@/app/Functions";
import Image from "next/image";

const page = () => {
        const [course_cover, setCourse_cover] = useState();
    
const {
   register,
   handleSubmit,
   formState: { errors },
   watch,
} = useForm();
const onSubmit = (data) => {
createCourse(data)};
return (
   <form
   className=" Container flex flex-col items-center   pt-3 lg:pt-10 "
   onSubmit={handleSubmit(onSubmit)}
   >
   <h1 className="text-3xl font-semibold  text-center ">New Course</h1>
   <main className="flex sm:w-3/4  w-full flex-col sm:flex-row  sm:gap-10 justify-center">
    <div className="sm:w-1/2 ">

      <div className="  w-full   h-14  mt-8  border rounded-xl  ">
         <input
         id="title"
         name="title"
         autoComplete="title"
         type="text"
         placeholder="Title"
         className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
         {...register("title", {
            required: "*title is required",
         })}
         />

         <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
         {errors.title?.message}
         </p>
      </div>

  

      <div className="  w-full   h-14  mt-8  border rounded-xl  ">
         <select
         name="level"
         id="level"
         {...register("level", { required: "* select job level" })}
         className=" w-full h-14 sm:text-sm/6 focus:outline-none bg-transparent"
         >
         <option
            className="border border-b"
            defaultValue="gender"
            hidden
            value=""
         >
            level
         </option>
         <option className=" text-gray-900">beginner</option>
         <option className=" text-gray-900">advanced</option>
         </select>

         <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
         {errors.level?.message}
         </p>
      </div>
            <div className="  w-full sm:w-1/  h-14  mt-8  border rounded-xl  ">
         <select
         name="category"
         id="category"
         {...register("category", { required: "* select job category" })}
         className=" w-full h-14 sm:text-sm/6 focus:outline-none bg-transparent"
         >
         <option
            className="border border-b"
            defaultValue="gender"
            hidden
            value=""
         >
            Category
         </option>
         <option className=" text-gray-900">coding</option>
         <option className=" text-gray-900">advanced</option>
         </select>

         <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
         {errors.category?.message}
         </p>
      </div>
    </div>
<div className="sm:w-1/2">



      <div className="   w-full    mt-8  border rounded-xl    ">
         <textarea
         id="description"
         name="description"
         rows={4}
         autoComplete="email"
         type="date"
         placeholder="Description"
         className="block  w-full h-full    px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
         {...register("description", {
            required: "* description is required",
         })}
         ></textarea>

      </div>
         <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
         {errors.description?.message}
         </p>
             <div className="   w-full h-40    mt-8  border rounded-xl   ">
                  <input id="thumbnail" name="thumbnail"   type='file' accept='image/*'  className="hidden  " 
            {...register("thumbnail",{
                  required: "* select course cover",
              onChange:(e)=>
                  setCourse_cover(URL.createObjectURL(e.target.files[0]))
            })}                
                   />
                   <label htmlFor="thumbnail" className='cursor-pointer flex justify-center items-center gap-2 w-full h-full'>
                    {
                        course_cover?
                        <Image src={course_cover} alt="user" width={100} height={100}  className={` w-full h-full object-center object-cover  rounded-xl`}/>
                    :
<>
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path d="M23.1667 12.5027C26.0667 12.5187 27.6374 12.648 28.6614 13.672C29.8334 14.844 29.8334 16.7294 29.8334 20.5V21.8334C29.8334 25.6054 29.8334 27.4907 28.6614 28.6627C27.4907 29.8334 25.6041 29.8334 21.8334 29.8334H11.1667C7.39608 29.8334 5.50941 29.8334 4.33875 28.6627C3.16675 27.4894 3.16675 25.6054 3.16675 21.8334V20.5C3.16675 16.7294 3.16675 14.844 4.33875 13.672C5.36275 12.648 6.93341 12.5187 9.83341 12.5027" stroke="#626262" strokeWidth={1.5} strokeLinecap="round" />
  <path d="M16.5 20.5V3.16663M16.5 3.16663L20.5 7.83329M16.5 3.16663L12.5 7.83329" stroke="#626262" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
</svg>
Upload course Cover
</>
                    }
                   </label>
      
              </div>
         <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
         {errors.thumbnail?.message}
         </p>
</div>

   </main>

   <button
      type="submit"
      className="w-3/4 sm:w-1/2 lg:w-1/3  mt-20 h-12  bg-btn "
   >
      Sign up
   </button>
   </form>
);
};

export default page;
