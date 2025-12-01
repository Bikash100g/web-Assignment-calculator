import App from "./App";
import './App.css'
import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import {useState} from "react";
import myPic from './me.jpg';

function KeyPadComponent(props){

    const [text1, setText ] = useState("")
    const [showImage, setShowImage] = useState(false);
    const ClickHandle = (e) => {

        const value = e.target.value;

    // If "show me" button clicked → show image
    if (value === "show me") {
      setShowImage(true);
      return; // prevent adding text
    }

    // Hide image when clicking any other button
    setShowImage(false);

        if (e.target.value=="C")
        {
       
            setText("")    
        }
        else if  (e.target.value=="=")
        {
        setText(eval(text1))
        alert(eval(text1))             
        }
        else if (value === "square") {
      try {
        const number = parseFloat(text1);
        if (!isNaN(number)) {
          const result = number * number;
          setText(result.toString());
        } else {
          alert("Enter a valid number first!");
        }
      } catch (error) {
        alert("Error calculating square");
      }
      }
        else
        setText(text1+e.target.value)
      };
    
   
        return (
            <div className="CalculatorContainer">
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
                
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/>
                 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Button label="square" ClickHandle={ClickHandle} className="ButtonWide" />
                <Button label="show me" ClickHandle={ClickHandle} className="ButtonWide" />
                </div>

                </div>

               {/* Image Appears Below */}
            {showImage && (
                <div style={{ marginTop: "20px" }}>
                <img
                    src={myPic}
                    alt="My Pic"
                    style={{ width: "500px", borderRadius: "20px" }}
                />
                </div>
            )}
                
            </div>
        );
    
}
export default KeyPadComponent;
