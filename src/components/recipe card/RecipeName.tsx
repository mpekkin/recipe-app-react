import React from "react";
import { RecipeItem } from "../../App";

interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const RecipeName:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {

    const handleChangeRecipeName = (newName) => {
        setRecipe({
            ...recipe,
            name: newName
        })
    }

    return (
        <input 
            placeholder="Recipe name"
            value={recipe.name}
            onChange={(e) => {handleChangeRecipeName(e.target.value)}}
            >
        </input>
    )
}