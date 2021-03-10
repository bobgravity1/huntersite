import React, {useState} from 'react'
import '../../styles/custom.css'


const Body = (props) => {
  const [page, setPage]=useState(null)

  console.log(props.children)
  return (
    <div >

<div className=" bg-container   ">
            <i className="fa fa-swimmer" style={{fontSize:'48px'}}></i>
            <div className='lg:mt-4 mt-0 flex justify-center '>
            <p className='title hidden lg:block text-white text-right text-4xl'>
            {props.children.title}
            </p>
            </div>
<div className='mt-12 lg:mt-0 mx-8  items-start flex flex-wrap flex-row'>
<p className='text-left lg:hidden block ml-2 text-white text-3xl'>
{props.children.title}
</p>
<hr className='hidden lg:block py-2'/>
<img className='img bg-green-800 rounded-lg mt-2 p-2 lg:p-4 w-full lg:w-1/2' alt='content' src={props.image} />
<p className="lg:-my-4 my-4 lg:mt-0 lg:w-1/2 w-full  bg-green-900 lg:p-8 tracking-widest antialiased 2xl:text-sm text-xs font-main text-white ">
{props.children.paragraph[0]}
</p>
</div>
    </div>
    <p class="2xl:text-sm mx-8 bg-green-900 lg:py-8 py-2 lg:px-12 tracking-widest antialiased text-xs font-main text-white ">
{props.children.paragraph[1]}
    </p>
    </div>
  )
}

export default Body
