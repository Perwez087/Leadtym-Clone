import React from 'react'

const Join = () => {
  return (
    <div className='pt-10 text-white p-10 py-20'>
      <div className='flex items-center justify-center'>
        <div>
        <h1 className='sm:text-[40px] relative inline-block text-[30px] leading-tight font-bold'><span className='bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent'>How to Join</span></h1>
        <p className='text-[#A9B8FA] mb-10'>A Four Step Process</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10'>
            <div className='opacity-100 border-white border-opacity-20 border duration-300 xl:w-[600px] h-[311px] rounded-xl bg-gradient-to-r from-stone-900 '>
                <div className='text-sm uppercase tracking-wide font-bold mb-2 pt-6 pb-5 mx-4 text-orange-400'>Step 1.</div>
                <div className='text-xl text-white md:text-[25px] lg:text-[36px] font-medium mb-4 pb-5 mx-4'>Join Wishlist</div>
                <p className='text-[#A3A3A3] text-[16px] opacity-80 mx-4'>Click “Apply Now”. Fill the form and submit. We read each application at least twice before coming to a decision</p>
            </div>

            <div className='opacity-100 border-white border-opacity-20 border duration-300 xl:w-[600px] h-[311px] rounded-xl bg-gradient-to-l from-indigo-950'>
                <div className='text-sm uppercase tracking-wide font-bold mb-2 pt-6 pb-5 mx-4 text-blue-600'>Step 2.</div>
                <div className='text-xl text-white md:text-[25px] lg:text-[36px] font-medium mb-4 pb-5 mx-4'>Application Screening</div>
                <p className='text-[#A3A3A3] text-[16px] opacity-80 mx-4'>The applications we love will hear back from us. We send out call invites within 24 Hours</p>
            </div>

            <div className='opacity-100 border-white border-opacity-20 border duration-300 xl:w-[600px] h-[311px] rounded-xl bg-gradient-to-r from-black to-green-950'>
                <div className='text-sm uppercase tracking-wide font-bold mb-2 pt-6 pb-5 mx-4 text-green-500'>Step 3.</div>
                <div className='text-xl text-white md:text-[25px] lg:text-[36px] font-medium mb-4 pb-5 mx-4'>Demo of Platform</div>
                <p className='text-[#A3A3A3] text-[16px] opacity-80 mx-4'>We will connect with you on call [Just to give you a better understanding of our platform]</p>
            </div>

            <div className='opacity-100 border-white border-opacity-20 border duration-300 xl:w-[600px] h-[311px] rounded-xl bg-gradient-to-r from-black to-[#5A585D]'>
                <div className='text-sm uppercase tracking-wide font-bold mb-2 pt-6 pb-5 mx-4'>Step 4.</div>
                <div className='text-xl text-white md:text-[25px] lg:text-[36px] font-medium mb-4 pb-5 mx-4'>Community Onboarding</div>
                <p className='text-[#A3A3A3] text-[16px] opacity-80 mx-4'>After acceptance We will onboard you in our community</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Join
