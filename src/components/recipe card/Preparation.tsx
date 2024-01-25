import React, { useState } from "react";
import { uid } from "uid";
import TextField from '@mui/material/TextField';
import { IngredientsItem, PreparationItem, RecipeItem } from "../../App";
import { DeleteButton } from "./DeleteButton";
import { AddButton } from "./AddButton";
import { Subtitle } from "./Subtitle";
import { IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const Preparation:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {

    const handleAddStep = (newStepId) => {
        const preparationCopy = [...recipe.preparation]
        preparationCopy.push({id: newStepId, text: ""})
        setRecipe({
            ...recipe,
            preparation: preparationCopy
        })
    }
    
    const handleDeleteStep = (targetStepId: string, sectionId) => {
        const preparationCopy = [...recipe.preparation]
        const stepDeleted = preparationCopy.filter(step => step.id !== targetStepId)
        setRecipe({
            ...recipe,
            preparation: stepDeleted
        })
    }

    const handleEditStep = (stepId: string, newStepText: string) => {
        const preparationCopy = [...recipe.preparation]
        let index = preparationCopy.findIndex(item => item.id == stepId)
        if(index != -1) {
            preparationCopy[index] = {
                ...preparationCopy[index],
                text: newStepText
            }
        }
        setRecipe({
            ...recipe,
            preparation: preparationCopy
        })
    }

    return (
        <>
            <h2>Preparation</h2>
            <ol>
                {recipe.preparation.map((step: PreparationItem) => 
                    <li key={step.id}>
                        <div className="single-line">
                            <TextField fullWidth multiline
                                value={step.text}
                                onChange={(e) => handleEditStep(step.id, e.currentTarget.value)} />
                            <DeleteButton
                            clickHandler={handleDeleteStep}
                            itemId={step.id}
                            sectionId={step.text}
                            />
                        </div>
                    </li>
                )}
            </ol>
                <AddButton
                buttonText="Add step"
                clickHandler={handleAddStep}
                sectionId={uid()}
                /> 
        </>
    )
}