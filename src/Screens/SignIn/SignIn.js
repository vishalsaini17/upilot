import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button";
import FormError from "../../Components/FormError/FormError";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Tooltip from "../../Components/Tooltip/Tooltip";
import DropDown from "../../Components/DropDown/DropDown";

import { ThemeContext } from "../../Themes";

import LightLogo from "../../Logo/UPilot logo - white vertical.svg"
import DarkLogo from "../../Logo/UPilot logo - dark vertical.svg"

import "./SignIn.css"

//Go to Components/Buttons/Buttons.js to see how to use the Button component

// test comment to demo git pull and conflict management
export default function SignIn() {
  const [person, setPerson] = useState({email:'',
                                        password: ''});
  const [errorMessage, setErrorMessage] = useState({});
  const [isInvalid, setIsInvalid] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const {theme, toggleTheme} = useContext(ThemeContext)


  const handleChange = (e) => {
    const name = e.target.name; //geting name of variable you change
    const value = e.target.value;
    setPerson({...person, [name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors ={};
    const inValid = {};
    if (person.email === ''){
      errors['email'] = "Info missing"
      inValid['email'] = true
    }
    if (person.password === ''){
      errors['password'] = 'Info missing'
      inValid['password'] = true
    }
    setErrorMessage(errors)
    setIsInvalid(inValid)
  } 

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const logoHandle = () => {
    if (theme == 'dark-theme'){
      return LightLogo
    } else{
      return DarkLogo
    }
  }

  const handleMouseOver = () => {
        setIsHovering(true);
    }

  const handleMouseOut = () =>{
        setIsHovering(false);
    }

  return (
    
    
    <div className = 'signin-screen'>
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
           <p className = 'form-title'> Sign In </p>
           <div className = 'form-control'>
             <Input 
             type = "text"
             value= {person.email}
             placeholder = "Your email"
             name = "email"
             onChange= {handleChange}
             size = "large"
             isInvalid = {isInvalid.email}
             icon_left = 'yes'
             icon = 'mail'
           />
           <FormError errormessage = {errorMessage.email}/>
           </div>
    
           <div className = 'form-control'>
             <Input 
             type = "password"
             value= {person.password}
             placeholder = "Password"
             name = "password"
             onChange= {handleChange}
             size = "large"
             icon_left = 'yes'
             isInvalid  = {isInvalid.password}
             icon = 'password'
           />
           <FormError errormessage = {errorMessage.password}/>
           </div>
       <Checkbox 
         id = "checkbox"
             label = "Remember me"
             value = {isChecked}
             onChange = {handleCheckBox}
            />

         <Button 
            type = "submit" 
            text = " Sign In" 
            shape = "square" 
            size="large"
            color= "primary"
            onClick = {handleSubmit}
            
            
            />
            
          
          <Link to = '/forgotpassword' 
              onMouseOver = {handleMouseOver}
              onMouseOut = {handleMouseOut}>
            <p className ='forget-pwd'> Forgot your password? </p>
            
          </Link>

          {isHovering && <Tooltip type = "leftarrow"
                          message = 'Bigger tooltip if longe text lorem ipsum dolor sit amet, con sect etur ad'/>}
        </form>
      </div>
    </div>
    // <><Popup type = 'success'/></>
    // <><Alert type = 'neutral'
    //         message = 'this is a test for alert'/></>
    // <div className = 'signin-screen'><Tooltip/></div>
    );
}
