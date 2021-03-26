import React from 'react'
import gavel from '../images/gavel.jpg'

const HomepagePicture = () => {
  const style={
    img:{
      height:'15rem',

    }
  }
  return (
    <div className='p-6 lg:p-4 bg-green-900 lg:bg-green-800 lg:mt-14 md:mt-6 mt-0 mb-6 lg:mg-0 m-0 w-full'>
  <img alt='homepagepic' style={style.img} src={gavel} />
  <p className='hidden lg:block px-4 pt-2 text-xs text-white'>Hunter Solicitors are available monday through friday 9-12</p>
</div>
  )
}

export default HomepagePicture
