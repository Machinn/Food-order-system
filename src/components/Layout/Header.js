import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Navigation from './Navigation';
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <nav>
          <ul>
            <li>
              <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
