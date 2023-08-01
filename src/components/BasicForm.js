import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    reset: restFirstName,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandelr: firstNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    reset: restLastFirstName,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandelr: lastNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailNameValue,
    isValid: emailNameIsValid,
    hasError: emailNameHasError,
    reset: restEmailName,
    valueChangeHandler: emailNameChangeHandler,
    inputBlurHandelr: emailNameBlurHandler,
  } = useInput(isNotEmpty);

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailNameClasses = emailNameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailNameClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailNameValue}
          onChange={emailNameChangeHandler}
          onBlur={emailNameBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
