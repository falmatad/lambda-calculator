import React from "react";


const NumberButton = (props) => {
  
    console.log(props);
    return (
      <button className="button" onClick = {() => props.showValue(props.currentNumObj)}>
        {props.currentNumObj}
    </button>
)};

export default NumberButton;