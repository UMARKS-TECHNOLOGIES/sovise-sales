import React from 'react'
import alumniOne from '../assets/images/alumni-one.png'
import alumniTwo from '../assets/images/alumni-two.png'

const Alumni = () => {
  return (
      <div className='w-full bg-gradient-to-b from-[#eee] to-[#eee]'>
          <div className="w-[90%] m-auto py-10">
              <h1 className='font-bold text-2xl mb-4 lg:text-center'>Meet Our Alumni</h1>
              <div className="w-full flex flex-col lg:flex-row lg:flex-nowrap gap-4">
                  <img src={alumniOne} alt="" className='lg:w-[50%]'/>
                  <img src={alumniTwo} alt="" className='lg:w-[50%]'/>
              </div>
          </div>
    </div>
  )
}

export default Alumni