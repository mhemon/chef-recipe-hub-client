import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import Register from "../components/Register/Register";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import PrivateRecipe from "../private/PrivateRecipe";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('https://chef-recipe-hub-server.vercel.app')
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
                element: <PrivateRecipe><ChefRecipes/></PrivateRecipe>,
                loader: ({params}) => fetch(`https://chef-recipe-hub-server.vercel.app/${params.id}`)
            }
        ]
    },
]);