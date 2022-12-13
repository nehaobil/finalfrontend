import React from "react";
import { Link } from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";

function Header({isLoggedIn, setUserInformation, setIsLoggedIn}) {
    function logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            })
    }


    return (
        <header>
        <nav>
        {!isLoggedIn &&(
            <Link to="/login">
                <p>Login</p>
            </Link>
        )}
        {!isLoggedIn &&(
            <Link to="/create">
                <p>Create Account</p>
            </Link>
        )}
          {isLoggedIn &&(
            <button className="PostButton">
                <Link to="/post">Post New Outfit</Link>
            </button>
        )}
        {isLoggedIn &&(
             <p>
             <Link to="/dashboard">Home</Link>
            </p>
        )}
         {isLoggedIn &&(
             <p>
             <Link to="/user">My Profile</Link>
            </p>
        )}
        {isLoggedIn &&(
             <p onClick={() => logout()}>
             <Link to="/">Log out</Link>
             </p>
        )}
      
        </nav>
        </header>
    )
}

export default Header;