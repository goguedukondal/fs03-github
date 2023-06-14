import React from 'react'

function Login({login}) {
  return (
    <div><h2>Login Component</h2>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login