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
import CreateTask from "./Screens/CreateTask/CreateTask";
import { ThemeContext } from "./Themes";
// import resetpassword from "./Screens/ResetPswd/ResetPswd"
import CreateDeal from "./Screens/CreateDeal/Deal"
import Navbar from "./Components/Navbar/Navbar";
import ImportData from "./Screens/ImportData/ImportData";
import WithNav from "./WithNav";
import WithoutNav from "./WithoutNav";
import ImportData3 from "./Screens/ImportData/ImportData3";
// import Addtags from "./Components/Addtags/Addtags";
import Addtag from "./Components/Addtags/Addtag";

import Test from "./Screens/Test/test";

//functions
export default function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Router>
        
        <Routes>  
          <Route element = {<WithNav />}>
            <Route path='/' caseSensitive={false} element={<SignIn />} />
            <Route path='/activate' caseSensitive={false} element={<Activate />} />
            <Route path='/forgotpassword' caseSensitive={false} element={<ForgotPassword />} />
            <Route path='/resetpswd' caseSensitive={false} element={<ResetPswd />} />
            <Route path='/multipleaccounts' caseSensitive={false} element={<MultipleAccounts />} />
          </Route>

          <Route element = {<WithoutNav />}>
            <Route path='/createcontact' caseSensitive={false} element={<CreateContact />} />
            <Route path = '/createdeal' caseSensitive = {false} element = {<CreateDeal/>} />
            <Route path= '/test' caseSensitive = {false} element = {<Test />} />
            <Route path = '/importdata' caseSensitive = {false} element = {<ImportData />} />
            <Route path='/createtask' caseSensitive={false} element={<CreateTask />} />
            <Route path='/importdata3' caseSensitive={false} element={<ImportData3 />} />
          </Route>

        </Routes>  
      </Router>
    </div>
  )
}
