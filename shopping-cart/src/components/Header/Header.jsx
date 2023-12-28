import Logo from "../../assets/svg/logo";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import BurgerMenu from "../../assets/svg/BurgerMenu";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ bag }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth < 900 && window.innerWidth > 500
  );
  const [isPhone, setIsPhone] = useState(window.innerWidth < 500);

  const updateScreenSize = () => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
      setIsTablet(false);
      setIsPhone(false);
    } else if (window.innerWidth < 900 && window.innerWidth > 500) {
      setIsDesktop(false);
      setIsTablet(true);
      setIsPhone(false);
    } else if (window.innerWidth < 500) {
      setIsDesktop(false);
      setIsTablet(false);
      setIsPhone(true);
    }
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
          {!isPhone && <Logo />}
        </div>
        {isDesktop ? (
          <>
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
          </>
        ) : (
          ""
        )}
        {(isTablet || isPhone) && <BurgerMenu />}
      </div>
    </header>
  );
};

Header.propTypes = {
  bag: PropTypes.array,
};

export default Header;
