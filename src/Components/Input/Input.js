/*
The input field component can be rendered based on props.

The mandatory props are:
1. type: type of text, possible value: text, email, password etc
2. value: value of that input field
3. placeholder: the placeholder for the input field
4. name: unique name of that input field
5. onChange: onChange function to type in the input
6. size: choose the size for the input field. Possible values: normal, large, xlarge
7. inValid: to indicate if submit an empty field or fail the info validation step

The optional props are:
1. Icons: 
    - icon_left: the icon that is displayed at the beginning of the input
    - icon_right: the 'reveal' icon on the right hand-side
*/


import React, {useState} from 'react';
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineEye} from "react-icons/ai"
import "./Input.css"


export default function Input(props){
    const {size, type, value, placeholder, name, onChange,
            isEmpty, isInvalid} = props

    const themes ={
        dark_neutral: {
            backgroundColor: 'rgba(225,223,246,0.22)',
            boxShadow: '0 1px 4px 0 rgba(42,41,55,0.3)'
        }
    }

    const themeContext = React.createContext(themes.dark_neutral)

    const normal_input = () =>{
        return(
            <div className = 'input-control'>
                {/* {props.label && <label htmlFor="input-field">{props.label}</label>} */}
                <input className="input-field"
                type = {type}
                placeholder={placeholder}
                value= {value}
                name= {name}
                style={{
                    height: "40px",
                    width: "300px",
                    fontSize: "13px",
                    padding: "15px",
                    border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
                }}
                onChange = {onChange}> 
                </input>
            </div>
        )
    }

    const normal_input_icon_left = () =>{
        return(
            <div className = 'input-control'>
                <i className='icon'
                    style= {{
                        padding: '11px',
                    }}> 
                    <BsFillPersonFill/> 
                </i>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name= {name}
                    style={{
                        height: "40px",
                        width: "300px",
                        fontSize: "13px",
                        padding: "12px 32px",
                        border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
                        }}
                    onChange = {onChange}> 
                </input>
            </div>
        )
    }

    const normal_input_icon_right = () =>{
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    style={{
                        height: "40px",
                        width: "300px",
                        fontSize: "13px",
                        padding: "15px",
                        border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
                        }}
                    onChange = {onChange}
                    value= {value}
                    name= {name}> 
                </input>
                <i className='icon' 
                    style ={{
                        padding: '12px',
                        marginLeft: '-40px'
                    }}> 
                    <AiOutlineEye/> 
                </i>
            </div>
        )
    }

    const large_input = () => {
        return(
            <input className = 'input-field'
            type = {props.type}
            placeholder={props.placeholder}
            name= {name}
            style = {{
                height: "50px",
                width: "350px", 
                fontSize: "15px",
                padding: "20px",
                color: '#C9C8CE',
                border: (isInvalid ? '1px solid #E7B8B8' : 'none'),
                backgroundColor: themes.dark_neutral.backgroundColor,
                boxShadow: themes.dark_neutral.boxShadow
            }}
            onChange = {props.onChange}
            value= {props.value}>
            </input>
        )
    }

    const large_input_icon_left = () =>{
        return(
            <div className = 'input-control'>
                <i className='icon' 
                    style={{
                        padding: '16px 12px'
                    }}> 
                    <BsFillPersonFill size = {16}/> 
                </i>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name= {name}
                    style={{
                        height: "50px",
                        width: "350px",
                        fontSize: "16px",
                        padding: "15px 35px",
                        border: isInvalid ? '1px solid #E7B8B8' : 'none',
                        backgroundColor: themes.dark_neutral.backgroundColor,
                        boxShadow: themes.dark_neutral.boxShadow    
                    }}
                    onChange = {onChange}
                    > 
                </input>
            </div>
        )
    }

    const large_input_icon_right = () =>{
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{
                        height: "50px",
                        width: "350px",
                        fontSize: "16px",
                        padding: "15px",
                        border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
                        }}
                    onChange = {onChange}
                    > 
                </input>
                <i className='icon' 
                    style ={{
                        padding: '16px',
                        marginLeft: '-50px'
                    }}> 
                    <AiOutlineEye size = {18}/> 
                </i>
            </div>
        )
    }

    const xlarge_input = () => {
        return(
            <input className='input-field'
            type = {type}
            placeholder={placeholder}
            value= {value}
            name = {name}
            style= {{
                height: '50px',
                width: '400px',
                fontSize: '18px',
                padding: '25px',
                border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
            }}
            onChange = {onChange}>
            </input>

        )
    }

    const xlarge_input_icon_left = () =>{
        return(
            <div className = 'input-control'>
                <i className='icon' 
                    style={{
                        padding: '20px 12px'
                    }}> 
                    <BsFillPersonFill size = {20}/> 
                </i>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{
                        height: "60px",
                        width: "350px",
                        fontSize: "18px",
                        padding: "20px 40px",
                        border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
                        }}
                    onChange = {onChange}
                    > 
                </input>
            </div>
        )
    }
    

    const xlarge_input_icon_right = () =>{
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{
                        height: "60px",
                        width: "350px",
                        fontSize: "18px",
                        padding: "25px",
                        border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
                        }}
                    onChange = {onChange}
                    > 
                </input>
                <i className='icon' 
                    style ={{
                        padding: '20px',
                        marginLeft: '-60px'
                    }}> 
                    <AiOutlineEye size ={20}/> 
                </i>
            </div>
        )
    }

    //normal
    if (
        props.size === 'normal' && 
        props.icon_left === 'yes'
    ){
        return  (<div>{normal_input_icon_left()}</div>)
    };

    if (
        props.size === 'normal' &&
        props.icon_right === 'yes'
    ){
        return (
        <div>
            {normal_input_icon_right()}
        </div>)
    };

    if (
        props.size === 'normal'
    ){
        return (
        <div>
            {normal_input()}
        </div>)
    };



    if (
        props.size === 'large' &&
        props.icon_left === 'yes'
    ){
        return <div>{large_input_icon_left()}</div>
    }

    //large

    if (
        props.size === 'large' &&
        props.icon_right === 'yes'
    ){
        return <div>{large_input_icon_right()}</div>
    }

    if (
        props.size === 'large'
    ){
        return (<div>{large_input()}</div>)
    };

    //xlarge
    if(
        props.size === 'xlarge' &&
        props.icon_left === "yes"
    ){
        return <div className='form-control'>{xlarge_input_icon_left()}</div>
    }

    if(
        props.size === 'xlarge' &&
        props.icon_right === 'yes'
    ){
        return <div className='form-control'>{xlarge_input_icon_right()}</div>
    }

    if(
        props.size === 'xlarge'
    ){
        return <div className='form-control'>{xlarge_input()}</div>
    }

}
    

