import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'

function Shows() {

  const [data,setData] = useState([]);
  const [get,setGet] =  useState(6);

  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((reponse)=>{
      setData(reponse.data)
      console.log("show data",reponse)
    })
    .catch((error)=>{
      console.log("Error while calling api",error)
    })
  },[])
  
  const showdata =()=>{
    setGet(get + 3)
  }

  return (
        <div className='h-auto w-full px-20 py-5 gap-x-5 grid  grid-cols-3 gap-5 bg-slate-600'>
            {data.slice(0,get).map((Value,index)=>
             <div key={index} className=' h-[40vh] w-[40vh] border-2 border-black text-black rounded relative'>
               <h1 className='text-2xl text-blue-50 font-bold'>Id :- {Value.id}</h1>
               <p className='text-[13px] text-blue-50 font-semibold'>Title :- {Value.title}</p>
               
             </div>
             
          )}
               <div>
             <button className='' onClick={()=> showdata()}>Get more</button>
             </div>
            
        </div>
  )
}

export default Shows