import React from "react";
import { uid } from "uid";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from "@mui/material";
import { IngredientsItem, PreparationItem, RecipeItem } from "../../App";
import { RecipeName } from "./RecipeName";
import { Ingredients } from "./Ingredients";
import { Preparation } from "./Preparation";
import { TagsMenu } from "./TagsMenu";

interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

const RecipeCard:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {






/* const handleChangeRecipeName = (newName) => {
    setRecipe((draft: RecipeItem): RecipeItem => {
        draft.name = newName
        return draft
    })
} */





    return (
        <div className='page-container'>
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
                <TagsMenu
                    recipe={recipe}
                    setRecipe={setRecipe}
                />
                <div className="button-div">
                <Button variant="contained" color="success" size="medium">
                    Save
                </Button>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard