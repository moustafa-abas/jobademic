"use client";
import React, { useEffect } from "react";
import img from "../assets/community profile.jpg";
import Image from "next/image";
import { useStore } from "../store/store";
const page = () => {
  const { applicants, job ,setApplicant} = useStore();
  return (
    <main className="Container text-center">
      {applicants > 0 ? (
        <h1 className="text-lg sm:text-3xl mb-5">
          {applicants?.length} {job?.title} Applicants
        </h1>
      ) : null}
      <section className="flex flex-wrap justify-between items-center md:w-3/4 mx-auto ">
        {applicants?.length > 0 ? 
        <>{applicants.map((applicant)=>

          <div className="w-full sm:w-1/2 flex justify-between items-center sm:pe-8 my-3 sm:my-1 md:my-3" key={applicant?.id}>
            <div className="flex items-center gap-2 sm:gap-6">
              {applicant?.user?.profile_picture ? (
                <Image
                  src={`http://localhost:8000/${applicant?.user?.profile_picture}`}
                  alt="applicant"
                  className="w-12 h-12 sm:w-24  rounded-full"
                  width={100}
                  height={100}
                />
              
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 46 46"
                  fill="none"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                >
                  <path
                    fillrule="evenodd"
                    cliprule="evenodd"
                    d="M12.875 10.5C12.875 7.84784 13.9286 5.3043 15.8039 3.42893C17.6793 1.55357 20.2228 0.5 22.875 0.5C25.5272 0.5 28.0707 1.55357 29.9461 3.42893C31.8214 5.3043 32.875 7.84784 32.875 10.5C32.875 13.1522 31.8214 15.6957 29.9461 17.5711C28.0707 19.4464 25.5272 20.5 22.875 20.5C20.2228 20.5 17.6793 19.4464 15.8039 17.5711C13.9286 15.6957 12.875 13.1522 12.875 10.5ZM12.875 25.5C9.55979 25.5 6.38037 26.817 4.03617 29.1612C1.69196 31.5054 0.375 34.6848 0.375 38C0.375 39.9891 1.16518 41.8968 2.5717 43.3033C3.97822 44.7098 5.88588 45.5 7.875 45.5H37.875C39.8641 45.5 41.7718 44.7098 43.1783 43.3033C44.5848 41.8968 45.375 39.9891 45.375 38C45.375 34.6848 44.058 31.5054 41.7138 29.1612C39.3696 26.817 36.1902 25.5 32.875 25.5H12.875Z"
                    fill="#626262"
                  />
                </svg>
              )}
              <hgroup>
                <h2>{applicant?.user?.name}</h2>
              </hgroup>
            </div>
            <button
              className="border-btn w-24 sm:w-28 h-10 rounded-full "
              onClick={() => {setApplicant(applicant)
                location.replace("/Applicants/Profile")
              }
              }
            >
              View Profile
            </button>
          </div>
        )

}
         
        </>: (
          <h1 className="text-lg sm:text-3xl mb-5 capitalize flex items-center mx-auto ">
            no applicants here for a <span className="text-[var(--second-color)] mx-3"> {job?.title} {job?.type} </span> 
          </h1>
        )}
      </section>
    </main>
  );
};

export default page;
