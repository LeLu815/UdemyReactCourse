import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2024, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2025, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2026, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const clickChange = (value) => {
    // expenses.find((obj) => Number(obj.id) === Number(value));
    setExpenses((prevExpenses) => {
      console.log(typeof prevExpenses);
      console.log(prevExpenses);
      return prevExpenses.map((obj) => {
        console.log(typeof obj.id);
        if (obj.id === String(value)) {
          console.log("if 문 확인 :", obj.id);
          obj.title = "clicked";
          return obj;
        }
        return obj;
      });
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} onClickChange={clickChange} />
    </div>
  );
}

export default App;
