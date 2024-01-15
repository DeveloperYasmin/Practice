import React from 'react'
import image from "./image-1.svg"
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react';

const App = () => {
  const [click,setclick]=useState(false)
  const handle=()=>{
    setclick(!click)
  }
  const content=<>
      <div className='lg:hidden absolute  mb-10 font-serif w-36 p-2 m-4 mt-24 h-28 bg-red-300 rounded-lg right-0'>

  <nav className='text-black '>
          <div className='ml-5 text-lg '>
            <a className='hover:text-white flex items-center  duration-300 ease-in-out hover:scale-110' href="/">Home</a>
            <a className='hover:text-white flex items-center   duration-300 ease-in-out hover:scale-110' href="/">About</a>
            <a className='hover:text-white flex items-center   duration-300 ease-in-out hover:scale-110' href="/">Contact</a>
          </div>
        </nav>
        </div>
        
</>
  return (
    <div className='font-serif h-screen bg-yellow-300  '>
        <nav className='text-black flex justify-between shadow-lg'>
          <div className='text-4xl m-2 p-4 '>💌</div>
          <div className='text-xl  mr-44 lg:flex md:flex lg:flex-1 gap-20 items-center hidden justify-end'>
            <a className='hover:text-white duration-300 ease-in-out hover:scale-110' href="/">Home</a>
            <a className='hover:text-white duration-300 ease-in-out hover:scale-110' href="/">About</a>
            <a className='hover:text-white duration-300 ease-in-out hover:scale-110' href="/">Contact</a>
          </div>
        
        <div>
  {click && content}
       </div>

  <button className=' mr-10 md:hidden text-xl' onClick={handle}>
    {click?<FaTimes/>:<CiMenuBurger/>}</button>

    </nav>
        <section>
          <div className='m-2 md:m-28 p-4'>
            <h1 className='italic  text-5xl bg-gradient-to-r from-black via-red-600 to-red-600 text-transparent bg-clip-text'>Send Unlimited Messages</h1>
            <p className='text-lg md:text-xl mt-6 font-light'>No contracts or unwanted fees.Exclusive offer for new customers only</p>
            <button className=' rounded-full p-4 m-2 mt-10  duration-300 ease-in-out hover:scale-110  bg-black text-white'>Get Started</button>

          </div>
          <div className='md:flex md:justify-end '>
            <img className='w-[90%] m-4  -mt-10 md:-mt-96 md:w-2/6' alt="im" src={image}/>
          </div>
        </section>

    </div>
  )
}

export default App