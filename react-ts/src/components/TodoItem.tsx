import React, { useRef } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  const todoTextInputRef = useRef<HTMLLIElement>(null);

  return (
    <li
      className={classes.item}
      ref={todoTextInputRef}
      onClick={props.onRemoveTodo}
    >
      {props.text}{" "}
    </li>
  );
};

export default TodoItem;
