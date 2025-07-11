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
  
  outline: 'none', // ✅ تشيل الـ outline هنا
  borderRadius: '12px',

};

const PostsFlow = () => {

  const { flowOpen ,handleClose,alert,Flow,job} = useStore();
  const{register,handleSubmit,formState:{errors},watch,setValue,reset}=useForm()

  const [src, setSrc] = useState();
  const [update, setUpdate] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState();

const handleFileChange = (e) => {
  setSrc(URL.createObjectURL(e.target.files[0]));
  setSelectedPhoto(e.target.files[0]);
};
    const onSubmit1=(data)=>{
    createPost(data)
  }
    const onSubmit2=(data)=>{
      updateJob(data)
      setUpdate('')
      handleClose()
  }
    const onSubmit3=(data)=>{
    console.log(data)

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
      {
        Flow==='create post'?
<>
  <h2 className='text-center  text-2xl font-bold'>{alert==='update post'?'update post':'Create Post'}</h2>
     <form action=""  onSubmit={ handleSubmit(onSubmit1)} >
           <div className=" flex my-4">
        <input type="text" placeholder='What do you want to talk about?' className='w-full border-none ms-3  flex focus:outline-none placeholder:text-gray-500' 
        {...register('content',
            {required:true}
        )
        }
        />
        </div>
         {/* <div className='   border rounded relative h-52  cursor-pointer'>
        <input type="file" id='image' className='hidden text-center w-full h-full  '
    name='image'
    {...register('img')}
    accept='image/*'
    onChange={handleFileChange}
    />
    
    { src?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='absolute top-4 right-4' onClick={()=>{setSrc()
      setSelectedPhoto()
    }}>
  <path d="M15.5459 13.954C15.7572 14.1653 15.876 14.452 15.876 14.7509C15.876 15.0497 15.7572 15.3364 15.5459 15.5477C15.3346 15.7591 15.0479 15.8778 14.749 15.8778C14.4501 15.8778 14.1635 15.7591 13.9521 15.5477L7.99996 9.59367L2.0459 15.5459C1.83455 15.7572 1.54791 15.8759 1.24902 15.8759C0.950136 15.8759 0.663491 15.7572 0.452147 15.5459C0.240802 15.3345 0.12207 15.0479 0.12207 14.749C0.12207 14.4501 0.240802 14.1635 0.452147 13.9521L6.40621 7.99992L0.454022 2.04586C0.242677 1.83451 0.123945 1.54787 0.123945 1.24898C0.123945 0.950097 0.242677 0.663452 0.454022 0.452108C0.665366 0.240763 0.95201 0.122031 1.2509 0.122031C1.54978 0.122031 1.83643 0.240763 2.04777 0.452108L7.99996 6.40617L13.954 0.45117C14.1654 0.239826 14.452 0.121094 14.7509 0.121094C15.0498 0.121094 15.3364 0.239826 15.5478 0.45117C15.7591 0.662514 15.8778 0.949159 15.8778 1.24804C15.8778 1.54693 15.7591 1.83358 15.5478 2.04492L9.59371 7.99992L15.5459 13.954Z" fill="#090F24" />
</svg>: null}

    <label htmlFor="image" className=' w-full h-full text-center  '>
            {src? <img src={src} alt="post" className='w-full h-full' />:<div className=' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   '>
    <FontAwesomeIcon icon={faImage} className='fs-2 mb-2'/>   
    
    <h5>Add Photo</h5>
</div>
}
    </label>
</div> */}


    <button type='submit' className={`${watch('content')?'bg-btn':'bg-gray-600 text-white rounded'}  w-full py-4 mt-4`} disabled={!watch('content')} >{watch('content')?'Post':`can't make embty post`}</button>
</form> 
</>
:
Flow==='update job'?
 <form
      onSubmit={handleSubmit(onSubmit2)}
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
    :
    Flow==="comments"?
       <section className='p-2'>
    <main className=' mb-4 pb-4 border-b last-of-type:border-none'>
      <div className='flex items-center gap-4 '>
      {/* <Image src={user} alt="" className='rounded-full w-12  h-12'/> */}
      <div>
        <h1 className='text-xl  '>mostafa</h1>
        <h1 className='text-gray-500 '>1h</h1>
      </div>
      </div>
        <p className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nesciunt doloribus nam, nostrum esse officia qui inventore quidem accusantium magnam?</p>
    </main>

    
                   <form className="sticky -bottom-2    h-14    bg-gray-50 border-b flex border-gray-600  items-center justify-between  " onSubmit={handleSubmit(onSubmit3)}>
                <input id="comment" name="comment"  autoComplete="comment" type='text' placeholder='Write a comment' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-600  sm:text-sm/6 focus:outline-none bg-transparent" 
             {...register("comment", {
                required: "* comment can't be empty",
    
              })}                
                 />
                 <button type='submit' className='me-2'>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 25" fill="none" >
      <path d="M0.111484 3.18468L1.12839 1.73213L30.2576 0.180647L31.1337 1.87967L12.9597 24.6779L11.1774 24.6461L8.55856 12.6166L0.111484 3.18468ZM10.86 12.5619L12.8368 22.0246L27.9908 2.37048L3.34681 3.61968L9.88154 10.6643L19.574 5.80482L20.4961 7.59327L10.86 12.5619Z" fill={`var(--main-color)`} />
    </svg>
                 </button>
            </form>
            <p className='capitalize ms-1 text-red-700 mt-1'>{errors.comment?.message}</p>
          </section>
:null
}

</section>
  
  </Box>


</Modal>
  )
}

export default PostsFlow
