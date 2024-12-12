import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./Components/Login.js";
import { ParentDashboard } from "./Components/ParentDashboard.js";
import { FacultyDashboard } from "./Components/FacultyDashboard.js";
import AcademicsPage from './SubComponents/AcademicsPage.js'
import NotifyParentPage from './SubComponents/NotifyParentPage.js'
import StudentProfilePage from './SubComponents/StudentProfilePage.js'
import ExtraCurricularPage from './SubComponents/ExtraCurricularPage.js'



function App() {
  
  const [userType, setUserType] = useState("");
  const [isloggedin,setisloggedin] =useState(JSON.parse(localStorage.getItem("loginstatus")) || false)


  const userLogin = (type) => {
    setUserType(type);
    setisloggedin(true)
    localStorage.setItem("UserType",JSON.stringify(type))
  };


  const setUserData = (data) => {
    setisloggedin(true)
localStorage.setItem("loginstatus",JSON.stringify(true))
    
    localStorage.setItem("LoginData", JSON.stringify(data));
  };

  const logout = () => {
    localStorage.clear();
    setUserType(null);
    setisloggedin(false)
  };



useEffect(() => {
  const storedusertype = JSON.parse(localStorage.getItem("UserType"))
  const login =JSON.parse(localStorage.getItem("loginstatus"))
  if(isloggedin && storedusertype){
  setisloggedin(true)
  setUserType(storedusertype);
  }else{
   setisloggedin(false)
  }
  }
, [isloggedin])



  return (
    <BrowserRouter>
      <Routes>
        {/* Render login form as the default view when someone opens the app */}
        <Route
          path="/"
          element={
              <Login
                userType={userType}
                userLogin={userLogin}
                setUserData={setUserData}
              />
              
          
          
          }
        />
        <Route
          path="/parentDashboard"
          element={
            userType === "parent" ? (
              <ParentDashboard logout={logout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/facultyDashboard"
          element={
            userType === "faculty" ? (
              <FacultyDashboard logout={logout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      
        <Route path="/notifyparentpage" element={<NotifyParentPage />} />
        <Route path="/academicspage" element={<AcademicsPage />} />
        <Route path="/extracurricularpage" element={<ExtraCurricularPage />} />
        <Route path="/studentprofilepage" element={<StudentProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
