import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
import Header from "./components/Header";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqUaYuht4nTP_ovV3dElhqWOprm4CTYU8",
  authDomain: "finalproject-241f4.firebaseapp.com",
  projectId: "finalproject-241f4",
  storageBucket: "finalproject-241f4.appspot.com",
  messagingSenderId: "154601124173",
  appId: "1:154601124173:web:5ec9d57dd8fe5255bd0704"
};


function App() {
const [appInitialized, setAppInitialized] = useState(false);
const [isLoading,setIsLoading] = useState(false);
const [isLoggedIn,setIsLoggedIn] = useState(false);
const [userInformation, setUserInformation] = useState(false);

useEffect(()=> {
  initializeApp(firebaseConfig);
  setAppInitialized(true);
}, []);

useEffect(() => {
  if (appInitialized){
    const auth= getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user){
        setUserInformation(user);
        setIsLoggedIn(true);
      } else {
        setUserInformation({});
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });
  }
}, [appInitialized]);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <UserProfilePage 
    isLoggedIn= {isLoggedIn}
    isLoading = {isLoading}
    userInformation= {userInformation}
    setIsLoggedIn={setIsLoggedIn}
    setUserInformation={setUserInformation}
    />
    ),
  },
  {
    path: "/login",
    element: (
    <LoginPage 
    isLoggedIn= {isLoggedIn}
    setIsLoggedIn={setIsLoggedIn}
    setUserInformation={setUserInformation}
    />
    ),
  },
  {
    path: "/create",
    element: (
    <CreateUserPage
    isLoggedIn= {isLoggedIn}
    setIsLoggedIn={setIsLoggedIn}
    setUserInformation={setUserInformation}
    />
    )
  },
]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

