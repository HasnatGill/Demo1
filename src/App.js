import React from "react";
import "./App.scss";
import { ToastContainer } from 'react-toastify';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from "./pages/Frontend/Home/Home";
// import Show from "./pages/Frontend/Showdata";
// import SignUp from "./pages/Auth/Signin/SignUp";
// import Signin from "./pages/Auth/Signin/Signin";
// import Dashboard from "./pages/Frontend/Dashboard"
// import Assignment from './pages/Frontend/Assignment'
// import Calendar from "./pages/Frontend/Calendar";
// import AddButton from "./pages/Frontend/AddButton";
// import ToDo from "./pages/Frontend/Home/Todo";
import LandPages from  './pages/Frontend/LandPages'

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Signin /> */}
      {/* <Dashboard /> */}
      {/* <Assignment /> */}
      {/* <Calendar/> */}
      {/* <AddButto n/> */}
      {/* <SignUp /> */}
      {/* <Show /> */}
      {/* <Api /> */}
      {/* <ToDo/> */}
      <LandPages/>
      <ToastContainer />
    </div>
  );
}

export default App;
