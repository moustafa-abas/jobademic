import React from 'react'

const Loading = () => {
  return (
    <div className='absolute inset-0 bg-gray-950 opacity-90 flex justify-center  items-center text-white h-screen w-full z-50 text-xl'>
  <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
  </svg>
  Loading…    </div>
  )
}

export default Loading
