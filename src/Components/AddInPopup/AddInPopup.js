import React, {useState} from 'react'


import ContactsBookFillIcon from  "remixicon-react/ContactsBookFillIcon";
import BriefcaseFillIcon from 'remixicon-react/BriefcaseFillIcon';
import TaskFill from "remixicon-react/TaskFillIcon";
import FileDownloadFill from "remixicon-react/FileDownloadFillIcon";
import CloseLine from "remixicon-react/CloseLineIcon"

import "./AddInPopup.css"


export default function AddInPopup(){

    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver =() => {
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }
    
  return (
    <div className = 'addin-wrapper'>
        <table className = 'table-popup'>
            <th> 
                Add in Upilot:
                <i className = 'close-icon'> <CloseLine size = {18} /></i>
            </th>
            <tr className = 'addin-row'>
                <td className = 'addin-row-icon'><ContactsBookFillIcon size = {18}/></td>
                <td className = 'addin-row-text'> Add new contact </td>
            </tr>
            <tr className = 'addin-row'>
                <td className = 'addin-row-icon'> <BriefcaseFillIcon size = {18}/></td>
                <td className = 'addin-row-text'
                    onMouseOver={handleMouseOver}
                    onMouseOut ={ handleMouseOut}> 
                    Add new deal 
                </td>
                {isHovering && <td className = 'shortcut'> (Shift + D)</td>}
            </tr>
            <tr className = 'addin-row'>
                <td className = 'addin-row-icon'> <TaskFill size = {18}/></td>
                <td className = 'addin-row-text'> Add new task </td>
            </tr>
            <tr className = 'addin-row'>
                <td className = 'addin-row-icon'> <FileDownloadFill size = {18}/></td>
                <td className = 'addin-row-text'> Import data </td>
            </tr>
        </table>
    </div>
  )
}

