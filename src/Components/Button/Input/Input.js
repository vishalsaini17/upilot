/*
The input field component can be rendered based on props.

The 1 mandatory props is:
1. size: the size of the input, accepted value: (xlarge, large, small)
2. placeholder: the placeholder name for each field
3. Type: normal text/ email/ hidden password
4. Value: value that the input is taking in
5. onChange: the function to take in the input value from users

The optional props are:
1. Icons: 
    - the icon that is displayed at the beginning of the input
    - the 'reveal' icon on the right hand-side
2. Error message: at the bottom right of the input 
*/


import React, {useState} from 'react';
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineEye} from "react-icons/ai"
import "./Input.css"


export default function Input(props){
    

    const normal_input = () =>{
        return(
            <div className = 'input-control'>
                {/* {props.label && <label htmlFor="input-field">{props.label}</label>} */}
                <input className="input-field"
                type = {props.type}
                placeholder={props.placeholder}
                value= {props.value}
                style={{
                    height: "40px",
                    width: "300px",
                    fontSize: "13px",
                    padding: "15px"
                }}
                onChange = {props.onChange}> 
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
                    type = {props.type}
                    placeholder={props.placeholder}
                    value= {props.value}
                    style={{
                        height: "40px",
                        width: "300px",
                        fontSize: "13px",
                        padding: "12px 32px"
                        }}
                    onChange = {props.onChange}> 
                </input>
            </div>
        )
    }

    const normal_input_icon_right = () =>{
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {props.type}
                    placeholder={props.placeholder}
                    style={{
                        height: "40px",
                        width: "300px",
                        fontSize: "13px",
                        padding: "15px"
                        }}
                    onChange = {props.onChange}
                    value= {props.value}> 
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
            style = {{
                height: "50px",
                width: "350px", 
                fontSize: "15px",
                padding: "20px"
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
                    type = {props.type}
                    placeholder={props.placeholder}
                    style={{
                        height: "50px",
                        width: "350px",
                        fontSize: "16px",
                        padding: "15px 35px"
                        }}
                    onChange = {props.onChange}
                    value= {props.value}> 
                </input>
            </div>
        )
    }

    const large_input_icon_right = () =>{
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {props.type}
                    placeholder={props.placeholder}
                    style={{
                        height: "50px",
                        width: "350px",
                        fontSize: "16px",
                        padding: "15px"
                        }}
                    onChange = {props.onChange}
                    value= {props.value}> 
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
            type = {props.type}
            placeholder={props.placeholder}
            style= {{
                height: '60px',
                width: '350px',
                fontSize: '18px',
                padding: '25px'
            }}
            onChange = {props.onChange}
            value= {props.value}>
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
                    type = {props.type}
                    placeholder={props.placeholder}
                    style={{
                        height: "60px",
                        width: "350px",
                        fontSize: "18px",
                        padding: "20px 40px"
                        }}
                    onChange = {props.onChange}
                    value= {props.value}> 
                </input>
            </div>
        )
    }
    

    const xlarge_input_icon_right = () =>{
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {props.type}
                    placeholder={props.placeholder}
                    style={{
                        height: "60px",
                        width: "350px",
                        fontSize: "18px",
                        padding: "25px"
                        }}
                    onChange = {props.onChange}
                    value= {props.value}> 
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
        return (<div>{normal_input_icon_right()}</div>)
    };

    if (
        props.size === 'normal'
    ){
        return (<div>{normal_input()}</div>)
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
    

