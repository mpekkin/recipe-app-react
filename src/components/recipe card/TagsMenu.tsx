import React from "react";
import { RecipeItem } from "../../App";
import { Button, Divider, Menu, MenuItem } from "@mui/material";


interface RecipeProps {
    recipe: RecipeItem
    setRecipe: React.Dispatch<React.SetStateAction<RecipeItem>>
}

export const TagsMenu:React.FC<RecipeProps> = ({ recipe, setRecipe }: RecipeProps) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div id="tags-menu">
        <Button
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
          <MenuItem onClick={handleClose}>Appetizer</MenuItem>
          <MenuItem onClick={handleClose}>Main dish</MenuItem>
          <MenuItem onClick={handleClose}>Dessert</MenuItem>
          <MenuItem onClick={handleClose}>Salad</MenuItem>
          <MenuItem onClick={handleClose}>Soup</MenuItem>
          <MenuItem onClick={handleClose}>Breakfast/Snack/Supper</MenuItem>
          <MenuItem onClick={handleClose}>Beverage</MenuItem>
          <Divider/>
          <MenuItem onClick={handleClose}>Cake</MenuItem>
          <MenuItem onClick={handleClose}>Pie</MenuItem>
          <MenuItem onClick={handleClose}>Muffin</MenuItem>
          <MenuItem onClick={handleClose}>Bread</MenuItem>
          <MenuItem onClick={handleClose}>Cookies</MenuItem>
        </Menu>
      </div>
    )
}