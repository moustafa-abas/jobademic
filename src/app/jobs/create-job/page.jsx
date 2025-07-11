"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createJob } from "@/app/Functions";
import { useStore } from "@/app/store/store";
import PostsFlow from "@/app/components/Flow";
import NotLogined from "@/app/components/NotLogined";
import Requests from "@/app/components/Requests";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    createJob(data);
  };
  return (
    <form
      className=" Container flex flex-col items-center w-3/4  pt-3 lg:pt-10 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-semibold  text-center ">Job Data</h1>
      <main className="flex flex-wrap sm:gap-10 justify-center">
        <div className="  w-full sm:w-1/3  h-14  mt-8  border rounded-xl  ">
          <input
            id="title"
            name="title"
            autoComplete="title"
            type="text"
            placeholder="Title"
            className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
            {...register("title", {
              required: "*title is required",
            })}
          />

          <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
            {errors.title?.message}
          </p>
        </div>

        <div className="  w-full sm:w-1/3  h-14  mt-8  border rounded-xl  ">
          <input
            id="location"
            name="location"
            autoComplete="location"
            type="text"
            placeholder="Location"
            className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
            {...register("location", {
              required: "*location is required",
            })}
          />

          <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
            {errors.location?.message}
          </p>
        </div>

        <div className="  w-full sm:w-1/3  h-14  mt-8  border rounded-xl  ">
          <select
            name="type"
            id="type"
            {...register("type", { required: "* select job type" })}
            className=" w-full h-14 sm:text-sm/6 focus:outline-none bg-transparent"
          >
            <option
              className="border border-b"
              defaultValue="gender"
              hidden
              value=""
            >
              Type{" "}
            </option>
            <option className=" text-gray-900">job</option>
            <option className=" text-gray-900">internship</option>
          </select>

          <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
            {errors.type?.message}
          </p>
        </div>
        <div className="   w-full sm:w-1/3  h-14  mt-8  border rounded-xl  ">
          <input
            id="deadline"
            name="deadline"
            autoComplete="email"
            type="date"
            className="block  w-full h-full  cursor-pointer text-white  px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
            {...register("deadline", {
              required: "* deadline is required",
              validate: (value) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const selectedDate = new Date(value);
                selectedDate.setHours(0, 0, 0, 0);
                return (
                  selectedDate >= today || "Deadline must be today or later"
                );
              },
            })}
          />

          <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
            {errors.deadline?.message}
          </p>
        </div>
          <div className=" w-full sm:w-1/3  h-14  mt-8  border rounded-xl   ">
          <input
            id="preferred_course"
            name="preferred_course"
            autoComplete="preferred_course"
            type="number"
            placeholder="preferred course id"
            className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
            {...register("preferred_course", {
    min: {
      value: 1,
      message: "غير موجود ",
    },
            })}
          />

          <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
            {errors.preferred_course?.message}
          </p>
        </div>
        <div className="   w-fit    mt-8  border rounded-xl    ">
          <textarea
            id="description"
            name="description"
            rows={5}
            cols={60}
            autoComplete="email"
            type="date"
            placeholder="Description"
            className="block  w-full h-full    px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
            {...register("description", {
              required: "* description is required",
            })}
          ></textarea>

          <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
            {errors.description?.message}
          </p>
        </div>
      </main>

      <button
        type="submit"
        className="w-3/4 sm:w-1/2 lg:w-1/3  mt-20 h-12  bg-btn "
      >
        Create Now
      </button>
      <Requests />
    </form>
  );
};

export default page;
