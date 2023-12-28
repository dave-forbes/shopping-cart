import Logo from "../../assets/svg/logo";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ bag }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <h1>Backpack and Sack</h1>
        <Logo />
      </div>
      <nav className={styles.mainNav}>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/ourstory"
          >
            Our story
          </NavLink>
        </ul>
      </nav>
      <ShoppingBag bag={bag} />
    </header>
  );
};

Header.propTypes = {
  bag: PropTypes.array,
};

export default Header;
