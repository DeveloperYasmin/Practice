import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const JsCalculator = () => {
    const row1=["%","/"]
    const row2=["7","8","9","*"]
    const row3=["4","5","6","-"]
    const row4=["1","2","3","+"]
    const row5=["00","0","."]

    const [selected,setselected]=useState("")
    const back=()=>{
        try{
        setselected(selected.slice(0,-1))
        }
        catch(error){
          setselected(" ")
        }
    }
    const calculate=(e)=>{
        try{
            setselected(eval(selected))
        }
        catch(error)
        {
            setselected("Undefined")
        }
    }
    
    

  return (
    <div className='text-white mt-16 items-center justify-center flex'>
        <form className='bg-slate-900 cursor-pointer rounded-xl p-5'>
            <div>
                <div className='shadow-xl w-80 '>
                    <input   onKeyDownCapture={(event) => {
    if (event.key === "=" || event.key ==="Enter") {
        
        calculate(event)
        event.preventDefault()}}} className='shadow  mb-6 text-5xl  w-72 pt-10 bg-slate-900 text-right' placeholder="0" type="text" value={selected}   onChange={(e)=>setselected(e.target.value)}/>
                </div>
                <div className='flex'>
                    <li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  text-teal-400 select-none  m-4' onClick={()=>setselected("")}  >AC</li>
                    <li className='p-2  w-10 flex shadow-lg bg-gray-700 rounded-lg text-teal-400 select-none  m-4' onClick={()=>back()}>DE</li>
                    {row1.map((list)=><li className='p-2  w-10 flex shadow-lg bg-gray-700 text-teal-400 rounded-lg select-none  m-4'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}

                </div>
                <div className='flex'>
                {row2.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                </div>
                <div className='flex'>
                {row3.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                </div>
                <div className='flex'>
                {row4.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                </div>

                <div className='flex'>
                {row5.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                <li className='p-2 w-10 flex shadow-lg bg-yellow-400 text-black rounded-lg  m-4 select-none' onClick={()=>calculate()}>=</li>

                </div>

                
            </div>
        </form>
       
    </div>
    
  )
  
}


export default JsCalculator