"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useStore } from "../store/store";
import Comments from "./CommunityFlow";
import { useForm } from "react-hook-form";
import { getComments, getPost ,deletePost} from "../Functions";

const Post = ({data,index}) => {
const postUser=data?.user
const post=data
const{register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
    console.log(data)
  }
  const [postOption, setPostOption] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState(false);
  const{handleOpen, alert ,setFlow,Flow,user}=useStore()
  return (
    <div className="border border-gray-700 pt-4 pb-2 rounded-xl  mb-3">
      <header className="flex justify-between items-center mb-5 px-3">
        <div className="user flex items-center gap-3">
                            {postUser?.profile_picture ? (
                              <Image
                                src={`http://localhost:8000/${postUser?.profile_picture}`}
                                alt="user"
 className="rounded-full w-12 cursor-pointer"
 width={100}
 height={100}
                               />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 46 46"
                                fill="none"
                                                      className="rounded-full w-8"
          
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.875 10.5C12.875 7.84784 13.9286 5.3043 15.8039 3.42893C17.6793 1.55357 20.2228 0.5 22.875 0.5C25.5272 0.5 28.0707 1.55357 29.9461 3.42893C31.8214 5.3043 32.875 7.84784 32.875 10.5C32.875 13.1522 31.8214 15.6957 29.9461 17.5711C28.0707 19.4464 25.5272 20.5 22.875 20.5C20.2228 20.5 17.6793 19.4464 15.8039 17.5711C13.9286 15.6957 12.875 13.1522 12.875 10.5ZM12.875 25.5C9.55979 25.5 6.38037 26.817 4.03617 29.1612C1.69196 31.5054 0.375 34.6848 0.375 38C0.375 39.9891 1.16518 41.8968 2.5717 43.3033C3.97822 44.7098 5.88588 45.5 7.875 45.5H37.875C39.8641 45.5 41.7718 44.7098 43.1783 43.3033C44.5848 41.8968 45.375 39.9891 45.375 38C45.375 34.6848 44.058 31.5054 41.7138 29.1612C39.3696 26.817 36.1902 25.5 32.875 25.5H12.875Z"
                                  fill="#626262"
                                />
                              </svg>
                            )}

          <hgroup>
            <h1 className=" text-lg cursor-pointer">{postUser?.name}</h1>
            <p className="text-gray-400">1h</p>
          </hgroup>
        </div>

{postUser?.email===user?.email?

        <div className="relative">
          <button
            type="button"
            onClick={() => setPostOption(!postOption)}
            className={`flex justify-center md:hover:bg-gray-400 ${
              postOption ? "bg-slate-300" : null
            } w-9 h-9 duration-300 rounded-full`}
            aria-expanded="false"
          >
            <svg width="8" height="32" viewBox="0 0 8 32" fill="none">
              <path
                d="M4.27134 7.76452C3.80891 7.76452 3.35101 7.67337 2.92378 7.49627C2.49655 7.31917 2.10836 7.0596 1.78138 6.73237C1.45439 6.40514 1.19501 6.01665 1.01805 5.5891C0.841083 5.16156 0.75 4.70331 0.75 4.24054C0.75 3.77776 0.841083 3.31951 1.01805 2.89197C1.19501 2.46442 1.45439 2.07594 1.78138 1.7487C2.10836 1.42147 2.49655 1.1619 2.92378 0.9848C3.35101 0.807703 3.80891 0.716553 4.27134 0.716553C5.20526 0.716553 6.10093 1.08783 6.76131 1.7487C7.42169 2.40958 7.79268 3.30592 7.79268 4.24054C7.79268 5.17515 7.42169 6.07149 6.76131 6.73237C6.10093 7.39324 5.20526 7.76452 4.27134 7.76452ZM4.27134 19.8467C3.33742 19.8467 2.44176 19.4755 1.78138 18.8146C1.121 18.1537 0.75 17.2574 0.75 16.3228C0.75 15.3881 1.121 14.4918 1.78138 13.8309C2.44176 13.1701 3.33742 12.7988 4.27134 12.7988C5.20526 12.7988 6.10093 13.1701 6.76131 13.8309C7.42169 14.4918 7.79268 15.3881 7.79268 16.3228C7.79268 17.2574 7.42169 18.1537 6.76131 18.8146C6.10093 19.4755 5.20526 19.8467 4.27134 19.8467ZM0.75 28.405C0.75 29.3396 1.121 30.2359 1.78138 30.8968C2.44176 31.5577 3.33742 31.929 4.27134 31.929C5.20526 31.929 6.10093 31.5577 6.76131 30.8968C7.42169 30.2359 7.79268 29.3396 7.79268 28.405C7.79268 27.4704 7.42169 26.574 6.76131 25.9132C6.10093 25.2523 5.20526 24.881 4.27134 24.881C3.33742 24.881 2.44176 25.2523 1.78138 25.9132C1.121 26.574 0.75 27.4704 0.75 28.405Z"
                fill="#536471"
              />
            </svg>
          </button>

          {postOption ? (
            <div className=" absolute right-8 -top-4 z-10 mt-5 flex w-screen max-w-max px-4  ">
              <div className="  max-w-md flex-auto overflow-hidden rounded-xl  text-sm/6 shadow-lg  bg-gray-700  ring-1 ring-gray-900/5 ">
                <div className="">
                  <div className="group relative flex items-center gap-x-3 rounded-lg p-4 hover:bg-gray-600 cursor-pointer duration-200" onClick={()=>deletePost(post?.id)}>

                    <p className="  capitalize">delete this post</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        :null
}

      </header>
      <main className="mb-3">
        <p className="text-lg mb-3 px-3">
{post?.content}
        </p>
        {/* <Image src={post} alt="post" className="w-full mb-2" /> */}
        <div className="flex justify-end px-3 ">
          <span>{post?.comments?.length} Comment</span>
        </div>
      </main>
      <footer className=" border-t sm:mx-4  pt-3 flex justify-between">
        <h1
          className={`${
            saved ? "text-[var(--main-color)]" : null
          } flex gap-1 justify-center items-center cursor-pointer w-1/3 h-10 text-center lg:hover:bg-gray-700 rounded duration-200`}
          onClick={() => setSaved(!saved)}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 33 33"
            fill={`${saved ? "var(--main-color)" : "none"}`}
          >
            <path
              d="M17.1423 28.0702C16.686 28.2312 15.9345 28.2312 15.4783 28.0702C11.5866 26.7416 2.89062 21.1993 2.89062 11.8055C2.89062 7.65887 6.23212 4.30396 10.352 4.30396C12.7943 4.30396 14.9549 5.48489 16.3103 7.30996C17.6657 5.48489 19.8397 4.30396 22.2686 4.30396C26.3885 4.30396 29.73 7.65887 29.73 11.8055C29.73 21.1993 21.034 26.7416 17.1423 28.0702Z"
              stroke={`${saved ? "var(--main-color)" : "#848484"}`}
              strokeWidth={2.01295}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Like
        </h1>
        <h1 className="flex gap-1 justify-center items-center cursor-pointer w-1/3 h-10 text-center lg:hover:bg-gray-700 rounded duration-200" onClick={()=>{
getComments(post?.id)
getPost(post?.id)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M22.8189 12.2214C22.8189 17.4148 18.3099 21.6152 12.7542 21.6152L11.5062 23.1182L10.7681 24.0039C10.1374 24.7554 8.92959 24.5943 8.51358 23.6952L6.71535 19.7364C4.27297 18.0187 2.68945 15.2945 2.68945 12.2214C2.68945 7.02799 7.19846 2.82764 12.7542 2.82764C16.8069 2.82764 20.3095 5.06873 21.8796 8.28945C22.4835 9.4838 22.8189 10.8123 22.8189 12.2214Z"
              stroke="#848484"
              strokeWidth={2.01295}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.5294 17.4015C29.5294 20.4746 27.9459 23.1988 25.5035 24.9165L23.7053 28.8753C23.2893 29.7744 22.0815 29.9489 21.4508 29.184L19.4647 26.7952C16.2171 26.7952 13.3185 25.3593 11.5068 23.1183L12.7549 21.6153C18.3106 21.6153 22.8196 17.4149 22.8196 12.2215C22.8196 10.8124 22.4841 9.4839 21.8802 8.28955C26.2685 9.29603 29.5294 12.9998 29.5294 17.4015Z"
              stroke="#848484"
              strokeWidth={2.01295}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.39941 12.2214H16.1092"
              stroke="#848484"
              strokeWidth={2.01295}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Comments
        </h1>
        <h1 className="flex gap-1 justify-center items-center cursor-pointer w-1/3 h-10 text-center lg:hover:bg-gray-700 rounded duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M27.901 10.9195L25.5575 8.88293C23.8691 7.4155 23.2072 6.62612 22.2929 6.90518C21.1528 7.25314 21.5281 9.44875 21.5281 10.19C19.7555 10.19 17.9126 10.0536 16.1654 10.3378C10.3974 11.2763 8.59375 15.3832 8.59375 19.8078C10.2263 18.8063 11.8572 17.6895 13.8193 17.2254C16.2685 16.646 19.0039 16.9224 21.5281 16.9224C21.5281 17.6637 21.1528 19.8593 22.2929 20.2073C23.3289 20.5235 23.8691 19.6969 25.5575 18.2296L27.901 16.1929C29.3384 14.9438 30.0572 14.3191 30.0572 13.5562C30.0572 12.7934 29.3384 12.1688 27.901 10.9195Z"
              stroke="#848484"
              strokeWidth={2.01295}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7216 4.16479C9.54325 4.17411 6.83161 4.30108 5.09866 6.03181C3.22852 7.89957 3.22852 10.9057 3.22852 16.9179C3.22852 22.9301 3.22852 25.9362 5.09865 27.8039C6.9688 29.6717 9.97873 29.6717 15.9986 29.6717C22.0185 29.6717 25.0285 29.6717 26.8986 27.8039C28.2007 26.5035 28.5961 24.6513 28.7163 21.6169"
              stroke="#848484"
              strokeWidth={2.01295}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Share
        </h1>
      </footer>


    </div>
  );
};

export default Post;
