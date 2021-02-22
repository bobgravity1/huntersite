import React, {useEffect} from 'react'
import '../styles/custom.css'
// COMPONENTS
import BannerText from './BannerText.js'
import BannerImage from './BannerImage.js'


// ASSETS/IMPORTS
const Banner = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
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
