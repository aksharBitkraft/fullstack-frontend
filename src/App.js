import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import ViewUser from "./users/ViewUser";
import EditUser from "./users/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route exact path = "/adduser" element = {<AddUser/>}/>
          <Route path = "/viewuser/:id" element = {<ViewUser/>}/>
          <Route path = "/edituser/:id" element = {<EditUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
