import "./App.css";
import Register from "./Component/Register";
import AuthProvider from "./Context/AuthProvider";
import firbase from './firebase';
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Layout from "./Component/Layout";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

function App() {

  const routes= createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/page",
          element:<Dashboard />
        },
      ]
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/signup",
      element:<Register />
    },
  ])

  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes}/>
      </AuthProvider>
    </>
  );
}

export default App;
