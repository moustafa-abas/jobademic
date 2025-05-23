"use client"

import { useStore } from '../store/store';
import Box from '@mui/material/Box';
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

const PostsFlow = () => {
  const { flowOpen ,handleClose,alert} = useStore();
  const{register,handleSubmit,formState:{errors},watch}=useForm()
  const onSubmit=(data)=>{
    console.log(data)
  }
  const [src, setSrc] = useState();
const [selectedPhoto, setSelectedPhoto] = useState();

const handleFileChange = (e) => {
  setSrc(URL.createObjectURL(e.target.files[0]));
  setSelectedPhoto(e.target.files[0]);
};
  // console.log(src)
  // console.log(selectedPhoto)
  
  return (
    <Modal
    open={flowOpen}
    onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full sm:w-1/2 mx-auto'
  >

  <Box sx={style} className={`sm:w-1/2 w-full  text-gray-800  sm:max-h-screen   p-2  `}>

    

    <section className='mt-5  p-2'>
  <h2 className='text-center  text-2xl font-bold'>{alert==='update post'?'update post':'Create Post'}</h2>
     <form action=""  onSubmit={ handleSubmit(onSubmit)} >
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
</section>
  
  </Box>


</Modal>
  )
}

export default PostsFlow
