import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isClicked, setIsClicked] = useState(0);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const changeExpenseForm = (event) => {
    setIsClicked(Number(event.target.value));
  };

  let template =
    isClicked === 0 ? (
      <button className="" type="button" value={1} onClick={changeExpenseForm}>
        Add New Expense
      </button>
    ) : (
      <div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2023-5-1"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            className=""
            type="button"
            value={0}
            onClick={changeExpenseForm}
          >
            Cancel
          </button>
          <button className="" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    );
  return <form onSubmit={submitHandler}>{template}</form>;
  // return (
  //   <form onSubmit={submitHandler}>
  //     <div className="new-expense__controls">
  //       <div className="new-expense__control">
  //         <label>Title</label>
  //         <input
  //           type="text"
  //           onChange={titleChangeHandler}
  //           value={enteredTitle}
  //         ></input>
  //       </div>
  //       <div className="new-expense__control">
  //         <label>Amount</label>
  //         <input
  //           type="number"
  //           min="0.01"
  //           step="0.01"
  //           onChange={amountChangeHandler}
  //           value={enteredAmount}
  //         ></input>
  //       </div>
  //       <div className="new-expense__control">
  //         <label>Date</label>
  //         <input
  //           type="date"
  //           min="2023-5-1"
  //           max="2023-12-31"
  //           onChange={dateChangeHandler}
  //           value={enteredDate}
  //         ></input>
  //       </div>
  //     </div>
  //     <div className="new-expense__actions">
  //       <button className="" type="submit">
  //         Add Expense
  //       </button>
  //     </div>
  //   </form>
  // );
};

export default ExpenseForm;
