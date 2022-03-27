import React, { useEffect, useState } from "react";
import InputField from "./InputField";

const App = () => {
  const FIRST_NAME = "First Name";
  const LAST_NAME = "Last Name";
  const EMAIL = "Email";

  const [displayForm, setDisplayForm] = useState(true);

  const [inputVal, setInputVal] = useState({
    [FIRST_NAME]: "",
    [LAST_NAME]: "",
    [EMAIL]: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [displayError, setDisplayError] = useState({
    [FIRST_NAME]: false,
    [LAST_NAME]: false,
    [EMAIL]: false,
  });

  const isValidField = (field) => field != "";

  const onChangeHandler = (event, field) => {
    const text = event.target.value;

    setInputVal((prevInputVal) => {
      return { ...prevInputVal, [field]: text };
    });

    setDisplayError((prevDisplayError) => {
      return { ...prevDisplayError, [field]: isValidField(text) };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    !submitted && setSubmitted(true);
    Object.values(displayError).reduce((prev, curr) => prev && curr, true) &&
      setDisplayForm(false);
  };

  return (
    <>
      {displayForm ? (
        <form onSubmit={submitHandler}>
          <InputField
            field={FIRST_NAME}
            inputVal={inputVal}
            onChangeHandler={onChangeHandler}
            submitted={submitted}
            displayError={displayError}
          />
          <InputField
            field={LAST_NAME}
            inputVal={inputVal}
            onChangeHandler={onChangeHandler}
            submitted={submitted}
            displayError={displayError}
          />
          <InputField
            field={EMAIL}
            inputVal={inputVal}
            onChangeHandler={onChangeHandler}
            submitted={submitted}
            displayError={displayError}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Submitted</p>
      )}
    </>
  );
};

export default App;
