"use client";
import React from "react";
import Image from "next/image";
import landing from "../assets/jobs.svg";
import { useStore } from "../store/store";
import Job_landing from "../assets/company job.svg";
const Jobs_landing = () => {
  const { user } = useStore();
  return (
    <>
      {user?.role === "company" ? (
        <main className="  w-full sm:w-3/4 mx-auto   h-svh text-center ">
          <hgroup>
            <h1 className="sm:text-3xl font-semibold">
              there is no Advertisement for a job
            </h1>
            <p className="sm:text-lg mt-5">
              take an action now for finding the best employee
            </p>
          </hgroup>
          <Image src={Job_landing} alt="" className="w-full h-3/4" />
          <button
            className="bg-btn  w-1/2 h-14"
            onClick={() => location.replace("/jobs/create-job")}
          >
            Add Your First Job
          </button>
        </main>
      ) : (
        <section className="Container flex sm:flex-row flex-col-reverse justify-between items-center ">
          <main className=" sm:w-1/2">
            <hgroup>
              <h1 className="text-6xl font-semibold tracking-wide">
                Find The Best Job That You Deserved
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                Visit our website to learn and achieve new Jobs that meet's your
                Requirements in different Careers.
              </p>
            </hgroup>
            <button className="bg-btn w-44 h-12 mt-8" onClick={()=>
              location.replace('/jobs/all')
            }>

              View Jobs
              </button>
          </main>
          <aside className="sm:w-1/2">
            <Image src={landing} alt="" className="w-full" />
          </aside>
        </section>
      )}
    </>
  );
};

export default Jobs_landing;
