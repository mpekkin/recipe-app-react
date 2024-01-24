import React from "react";
import { uid } from "uid";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'

import ClearIcon from '@mui/icons-material/Clear';
import { Button } from "@mui/material";
import { IngredientsItem, PreparationItem, RecipeItem } from "../../App";
import { RecipeName } from "./RecipeName";
import { DeleteButton } from "./DeleteButton";
import { AddButton } from "./AddButton";
import { Subtitle } from "./Subtitle";

interface RecipeProps {
    recipe: RecipeItem
    ingredients: IngredientsItem[]
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const Ingredients:React.FC<RecipeProps> = ({ recipe, setRecipe, ingredients }: RecipeProps) => {

    const handleDeleteIngredient = (ingredientId: string, sectionId: string) => {
        const ingredientsCopy = [...recipe.ingredients]
        let index = ingredientsCopy.findIndex(item => item.id == sectionId)
        const ingredientDeleted = ingredientsCopy[index].content.filter(ingredient => ingredient.id !== ingredientId)
        if(index != -1) {
            ingredientsCopy[index] = {
                ...ingredientsCopy[index],
                content: ingredientDeleted
            }
        }
        setRecipe({
            ...recipe,
            ingredients: ingredientsCopy 
        })
    }

    const handleAddIngredient = (sectionId: string) => {
        const ingredientsCopy = recipe.ingredients
        let index = ingredientsCopy.findIndex(item => item.id == sectionId)
        if(index != -1) {
            const newIngredient = {id: uid(), text: ""}
            ingredientsCopy[index].content.push(newIngredient)
            }
        setRecipe({
            ...recipe,
            ingredients: ingredientsCopy 
        }) 
    }

    const handleAddSubtitle = (newSectionId) => {
        const newSection: IngredientsItem = {subtitle:"", id: newSectionId, content:[]}
        const ingredientsCopy = recipe.ingredients
        ingredientsCopy.push(newSection)
        setRecipe({
            ...recipe,
            ingredients: ingredientsCopy
        })
    }

    return (
        <>
            <h2>Ingredients</h2>
                {recipe.ingredients.map((section) =>
                <div key={section.id}>
                    <Subtitle
                        name={section.subtitle}
                        sectionId={section.id}
                        recipe={recipe}
                        setRecipe={setRecipe}
                    />
                    <ul>
                    {section.content.map((ingredient) => 
                        <li key={ingredient.id} >
                            <div className="single-line">
                                <TextField fullWidth multiline
                                    value={ingredient.text} 
                                />
                                <DeleteButton
                                    ingredientId={ingredient.id}
                                    sectionId={section.id}
                                    clickHandler={handleDeleteIngredient}
                                />
                            </div>
                        </li>
                    )}
                    </ul>
                    <AddButton
                        sectionId={section.id}
                        buttonText="Add ingredient"
                        clickHandler={handleAddIngredient}
                    />
                    <br/>
                </div>
                )}
                
            <AddButton
                sectionId={uid()}
                buttonText="Add subtitle"
                clickHandler={handleAddSubtitle}
            />
        </>
    )
}