import React from "react";
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear';
import { IngredientsItem, PreparationItem, RecipeItem, contentItem } from "../../App";


interface RecipeProps {
    ingredientId: string
    sectionId: string
    clickHandler: Function
}

export const DeleteButton:React.FC<RecipeProps> = ({ ingredientId, sectionId, clickHandler }: RecipeProps) => {

    return (
        <>
            <IconButton 
                aria-label="delete"
                value={sectionId}
                onClick={(e) => clickHandler(ingredientId, e.currentTarget.value)}
                >
                <ClearIcon />
            </IconButton>
        </>
    )
}