"use client"

import { useStore } from '../store/store';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none', // ✅ تشيل الـ outline هنا
  borderRadius: '12px',

};

const Job_form = () => {
  const { flowOpen ,handleClose,logined} = useStore()
  const{ register,handleSubmit, formState:{errors}}=useForm()
        const onSubmit=(data)=>{
        console.log(data)
      }
  return (

<Modal
  open={flowOpen}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full sm:w-1/2 mx-auto'
>
  
  <Box sx={style} className=' text-gray-700 w-full  md:w-3/4  '>
<form action="" onSubmit={handleSubmit(onSubmit)} >
        <h1 className='text-3xl font-semibold  text-center capitalize'>Apply</h1>

          <div className="    h-12  my-3  border-b border-gray-500 ">
            <input id="name" name="name"  autoComplete="name" type='text' placeholder='user name' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-500  sm:text-sm/6 focus:outline-none bg-transparent" 
         {...register("name", {
            required: "* User Name is required",

          })}                
             />

        </div>
        <p className='capitalize ms-1  text-red-500'>{errors.name?.message}</p> 
          <div className="    h-12  my-3  border-b border-gray-500 ">
            <input id="phone" name="phone"  autoComplete="phone" type='tel' placeholder='phone' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-500  sm:text-sm/6 focus:outline-none bg-transparent" 
         {...register("phone", {
            required: "* phone is required",

          })}                
             />

        </div>
        <p className='capitalize ms-1  text-red-500'>{errors.phone?.message}</p> 
     
            <div className="    h-12  my-3  border-b border-gray-500 ">
                 <input id="linkedin_url" name="linkedin_url"  autoComplete="linkedin_url" type='url' placeholder='linkedin url' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-500  sm:text-sm/6 focus:outline-none bg-transparent" 
              {...register("linkedin_url", {
                 required: "* linkedin url  is required",
                 pattern: {
                    value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                    message: "invalid url pattern"
                  }
             })}
                 />
             </div>
        <p className='capitalize ms-1  text-red-500'>{errors.linkedin_url?.message}</p>     
            <div className="    h-20  my-3  border-b border-gray-500 relative">
                 <input id="cv" name="cv"  autoComplete="cv" type='file' placeholder='cv ' className="hidden  w-full h-full      px-3 py-1.5 text-base placeholder:text-gray-500  sm:text-sm/6 focus:outline-none bg-transparent" 
              {...register("cv", {
                 required: "* cv   is required",

             })}
                 />
             <label htmlFor="cv" className=' cursor-pointer w-full h-full flex items-center justify-center gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <path d="M16.5801 22.0002V15.3335" stroke="#848484" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M19.8337 18.6665H13.167" stroke="#848484" strokeWidth={1.5} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M29.8337 14.6665V22.6665C29.8337 27.9998 28.5003 29.3332 23.167 29.3332H9.83366C4.50033 29.3332 3.16699 27.9998 3.16699 22.6665V9.33317C3.16699 3.99984 4.50033 2.6665 9.83366 2.6665H11.8337C13.8337 2.6665 14.2737 3.25317 15.0337 4.2665L17.0337 6.93317C17.5403 7.59984 17.8337 7.99984 19.167 7.99984H23.167C28.5003 7.99984 29.8337 9.33317 29.8337 14.6665Z" stroke="#848484" strokeWidth={1.5} strokeMiterlimit={10} />
</svg> Upload your cv here
             </label>
             </div>
        <p className='capitalize ms-1  text-red-500'>{errors.cv?.message}</p>     

        <button type="submit" className='bg-btn w-full h-12 my-6'>Apply</button>
        <button className=' w-full h-12 mb-6 text-gray-700 border border-gray-700 rounded  'onClick={()=>handleClose()}>Cancel</button>
</form>
  </Box>
</Modal>
  )
}

export default Job_form
