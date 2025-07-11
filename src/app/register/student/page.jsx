"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import profile from "../../assets/upload-image.svg";
import { studentRegister } from "@/app/Functions";
import { useStore } from "@/app/store/store";
const page = () => {
  const [profile_image, setProfile_image] = useState();
  const { registerError } = useStore(); // ✅ استخدم getState

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const interestsArray = data.interests
      .split("\n")
      .filter((interest) => interest.trim() !== "");
    studentRegister(data, interestsArray);
    // console.log(data)
  };
  return (
    <form
      className="w-full sm:w-2/3 lg:w-1/3 Container mx-auto pt-3 lg:pt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-semibold  text-center capitalize ">
        student data
      </h1>

      <div className="     mt-8   ">
        <input
          id="profile_image"
          name="profile_image"
          type="file"
          accept="image/*"
          className="hidden  "
          {...register("profile_image", {
            required: "* select your profile image",
            onChange: (e) =>
              setProfile_image(URL.createObjectURL(e.target.files[0])),
          })}
        />
        <label
          htmlFor="profile_image"
          className="cursor-pointer flex justify-center"
        >
          <Image
            src={profile_image ? profile_image : profile}
            alt="user"
            width={100}
            height={100}
            className={`${
              profile_image ? "rounded-full" : null
            } h-40 w-40 object-center object-cover`}
          />
        </label>
      </div>
  <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.profile_image?.message}
      </p>
      <div className="  border-b py-2 capitalize ">
        <select
          name="gender"
          id="gender"
          {...register("gender", { required: "* select your gender" })}
          className=" w-full sm:text-sm/6 focus:outline-none bg-transparent"
        >
          <option
            className="border border-b"
            defaultValue="gender"
            hidden
            value=""
          >
            gender
          </option>
          <option className=" text-gray-900">male</option>
          <option className=" text-gray-900">female</option>
        </select>
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.gender?.message}
      </p>

      <div className="  border-b py-2 capitalize ">
        <select
          name="education_level"
          id="education_level"
          {...register("education_level", {
            required: "* select your education level",
          })}
          className=" w-full sm:text-sm/6 focus:outline-none bg-transparent"
        >
          <option
            className="border border-b"
            defaultValue="gender"
            hidden
            value=""
          >
            education level
          </option>
          <option className=" text-gray-900">first</option>
          <option className=" text-gray-900">second</option>
          <option className=" text-gray-900">third</option>
        </select>
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.education_level?.message}
      </p>
      <div className="    h-12  mt-8  border-b  text-white">
        <input
          id="date_of_birth"
          name="date_of_birth"
          type="date"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("date_of_birth", {
            required: "* date_of_birth is required",
          })}
        />
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.date_of_birth?.message}
      </p>

      <div className="   border-b  ">
        <textarea
          rows={4}
          name="interests"
          id="interests"
          autoComplete="interests"
          placeholder="interests"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400   sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("interests", {
            required: "*  interests  is required",
          })}
        ></textarea>
      </div>

      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.interests?.message}
      </p>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">{registerError}</p>
      <button type="submit" className="w-full my-5 h-12  bg-btn ">
        Finish
      </button>
      <a
        href="/register/select-user"
        className="w-full border-btn h-14  flex justify-center items-center "
      >
        Back
      </a>
    </form>
  );
};

export default page;
