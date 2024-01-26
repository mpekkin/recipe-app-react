import React from "react";
import { Button } from "@mui/material";
import { RecipeItem } from "../App";
import { RecipeName } from "./recipe form/RecipeName";
import { Ingredients } from "./recipe form/Ingredients";
import { Preparation } from "./recipe form/Preparation";
import { TagDisplay } from "./recipe form/TagDisplay";

interface RecipeProps {
    recipe: RecipeItem
}

export const RecipeDisplay:React.FC<RecipeProps> = ({ recipe }: RecipeProps) => {

    return (
        <div className="recipe-display">
            <h1 id="recipe-name">{recipe.name}</h1>
            <h2>Ingredients</h2>
                {recipe.ingredients.map((section) =>
                <div key={section.id}>
                    <h3>{section.subtitle}</h3>
                    <ul>
                    {section.content.map((ingredient) => 
                        <li key={ingredient.id} >
                            <p>{ingredient.text}</p>
                        </li>
                    )}
                    </ul>
                </div> )}   
            <h2>Preparation</h2>
            <ol>
                {recipe.preparation.map((step) => 
                    <li key={step.id}>
                            <p>{step.text}</p>
                    </li>
                )}
            </ol>        
            
        </div>
 
    )
}