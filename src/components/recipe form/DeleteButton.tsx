import React from "react";
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear';
import { IngredientsItem, PreparationItem, RecipeItem, contentItem } from "../../App";


interface RecipeProps {
    itemId: string
    sectionId: string
    clickHandler: Function
}

export const DeleteButton:React.FC<RecipeProps> = ({ itemId, sectionId, clickHandler }: RecipeProps) => {

    return (
        <>
            <IconButton 
                aria-label="delete"
                value={sectionId}
                onClick={(e) => clickHandler(itemId, e.currentTarget.value)}
                >
                <ClearIcon />
            </IconButton>
        </>
    )
}