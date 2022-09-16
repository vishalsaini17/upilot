import React, {useState, useCallback} from 'react';
import {useNavigate} from "react-router-dom";

import * as Mousetrap from 'mousetrap';
import { shortcutKeys } from "../shortcutKeys/shortcutKeysConfig"

import ContactsBookFillIcon from  "remixicon-react/ContactsBookFillIcon";
import BriefcaseFillIcon from 'remixicon-react/BriefcaseFillIcon';
import TaskFill from "remixicon-react/TaskFillIcon";
import FileDownloadFill from "remixicon-react/FileDownloadFillIcon";
import CloseLine from "remixicon-react/CloseLineIcon"

import "./AddInPopup.css"
import { useEffect } from 'react';


export default function AddInPopup(props){

    const navigate = useNavigate();

    const [isHovering, setIsHovering] = useState(false);
    const {trigger, setTrigger} = props;

    useMouseTrap("shift+d", () => navigate('/createdeal'));
    useMouseTrap('shift+c', () => navigate('/createcontact'));
    useMouseTrap("shift+t", () => navigate('/createtask'));
    useMouseTrap('shift+i', () => navigate('/createcontact'));

    const popupItems = [
        {
            id: 1,
            url: '/createcontact',
            title: 'Add new contact',
            shortcut: '(Shift + C)',
            icon: <ContactsBookFillIcon size= {18}/>
        },
        {
            id: 2,
            url: '/createdeal',
            title: 'Add new deal',
            shortcut: '(Shift + D)',
            icon: <BriefcaseFillIcon size= {18}/>,
        },
        {
            id: 3,
            url: '/createtask',
            title: 'Add new task',
            shortcut: '(Shift + T)',
            icon: <TaskFill size= {18}/>
        },
        {
            id: 4,
            url: '/importdata',
            title: 'Import data',
            shortcut: '(Shift + I)',
            icon: <FileDownloadFill size= {18}/>
        },

    ]

    const handleMouseOver =(selected) => {
        console.log(selected)
        setIsHovering(selected)
    }
    // const handleMouseOut = () => {
    //     setIsHovering();
    // }
    
  return (props.trigger) ? (
    <div className = 'addin-wrapper'>
        <table className = 'table-popup'>
            <thead className = 'table-heading'>
                <tr>
                    <th> Add in Upilot: </th>
                    <th> 
                        <i className = 'close-icon'> 
                        <CloseLine size = {18} 
                        onClick = {() => props.setTrigger(false)}/></i>
                    </th>
                </tr>
            </thead>
                
            {/* <tbody> */}
            {popupItems.map((item => {
                return(
                    <tr key = {item.id} className = 'addin-row'>
                        <td className = 'addin-row-icon'>
                                {item.icon}
                        </td>
                        <td className = 'addin-row-text'
                            onClick = {() => navigate(item.url)}
                            onMouseOver = {() => handleMouseOver(item)}>
                            {/* // onMouseOut = {handleMouseOut}> */}
                            {item.title}
                        </td>
                        {(isHovering.id === item.id) && <td className = 'shortcut'> {item.shortcut}</td>}
                        {/* {(isHovering && item.title === 'Add new deal' ) && <td className = 'shortcut'> (Shift + D)</td>} */}
                    </tr>
                )
            }))}
           
        </table>
    </div>
  ) : '';
}

export function useMouseTrap(shortcut, handler, deps) {
    const memoFn = useCallback(handler, deps);

    useEffect(() => {
        Mousetrap.bind(shortcut, memoFn);
        return () => Mousetrap.unbind(shortcut);
    }, [shortcut, memoFn])
}
