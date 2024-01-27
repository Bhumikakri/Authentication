import './register.css';
import React from 'react';
import { useState , useRef } from "react";
import { useAuth } from '../Context/AuthProvider';
import { Link } from "react-router-dom";


const Register = () => {

  const authCtxt= useAuth();
  // console.log(authCtxt);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const[loading,setLoading] = useState(false);

  const handleSubmit= async(e)=>{
    e.preventDefault();
    setLoading(true);
    if(passwordRef.current.value !== confirmpasswordRef.current.value){
      alert("check your confirm password again ");
    }
    try {
      const currentUser= await authCtxt.signUp(emailRef.current.value,confirmpasswordRef.current.value);
      alert(" Registration successfull ");
      authCtxt.setCurrentUser(currentUser);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="RegisterPage">
      <div className="Signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <lable>Email:</lable>
          <input className="inp" type="text" ref={emailRef} required/>
          <lable>Password:</lable>
          <input className="inp" type="password" ref={passwordRef} required/>
          <lable>Password Confirmation:</lable>
          <input className="inp" type="password"ref={confirmpasswordRef} required/>
          <button disabled={loading} type="submit" >Sign Up</button>
          <label>Already have an acount? <Link style={{color:'HighlightText'}} to="/">Log in</Link></label>
        </form>
      </div>
    </div>
  );
};

export default Register;
