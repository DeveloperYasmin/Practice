import React from 'react'
import image from "./image-1.svg"

const App = () => {
  return (
    <div className='font-serif h-screen bg-yellow-300 '>
        <nav className='text-black flex justify-between shadow-lg'>
          <div className='md:text-4xl m-2 p-4 text-2xl'>💌</div>
          <div className='md:text-xl mr-5  text-lg md:mr-44 flex md:gap-20 gap-3 items-center'>
            <a className='hover:text-white duration-300 ease-in-out hover:scale-110' href="/">Home</a>
            <a className='hover:text-white duration-300 ease-in-out hover:scale-110' href="/">About</a>
            <a className='hover:text-white duration-300 ease-in-out hover:scale-110' href="/">Contact</a>
          </div>
        </nav>
        <section>
          <div className='m-2 md:m-28 p-4'>
            <h1 className='italic  text-5xl bg-gradient-to-r from-black via-red-600 to-red-600 text-transparent bg-clip-text'>Send Unlimited Messages</h1>
            <p className='text-lg md:text-xl mt-6 font-light'>No contracts or unwanted fees.Exclusive offer for new customers only</p>
            <button className=' rounded-full p-4 m-2 mt-10  duration-300 ease-in-out hover:scale-110  bg-black text-white'>Get Started</button>

          </div>
          <div className='md:flex md:justify-end '>
            <img className='w-[90%] m-4  -mt-10 md:-mt-96 md:w-2/6' src={image}/>
          </div>
        </section>
    </div>
  )
}

export default App