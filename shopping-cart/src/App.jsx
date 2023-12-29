import "./styles.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";

export default function App() {
  const [bag, setBag] = useState([]);
  const [screenSize, setScreenSize] = useState({
    desktop: true,
    tablet: false,
    mobile: false,
  });

  const bagTotal = bag.reduce((acc, curr) => acc + curr.quantity, 0);

  const updateScreenSize = () => {
    let screenSizeCopy = { ...screenSize };
    if (window.innerWidth > 900) {
      screenSizeCopy = { desktop: true, tablet: false, mobile: false };
      setScreenSize(screenSizeCopy);
    } else if (window.innerWidth < 900 && window.innerWidth > 500) {
      screenSizeCopy = { desktop: false, tablet: true, mobile: false };
      setScreenSize(screenSizeCopy);
    } else if (window.innerWidth < 500) {
      screenSizeCopy = { desktop: false, tablet: false, mobile: true };
      setScreenSize(screenSizeCopy);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  return (
    <>
      <Header screenSize={screenSize} bag={bag} bagTotal={bagTotal} />
      <Outlet context={[bag, setBag, screenSize, bagTotal]} />
      <Footer />
    </>
  );
}
