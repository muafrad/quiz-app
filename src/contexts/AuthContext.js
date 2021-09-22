import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from 'react';
import "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    //signup function
    function signup(email, password, username) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)

        //update profile
        updateProfile(auth.currentUser, {
            displayName: username,
        })
        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        })
    }

    //login function
    function login(email, password) {
        const auth = getAuth();
        // return
        signInWithEmailAndPassword(auth, email, password)
    }

    //logout function
    function logout() {
        const auth = getAuth();
        signOut(auth)
    }

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;