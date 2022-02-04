import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import initializeAuthentication from '../../Firebase/firebase.initialize';

const provider = new GoogleAuthProvider();
initializeAuthentication();


const Login = () => {
    const handleGoogleSignIn = () => {
        const auth = getAuth()
        signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google signin</button>
        </div>
    );
};

export default Login;