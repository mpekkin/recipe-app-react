import React from "react"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    return (
        <div className="header">
            <a href="#default" className="logo">Reseptit <RamenDiningIcon fontSize="inherit"/></a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
                <a href="#contact"><AddIcon fontSize="inherit"/>New recipe</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Header