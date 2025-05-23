'use client'
import { Import } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
const page = () => {
  const [minute, setMinute] = useState(9);
  const [second, setSecond] = useState(59);
  const [code, setCode] = useState(true);
      const {
          register,
          handleSubmit,
          formState:{errors},
          watch
        } = useForm();
        const onSubmit=(data)=>{
          console.log(data)
        }
        setTimeout(() => {
          if(minute>=0 && second>0){
          setSecond(second-1)
        }else if(minute>=1 && second===0){
setMinute(minute-1)
setSecond(59)
        }else{
setCode(false)
        }
        }, 1000);
  return (<section className='relative'>
    <a href="/register/sign">

      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="#fff" className='absolute top-5 left-5'>
  <path d="M14.812 25.5074L6.47522 17.1809C6.32342 17.0226 6.20443 16.8358 6.12507 16.6314C5.95831 16.226 5.95831 15.7712 6.12507 15.3658C6.20443 15.1614 6.32342 14.9746 6.47522 14.8162L14.812 6.48975C14.9675 6.33448 15.152 6.21131 15.3552 6.12728C15.5583 6.04325 15.776 6 15.9958 6C16.4399 6 16.8657 6.17617 17.1797 6.48975C17.4936 6.80333 17.67 7.22864 17.67 7.67211C17.67 8.11558 17.4936 8.54089 17.1797 8.85447L11.6774 14.3333L24.3326 14.3333C24.7749 14.3333 25.199 14.5087 25.5116 14.821C25.8243 15.1333 26 15.5569 26 15.9986C26 16.4402 25.8243 16.8638 25.5116 17.1761C25.199 17.4884 24.7749 17.6639 24.3326 17.6639L11.6774 17.6639L17.1797 23.1427C17.3359 23.2975 17.46 23.4817 17.5446 23.6846C17.6293 23.8875 17.6729 24.1052 17.6729 24.3251C17.6729 24.5449 17.6293 24.7626 17.5446 24.9655C17.46 25.1684 17.3359 25.3526 17.1797 25.5074C17.0247 25.6635 16.8403 25.7874 16.6371 25.8719C16.4339 25.9565 16.216 26 15.9958 26C15.7757 26 15.5578 25.9565 15.3546 25.8719C15.1514 25.7874 14.967 25.6635 14.812 25.5074Z" fill="#fff" />
</svg>
    </a>
    <main className='w-full sm:w-1/2 mx-auto flex flex-col items-center text-center  pt-40'>
      <h1 className='capitalize text-3xl mb-6'>verify your email</h1>
      <h2 className='capitalize text-lg'>we have sent an email with your code to <span className='text-[var(--second-color)] normal-case'> mostafa@gmail.com</span></h2>
     {code?
      <form  className=' md:w-3/4 ' onSubmit={handleSubmit(onSubmit)} >
      <div className=" flex items-center  h-12  mt-8    border-b ">
                    <input id="code" name="code" type='text'  placeholder='Enter your code' className="block   h-full w-full    px-3 py-1.5 text-base placeholder:text-gray-400  sm:text-sm/6 focus:outline-none bg-transparent " 
                    {...register('code',{required:'* code is required',
         validate:(value)=>
          value.length===6||'*code must be exactly 6 number '
                    })}
                        
                     />
                </div>
        <p className='capitalize ms-1 mt-1 mb-3 text-start text-red-600'>{errors.code?.message}</p>     

<button className='bg-btn w-full h-12 capitalize mt-6' type='submit'>submit</button>
        <h2 className='capitalize text-lg mt-3'>didn't receive an email? <span className='text-[var(--main-color)] cursor-pointer'> resend</span></h2>
        <p className=' text-2xl mt-4'>{minute} : {second}</p>
               
               </form>:<>
               <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill={`var(--main-color)`} >
  <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill={`var(--main-color)`} />
</svg>
<h1 className='capitalize text-3xl mb-6'>code time out ,<span className='text-[var(--main-color)] cursor-pointer'> resend</span></h1>

</>
}
    </main>
    </section>
  )
}

export default page
