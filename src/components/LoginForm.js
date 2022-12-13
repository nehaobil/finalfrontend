import React from "react";

function LoginForm({loginUser}){
    return (
    <form className="FormElement" onSubmit={(e) => loginUser(e)}>
        <label for="email">Email</label>
        <input type="text" name="email"/>
        <label for="password">Password</label>
        <input type="password" name="password"/>
        <button type="submit" className="Button">Submit</button>
    </form>
    );
}

export default LoginForm;