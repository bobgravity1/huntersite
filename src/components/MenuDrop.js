import React from 'react'

const MenuDrop = (props) => {
  return (
    <div onMouseEnter={()=>props.toucher()} onMouseLeave={()=>props.toucherOff()} className={`${props.touched?'text-green-800 font-semibold menu-drop-active ':'hidden'}  flex flex-col justify-around items-center`}>
    <li className='px-12 p-0  hover:bg-green-900 hover:text-white hover:font-semibold cursor-pointer my-1 list-none'>Partners</li>
      <li className='px-10 p-0 hover:bg-green-900 hover:text-white hover:font-semibold cursor-pointer my-1 list-none'>Consultants</li>
      <li className='px-10 p-0 hover:bg-green-900 hover:text-white hover:font-semibold cursor-pointer my-1 list-none'>Associates</li>
      <li className='px-12 p-0 hover:bg-green-900 hover:text-white hover:font-semibold cursor-pointer my-1 list-none'>Solicitors</li>
    </div>
  )
}

export default MenuDrop
