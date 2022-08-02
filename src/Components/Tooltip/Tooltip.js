import React from 'react'

//css
import "./Tooltip.css"

/*
The Tooltip  component can be rendered based on props.

The mandatory props are:
1. type: type of tip arrow, i.e. toparrow, bottomarrow, leftarrow, rightarrow
2. message: what message to be shown in the tooltip

*/

export default function Tooltip(props){
    const {type, message} = props

    const tooltip_leftarrow = () =>{
        return(
            <div className = 'tooltip'>
                <div className = 'tooltip-arrow'
                style = {{     
                    top: '50%',
                    left: 'auto',
                    marginLeft: '-5px',
                    borderWidth: '5px 5px 5px 0',
                    borderRightColor: 'var(--tooltip-bg)'}}>
                </div>

                <div className = 'tooltip-inner' style = {{textAlign: 'left'}}>
                     {message}
                </div>
            </div>
        )
    }

    const tooltip_rightarrow = () =>{
        return(
            <div className = 'tooltip'>
                <div className = 'tooltip-arrow'
                style = {{     
                    top: '50%',
                    right: '-5px',
                    left: 'auto',
                    marginTop: '-5px',
                    borderWidth: '5px 0 5px 5px',
                    borderLeftColor: 'var(--tooltip-bg)'}}>
                </div>

                <div className = 'tooltip-inner' style = {{textAlign: 'left'}}>
                     {message}
                </div>
            </div>
        )
    }

    const tooltip_bottomarrow = () =>{
        return(
            <div className = 'tooltip'>
                <div className = 'tooltip-arrow'
                style = {{     
                    top: 'auto',
                    bottom: '-5px',
                    left: '50%',
                    marginLeft: '-5px',
                    borderWidth: '5px 5px 0',
                    borderTopColor: 'var(--tooltip-bg)'}}>
                </div>

                <div className = 'tooltip-inner' style = {{textAlign: 'center'}}>
                     {message}
                </div>
            </div>
        )
    }

    const tooltip_toparrow = () =>{
        return(
            <div className = 'tooltip'>
                <div className = 'tooltip-arrow'
                style = {{     
                    top: '0px',
                    left: '50%',
                    marginLeft: '-5px',
                    borderWidth:  '0 5px 5px',
                    borderBottomColor: 'var(--tooltip-bg)'}}>
                </div>

                <div className = 'tooltip-inner' style = {{textAlign: 'center'}}>
                    {message}
                </div>
            </div>
        )
    }

    if (
        props.type === 'toparrow'
    ){
        return(
            <div>{tooltip_toparrow()}</div>
        )
    };

   
    if (
        props.type === 'bottomarrow'
    ){
        return  (<div>{tooltip_bottomarrow()}</div>)
    };

    if (
        props.type === 'leftarrow' 
    ){
        return (
        <div>
            {tooltip_leftarrow()}
        </div>)
    };

    if (
        props.type === 'rightarrow'
    ){
        return (
        <div>
            {tooltip_rightarrow()}
        </div>)
    };
}
