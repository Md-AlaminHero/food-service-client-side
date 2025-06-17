import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [purchaseCount, setPurchaseCount] = useState(0);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // console.log('user in the auth state changed', currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        user,
        signOutUser,
        purchaseCount,
        setPurchaseCount
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;