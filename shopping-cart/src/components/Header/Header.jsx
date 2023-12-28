import Logo from "../../assets/svg/logo";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import BurgerMenu from "../../assets/svg/BurgerMenu";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ bag }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  const updateScreenSize = () => {
    setIsDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.headerTitle}>
          <h1>Backpack and Sack</h1>
          <Logo />
        </div>
        {isDesktop ? (
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
        ) : (
          ""
        )}
        <ShoppingBag bag={bag} />
        {!isDesktop && <BurgerMenu />}
      </div>
    </header>
  );
};

Header.propTypes = {
  bag: PropTypes.array,
};

export default Header;
