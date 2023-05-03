import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';




export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const createUserPopUp = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
            
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        setUser(null);
        return signOut(auth)
    }
    const profileUpdateNamePhoto=(name, photoURL)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
          .then()
          .catch()
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            //console.log('loggedin user',loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })
        return unsubscribe()
    }, [])
    console.log(user);
    const authInfo = {
        user,
        setUser,
        createUser,
        createUserPopUp,
        signInUser,
        logOut,
        loading,
        profileUpdateNamePhoto
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;