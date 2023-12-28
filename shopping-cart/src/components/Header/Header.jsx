import Logo from "../../assets/svg/logo";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/ourstory">Our story</Link>
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
