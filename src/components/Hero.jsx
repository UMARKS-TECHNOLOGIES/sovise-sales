import React from 'react'
import hero from '../assets/images/hero.png'
import headChef from '../assets/images/head-chef.jpg'

const Hero = () => {
    return (
        <div className='w-full'>
            <img src={hero} alt="" className='w-full' width={100} />
            <div className="w-[90%] m-auto py-8">
                <h3 className="font-bold border-b-slate-500 border-b-2">Meet The Head Chef</h3>
                <div className="flex justify-between flex-nowrap h-full gap-3 mb-4">
                    <div className="w-[55%] py-3 h-full">
                        <img src={headChef} alt=""/>
                    </div>
                    <div className="w-[70%] py-2 h-full">
                        <p className='h-[40%] text-[12px] leading-[-1px] mb-3'>Sophia Patrick-Atrogo is the Creative Director at Sovise Cook&Bake Academy a profession chef and author of Cooking Meals With Ease.</p>
                        <p className='h-[40%] text-[12px] leading-[-1px]'>A professionally trained chef, Sophia has spent the last decade teching and mentoring over 3000 women and girls on modern techniques in cooking and baking.</p>
                    </div>
                </div>
                <p>Many of our students are now running their own profitable food businesses.</p>
                <br />
                <p>Sophia is an Alumni of University of Port Harcourt Nigeria, Seedstar Switzerland, Goldman Sachs USA, The Cherie Blair Foundation for women UK, The Tony Elumelu Foundation NIGERIA, The FATE foundation NIGERIA, Enterprise Development Centre of the Lagos Business School NIGERIA and many more.</p>
            </div>
        </div>
    )
}

export default Hero