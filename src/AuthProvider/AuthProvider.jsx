import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { auth } from "../Firebase/Firebase";




const googleAuthProvider = new GoogleAuthProvider();
export const AuthContextProvider = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [reload,setReload]= useState(true)

     //  Create register
     const createRegister = (email,password) => {
        setReload(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // google login
    const googleLogin = () => {
        setReload(true)
        return signInWithPopup(auth, googleAuthProvider)
    }
    // login
    const login = (email,password) => {
        setReload(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // log Out
    const logOut = () => {
        setReload(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setReload(false)
            setUser(currentUser)
        });
        return () => unsubscribe()
    },[])
    const AuthInfo = {
        user,
        googleLogin,
        createRegister,
        login,
        logOut,
        reload,
    }
    return (
        <AuthContextProvider.Provider value={AuthInfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthProvider;