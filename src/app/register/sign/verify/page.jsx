"use client";
import { verifyEmail } from "@/app/Functions";
import { useStore } from "@/app/store/store";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const page = () => {
  const {
    verifyError,
    user,
    codeTimeOut,
    minutes,
    seconds,
    setMinutes,
    setSeconds,
    setCodeTimeOut,
  } = useStore.getState();
  console.log(codeTimeOut);
  console.log(minutes);
  console.log(seconds);
  const [code, setCode] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    verifyEmail(data);
  };

  setInterval(() => {
    if (minutes >= 0 && seconds > 0) {
      setSeconds(seconds - 1);
    } else if (minutes >= 1 && seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setCodeTimeOut(true);
    }
  }, 1000);
  return (
    <section className="relative">
      <a href="/register/sign">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="#fff"
          className="absolute top-5 left-5"
        >
          <path
            d="M14.812 25.5074L6.47522 17.1809C6.32342 17.0226 6.20443 16.8358 6.12507 16.6314C5.95831 16.226 5.95831 15.7712 6.12507 15.3658C6.20443 15.1614 6.32342 14.9746 6.47522 14.8162L14.812 6.48975C14.9675 6.33448 15.152 6.21131 15.3552 6.12728C15.5583 6.04325 15.776 6 15.9958 6C16.4399 6 16.8657 6.17617 17.1797 6.48975C17.4936 6.80333 17.67 7.22864 17.67 7.67211C17.67 8.11558 17.4936 8.54089 17.1797 8.85447L11.6774 14.3333L24.3326 14.3333C24.7749 14.3333 25.199 14.5087 25.5116 14.821C25.8243 15.1333 26 15.5569 26 15.9986C26 16.4402 25.8243 16.8638 25.5116 17.1761C25.199 17.4884 24.7749 17.6639 24.3326 17.6639L11.6774 17.6639L17.1797 23.1427C17.3359 23.2975 17.46 23.4817 17.5446 23.6846C17.6293 23.8875 17.6729 24.1052 17.6729 24.3251C17.6729 24.5449 17.6293 24.7626 17.5446 24.9655C17.46 25.1684 17.3359 25.3526 17.1797 25.5074C17.0247 25.6635 16.8403 25.7874 16.6371 25.8719C16.4339 25.9565 16.216 26 15.9958 26C15.7757 26 15.5578 25.9565 15.3546 25.8719C15.1514 25.7874 14.967 25.6635 14.812 25.5074Z"
            fill="#fff"
          />
        </svg>
      </a>
      <main className="w-full sm:w-1/2 mx-auto flex flex-col items-center text-center  pt-40">
        <h1 className="capitalize text-3xl mb-6">verify your email</h1>
        <h2 className="capitalize text-lg">
          we have sent an email with your code to{" "}
          <span className="text-[var(--second-color)] normal-case">
            {user?.email}
          </span>
        </h2>
          <form className=" md:w-3/4 " onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex items-center  h-12  mt-8    border-b ">
              <input
                id="code"
                name="code"
                type="text"
                placeholder="Enter your code"
                className="block   h-full w-full    px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent "
                {...register("code", {
                  required: "* code is required",
                  validate: (value) =>
                    value.length === 6 || "*code must be exactly 6 number ",
                })}
              />
            </div>
            <p className="capitalize ms-1 mt-1 mb-3 text-start text-red-600">
              {errors.code?.message}
            </p>
            <p className="capitalize ms-1 mt-1 mb-3 text-start text-red-600">
              {verifyError}
            </p>

            <button
              className="bg-btn w-full h-12 capitalize mt-6"
              type="submit"
            >
              submit
            </button>
            <h2 className="capitalize text-lg mt-3">
This OTP will expire in 10 minutes       
            </h2>

          </form>

      </main>
    </section>
  );
};

export default page;
