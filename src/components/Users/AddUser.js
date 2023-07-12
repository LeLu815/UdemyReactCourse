import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsrname, setEnteredUsrname] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsrname.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (none-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age ",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsrname, enteredAge);
    setEnteredUsrname("");
    setenteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsrname(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    // Card 는 다른 html tag와 다르게 사용자 정의 태그이므로 태그정의함수 내부에서 props에 잠재적으로 들어오는 className도 받을 수 있게 정의해야 합니다.
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsrname}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
