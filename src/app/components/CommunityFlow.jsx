"use client"

import Image from 'next/image';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { useStore } from '../store/store';
import { createComment, createPost } from '../Functions';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none', 
  borderRadius: '12px',

};

const CommunityFlow = () => {

    const { flowOpen ,handleClose,comments,communityFlow,Flow} = useStore()
    const{register,handleSubmit,formState:{errors},watch,reset}=useForm()
    const onSubmit=(data)=>{
    createComment(data)
    reset()
  }
      const onSubmit1=(data1)=>{
      createPost(data1)
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

{
  communityFlow==='comment'?
  <Box sx={style} className='max-h-96 overflow-y-scroll text-gray-700 w-full  md:w-3/4  '>
{
  comments?.length>0?
  <>
{
  [...comments]?.reverse().map((comment)=>

<main className=' py-3  border-b last-of-type:border-none  '>
  <div className='flex items-center gap-4 '>
                  {comment?.user?.profile_picture ? (
               <Image
                        src={`http://localhost:8000/${user?.profile_picture}`}
                        width={100}
                        height={100}
                        alt="user"
                        className="rounded-full w-20"
  
                      />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 46 46"
                      fill="none"
                                            className="rounded-full w-8"

                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.875 10.5C12.875 7.84784 13.9286 5.3043 15.8039 3.42893C17.6793 1.55357 20.2228 0.5 22.875 0.5C25.5272 0.5 28.0707 1.55357 29.9461 3.42893C31.8214 5.3043 32.875 7.84784 32.875 10.5C32.875 13.1522 31.8214 15.6957 29.9461 17.5711C28.0707 19.4464 25.5272 20.5 22.875 20.5C20.2228 20.5 17.6793 19.4464 15.8039 17.5711C13.9286 15.6957 12.875 13.1522 12.875 10.5ZM12.875 25.5C9.55979 25.5 6.38037 26.817 4.03617 29.1612C1.69196 31.5054 0.375 34.6848 0.375 38C0.375 39.9891 1.16518 41.8968 2.5717 43.3033C3.97822 44.7098 5.88588 45.5 7.875 45.5H37.875C39.8641 45.5 41.7718 44.7098 43.1783 43.3033C44.5848 41.8968 45.375 39.9891 45.375 38C45.375 34.6848 44.058 31.5054 41.7138 29.1612C39.3696 26.817 36.1902 25.5 32.875 25.5H12.875Z"
                        fill="#626262"
                      />
                    </svg>
                  )}  
                  <hgroup>
    <h1 className='text-xl  font-semibold text-[var(--second-color)]'>{comment.user?.name}</h1>

    <p className='   text-[var(--main-color)]'>{comment.user?.role}</p>
                  </hgroup>
  </div>
    <p className='text-xl mt-3'>{comment?.content}</p>
</main>
  )
}
</>
:
<p className='text-center text-xl font-semibold capitalize'>be the first comment</p>
}

          <form className="sticky -bottom-8 z-50  h-14    bg-gray-50 border-b flex border-gray-600  items-center justify-between  " onSubmit={handleSubmit(onSubmit)}>
            <input id="content" name="content"  autoComplete="content" type='text' placeholder='Write a comment' className="block  w-full h-full     px-3 py-1.5 text-base placeholder:text-gray-600  sm:text-sm/6 focus:outline-none bg-transparent" 
         {...register("content", {
            required: "* comment can't be empty",

          })}                
             />
             <button type='submit' className='me-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 25" fill="none" >
  <path d="M0.111484 3.18468L1.12839 1.73213L30.2576 0.180647L31.1337 1.87967L12.9597 24.6779L11.1774 24.6461L8.55856 12.6166L0.111484 3.18468ZM10.86 12.5619L12.8368 22.0246L27.9908 2.37048L3.34681 3.61968L9.88154 10.6643L19.574 5.80482L20.4961 7.59327L10.86 12.5619Z" fill={`var(--second-color)`} />
</svg>
             </button>
        </form>


  </Box>
:
<>
  <Box sx={style} className={`sm:w-1/2 w-full  text-gray-800  sm:max-h-screen   p-2  `}>

  <h2 className='text-center  text-2xl font-bold'>{Flow==='update post'?'update post':'Create Post'}</h2>
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


    <button type='submit' className={`${watch('content')?'bg-btn':'bg-gray-600 text-white rounded'}  w-full py-4 mt-4`} disabled={!watch('content')} >{watch('content')?'Post':`can't make empty post`}</button>
</form> 
</Box>
</>
}
  
  </Modal>


  )
}

export default CommunityFlow
