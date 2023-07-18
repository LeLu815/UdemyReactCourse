import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const context_data = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {context_data.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context_data.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context_data.isLoggedIn && (
          <li>
            <button onClick={context_data.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
