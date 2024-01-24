import React from "react";
import { RecipeItem } from "../../App";

interface RecipeProps {
    name: string | undefined
    sectionId: string
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const Subtitle:React.FC<RecipeProps> = ({ recipe, setRecipe, name, sectionId }: RecipeProps) => {

    const handleChangeSubtitle = (newSubtitle, sectionId) => {
        const ingredientsCopy = recipe.ingredients
        let index = ingredientsCopy.findIndex(item => item.id == sectionId)
        if(index != -1) {
            ingredientsCopy[index] = {
                ...ingredientsCopy[index],
                subtitle: newSubtitle
            }
        }
        setRecipe({
            ...recipe,
            ingredients: ingredientsCopy
        })
    }

    if(name == undefined) {
        return null
    }

    return (
        <input id="subtitle-input"
            placeholder="New subtitle"
            value={name}
            onChange={(e) => {handleChangeSubtitle(e.target.value, sectionId)}}>
                    
        </input>

    )
}