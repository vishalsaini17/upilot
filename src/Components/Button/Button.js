/*
The button component can be rendered in various ways based on the props that are being passed to it.

The 3 mandatory props are:
1. size: the size of the button, accepted values: (xlarge, large, medium, small, xsmall)
2. shape: the shape of the button, accepted values: (square, round)
3. color: the color of the button, currently accepted values: (primary, secondary)

The optional ones are: 
1. text: the text that is displayed on the button
2. onClick: the function that is called when the button is clicked
*/


import React from "react";
import "./Button.css";
import SaveLine from "remixicon-react/SaveLineIcon"
import AddLine from "remixicon-react/AddLineIcon"
import CheckFill from "remixicon-react/CheckFillIcon"
import CloseLine from "remixicon-react/CloseLineIcon"
import CloseLineIcon from "remixicon-react/CloseLineIcon";


 export default function Button(props) {

  const iconsList={
    'save' : <SaveLine size={20}/>,
    'plus' : <AddLine size={20}/>,
    'check': <CheckFill size={20}/>,
    'close': <CloseLine size={20}/>

  }
  
  const square_button_xlarge_primary = () => {
    return (
      <button
        className="square-button"
        style={{
          height: "60px",
          width: "239px",
          fontSize: "20px",
          borderRadius: "12px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_large_primary = () => {
    return (
      <button
        className="square-button"
        style={{
          height: "50px",
          width: '100%' ,
          //width: "195px",
          fontSize: "18px",
          borderRadius: "8px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_medium_primary = () => {
    return (
      <button
        className="square-button"
        style={{
          height: "40px",
          width: "168px",
          fontSize: "15px",
          borderRadius: "5px",
          
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_small_primary = () => {
    return (
      <button
        className="square-button"
        style={{
          height: "34px",
          width: "118px",
          fontSize: "13px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_xsmall_primary = () => {
    return (
      <button
        className="square-button"
        style={{
          height: "30px",
          width: "118px",
          // fontSize: "13px",
          fontSize: '0.65vw',
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_xlarge_secondary = () => {
    return (
      <button
        className="square-button-secondary"
        style={{
          height: "60px",
          width: "239px",
          fontSize: "20px",
          borderRadius: "12px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_large_secondary = () => {
    return (
      <button
        className="square-button-secondary"
        style={{
          height: "50px",
          width: "186px",
          fontSize: "18px",
          borderRadius: "8px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_medium_secondary = () => {
    return (
      <button
        className="square-button-secondary"
        style={{
          height: "40px",
          width: "168px",
          fontSize: "15px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_small_secondary = () => {
    return (
      <button
        className="square-button-secondary"
        style={{
          height: "34px",
          width: "118px",
          fontSize: "13px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_button_xsmall_secondary = () => {
    return (
      <button
        className="square-button-secondary"
        style={{
          height: "30px",
          width: "118px",
          fontSize: "11px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_xlarge_primary = () => {
    return (
      <button
        className="rounded-button"
        style={{
          height: "60px",
          width: "212px",
          fontSize: "20px",
          borderRadius: "30px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_large_primary = () => {
    return (
      <button
        className="rounded-button"
        style={{
          height: "50px",
          width: "163px",
          fontSize: "18px",
          borderRadius: "25px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_medium_primary = () => {
    return (
      <button
        className="rounded-button"
        style={{
          height: "40px",
          width: "133px",
          fontSize: "15px",
          borderRadius: "20px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_small_primary = () => {
    return (
      <button
        className="rounded-button"
        style={{
          height: "34px",
          width: "103px",
          fontSize: "13px",
          borderRadius: "17px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_xsmall_primary = () => {
    return (
      <button
        className="rounded-button"
        style={{
          height: "30px",
          width: "103px",
          fontSize: "13px",
          borderRadius: "15px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_xlarge_secondary = () => {
    return (
      <button
        className="rounded-button-secondary"
        style={{
          height: "60px",
          width: "212px",
          fontSize: "20px",
          borderRadius: "30px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_large_secondary = () => {
    return (
      <button
        className="rounded-button-secondary"
        style={{
          height: "50px",
          width: "163px",
          fontSize: "18px",
          borderRadius: "25px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_medium_secondary = () => {
    return (
      <button
        className="rounded-button-secondary"
        style={{
          height: "40px",
          width: "133px",
          fontSize: "15px",
          borderRadius: "20px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_small_secondary = () => {
    return (
      <button
        className="rounded-button-secondary"
        style={{
          height: "34px",
          width: "103px",
          fontSize: "13px",
          borderRadius: "17px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const rounded_button_xsmall_secondary = () => {
    return (
      <button
        className="rounded-button-secondary"
        style={{
          height: "30px",
          width: "103px",
          fontSize: "13px",
          borderRadius: "15px",
        }}
        onClick = {props.onClick}
      >
        {props.text}
      </button>
    );
  };

  const square_plus_xsmall_primary = () => {
    return (
      <button
        className="square-plus-primary"
        style={{
          height: "30px",
          width: "30px",
          fontsize: "14px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
           <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_plus_xsmall_secondary = () => {
    return (
      <button
        className="square-plus-secondary"
        style={{
          height: "30px",
          width: "30px",
          fontsize: "14px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <AddLine size={20}/>
        {props.text}
      </button>
    );
  };

  const round_plus_small_primary = () => {
    return (
      <button
        className="rounded-plus-primary"
        style={{
          height: "34px",
          width: "34px",
          fontsize: "14px",
          borderRadius: "17px",
        }}
        onClick = {props.onClick}
      >
          <i className='plus-icon-s'><AddLine size={22}/></i>
        {props.text}
      </button>
    );
  }

  if (
    props.size === "xlarge" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_xlarge_secondary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_large_secondary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_medium_secondary()}</div>;
  }

  if (
    props.size === "small" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_small_secondary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_xsmall_secondary()}</div>;
  }
  if (
    props.size === "xlarge" &&
    props.shape === "round" &&
    props.color === "primary"
  ) {
    return <div>{rounded_button_xlarge_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "round" &&
    props.color === "primary"
  ) {
    return <div>{rounded_button_large_primary()}</div>;
  }


  if (
    props.shape === "square_icon" &&
    props.size === "xsmall"
  ) {
    return <div>{square_icon_xsmall()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "small"
  ) {
    return <div>{square_icon_small()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "medium"
  ) {
    return <div>{square_icon_medium()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "large"
  ) {
    return <div>{square_icon_large()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "xlarge"
  ) {
    return <div>{square_icon_xlarge()}</div>;
  }

  if (
    props.shape === "square_deleted"
  ) {
    return <div>{square_deleted()}</div>;
  }

  if (
    props.shape === "square_completed"
  ) {
    return <div>{square_completed()}</div>;
  }
  

  if (
    props.size === "xlarge" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_xlarge_primary()}</div>;
  }

  if (
    props.size === "xlarge" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_xlarge_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_large_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_large_primary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_medium_primary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_medium_primary()}</div>;
  }


  if (
    props.size === "small" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_xsmall_primary()}</div>;
  }

  if (
    props.size === "small" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_small_primary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_xsmall_primary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_xsmall_primary()}</div>;
  }



  if (
    props.size === "xlarge" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_xlarge_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_large_primary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_medium_primary()}</div>;
  }

  if (
    props.size === "small" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_small_primary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_xsmall_primary()}</div>;
  }

  const round_plus_xsmall_secondary = () => {
    return (
      <button
        className="rounded-plus-secondary"
        style={{
          height: "30px",
          width: "30px",
          fontsize: "14px",
          borderRadius: "15px",
          opacity: 0.5
        }}
        onClick = {props.onClick}
      >
          <i className='plus-icon-s'><AddLine size={20}/></i>
      </button>
    );
  };

  const square_plus_small_primary = () => {
    return (
      <button
        className="square-plus-primary"
        style={{
          height: "34px",
          width: "34px",
          fontsize: "14px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
           <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_plus_small_secondary = () => {
    return (
      <button
        className="square-plus-secondary"
        style={{
          height: "34px",
          width: "34px",
          fontsize: "14px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  }

  const round_plus_small_secondary = () => {
    return (
      <button
        className="rounded-plus-secondary"
        style={{
          height: "34px",
          width: "34px",
          fontsize: "14px",
          borderRadius: "17px",
        }}
        onClick = {props.onClick}
      >
          <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  }

  const square_plus_medium_primary = () => {
    return (
      <button
        className="square-plus-primary"
        style={{
          height: "40px",
          width: "40px",
          fontSize: "14px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  }; 

  const round_plus_medium_primary = () => {
    return (
      <button
        className="rounded-plus-primary"
        style={{
          height: "40px",
          width: "40px",
          fontSize: "14px",
          borderRadius: "20px",
        }}
        onClick = {props.onClick}
      >
          <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_plus_medium_secondary = () => {
    return (
      <button
        className="square-plus-secondary"
        style={{
          height: "40px",
          width: "40px",
          fontSize: "15px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
      <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const round_plus_medium_secondary = () => {
    return (
      <button
        className="rounded-plus-secondary"
        style={{
          height: "40px",
          width: "40px",
          fontSize: "15px",
          borderRadius: "20px",
        }}
        onClick = {props.onClick}
      >
        <i className='plus-icon-s'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_plus_large_primary = () => {
    return (
      <button
        className="square-plus-primary"
        style={{
          height: "50px",
          width: "50px",
          fontSize: "15px",
          borderRadius: "8px",
        }}
        onClick = {props.onClick}
      >
         <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const round_plus_large_primary = () => {
    return (
      <button
        className="rounded-plus-primary"
        style={{
          height: "50px",
          width: "50px",
          fontSize: "16px",
          borderRadius: "25px",
        }}
        onClick = {props.onClick}
      >
 <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_plus_large_secondary = () => {
    return (
      <button
        className="square-plus-secondary"
        style={{
          height: "50px",
          width: "503px",
          fontSize: "15px",
          borderRadius: "8px",
        }}
        onClick = {props.onClick}
      >
        <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const round_plus_large_secondary = () => {
    return (
      <button
        className="rounded-plus-secondary"
        style={{
          height: "50px",
          width: "50px",
          fontSize: "16px",
          borderRadius: "25px",
        }}
        onClick = {props.onClick}
      >
        <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_plus_xlarge_primary = () => {
    return (
      <button
        className="square-plus-primary"
        style={{
          height: "60px",
          width: "60px",
          fontSize: "18px",
          borderRadius: "12px",
        }}
        onClick = {props.onClick}
      >
       <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const round_plus_xlarge_primary = () => {
    return (
      <button
        className="rounded-button-primary"
        style={{
          height: "60px",
          width: "60px",
          fontSize: "18px",
          borderRadius: "30px",
        }}
        onClick = {props.onClick}
      >
        <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_plus_xlarge_secondary = () => {
    return (
      <button
        className="square-plus-secondary"
        style={{
          height: "60px",
          width: "60px",
          fontSize: "18px",
          borderRadius: "12px",
        }}
        onClick = {props.onClick}
      >
         <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const round_plus_xlarge_secondary = () => {
    return (
      <button
        className="rounded-plus-secondary"
        style={{
          height: "60px",
          width: "60px",
          fontSize: "18px",
          borderRadius: "30px",
        }}
        onClick = {props.onClick}
      >
      <i className='plus-icon-l'><AddLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const round_plus_xsmall_primary = () => {
    return (
      <button
        className="rounded-plus-primary"
        style={{
          height: "30px",
          width: "30px",
          fontsize: "14px",
          borderRadius: "15px",
        
        }}
        onClick = {props.onClick}
      >
          <AddLine size={20}/>
        {props.text}
      </button>
    );
  };

  const square_licon_xsmall_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "30px",
          width: "119px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_ricon_xsmall_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "30px",
          width: "130px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_licon_small_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "34px",
          width: "123px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_ricon_small_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "34px",
          width: "134px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_licon_medium_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "40px",
          width: "160px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
         <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_ricon_medium_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "40px",
          width: "173px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_licon_large_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "50px",
          width: "197px",
          borderRadius: "8px",
        }}
        onClick = {props.onClick}
      >
         <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
    );
  };

  const square_ricon_large_primary = () => {
    return (
<div>
      <i class="ri-check-fill"></i>
      <button
        className="square-icon"
        style={{
          height: "50px",
          width: "213px",
          borderRadius: "8px",
        }}
        onClick = {props.onClick}
      >
      <i className='save-icon'><SaveLine size={20}/></i>
        {props.text}
      </button>
      </div>
    );
  };

  const square_licon_xlarge_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "60px",
          width: "251px",
          borderRadius: "12px",
        }}
        onClick = {props.onClick}
      >
       <i className='save-icon'><SaveLine size={20}/></i>
        {props.onClick}
      </button>
    );
  };

  const square_ricon_xlarge_primary = () => {
    return (
      <button
        className="square-icon"
        style={{
          height: "60px",
          width: "269px",
          borderRadius: "12px",
        }}
        onClick = {props.onClick}
      >
        <i className='save-icon'><SaveLine size={20}/></i>
        {props.onClick}
      </button>
    );
  };

  const square_icon_xsmall =() => {
    return(
      <button
        className="square-icon"
        style={{
          height: "30px",
          width: "30px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <i className='save-icon'><SaveLine size={20}/></i>
        {props.onClick}
        </button>
    );
  };

  const square_icon_small =() => {
    return(
      <button
        className="square-icon"
        style={{
          height: "34px",
          width: "34px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <i className='save-icon'><SaveLine size={20}/></i>
        {props.onClick}
        </button>
    );
  };
  const square_icon_medium =() => {
    return(
      <button
        className="square-icon"
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <i className='save-icon'><SaveLine size={20}/></i>
        {props.onClick}
        </button>
    );
  };

  const square_icon_large =() => {
    return(
      <button
        className="square-icon"
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <i className='save-icon'><SaveLine size={20}/></i>
        {props.onClick}
        </button>
    );
  };

  const square_icon_xlarge =() => {
    return(
      <button
        className="square-icon"
        style={{
          height: "60px",
          width: "60px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
          <i className='save-icon'><SaveLine size={20}/></i>
        {props.onClick}
        </button>
    );
  };
  const square_completed = () => {
    return (
      <div>

      <button
        className="square-completed"
        style={{
          height: "40px",
          width: "157px",
          borderRadius: "12px",
        }}
        
        onClick = {props.onClick}
      >
        <CheckFill size={20}/>
        {props.text}
      </button>
      </div>
    );
  };

  const square_deleted = () => {
    return (
      <button
        className="square-deleted"
        style={{
          height: "40px",
          width: "116px",
          borderRadius: "5px",
        }}
        onClick = {props.onClick}
      >
        <i class="ri-close-fill"
      style={{ height: "12px",
        width: "12px",
        BackgroundColor: "#FFFFFF" }}></i>
        <i className="close-icon"><CloseLineIcon size={20}/></i>
        {props.onClick}
      </button>
    );
  };


  if (
    props.shape === "square_icon" &&
    props.size === "xsmall"
  ) {
    return <div>{square_icon_xsmall()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "small"
  ) {
    return <div>{square_icon_small()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "medium"
  ) {
    return <div>{square_icon_medium()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "large"
  ) {
    return <div>{square_icon_large()}</div>;
  }

  if (
    props.shape === "square_icon" &&
    props.size === "xlarge"
  ) {
    return <div>{square_icon_xlarge()}</div>;
  }

  if (
    props.shape === "square_deleted"
  ) {
    return <div>{square_deleted()}</div>;
  }

  if (
    props.shape === "square_completed"
  ) {
    return <div>{square_completed()}</div>;
  }
  

  if (
    props.size === "xlarge" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_xlarge_primary()}</div>;
  }

  if (
    props.size === "xlarge" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_xlarge_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_large_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_large_primary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_medium_primary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_medium_primary()}</div>;
  }


  if (
    props.size === "small" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_xsmall_primary()}</div>;
  }

  if (
    props.size === "small" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_small_primary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square_licon" &&
    props.color === "primary"
  ) {
    return <div>{square_licon_xsmall_primary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square_ricon" &&
    props.color === "primary"
  ) {
    return <div>{square_ricon_xsmall_primary()}</div>;
  }



  if (
    props.size === "xlarge" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_xlarge_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_large_primary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_medium_primary()}</div>;
  }

  if (
    props.size === "small" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_small_primary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square" &&
    props.color === "primary"
  ) {
    return <div>{square_button_xsmall_primary()}</div>;
  }

  if (
    props.size === "xlarge" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_xlarge_secondary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_large_secondary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_medium_secondary()}</div>;
  }

  if (
    props.size === "small" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_small_secondary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "square" &&
    props.color === "secondary"
  ) {
    return <div>{square_button_xsmall_secondary()}</div>;
  }
  if (
    props.size === "xlarge" &&
    props.shape === "round" &&
    props.color === "primary"
  ) {
    return <div>{rounded_button_xlarge_primary()}</div>;
  }

  if (
    props.size === "large" &&
    props.shape === "round" &&
    props.color === "primary"
  ) {
    return <div>{rounded_button_large_primary()}</div>;
  }

  if (
    props.size === "medium" &&
    props.shape === "round" &&
    props.color === "primary"
  ) {
    return <div>{rounded_button_medium_primary()}</div>;
  }

  if (
    props.size === "small" &&
    props.shape === "round" &&
    props.color === "primary"
  ) {
    return <div>{rounded_button_small_primary()}</div>;
  }

  if (
    props.size === "xsmall" &&
    props.shape === "round" &&
    props.color === "primary"
  ) {
    return <div>{rounded_button_xsmall_primary()}</div>;
  }

  if (
    props.size === "xlarge" &&
    props.shape === "round" &&
    props.color === "secondary"
  ) {
    return <div>{rounded_button_xlarge_secondary()}</div>;
  }
  if (
    props.size === "large" &&
    props.shape === "round" &&
    props.color === "secondary"
  ) {
    return <div>{rounded_button_large_secondary()}</div>;
  }
  if (
    props.size === "medium" &&
    props.shape === "round" &&
    props.color === "secondary"
  ) {
    return <div>{rounded_button_medium_secondary()}</div>;
  }
  if (
    props.size === "small" &&
    props.shape === "round" &&
    props.color === "secondary"
  ) {
    return <div>{rounded_button_small_secondary()}</div>;
  }
  if (
    props.size === "xsmall" &&
    props.shape === "round" &&
    props.color === "secondary"
  ) {
    return <div>{rounded_button_xsmall_secondary()}</div>;
  }


if (
  props.size === "xsmall" &&
  props.shape === "square_plus" &&
  props.color === "primary"
) {
  return <div>{square_plus_xsmall_primary()}</div>;
}

if (
  props.size === "xsmall" &&
  props.shape === "square_plus" &&
  props.color === "secondary"
) {
  return <div>{square_plus_xsmall_secondary()}</div>;
}
if (
  props.size === "xsmall" &&
  props.shape === "round_plus" &&
  props.color === "primary"
) {
  return <div>{round_plus_xsmall_primary()}</div>;
}

if (
  props.size === "xsmall" &&
  props.shape === "round_plus" &&
  props.color === "secondary"
) {
  return <div>{round_plus_xsmall_secondary()}</div>;
}

if (
  props.size === "small" &&
  props.shape === "square_plus" &&
  props.color === "primary"
) {
  return <div>{square_plus_small_primary()}</div>;
}

if (
  props.size === "small" &&
  props.shape === "square_plus" &&
  props.color === "secondary"
) {
  return <div>{square_plus_small_secondary()}</div>;
}

if (
  props.size === "small" &&
  props.shape === "round_plus" &&
  props.color === "primary"
) {
  return <div>{round_plus_small_primary()}</div>;
}

if (
  props.size === "small" &&
  props.shape === "round_plus" &&
  props.color === "secondary"
) {
  return <div>{round_plus_small_secondary()}</div>;
}

if (
  props.size === "medium" &&
  props.shape === "square_plus" &&
  props.color === "primary"
) {
  return <div>{square_plus_medium_primary()}</div>;
}

if (
  props.size === "medium" &&
  props.shape === "square_plus" &&
  props.color === "secondary"
) {
  return <div>{square_plus_medium_secondary()}</div>;
}

if (
  props.size === "medium" &&
  props.shape === "round_plus" &&
  props.color === "primary"
) {
  return <div>{round_plus_medium_primary()}</div>;
}

if (
  props.size === "medium" &&
  props.shape === "round_plus" &&
  props.color === "secondary"
) {
  return <div>{round_plus_medium_secondary()}</div>;
}

if (
  props.size === "large" &&
  props.shape === "square_plus" &&
  props.color === "primary"
) {
  return <div>{square_plus_large_primary()}</div>;
}

if (
  props.size === "large" &&
  props.shape === "square_plus" &&
  props.color === "secondary"
) {
  return <div>{square_plus_large_secondary()}</div>;
}
if (
  props.size === "large" &&
  props.shape === "round_plus" &&
  props.color === "primary"
) {
  return <div>{round_plus_large_primary()}</div>;
}

if (
  props.size === "large" &&
  props.shape === "round_plus" &&
  props.color === "secondary"
) {
  return <div>{round_plus_large_secondary()}</div>;
}

if (
  props.size === "xlarge" &&
  props.shape === "square_plus" &&
  props.color === "primary"
) {
  return <div>{square_plus_xlarge_primary()}</div>;
}

if (
  props.size === "xlarge" &&
  props.shape === "square_plus" &&
  props.color === "secondary"
) {
  return <div>{square_plus_xlarge_secondary()}</div>;
}

if (
  props.size === "xlarge" &&
  props.shape === "round_plus" &&
  props.color === "primary"
) {
  return <div>{round_plus_xlarge_primary()}</div>;
}
if (
  props.size === "xlarge" &&
  props.shape === "round_plus" &&
  props.color === "secondary"
) {
  return <div>{round_plus_xlarge_secondary()}</div>;
}

}