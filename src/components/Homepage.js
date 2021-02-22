import React from 'react'
// COMPONENTS
import Banner from './Banner'
import Footer from './Footer'
import GreenBanner from './GreenBanner'
import HomepageContentCards from './HomepageContentCards'
import HomepageContent from './HomepageContent'
import HomepageTeam from './HomepageTeam'
import WrappedMap from './Map'


// ASSETS
import imageTwo from '../images/home-image-two.jpg'
import imageThree from '../images/home-image-three.jpg'
import imageFour from '../images/home-image-four.jpg'



const Homepage = () => {
  return (
    <div className=' bg-container mt-10 md:mt-0 shadow-2xl'>
    <Banner />
    <div className='shadow-xl grid grid-cols-1 gap-0 lg:gap-0 lg:grid-cols-12'>
    <div class=" col-span-7">
    <HomepageContent />
        </div>
    <div class="">
    <HomepageTeam />
    </div>
    </div>
    <GreenBanner />
    <div className='grid grid-cols-1 gap-2 lg:gap-3 sm:grid-cols-3'>
    <HomepageContentCards image={imageTwo}/>
    <HomepageContentCards image={imageThree} />
    <HomepageContentCards image={imageFour} />
    </div>


  <div className='mt-8 lg:mt-0'>
    <WrappedMap
    isMarkerShown
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places$key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  </div>

    <Footer />

    </div>
  )
}

export default Homepage
