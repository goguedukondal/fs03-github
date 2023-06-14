import React from 'react'
import myContext from './Context'
import { useContext } from 'react'

function D () {
    const data=useContext(myContext)
    console.log(data)
  return (
    <div>
        <h1>D Component</h1>
        <p>{data}</p>
    </div>
  )
}

export default D 