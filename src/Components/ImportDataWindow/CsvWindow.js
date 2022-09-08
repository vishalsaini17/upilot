import React, {useState} from 'react';
import ContactsBookLine from  "remixicon-react/ContactsBookLineIcon";
import {FaBriefcase} from "react-icons/fa"
import "./ImportWindow.css"

export default function CsvWindow({showDetails}){
  const [csv, setCsv] = useState()
    
  const [value, setValue] = React.useState(0);
;


  return (
    <div className = 'import-form-container'>
      <p></p>
      <div className='import-window-wrapper'>
    
      <div>
    <p></p>
              <tr>
             
              <p></p>

              <h2  style={{ color: 'black', textAlign: 'left',fontSize:15  }} > <b >What are you importing? </b></h2>

              <td> 
                <ContactsBookLine  color= "grey" size= "60px" ></ContactsBookLine>
                   <p> Contacts
                    </p>

                    <p style={{fontSize:"13px", color:"grey"}}> (Companies and People)
                    </p>

                 </td>
          
<td>
                <FaBriefcase  color= "grey" size= "60px" ></FaBriefcase>
                <p>
                Deals
                    </p>
                </td>
               
                      </tr>
                      </div>
                      </div>
                  
      
          
    </div>
  )
}

