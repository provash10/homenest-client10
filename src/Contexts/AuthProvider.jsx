import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUserWithEmailAndPasswordFunc = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPasswordFunc = (email,password)=>{
         return signInWithEmailAndPassword(auth, email, password)
    }

    const  signInWithEmailFunc =()=>{
        return  signInWithPopup(auth, googleProvider)
    }

    const signOutUserFunc = ()=>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
       signInWithEmailAndPasswordFunc,
       signInWithEmailFunc,
       signOutUserFunc,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
