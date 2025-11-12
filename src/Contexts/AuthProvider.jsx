import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
