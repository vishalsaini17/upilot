import React, { useContext, useState } from 'react'
import Button from '../../Components/Button/Button'
import Checkbox from '../../Components/Checkbox/Checkbox'
import FormError from '../../Components/FormError/FormError'
import Input from '../../Components/Input/Input'

import AppContext from "../../AppContext"
import { ThemeContext } from "../../Themes"

// css
import "./Activate.css"

//icons
import Link from "remixicon-react/LinkIcon"
import TeamLine from "remixicon-react/TeamLineIcon"

import DarkLogo from "../../Logo/UPilot logo - dark vertical.svg"
import LightLogo from "../../Logo/UPilot logo - white vertical.svg"

const Activate = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const themeTone = useContext(AppContext);

    const [account, setAccount] = useState({password: '',
                                            confirmPassword: ''});
    const [errorMessage, setErrorMessage] = useState("");
    const [isInvalid, setIsInvalid] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [popupState, setPopupState] = useState(false)

    
    const handleChange= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAccount({...account, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const errors = {};
        const inValid = {};
        if (account.password === '' ){
            errors['password'] = 'Info missing'
            inValid['password'] = true
        }
        if (account.confirmPassword === ''){
            errors['confirmPassword'] = 'Info missing'
            inValid['confirmPassword'] = true
        }
        if (account.password !== account.confirmPassword && 
            (account.confirmPassword !== '' && account.password !=='')){
            errors['confirmPassword'] = 'Your passwords do not match'
            inValid['confirmPassword'] = true
        } 
        setErrorMessage(errors)
        setIsInvalid(inValid)
        console.log(errors)
    }

    const handleCheckBox = () => {
        setIsChecked(!isChecked)
    }

    const handlePopup = () => {
        setPopupState(false)
    }

    const logoHandle = () => {
    if (theme == 'dark-theme'){
      return LightLogo
    } else{
      return DarkLogo
    }
    }

    return (
    <div className = {`activate-screen ${theme} ${themeTone}`}>
        <div className = 'wrapper'>
            <div className = 'activate-form'>
                <div className = 'logo-wrapper'>
                    <img src = {logoHandle()} style = {{width: '109px', height: '120px'}}></img>
                </div>
                <p className = 'form-title'> Activate Your Account </p>
                <p className = 'invite-msg'> You have received an invitation to join 
                    <span className = 'bolded'> SPJain. </span>
                </p>
                <div className = 'line-break'></div>
                <div className = 'info'>
                    <div className = 'info-control'>
                        <i><TeamLine size= {24}/></i>
                        <p> Your team: 
                            <span className= 'bolded'> SPJain Sales</span>
                        </p>
                    </div>
                    <div className = 'info-control'>
                        <i><Link size= {24}/></i>
                        <p> Your login url:
                            <span className = 'bolded'> spjain.upilot.com </span>
                        </p>
                    </div>
                </div>

                <div className = 'form-control'>
                <Input    
                    type = 'password'
                    value= {account.password}
                    placeholder = "Set your password"
                    name = "password"
                    onChange= {handleChange}
                    size = "large"
                    icon_left = 'yes'
                    icon = 'password'
                    isInvalid = {isInvalid.password}
                />
                <FormError errormessage = {errorMessage.password}/>
                </div>

                <div className = 'form-control'>
                <Input    
                    type = 'password'
                    value= {account.confirmPassword}
                    placeholder = "Confirm your password"
                    name = "confirmPassword"
                    onChange= {handleChange}
                    size = "large"
                    icon_left = 'yes'
                    icon  = 'password'
                    isInvalid = {isInvalid.confirmPassword}
                />
                <FormError errormessage = {errorMessage.confirmPassword}/>
                </div>

                <Checkbox 
                    className = 'checkbox'
                    id = "checkbox"
                    label = "I agree to the privacy policy & terms and conditions."
                    value = {isChecked}
                    onChange = {handleCheckBox}
                />

                <Button 
                    type = "submit" 
                    text = "Activate your account" 
                    shape = "square" 
                    color = "primary" 
                    size = "large" 
                    onClick = {handleSubmit}
                    futureStyle = {{width: '100%'}}
                />

            </div>
            {/* <Popup trigger = {popupState} setTrigger = {handlePopup}
            type = 'danger' /> */}
        </div>
    </div>
  )
}

export default Activate