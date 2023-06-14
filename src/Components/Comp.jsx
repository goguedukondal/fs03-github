import React from "react";
import axios from "axios";

function Comp() {
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <button onClick={getData}>get the data</button>
    </div>
  );
}

export default Comp;

// export function getUsers(setUsers){
// axios.get("http://localhost:5001/results").then((res)=>{
//   console.log(res)
// })
// }

export function Userfn(userData) {
  axios
    .post("http://localhost:5001/results", userData)
    .then((res) => {alert("successfully added")
  //  getUsers(setUsers)
})
    .catch((error) => alert(error));
}
