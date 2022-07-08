import React, { Component } from 'react';
import "./FormError.css"

export default function FormError(props){
    return(
        <div>
            <span className = 'error-message'>{props.errormessage}</span>
        </div>
    )
}
