import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button";
import FormError from "../../Components/FormError/FormError";

import { ThemeContext } from "../../Themes";

import LightLogo from "../../Logo/UPilot logo - white vertical.svg"
import DarkLogo from "../../Logo/UPilot logo - dark vertical.svg"

import "./ResetPswd.css"

// test comment to demo git pull and conflict management
export default function ResetPswd() {
  const [pswd, setPswd] = useState({NewPassword:'',
                                         ConfirmPswd: ''});
  const [errorMessage, setErrorMessage] = useState({})
  const [isInvalid, setIsInvalid] = useState({})

  const {theme, toggleTheme} = useContext(ThemeContext)


  const handleChange = (e) => {
    const name = e.target.name; //geting name of variable you change
    const value = e.target.value;
    setPswd({...pswd, [name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors ={};
    const inValid = {};
    if (pswd.NewPassword === ''){
              errors['NewPassword'] = "Info missing"
               inValid['NewPassword'] = true
             }
      
             if (pswd.ConfirmPswd === ''){
               errors['ConfirmPswd'] = 'Info missing'
               inValid['ConfirmPswd'] = true
             }
           setErrorMessage(errors)
           setIsInvalid(inValid)
       }  
       
  const logoHandle = () => {
    if (theme == 'dark-theme'){
      return LightLogo
    } else{
      return DarkLogo
    }
  }

  return (
    <div className = 'resetpswd-screen'>
      <div className = 'wrapper'>
        <form className = 'form' style ={{margin: '0 auto',
                                          padding: '1rem 2rem',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          textAlign: 'center',
                                          maxWidth: 'fit-content'}}>
          <div className = 'logo-wrapper'>
            <img src = {logoHandle()} style = {{width: '109px', height: '120px'}}></img>
          </div>
          <p className = 'form-title'> Reset Your Password </p>
          <div className = 'form-control'>
            <Input 
            type = "password"
            value= {pswd.NewPassword}
            placeholder = "Set your password"
            name = "password"
            onChange= {handleChange}
            size = "large"
            isInvalid = {isInvalid.NewPassword}
            icon_left = 'yes'
            icon = 'password'
           />
          <FormError errormessage = {errorMessage.NewPassword}/>
         </div>
      
           <div className = 'form-control'>
             <Input 
            type = "password"
            value= {pswd.ConfirmPswd}
            placeholder = "Confirm your password"
            name = "ConfirmPswd"
            onChange= {handleChange}
            size = "large"
            icon_left = 'yes'
            isInvalid  = {isInvalid.ConfirmPswd}
            icon='password'
           />
           <FormError errormessage = {errorMessage.ConfirmPswd}/>
          </div>
          <Button 
            type = "submit" 
            text = "Reset your password" 
            shape = "square" 
            size="xlarge"
            color= "primary"
            onClick = {handleSubmit}
            />
      
        </form>
      </div>
    </div>
  
  );
}
