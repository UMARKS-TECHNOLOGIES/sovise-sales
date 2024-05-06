import React from 'react'
import { Testimony } from '../consts/data'

const Testimonials = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[#eee] to-[#fff]'>
        <div className="w-[90%] m-auto py-10">
            <h3 className="font-bold border-b-slate-500 border-b-2 mb-3">TESTIMONIALS</h3>
            <div className="w-full py-4">
                {Testimony.map((item) => (
                    <PerTestimony key={item.id} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export function PerTestimony({ item }) {
    return (
        <div className="w-full flex items-center flex-nowrap gap-5 mb-6">
            <div className="w-[30%]">
                <img src={item.image} alt="" />
            </div>
            <div className="w-[70%] flex flex-col gap-3">
                <h3 className="font-bold">{item.name}</h3>
                <p className='text-[11px]'>{ item.message }</p>
            </div>
        </div>
    )
}

export default Testimonials