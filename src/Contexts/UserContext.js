import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/Firebase.config';



export const authProvider = createContext();

const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user,setUser] = useState();
    const [loading, setLoading] = useState(true)
    
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const resetPassword = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    const userUpdate = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const userLogout = () =>{
        return signOut(auth)
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    

    const userInfo = {user,loading,createUser,userLogin,userLogout,userUpdate,resetPassword}
  return (
    <authProvider.Provider value= {userInfo}>
        {children}
    </authProvider.Provider>
  )
}

export default UserContext