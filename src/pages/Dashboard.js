import React, {useEffect} from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import ImagePost from "../components/ImagePost";

function Dashboard({isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading && isLoggedIn) navigate('/login');
    }, [isLoading, isLoggedIn]);

    return(
    <>
    <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
    <div className="PageWrapper">
        <h1>Dashboard</h1>
        <div className="ImagePostWrapper">
            <ImagePost
                caption="cool post"
                imageAlt="cool guy post"
            />
            <ImagePost/>
            <ImagePost/>
            <ImagePost/>
        </div>
    </div>
    </>
    );
}

export default Dashboard;