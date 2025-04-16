import React, { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import {  signOut, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create a new user
    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            return userCredential;
        } catch (error) {
            console.error("Error creating user:", error.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth); // ✅ Call signOut correctly
    };
    // Track the logged-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup function
    }, []);

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
        
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;


