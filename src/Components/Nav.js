import React from 'react'

function Nav({logout}) {
  return (
    <div style={{display:"flex",padding:"10px",border:"1px solid red",justifyContent:"space-around",alignItems:"center"}}>
        <h1>GEEKSTER</h1>
        <a>Product</a>
        <button onClick={logout} style={{width:"100px",height:"20px"}}>Logout</button>
    </div>
  )
}

export default Nav