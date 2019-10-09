import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="buttons">
      {props.currentSpecialObj}
    </button>
  );
};

export default SpecialButton;