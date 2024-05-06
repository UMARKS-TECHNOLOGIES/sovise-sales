import React from 'react'
import hero from '../assets/images/hero.png'
import headChef from '../assets/images/head-chef.jpg'

const Hero = () => {
    return (
        <div className='w-full mt-[25%] lg:mt-[3%] lg:relative'>
            <div className="w-[90%] lg:w-full m-auto">
                <div className="w-full h-[60vh] lg:h-[90vh] lg:overflow-hidden lg:relative">
                    <img src={hero} alt="" className='w-full' width={100} />
                </div>
                <div className="w-full pt-24 pb-5 lg:hidden">
                    <div className="w-full lg:w-[20%] m-auto py-3">
                        <h3 className="font-bold border-b-slate-500 border-b-2 text-xl">Meet The Head Chef</h3>
                    </div>
                    <div className="flex justify-between flex-nowrap h-full gap-3 mb-4">
                        <div className="w-[55%] py-3 h-full">
                            <img src={headChef} alt=""/>
                        </div>
                        <div className="w-[70%] lg:w-[50%] py-2 h-full">
                            <p className='h-[40%] text-[12px] mb-3'>Sophia Patrick-Atrogo is the Creative Director at Sovise Cook&Bake Academy a profession chef and author of Cooking Meals With Ease.</p>
                            <p className='h-[40%] text-[12px]'>A professionally trained chef, Sophia has spent the last decade teching and mentoring over 3000 women and girls on modern techniques in cooking and baking.</p>
                        </div>
                    </div>
                    <p>Many of our students are now running their own profitable food businesses.</p>
                    <br />
                    <p>Sophia is an Alumni of University of Port Harcourt Nigeria, Seedstar Switzerland, Goldman Sachs USA, The Cherie Blair Foundation for women UK, The Tony Elumelu Foundation NIGERIA, The FATE foundation NIGERIA, Enterprise Development Centre of the Lagos Business School NIGERIA and many more.</p>
                </div>
                <div className="w-full py-16 hidden lg:block">
                    <div className="w-full flex flex-col gap-6 items-center">
                        <h3 className="font-bold text-3xl border-slate-400 border-b-2">Meet The Head Chef</h3>
                        <div className="flex items-center justify-center gap-5">
                            <div className="w-[25%]">
                                <img src={headChef} alt="" />
                            </div>
                            <div className="w-[50%]">
                                <p>Sophia Patrick-Atrogo is the Creative Director at Sovise Cook&Bake Academy a profession chef and author of Cooking Meals With Ease.</p>
                                <p>A professionally trained chef, Sophia has spent the last decade teching and mentoring over 3000 women and girls on modern techniques in cooking and baking.</p>
                                <p>Many of our students are now running their own profitable food businesses.</p>
                                <p>Sophia is an Alumni of University of Port Harcourt Nigeria, Seedstar Switzerland, Goldman Sachs USA, The Cherie Blair Foundation for women UK, The Tony Elumelu Foundation NIGERIA, The FATE foundation NIGERIA, Enterprise Development Centre of the Lagos Business School NIGERIA and many more.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Hero