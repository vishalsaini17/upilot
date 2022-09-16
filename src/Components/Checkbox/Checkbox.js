import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import { cyan } from '@mui/material/colors';
import "./Checkbox.css";



export default function ColorCheckboxes(props){
    const {id, value, onChange} = props;
    let label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const square_xsmall = () =>{
        return (
            <div>
            
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: cyan[800],
                  '&.Mui-checked': {
                    color: cyan[600],
                  },
                }}
              />
                 <span>Remember Me </span>
            </div>
           
          );
    }
  

    const oval_xsmall = () => {}

    const switch_xsmall = () => {}


    const square_small = () => {}

    const oval_small = () => {}

    const switch_small = () => {}


    const square_medium = () => {}

    const oval_medium = () => {}

    const switch_medium = () => {}


    const square_large = () => {}

    const oval_large = () => {}

    const switch_large = () => {}


    const square_xlarge = () => {}

    const oval_xlarge = () => {}

    const switch_xlarge = () => {}

    if (
        props.size === "xsmall" &&
        props.shape === "square" &&
        props.value === "checked"
      ) {
        return <div>{square_xsmall()}</div>;
      }

    if (
        props.size === "small" &&
        props.shape === "square" &&
        props.value === "checked"
      ) {
        return <div>{square_small()}</div>;
      }

    if (
        props.size === "medium" &&
        props.shape === "square" &&
        props.value === "checked"
      ) {
        return <div>{square_medium()}</div>;
      }

    if (
        props.size === "large" &&
        props.shape === "square" &&
        props.value === "checked"
      ) {
        return <div>{square_large()}</div>;
      }

    if (
        props.size === "xlarge" &&
        props.shape === "square" &&
        props.value === "checked"
      ) {
        return <div>{square_xlarge()}</div>;
      }

    if (
        props.size === "xsmall" &&
        props.shape === "oval" &&
        props.value === "checked"
    ) {
        return <div>{oval_xsmall()}</div>;
    }

    if (
        props.size === "small" &&
        props.shape === "oval" &&
        props.value === "checked"
    ) {
        return <div>{oval_small()}</div>;
    }

    if (
        props.size === "medium" &&
        props.shape === "oval" &&
        props.value === "checked"
    ) {
        return <div>{oval_medium()}</div>;
    }

    if (
        props.size === "large" &&
        props.shape === "oval" &&
        props.value === "checked"
    ) {
        return <div>{oval_large()}</div>;
    }

    if (
        props.size === "xlarge" &&
        props.shape === "oval" &&
        props.value === "checked"
    ) {
        return <div>{oval_xlarge()}</div>;
    }

    if (
        props.size === "xsmall" &&
        props.shape === "switch" &&
        props.value === "checked"
    ) {
        return <div>{switch_xsmall()}</div>;
    }

    if (
        props.size === "small" &&
        props.shape === "switch" &&
        props.value === "checked"
    ) {
        return <div>{switch_small()}</div>;
    }

    if (
        props.size === "medium" &&
        props.shape === "switch" &&
        props.value === "checked"
    ) {
        return <div>{switch_medium()}</div>;
    }

    if (
        props.size === "large" &&
        props.shape === "switch" &&
        props.value === "checked"
    ) {
        return <div>{switch_large()}</div>;
    }

    if (
        props.size === "xlarge" &&
        props.shape === "switch" &&
        props.value === "checked"
    ) {
        return <div>{switch_xlarge()}</div>;
    }

    else {
        return <div>{square_xsmall()}</div>;
    }
}