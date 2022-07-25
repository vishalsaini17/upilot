import React from 'react';
import {Link} from 'react-router-dom'

import "./ForgotPassword.css"
import Input from '../../Components/Input/Input';
import FormError from '../../Components/FormError/FormError';
import Button from '../../Components/Button/Button';

import Logo from "../../Logo/UPilot logo - white vertical.svg"

export default function ForgotPassword(){
  return (
    <div className = 'forgotpwd-screen'>
        <div className = 'wrapper'>
            <div className = 'forgotpwd-form'>
                <div className = 'logo-wrapper'>
                    <img src = {Logo} style = {{width: '109px', height: '120px'}}></img>
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
                    value= ''
                    placeholder = "Type your email"
                    name = "email"
                    onChange= ''
                    size = "large"
                    icon_left = 'yes'
                    icon = 'mail'
                />
                <FormError errormessage = ''/>
                </div>

                <Button 
                    type = "submit" 
                    text = "Send" 
                    shape = "square" 
                    color = "primary" 
                    size = "large" 
                    onClick = ''
                />
                <Link to ='/'>
                    <p className ='cancel'> Cancel </p>
                </Link>
            </div>
        </div>
    </div>
  )
}
