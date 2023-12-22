import productData from "../../data/productData.json";
import PropTypes from "prop-types";
import styles from "./ProductList.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ category }) => {
  const filteredProducts = productData.filter(
    (item) => item.category === category || category === "all"
  );

  const [hover, setHover] = useState("");

  return (
    <>
      {filteredProducts.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <div
            key={item.id}
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover("")}
            className={styles.card}
          >
            <img className={styles.img} src={item.imgsrc} alt={item.name} />
            <div className={hover === item.id ? styles.overlay : styles.hide}>
              <p>{item.name}</p>
              <p>£{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

ProductList.propTypes = {
  category: PropTypes.string,
};

export default ProductList;
