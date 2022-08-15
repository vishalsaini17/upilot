import React, {useState} from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import "./AddPerson.css"

export default function AddCompany(){
  const [company, setCompany] = useState({website: '',
                                        company: ''})
    
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCompany({...company, [name]: value})
  };

  const showAll = (e) => {
    setShow(!show)
  }

  return (
    <div className = 'form-container'>
      {show ? 
        <div>
          <fieldset className = 'summary-field'>
            <legend align = 'left'> Summary </legend>
            <table>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add a company'
                      name = 'firstname'
                      size = "normal"/></td>
                <td> Company </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Open'
                      name = 'lastname'
                      size = "normal"/></td>
                <td> Status </td>
              </tr>
            </table>
          </fieldset>

          <fieldset className = 'contact-field'>
            <legend align = 'left'> Contact info </legend>
            <table>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add First name here'
                      name = 'firstname'
                      size = "normal"/></td>
                <td> Phone </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add Last name here'
                      name = 'lastname'
                      size = "normal"/></td>
                <td> Email </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add a company here'
                      name = 'company'
                      size = "normal"/></td>
                <td> Website </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add a company here'
                      name = 'company'
                      size = "normal"/></td>
                <td> Address </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add a company here'
                      name = 'company'
                      size = "normal"/></td>
                <td> Local time</td>
              </tr>
            </table>
          </fieldset>  

          <fieldset className = 'description-field'>
            <legend align = 'left'> Description </legend>
            <table>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add First name here'
                      name = 'firstname'
                      size = "normal"/></td>
                <td> Assign tag(s) </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add Last name here'
                      name = 'lastname'
                      size = "normal"/></td>
                <td> Background </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add a company here'
                      name = 'company'
                      size = "normal"/></td>
                <td> Contact source </td>
              </tr>
              
            </table>
          </fieldset> 

          <fieldset className = 'additional-field'>
            <legend align = 'left'> Additional info </legend>
            <table>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add First name here'
                      name = 'firstname'
                      size = "normal"/></td>
                <td> Responsible </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add Last name here'
                      name = 'lastname'
                      size = "normal"/></td>
                <td> Reffered by </td>
              </tr>
            </table>
          </fieldset>   
          <div className = 'form-footer'>

          <div className = 'footer-left'>
            <button className = 'show-btn'
                  onClick = {() => showAll()}> Back to quick create </button>
          </div>

          <div className="footer-right">
            <button className= 'cancel-button'> Cancel </button>
            <Button
              type = "submit"
              text = "> Create Contact"
              shape = "square"
              size = "xsmall"
              color = "primary"/>
          </div>

        </div>
        </div>
      : 
      <form className = 'addperson-form'>
        <table>
          <tr >
            <td > <Input
                  type = "text"
                  value = {company.website} 
                  placeholder = 'Add url(s) here'
                  name = 'website'
                  onChange = {handleChange}
                  size = "normal" />
            </td>
            <td className='table-label'> Website </td>
          </tr>
          <tr>
            
            <td> <Input
                  type = "text"
                  value = {company.company} 
                  placeholder = 'Add a company here'
                  name = 'company'
                  onChange = {handleChange}
                  size = "normal" />
            </td>
            <td className='table-label'> Company</td>
          </tr>
        </table>

        <div className = 'form-footer'>

          <div className = 'footer-left'>
            <button className = 'show-btn'
                  onClick = {() => showAll()}> Show all fields </button>
          </div>

          <div className="footer-right">
            <button className= 'cancel-button'> Cancel </button>
            <Button
              type = "submit"
              text = "> Create Contact"
              shape = "square"
              size = "xsmall"
              color = "primary"/>
          </div>

        </div>
      </form>
      }
    </div>
  )
}

