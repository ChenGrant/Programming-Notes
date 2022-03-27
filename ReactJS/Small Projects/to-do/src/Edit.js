import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const ENTER_KEY_CODE = 13;

const Edit = (props) => {
  const [displayEdit, setDisplayEdit] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();

  const handleEdit = () => {
    setDisplayEdit(true);
    inputRef.current.addEventListener("keydown", function (event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        console.log(3);
      }
    });
  };

  const changeInput = (event) => {
    setInputVal(event.target.value);
  };
  return (
    <div>
      {displayEdit ? (
        <input ref={inputRef} value={inputVal} onChange={changeInput}></input>
      ) : null}
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Edit;
