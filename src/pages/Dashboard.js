import React, {useEffect, useState, useMemo} from "react";
import { useNavigate } from "react-router";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import Header from "../components/Header";
import ImagePost from "../components/ImagePost";
import { async } from "@firebase/util";

function Dashboard({app, isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading && isLoggedIn) navigate('/login');
    }, [isLoading, isLoggedIn]);

    const postData= useMemo(async() => {
        if (!app) return [];
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "posts"));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        return data;
    }, [app])

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