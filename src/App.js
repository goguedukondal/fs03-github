
import './App.css';
// import Comp from './Components/Comp';
// import User from './Components/JSON_SERVER/User';
// import Pagination from './Pagination/Pagination';
// import A from './Components/Context/A';
// import Parent from './Components/Context/Parent';
// import Nav from './Components/Nav';
// import Login from './Components/Login';
// import Home from './Components/Home';
// import { useState } from 'react';
import GithubHome from './Githubcomp/GithubHome';
function App() {
//   const [isLoggedIn,setIsLoggedIn] = useState(false)

//   const login = ()=>{
//  setIsLoggedIn(true)
//   }
//   const logout = ()=>[
//     setIsLoggedIn(false)
//   ]
  return (
    <div className="App">
      {/* <Comp/> */}
      {/* <User/> */}
      {/* <Pagination/> */}
      {/* <A/> */}
      {/* <Parent/> */}
{/* <Nav logout={logout}/>
     {
      isLoggedIn?<Home/>:<Login login={login}/>
      
     } */}
     <GithubHome/>
    </div>
  );
}

export default App;
