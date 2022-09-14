import React, {useState} from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Addtag from '../../Components/Addtags/Addtag';
import "./AddPerson.css"

export default function AddPerson({showDetails}){
  const [person, setPerson] = useState({email: '',
                                        firstname: '',
                                        lastname: '',
                                        title:'',
                                      website:"",
                                    company:'',
                                  title:'',
                                status:'',
                              phone:'',
                            address:'',
                          time:'',
                        background:'',
                      source:'',
                    reference:''})
    
  const [show, setShow] = useState(showDetails);

  const [addTagPopup, setAddTagPopup] = useState(false);
  const showAddTag = () => {
    setAddTagPopup(true)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value})
  };

  const showAll = (e) => {
    setShow(!show)
  }

  return (
    <div className = 'contact-form-container'>
      {show ? 
        <div>
          <fieldset className = 'summary-field'>
            <legend align = 'left'> Summary </legend>
            <table>
              <tr>
                <td>
                <div className="contact-form-textbox"> 
                <Input 
                      type = "text"
                      placeholder = 'Add First name here'
                      name = 'firstname'
                      size = "normal"
                      futureStyle = {{width: '350px', font: 'Poppins'}}/>
                      </div></td>
            
                <td> 
                <div className = 'contact-form-field' >
                 First name
                  </div></td>

              </tr>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = 'Add Last name here'
                      name = 'lastname'
                      size = "normal"
                      futureStyle = {{width: '350px', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> 
                <div className = 'contact-form-field' >
                  Last name </div></td>
              </tr>
              <tr>
                <td>
                <div className="contact-form-textbox">
                   <Input 
                      type = "text"
                      placeholder = 'Add a company here'
                      name = 'company'
                      size = "normal"
                      futureStyle = {{width: '350px', font: 'Poppins'}}/>
                      </div></td>
                <td>
                <div className = 'contact-form-field' >
                   Company</div> </td>
              </tr>
              <tr>
                <td>
                <div className="contact-form-textbox">
                   <Input 
                      type = "text"
                      placeholder = 'Choose title in the company (ex: CEO, seller...)'
                      name = 'title'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td>
                <div className = 'contact-form-field' >
                   Title </div></td>
              </tr>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = 'Open'
                      name = 'status'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> 
                <div className = 'contact-form-field' >
                   Status </div></td>
              </tr>
            </table>
          </fieldset>

          <fieldset className = 'contact-field'>
            <legend align = 'left'> Contact info </legend>
            <table>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = 'Add Phone number(s)'
                      name = 'phone'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> <div className = 'contact-form-field' > Phone </div></td>
              </tr>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = 'Add email address(es)here'
                      name = 'email'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> <div className = 'contact-form-field' >Email</div> </td>
              </tr>
              <tr>
                <td>
                <div className="contact-form-textbox">
                   <Input 
                      type = "text"
                      placeholder = 'Add URL here'
                      name = 'website'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> <div className = 'contact-form-field' >Website</div> </td>
              </tr>
              <tr>
                <td>
                <div className="contact-form-textbox">
                   <Input 
                      type = "text"
                      placeholder = 'Add an address here'
                      name = 'address'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> <div className = 'contact-form-field' >
                  Address</div> </td>
              </tr>
              <tr>
                <td>
                <div className="contact-form-textbox">
                   <Input 
                      type = "text"
                      placeholder = 'Add custom timezone here'
                      name = 'time'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td><div className = 'contact-form-field' > Local time
                </div></td>
              </tr>
            </table>
          </fieldset>  

          <fieldset className = 'description-field'>
            <legend align = 'left'> Description </legend>
            <table>
              <tr>
              <td>
                      <Button 
                          size = 'small'
                          shape = 'square_plus'
                          color = 'secondary'
                          onClick = {showAddTag}
                      />
                      <Addtag 
                        trigger = {addTagPopup}
                        setTrigger = {setAddTagPopup}
                      />
                    </td>
                <td> <div className = 'contact-form-field' > Assign tag(s)
                </div> </td>
              </tr>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = 'Add some details that will act as a memory key about this contact and some vital info'
                      name = 'background'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td><div className = 'contact-form-field' > Background 
                </div></td>
              </tr>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = 'Select source'
                      name = 'source'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> <div className = 'contact-form-field' >Contact source 
                </div></td>
              </tr>
              
            </table>
          </fieldset> 

          <fieldset className = 'additional-field'>
            <legend align = 'left'> Additional info </legend>
            <table>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = ''
                      name = 'firstname'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td><div className = 'contact-form-field' > Responsible
                </div> </td>
              </tr>
              <tr>
                <td> 
                <div className="contact-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = 'Add reference'
                      name = 'reference'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                      </td>
                <td> <div className = 'contact-form-field' >Reffered by 
                </div></td>
              </tr>
            </table>
          </fieldset>   
          <div className = 'form-footer'>

          <div className = 'footer-left'>
            <Button text = 'Back to quick create'
                    shape = 'square'
                    size = 'medium'
                    color = 'secondary'
                    onClick = {() => showAll()}
                    icon_right = 'yes'/>
          </div>

          <div className="footer-right">
            <button className= 'cancel-button'> Cancel </button>
            <Button
              type = "submit"
              text = "Create Contact"
              shape = "square"
              size = "medium"
              color = "primary"/>
          </div>

        </div>
        </div>
      : 
      <form className = 'addperson-form'>
          <fieldset className = 'summary-field'>
        <table>
          <tr >
            <td > 
            <div className="contact-form-textbox">
              <Input
                  type = "text"
                  value = {person.email} 
                  placeholder = 'Add email address(es) here'
                  name = 'email'
                  onChange = {handleChange}
                  size = "normal" 
                  futureStyle = {{width: '350px', font: 'Poppins'}}/>
           </div>
            </td>
            <td> <div className = 'contact-form-field' >Email </div></td>
          </tr>
          <tr>
            
            <td> 
            <div className="contact-form-textbox">
              <Input
                  type = "text"
                  value = {person.firstname} 
                  placeholder = 'Add First name here'
                  name = 'firstname'
                  onChange = {handleChange}
                  size = "normal"
                  futureStyle = {{width: '350px', font: 'Poppins'}} />
            
            </div>
            </td>
            <td> <div className = 'contact-form-field' > First name</div> </td>
          </tr>
          <tr>
            <td> 
            <div className="contact-form-textbox">
              <Input
                  type = "text"
                  value = {person.lastname} 
                  placeholder = 'Add Last name here'
                  name = 'lastname'
                  onChange = {handleChange}
                  size = "normal" 
                  futureStyle = {{width: '350px', font: 'Poppins'}}/>
                  </div>
            </td>
            <td> <div className = 'contact-form-field' >Last name </div> </td>
          </tr>
        </table>
        </fieldset>
        <div className = 'form-footer'>

          <div className = 'footer-left'>
            <Button text = 'Show all fields'
                    shape = 'square'
                    size = 'medium'
                    color = 'secondary'
                    onClick = {() => showAll()}
                    icon_right = 'yes'/>
          </div>

          <div className="footer-right">
            {/* <button className= 'cancel-button'> Cancel </button> */}
            <Button
              size = 'medium'
              shape = 'no_border'
              text = 'Cancel'  
            />
            <Button
              type = "submit"
              text = "Create Contact"
              shape = "square"
              size = "medium"
              color = "primary"/>
          </div>

        </div>
      </form>
      
      }
    </div>
  )
}

