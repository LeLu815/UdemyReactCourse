import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(context_data) => {
        <nav className={classes.nav}>
          <ul>
            {context_data.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {pcontext_datarops.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {context_data.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>;
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
