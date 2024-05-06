import React from 'react'
import eu from '../assets/images/eu.jpg'
import acp from '../assets/images/acp.jpg'
import german from '../assets/images/german.jpg'

const OurTeam = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[#eee] to-[#fff]'>
        <div className="w-[90%] m-auto py-10">
              <h3 className="font-bold border-b-slate-500 border-b-2 mb-3">OUR TEAM</h3>
              <p>The Academy over the past years has trained and mentored several women and girls in modern baking, pastry and cooking techniques that are doing exceptionally well in their food businesses. We have credible and tangible results and testimonials of women and girls we have trained and supported that are impacting their communities.</p>
              <br />
              <p>Our team is credible when it comes to gender equity because we've worked with many women and girls with fantastic results to show for, so Sovise Cook&Bake Academy is uniquely positioned to help you achieve your cooking and baking game.</p>
              <br />
              <p>In Sovise Cook&Bake Academy, our Mantra is a quote by Adrienne Rich, "The most important thing one woman can do for another is to expand her sense of actual possibilities." That's exactly what our team at Sovise Cook&Bake Academy is doing by expanding the possibilities of our students to create wealth for themselves, their families and their communities through their food businesses.</p>
              <div className="w-full py-8 flex flex-col gap-3">
                  <h3 className="font-bold">Supported by</h3>
                  <div className="flex justify- gap-3">
                      <div className="flex flex-col items-center gap-1">
                        <img src={eu} alt="" width={90}/>   
                        <h3>EU</h3>                       
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img src={acp} alt="" width={90} />     
                        <h3>OACPS</h3>                     
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <img src={german} alt="" width={90}/>  
                        <h3>BMZ</h3>                        
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default OurTeam