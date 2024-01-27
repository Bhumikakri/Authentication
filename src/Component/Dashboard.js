import { useAuth } from "../Context/AuthProvider";

const Dashboard = () => {
  const authCtxt = useAuth();

const onLogout = async() =>{
    try {
        await authCtxt.logOut();
        authCtxt.setCurrentUser({});
    } catch (error) {
        
    }
    
}
  
  return <>
  <div style={{width:"100%", height:"auto", minHeight:"80vh"}}>
  <h1>Dashboard Page has been open for you</h1>
  <button onClick={onLogout} style={{width:"50px"}}>Logout</button>
  </div>
  </>;
};

export default Dashboard;
