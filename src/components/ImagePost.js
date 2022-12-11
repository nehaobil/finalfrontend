import React from "react";

function ImagePost({imageData}){
    return(
        <div>
            <img src={imageData.src} alt={imageData.alt}/>
            <p>Caption</p>
        </div>
    )
}

export default ImagePost;