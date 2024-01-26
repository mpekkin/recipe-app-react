import React from "react";
import { Button } from "@mui/material";
import { RecipeItem } from "../../App";
import { RecipeName } from "./RecipeName";
import { Ingredients } from "./Ingredients";
import { Preparation } from "./Preparation";
import { TagsMenu } from "./TagsMenu";
import { TagDisplay } from "./TagDisplay";

interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

const RecipeCard:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {


    return (
        <div className="recipe-card">
            <RecipeName
                 recipe={recipe}
                setRecipe={setRecipe}
            />
            <Ingredients
                recipe={recipe}
                ingredients={recipe.ingredients}
                setRecipe={setRecipe}
            />
            <Preparation
                recipe={recipe}
                setRecipe={setRecipe}
            />
            <br/>
            <div className="single-line">
                <TagDisplay
                    recipe={recipe}
                    setRecipe={setRecipe}
                />
                <TagsMenu
                    recipe={recipe}
                    setRecipe={setRecipe}
                />
            </div>

            <div className="button-div">
                <Button variant="contained" color="success" size="medium">
                    Save
                </Button>
            </div>
        </div>
    )
}

export default RecipeCard