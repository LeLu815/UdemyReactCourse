import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import clsses from "./Header.module.css";

import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header className={clsses.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={clsses["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
