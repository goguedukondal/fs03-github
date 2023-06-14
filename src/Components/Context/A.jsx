import React from 'react'
// import B from './B'
import { useState } from 'react'
// import myContext from './Context'
function A() {
    const [data,setData] = useState('Geeks')
    const fn=()=>{
     setData("Geekster")
    }
  return (
    <div>
         <h1>A Component</h1>
        <button onClick={fn}>SEND DATA</button>
        <hr/>
        {/* <myContext.Provider value={data} >
       
        <B />
        {console.log(data)}
        </myContext.Provider> */}
    </div>
  )
}

export default A