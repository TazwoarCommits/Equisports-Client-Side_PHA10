import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { app } from "../firebase.config";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true) ;

    // <<------------- signIn With Google ---------------->>

    const googleLogin = provider => {
        return signInWithPopup(auth, provider)
            .then(res => console.log(res))
            .catch(err => {
                toast.error(err.message)
            })         
    }

    // <<------------- Create new User ---------------->> 

    const createUser = (email, password) => { 
        return createUserWithEmailAndPassword(auth, email, password) ;
    }

    // <<------------- Login User ---------------->> 

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password) ;
    }

    // <<------------- Update Users Profile ---------------->> 

    const setProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // <<------------- Forget Password/Reset Password ---------------->>

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser) ;
            setLoading(false);
        })

        return () => {
            unsubscribe() ;
        }

    }, []) ;

    // <<------------- SignOut User ---------------->> 

    const logOut = () => {
        return signOut(auth) ;
    }


    const authInfo = {
        user,
        setUser,
        googleLogin,
        createUser,
        signInUser,
        setProfile,
        resetPassword,
        logOut,
        loading ,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;