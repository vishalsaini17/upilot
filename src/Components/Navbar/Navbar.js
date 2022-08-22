import React, { useContext, useState } from "react"
import "./Navbar.css"
import Button from "../Button/Button";
import Searchbar from "../Searchbar/Searchbar";
import AddInPopup from "../AddInPopup/AddInPopup";

//icon
import MailOpen from "remixicon-react/MailOpenLineIcon";
import BriefCase from "remixicon-react/BriefcaseFillIcon";
import Information from "remixicon-react/InformationFillIcon"

//logo
import WhiteLogo from "../../Logo/UPilot logo - white horizontal.svg"

//theme
import { ThemeContext } from "../../Themes"


export default function Navbar(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    const [selectedItem, changeSelectedItem] = useState("");
    const [showAddPopup, setShowAddPopup] = useState(false)

    console.log(theme)

    const menuItems = [
        {
            id: 1,
            url: "/",
            title: "Emails",
            img: <MailOpen/>
        },
        {
            id:2,
            url: "",
            title: "Deal",
            img: <BriefCase/>
        },
        {
            id: 3,
            url: "",
            title: "Notification",
            img: <Information/>
        },
    ]

    const changeItem = (item) => {

        changeSelectedItem(item);
    };

    const returnClassname = (item) => {
        if (item === selectedItem){
            return "nav-item-selected";
        } else {
            return "nav-item"
        }
    }
    

    return(
        <div className="navbar-wrapper"> 
            <div className="navbar">
                <AddInPopup
                    trigger = {showAddPopup}
                    setTrigger = {setShowAddPopup} />
                <nav className="nav-items-list">
                    <div className = "nav-left">
                        <Button size = "medium" 
                                shape = "round_plus" 
                                color = "primary" 
                                onClick= {() => setShowAddPopup(true)}/>
                        <Searchbar />
                    </div>

                    <div className = "nav-center">
                        <img className = "nav-logo" src = {WhiteLogo}  alt=""/>
                    </div>
                    <div className = "nav-right">
                        <ul className = "navbar-menu">
                            {menuItems.map((item) => {
                                return(
                                    <li key = {item.id}>
                                        <a
                                            key ={item.title}
                                            onClick = {() => changeItem(item.title)}
                                            className = {returnClassname(item.title)}
                                            // href = {item.url}
                                        >
                                            {item.img}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <button onClick={() => toggleTheme()}>{theme}</button>
                    </div>
                    
                </nav>
            </div>
        </div>
    )
}