import React from "react"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <a href="#default" className="logo">My Recipes <RamenDiningIcon fontSize="inherit"/></a>
            <div className="header-right">
                <a className="active" href="#home">Home</a>
{/*                 <Link to="home" >
                    Home
                </Link>
                <Link to="recipes/new" >
                    New
                </Link> */}
                
            </div>
        </div>
    )
}

export default Header