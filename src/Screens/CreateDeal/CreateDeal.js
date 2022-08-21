//Main create deal screen

import React, {useState} from 'react'
import Deal from './Deal'
import "./Deal.css";
export default function CreateDeal(){

    const [selectedAddType, setSelectedAddType] = useState("Add a deal")
  
    const [showDetails, setShowDetails] = useState(false)
  
    const changeAddType = (type) => {
      setSelectedAddType(type);
    };

  
  
    return (
        <div className = 'deal-screen'>
      <div className = 'deal-wrapper'>
      <p fontSize="30px"> Import Data  </p>
      <form className = 'deal-form' style ={{margin: '8 auto',
                                          padding: '1rem 2rem',
                                         display: 'flex',
                                         flexDirection: 'column',
                                         textAlign: 'center',
                                          maxWidth: 'fit-content'}}>

      <p className = 'deal-form-title'> Add new deal </p>
</form>
</div>

        
      <div className = 'create-deal-wrapper'>
          {showDetails ? 
            <p> Create a deal</p>
            :
            <p> Create a new deal - Quick add </p>}
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
         
          <div className = 'deal-contact-form'>
            {selectedAddType === 'Add deal' ? <Deal showDetails = {showDetails}/> : <Deal/>}
          </div>
          
      </div>
      </div>
    )
  }
   