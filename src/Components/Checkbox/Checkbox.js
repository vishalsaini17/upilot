import React, {useState} from 'react';
import "./Checkbox.css"

export default function Checkbox(props){
    const {id, label, value, onChange} = props;

    const square_checked = () =>{
        return(
            <div className = 'checkbox-wrapper'
                style= {{
                    height: '50px',
                    width: '350px'
                }}>
                <input className = 'checkbox'
                    id = {id}
                    type = "checkbox"
                    checked = {value}
                    onChange = {onChange}>
                </input>
                <label className = 'checkbox-label' htmlFor = {id}>{label}</label>
                 
            </div>
        )
    }
    
    return(
        <> {square_checked()}
        </>
    )
}

