import React from 'react'
import gavel from '../images/gavel.jpg'

const HomepagePicture = () => {
  const style={
    img:{
      height:'18rem',

    }
  }
  return (
    <div className='lg:m-0 m-4 bg-green-800 rounded-lg lg:mt-14 md:mt-6 mt-0 mb-4 lg:mb-12 lg:mg-0 m-0 '>
  <img className='lg:mb-0 mb-8 lg:pb-4 bg-green-800 rounded-lg p-2 ' alt='homepagepic' style={style.img} src={gavel} />
  <p className='hidden italic font-light text-center lg:block pb-2 text-xs text-white'>We are available monday to friday 9-12</p>
</div>
  )
}

export default HomepagePicture
