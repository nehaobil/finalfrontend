import React, { useEffect,useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function ImagePost({caption, imageAlt, imageSrc, userName}){
   
        return (
            <div className="ImagePost">
                <img 
                className="PostImage"
                src={imageSrc} 
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