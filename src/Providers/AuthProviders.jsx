import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoding(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth);
    }

    useEffect( () => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {    
            const userEmail = currentUser?.email || user?.email; 
            const loggedUser = {email: userEmail}; 
            setUser(currentUser)
            setLoding(false);

            if(currentUser){
                axios.post( 'http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response', res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loding,
        createUser,
        signIn,
        logOut,
        googleSignIn   
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;