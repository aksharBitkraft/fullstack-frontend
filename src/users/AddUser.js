import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function AddUser() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    name: "",
  });
  const navigate = useNavigate();
  console.log("what is user", user);

  const onChangeHandle = (e) => {
    console.log("handling onchange");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("calling on submit..");
    try {
      //axios call
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
    } catch (error) {
        console.log("error calling  while api",error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your name" name="name" onChange={onChangeHandle} />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your username" name="username" onChange={onChangeHandle} />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input type={"text"} className="form-control" placeholder="Enter your email" name="email" onChange={onChangeHandle} />
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
  );
}

export default AddUser;
