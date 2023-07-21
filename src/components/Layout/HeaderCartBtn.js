import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CardContext from "../../store/cart-context";
import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
  const cartCTX = useContext(CardContext);

  const numberOfCartItem = cartCTX.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartBtn;
