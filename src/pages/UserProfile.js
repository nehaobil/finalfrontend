import React, {useEffect} from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";

function UserProfilePage({isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading && isLoggedIn) navigate('/login');
    }, [isLoading, isLoggedIn]);

    return(
    <>
    <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
    <div>
        <h1>User Profile</h1>
        <p>
            <strong>Email: </strong>
            {userInformation.email}</p>
    </div>
    </>
    );
}

export default UserProfilePage;