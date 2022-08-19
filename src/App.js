import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Colorpicker from "./Components/Colorpicker/Colorpicker";

//css
import "./Global.css";

// screens
import SignIn from "./Screens/SignIn/SignIn";
import Activate from "./Screens/ActivateAccount/Activate";
import ForgotPassword from "./Screens/ForgotPassword/ForgotPassword";
import ResetPswd from "./Screens/ResetPswd/ResetPswd"
import MultipleAccounts from "./Screens/MultipleAccounts/MultipleAccounts";
import CreateContact from "./Screens/CreateContact/CreateContact";
import { ThemeContext } from "./Themes";
import ResetPswd from "./Screens/ResetPswd/ResetPswd"
import CreateDeal from "./Screens/CreateDeal/Deal"
import Navbar from "./Components/Navbar/Navbar";

//functions
export default function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Router>
        { <Navbar/> }
        <Routes>
          { 
          <><Route path='/' caseSensitive={false} element={<SignIn />} />
          <Route path='/activate' caseSensitive={false} element={<Activate />} />
          <Route path='/forgotpassword' caseSensitive={false} element={<ForgotPassword />} />
          <Route path='/resetpassword' caseSensitive={false} element={<ResetPswd />} />
          <Route path='/multipleaccounts' caseSensitive={false} element={<MultipleAccounts />} />
          <Route path='/createcontact' caseSensitive={false} element={<CreateContact />} />
          <Route path = '/createdeal' caseSensitive = {false} element = {<CreateDeal/>} />
          </>
  }
        </Routes>
      </Router>
    </div>
  )
}
