import React from "react";
import "./App.scss";
import Signin from "./pages/Auth/Signin";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from "./pages/Frontend/Home/Home";
// import Show from "./pages/Frontend/Showdata";
import Api from './pages/Frontend/Showdata/Api'

function App() {
  return (
    <>
      {/* <Home /> */}
      <Signin />
      {/* <Show /> */}
      {/* <Api /> */}
    </>
  );
}

export default App;
