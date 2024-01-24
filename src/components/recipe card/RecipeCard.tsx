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

const handleAddStep = () => {
    let newPrep = recipe.preparation
    newPrep.push({id: uid(), text: ""})
    setRecipe((draft: RecipeItem): RecipeItem => {
        draft.preparation = newPrep
        return draft
    })
}

const handleDeleteStep = (targetId: string) => {
    const stepDeleted = recipe.preparation.filter(step => step.id !== targetId)
    setRecipe({
        ...recipe,
        preparation: stepDeleted
    })
}



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
                <h2>Preparation</h2>
                <ol>
                    {recipe.preparation.map((step: PreparationItem) => 
                        <li key={step.id}>
                            <div className="single-line">
                                <TextField fullWidth multiline
                                value={step.text} />
                                <IconButton 
                                    aria-label="delete"
                                    onClick={() => {handleDeleteStep(step.id)}}>
                                    <ClearIcon />
                                </IconButton>
                            </div>
                    </li>
                )}
                </ol>
                <IconButton 
                    aria-label='add' 
                    size="small" 
                    style={{marginLeft: "1rem", padding: 0}}
                    onClick={() => {handleAddStep()}}>
                        <AddCircleIcon/>
                            <p style={{margin: "0.7rem"}}>
                                Add step
                            </p>
                </IconButton> <br/>
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