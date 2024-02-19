import React from 'react'
import megaphone from "/megaphone.svg"
import people from "/people.svg"
import upload from "/upload.svg"

const Card = () => {
  return (
    <div className='sm:mx-0 mt-20'>
      <div className='bg-[#001D6C33] flex flex-col items-center px-4 md:px-8 lg:px-12 border-y border-white border-opacity-20 py-12 xl:px-16 w-full'>
        <div className='flex justify-around flex-wrap sm:gap-10 gap-6 text-white'>
             <div className='sm:w-[384px] sm:h-[203px] flex flex-col space-y-2 mx-4'>
                <div className='px-2'>
                <img src={megaphone} width={40} className='bg-white rounded-full py-2 px-2' alt='megaphone'/>
                </div>
                <h3 className='text-[16px] font-bold mb-1'>Advertise</h3> 
                <p className='text-[16px] text-[#AEAEB2] font-light'>
                "Amplify your brand's visibility and impact through targeted campaigns on Leadtym, reaching a diverse audience for optimal engagement and conversion."
                </p>
             </div>

             <div className='sm:w-[384px] sm:h-[203px] flex flex-col space-y-2 mx-4'>
                <div className='px-2'>
                <img src={upload} width={40} className='bg-white rounded-full py-1 px-1' alt='upload'/>
                </div>
                <h3 className='text-[16px] font-bold mb-1'>Publish</h3> 
                <p className='text-[16px] text-[#AEAEB2] font-light'>
                "Harness the power of influence on Leadtym, where brands and influencers converge for mutually beneficial partnerships, driving authentic engagement and revenue growth."
                </p>
             </div>

             <div className='sm:w-[384px] sm:h-[203px] flex flex-col space-y-2 mx-4'>
                <div className='px-2'>
                <img src={people} width={40} className='bg-white rounded-full py-1 px-1' alt='people'/>
                </div>
                <h3 className='text-[16px] font-bold mb-1'>Influence</h3> 
                <p className='text-[16px] text-[#AEAEB2] font-light'>
                "Amplify your brand's visibility and impact through targeted campaigns on Leadtym, reaching a diverse audience for optimal engagement and conversion."
                </p>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Card
