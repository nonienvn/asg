import React, {useState,useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom";

export default function Page2() {
    const [users, setUser] = useState([]);
    useEffect(() => {(
        
        loadUsers()
    )}, [])

    const loadUsers =async () => {
        const result = await axios.get('http://localhost:3000/api/view')
        setUser(result.data.users);   
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/api/view${id}`)
    }
    return (
        <div>
           <table class="table table-dark">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
      <th scope="col">dob</th>
      <th scope="col">gender</th>
    </tr>
  </thead>
  <tbody>
 { users.map((user, index) => (<tr>
     <th scope ="row">{index+1}</th>
     <td>{user.name}</td>
     <td>{user.email}</td>
     <td>{user.address}</td>
     <td>{user.dob}</td>
     <td>{user.gender}</td>
     <td><Link type="button" class="btn btn-danger" onClick ={ () => deleteUser(user.id)}>delete</Link></td>

       
       </tr>))}
    
  </tbody>
</table> 
        </div>
    )
}
