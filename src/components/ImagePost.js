import React from "react";

function ImagePost({caption, imageAlt, imageSrc}){
    return(
        <div className="ImagePost">
            <img src={imageSrc} alt={imageAlt}/>
            <div className="ImagePostText">
                <p className="Caption">{caption}</p>
            </div>
        </div>
    )
}

export default ImagePost;