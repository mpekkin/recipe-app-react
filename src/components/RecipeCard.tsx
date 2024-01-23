import React, { useEffect } from "react";
import { uid } from "uid";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { IngredientsItem, PreparationItem, RecipeItem } from "../App";

interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

const RecipeCard:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {


const handleAddIngredient = () => {
    let newIngredients = recipe.ingredients
    newIngredients.push({id: uid(), text: ""})
    setRecipe({
        ...recipe,
        ingredients: newIngredients
    })
}

const handleDeleteIngredient = (targetId: string) => {
    const IngredientDeleted = recipe.ingredients.filter(ingredient => ingredient.id !== targetId)
    setRecipe({
        ...recipe,
        ingredients: IngredientDeleted
    })
}

const handleChangeRecipeName = (newName) => {
    setRecipe({
        ...recipe,
        name: newName
    })
}

const handleAddStep = () => {
    let newPrep = recipe.preparation
    newPrep.push({id: uid(), text: ""})
    setRecipe({
        ...recipe,
        preparation: newPrep
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
                <input 
                placeholder="Reseptin nimi"
                value={recipe.name}
                onChange={(e) => {handleChangeRecipeName(e.target.value)}}
                >
                </input>
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients.map((ingredient: IngredientsItem) => 
                        <li key={ingredient.id} >
                            <div className="single-line">
                                <TextField fullWidth multiline
                                value={ingredient.text} />
                                <IconButton 
                                    aria-label="delete"
                                    onClick={() => handleDeleteIngredient(ingredient.id)}
                                    >
                                    <ClearIcon />
                                </IconButton>
                            </div>
                        </li>
                )}
                </ul>
                <IconButton 
                    aria-label='add' 
                    size="small" 
                    style={{marginLeft: "1rem", padding: 0}}
                    onClick={() => handleAddIngredient()}
                    >
                        <AddCircleIcon/>
                            <p style={{margin: "0.7rem"}}>
                                Add ingredient
                            </p>
                </IconButton><br/>
                <IconButton 
                    aria-label='add' 
                    size="small" 
                    style={{marginLeft: "1rem", padding: 0}}
                    >
                        <AddCircleIcon/>
                            <p style={{margin: "0.7rem"}}>
                                Add subtitle
                            </p>
                </IconButton>
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
                </IconButton>
            </div>
        </div>
    )
}

export default RecipeCard