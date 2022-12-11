import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {getAuth, signOut} from "firebase/auth";
import Header from "../components/Header";

function LandingPage({isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading && isLoggedIn) navigate('/login');
    }, [isLoading, isLoggedIn]);

    function logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            })
    }

    return(
    <>
    <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
    <div className="PageWrapper">
        <div className="LandingPageImage">
            <img src="https://live.staticflickr.com/65535/52556696232_3f92d11fb2_k.jpg"/>
        </div>
    </div>
    </>
    );
}

export default LandingPage;