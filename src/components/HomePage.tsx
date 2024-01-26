import React from "react";
import { Button } from "@mui/material";
import { RecipeItem } from "../App";


interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const HomePage:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {

    return (
        <div className="page-container">
            <h2>All recipes</h2>
            <p>All recipe names here from database</p>

            <Button variant="contained" color="success" size="medium">
                New recipe
            </Button>

        </div>
    )
}