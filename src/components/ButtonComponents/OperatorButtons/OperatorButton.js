import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button" onClick = {() => props.showValue(props.currentOperatorObj)}>
        {props.currentOperatorObj}
    </button>
)};
export default OperatorButton;