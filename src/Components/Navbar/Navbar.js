import React, { useContext } from "react"
import "./Navbar.css"

import { ThemeContext } from "../../Themes"

export default function Navbar(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    console.log(theme)
    

    return(
        <div className="navbar-wrapper"> 
            <div className="header-toggle-buttons">
                <p> Hello world </p>
                <button onClick={() => toggleTheme()}>{theme}</button>
            </div>
    </div>
    )
}