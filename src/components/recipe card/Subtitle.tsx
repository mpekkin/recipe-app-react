import React from "react";
import { RecipeItem } from "../../App";
import { DeleteButton } from "./DeleteButton";
import { getIngredientIndex } from "./Ingredients";


interface RecipeProps {
    name: string | undefined
    sectionId: string
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const Subtitle:React.FC<RecipeProps> = ({ recipe, setRecipe, name, sectionId }: RecipeProps) => {

    const handleChangeSubtitle = (newSubtitle: string, sectionId: string) => {
        const ingredientsCopy = [...recipe.ingredients]
        let index = getIngredientIndex(recipe, sectionId)
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

    const handleDeleteSubtitle = (itemName: string, sectionId: string) => {
        const ingredientsCopy = [...recipe.ingredients]
        let index = getIngredientIndex(recipe, sectionId)
        
        if(index != -1) {
            //Transfer the ingredients of the subtitle to be deleted under the next bottommost subtitle (if textfield is not empty).
            for (const element of ingredientsCopy[index].content) {
                if (element.text != "") {
                    ingredientsCopy[index-1].content.push(element)
                }
            }
        }
        setRecipe({
            ...recipe,
            ingredients: ingredientsCopy.filter(item => item.id != sectionId)
        })
    }

    if(name == undefined) {
        return null
    }

    return (
        <>
        <input id="subtitle-input"
            placeholder="New subtitle"
            value={name}
            onChange={(e) => {handleChangeSubtitle(e.target.value, sectionId)}}>
                    
        </input>
        <DeleteButton
            itemId={name}
            sectionId={sectionId}
            clickHandler={handleDeleteSubtitle}
        />
        </>
    )
}