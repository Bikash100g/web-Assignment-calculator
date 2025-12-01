import App from "./App";
import './App.css'
import './Calculator.css'
import React from "react";


// Create our Button component as a functional component.
const Button = (props) => {
    
    return (
        
        <button className={`ButtonStyle ${props.className || ""}`}   value={props.label}  onClick={props.ClickHandle} style={props.style}  > {props.label}  </button>
      
    );
  }
    
  // Export our button component.
  export default Button;

