import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
<footer class="">

            <div class=" font-main p-3  ">
                <div class="font-bold text-sm  uppercase text-green-900 text-font-bold mb-2">
                    Hunter Solicitors
                </div>
                <hr className='py-0'/>
                <div className='bg-green-900'>
                <Link to='/'><div href="#" class=" text-white font-main my-3 block text-white hover:text-white text-xs font-medium duration-700">
                    Lavery House, Earl Street, Dublin 4, D12 T325, Ireland
                </div></Link>
            <Link to='/'>  <div className="text-white font-semibold font-main my-3 block text-white hover:text-white text-xs font-medium duration-700">



                  Phone: +353 1 6624747
                </div>

</Link>

<div className=''>
              <Link to='/'>    <div href="#" class="text-white  font-main my-3 block text-white hover:text-white text-xs font-semibold duration-700">

                  Mail: law@hunter-solicitors.ie
                </div>
                </Link>
                <div class="text-white text-xs -mt-2">
                    © Copyright 2020. Development & Design: Robert O'Toole.
                </div>
                </div>
    </div>


          </div>
</footer>

</>
  )
}

export default Footer
