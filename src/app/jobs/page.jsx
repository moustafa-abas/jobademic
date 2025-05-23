import React from 'react'
import Job from '../components/Job'
import Jobs_landing from '../components/Jobs_landing'

const page = () => {
  return (
    <section className="jobs h-dvh relative ">

      <Jobs_landing/>
      <Job/>
    </section>
  )
}

export default page
