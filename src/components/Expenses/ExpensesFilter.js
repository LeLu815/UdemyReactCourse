import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // console.log(props.selected);
  const dropdownChangeHandler = (event) => {
    // console.log(event.target.value);
    const pickYear = event.target.value;
    // console.log("Filter :", pickYear);
    props.onChangeFilter(pickYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
