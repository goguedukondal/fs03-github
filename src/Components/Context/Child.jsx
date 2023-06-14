import React from 'react'
import myContext from './Context'
import { useContext } from 'react'
function Child() {
    const data2 = useContext(myContext)
  return (
    <div>
        <h2>Child Component</h2>
        <p>{data2}</p>
    </div>
  )
}

export default Child