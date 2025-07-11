"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "../store/store";
import { deleteJob, getApplicants, getOneJob } from "../Functions";
import Job_form from "./Job_form";
import JobFlow from "./jobFlow";
const Job = ({ data }) => {

  const { user, setFlow, handleOpen, setJob,Flow } = useStore();
  return (
    <section className="  flex flex-col  justify-between  gap-4 mb-6  bg-gray-900 p-4   rounded-xl relative ">
      {/* {user.role === "company" ? null :
       (
        <svg
          width="30"
          height="36"
          viewBox="0 0 16 20"
          fill={`${saved ? "var(--main-color)" : "none"}`}
          className=" absolute right-10 top-10 cursor-pointer "
        >
          <path
            d="M13 1.18506H3C2.46957 1.18506 1.96086 1.39577 1.58579 1.77084C1.21071 2.14592 1 2.65463 1 3.18506V18.3231C1.00003 18.4106 1.02305 18.4966 1.06676 18.5725C1.11047 18.6484 1.17334 18.7114 1.24907 18.7554C1.32481 18.7993 1.41075 18.8226 1.49831 18.8229C1.58587 18.8232 1.67197 18.8005 1.748 18.7571L7.008 15.7521C7.31013 15.5795 7.65205 15.4887 8 15.4887C8.34795 15.4887 8.68987 15.5795 8.992 15.7521L14.252 18.7581C14.3281 18.8015 14.4143 18.8242 14.5019 18.8239C14.5896 18.8236 14.6756 18.8002 14.7514 18.7561C14.8271 18.7121 14.89 18.6489 14.9336 18.5729C14.9773 18.4968 15.0001 18.4107 15 18.3231V3.18506C15 2.65463 14.7893 2.14592 14.4142 1.77084C14.0391 1.39577 13.5304 1.18506 13 1.18506Z"
            stroke={`${saved ? "var(--main-color)" : " #848484"}`}
            strokelinecap="round"
            strokelinejoin="round"
          />
        </svg>
      )} */}
      <main className="flex flex-col sm:flex-row items-center gap-5 mb-3">
        {user?.role === "company" ? null : (
          <>
            {data?.profile_picture ? (
              <Image
                src={data?.profile_picture}
                alt="user"
                className="rounded-full w-8"
                width={100}
                height={100}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 46 46"
                fill="none"
                className="rounded-full w-8 "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.875 10.5C12.875 7.84784 13.9286 5.3043 15.8039 3.42893C17.6793 1.55357 20.2228 0.5 22.875
                   0.5C25.5272 0.5 28.0707 1.55357 29.9461 3.42893C31.8214 5.3043 32.875 7.84784 32.875 10.5C32.875
                    13.1522 31.8214 15.6957 29.9461 17.5711C28.0707 19.4464 25.5272 20.5 22.875 20.5C20.2228 20.5 
                    17.6793 19.4464 15.8039 17.5711C13.9286 15.6957 12.875 13.1522 12.875 10.5ZM12.875 25.5C9.55979
                     25.5 6.38037 26.817 4.03617 29.1612C1.69196 31.5054 0.375 34.6848 0.375 38C0.375 39.9891 1.16518
                      41.8968 2.5717 43.3033C3.97822 44.7098 5.88588 45.5 7.875 45.5H37.875C39.8641 45.5 41.7718 44.7098
                       43.1783 43.3033C44.5848 41.8968 45.375 39.9891 45.375 38C45.375 34.6848 44.058 31.5054 41.7138 
                       29.1612C39.3696 26.817 36.1902 25.5 32.875 25.5H12.875Z"
                  fill="#626262"
                />
              </svg>
            )}
          </>
        )}

        <div>
          <h1 className="text-2xl  text-[var(--main-color)]">{data?.title}</h1>
          <h2 className="text-lg  text-orange-500">
            {user?.role === "company" ? null : `${data?.company?.name}`}
          </h2>
          <p className="text-gray-400 ">{data?.location}</p>
        </div>
      </main>
      <p>{data.description}</p>
      <aside className="flex  justify-between items-center sm:mx-12">
        <p className="text-orange-500">
          This ( {data?.type} ) Available to {data?.deadline}
        </p>

        {user.role === "company" ? (
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              className="h-10 w-36 bg-btn"
              onClick={async () => {
                await getOneJob(data?.id);
                await getApplicants(data?.id);
              }}
            >
              View Applicants
            </button>
            <button
              className="h-10 w-36 rounded border-btn"
              onClick={() => {
                getOneJob(data?.id);
                setFlow(`update job`);
                handleOpen();
              }}
            >
              Update
            </button>
            <button
              className="h-10 w-36 rounded bg-red-700"
              onClick={() => deleteJob(data?.id)}
            >
              Delete
            </button>
          </div>
        ) : (
          <button
            className="h-10 w-36 bg-btn"
            onClick={() => {
              setJob(data);
              setFlow('apply')
              handleOpen();
            }}
          >
            Apply Now
          </button>
        )}
      </aside>
      {
        Flow==='update job'?
        <JobFlow/>
        :
        <Job_form />
      }
      
    </section>
  );
};

export default Job;
