import "./styles.css";
import Logo from "./assets/svg/logo";
import Search from "./assets/svg/Search";
import ShoppingBag from "./assets/svg/ShoppingBag";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <div className="header-title">
          <h1>Backpack and Sack</h1>
          <Logo />
        </div>
        <div className="cart-search">
          <Search />
          <ShoppingBag />
        </div>
      </header>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/shopall">Shop all</Link>
          <Link to="/ourstory">Our story</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <div className="info">
          <div>
            <h3>Customer Service</h3>
            <div className="links">
              <a>Contact us</a>
              <a>Shippng Details</a>
              <a>Returns & Refunds</a>
              <a>Terms of Service</a>
              <a>Refund Policy</a>
            </div>
          </div>
          <div>
            <h3>Information</h3>
            <div className="links">
              <a>About us</a>
              <a>Follow us</a>
              <a>Blogs</a>
            </div>
          </div>
        </div>
        <p className="legal">BackpackandSack 2023 All Rights Reserved</p>
      </footer>
    </>
  );
}
