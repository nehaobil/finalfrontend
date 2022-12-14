import React, { useEffect,useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function ImagePost({caption, imageAlt, imageSrc, userName}){
        const [image, setImage] = useState();

        useEffect(() => {
            const storage = getStorage();
            getDownloadURL(ref(storage, 'images/' + imageSrc))
            .then((url) => {
                setImage(url);
            });
            
        },[imageSrc]);
        
        return (
            <div className="ImagePost">
                <img 
                className="PostImage"
                src={image} 
                alt={imageAlt}
                />
                <div className='ImagePostText'>
                <p className="Caption">{caption}</p>
                <p>Posted by: {userName}</p>
                </div>
            </div>
        )
        
    } 


export default ImagePost;