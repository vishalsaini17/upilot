//Import data screen 3

import React, {useState} from 'react';
import "./ImportData.css"
import CsvWindow from '../../Components/ImportDataWindow/CsvWindow'
import CrmWindow from '../../Components/ImportDataWindow/CrmWindow'


export default function ImportData3(){

  const [selectedAddType, setSelectedAddType] = useState("Import from CRM")

  const [showDetails, setShowDetails] = useState(false)
  const addTypes = ["Import from CRM", "Import from CSV file"]
  const iconTypes = ['<ContactsBookLine/>', '<FaBriefcase/>']

  const changeAddType = (type) => {
    setSelectedAddType(type);
  };

  const returnClassname = (addType) => {
    if (addType === selectedAddType){
      return "data-tabs data-active"
    } else {
      return "data-tabs data"
    }
  }


  return (
    <div className='import-data-wrapper'>
        {showDetails ? 
          <p> </p>
          :
          <p className='data-title'> Import Data </p>}
        <nav className = "data-tabs">
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
       
        <div>
          <p></p>
          {selectedAddType === 'Import from CRM' ? <CrmWindow showDetails = {showDetails}/> : <CsvWindow/>}
        </div>
        

    </div>
  )
}

