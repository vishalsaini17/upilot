import React, { useContext } from "react"
import "./Navbar.css"
import Button from "../Button/Button"
import AddLine from "remixicon-react/AddLineIcon"

import { ThemeContext } from "../../Themes"

export default function Navbar(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    console.log(theme)
    

    return(
        <div className="navbar-wrapper"> 
            <div className="header-toggle-buttons">
                <Button size = "small" shape = "round_plus" color = "primary" />
                <p> Hello world </p>
                <button onClick={() => toggleTheme()}>{theme}</button>
            </div>
    </div>
    )
}