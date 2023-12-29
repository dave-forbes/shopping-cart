import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import styles from "./Shop.module.css";
import { useLocation, useOutletContext } from "react-router-dom";

export default function Shop() {
  const [category, setCategory] = useState("all");
  const [, , screenSize] = useOutletContext();

  let { state } = useLocation();

  useEffect(() => {
    state ? setCategory(state.category) : setCategory("all");
  }, [state]);

  return (
    <section className={styles.shopSection}>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul>
            <button
              className={category === "all" ? styles.active : ""}
              onClick={() => setCategory("all")}
            >
              All
            </button>
            <button
              className={category === "everyday" ? styles.active : ""}
              onClick={() => setCategory("everyday")}
            >
              Everyday
            </button>
            <button
              className={category === "adventure" ? styles.active : ""}
              onClick={() => setCategory("adventure")}
            >
              Adventure
            </button>
          </ul>
        </nav>
        <div className={styles.inventory}>
          <ProductList category={category} screenSize={screenSize} />
        </div>
      </div>
    </section>
  );
}
