import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create Account using Email and password
    const createUserByEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login account using Email and password,
    const signInByEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login By Google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Login By GitHub
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
            setLoading(false);

            const jwtInfo = { email: currentUser?.email, userId: currentUser?.uid };
            if (currentUser) {
                axios.post(`http://localhost:3000/jwt`, jwtInfo, { withCredentials: true })
                    .then(() => {
                        // console.log(res.data);
                    })
            }
            else {
                axios.post(`http://localhost:3000/logout`, jwtInfo, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }

            // const user = { email: res.user.email, userId: res.user.uid };
            // await axios.post(`http://localhost:3000/jwt`, user, { withCredentials: true })
            //     .then(resJwt => {
            //         console.log(resJwt);
            //     })
        }))
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        createUserByEmailPassword,
        signInByEmailPassword,
        loading,
        googleLogin,
        githubLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;