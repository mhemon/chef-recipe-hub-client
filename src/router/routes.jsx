import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:5000')
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/chef-recipes/:id',
                element: <ChefRecipes/>,
                loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
            }
        ]
    },
]);