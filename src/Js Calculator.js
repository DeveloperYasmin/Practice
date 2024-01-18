import React, { useState } from 'react'
import { Search } from "semantic-ui-react";


const JsCalculator = () => {
    
    const row2=["7","8","9"]
    const row3=["4","5","6"]
    const row4=["1","2","3"]
    const row5=["."]
    const [selected,setselected]=useState("")
    const back=()=>{
        try{
        setselected(selected.slice(0,-1))
        }
        catch(error){
          setselected(" ")
        }
    }
    const operations=[{op:"+"},{op:"-"},{op:"/"},{op:"%"},{op:"*"}]

    const calculate=(e)=>{
        try{
            let end=selected.charAt(selected.length-1)
           if(operations.some(el=>el.op === end))
          {
           const result=selected.slice(0,-1)     
           setselected(eval(result))      
          }
          setselected(eval(selected))

        }
        catch(error)
        {
         setselected("Error")
        }
    }
const add=()=>{setselected(selected+"+")
    let end=selected.charAt(selected.length-1)
    try{
    if(operations.some(el=>el.op === end))
        setselected(selected.slice(0,-1)+"+")
    
    }
    catch(error){
        setselected("+")}

}
const sub=()=>{setselected(selected+"-")
    let subend=selected.charAt(selected.length-1)
    try{
    if(operations.some(el=>el.op === subend))
        setselected(selected.slice(0,-1)+"-")}
    catch(error){
        setselected(selected,"-")
    }
}
const mul=()=>{setselected(selected+"*")
    let end=selected.charAt(selected.length-1)
    try{
    if(operations.some(el=>el.op === end))
        setselected(selected.slice(0,-1)+"*")}
    catch(error){
        setselected(selected,"*")}
}
const div=()=>{setselected(selected+"/")
    let end=selected.charAt(selected.length-1)
    try{
    if(operations.some(el=>el.op === end))
        setselected(selected.slice(0,-1)+"/")}
    catch(error){
        setselected(selected,"/")}
}
const mod=()=>{setselected(selected+"%")
    let end=selected.charAt(selected.length-1)
    try{
    if(operations.some(el=>el.op === end))
        setselected(selected.slice(0,-1)+"%")}
    catch(error){
        setselected(selected,"%")}
}    

const restrict=()=>{
    if(selected.length==0){
        setselected(selected.slice(0,-1))
    }
}

<Search
    value={selected}
    showNoResults={false}
    onKeyDown={calculate}
  />
  
  return (
    <div className='text-white mt-16 items-center justify-center flex'>
        <form className='bg-slate-900 cursor-pointer rounded-xl p-5'>
            <div>
                <div className='shadow-xl w-80 ' onKeyDownCapture={(event) => {
        if(event.key=== "+" ) {add(event); event.preventDefault() }
        if(event.key=== "-" ) {sub(event); event.preventDefault() }
        if(event.key=== "*" ) {mul(event); event.preventDefault()}
        if(event.key=== "/" ) {div(event); event.preventDefault();}
        if(event.key=== "%" ) {mod(event); event.preventDefault();}

        }}>
                    <input id="txtName"  onKeyDownCapture={(event) => {
    if (event.key === "=" || event.key ==="Enter") {
        
        calculate(event)
        event.preventDefault()}
        if(Object.keys(selected).length===0 && event.key==="0")
        {           
            event.preventDefault()
        }
        if(event.keyCode>=65 && event.keyCode<=90)
        {       
            event.preventDefault()

        }
        
                                              
    
        
        
document.getElementById("focus").addEventListener("click",()=>{
            document.getElementById("txtName").focus()
        });
       
        

                        }    } className='shadow caret-transparent mb-6 text-5xl outline-none  w-72 pt-10 bg-slate-900 text-right'
     autoFocus   type="text" placeholder="0"  value={selected} onChange={(e)=>setselected(e.target.value)}/>
               
                </div>
                <div id="focus">
                <div className='flex'>
                    <li className='p-2 w-10 font-bold flex shadow-lg bg-gray-700 rounded-lg  text-teal-400 select-none  m-4' onClick={()=>setselected("")}  >AC</li>
                    <li className='p-2  w-10 font-bold flex shadow-lg bg-gray-700 rounded-lg text-teal-400 select-none  m-4' onClick={()=>back()}>DE</li>
                    <li className='p-2  w-10 font-bold flex shadow-lg bg-gray-700 rounded-lg text-teal-400 select-none  m-4' onClick={()=>{setselected(selected+"%");mod();}} >%</li>
                    <li className='p-2  w-10 font-bold flex shadow-lg bg-gray-700 rounded-lg text-teal-400 select-none  m-4' onClick={()=>{setselected(selected+"/");div();}} >/</li>


                </div>
                <div className='flex'>
                {row2.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                <li className='p-2  w-10 font-bold flex shadow-lg bg-gray-700 rounded-lg text-teal-400 select-none  m-4'onClick={()=>{setselected(selected+"*");mul();}}>*</li>
                </div>
                <div className='flex'>
                {row3.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                <li className='p-2  w-10 font-bold flex shadow-lg bg-gray-700 rounded-lg text-teal-400 select-none  m-4' onClick={()=>{setselected(selected+"-");sub();}}>-</li>
                </div>
                <div className='flex'>
                {row4.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                <li id="addition" className='p-2  w-10 font-bold flex shadow-lg bg-gray-700 rounded-lg text-teal-400 select-none  m-4' onClick={()=>{setselected(selected+"+");add();}}   >+</li>
                </div>

                <div className='flex'>
                <li className='p-2 w-10 flex shadow-lg  bg-gray-700  rounded-lg  m-4 select-none' onClick={()=>{setselected(selected+"0");restrict();}}>0</li>
                <li className='p-2 w-10 flex shadow-lg bg-gray-700  rounded-lg  m-4 select-none' onClick={()=>{setselected(selected+"00");restrict();}}>00</li>
                {row5.map((list)=><li className='p-2 w-10 flex shadow-lg bg-gray-700 rounded-lg  m-4 select-none'  onClick={()=>setselected(selected+list)} key={list}>{list}</li>)}
                <li className='p-2 w-10 flex shadow-lg font-bold bg-yellow-400 text-black rounded-lg  m-4 select-none' onClick={()=>calculate()}>=</li>

                </div>

                </div>
            </div>
        </form>
       
    </div>
    
  )
  
}


export default JsCalculator