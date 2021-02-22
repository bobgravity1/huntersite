import React from 'react'
import '../styles/custom.css'


const HomePageContentCards = (props) => {
  return (
    <>
    <div className='  my-8 md:mb-12 mb-0 justify-center flex mx-0 lg:mx-0 flex flex-wrap'>
    <div class="  mt-2  text-center">


  </div>

    <div>
	<div class=" bg-green-900	bg-left-top bg-auto bg-repeat-x">
	</div>

      <div class=" mx-auto ">




      <div class=" md:px-2 text-center  cursor-pointer">

          <div class="  shadow-lg hover:bg-gray-200 bg-white  ">
              <div class="space-y-4">
              <img className=' home-image' src={props.image} alt='card'/>

                      <div class="">
                          <div class="antialiased font-main-bold tracking-widest font-bold text-xl ">Our Team</div>
                          <p class="px-8 tracking-widest text-xs antialiased py-4 font-main text-black ">
                              Press here for more text-red-800 Press here for more text-red-800
                          </p>
                  </div>
              </div>

      </div>



      </div>
      </div>

  </div>

    </div>
    </>
  )
}

export default HomePageContentCards
