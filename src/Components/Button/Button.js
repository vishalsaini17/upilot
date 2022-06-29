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

export default function Button(props) {
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
          fontSize: "13px",
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
          fontSize: "13px",
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
}
