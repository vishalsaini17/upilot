import React, {useState} from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import "./AddPerson.css"

export default function AddPerson({showDetails}){
  const [person, setPerson] = useState({email: '',
                                        firstname: '',
                                        lastname: ''})
    
  const [show, setShow] = useState(showDetails);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value})
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
                      placeholder = 'Add First name here'
                      name = 'firstname'
                      size = "normal"/></td>
                <td> Firstname </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add Last name here'
                      name = 'lastname'
                      size = "normal"/></td>
                <td> Lastname </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Add a company here'
                      name = 'company'
                      size = "normal"/></td>
                <td> Company </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Choose title in the company'
                      name = 'title'
                      size = "normal"/></td>
                <td> Title </td>
              </tr>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = 'Open'
                      name = 'open'
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
                  value = {person.email} 
                  placeholder = 'Add email address(es) here'
                  name = 'email'
                  onChange = {handleChange}
                  size = "normal" />
            </td>
            <td className='table-label'> Email </td>
          </tr>
          <tr>
            
            <td> <Input
                  type = "text"
                  value = {person.firstname} 
                  placeholder = 'Add First name here'
                  name = 'firstname'
                  onChange = {handleChange}
                  size = "normal" />
            </td>
            <td className='table-label'> First name </td>
          </tr>
          <tr>
            <td> <Input
                  type = "text"
                  value = {person.lastname} 
                  placeholder = 'Add Last name here'
                  name = 'lastname'
                  onChange = {handleChange}
                  size = "normal" />
            </td>
            <td className='table-label'> Last name </td>
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

