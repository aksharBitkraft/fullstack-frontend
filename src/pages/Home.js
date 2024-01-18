import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Home() {
    // const {id} = useParams();
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

    const handleDelete =async(id)=>{
        console.log("handle deleting ");
        try {
            await axios.delete(`http://localhost:8080/user/${id}`);
            //delete ke baad
            loadUsers();
        } catch (error) {
            console.log("error deleting user",error);
        }
    }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-bordered shadow">
          <thead>
            <tr>
              <th scope="col">Sr no.</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                  <Link to ={`/viewuser/${user.id}`} className="btn btn-primary mx-2">view</Link>
                  <Link to = {`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">edit</Link>
                  <button  className="btn btn-danger mx-2" onClick={()=>handleDelete(user.id)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
