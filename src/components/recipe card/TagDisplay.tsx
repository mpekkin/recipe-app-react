import React from "react";
import { RecipeItem } from "../../App";
import { Chip } from "@mui/material";

interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const TagDisplay:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {

    const handleDeleteTag = (tagName) => {            
        const tagsCopy = [...recipe.tags]
        const newTags = tagsCopy.filter(tag => tag != tagName)
        setRecipe({
            ...recipe,
            tags: newTags
        })
    }

    return (
        <div id="tags-display">
            {recipe.tags.map((tag, index)=>  
                <Chip
                    data-value={tag}
                    key={index}
                    variant="outlined" 
                    color="primary" 
                    size="medium"
                    label={tag}
                    style={{margin: "0.1rem"}}
                    onDelete={() => handleDeleteTag(tag)} 
                />           
            )}

        </div>
    )
}