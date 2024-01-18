import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
function ViewUser() {
    const {id} = useParams();
    const [user,setUser] = useState({
        name:"",
        email:"",
        username:""
    });
    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }
    useEffect(()=>{
        loadUser();
    },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id :
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <b>Username: </b>
                    {user.username}
                </li>
                <li class="list-group-item"><b>Name: </b>
                {user.name}</li>
                <li class="list-group-item"><b>E-mail: </b>{user.email}</li>
              </ul>
              <Link to = "/" className="btn btn-danger mt-4" >Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
