import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from '../content/Footer'
import WrappedMap from '../Map.js'

// Context
import ThemeContext from '../../ThemeContext'

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    setOpen(false)
},[])

const {open, setOpen}=useContext(ThemeContext)


  return (
    <div className={`${open?'bg-container dark':'bg-container'}`}>
    <p className='ml-4 lg:text-left lg:ml-0 lg:py-4 pt-16 pb-0 title  text-white text-3xl'>
    Contact Us
    </p>
  <div className='lg:w-full justify-around lg:flex'>

<div className='pt-8  font-main antialiased p-4 text-white text-center lg:mx-0 mx-4 mt-8  border-4  border-green-700 bg-green-800 lg:w-1/3'>
Contact Us – We’re Here to Help
Thank you for visiting our website. Please complete our enquiry form, so we can provide quick, professional and efficient service. If this is an urgent matter please give us a call on <span className='font-bold'>+353 (0)1 213 5940. </span>
<br />

Suite 10, The Mall, Beacon Court,
Sandyford Business Park,
Sandyford, Dublin 18,
D18 RX03

Contact
Telephone: <span className='font-bold'>+353 (0)1 213 5940. </span>
<span className='font-bold'>Fax: +353 (0)1 213 5946</span>
<span className='font-bold'>E-mail: info@amoryssolicitors.com</span>

<div className=' p-4 text-white font-main antialiased  mt-12 bg-green-900 '>
Amorys Solicitors – Office Hours
Monday – Friday:08:00 – 18:00
Saturday – Sunday:Closed
</div>
</div>

<div className='mt-4 lg:mx-0 mx-4 lg:mt-8  border-4  border-green-700 bg-green-800 lg:w-3/5 '>
<div className='lg:mt-0 mt-8'>
<form className="mx-0 lg:mx-4 ">

    <div className="lg:mx-0 w-full mt-4 px-3">
    <h1 className='antialiased font-main text-center my-4 text-white font-bold '>Make an enquiry</h1>
      <label className="font-main antialiased block  text-white text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />


  </div>
    <div className=" w-full px-3">
      <label className="font-main antialiased block  text-white text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      <div className='w-full flex'>
      <button className=" w-3/4  bg-red-600 font-main antialiased my-4  mx-auto border-green-800 bg-green-700  duration-200 antialiased text-white p-2 font-bold lg:hover:bg-green-900 lg:hover:border-green-800 hover:text-white rounded-none text-lg lg:border-green-800 border-2" type="button">
        Send
      </button>
      </div>

  </div>


</form>
</div>



</div>


</div>


<div className='mt-8 lg:mt-12'>
  <WrappedMap
  isMarkerShown
  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places$key=${process.env.REACT_APP_GOOGLE_KEY}`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
  />
</div>


    <div className='w-full justify-between flex'>
        <Footer />

        <Link to='/'>
        <hr className='lg:block hidden mt-10 py-0'/>
        <div className='flex flex-col'>
            <button className='lg:mt-10 mt-20 my-0 border-green-800 bg-green-900  duration-200 antialiased mx-auto text-white p-2 font-bold lg:hover:bg-green-800 lg:hover:border-green-800 hover:text-white rounded-none text-lg lg:border-green-800 border-2'><svg xmlns="http://www.w3.org/2000/svg" className='icon-back' fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>Return Home</button>
  </div>
        </Link>
        </div>
  </div>
  )
}

export default Contact
