import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

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
            setUser(currentUser)
            setLoding(false);

            if(currentUser && currentUser.email){
                const logenUser = {
                    email: currentUser.email
                  }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify(logenUser)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log('jwt response', data)
                    localStorage.setItem('car-access-token', data.token);
                    
                  })
            }
            else{
                localStorage.removeItem('car-access-token');
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