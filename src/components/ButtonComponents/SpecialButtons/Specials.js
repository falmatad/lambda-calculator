import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [newSpecialArray, setNewSpecialArray ] = useState(specials);
  return (
    <div>
      <div className="button_container" />
      {newSpecialArray.map((currentSpecial, index) => (
        <SpecialButton key={index} currentSpecialObj ={currentSpecial} />
      ))}
    </div>
  );
};

export default Specials;