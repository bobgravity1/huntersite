import React from 'react'
import '../styles/custom.css'
// COMPONENTS
import BannerText from './BannerText.js'
import BannerImage from './BannerImage.js'


// ASSETS/IMPORTS
const Banner = () => {

  return (
    <>
    <div>
    <BannerImage />
    <BannerText />
    </div>
    </>
  )
}

export default Banner
