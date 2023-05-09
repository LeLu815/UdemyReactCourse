import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expense.css";
import { useState } from "react";

function Expense(props) {
  const expenseList = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2023");

  // const [myTitle, setMyTitle] = useState("");
  const clickTitle = (value) => {
    console.log("clicked");
    props.onClickChange(value);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // {
  //   props.items.map((item) => {
  //     console.log(item);
  //   });
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* JSX 요소의 배열은 리액트에서 나란히 랜더링되기 떄문에 배열로 리던해도 무방하다 */}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id}
          onClickTitle={clickTitle}
        />
      ))}
    </Card>
  );
}

export default Expense;
