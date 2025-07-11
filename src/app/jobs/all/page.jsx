"use client";
import Job from "@/app/components/Job";
import { getJobs } from "@/app/Functions";
import { useStore } from "@/app/store/store";
import React, { useEffect } from "react";

const page = () => {
  const { jobs, user } = useStore();
  const role = user?.role;
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <main className="Container">
        {
          jobs?.length>0?(
          <>
      <h1 className="text-5xl font-semibold tracking-wide text-center mb-24 mt-5">
          {role=== "company" ? "My Jobs" : "All Available Jobs"}
          </h1>
    {jobs?.map((job,index) =>(
        <Job data={job} index={index} key={job.id} />
      ))}
      </>
      )
:
<h2 className="text-5xl font-semibold tracking-wide text-center my-24"> No Available Jobs</h2>
    }
    </main>
  );
};

export default page;
