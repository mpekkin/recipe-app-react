import React from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { IngredientsItem, PreparationItem, RecipeItem } from "../App";

interface RecipeProps {
    recipe: RecipeItem
}

const RecipeCard:React.FC<RecipeProps> = ({ recipe }: RecipeProps) => {
    return (
        <div className='page-container'>
            <div className="recipe-card">
                <TextField 
                    id="standard-basic" 
                    label="Recipe name" 
                    variant="standard"
                    value={recipe.name}
                />
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients.map((ingredient: IngredientsItem) => 
                        <li key={ingredient.id} >
                            <div className="single-line">
                                <TextField fullWidth multiline
                                value={ingredient.text} />
                                <IconButton 
                                    aria-label="delete">
                                    <ClearIcon />
                                </IconButton>
                            </div>
                        </li>
                )}
                </ul>
                <IconButton aria-label='add' size="small" style={{marginLeft: "1rem", padding: 0}}><AddCircleIcon/><p style={{margin: "0.7rem"}}>Add ingredient</p></IconButton><br/>
                <IconButton aria-label='add' size="small" style={{marginLeft: "1rem", padding: 0}}><AddCircleIcon/><p style={{margin: "0.7rem"}}>Add subtitle</p></IconButton>
                <h2>Preparation</h2>
                <ol>
                    {recipe.preparation.map((step: PreparationItem) => 
                        <li key={step.id}>
                            <div className="single-line">
                                <TextField fullWidth multiline
                                value={step.text} />
                                <IconButton 
                                    aria-label="delete">
                                    <ClearIcon />
                                </IconButton>
                            </div>
                    </li>
                )}
                </ol>
                <IconButton aria-label='add' size="small" style={{marginLeft: "1rem", padding: 0}}><AddCircleIcon/><p style={{margin: "0.7rem"}}>Add step</p></IconButton>
            </div>
        </div>
    )
}

export default RecipeCard