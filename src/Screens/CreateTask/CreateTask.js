import React from 'react';
import "./CreateTask.css";
import {Link} from 'react-router-dom';

import AddPerson from '../../Components/CreateContactWindow/AddPerson';
import AddCompany from '../../Components/CreateContactWindow/AddCompany';
import DropDown from '../../Components/DropDown/Dropdown';


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
