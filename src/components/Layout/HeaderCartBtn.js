import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CardContext from "../../store/cart-context";
import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
  const [btnIsHeigthlighted, setBtnIsHeigthlighted] = useState(false);
  const cartCTX = useContext(CardContext);
  const { items } = cartCTX;

  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHeigthlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHeigthlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHeigthlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartBtn;
