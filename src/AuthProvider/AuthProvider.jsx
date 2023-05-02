import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);


// --------------- create user with pass emial---------------
    const createUser =(email, password)=>{
        setLoader(true)
     return  createUserWithEmailAndPassword(auth, email, password)
    }


    // ----------------------- sign in  With Google--------------------
    const googleSign =()=>{
      setLoader(true)
      return signInWithPopup(auth, provider)
    }


    // --------------------- login user--------------------------
    const logIn =(email, password)=>{
        setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
    }


    // ----------------------- login with github --------------------
    const githubSign =()=>{
      setLoader(true)
      return  signInWithPopup(auth, providerGithub)
    }



    // ---------------------logout user------------------------
    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = 
        onAuthStateChanged(auth, loggedInUser =>{
            setUser(loggedInUser)
            setLoader(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    // const user = {displayName : 'jhimi'}
  const authInfo = {
    user,
    loader,
    createUser,
    googleSign,
    logIn,
    githubSign,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
