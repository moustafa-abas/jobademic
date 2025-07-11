"use client";

import { login } from "@/app/Functions";
import { useStore } from "@/app/store/store";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const page = () => {
  const [showPass, setShowPass] = useState(false);
  const {  loginError } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form
      className="w-full sm:w-2/3 lg:w-1/3 Container mx-auto pt-3 lg:pt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-semibold  text-center">Log in now</h1>
      <div className="    h-12  mt-8  border-b  ">
        <input
          id="email"
          name="email"
          autoComplete="email"
          type="email"
          placeholder="name@example.com"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("email", {
            required: "* Email is required",
          })}
        />
      </div>
      <p className="capitalize ms-1 mt-1 mb-3">{errors.email?.message}</p>
      <div className=" flex items-center  h-12  mt-8   border-b ">
        <input
          id="password"
          name="password"
          type={showPass ? "text" : "password"}
          autoComplete="password"
          placeholder="password"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent "
          {...register("password", { required: "* password is required" })}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer me-3"
          onClick={() => setShowPass(!showPass)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.41998 13.98 8.41998 12C8.41998 10.02 10.02 8.42001 12 8.42001C13.98 8.42001 15.58 10.02 15.58 12Z"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47003 3.72 5.18003 5.8 2.89003 9.4C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="capitalize ms-1 mt-1 mb-3">{errors.password?.message}</p>
      <p className="capitalize ms-1 mt-1 mb-3 text-start text-red-600">
        {loginError}
      </p>

      <button type="submit" className="w-full mt-5 h-12  bg-btn ">
        Log in
      </button>

      <h1 className="text-lg  text-center mt-5 capitalize">
        new in Jobademic ?{" "}
        <a
          href="/register/sign"
          className="underline  text-[var(--main-color)]"
        >
          New registration
        </a>
      </h1>
    </form>
  );
};

export default page;
