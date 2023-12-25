import "./styles.css";
import Logo from "./assets/svg/logo";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const [bag, setBag] = useState([]);

  useEffect(() => {
    console.log(bag);
  }, [bag]);

  return (
    <>
      <header>
        <div className="header-title">
          <h1>Backpack and Sack</h1>
          <Logo />
        </div>
        <ShoppingBag bag={bag} />
      </header>
      <nav className="main-nav">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/ourstory">Our story</Link>
        </ul>
      </nav>
      <Outlet context={[bag, setBag]} />
      <Footer />
    </>
  );
}
