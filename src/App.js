import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//css
import "./Global.css";

// screens
import Activate from "./Screens/ActivateAccount/Activate";
import CreateContact from "./Screens/CreateContact/CreateContact";
import CreateTask from "./Screens/CreateTask/CreateTask";
import ForgotPassword from "./Screens/ForgotPassword/ForgotPassword";
import MultipleAccounts from "./Screens/MultipleAccounts/MultipleAccounts";
import ResetPswd from "./Screens/ResetPswd/ResetPswd";
import SignIn from "./Screens/SignIn/SignIn";
import { ThemeContext } from "./Themes";
// import resetpassword from "./Screens/ResetPswd/ResetPswd"
import CreateDeal from "./Screens/CreateDeal/Deal";
import ImportData from "./Screens/ImportData/ImportData";
import ImportData3 from "./Screens/ImportData/ImportData3";
import WithNav from "./WithNav";
import WithoutNav from "./WithoutNav";
// import Addtags from "./Components/Addtags/Addtags";

import AppContext from "./AppContext";
import TableView from "./Screens/TableView/TableView.js";
import Test from "./Screens/Test/test";


//functions


export default function App() {
  const { theme } = useContext(ThemeContext);
  const [themeTone, setThemeTone] = useState('neutral');

  const changeThemeTone = (tone) =>{
    if (tone === 'morning'){
      setThemeTone('morning')
    }
    if (tone === 'neutral'){
      setThemeTone('neutral')
    }
    if (tone === 'night'){
      setThemeTone('night')
    }
  }

  return (
    <div className={`App ${theme} ${themeTone}`}>
      <AppContext.Provider value = {themeTone}>
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
              <Route path='/table-view' caseSensitive={false} element={<TableView />} />
            </Route>
            
          </Routes>  
        </Router>
        
        <div id ='right'>
              <ul className = 'theme-actions'>
                <li className = 'theme-action'> 
                  <a onClick = {() => changeThemeTone('morning')}>
                    <svg version="1.1" className="icon-morning" x="0px" y="0px" viewBox="0 0 70 70" >
                      <g>
                        <path d="M35.5,23c0.8,0,1.5-0.7,1.5-1.5V13c0-0.8-0.7-1.5-1.5-1.5S34,12.2,34,13v8.5C34,22.3,34.7,23,35.5,23z"></path>
                        <path d="M67.8,43.8h-8.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h8.5c0.8,0,1.5-0.7,1.5-1.5S68.6,43.8,67.8,43.8z"></path>
                        <path d="M13.2,45.2c0-0.8-0.7-1.5-1.5-1.5H3.2c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h8.5C12.6,46.8,13.2,46.1,13.2,45.2z"></path>
                        <path d="M18.1,29.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-6-6c-0.6-0.6-1.5-0.6-2.1,0s-0.6,1.5,0,2.1
                          L18.1,29.9z"></path>
                        <path d="M51.9,30.4c0.4,0,0.8-0.1,1.1-0.4l6-6c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-6,6c-0.6,0.6-0.6,1.5,0,2.1
                          C51.1,30.2,51.5,30.4,51.9,30.4z"></path>
                        <path d="M62.2,54.8c-2.9-1.6-5.9-2.9-9-4c0.5-1.7,0.8-3.5,0.8-5.4C54,35.3,45.7,27,35.5,27S17,35.3,17,45.5c0,1.8,0.3,3.6,0.8,5.4
                          c-3.1,1-6.2,2.4-9,4c-0.7,0.4-1,1.3-0.6,2c0.4,0.7,1.3,1,2,0.6c3.7-2.1,7.7-3.7,11.9-4.7c0.2-0.1,0.5-0.1,0.7-0.2
                          c0.7-0.2,1.4-0.3,2.1-0.5c0.3-0.1,0.5-0.1,0.8-0.2c0.8-0.1,1.6-0.3,2.4-0.4c0.4-0.1,0.7-0.1,1.1-0.1c0.8-0.1,1.6-0.2,2.4-0.2
                          c0.4,0,0.8,0,1.2-0.1c0.6,0,1.2,0,1.8-0.1c0.5,0,1,0,1.6,0c0.6,0,1.2,0,1.8,0.1c0.4,0,0.8,0,1.2,0.1c0.8,0.1,1.6,0.1,2.4,0.2
                          c0.4,0,0.7,0.1,1.1,0.1c0.8,0.1,1.6,0.2,2.4,0.4c0.3,0,0.5,0.1,0.8,0.2c0.7,0.1,1.4,0.3,2.1,0.5c0.2,0.1,0.5,0.1,0.7,0.2
                          c4.2,1.1,8.2,2.7,11.9,4.7c0.2,0.1,0.5,0.2,0.7,0.2c0.5,0,1-0.3,1.3-0.8C63.2,56.1,63,55.2,62.2,54.8z M20.7,50
                          c-0.4-1.5-0.7-3-0.7-4.5C20,37,27,30,35.5,30S51,37,51,45.5c0,1.5-0.2,3-0.7,4.5c-0.2,0-0.4-0.1-0.5-0.1c-0.2-0.1-0.5-0.1-0.7-0.2
                          c-0.9-0.2-1.8-0.4-2.8-0.6c-0.2,0-0.4-0.1-0.6-0.1c-1-0.2-2-0.3-3-0.5c-0.1,0-0.3,0-0.4-0.1c-1-0.1-2.1-0.2-3.1-0.3
                          c-0.1,0-0.2,0-0.3,0C37.7,48,36.6,48,35.5,48c-1.1,0-2.2,0-3.4,0.1c-0.1,0-0.2,0-0.3,0c-1.1,0.1-2.1,0.2-3.1,0.3
                          c-0.2,0-0.3,0-0.5,0.1c-1,0.1-2,0.3-3,0.5c-0.2,0-0.4,0.1-0.6,0.1c-0.9,0.2-1.9,0.4-2.8,0.6c-0.2,0.1-0.5,0.1-0.7,0.2
                          C21,49.9,20.9,49.9,20.7,50z"></path>
                      </g>
                      </svg>
                    </a>
                  </li>
                <li className = 'theme-action'>
                  <a onClick = {() => changeThemeTone('neutral')}>
                    <svg className="icon-day" version="1.1"  x="0px" y="0px" viewBox="0 0 70 70">
                      <g>
                        <path d="M35,53.8c-10.2,0-18.5-8.3-18.5-18.5S24.8,16.8,35,16.8S53.5,25,53.5,35.2S45.2,53.8,35,53.8z M35,19.8
                          c-8.5,0-15.5,7-15.5,15.5s7,15.5,15.5,15.5s15.5-7,15.5-15.5S43.5,19.8,35,19.8z"></path>
                        <path d="M35,12.8c-0.8,0-1.5-0.7-1.5-1.5V2.8c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v8.5C36.5,12.1,35.8,12.8,35,12.8z"></path>
                        <path d="M35,68.8c-0.8,0-1.5-0.7-1.5-1.5v-8.5c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5v8.5C36.5,68.1,35.8,68.8,35,68.8z"></path>
                        <path d="M67.2,36.5h-8.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h8.5c0.8,0,1.5,0.7,1.5,1.5S68.1,36.5,67.2,36.5z"></path>
                        <path d="M11.2,36.5H2.8c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h8.5c0.8,0,1.5,0.7,1.5,1.5S12.1,36.5,11.2,36.5z"></path>
                        <path d="M57.4,58.9c-0.4,0-0.8-0.1-1.1-0.4l-6-6c-0.6-0.6-0.6-1.5,0-2.1s1.5-0.6,2.1,0l6,6c0.6,0.6,0.6,1.5,0,2.1
                          C58.2,58.7,57.8,58.9,57.4,58.9z"></path>
                        <path d="M18.6,20.1c-0.4,0-0.8-0.1-1.1-0.4l-6-6c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l6,6c0.6,0.6,0.6,1.5,0,2.1
                          C19.4,20,19,20.1,18.6,20.1z"></path>
                        <path d="M12.6,58.9c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l6-6c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1l-6,6
                          C13.4,58.7,13,58.9,12.6,58.9z"></path>
                        <path d="M51.4,20.1c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l6-6c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1l-6,6
                          C52.1,20,51.8,20.1,51.4,20.1z"></path>
                      </g>

                    </svg>
                  </a>
                </li>
                <li className = 'theme-action'> 
                  <a onClick = {() => changeThemeTone('night')}>
                    <svg version="1.1" className="icon-night" x="0px" y="0px" viewBox="0 0 70 70">
                      <path d="M36.4,63C20.7,63,7.9,50.2,7.9,34.5c0-12.6,8.4-23.9,20.5-27.4c0.6-0.2,1.3,0.1,1.7,0.6c0.4,0.6,0.3,1.3-0.1,1.8
                        c-4.1,4.7-6.4,10.7-6.4,16.9C23.5,40.5,35,52,49.1,52c2.4,0,4.9-0.3,7.2-1c0.6-0.2,1.3,0.1,1.7,0.6s0.3,1.3-0.1,1.8
                        C52.4,59.5,44.6,63,36.4,63z M24.5,11.8c-8.2,4.4-13.7,13.1-13.7,22.6C10.9,48.6,22.3,60,36.4,60c5.6,0,11-1.9,15.4-5.2
                        C51,54.9,50,55,49.1,55c-15.8,0-28.6-12.8-28.6-28.6C20.5,21.2,21.9,16.2,24.5,11.8z"></path>
                      <path d="M36.8,17.9c-0.3,0-0.6-0.1-0.9-0.3c-0.5-0.3-0.7-0.9-0.6-1.5l0.3-2l-1.5-1.4c-0.4-0.4-0.6-1-0.4-1.5c0.2-0.5,0.6-0.9,1.2-1
                        l2-0.3L38,8.1c0.3-0.5,0.8-0.8,1.3-0.8s1.1,0.3,1.3,0.8l0.9,1.8l2,0.3c0.6,0.1,1,0.5,1.2,1s0,1.1-0.4,1.5l-1.5,1.4l0.3,2
                        c0.1,0.6-0.1,1.1-0.6,1.5c-0.5,0.3-1.1,0.4-1.6,0.1l-1.8-0.9l-1.8,0.9C37.3,17.9,37.1,17.9,36.8,17.9z M38.5,12.7
                        c0.2,0.3,0.3,0.6,0.3,1c0.3-0.1,0.7-0.1,1,0c0-0.4,0.1-0.7,0.3-1c-0.3-0.1-0.6-0.3-0.8-0.6C39.1,12.4,38.8,12.6,38.5,12.7z"></path>
                      <path d="M40.7,39.8c-0.2,0-0.5-0.1-0.7-0.2l-1.8-0.9l-1.8,0.9c-0.5,0.3-1.1,0.2-1.6-0.1c-0.5-0.3-0.7-0.9-0.6-1.5l0.3-2l-1.5-1.4
                        c-0.4-0.4-0.6-1-0.4-1.5c0.2-0.5,0.6-0.9,1.2-1l2-0.3l0.9-1.8c0.3-0.5,0.8-0.8,1.3-0.8s1.1,0.3,1.3,0.8l0.9,1.8l2,0.3
                        c0.6,0.1,1,0.5,1.2,1c0.2,0.5,0,1.1-0.4,1.5l-1.5,1.4l0.3,2c0.1,0.6-0.1,1.1-0.6,1.5C41.3,39.7,41,39.8,40.7,39.8z M38.2,35.5
                        c0.2,0,0.3,0,0.5,0.1c0-0.4,0.1-0.7,0.3-1c-0.3-0.1-0.6-0.3-0.8-0.6c-0.2,0.3-0.5,0.5-0.8,0.6c0.2,0.3,0.3,0.6,0.3,1
                        C37.8,35.5,38,35.5,38.2,35.5z"></path>
                      <path d="M59.1,45.6c-0.2,0-0.5-0.1-0.7-0.2l-1.8-0.9l-1.8,0.9c-0.5,0.3-1.1,0.2-1.6-0.1c-0.5-0.3-0.7-0.9-0.6-1.5l0.3-2l-1.5-1.4
                        c-0.4-0.4-0.6-1-0.4-1.5s0.6-0.9,1.2-1l2-0.3l0.9-1.8c0.3-0.5,0.8-0.8,1.3-0.8l0,0c0.6,0,1.1,0.3,1.3,0.8l0.9,1.8l2,0.3
                        c0.6,0.1,1,0.5,1.2,1s0,1.1-0.4,1.5l-1.5,1.4l0.3,2c0.1,0.6-0.1,1.1-0.6,1.5C59.7,45.5,59.4,45.6,59.1,45.6z M55.8,40.4
                        c0.2,0.3,0.3,0.6,0.3,1c0.3-0.1,0.7-0.1,1,0c0-0.4,0.1-0.7,0.3-1c-0.3-0.1-0.6-0.3-0.8-0.6C56.4,40.1,56.1,40.3,55.8,40.4z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
        </AppContext.Provider>
    </div>
  )

}
