//import { useEffect, useState } from "react";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function Login() {
 
  const [err, setErr] = useState(false);
 const navigate = useNavigate();

 async function handleSubmit(event) {
   
  event.preventDefault();

   const email = event.target[0].value;
   const password = event.target[1].value;
  
   try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
   } catch (err) {
     setErr(true);
   }
 }


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">J.Chat</span>
        <span className="title">Sign Up</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          {err && <span>Something went wrong!</span>}
        </form>

        <p>
          You don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
