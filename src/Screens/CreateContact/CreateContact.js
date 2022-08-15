import React, {useState} from 'react'
import Input from '../../Components/Input/Input'

import UserLine from  "remixicon-react/UserLineIcon"
import BuildingLine from  "remixicon-react/BuildingLineIcon"

import "./CreateContact.css"
import AddPerson from '../../Components/CreateContactWindow/AddPerson'
import AddCompany from '../../Components/CreateContactWindow/AddCompany'


export default function CreateContact(){

  const [selectedAddType, setSelectedAddType] = useState("Add a person")

  const [showDetails, setShowDetails] = useState(false)
  const addTypes = ["Add a person", "Add a company"]
  const iconTypes = ['<UserLine/>', '<BuildingLine/>']

  const changeAddType = (type) => {
    setSelectedAddType(type);
  };

  const returnClassname = (addType) => {
    if (addType === selectedAddType){
      return "nav-tabs item-active"
    } else {
      return "nav-tabs item"
    }
  }


  return (
    <div className = 'create-contact-wrapper'>
        {showDetails ? 
          <p> Create a new contact</p>
          :
          <p> Create a new contact - Quick add </p>}
        <nav className = "nav-tabs">
          {addTypes.map((addType) => (
            <a
              onClick={() => changeAddType(addType)}
              className={returnClassname(addType)}
            >
              <i> </i>
              {addType}
            </a>
          ))}
        </nav>
       
        <div className = 'contact-form'>
          {selectedAddType === 'Add a person' ? <AddPerson showDetails = {showDetails}/> : <AddCompany/>}
        </div>
        <div className = 'multiple-contact'>
            <p> Want to add multiple contacts? 
              <span> Import contacts </span>
            </p>
        </div>
        
    </div>
  )
}

