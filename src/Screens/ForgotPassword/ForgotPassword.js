import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'

import "./ForgotPassword.css"
import Input from '../../Components/Input/Input';
import FormError from '../../Components/FormError/FormError';
import Button from '../../Components/Button/Button';

import { ThemeContext } from "../../Themes";

import LightLogo from "../../Logo/UPilot logo - white vertical.svg"
import DarkLogo from "../../Logo/UPilot logo - dark vertical.svg"

export default function ForgotPassword(){
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === ''){
            setErrorMessage('Info missing')
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
    <div className = 'forgotpwd-screen'>
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
                />
                <Link to ='/'>
                    <p className ='cancel'> Cancel </p>
                </Link>
            </div>
        </div>
    </div>
  )
}
