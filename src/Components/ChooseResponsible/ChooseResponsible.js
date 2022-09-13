import React, {useState} from 'react';
import Button from '../Button/Button';

import {createImageFromInitials } from '../ProfileImage/ProfileImage';
import CloseLine from 'remixicon-react/CloseLineIcon';
import "./ChooseResponsible.css"    

export default function ChooseResponsible(props){
    const tagList = [
        {   
            name: 'Abhijit Dasgupta'
        },
        {
            name: 'Abhishek'
        },
        {
            name: 'Debashis Guha'
        },
        {
            name: 'Judi Upilot'
        },
        {
            name: 'Shibu Prabhakaran'
        }
    ]

    const [tagState, setTagState] = useState(
        new Array(tagList.length).fill(false));

    const returnClassname = (pos) => {
        if (tagState[pos]){
            return "resp-tag active"
        } else {
            return "resp-tag"
        }
    }

    const handleOnClick = (pos) => {
        const updatedTagState = tagState.map((item, index) => 
            index === pos ? !item: item);

        setTagState(updatedTagState)
        // console.log(updatedTagState)
    }

  return (
   <div className="responsible-wrapper">
    <h2 className="responsible-heading">
        Choose Responsible (s)
        <i className = 'close-ic'
            onClick = ''>
                <CloseLine />
        </i>
    </h2>
    <div className="responsible-object">
        <div className="responsible-tag-list">
            <ul className= 'resp-taglist'>
                {tagList.map((tag, index) => {
                    return(
                        <li key = {index}>
                            <div id = {`resp-tag-${index}`}
                                className = {returnClassname(index)}
                                onClick = {() => handleOnClick(index)}>

                                <div id = 'profileImage' 
                                    style ={{background: `${createImageFromInitials(tag.name)[1]}`}}>
                                    <span id='fullName'> {createImageFromInitials(tag.name)[0]} </span>
                                </div>
                                {tag.name}
                            </div>
                        </li>
                    )   
                })}
                
            </ul>
        </div>
        <div className="resp-tag-footer" >
                <Button text = 'Cancel'
                        shape = 'no_border'
                        size = 'small'
                />
                <Button type = 'submit'
                        text= 'Apply'
                        shape = 'square'
                        size = 'xsmall'
                        color = 'primary' 
                        futureStyle = {{height: '40px', width: '100px'}}/>
            </div>
    </div>
   </div>
  )
}
