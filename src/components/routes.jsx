import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ErrorPage } from "./ErrorPage";
import RecipeCard from "./recipe form/RecipeCard";
import Root from "./Root";
import { uid } from 'uid'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "home",
                element: <HomePage recipe={recipe} setRecipe={setRecipe}/>
            },
            {
                path: "recipes/new",
                element: <RecipeCard recipe={recipe} setRecipe={setRecipe}/>
                
            }
        ],
    },
])

export default router