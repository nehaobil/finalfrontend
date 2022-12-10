import React from "react";

function CreateUserForm({signUpUser}){
    return (
    <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
        <label for="email">Email</label>
        <input type="text" name="email"/>
        <label for="password">Password</label>
        <input type="text" name="password"/>
        <button type="submit">Submit</button>
    </form>
    );
}

export default CreateUserForm;