import React, {useState} from 'react';
import "./ImportWindow.css"

export default function CrmWindow(){
  const [crm, setCrm] = useState()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCrm({...crm, [name]: value})
  };

  return (
    <div className = 'import-form-container'>
      <div className='import-window-wrapper'>
      

        <table>
          <tr >
            <td > 
            </td>
            <td >
            </td>
          </tr>

        </table>

          </div>
    </div>
  )
}

