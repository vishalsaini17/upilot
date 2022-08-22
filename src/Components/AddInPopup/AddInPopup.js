import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
 

import ContactsBookFillIcon from  "remixicon-react/ContactsBookFillIcon";
import BriefcaseFillIcon from 'remixicon-react/BriefcaseFillIcon';
import TaskFill from "remixicon-react/TaskFillIcon";
import FileDownloadFill from "remixicon-react/FileDownloadFillIcon";
import CloseLine from "remixicon-react/CloseLineIcon"

import "./AddInPopup.css"


export default function AddInPopup(props){

    const navigate = useNavigate();

    const [isHovering, setIsHovering] = useState(false);
    const {trigger, setTrigger} = props;

    const popupItems = [
        {
            id: 1,
            url: '/createcontact',
            title: 'Add new contact',
            icon: <ContactsBookFillIcon size= {18}/>
        },
        {
            id: 2,
            url: '/createdeal',
            title: 'Add new deal',
            icon: <BriefcaseFillIcon size= {18}/>
        },
        {
            id: 3,
            url: '/',
            title: 'Add new task',
            icon: <TaskFill size= {18}/>
        },
        {
            id: 4,
            url: '/',
            title: 'Import data',
            icon: <FileDownloadFill size= {18}/>
        },

    ]

    const handleMouseOver =() => {
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }
    
  return (props.trigger) ? (
    <div className = 'addin-wrapper'>
        <table className = 'table-popup'>
            <th> 
                Add in Upilot:
                <i className = 'close-icon'> <CloseLine size = {18} 
                onClick = {() => props.setTrigger(false)}/></i>
            </th>
            {popupItems.map((item => {
                return(
                    <tr key = {item.id} className = 'addin-row'>
                        <td className = 'addin-row-icon'>
                                {item.icon}
                        </td>
                        <td className = 'addin-row-text'
                            onClick = {() => navigate(item.url)}>
                            {item.title}
                        </td>
                    </tr>
                )
            }))}
    
            <tr className = 'addin-row'>
                <td className = 'addin-row-icon'> <BriefcaseFillIcon size = {18}/></td>
                <td className = 'addin-row-text'
                    onMouseOver={handleMouseOver}
                    onMouseOut ={handleMouseOut}> 
                    Add new deal 
                </td>
                {isHovering && <td className = 'shortcut'> (Shift + D)</td>}
            </tr>
           
        </table>
    </div>
  ) : '';
}

