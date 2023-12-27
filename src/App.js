import React from "react";

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings.jsx";
// import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Post from "./components/post/Post";
function App(){
  const user=false;
  return(
    <BrowserRouter>
  
    <Topbar/>
    
    {/* <p>test</p> */}
    {/* <Home/> */}
    {/* <Single/> */}
    {/* <Write/> */}
    {/* <Sidebar/> */}
    {/* <Settings/> */}
      {/* <Login/> */}

      <Routes>
        <Route exact path="/"
          element={<Home/>}></Route>

      <Route path="/register"
          element={user?<Home/>:<Register/>}></Route>

          <Route path="/login"
          element={user?<Home/>:<Login/>}></Route>

        <Route path="/write"
          element={user?<Write/>:<Register/>}></Route>


        <Route path="/settings"
          element={user?<Settings/>:<Register/>}></Route>
        

        <Route path="/post/:postId"
          element={<Single/>}></Route>

      </Routes>
      {/* <Register/> */}
      </BrowserRouter>);

}
export default App;