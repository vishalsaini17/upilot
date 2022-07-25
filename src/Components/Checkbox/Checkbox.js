import React, {useState} from 'react';
import "./Checkbox.css"

export default function Checkbox(props){
    const {id, label, value, onChange} = props;

    const square_checked = () =>{
        return(
            <div className = 'checkbox-wrapper'
                style= {{
                    height: '50px',
                    width: '350px',
                }}>


                <input className = 'checkbox'
                    id = {id}
                    type = "checkbox"
                    checked = {value}
                    onChange = {onChange}
                    style ={{
                        accentColor: 'rgba(42,41,55,0.1)',
                        boxShadow: 'inset 0 1px 3px 0 rgba(0,0,0,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '2px',
                        }}
                        >
                </input>

                <label className = 'checkbox-label' htmlFor = {id}
                style = {{color: '#C9C8CE'}}>{label}</label>
                 
            </div>
        )
    }
    
    return(
        <> {square_checked()}
        </>
    )
}

