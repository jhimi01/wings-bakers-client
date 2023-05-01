import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);


// --------------- create user with pass emial---------------
    const createUser =(email, password)=>{
        setLoader(false)
     return  createUserWithEmailAndPassword(auth, email, password)
    }


    // ----------------------- sign in  With Google--------------------
    const googleSign =()=>{
        signInWithPopup(auth, provider)
    }


    // --------------------- login user--------------------------
    const logIn =(email, password)=>{
        setLoader(false)
      return signInWithEmailAndPassword(auth, email, password)
    }


    // ---------------------logout user------------------------
    const logOut = ()=>{
        setLoader(false)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = 
        onAuthStateChanged(auth, loggedInUser =>{
            setUser(loggedInUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    // const user = {displayName : 'jhimi'}
  const authInfo = {
    user,
    createUser,
    googleSign,
    logIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
