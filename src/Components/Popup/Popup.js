import React, {useState} from 'react';
import "./Popup.css"

export default function Popup(props){
    const {type, message, onClick,
        trigger, setTrigger} = props;

    const cancelButton = () => {
        setTrigger(false)
    }

    const neutral = () =>{
        return(props.trigger) ? (
            <div className = 'popup-object'>
                <div className = 'popup-type'
                    style ={{
                        background: 'linear-gradient(90deg, #9C98BC 0%, #C6C2DE 100%)'
                    }}></div>
                <div className = 'popup'>
                    <div className = 'heading'>
                        <p className = 'title'
                            style ={{
                                color: '#9C98BC'
                            }}> 
                            Neutral Popup
                        </p>
                    </div>
                    <div className = 'body-message'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className = 'bar'></div>
                    <div className = 'button-row'>
                        <button className = 'cancel-btn'
                        onClick = {cancelButton}> Cancel </button>
                        <button className = 'confirm-btn'> Save </button>

                    </div>
                </div>
            </div>
        ) :'';
    }


    const success = () =>{
        return(props.trigger) ? (
            <div className = 'popup-object'>
                <div className = 'popup-type'
                    style= {{
                        background: 'linear-gradient(90deg, #6CBCAB 0%, #B2E3D9 100%)'
                    }}></div>
                <div className = 'popup'>
                    <div className = 'heading'>
                        <p className = 'title'
                            style ={{
                                color: '#52A08D'
                            }}> 
                            Success Popup
                        </p>
                    </div>
                    <div className = 'body-message'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className = 'bar'></div>
                    <div className = 'button-row'>
                        <button className = 'cancel-btn'
                        onClick = {cancelButton}> Cancel </button>
                        <button className = 'confirm-btn'> Save </button>

                    </div>
                </div>
            </div>
        ) : '';
    }

    const warning = () =>{
        return(props.trigger) ? (
            <div className = 'popup-object'>
                <div className = 'popup-type'
                    style= {{
                        background: 'linear-gradient(90deg, #DEA564 0%, #EECA97 100%)'
                    }}></div>
                <div className = 'popup'>
                    <div className = 'heading'>
                        <p className = 'title'
                            style ={{
                                color: '#DEA564'
                            }}> 
                            Warning Popup
                        </p>
                    </div>
                    <div className = 'body-message'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className = 'bar'></div>
                    <div className = 'button-row'>
                        <button className = 'cancel-btn'
                        onClick = {cancelButton}> Cancel </button>
                        <button className = 'confirm-btn'> Save </button>

                    </div>
                </div>
            </div>
        ): "";
    }

    const danger = () =>{
        return(props.trigger) ? (
            <div className = 'popup-object'>
                <div className = 'popup-type'
                    style= {{
                        background: 'linear-gradient(270deg, #E7B8B8 0%, #D78989 100%)'
                    }}></div>
                <div className = 'popup'>
                    <div className = 'heading'>
                        <p className = 'title'
                            style ={{
                                color: '#C25A5A'
                            }}> 
                            Danger Popup
                        </p>
                    </div>
                    <div className = 'body-message'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className = 'bar'></div>
                    <div className = 'button-row'>
                        <button className = 'cancel-btn'
                        onClick = {cancelButton}> Cancel </button>
                        <button className = 'delete-btn'> Delete </button>

                    </div>
                </div>
            </div>
        ) :'';
    }

    if (
        props.type === 'neutral'
    ){
        return <>{neutral()}</>
    }

    if (
        props.type === 'success'
    ){
        return <> {success()}</>
    }

    if (
        props.type === 'warning'
    ){
        return <> {warning()}</>
    }

    if (
        props.type === 'danger'
    ){
        return <> {danger()}</>
    }
    
}

