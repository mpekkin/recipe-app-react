import React, { useState } from "react";
import { uid } from "uid";
import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IngredientsItem, PreparationItem, RecipeItem, contentItem } from "../../App";


interface RecipeProps {
    sectionId: string
    buttonText: string
    clickHandler: Function
}

    const subtitleWasDeleted = () => {

    }

export const AddButton:React.FC<RecipeProps> = ({ sectionId, buttonText, clickHandler }: RecipeProps) => {

    const [show, setShow] = useState("true")


  
    return (
        <>
            <IconButton 
                aria-label='add' 
                size="small" 
                style={{marginLeft: "1rem", padding: 0}}
                onClick={() => clickHandler(sectionId)}
                >
                    <AddCircleIcon/>
                        <p style={{margin: "0.7rem"}}>
                            {buttonText}
                        </p>
            </IconButton>
        </>
    )
}

//export default {AddButton, subtitleWasDeleted}