"use client";
import React, { useEffect } from "react";
import Post from "../components/Post";
import SendPost from "../components/SendPost";
import Image from "next/image";
import { getJobs, getPosts } from "../Functions";
import { useStore } from "../store/store";
import CommunityFlow from "../components/CommunityFlow";
const page = () => {
  const { posts, user, jobs ,login} = useStore();
  const recommended = jobs?.slice(0, 3);
  useEffect(() => {
    getPosts();
    getJobs();
  }, []);
  return (
    <div className=" pt-4 relative mb-10">
      <div className="Container flex justify-between gap-5 ">
        {
          login?
          <>
        <main className="w-full sm:w-3/4 lg:w-2/3 mx-auto  ">
          <SendPost />
          {posts?.map((post, index) => (
            <Post data={post} key={post.id} />
          ))}
        </main>
        {user?.role === "student" ? 
         
          (
          <aside className="hidden md:block w-1/3 border rounded h-fit p-3 border-gray-800 shadow-lg shadow-gray-800">
            <h1 className="text-2xl mb-6">Some jobs for you : </h1>
            {recommended?.map((job) => (
              <div
                className="flex  gap-4 items-center mb-5 border-b pb-2 border-gray-800 last-of-type:border-none "
                key={job.id}
              >
                {job?.company?.profile_picture ? (
                  <Image
                    src={user?.profile_picture}
                    alt="user"
                    className="rounded-full w-8"
                    width={100}
                    height={100}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 46 46"
                    fill="none"
                    className="rounded-full w-8"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.875 10.5C12.875 7.84784 13.9286 5.3043 15.8039 3.42893C17.6793 1.55357 20.2228 0.5 22.875 0.5C25.5272 
                      0.5 28.0707 1.55357 29.9461 3.42893C31.8214 5.3043 32.875 7.84784 32.875 10.5C32.875 13.1522 31.8214 15.6957 
                      29.9461 17.5711C28.0707 19.4464 25.5272 20.5 22.875 20.5C20.2228 20.5 17.6793 19.4464 15.8039 17.5711C13.9286
                       15.6957 12.875 13.1522 12.875 10.5ZM12.875 25.5C9.55979 25.5 6.38037 26.817 4.03617 29.1612C1.69196 31.5054 
                       0.375 34.6848 0.375 38C0.375 39.9891 1.16518 41.8968 2.5717 43.3033C3.97822 44.7098 5.88588 45.5 7.875 45.5H37
                       .875C39.8641 45.5 41.7718 44.7098 43.1783 43.3033C44.5848 41.8968 45.375 39.9891 45.375 38C45.375 34.6848 
                       44.058 31.5054 41.7138 29.1612C39.3696 26.817 36.1902 25.5 32.875 25.5H12.875Z"
                      fill="#626262"
                    />
                  </svg>
                )}
                <hgroup className="tracking-tight ">
                  <h2 className="text-[var(--main-color)]">{job?.title}</h2>
                  <p className="text-[var(--second-color)]">
                    {job?.company?.name}
                  </p>
                  <p className="text-gray-500">
                    ( {job?.type} ) {job?.location}
                  </p>
                </hgroup>
              </div>
            ))}

            <a
              href="/jobs/all"
              className="underline text-[var(--main-color)] flex items-center gap-1 text-sm"
            >
              See More jobs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M10 4L6 8L2 4"
                  stroke={`var(--main-color)`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </aside>
        )
      :
        null
      }
      </>
      :
    <div className='absolute inset-0 bg-gray-950  flex justify-center opacity-7 pt-72 text-white h-full w-full z-50 text-3xl font-semibold '>
please login first
</div>
        }

      </div>
      <CommunityFlow />
    </div>
  );
};

export default page;
{
  /* <aside className="hidden sm:block w-1/4 border rounded h-fit p-3 border-gray-800 shadow-lg shadow-gray-800 ">
          <div className="relative mb-28">
            <Image
              src={company}
              alt=" profile cover"
              className="h-36 w-full rounded object-center  "
            />
            <Image
              src={me}
              alt=" profile cover"
              className="absolute -bottom-1/2 w-28 h-28 rounded-full left-1/2 -translate-x-1/2 border-4"
            />
          </div>
          <hgroup className="text-center">
            <h1 className="text-xl">{user?.name}</h1>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </hgroup>
        </aside> */
}
