import { Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import {  Navigate } from "react-router-dom";


const Layout = () => {
  const authCtxt = useAuth();

  if (Object.keys(authCtxt.currentUser).length === 0) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1 style={{width:"100%", height:"70px", backgroundColor:"blueviolet", color:"white"}}>Header</h1>
      <Outlet />
      <h1 style={{width:"100%", height:"50px", backgroundColor:"black", color:"white"}}>Footer</h1>
    </>
  );
};

export default Layout;
