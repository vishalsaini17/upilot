
import React, {useState} from 'react';
import {GoInfo} from 'react-icons/go'
import {TiTick} from 'react-icons/ti'
import "./Alert.css"

export default function Alert(props){
    const {type, message, icon,
            futureStyle} = props;

    const neutral = () =>{
        const futureStyle = props.futureStyle;
        const currentAlertStyle = {
            border: '1px solid rgba(156,152,188,0.4)',
            backgroundColor: 'rgba(156,152,188,0.1)'
        }
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{...currentAlertStyle, ...futureStyle}}>
                    {props.icon && <i className = 'alert-icon'><GoInfo size = {25}/></i>}
                    <div className = 'alert-body'>
                        <div className = 'alert-message' style = {{color: '#4C4A5C', 
                                                                    justifyContent: 'center'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const success = () =>{
        const futureStyle = props.futureStyle;
        const currentAlertStyle = {
            border: '1px solid rgba(82,160,141,0.3)',
            backgroundColor: 'rgba(82,160,141,0.1)'
        }
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{...currentAlertStyle, ...futureStyle}}>
                    {props.icon && <i className = 'alert-icon'><TiTick size = {25}/></i>}
                    <div className = 'alert-body'>
                        <div className = 'alert-message' style= {{color: '#52A08D'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };


    const warning = () =>{
        const futureStyle = props.futureStyle;
        const currentAlertStyle = {
            border: '1px solid rgba(222,165,100,0.3)',
            backgroundColor: ' rgba(222,165,100,0.1)'
        }
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{...currentAlertStyle,...futureStyle}}>
                    {props.icon && <i className = 'alert-icon'><TiTick size = {25}/></i>}
                    <div className = 'alert-body'>
                        <div className = 'alert-message' style= {{color: '#DEA564'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div> 
        )
    };

    const danger = () =>{
        const futureStyle = props.futureStyle;
        const currentAlertStyle = {
            border: '1px solid rgba(215,137,137,0.3)',
            backgroundColor: 'rgba(215,137,137,0.1)'
        }
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{...currentAlertStyle,...futureStyle}}>
                    {props.icon && <i className = 'alert-icon'><TiTick size = {25}/></i>}
                    <div className = 'alert-body'>
                        <div className = 'alert-message' style= {{color: '#802A2A'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    // NEUTRAL 
    if (type === 'neutral'){
        return <> {neutral()} </>
    };

    // SUCCESS
    if(type === 'success'){
        return <> {success()} </>
    };


    // WARNING
    if(type === 'warning'){
        return <>{warning()}</> 
    };

    // DANGER
    if(type === 'danger'){
        return <>{danger()}</>
    }
}

