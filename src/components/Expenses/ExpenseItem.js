import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // state 가 업데이트되면 재 실행된다.
  const [title, setTitle] = useState(props.title);

  // state 는 컴포넌트의 인스턴스별로 나뉘어져있습니다.
  const clickHandler = () => {
    alert("clicked!!");
    setTitle("clicked!!");
  };

  // 이거는 내코드
  const onCLickChange = () => {
    const id = props.id;
    console.log("ExpenseItem :", id);
    props.onClickTitle(id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={onCLickChange}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
