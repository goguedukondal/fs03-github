import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

function Pagination() {
    const [users,setUsers] =useState([]);
    const [page,setPage] =useState(1)
    useEffect(()=>{
      axios.get(`http://localhost:5001/results?_limit=${4}&_page=${page}`).then((res)=>{
        setUsers(res.data)
       
      })
    },[page])
    
  return (
    <div style={{textAlign:"center",margin:"10px auto"}}>
      <h2>Pagination</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id eligendi
        rem similique nesciunt, repellendus delectus illo assumenda, suscipit
        tempore incidunt beatae recusandae quasi sed harum obcaecati totam ipsam
        eaque optio.
      </p>
      <div style={{textAlign:"center",marginLeft:'40%'}}>
      {users.length>0&&(
        <table style={{border:"1px solid black",width:"500px"}}>
        <thead >
            <tr >
                <th>ID </th>
                <th>NAME</th>
                <th>GENDER</th>
            </tr>
        </thead>

      <tbody>
      {
        users.map((user)=>{
      return(
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.gender}</td>
        </tr>
      )
        })
      }
    
      </tbody>
      </table>
      )}
      </div>
      <button  disabled={page<2?true:false} onClick={()=>{setPage(page-1)}}>Prev</button>
      <button>{page}</button>
      <button disabled={page>4?true:false} onClick={()=>{setPage(page+1)}}>Next</button>
    </div>
  );
}

export default Pagination;
