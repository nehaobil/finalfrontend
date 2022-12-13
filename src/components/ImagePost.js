import React from "react";

function ImagePost({caption, imageAlt, imageSrc, userName}){
    return(
        <div className="ImagePost">
            <img src={imageSrc} alt={imageAlt}/>
            <div className="ImagePostText">
                <p className="Caption">{caption}</p>
                <p className="PostedBy">Posted by: {userName}</p>
            </div>
        </div>
    )
}

export default ImagePost;