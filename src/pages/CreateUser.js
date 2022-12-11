import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createPath } from "react-router";
import { Link } from "react-router-dom";
import CreateUserForm from "../components/CreateUserForm";
import Header from "../components/Header";

function CreateUserPage({setIsLoggedIn , setUserInformation, isLoggedIn}){
    const [errors,setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate('/');
    }, [isLoggedIn]);

    const signUpUser = useCallback(
    (e) => {
        e.preventDefault();
        if (!e.currentTarget) return;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const name = e.currentTarget.name.value;

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setIsLoggedIn(true);
            setErrors();
            updateProfile(user, {displayName: name})
            .then(()=> {
                setUserInformation({
                    email: user.email,
                    displayName: name,
                    uid: user.uid,
                    accessToken: user.accessToken,
                });
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.warn({err, errorCode, errorMessage});
                setErrors(errorMessage);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn({error, errorCode, errorMessage});
            setErrors(errorMessage);
        });
    }, [setErrors,setIsLoggedIn, setUserInformation]
    );

    return(
        <>
        <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
        <div className="PageWrapper">
            <h1>Create Account</h1>
            <CreateUserForm signUpUser={signUpUser}/>
            <p>{errors}</p>
            <p>Already have an account?</p>
            <p><Link to="/login">Login</Link></p>
        </div>
        </>
    );
}

export default CreateUserPage;