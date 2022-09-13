import React, { useState } from 'react';
import Alert from '../../Components/Alert/Alert';

import BuildingLine from "remixicon-react/BuildingLineIcon";
import UserLine from "remixicon-react/UserLineIcon";

import AddCompany from '../../Components/CreateContactWindow/AddCompany';
import AddPerson from '../../Components/CreateContactWindow/AddPerson';
import Tabs from '../../Components/Tabss/Tabs';
import "./CreateContact.css";

export default function CreateContact(){

  const [showDetails, setShowDetails] = useState(false)

  const tabList = [
        {
            id: 'tab1',
            name: <>
                    <i className = 'icon-title'>
                    {<UserLine size = {22}/>}</i> Add a person
                  </>,
            content: <AddPerson />

        },
        {
            id: 'tab2',
            name: <>
                    <i className = 'icon-title'>
                      {<BuildingLine size = {22} />}
                    </i> Add a company
                  </>,
            content: <AddCompany />
        },

    ]
  const iconTypes = ['<UserLine/>', '<BuildingLine/>']



  return (
    <div className='createcontact-screen'>
    <div className = 'create-contact-wrapper'>
        {showDetails ? 
          <p> Create a new contact</p>
          :<p className='contact-headerr'> Create a new contact - Quick add </p>}
       

        <Tabs tabList = {tabList} 
            size = 'large'
            shape = 'square'/>

        <Alert className = 'multiple-contact' 
          type = 'neutral' 
          message = {<> Want to add multiple contacts? 
                        <span className = 'message-bold'> Import contacts </span></>} 
          futureStyle = {{width: '750px'}}
        />
    </div>
    </div>
  )
}

