import React, { useState } from 'react'
import logo from "/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [isToggle,setToggle] = useState(false);

    const handleNav = () =>{
        setToggle(!isToggle);
    }
  return (
    <nav className='w-full bg-[#110F16] py-4 fixed z-20'>
        <div className='w-full px-2 lg:px-4'>
            <div className='flex justify-between items-center'>

            <div className='px-6 mt-1 flex items-center'>
               <img src={logo}/>
            </div>

            <div className='hidden md:flex text-white space-x-8'>
               <a href='/advertiser' className='hover:text-blue-500 font-semibold duration-300'>Advertiser</a>
               <a href='/publisher' className='hover:text-blue-500 font-semibold duration-300'>Publisher</a>
               <a href='/influencer' className='hover:text-blue-500 font-semibold duration-300'>Influencer</a>
               <a href='/loyalityProgram' className='hover:text-blue-500 font-semibold duration-300 whitespace-nowrap'>Loyality Program</a>
               <a href='/referrals' className='hover:text-blue-500 font-semibold'>Referrals</a>
            </div>

            <div className='md:px-4 hidden md:flex'>
            <a href='/commingsoon' className='text-white border px-6 py-2 rounded-md  hover:bg-white hover:text-black font-semibold duration-300'>Login</a>
            </div>

            <button onClick={handleNav} className='text-white md:hidden'>
                {!isToggle ? <FaBars size={23} className='mx-4'/> : <RxCross2 size={23} className='mx-4 border rounded-full'/>}
            </button>
            </div>
        </div>

       {/* Mobile Device */}

        <div className={` ${isToggle ? "-translate-x-0" : "-translate-x-full"} absolute top-0 left-0 w-[75%] h-[110vh]
         bg-black shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden`}> 

          <div className='p-4'>
               <img src={logo}/>
            </div>
            
            <div className='md:hidden flex flex-col text-white'>
               <a href='/advertiser' className='block px-4 m-4 hover:text-blue-500 font-semibold duration-300 text-lg'>Advertiser</a>
               <a href='/publisher' className='block px-4 m-4 hover:text-blue-500 font-semibold duration-300 text-lg'>Publisher</a>
               <a href='/influencer' className='block px-4 m-4 hover:text-blue-500 font-semibold duration-300 text-lg'>Influencer</a>
               <a href='/loyalityProgram' className='block px-4 m-4 hover:text-blue-500 font-semibold duration-300 text-lg'>Loyality Program</a>
               <a href='/referrals' className='block px-4 m-4 hover:text-blue-500 font-semibold text-lg'>Referrals</a>
            </div>
            <div className='px-4 m-4'>
            <a href='/commingsoon' className='text-white text-lg font-medium'>Login</a>
            </div>
          </div>
    </nav>
  )
}

export default Navbar
