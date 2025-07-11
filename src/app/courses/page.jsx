"use client";
import React, { useState } from "react";
import Course from "../components/Course";
import { useEffect } from "react";
import { getCourses } from "../Functions";
import { useStore } from "../store/store";

const page = () => {
  const { courses, user,login } = useStore();
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <main className="Container flex flex-col md:flex-row gap-4 relative">
      {
        login?
      <div className="w-full ">
        <h1 className="text-center mb-10 capitalize text-3xl">my courses</h1>
        <section className="  flex mx-auto  gap-6 flex-wrap justify-center   ">
          {courses?.map((course) => (
            <Course data={course} key={course.id} />
          ))}
        </section>
      </div>
      :
          <div className='absolute inset-0 bg-gray-950  flex justify-center opacity-7 pt-72 text-white h-full w-full z-50 text-3xl font-semibold '>
please login first
</div>
      }
      
      

    </main>
  );
};

export default page;
