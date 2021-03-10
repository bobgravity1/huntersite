import React, {useEffect} from 'react'
// COMPONENTS
import Footer from '../content/Footer'
import image from '../../images/home-image-three.jpg'
import Body from '../content/Body'
import {Link} from 'react-router-dom'

//text
import text from '../../text/pages.js'

const Stories = () => {

    useEffect(()=>{
      console.log('i am rendered')
      window.scrollTo(0, 0);
    })
  return (
    <>
    <div className='bg-container'>
    <Body image={image}>{text.stories}</Body>
    <div className='w-full justify-between flex'>
        <Footer />

        <hr className='lg:block hidden mt-10 py-0'/>
        <div className='flex flex-col'>
            <Link to='/'>
            <button className='lg:mt-10 mt-20 my-0 border-green-800 bg-green-900  duration-200 antialiased mx-auto text-white p-2 font-bold lg:hover:bg-green-800 lg:hover:border-green-800 hover:text-white rounded-none text-lg lg:border-green-800 border-2'><svg xmlns="http://www.w3.org/2000/svg" className='icon-back' fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>Return Home</button>      </Link>
</div>

        </div>
</div>

    </>
  )
}

export default Stories
