import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


// --------------- create user with pass emial---------------
    const createUser =(email, password)=>{
     return  createUserWithEmailAndPassword(auth, email, password)
    }


    // --------------------- login user--------------------------
    const logIn =(email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }


    // ---------------------logout user------------------------
    const logOut = ()=>{
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
