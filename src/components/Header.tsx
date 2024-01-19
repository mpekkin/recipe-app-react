import React from "react"
import RamenDiningIcon from '@mui/icons-material/RamenDining';


const Header = () => {
    return (
        <div className="header">
            <a href="#default" className="logo">My Recipes <RamenDiningIcon fontSize="inherit"/></a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#new-recipe">New recipe</a>
                
            </div>
        </div>
    )
}

export default Header