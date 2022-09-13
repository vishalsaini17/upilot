import React from 'react';
import DropDown from '../../Components/Dropdown/DropDown.js';
import "./CreateTask.css";


export default function CreateTask() {
  return (
    <div>
      <div className='title-wrapper'>
        <div className='form-title'>
          Add a New Task
        </div>
      </div>

      <div className='dropdown' align='center' margin='10px'>
        <DropDown size='large' shape='icon_dropdown'>
        </DropDown>
      </div>
    </div>

  )
}
