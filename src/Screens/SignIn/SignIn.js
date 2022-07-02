import React, {useState} from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Button/Input/Input";


//Go to Components/Buttons/Buttons.js to see how to use the Button component

// test comment to demo git pull and conflict management
export default function SignIn() {
  const [inputValue, setInputValue] = useState('');

  const test_function = () => {
    console.log("You clicked this!");
  };


  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  };

  

  return (
    <div>
      {/* <div>
        <Button
          text="Sign In"
          size="xlarge"
          shape="round"
          color="primary"
          onClick={test_function}
        />
      </div> */}
      <div>
        <Input 
        size = "large"
        type = "text"
        value= {inputValue}
        placeholder = "Name"
        onChange= {handleChange}
        icon_right = 'yes'/>
      </div>
    </div>
  );
}
