import React, {useEffect} from 'react'
import '../../styles/custom.css'


const Body = (props) => {
  useEffect(()=>{
console.log(props.type)
  },[])

  const title=()=>{
    if(props.type==='left'){
      return 'ml-16 text-left titleLeft w-full'
    }
    else{
      return 'title text-right'
    }
  }
  return (
    <div >

<div className=" bg-container   ">
            <i className="fa x fa-swimmer" style={{fontSize:'48px'}}></i>
            <div className='lg:mt-4 mt-0 flex justify-center '>
            <p className={`${title()} mr-0 lg:mr-4  hidden lg:block text-white  text-4xl`}>
            {props.children.title}
            </p>
            </div>
<div className='mt-12 lg:mt-0 mx-8  items-start flex flex-wrap flex-row'>
<p className='text-left lg:hidden block text-white text-3xl'>
{props.children.title}
</p>
<hr className='hidden lg:block py-2'/>
{props.type==='left'?null:<img className='img bg-green-800  mt-2 p-2 lg:p-2 w-full lg:w-1/2' alt='content' src={props.image} />}
<p className="lg:-my-4 my-4 lg:mt-0 lg:w-1/2 w-full  bg-green-900 lg:p-8 tracking-widest antialiased 2xl:text-sm text-xs font-main text-white ">
{props.children.paragraph[0]}
</p>
{props.type==='right'?null:<img className='img bg-green-800  mt-2 p-2 lg:p-2 w-full lg:w-1/2' alt='content' src={props.image} />}
</div>
    </div>
    <p className="2xl:text-sm mx-8 bg-green-900 lg:py-8 py-2 lg:px-12 tracking-widest antialiased text-xs font-main text-white ">
{props.children.paragraph[1]}
    </p>

    </div>
  )
}

export default Body
