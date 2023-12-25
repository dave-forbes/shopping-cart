import Logo from "../../assets/svg/logo";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Header = ({ bag }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolling = scrollTop > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.header} ${scrolling ? styles.scrolled : ""}`}>
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
