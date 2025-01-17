import React, {useEffect, useState, useContext, useRef} from 'react'
import '../styles/custom.css'
import MenuDrop from './MenuDrop.js'
import {Link} from 'react-router-dom'
import ThemeContext from '../ThemeContext.js'

const Nav = () => {
  const [active, setActive]=useState(false)
  const [touched, setTouched]=useState(false)

  const myRef=useRef()

  const open=useContext(ThemeContext)

const clicker=()=>{
  if(window.innerWidth<450){
  setActive(!active);
  open.setOpen(!open.open)
}
}

useEffect(()=>{

},[active])



const toucher=()=>{
  setTouched(true);
}

const toucherOff=()=>{
  setTouched(false);
}

  return (
/*  NAVBAR */
<>
<div className={`shadow-xl`}>
    <div  className='nav c overflow-hidden w-full nav-main md:pt-8 pt-4  flex  justify-between md:justify-around items-center flex-row flex-shadow-2xl'>
        <Link onClick={()=>setActive(false)} to='/' exact><h1 className=' mx-2   antialiased  text-lg md:text-3xl font-bold text-green-700 font-second-bold'>HUNTER SOLICITORS</h1></Link>
        <div className={`${active?'nav-items-active':'nav-items'} bg-white items-center  md:items-center flex flex-col justify-center md:flex-row md:justify-around list-none w-1/3   flex-shadow-2xl`}>
        <Link onClick={()=>setActive(false)} to='/about' className=' lg:mt-0 mt-20 text-green-800 hover:text-green-800 font-semibold duration-200 antialiased  p-2 cursor-pointer lg:my-0 my-6 text-sm lg:hover:text-white lg:hover:bg-red-900 font-main'>About</Link>
        <Link onClick={()=>setActive(false)} to='/contact' className=' text-green-800 hover:text-green-800 font-semibold duration-200 antialiased  p-2 cursor-pointer lg:my-0 my-6 text-sm lg:hover:text-white lg:hover:bg-red-900 font-main'>Contact</Link>
        <Link onClick={()=>setActive(false)} to='/stories' className='lg:mt-0  text-green-800 hover:text-green-800 font-semibold duration-200 antialiased  p-2 cursor-pointer lg:my-0 my-6 text-sm lg:hover:text-white lg:hover:bg-red-900 font-main'>Stories</Link>
        <Link onClick={()=>setActive(false)} to='/news' className='lg:mt-0  text-green-800 hover:text-green-800 font-semibold duration-200 antialiased  p-2 cursor-pointer lg:my-0 my-6 text-sm lg:hover:text-white lg:hover:bg-red-900 font-main'>News</Link>
        <div onMouseLeave={()=>toucherOff()} onMouseEnter={()=>setTouched(true)} className='flex   flex-row items-center'>
        <li  onClick={()=>setActive(false)} className='text-green-800 hover:text-green-800 font-semibold duration-200 antialiased  p-2 cursor-pointer lg:my-0 my-6 text-sm lg:hover:text-white lg:hover:bg-red-900 font-main'>Team</li>
        <svg  className='hover:bg-red-900 text-black hover:text-white arrowTwo' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          </div>
    </div>

    <div onClick={()=>clicker()} ref={myRef} className={active?'mx-2 burger-active ':'burger mx-2'}>
    <div className={active?'toggle1 line-one':'line-one'}></div>
    <div className={active?' toggle2 line-two':'line-two'}></div>
    <div className={active?' toggle3 line-three':'line-three'}></div>
    </div>

    </div>
<MenuDrop toucher={toucher} setTouched={setTouched} toucherOff={toucherOff} touched={touched}/>
</div>
      </>
  )
}

export default Nav
