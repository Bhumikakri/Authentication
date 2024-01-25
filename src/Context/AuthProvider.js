import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword , getAuth } from "firebase/auth";
// import { auth } from "../firebase";

const AuthContext=createContext({});

export const useAuth = () =>{
    return useContext(AuthContext);
}


const AuthProvider=({children})=>{

    const [currentUser,setCurrentUser]=useState({});

    const auth = getAuth();
    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authData={
        currentUser,
        setCurrentUser,
        signUp, 
    }

    return(
        <>
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;