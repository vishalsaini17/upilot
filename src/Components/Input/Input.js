/*
The input field component can be rendered based on props.

The mandatory props are:
1. type: type of text, possible value: text, email, password etc
2. value: value of that input field
3. placeholder: the placeholder name for the input field
4. name: unique name of that input field
5. onChange: onChange function to type in the input
6. size: choose the size for the input field. Possible values: normal, large, xlarge
7. isInvalid: boolean value after submiting the form, in order to render the border color of the input field

The optional props are:
1. Icon's position
    - icon_left: the icon that is displayed at the beginning of the input
    - icon_right: the 'reveal' icon on the right hand-side
2. Type of the icon
    - Dynamic icon based on the type that is passed. E.g: password, mail
*/


import React, {useState} from 'react';
import DoorLockBoxLineIcon from "remixicon-react/DoorLockBoxLineIcon"
import MailLine from  "remixicon-react/MailLineIcon"
import "./Input.css"


export default function Input(props){
    const {size, type, value, placeholder, name, onChange,
        icon, isEmpty, isInvalid, futureStyle} = props

    // console.log(props.icon)
    // console.log(typeof(props.icon))
    // console.log(DoorLockBoxLineIcon)
    const iconList = {
        'password' : <DoorLockBoxLineIcon size = {24}/>,
        'mail' : <MailLine size = {24}/> 
    }
    

    const normal_input = () =>{
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            height: "40px",
            width: "100%",
            fontSize: "13px",
            padding: "15px",
            border: isInvalid && '1px solid #D78989'
        }
        return(
            <div className = 'input-control'>
                <input className="input-field"
                type = {type}
                placeholder={placeholder}
                value= {value}
                name= {name}
                style={{...currentInputStyle, ...futureStyle}}
                onChange = {onChange}> 
                </input>
            </div>
        )
    }

    const normal_input_icon_left = () =>{
        const ic = icon;
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            height: "40px",
            width: "300px",
            fontSize: "13px",
            padding: "12px 32px",
            border: isInvalid && '1px solid #D78989'
        }
        return(
            <div className = 'input-control'>
                <i className='icon'
                    style= {{
                        padding: '11px',
                    }}> 
                    {iconList[ic]}
                </i>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name= {name}
                    style={{...currentInputStyle, ...futureStyle}}
                    onChange = {onChange}> 
                </input>
            </div>
        )
    }

    const normal_input_icon_right = () =>{
        const ic = icon;
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            height: "40px",
            width: "300px",
            fontSize: "13px",
            padding: "15px",
            border: isInvalid && '1px solid #D78989'
        }
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    style={{...currentInputStyle, ...futureStyle}}
                    onChange = {onChange}
                    value= {value}
                    name= {name}> 
                </input>
                <i className='icon' 
                    style ={{
                        padding: '12px',
                        marginLeft: '-40px'
                    }}> 
                    {iconList[ic]}
                </i>
            </div>
        )
    }

    const large_input = () => {
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            height: "50px",
            width: "400px", 
            fontSize: "15px",
            padding: "20px",
            color: '#C9C8CE',
            border: isInvalid && '1px solid #D78989',
        }
        return(
            <input className = 'input-field'
            type = {props.type}
            placeholder={props.placeholder}
            name= {name}
            style = {{
                // height: "70px",
                // width: "400px", 
                fontSize: "15px",
                padding: "20px",
                color: '#C9C8CE',
                border: (isInvalid ? '1px solid #E7B8B8' : 'none'),
            }}
            onChange = {props.onChange}
            value= {props.value}>
            </input>
        )
    }

    const large_input_icon_left = () =>{
        const ic = icon;
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            height: "50px",
            width: "400px",
            fontSize: "16px",
            padding: "15px 0px 13px 48px",
            border: isInvalid && '1px solid #D78989'
        }
        return(
            <div className = 'input-control'>
                <i className='icon' 
                    style={{
                        padding: '15px 12px'
                    }}> 
                    {iconList[ic]}
                </i>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name= {name}
                    style={{
                        // height: "50px",
                        // width: "350px",
                        fontSize: "16px",
                        padding: "15px 0px 15px 40px",
                        border: isInvalid ? '1px solid #D78989' : ' 1px solid #D2D2D6',  
                    }}
                    onChange = {onChange}
                    > 
                </input>
            </div>
        )
    }

    const large_input_icon_right = () =>{
        const ic = icon
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{
                        // height: "70px",
                        // width: "400px",
                        fontSize: "16px",
                        padding: "15px",
                        border: isInvalid ? '1px solid #E7B8B8' : 'none', 
                        }}
                    onChange = {onChange}
                    > 
                </input>
                <i className='icon' 
                    style ={{
                        padding: '16px',
                        marginLeft: '-50px'
                    }}> 
                    {iconList[ic]}
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
                // height: '50px',
                // width: '400px',
                fontSize: '18px',
                padding: '25px',
                border: isInvalid ? '1px solid #E7B8B8' : '1px solid #E4E4E7'
            }}
            onChange = {onChange}>
            </input>

        )
    }

    const xlarge_input_icon_left = () =>{
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            height: "60px",
            width: "400px",
            fontSize: "18px",
            padding: "20px 40px",
            border: isInvalid && '1px solid #D78989'
        }
        const ic = icon
        return(
            <div className = 'input-control'>
                <i className='icon' 
                    style={{
                        padding: '20px 12px'
                    }}> 
                    {iconList[ic]}
                </i>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{
                        // height: "60px",
                        // width: "350px",
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
        const ic = icon;
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            height: "60px",
            width: "400px",
            fontSize: "18px",
            padding: "25px",
            border: isInvalid && '1px solid #D78989'
        }
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{
                        // height: "60px",
                        // width: "350px",
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
                    {iconList[ic]}
                </i>
            </div>
        )
    }

    const focus_empty = () =>{
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            boxSizing: "borderBox",
  height: "40px",
  width: "300px",
  border: "1px solid rgba(0,156,215,0.3)",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 15px 15px -15px rgba(36,34,68,0.3), 0 1px 4px 0 rgba(36,34,68,0.1)",
        }
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{...currentInputStyle, ...futureStyle}}
                    onChange = {onChange}
                    > 
                </input>
            
            </div>
        )
    }

    const focus_filling = () =>{
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            boxSizing: "borderBox",
  height: "40px",
  width: "300px",
  border: "1px solid rgba(0,156,215,0.3)",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 15px 15px -15px rgba(36,34,68,0.3), 0 1px 4px 0 rgba(36,34,68,0.1)",
        }
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{...currentInputStyle, ...futureStyle}}
                    onChange = {onChange}
                    > 
                </input>
            
            </div>
        )
    }

    const default_filled = () =>{
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            boxSizing: "borderBox",
  height: "40px",
  width: "300px",
  border: "1px solid #D2D2D6",
  backgroundColor: "#FFFFFF",
  boxShadow: " 0 1px 4px 0 rgba(36,34,68,0.1)",
        }
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{...currentInputStyle, ...futureStyle}}
                    onChange = {onChange}
                    > 
                </input>
            
            </div>
        )
    }

    const mouse_filled = () =>{
        const futureStyle = props.futureStyle;
        const currentInputStyle = {
            boxSizing: "borderBox",
  height: "40px",
  width: "300px",
  border: "1px solid rgba(0,156,215,0.3)",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 1px 4px 0 rgba(36,34,68,0.1)",
        }
        return(
            <div className = 'input-control'>
                <input className="input-field"
                    type = {type}
                    placeholder={placeholder}
                    value= {value}
                    name ={name}
                    style={{...currentInputStyle, ...futureStyle}}
                    onChange = {onChange}
                    > 
                </input>
            
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

    if (
        props.size === 'normal' && 
        props.filling=== 'no'
    ){
        return  (<div>{focus_empty()}</div>)
    };

    if (
        props.size === 'normal' && 
        props.filling=== 'yes'
    ){
        return  (<div>{focus_filling()}</div>)
    };

    if (
        props.size === 'normal' && 
        props.value=== 'yes'
    ){
        return  (<div>{default_filled()}</div>)
    };

    if (
        props.size === 'mouse' && 
        props.value === 'yes'
    ){
        return  (<div>{mouse_filled()}</div>)
    };
}
    

