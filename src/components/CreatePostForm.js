import React from "react";

function CreatePostForm({createPost}){
    return (
    <form className="FormElement" onSubmit={(e) => createPost(e)}>
        <label htmlFor="imageToUpload">Upload an image</label>
            <input
                type="file"
                name="imageToUpload"
                accept="image/png, image/jpeg, image/jpg, image/gif"
            />
        <label for="caption">Caption</label>
        <input type="text" name="caption"/>
        <label for="imageAlt">Image Alt</label>
        <input type="text" name="imageAlt"/>
        <button type="submit" className="Button">Submit</button>
    </form>
    );
}

export default CreatePostForm;

/*<label htmlFor="imageToUpload">Outfit</label>
            <input
                type="file"
                name="imageToUpload"
                accept="image/png, image/jpeg, image/jpg, image/gif"
            />
            */