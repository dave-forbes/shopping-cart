import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import styles from "./Shop.module.css";
import { useLocation } from "react-router-dom";

export default function Shop() {
  const [category, setCategory] = useState("all");

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
              className={category === "all" ? styles.focus : ""}
              onClick={() => setCategory("all")}
            >
              All
            </button>
            <button
              className={category === "everyday" ? styles.focus : ""}
              onClick={() => setCategory("everyday")}
            >
              Everyday
            </button>
            <button
              className={category === "adventure" ? styles.focus : ""}
              onClick={() => setCategory("adventure")}
            >
              Adventure
            </button>
          </ul>
        </nav>
        <div className={styles.inventory}>
          <ProductList category={category} />
        </div>
      </div>
    </section>
  );
}
