//export this to main create deal screen

import React, {useState} from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Colorpicker from '../../Components/Colorpicker/Colorpicker';
import DatePicker from 'react-datepicker';
import Addtags from '../../Components/Addtags/Addtags';
import Addtag from '../../Components/Addtags/Addtag';
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
              <fieldset className = 'summary-field'>
                <legend align = 'left'> Deal Info </legend>
                <table>
                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'name'
                          size = "normal"/></td>
                    <td> 
                      <div className = 'deal-form-field' >
                        <label >Deal name</label>
                      </div>
                    </td>
                  </tr><tr>
                    <td> 
                      <Input 
                          type = "text"
                          placeholder = "What is the name of the contact linked to this deal?"
                          name = 'contact'
                          size = "normal"/>
                    </td>
                    <td> 
                      <div className = 'deal-form-field'>
                        <label>Contact</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "date"
                          placeholder = 'What is the expected closing date for this deal?'
                          name = 'closedate'
                          size = "normal"/>
                    </td>
                    <td>
                      <div className = 'deal-form-field' >
                        <label >Close Date</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'What is the value if this deal?'
                          name = 'dealvalue'
                          size = "normal"/></td>
                    <td>
                      <div className = 'deal-form-field' >
                        <label >Deal value</label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> 
                      <div className = 'deal-form-field' >
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
                    <div className = 'deal-form-field' >
                        <label> Probability (%) </label>
                    </div>
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
                    <td> <Input 
                          type = "text"
                          placeholder = 'How you met, preferred meeting location, good time to call, etc.'
                          name = 'background'
                          size = "normal"/></td>
                          <td> <div className = 'deal-form-field'><label>Background Info</label></div> </td>
                  </tr>
                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'Add a competitor info'
                          name = 'comprtitor'
                          size = "normal"/></td>
                    <td> <div className = 'deal-form-field'><label>Competitor Info</label></div> </td>
                    
                  </tr>
                  <tr>

                  <td> 
                  <td> 
                     <Colorpicker> </Colorpicker> </td>
                    <div className = 'deal-form-field'><label>Color code</label></div> </td>
          
                  </tr>
                </table>
              </fieldset>  
              <fieldset className = 'description-field'>
            <legend align = 'left'> Additional Info </legend>
            <table>
              <tr>
                <td> <Input 
                      type = "text"
                      placeholder = ''
                      name = 'info'
                      size = "normal"/></td>
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
              color = "primary"/>
          </div>

        </div>
        </div>
      : 
      <form className = 'adddeal-form'>
        <fieldset className = 'summary-field'>
                <legend align = 'left'> Deal Info </legend>
                <table>
                  <tr>
                    <td> 
                    <div className="deal-form-textbox"><Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'name'
                          size = "normal"/>
                          </div>
                          </td>
                    <td> <div className = 'deal-form-field' >
        
        <label >Deal name</label></div>
</td>
                  </tr>
                  <tr>
                    <td> 
                    <div className="deal-form-textbox"><Input 
                          type = "text"
                          placeholder = "What is the name of the contact linked to this deal?"
                          name = 'contact'
                          size = "normal"/>
                          </div></td>
                    <td> <div className = 'deal-form-field'>
           <label>Contact</label></div>
 </td>
                  </tr>

                  <tr>
                    <td> 
                    <div className="deal-form-textbox"><Input 
                          type = "date"
                          placeholder = 'What is the expected closing date for this deal?'
                          name = 'date'
                          size = "normal"/>
                          </div></td>
                    <td> <div className = 'deal-form-field' >
        
        <label >Close Date</label></div>
</td>
                  </tr>

                  <tr>
                    <td>
                    <div className="deal-form-textbox"> <Input 
                          type = "currency"
                          placeholder = 'What is the value if this deal?'
                          name = 'value'
                          size = "normal"/>
                          </div></td>
                    <td> <div className = 'deal-form-field' >
        
        <label >Deal value</label></div>
</td>
                  </tr>

                  <tr>
                    <td> 
                    <div className="deal-form-textbox"><Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'category'
                          size = "normal"/>
                          </div></td>
          
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
              color = "primary"/>
          </div>

        </div>
      </form>
      }
    </div>
  )
    }
    

