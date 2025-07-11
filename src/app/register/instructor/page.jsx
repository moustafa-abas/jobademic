"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import profile from "../../assets/upload-image.svg";
import { instructorRegister } from "@/app/Functions";
const page = () => {
  const [profile_image, setProfileImage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const skillsArray = data.skills
      .split("\n")
      .filter((skill) => skill.trim() !== "");
    instructorRegister(data, skillsArray);
  };
  return (
    <form
      className="w-full sm:w-2/3 lg:w-1/3 Container mx-auto  py-5 lg:pt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-semibold  text-center capitalize">
        instructor data
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
              setProfileImage(URL.createObjectURL(e.target.files[0])),
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

      <div className="    h-12  mt-3  border-b  ">
        <input
          id="education_background"
          name="education_background"
          autoComplete="education_background"
          type="text"
          placeholder="education"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("education_background", {
            required: "* education  is required",
          })}
        />
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.education_background?.message}
      </p>
      <div className="    h-12  mt-3  border-b  ">
        <input
          id="years_of_experience"
          name="years_of_experience"
          autoComplete="years_of_experience"
          type="number"
          placeholder="years of experience"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("years_of_experience", {
            required: "* years of experience  is required",
            min: {
              value: 3,
              message: "* minimum years of experience is 3",
            },
          })}
        />
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.years_of_experience?.message}
      </p>

      <div className="   border-b  ">
        <textarea
          rows={3}
          name="bio"
          id="bio"
          autoComplete="bio"
          placeholder="bio"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400   sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("bio", {
            required: "*  bio  is required",
          })}
        ></textarea>
      </div>

      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.bio?.message}
      </p>
      <div className="   border-b  ">
        <textarea
          rows={2}
          name="skills"
          id="skills"
          autoComplete="skills"
          placeholder="skills"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400   sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("skills", {
            required: "*  skills  is required",
          })}
        ></textarea>
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.skills?.message}
      </p>

      <div className="    h-12  mt-3  border-b  ">
        <input
          id="linkedin_url"
          name="linkedin_url"
          autoComplete="linkedin_url"
          type="url"
          placeholder="linkedin url"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("linkedin_url", {
            required: "* linkedin url  is required",
            pattern: {
              value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
              message: "invalid url pattern",
            },
          })}
        />
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.linkedin_url?.message}
      </p>

      <div className="    h-12  mt-3  border-b  ">
        <input
          id="portfolio_url"
          name="portfolio_url"
          autoComplete="portfolio_url"
          type="url"
          placeholder="portfolio url"
          className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
          {...register("portfolio_url", {
            required: "* portfolio url  is required",
            pattern: {
              value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
              message: "invalid url pattern",
            },
          })}
        />
      </div>
      <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
        {errors.portfolio_url?.message}
      </p>

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
