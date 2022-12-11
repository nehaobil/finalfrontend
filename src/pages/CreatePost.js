import React, {useEffect} from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";

function CreatePost({isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading && isLoggedIn) navigate('/login');
    }, [isLoading, isLoggedIn]);

    return(
    <>
    <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
    <div className="PageWrapper">
        
    </div>
    </>
    );
}

export default CreatePost;