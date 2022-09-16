import React, { useContext, useState } from "react";

import Button from '../../Components/Button/Button';
import Checkbox from '../../Components/Checkbox/Checkbox';
import "./MultipleAccounts.css";

import AppContext from "../../AppContext";
import DarkLogo from "../../Logo/UPilot logo - dark vertical.svg";
import LightLogo from "../../Logo/UPilot logo - white vertical.svg";
import { ThemeContext } from "../../Themes";

export default function MultipleAccounts(){
    // theming
    const {theme, toggleTheme} = useContext(ThemeContext);
    const themeTone = useContext(AppContext);


    const checkedList = [
        {
            name: '',
            label: "https://spjain.upilot.com"
        },
        {
            name: '',
            label: "https://account2.upilot.com"
        },
        {
            name: '',
            label: "https://account3.upilot.com"
        }
    ];


    const [checkedState, setCheckedState] = useState(
        new Array(checkedList.length).fill(false) 
    );



    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => 
            index === position ? !item : item //reverse the value of item
        );

        setCheckedState(updatedCheckedState)
    }

    const logoHandle = () => {
        if (theme === 'dark-theme'){
          return LightLogo
        } else{
          return DarkLogo
        }
    }

  return (
    <div className = {`multipleacc-screen ${theme} ${themeTone}`}>
        <div className = 'wrapper'>
        <form className = 'multipleacc-form' style ={{margin: '0 auto',
                                          padding: '1rem 2rem',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          textAlign: 'center',
                                          maxWidth: 'fit-content'}}>
                <div className = 'logo-wrapper'>
                    <img src = {logoHandle()} style = {{width: '109px', height: '120px'}}></img>
                </div>
                <div><p className = 'form-title'> Choose Account </p></div>
                <div className="form-control">
                    <div className="form-wrapper">
                        {checkedList.map(({label}, index) => {
                            return(
                                <div key ={index}>
                                    <Checkbox 
                                        id = {`custom-checkbox-${index}`}
                                        label = {label}
                                        value = {checkedState[index]}
                                        onChange = {() => handleOnChange(index)}/>
                                </div>
                            )
                        })}                    
                    </div>
                        <Button 
                            type = "submit" 
                            text = "Sign In" 
                            shape = "square" 
                            color = "primary" 
                            size = "large" 
                            onClick = {handleSubmit}
                            futureStyle = {{width: '100%'}}
                        />
                    
                </div>
                </form>
            </div>
        </div>
  );
}