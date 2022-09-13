//Main create deal screen

import React, { useState } from 'react';
import Deal from './Deal';
import "./Deal.css";
export default function CreateDeal(){

    const [selectedAddType, setSelectedAddType] = useState("Add a deal")
  
    const [showDetails, setShowDetails] = useState(false)
  
    const changeAddType = (type) => {
      setSelectedAddType(type);
    };

  
  
    return (
        <div className = 'deal-screen'>
            
      <div className = 'create-deal-wrapper'>
        
          {showDetails ? 
            <p className='headerr'> Add new deal</p>
            :
            <p className='headerr'> Add new Deal </p>}
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
   