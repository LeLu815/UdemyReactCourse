import { useReducer } from "react";

import CardContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    let updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex((item) => {
      return item.id === action.id;
    });
    if (existingCartItemIndex !== -1) {
      const updatedItem = updatedItems[existingCartItemIndex];
      if (+updatedItem.amount === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        updatedItems[existingCartItemIndex].amount -= 1;
      }
    }
    const updatedTotalAmount = updatedItems.reduce(
      (accumulator, currenItem) =>
        accumulator + currenItem.price * currenItem.amount,
      0
    );
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
