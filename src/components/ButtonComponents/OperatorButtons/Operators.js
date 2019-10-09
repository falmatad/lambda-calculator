import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton"
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [newOprArray, setNewOprArray ] = useState(operators);
  return (
      <div className="button_container" >
      {newOprArray.map((currentOperator, index) => (
        <OperatorButton key={index} currentOperatorObj ={currentOperator.char} showValue = {props.showValue}/>
      ))}
    </div>
  );
};

export default Operators;