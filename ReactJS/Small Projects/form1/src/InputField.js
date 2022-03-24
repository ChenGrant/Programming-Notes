import React from "react";
import Error from "./Error";

const InputField = (props) => {
  return (
    <div>
      <input
        value={props.inputVal[props.field]}
        onChange={(event) => props.onChangeHandler(event, props.field)}
        placeholder={[props.field]}
      />
      {props.submitted && !props.displayError[props.field] ? (
        <Error field={props.field.toLowerCase()} />
      ) : null}
    </div>
  );
};

export default InputField;
