"use client"
import React, { useEffect } from 'react'
import { useStore } from '../store/store'

const Process = () => {
    const{error ,setError}=useStore()

setTimeout(() => {
error!=''?
setError('')
:null}, 2000)

  return (
    <div className='absolute inset-0 bg-gray-950  flex justify-center opacity-7 pt-72 text-white h-full w-full z-50 text-3xl font-semibold '>
 
  {error}   </div>
  )
}

export default Process

