import { React, useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {!ctx.isLoggedIn && (
          <li>
            <Link to="/login"> Login </Link>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
