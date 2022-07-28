import React, {useState} from "react";
import Input from "../../../Components/Input/Input"
import Button from "../../../Components/Button/Button";
import FormError from "../../../Components/FormError/FormError";
import DropDown from "../../../Components/Dropdown/DropDown";
import "./ResetPswd.css"


export default function ResetPswd() {
    const [Pswd, setPswd] = useState({NewPassword:'',
                                          ConfirmPswd: ''});
    const [errorMessage, setErrorMessage] = useState({})
    const [isInvalid, setIsInvalid] = useState({})
  
  
    const handleChange = (e) => {
      const name = e.target.name; //geting name of variable you change
      const value = e.target.value;
      setPswd({...Pswd, [name]:value})
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors ={};
      const inValid = {};
      if (Pswd.NewPassword === ''){
        errors['NewPassword'] = "Info missing"
        inValid['NewPassword'] = true
      }
      if (Pswd.ConfirmPswd === ''){
        errors['ConfirmPswd'] = 'Info missing'
        inValid['ConfirmPswd'] = true
      }
      setErrorMessage(errors)
      setIsInvalid(inValid)
    } 
  
    return (
        <form className = 'form' style ={{margin: '0 auto',
                                          marginBottom: '4rem',
                                          padding: '1rem 2rem',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          textAlign: 'center',
                                          maxWidth: 'fit-content'}}>


<div>
<p float="centre">
  <img src="./boxdonuts.jpg" width="550" height="400" alt="" />
<h classname= 'header'> Reset Your Password </h>
</p>
        </div>
        

          <div 
                    style={{maxWidth: 'fit-content'}}>
            <Input 
            type = "text"
            value= {Pswd.NewPassword}
            placeholder = "Set your Password"
            name = "Newpassword"
            onChange= {handleChange}
            size = "large"
            isInvalid = {isInvalid.NewPassword}
           />
           <FormError errormessage = {errorMessage.NewPassword}/>
          </div>
      
          <div style={{maxWidth: 'fit-content'}}>
            <Input 
            type = "ConfirmPswd"
            value= {Pswd.ConfirmPswd}
            placeholder = "Confirm your Password"
            name = "ConfirmPswd"
            onChange= {handleChange}
            size = "large"
            icon_right = 'yes'
            isInvalid  = {isInvalid.ConfirmPswd}
           />
           <FormError errormessage = {errorMessage.ConfirmPswd}/>
          </div>
          <Button type = "submit" text = "Rest your Password" shape = "square" style={{ height: "60px",
  width: "400px",
  borderRadius: "12px",
  textAlign: 'center',
  BackgroundColor: "linear-gradient(90deg, #00CBED 0%, #009CD7 100%)",
  BoxShadow:"0 1px 4px 0 rgba(0,0,0,0.15)",
}} color = "primary" size = "large" onClick = {handleSubmit}/>
        
        </form>
    
      );
}