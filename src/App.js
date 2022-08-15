import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//css
import "./Global.css";

// screens
import SignIn from "./Screens/SignIn/SignIn";
import Activate from "./Screens/ActivateAccount/Activate";
import ForgotPassword from "./Screens/ForgotPassword/ForgotPassword";
import MultipleAccounts from "./Screens/MultipleAccounts/MultipleAccounts";
import CreateContact from "./Screens/CreateContact/CreateContact";
import { ThemeContext } from "./Themes";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path = '/' caseSensitive = {false} element = {<SignIn/>} />
          <Route path = '/activate' caseSensitive = {false} element = {<Activate/>} />
          <Route path = '/forgotpassword' caseSensitive = {false} element = {<ForgotPassword/>} />
          <Route path = '/multipleaccounts' caseSensitive = {false} element = {<MultipleAccounts/>} />
          <Route path = '/createcontact' caseSensitive = {false} element = {<CreateContact/>} />
        </Routes>
      </Router>
    </div>
  )
}
