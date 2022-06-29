import React from "react";
import Button from "../../Components/Button/Button";


//Go to Components/Buttons/Buttons.js to see how to use the Button component

export default function SignIn() {
  const test_function = () => {
    console.log("You clicked this!");
  };

  return (
    <div>
      <div>
        <Button
          text="Sign In"
          size="xlarge"
          shape="round"
          color="primary"
          onClick={test_function}
        />
      </div>
    </div>
  );
}
