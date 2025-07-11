"use client"

import { useStore } from '../store/store';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';

import { useEffect, useState } from 'react';
import { createPost, updateJob } from '../Functions';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  
  outline: 'none', 
  borderRadius: '12px',

};

const JobFlow = () => {

  const { flowOpen ,handleClose,alert,Flow,job} = useStore();
  const{register,handleSubmit,formState:{errors},watch,setValue,reset}=useForm()

  const [update, setUpdate] = useState('');



    const onSubmit=(data)=>{
      updateJob(data)
      setUpdate('')
      handleClose()
  }

  useEffect(() => {
  setValue("title",job?.title)
  setValue("description",job?.description)
  setValue("type",job?.type)
  setValue("location",job?.location)
  setValue("deadline",job?.deadline)
  setValue("course_ids",job?.course_ids)
  }, [])
  return (
    <Modal
    open={flowOpen}
    onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full sm:w-1/2 mx-auto'
  >

  <Box sx={style} className={`sm:w-1/2 w-full  text-gray-800  sm:max-h-screen   p-2  `}>

    

    <section className='  mt-5  p-2'>
      

 <form
      onSubmit={handleSubmit(onSubmit)}
    >
      {
        update===''?
        <>
          <h1 className="text-2xl   text-center ">what do you wan't to update</h1>
          <div className="  w-full   h-14 my-4   border rounded-xl  ">
          <select
            name="type"
            id="type"
            {...register("type", { required: "* select job type" })}
            className=" w-full h-14 sm:text-sm/6 focus:outline-none bg-transparent"
              onChange={(e) => setUpdate(e.target.value)}

          >
            <option
              className="border border-b"
              selected
              hidden
              value=""
            >
update           
 </option>
            <option className=" text-gray-900" >title</option>
            <option className=" text-gray-900">description</option>
            <option className=" text-gray-900">type</option>
            <option className=" text-gray-900">location</option>
            <option className=" text-gray-900">deadline</option>
            <option className=" text-gray-900">preferred course</option>
          </select>

          <p className="capitalize ms-1 mt-1 mb-3 text-red-600">
            {errors.type?.message}
          </p>
        </div>
        </>
        :
        <>
      <h1 className="text-3xl font-semibold  text-center ">Update {update} </h1>
      <main className="flex flex-wrap sm:gap-10 justify-center">
        {
          update==='title'?
          
        <div className="  w-full   h-14  mt-8  border rounded-xl  ">
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
:null
        }
        {
          update==='preferred course'?
          
        <div className="  w-full   h-14  mt-8  border rounded-xl  ">
          <input
            id="preferred_course"
            name="preferred_course"
            autoComplete="preferred_course"
            type="number"
            placeholder="preferred course id"
            className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent"
            {...register("preferred_course", {
              required: "* course id is required",
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
:null
        }
                {
          update==='location'?
          
        <div className="  w-full   h-14  mt-8  border rounded-xl  ">
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
:null
        }
                     {
          update==='type'?
          
        <div className="  w-full   h-14  mt-8  border rounded-xl  ">
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
        :null
        }
                             {
          update==='deadline'?
          
        <div className="   w-full   h-14  mt-8  border rounded-xl  ">
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
               :null
        }
                                     {
          update==='description'?
          
        <div className="   w-full    mt-8  border rounded-xl    ">
          <textarea
            id="description"
            name="description"
            rows={5}
            cols={80}
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
                    :null
        }
      </main>

      <button
        type="submit"
        className="w-full  mt-10 h-12  bg-btn "
      >
        Updata Now
      </button>
      </>
      }

    </form>
    


</section>
  
  </Box>


</Modal>
  )
}

export default JobFlow
