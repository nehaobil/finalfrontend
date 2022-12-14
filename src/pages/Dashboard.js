import React, {useEffect, useState, useMemo} from "react";
import { useNavigate } from "react-router";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import Header from "../components/Header";
import ImagePost from "../components/ImagePost";

const queryData = async (app) => {
    if (!app) return [];
    const db = getFirestore(app);
    const data = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
};

function Dashboard({app, isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        if (isLoading && isLoggedIn) navigate('/login');
    }, [isLoading, isLoggedIn]);

    useEffect(() => {
        if(!app) return;
        queryData(app).then(setPostData);
    }, [app]);

    return(
    <>
    <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
    <div className="PageWrapper">
        <h1>All Posts</h1>
        {postData.map((post,index) => (
            <div className="ImagePostWrapper" key = {index}>
                <ImagePost
                    caption={post.caption}
                    imageAlt={post.imageAlt}
                    imageSrc={post.imageSrc}
                    userName={post.userName}
                />
            </div>
        ))}
        
    </div>
    </>
    );
}

export default Dashboard;