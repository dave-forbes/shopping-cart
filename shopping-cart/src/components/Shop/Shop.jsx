import { useState } from "react";
import ProductList from "../ProductList/ProductList";
import styles from "./Shop.module.css";

export default function Shop() {
  const [category, setCategory] = useState("all");

  return (
    <section className={styles.shopSection}>
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
    </section>
  );
}
