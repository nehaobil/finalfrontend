import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function LoginPage({isLoggedIn, setIsLoggedIn, setUserInformation}){
    const [errors,setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn]);

    const loginUser = useCallback((e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true);
                setUserInformation({
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    accessToken: user.accessToken,
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn({error, errorCode, errorMessage});
                setErrors(errorMessage);
            });
    }, [setIsLoggedIn, setUserInformation]);
    
    return(
    <>
    <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
    <div className="PageWrapper">
        <div className="PageWrapper--Text">
        <h1>Log In</h1>
            <LoginForm loginUser = {loginUser}/>
            <p>{errors}</p>
            <p>Don't have an account?</p>
            <p><Link to="/create">Create Account</Link></p>
        </div>
        <div className="PageWrapper-Graphic">
            <img src="https://live.staticflickr.com/65535/52560229431_88434fbeaf_b.jpg"/>
        </div>
    </div>
    </>
    );
}

export default LoginPage;