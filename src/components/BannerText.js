import React from 'react'
import '../styles/custom.css'

const BannerText = () => {
  const scrollBottom = () =>{
   window.scroll({ top: 1580, behavior: 'smooth' });
};

  return (
    <>

    <div className='  items-center font-main   flex flex-col  justify-end text-white banner-text'>
    <p className='shadow-main text-xl xl:text-4xl 2xl:text-52xl antialiased tracking-wider mt-8 lg:mt-0 text-center font-second-bold mb-2'>Welcome</p>
    <p className='w-3/4 lg:w-2/3 shadow-main text-sm mx-8 md:mx-0 xl:text-md 2xl:text-xl antialiased  text-center mb-4 mdmb-8 md:text-lg  leading-6 '> The vision and mission statements
    will guide the firm’s actions
    in a direction that aligns with what the
    lawyers believe is right for the firm lawyers.  </p>
    <button className='xl:my-12 lg:my-6 my-2 border-green-700 md:bg-transparent bg-green-800  duration-200 antialiased mx-auto w-1/2 md:w-1/4 lg:text-green-800 p-2 font-bold lg:hover:bg-green-700 lg:hover:border-green-700 hover:text-white rounded-none text-lg lg:border-green-800 border-2'>About Us</button>
      <p className='mt-2 block lg:hidden animate-pulse text-xs'>Click to read more</p>
    <svg onClick={()=>scrollBottom()} className='animate-pulse arrow' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">

    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
    </div>



    </>
  )
}

export default BannerText
