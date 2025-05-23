import React from 'react'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/LinkedIn.svg'
import twitter from '../assets/twitter.svg'
import logo from '../assets/logo.jpg'
import Image from 'next/image'
const Footer = () => {
  return (
<footer className="Container flex gap-10 flex-col md:flex-row justify-evenly ">
  <nav className='flex flex-col gap-4 capitalize '>
    <h6 className="font-bold text-xl lg:mb-6">Services</h6>
    <p className="text-gray-700 ">best courses content</p>
    <p className="text-gray-700 ">find jobs</p>
    <p className="text-gray-700 ">easy communication</p>
  </nav>
  <nav className='flex flex-col gap-4 capitalize '>
    <h6 className="font-bold text-xl lg:mb-6">Contact Us</h6>
    <hgroup>
        <h1>email</h1>
        <p className='text-gray-700'>company.com</p>
    </hgroup>
    <hgroup>
        <h1>phone</h1>
        <p className='text-gray-700'>0121212</p>
    </hgroup>
    <hgroup>
        <h1>address</h1>
        <p className='text-gray-700'>mansoura  </p>
    </hgroup>
  </nav>
  <nav className='flex flex-col gap-4 capitalize'>
    <h6 className="font-bold text-xl lg:mb-6">Pages </h6>
    <a href='/' className="text-gray-700">home</a>
    <a href='/community' className="text-gray-700">community</a>
    <a href='/jobs' className="text-gray-700">Jobs</a>
  </nav>
  <nav className='flex flex-col gap-4 capitalize'>
    {/* <h6 className="font-bold text-xl lg:mb-6">Social</h6> */}
    <Image src='' alt="logo" />
    <div className="flex  items-center gap-2">
      <a href='#'>
<Image src={facebook} alt="" />
      </a>
      <a href='#'>
<Image src={linkedin} alt="" />
      </a>
      <a href='#'>
<Image src={twitter} alt="" />
      </a>

    </div>
  </nav>
</footer>
  )
}

export default Footer
