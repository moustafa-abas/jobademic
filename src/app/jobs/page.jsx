"use client";
import React, { useEffect } from "react";
import Job from "../components/Job";
import Jobs_landing from "../components/Jobs_landing";
import { useStore } from "../store/store";
import { getJobs } from "../Functions";

const page = () => {
  useEffect(() => {
    getJobs();
  }, []);
  const { user, jobs } = useStore();
  return (
    <section className="Container h relative ">
      {user?.role === "company" ? (
        <>
          {jobs.length>0 ? (
            <>
              {jobs?.slice(0, 4).map((job) => (
                <Job data={job} key={job.id} />
              ))}
              <div className="sm:w-1/2  flex mx-auto justify-center gap-2 sm:gap-14 mt-10 ">
                <a
                  href="/jobs/create-job"
                  className="border-btn w-1/2 h-12 flex justify-center items-center capitalize"
                >
                  add new job
                </a>
    
              </div>
            </>
          ) : (
            <Jobs_landing />
          )}
        </>
      ) : (
        <>
          <Jobs_landing />
        </>
      )}
    </section>
  );
};

export default page;
