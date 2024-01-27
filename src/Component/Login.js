import { useRef, useState } from "react";
import "./register.css";
import { useAuth } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Login=()=>{
    const navigate=useNavigate();
    const authCtxt= useAuth();

    const emailRef=useRef();
    const passwordRef=useRef();
    const[loading, setLoading]=useState(false);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const currentUser= await authCtxt.logIn(emailRef.current.value, passwordRef.current.value);
            authCtxt.setCurrentUser(currentUser);
            navigate('/page');
        } catch (error) {
            alert("Invalid username and password")
            console.error(error);
        }

        setLoading(false); 
    }

    return(
        <div className="RegisterPage">
        <div className="Signup">
          <h1>Log in</h1>
          <form onSubmit={handleSubmit}>
            <lable>Email:</lable>
            <input className="inp" type="text" ref={emailRef} required/>
            <lable>Password:</lable>
            <input className="inp" type="password" ref={passwordRef} required/>
            <button disabled={loading} type="submit" >Log In</button>
            <label>Don't have an account? <Link style={{color:'HighlightText'}} to="/signup">Sign up</Link></label>
          </form>
        </div>
      </div>
    );
};

export default Login;