import "./App.scss";
import { Children, useContext, useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";



function App() {

const {currentUser} = useContext(AuthContext)

const ProtectedRoute = ({Children}) => {
  if (!currentUser){
    return <Navigate to="/login"/>
  }

  return <Homepage/>;

};


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={
        <ProtectedRoute>
          <Homepage/>
        </ProtectedRoute>} />
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
