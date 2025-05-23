"use client"

import { useStore } from '../store/store';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import user from'../assets/me.jpg'
import { useState } from 'react';
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

const Comments = () => {
  const { flowOpen ,handleClose,alert} = useStore();
  const{register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
    console.log(data)
  }
  const [src, setSrc] = useState();
const [selectedPhoto, setSelectedPhoto] = useState();

const handleFileChange = (e) => {
  setSrc(URL.createObjectURL(e.target.files[0]));
  setSelectedPhoto(e.target.files[0]);
};
  console.log(src)
  console.log(selectedPhoto)
  return (

<Modal
  open={flowOpen}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full sm:w-1/2 mx-auto'
>

  <Box sx={style} className={` w-full  text-gray-800 max-h-96 sm:max-h-screen overflow-y-scroll  p-2 `}>
    <section className='p-2'>
<main className=' mb-4 pb-4 border-b last-of-type:border-none'>
  <div className='flex items-center gap-4 '>
  <Image src={user} alt="" className='rounded-full w-12  h-12'/>
  <div>
    <h1 className='text-xl  '>mostafa</h1>
    <h1 className='text-gray-500 '>1h</h1>
  </div>
  </div>
    <p className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nesciunt doloribus nam, nostrum esse officia qui inventore quidem accusantium magnam?</p>
</main>
<main className=' mb-4 pb-4 border-b last-of-type:border-none'>
  <div className='flex items-center gap-4 '>
  <Image src={user} alt="" className='rounded-full w-12  h-12'/>
  <div>
    <h1 className='text-xl  '>mostafa</h1>
    <h1 className='text-gray-500 '>1h</h1>
  </div>
  </div>
    <p className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nesciunt doloribus nam, nostrum esse officia qui inventore quidem accusantium magnam?</p>
</main>
<main className=' mb-4 pb-4 border-b last-of-type:border-none'>
  <div className='flex items-center gap-4 '>
  <Image src={user} alt="" className='rounded-full w-12  h-12'/>
  <div>
    <h1 className='text-xl  '>mostafa</h1>
    <h1 className='text-gray-500 '>1h</h1>
  </div>
  </div>
    <p className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nesciunt doloribus nam, nostrum esse officia qui inventore quidem accusantium magnam?</p>
</main>
<main className=' mb-4 pb-4 border-b last-of-type:border-none'>
  <div className='flex items-center gap-4 '>
  <Image src={user} alt="" className='rounded-full w-12  h-12'/>
  <div>
    <h1 className='text-xl  '>mostafa</h1>
    <h1 className='text-gray-500 '>1h</h1>
  </div>
  </div>
    <p className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nesciunt doloribus nam, nostrum esse officia qui inventore quidem accusantium magnam?</p>
</main>
<main className=' mb-4 pb-4 border-b last-of-type:border-none'>
  <div className='flex items-center gap-4 '>
  <Image src={user} alt="" className='rounded-full w-12  h-12'/>
  <div>
    <h1 className='text-xl  '>mostafa</h1>
    <h1 className='text-gray-500 '>1h</h1>
  </div>
  </div>
    <p className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nesciunt doloribus nam, nostrum esse officia qui inventore quidem accusantium magnam?</p>
</main>
<main className=' mb-4 pb-4 border-b last-of-type:border-none'>
  <div className='flex items-center gap-4 '>
  <Image src={user} alt="" className='rounded-full w-12  h-12'/>
  <div>
    <h1 className='text-xl  '>mostafa</h1>
    <h1 className='text-gray-500 '>1h</h1>
  </div>
  </div>
    <p className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nesciunt doloribus nam, nostrum esse officia qui inventore quidem accusantium magnam?</p>
</main>

               <form className="sticky -bottom-2    h-14    bg-gray-50 border-b flex border-gray-600  items-center justify-between  " onSubmit={handleSubmit(onSubmit)}>
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



  </Box>


</Modal>
  )
}

export default Comments
