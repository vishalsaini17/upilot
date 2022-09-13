import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../Components/Button/Button';
import FormError from '../../Components/FormError/FormError';
import Input from '../../Components/Input/Input';
import "./ForgotPassword.css";

import AppContext from "../../AppContext";
import { ThemeContext } from "../../Themes";

import DarkLogo from "../../Logo/UPilot logo - dark vertical.svg";
import LightLogo from "../../Logo/UPilot logo - white vertical.svg";

export default function ForgotPassword(){
    const navigate = useNavigate();
    
    const {theme, toggleTheme} = useContext(ThemeContext);
    const themeTone = useContext(AppContext);
    
    const [email, setEmail] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === ''){
            setErrorMessage('Info missing')
            setIsInvalid(true);
        }
    }

    const logoHandle = () => {
        if (theme === 'dark-theme'){
            return LightLogo
        } else {
            return DarkLogo
        }
    }

  return (
    <div className = {`forgotpwd-screen ${theme} ${themeTone}`}>
        <div className = 'wrapper'>
            <div className = 'forgotpwd-form'>
                <div className = 'logo-wrapper'>
                    <img src = {logoHandle()} style = {{width: '109px', height: '120px'}}></img>
                </div>
                <p className = 'form-title'> Forgot Password </p>
                <p className = 'forgotpwd-msg'> 
                    Please type the email address that you usually use
                    to log in to UPilot. You will receive an email with the 
                    instructions to reset your password.
                </p>

                <div className = 'form-control'>
                <Input    
                    type = 'email'
                    value= {email}
                    placeholder = "Type your email"
                    name = "email"
                    onChange= {handleChange}
                    size = "large"
                    icon_left = 'yes'
                    icon = 'mail'
                    isInvalid = {isInvalid}
                />
                <FormError errormessage = {errorMessage}/>
                </div>

                <Button 
                    type = "submit" 
                    text = "Send" 
                    shape = "square" 
                    color = "primary" 
                    size = "large" 
                    onClick = {handleSubmit}
                    futureStyle = {{width: '100%'}}
                />

                <Button shape = 'no_border'
                        size = 'small'
                        text = 'Cancel'
                        futureStyle ={{width: '100%'}}
                        onClick = {() => navigate('/')} />
            </div>
        </div>
    </div>
  )
}
