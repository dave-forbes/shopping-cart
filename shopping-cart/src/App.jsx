import "./styles.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";

export default function App() {
  const [bag, setBag] = useState([]);

  useEffect(() => {
    console.log(bag);
  }, [bag]);

  return (
    <>
      <Header bag={bag} />
      <Outlet context={[bag, setBag]} />
      <Footer />
    </>
  );
}
