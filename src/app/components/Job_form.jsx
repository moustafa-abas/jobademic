"use client"

import { useStore } from '../store/store';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { applyJob } from '../Functions';

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
  const { flowOpen ,handleClose} = useStore()
  const{ register,handleSubmit, formState:{errors},reset}=useForm()
  const onSubmit=(data)=>{
applyJob(data) 
reset()
    }
  return (

<Modal
  open={flowOpen}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full sm:w-1/2 mx-auto'
>
  
  <Box sx={style} className=' text-gray-700 w-full  md:w-3/4 z-20 '>
<form action="" onSubmit={handleSubmit(onSubmit)} >
        <h1 className='text-3xl font-semibold  text-center capitalize'>Apply</h1>

        <p className='capitalize ms-1  text-red-500'>{errors.phone?.message}</p> 
     
            <div className="    h-12  my-3  border-b border-gray-500 ">
                 <input id="resume_url" name="resume_url"  autoComplete="resume_url" type='url' placeholder='Resume url' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-500  sm:text-sm/6 focus:outline-none bg-transparent" 
              {...register("resume_url", {
                 required: "* resume url  is required",
                 pattern: {
                    value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/i,
                    message: "invalid url pattern"
                  }
             })}
                 />
             </div>
        <p className='capitalize ms-1  text-red-500'>{errors.resume_url?.message}</p>     
 
        <button type="submit" className='bg-btn w-full h-12 my-6'>Apply</button>
        <button className=' w-full h-12 mb-6 text-gray-700 border border-gray-700 rounded  'onClick={()=>handleClose()}>Cancel</button>
</form>
  </Box>
</Modal>
  )
}

export default Job_form
