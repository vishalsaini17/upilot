import React, {useState} from "react";
import Input from "../../Components/Input/Input"
import Button from "../../Components/Button/Button";
import FormError from "../../Components/FormError/FormError";


//Go to Components/Buttons/Buttons.js to see how to use the Button component

// test comment to demo git pull and conflict management
export default function SignIn() {
  const [person, setPerson] = useState({email:'',
                                        password: ''});
  const [errorMessage, setErrorMessage] = useState({})
  const [isInvalid, setIsInvalid] = useState({})


  const test_function = () => {
    console.log("You clicked this!");
  };


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

  

  return (
    <form className = 'form' style ={{margin: '0 auto',
                                      marginBottom: '4rem',
                                      padding: '1rem 2rem',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      textAlign: 'center',
                                      maxWidth: 'fit-content'}}>
      <div style={{maxWidth: 'fit-content'}}>
        <Input 
        type = "text"
        value= {person.email}
        placeholder = "Email"
        name = "email"
        onChange= {handleChange}
        size = "large"
        isInvalid = {isInvalid.email}
       />
       <FormError errormessage = {errorMessage.email}/>
      </div>
  
      <div style={{maxWidth: 'fit-content'}}>
        <Input 
        type = "password"
        value= {person.password}
        placeholder = "Password"
        name = "password"
        onChange= {handleChange}
        size = "large"
        icon_right = 'yes'
        isInvalid  = {isInvalid.password}
       />
       <FormError errormessage = {errorMessage.password}/>
      </div>
      <Button type = "submit" text = "Log In" shape = "square" color = "primary" size = "large" onClick = {handleSubmit}
      />
    </form>
  );
}
