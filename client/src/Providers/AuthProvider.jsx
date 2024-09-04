import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/Firebase';

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
        return signInWithPopup(auth, googleProvider);
    }

    // Login By GitHub
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
            setLoading(false);
        }))
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        createUserByEmailPassword,
        signInByEmailPassword,
        loading,
        googleLogin,
        githubLogin
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