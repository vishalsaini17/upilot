//export this to main create deal screen

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Addtag from '../../Components/Addtags/Addtag';
import Button from '../../Components/Button/Button';
import Colorpicker from '../../Components/Colorpicker/Colorpicker';
import Input from '../../Components/Input/Input';
import Sliderr from '../../Components/Sliderr/slider';
import Stage from '../../Components/Stage/Stage';
import "./Deal.css";

export default function Deal() {
    const [deal, setDeal] = useState({name:'',
                                      contact: '',
                                      close_date:'',
                                      deal_value:'',
                                      category:'',})
    const [addTagPopup, setAddTagPopup] = useState(false);

    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setDeal({...deal, [name]: value})
    };

    const showAll = (e) => {
        setShow(!show)
        }
    
    const showAddTag = () => {
      setAddTagPopup(true)
    }
     
  return (
        <div className = 'deal-form-container'>
        
          {show ? 
            <div>
              <h1 className='headerr'> Add new deal</h1>
              
              <fieldset>
                <legend align = 'left'> Deal Info </legend>
                <table>
                  <tr>
                    <td> 
                    <div className="deal-form-textbox">
                      <Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'name'
                          size = "normal"
                          futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                           </div></td>
                          
                    <td> 
                      <div className = 'deal-form-field' >
                        <label >Deal name</label>
                      </div>
                    </td>
                  </tr><tr>
                    <td> 
                    <div className="deal-form-textbox">
                      <Input 
                          type = "text"
                          placeholder = "What is the name of the contact linked to this deal?"
                          name = 'contact'
                          size = "normal"
                          futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                          </div>
                    </td>

                    <td> 
                      <div className = 'deal-form-field'>
                        <label>Contact</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> 
                    <div className="deal-form-textbox"><Input 
                          type = "date"
                          placeholder = 'What is the expected closing date for this deal?'
                          name = 'closedate'
                          size = "normal"
                          futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                          </div>
                    </td>
                    <td>
                      <div className = 'deal-form-field' >
                        <label >Close Date</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                    <div className="deal-form-textbox"> <Input 
                          type = "text"
                          placeholder = 'What is the value of this deal?'
                          name = 'dealvalue'
                          size = "normal"
                          futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                          </div>
                          </td>
                    <td>
                      <div className = 'deal-form-field' >
                        <label >Deal value</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> 
                      <div className="deal-form-textbox">
                        <Input 
                        
                            placeholder = '(optional)'
                            name = 'category'
                            size = "normal"
                            futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                    </td>
          
                    <td> <div className = 'deal-form-field' >
        
        <label >Category / Product(s)</label></div>
</td>
                  </tr>

                  <tr>     
                    <td> 
                      <Stage></Stage>
                    </td>
                    <td>
                      <div className = 'deal-form-field' >
                        <label> Stage </label>
                      </div>
                    </td>
                  </tr>

                  <tr>  
                    <td>
                      
                      <Sliderr/>
                    </td>
                    <td> <div className = 'deal-form-field' >
                        <label> Probability (%) </label>
                    </div></td>
                   
                  </tr>   
    
                </table>
              </fieldset>
    
              <fieldset className = 'deal-contact-field'>
                <legend align = 'left'> Description</legend>
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
                    <td> <div className = 'deal-form-field'><label>Assign tag(s)</label></div> </td>
                  </tr>
                  <tr>
                    <td> 
                    <div className="deal-form-textbox">
                      <Input 
                          type = "text"
                          placeholder = 'How you met, preferred meeting location, good time to call, etc.'
                          name = 'background'
                          size = "normal"
                          futureStyle = {{width: '400px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                          </div>
                          </td>
                          <td> <div className = 'deal-form-field'><label>Background Info</label></div> </td>
                  </tr>
                  <tr>
                    <td>
                    <div className="deal-form-textbox">
                       <Input 
          
                          type = "text"
                          placeholder = 'Add competitor info'
                          name = 'competitor'
                          size = "normal"
                          futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                          </div></td>
                    <td> <div className = 'deal-form-field'><label>Competitor Info</label></div> </td>
                    
                  </tr>
                  <tr>

                  <td> 
                  
                     <Colorpicker> </Colorpicker> </td>
                   <td> <div className = 'deal-form-field'><label>Color code</label></div> </td>
          
                  </tr>
                </table>
              </fieldset>  
              <fieldset className = 'description-field'>
            <legend align = 'left'> Additional Info </legend>
            <table>
              <tr>
                <td> 
                <div className="deal-form-textbox">
                  <Input 
                      type = "text"
                      placeholder = ''
                      name = 'info'
                      size = "normal"
                      futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div></td>
                      <td> <div className = 'deal-form-field'><label>Responsible</label></div> </td>
              </tr>
              <tr>
                <td> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></td>
                      <td> <div className = 'deal-form-field'><label>Creation date</label></div> </td>
              </tr>
              
            </table>
          </fieldset> 

 
          <div className = 'deal-form-footer'>

          <div className = 'deal-footer-left'>
            <button className = 'deal-show-btn'
                  onClick = {() => showAll()}> Back to quick create </button>
          </div>

          <div className="deal-footer-right">
            <button className= 'deal-cancel-button'> Cancel </button>
            <Button
              type = "submit"
              text = "> Create Deal"
              shape = "square"
              size = "xsmall"
              color = "primary"
              futureStyle={{fontSize: '13px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
          </div>

        </div>
        </div>
      : 
      <form className = 'adddeal-form'>
         <h1 className='headerr'> Add new deal</h1>
        <fieldset className = 'summary-field'>
                <legend align = 'left'> Deal Info </legend>
                <table>
                  <tr>
                    <td> 
                    <div className="deal-form-textbox">
                      <Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'name'
                          size = "normal"
                          futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                    </div>
                          </td>
                    <td> <div className = 'deal-form-field' >
        
        <label >Deal name</label></div>
</td>
                  </tr>
                  <tr>
                    <td> 
                      <div className="deal-form-textbox">
                        <Input 
                            type = "text"
                            placeholder = "What is the name of the contact linked to this deal?"
                            name = 'contact'
                            size = "normal"
                            futureStyle = {{width: '400px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                    </td>
                    <td> <div className = 'deal-form-field'>
           <label>Contact</label></div>
 </td>
                  </tr>

                  <tr>
                    <td> 
                      <div className="deal-form-textbox">
                        <Input 
                            type = "date"
                            placeholder = 'What is the expected closing date for this deal?'
                            name = 'date'
                            size = "normal"
                            futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                            </div>
                    </td>
                    <td> <div className = 'deal-form-field' >
        
        <label >Close Date</label></div>
</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="deal-form-textbox"> 
                          <Input 
                            type = "currency"
                            placeholder = 'What is the value if this deal?'
                            name = 'value'
                            size = "normal"
                            futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                    </td>
                    <td> <div className = 'deal-form-field' >
        
        <label >Deal value</label></div>
</td>
                  </tr>

                  <tr>
                    <td> 
                      <div className="deal-form-textbox">
                        <Input 
                        
                            placeholder = '(optional)'
                            name = 'category'
                            size = "normal"
                            futureStyle = {{width: '350px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
                      </div>
                    </td>
          
                    <td> <div className = 'deal-form-field' >
        
        <label >Category / Product(s)</label></div>
</td>
                  </tr>
                </table>
              </fieldset>

        <div className = 'deal-form-footer'>

          <div className = 'deal-footer-left'>
            <button className = 'show-btn'
                  onClick = {() => showAll()}> Show all fields </button>
          </div>

          <div className="deal-footer-right">
            <button className= 'deal-cancel-button'> Cancel </button>
            <Button
              type = "submit"
              text = "> Create Deal"
              shape = "square"
              size = "xsmall"
              color = "primary"
              futureStyle={{fontSize: '13px', borderColor: 'transparent', fontStyle: 'italic', font: 'Poppins'}}/>
          </div>

        </div>
      </form>
      }
    </div>
  )
    }
    

