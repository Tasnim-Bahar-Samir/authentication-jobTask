import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Login/>
    },
    {
        path:'/Login',
        element: <Login/>
    },
    {
        path:'/register',
        element: <Register/>
    },
    {
        path:'/home',
        element: <Home/>
    }
])