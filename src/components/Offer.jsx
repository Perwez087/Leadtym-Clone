import React from 'react'

const Offer = () => {
  return (
    <div className='text-white px-4 sm:px-16 p-20 md:px-32 relative'>
      <h1 className='md:text-[50px] text-[35px] relative leading-tight font-bold'><span className='bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent'>Our Offerings</span></h1>
      <img src='https://leadtym.com/static/media/effect.7df482fed4c7d0f89d1b.png' alt="bg" className='absolute bottom-10 left-2'/>
      <p className='mb-10 text-[#A9B8FA]'>Grow your revenue and build business with our multi-channel solutions.</p>

      <div className='flex sm:justify-around justify-center gap-y-8 md:gap-y-0 md:gap-x-4 flex-wrap'>
        <div className='md:w-[282px] w-full h-[325px] flex flex-col gap-4 border rounded-md p-6 bg-[#1A1622] border-[#DEE5ED]'>
        <div className='space-y-4'>
        <h1 className='font-bold text-white'>Performance Marketing :</h1>
            <p className='text-[#AEAEB2]'>
            Elevate your reach and conversions through Leadrtym's advanced affiliate marketing solutions, connecting advertisers and affiliates seamlessly.
            </p>
        </div>
            <a href='' className='mt-5 py-12 text-[#6E94FF] font-semibold hover:underline'>Learn More </a>
        </div>

        <div className='md:w-[282px] w-full h-[325px] flex flex-col gap-4 border rounded-md p-6 bg-[#1A1622] border-[#DEE5ED] hover:border-blue-400'>
        <div className='space-y-4'>
        <h1 className='font-bold text-white'>Media buying </h1>
            <p className='text-[#AEAEB2]'>
            Navigate the Indian digital landscape with ease using Leadrtym's technologically advanced media buying platform, streamlining processes and maximizing resources.
            </p>
        </div>
        <a href='' className='mt-5 py-6 text-[#6E94FF] font-semibold hover:underline'>Learn More </a>
        </div>

        <div className='md:w-[282px] w-full h-[325px] flex flex-col gap-4 border rounded-md p-6 bg-[#1A1622] border-[#DEE5ED] hover:border-blue-400'>
        <div className='space-y-4'>
        <h1 className='font-bold text-white'>Influencer Marketing</h1>
            <p className='text-[#AEAEB2]'>
            Unlock the potential of influencer partnerships on Leadrtym, fostering authentic connections that drive brand loyalty and exponential growth.
            </p>
        </div>
            <a href='' className='mt-5 py-12 text-[#6E94FF] font-semibold hover:underline'>Learn More </a>
        </div>

        <div className='md:w-[282px] w-full h-[325px] flex flex-col gap-4 border rounded-md p-6 bg-[#1A1622] border-[#DEE5ED] hover:border-blue-400'>
        <div className='space-y-4'>
        <h1 className='font-bold text-white'>Community Building</h1>
            <p className='text-[#AEAEB2]'>
            Cultivate brand loyalty and advocacy by building a strong community with Leadrtym, fostering lasting connections among customers and affiliates.
            </p>
        </div>
            <a href='' className='mt-5 py-12 text-[#6E94FF] font-semibold hover:underline'>Learn More </a>
        </div>
      </div>
    </div>
  )
}

export default Offer
