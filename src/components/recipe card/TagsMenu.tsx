import React from "react";
import { RecipeItem } from "../../App";
import { Button, Divider, Menu, MenuItem } from "@mui/material";


interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const TagsMenu:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {

    const tagItems = ["Appetizers", "Main dishes", "Desserts", "Salads", "Soups", "Breakfast", "Snacks", "Beverages", "Cakes", "Pies", "Muffins", "Bread", "Cookies"]

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleAddTag = (event) => {
        setAnchorEl(null)
        const { value } = event?.currentTarget.dataset       
        const tagsCopy = [...recipe.tags]
        if (tagsCopy.includes(value) == false) {
            tagsCopy.push(value)
            setRecipe({
            ...recipe,
            tags: tagsCopy
            })
        }

    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div id="tags-menu">
        <Button
        size="medium"
        variant="contained"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          + Add tags
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
            {tagItems.map((tagName, index) =>
               <MenuItem key={index} data-value={tagName} onClick={(e) => handleAddTag(e)}>{tagName}</MenuItem> 
            )}
        </Menu>
      </div>
    )
}