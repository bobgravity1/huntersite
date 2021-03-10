import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>

<footer className=" md:mt-4 mt-12  border-white  bg-green-800  sm:mt- ">
    <div className="max-w-full mx-auto  text-gray-800 flex flex-wrap ">
            <div className=" font-main p-3  w-1/2 sm:w-4/12 md:w-4/12">
                <div className="font-bold z text-sm  uppercase text-white text-font-bold mb-2">
                    Hunter Solicitors
                </div>
                <hr className='py-0'/>
                <Link to='/'><div href="#" className="font-main my-3 block text-white hover:text-white text-xs font-medium duration-700">
                    Lavery House, Earl Street, Dublin 4, D12 T325, Ireland
                </div></Link>
            <Link to='/'>  <div className="font-semibold font-main my-3 block text-white hover:text-white text-xs font-medium duration-700">


                  <svg className='icon-contact' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
  </svg>
                  Phone: +353 1 6624747
                </div>
</Link>

<div className=''>
              <Link to='/'>    <div href="#" class=" font-main my-3 block text-white hover:text-white text-xs font-semibold duration-700">
                <svg className='icon-contact' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
                  Mail: law@hunter-solicitors.ie
                </div>
                </Link>
                </div>
    </div>

        <div class="lg:mt-0 mt-0 p-3 w-1/2 sm:w-4/12 md:w-3/12">
            <div class=" font-main text-sm  uppercase text-white font-bold mb-2">
                Policy
            </div>
            <hr className='py-0'/>
<Link to='/'>
            <div href="#" className="my-3 block text-white hover:text-white text-xs font-medium duration-700">
                Disclaimer
            </div>
            </Link>
    <Link to='/'>
            <div href="#" className="my-3 block text-white hover:text-white text-xs font-medium duration-700">
                Data Protection Info
            </div>
              </Link>
      <Link to='/'>
            <div href="#" className="my-0 block text-white hover:text-white text-xs font-medium duration-700">
                  Privacy Policy
            </div>
      </Link>

        </div>

        <div className=" p-3 w-1/2 sm:w-4/12 md:w-3/12">
            <div className=" font-main text-sm  uppercase lg:pt-0 pt-5 text-white font-bold mb-2">
                General
            </div>
            <hr className='py-0'/>

            <Link to='/about'>  <div href="#" className="my-3 block text-white hover:text-white text-xs font-medium duration-700">
                About
            </div>
            </Link>
            <Link to='/'>  <div href="#" className="my-3 block text-white hover:text-white text-xs font-medium duration-700">
                Contact
            </div>
                </Link>
                <Link to='/'>
            <div href="#" className="my-0 block text-white hover:text-white text-xs font-medium duration-700">
                Team
            </div>
  </Link>
        </div>



        <div className=" p-3 w-3/6 lg:w-1/6">
            <div className="mt-5 lg:mt-0 font-main text-sm  uppercase text-white font-bold mb-2">
                Community
            </div>
            <hr className='py-0'/>
                <Link to='/'>
            <div href="#" className=" w-1/2 my-2 block text-white  hover:text-gray-200 font-main-bold text-xs font-medium duration-200">
                Facebook
            </div>
            </Link>
              <Link to='/'>
            <div href="#" className=" w-1/2 my-2 block text-white  hover:text-gray-200 font-main-bold text-xs font-medium duration-200">
                Google
            </div>
            </Link>
              <Link to='/'>
            <div href="#" className=" w-1/2 my-2 block text-white  hover:text-gray-200 font-main-bold text-xs font-medium duration-200">
                Twitter
            </div>
            </Link>
              <Link to='/'>
            <div href="#" className=" w-1/2 my-0 block text-white  hover:text-gray-200 font-main-bold text-xs font-medium duration-200">
                Social
            </div>
            </Link>
        </div>
    </div>
    <div className="-pt-0">
        <div className="flex pb-0 px-3 bg-green-900 m-auto pt-2
             text-xs
            flex-col ">
            <div className="text-white -mt-2">
                ©Copyright 2020. Development & Design: Robert O'Toole.
            </div>
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <Link to='/'>
                <div href="#" className="w-6 mx-1">
                    <i className="uil uil-facebook-f"></i>
                </div>
                </Link>
                  <Link to='/'>
                <div href="#" className="w-6 mx-1">
                    <i className="uil x uil-twitter-alt"></i>
                </div>
                </Link>
                  <Link to='/'>
                <div href="#" className="w-6 mx-1">
                    <i className="uil uil-youtube"></i>
                </div>
                </Link>
                  <Link to='/'>
                <div href="#" className="w-6 mx-1">
                    <i className="uil uil-linkedin"></i>
                </div>
                </Link>
                <Link to='/'>
                <div href="#" className="w-6 mx-1">
                    <i className="uil uil-instagram"></i>
                </div>
                </Link>
            </div>
        </div>
    </div>
</footer></div>
  )
}

export default Footer
