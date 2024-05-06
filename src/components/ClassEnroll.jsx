import React from 'react'
import { BakingClasses } from '../consts/data'

const ClassEnroll = () => {
  return (
      <div className='w-full bg-gradient-to-b from-[#eee] to-[#fff]'>
          <div className="w-[90%] m-auto py-10">
              <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-5">
                  {BakingClasses.map(classes => (
                      <ClassEnrollEach key={classes.id} classes={classes} />
                  ))}
              </div>
          </div>
    </div>
  )
}

function ClassEnrollEach({ classes }) {
    return (
        <div className="w-full flex flex-col gap-3 shadow-xl py-4 rounded-b-md">
            <div className="w-full">
                <img src={classes.img} alt="" />
            </div>
            <div className="w-[95%] m-auto">
                <h2 className='font-bold py-1 mb-1 border-solid border-b-2 border-slate-400'>{classes.title}</h2>
                <p><span>{classes.price}</span> {classes.days} {classes.weeks} {classes.months} {classes.years}</p>
                <p><span>{classes.withAccomodation}</span> </p>
                <br />
                <strong>COURSES OUTLINE</strong>
                <p>{classes.outline}</p> <br />
                <p>{classes.notice}</p> <br />
                <p className='text-orange-500 font-bold'>{classes.registration}</p> <br />
                <p className='text-orange-500 font-bold'>{classes.passport}</p>
            </div>
        </div>
    )
}

export default ClassEnroll