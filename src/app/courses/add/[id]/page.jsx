"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createCourse, createJob, createLesson } from "@/app/Functions";
import Image from "next/image";
import { useStore } from "@/app/store/store";

const page = () => {
        const [course_cover, setCourse_cover] = useState();
    const{course}=useStore()
const {
   register,
   handleSubmit,
   formState: { errors },
   watch,
   reset


} = useForm();
const onSubmit = (data) => {
createLesson(data)
reset()
};
return (
   <form
   className=" Container flex flex-col items-center   pt-3 lg:pt-10 "
   onSubmit={handleSubmit(onSubmit)}
   >
   <h1 className="text-3xl font-semibold  text-center ">New Lesson</h1>
   <main className="flex   w-full flex-col sm:flex-row  sm:gap-10 justify-center">

      <div className="  sm:w-1/3  h-14  mt-8  border rounded-xl  ">
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

        <div className="   sm:w-1/3   h-14  mt-8  border rounded-xl ">
        <input
          id="video_url"
          name="video_url"
          autoComplete="video_url"
          type="url"
          placeholder="video url"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("video_url", {
            required: "* vedio url  is required",
            pattern: {
              value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
              message: "invalid url pattern",
            },
          })}
        />
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.video_url?.message}
      </p>
      </div>
     <div className="   sm:w-1/3    mt-8  border rounded-xl    ">
         <textarea
         id="content"
         name="content"
         rows={4}
         autoComplete="email"
         type="date"
         placeholder="content"
         className="block  w-full h-full    px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
         {...register("content", {
            required: "* content is required",
         })}
         ></textarea>

         <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
         {errors.content?.message}
         </p>
      </div>


   </main>

<div className="flex w-full justify-center gap-10">


   <button
      className="w-full sm:w-1/2 lg:w-1/3  mt-14 h-12  border-btn "
      onClick={()=>location.replace('/courses')}
      >
Finish</button>
   <button
      type="submit"
      className="w-full sm:w-1/2 lg:w-1/3  mt-14 h-12  bg-btn "
      >
Add Lesson  
</button>
       </div>
   </form>
);
};

export default page;
