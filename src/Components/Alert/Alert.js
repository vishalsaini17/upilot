
import React, {useState} from 'react';
import {GoInfo} from 'react-icons/go'
import {TiTick} from 'react-icons/ti'
import "./Alert.css"

export default function Alert(props){
    const {type, message} = props;

    const neutral = () =>{
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{border: '1px solid rgba(156,152,188,0.4)',
                             backgroundColor: 'rgba(156,152,188,0.1)'}}>
                    <i className = 'alert-icon'><GoInfo size = {25}/></i>
                    <div className = 'alert-body'>
                        <div className = 'alert-title' style = {{color: '#2A2937'}}>
                            <p className = 'title-p'> Neutral alert </p>
                        </div>
                        <div className = 'alert-message' style = {{color: '#4C4A5C'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const success = () =>{
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{border: '1px solid rgba(82,160,141,0.3)',
                             backgroundColor: 'rgba(82,160,141,0.1)'}}>
                    <i className = 'alert-icon'><TiTick size = {25}/></i>
                    <div className = 'alert-body'>
                        <div className = 'alert-title' style = {{color: '#52A08D'}}>
                            <p className = 'title-p'> Success alert </p>
                        </div>
                        <div className = 'alert-message' style= {{color: '#52A08D'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const warning = () =>{
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{border: '1px solid rgba(222,165,100,0.3)',
                             backgroundColor: ' rgba(222,165,100,0.1)'}}>
                    <i className = 'alert-icon'><TiTick size = {25}/></i>
                    <div className = 'alert-body'>
                        <div className = 'alert-title' style = {{color: '#DEA564'}}>
                            <p className = 'title-p'> Warning alert </p>
                        </div>
                        <div className = 'alert-message' style= {{color: '#DEA564'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const danger = () =>{
        return(
            <div className = 'alert-object'>
                <div className = 'alert'
                    style = {{border: '1px solid rgba(215,137,137,0.3)',
                             backgroundColor: 'rgba(215,137,137,0.1)'}}>
                    <i className = 'alert-icon'><TiTick size = {25}/></i>
                    <div className = 'alert-body'>
                        <div className = 'alert-title' style = {{color: '#611111'}}>
                            <p className = 'title-p'> Danger alert </p>
                        </div>
                        <div className = 'alert-message' style= {{color: '#802A2A'}}>
                            <p className = 'msg-p'>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

    if (type === 'neutral'){
        return <> {neutral()} </>
    }

    if(type === 'success'){
        return <> {success()} </>
    }

    if(type === 'warning'){
        return <>{warning()}</> 
    }

    if(type === 'danger'){
        return <>{danger()}</>
    }
}

