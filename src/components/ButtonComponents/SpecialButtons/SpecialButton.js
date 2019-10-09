import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special-buttons">
      {props.currentSpecialObj}
    </button>
  );
};

export default SpecialButton;