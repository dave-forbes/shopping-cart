import Logo from "../../assets/svg/logo";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import BurgerMenu from "../../assets/svg/BurgerMenu";
import Exit from "../../assets/svg/Exit";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ bag, screenSize }) => {
  const [showmenu, setShowMenu] = useState(false);

  let bagtotal = bag.reduce((curr, acc) => curr + acc.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.headerTitle}>
          <h1>Backpack and Sack</h1>
          {!screenSize.mobile && <Logo />}
        </div>
        {screenSize.desktop ? (
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
        {(screenSize.tablet || screenSize.mobile) && (
          <div className={styles.burger} onClick={() => setShowMenu(true)}>
            <BurgerMenu />
            <div
              className={`${styles.counter} ${
                bagtotal > 0 ? styles.visible : ""
              }`}
            >
              {bagtotal}
            </div>
          </div>
        )}
      </div>
      {showmenu && (
        <div className={styles.menu}>
          <div className={styles.menuTitle}>
            <h1>Backpack and Sack</h1>
            <div className={styles.exit} onClick={() => setShowMenu(false)}>
              <Exit />
            </div>
          </div>
          <nav className={styles.menuNav}>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
                onClick={() => setShowMenu(false)}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/shop"
                onClick={() => setShowMenu(false)}
              >
                Shop
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/ourstory"
                onClick={() => setShowMenu(false)}
              >
                Our story
              </NavLink>
              <NavLink
                id={styles.bag}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/bag"
                onClick={() => setShowMenu(false)}
              >
                Bag
                <div
                  className={`${styles.counter} ${
                    bagtotal > 0 ? styles.visible : ""
                  }`}
                >
                  {bagtotal}
                </div>
              </NavLink>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  bag: PropTypes.array,
  screenSize: PropTypes.object,
};

export default Header;
