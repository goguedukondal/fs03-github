import React from 'react'
import myContext from './Context'
import Child from './Child'
import { useState } from 'react'
function Parent() {
    const [data,setData] = useState("")
    const [data2,setData2] = useState("")
  return (
    <div>
        <h2>Parent Component</h2>
        <input type='text' onChange={(e)=>setData(e.target.value)}/>
        <button onClick={()=>setData2(data)}>send data</button>
        <hr/>
        <myContext.Provider value={data2}>
           <Child/>
        </myContext.Provider>
    </div>
  )
}

export default Parent