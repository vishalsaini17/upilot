//export this to main create deal screen

import React, {useState} from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Colorpicker from '../../Components/Colorpicker/Colorpicker';
import DatePicker from 'react-datepicker';
import Addtags from '../../Components/Addtags/Addtags';
import Sliderr from '../../Components/Sliderr/slider';
import Stage from '../../Components/Stage/Stage';
import "./Deal.css";

export default function Deal() {
    const [deal, setDeal] = useState({name:'',
                                          contact: '',
                                      close_date:'',
                                  deal_value:'',
                              category:'',})

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
     
return (
        <div className = 'form-container'>
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
                    <td> <div className = 'form-field' >
        
        <label >Deal name</label></div>
</td>
                  </tr>
                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = "What is the name of the contact linked to this deal?"
                          name = 'contact'
                          size = "normal"/></td>
                    <td> <div className = 'form-field'>
           <label>Contact</label></div>
 </td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "date"
                          placeholder = 'What is the expected closing date for this deal?'
                          name = 'closedate'
                          size = "normal"/></td>
                    <td> <div className = 'form-field' >
        
        <label >Close Date</label></div>
</td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'What is the value if this deal?'
                          name = 'dealvalue'
                          size = "normal"/></td>
                    <td> <div className = 'form-field' >
        
        <label >Deal value</label></div>
</td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'category'
                          size = "normal"/></td>
                          <Stage></Stage>
                          <Sliderr></Sliderr>
                    <td> <div className = 'form-field' >
        
        <label >Category / Product(s)</label></div>
</td>
                  </tr>
                </table>
              </fieldset>
    
              <fieldset className = 'contact-field'>
                <legend align = 'left'> Description</legend>
                <table>
                  <tr>
                    <td>
                       
                      
                      
                      <Addtags></Addtags> </td>
                      
                    <td> <div className = 'form-field'><label>Assign tag(s)</label></div> </td>
                  </tr>
                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'How you met, preferred meeting location, good time to call, etc.'
                          name = 'background'
                          size = "normal"/></td>
                          <td> <div className = 'form-field'><label>Background Info</label></div> </td>
                  </tr>
                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'Add a competitor info'
                          name = 'comprtitor'
                          size = "normal"/></td>
                    <td> <div className = 'form-field'><label>Competitor Info</label></div> </td>
                    
                  </tr>
                  <tr>

                  <td> 
                  <td> 
                     <Colorpicker> </Colorpicker> </td>
                    <div className = 'form-field'><label>Color code</label></div> </td>
          
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
                      <td> <div className = 'form-field'><label>Responsible</label></div> </td>
              </tr>
              <tr>
                <td> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></td>
                      <td> <div className = 'form-field'><label>Creation date</label></div> </td>
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
                    <div className="form-textbox"><Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'name'
                          size = "normal"/>
                          </div>
                          </td>
                    <td> <div className = 'form-field' >
        
        <label >Deal name</label></div>
</td>
                  </tr>
                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = "What is the name of the contact linked to this deal?"
                          name = 'contact'
                          size = "normal"/></td>
                    <td> <div className = 'form-field'>
           <label>Contact</label></div>
 </td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "date"
                          placeholder = 'What is the expected closing date for this deal?'
                          name = 'date'
                          size = "normal"/></td>
                    <td> <div className = 'form-field' >
        
        <label >Close Date</label></div>
</td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "currency"
                          placeholder = 'What is the value if this deal?'
                          name = 'value'
                          size = "normal"/></td>
                    <td> <div className = 'form-field' >
        
        <label >Deal value</label></div>
</td>
                  </tr>

                  <tr>
                    <td> <Input 
                          type = "text"
                          placeholder = 'How would you like to call this deal?'
                          name = 'category'
                          size = "normal"/></td>
                    <td> <div className = 'form-field' >
        
        <label >Category / Product(s)</label></div>
</td>
                  </tr>
                </table>
              </fieldset>

        <div className = 'form-footer'>

          <div className = 'footer-left'>
            <button className = 'show-btn'
                  onClick = {() => showAll()}> Show all fields </button>
          </div>

          <div className="footer-right">
            <button className= 'cancel-button'> Cancel </button>
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
    

