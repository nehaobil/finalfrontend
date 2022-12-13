import React from "react";

function CreateUserForm({signUpUser}){
    return (
    <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
        <label for="name">Name</label>
        <input type="text" name="name"/>
        <label for="email">Email</label>
        <input type="text" name="email"/>
        <label for="password">Password</label>
        <input type="password" name="password"/>
        <button type="submit" className="Button">Submit</button>
    </form>
    );
}

export default CreateUserForm;