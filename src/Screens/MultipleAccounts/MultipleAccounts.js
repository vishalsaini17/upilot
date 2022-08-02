import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';

import "./MultipleAccounts.css"
import Button from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import FormError from "../../Components/FormError/FormError";

import { ThemeContext } from "../../Themes";
import LightLogo from "../../Logo/UPilot logo - white vertical.svg";
import DarkLogo from "../../Logo/UPilot logo - dark vertical.svg";

export default function MultipleAccounts(){
    const [isChecked, setIsChecked] = useState(false);
    const {theme, toggleTheme} = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCheckBox = () => {
        setIsChecked(!isChecked)
    }

    const logoHandle = () => {
        if (theme === 'dark-theme'){
          return LightLogo
        } else{
          return DarkLogo
        }
    }

  return (
    <div className = 'multipleacc-screen'>
        <div className = 'wrapper'>
        <form className = 'multipleacc-form' style ={{margin: '0 auto',
                                          padding: '1rem 2rem',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          textAlign: 'center',
                                          maxWidth: 'fit-content'}}>
                <div className = 'logo-wrapper'>
                    <img src = {logoHandle} style = {{width: '109px', height: '120px'}}></img>
                </div>
                <div><p className = 'form-title'> Choose Account </p></div>
                <div className="form-control">
                    <div className="form-wrapper">
                        <div>
                        <Checkbox 
                        id = "checkbox"
                        label = "https://spjain.upilot.com"
                        value = {isChecked}
                        onChange = {handleCheckBox}
                        />
                        </div>

                        <div>
                        <Checkbox 
                        id = "checkbox"
                        label = "https://account2.upilot.com"
                        value = {isChecked}
                        onChange = {handleCheckBox}
                        />
                        </div>

                        <div>
                        <Checkbox 
                        id = "checkbox"
                        label = "https://account3.upilot.com"
                        value = {isChecked}
                        onChange = {handleCheckBox}
                        />
                        </div>
                    
                    </div>
                        <Button 
                            type = "submit" 
                            text = "Sign In" 
                            shape = "square" 
                            color = "primary" 
                            size = "large" 
                            onClick = {handleSubmit}
                        />
                    
                </div>
                </form>
            </div>
        </div>
  );
}
