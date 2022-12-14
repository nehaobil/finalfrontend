import { React, useEffect, useCallback, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Header from "../components/Header";
import CreatePostForm from "../components/CreatePostForm";

function CreatePost({app, isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation}){
    const navigate = useNavigate();
    const [postSuccessful, setPostSuccessful] = useState(false);

    const createPost = useCallback(
        async (e) => {
            e.preventDefault();
            const db = getFirestore(app);
            const storage = getStorage();
            const caption = e.currentTarget.caption.value;
            const imageAlt = e.currentTarget.imageAlt.value;
            const userName = userInformation.displayName;
            try {
                

                const docRef = await addDoc(collection(db, "posts"), {
                    caption, 
                    imageAlt, 
                    imageSrc: "",
                    userName
                });
                setPostSuccessful(true);
            } catch (e) {
                console.error("Error adding document, ", e);
            }
    }, [app, userInformation]);

    useEffect(() => {
        if(!isLoggedIn && !isLoading) return navigate('/login');
    }, [isLoading, isLoggedIn, navigate]);
    useEffect(() => {
        if(postSuccessful) return navigate('/dashboard'); 
    }, [postSuccessful, navigate]);
    

    return(
    <>
    <Header isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation}/>
    <div className="PageWrapper">
        <h1>Post a New Outfit!</h1>
        <CreatePostForm 
                createPost={createPost}/>
                <p>{postSuccessful && "Success!"}</p>
    </div>
    </>
    );
}

export default CreatePost;