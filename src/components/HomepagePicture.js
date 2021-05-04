import React from 'react'
import gavel from '../images/gavel-minz.jpeg'
import brian from '../images/brianwalker.jpeg'
import '../styles/custom.css'

const HomepagePicture = () => {
  return (
    <div className='mb-8 lg:mt-20 m-2 bg-green-800   '>
  <img className='h-64 lg:h-72 mx-auto p-2 lg:pb-2 bg-green-800  ' alt='homepagepic' src={gavel} />
  <p className='italic font-light text-center lg:block pb-2 text-xs text-white'>We are available monday to friday 9-12</p>
</div>
  )
}

export default HomepagePicture
