// import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

// state들은 비동기적으로 처리된다
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandelr: inputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandelr: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let fromIsValid = enteredEmailIsValid && enteredNameIsValid;

  const formSubmissionHandelr = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandelr}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!fromIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
