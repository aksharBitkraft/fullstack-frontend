import React from 'react';
import { useState } from 'react';
import { Link,useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

function EditUser() {
    const {id } = useParams();
    const [user, setUser] = useState({
        email: "",
        username: "",
        name: "",
      });
      const navigate = useNavigate();
    
      const onChangeHandle = (e) => {
        console.log("handling onchange");
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        console.log("calling on submit..");
        try {
          //axios call
          await axios.put(`http://localhost:8080/user/${id}`, user);
          navigate("/");
        } catch (error) {
            console.log("error calling  while api",error);
        }
      };

      const loadUserById = async()=>{
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            const userData = result.data;
            console.log("user ka data",userData);
                 // Update the state with fetched user data
            setUser(result.data);
        } catch (error) {
            console.log("error",error);
        }
      }

      useEffect(()=>{
        //there should be initial value to the input field
        loadUserById();
      },[]);

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register User</h2>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input type={"text"} className="form-control" placeholder="Enter your name" name="name" onChange={onChangeHandle} value={user.name}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input type={"text"} className="form-control" placeholder="Enter your username" name="username" onChange={onChangeHandle} value = {user.username}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            E-mail
          </label>
          <input type={"text"} className="form-control" placeholder="Enter your email" name="email" onChange={onChangeHandle} value = {user.email}/>
        </div>
        <button className="btn btn-outline-primary mx-2" type="submit" onClick={onSubmit}>
          Submit
        </button>
        <Link className="btn btn-danger mx-2" to = "/">
          Cancel
        </Link>
      </div>
    </div>
  </div>
  )
}

export default EditUser