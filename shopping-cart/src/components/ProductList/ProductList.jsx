import productData from "../../data/productData.json";
import PropTypes from "prop-types";
import styles from "./ProductList.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const shuffleArray = (array) => {
  const arrayCopy = [...array];
  for (let i = 0; i < arrayCopy.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }
  return arrayCopy;
};

const ProductList = ({ category, screenSize }) => {
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [hover, setHover] = useState("");

  useEffect(() => {
    const shuffled = shuffleArray(productData);
    setShuffledProducts(shuffled);
  }, []);

  const filteredProducts = shuffledProducts.filter(
    (item) => item.category === category || category === "all"
  );

  return (
    <>
      {filteredProducts.map((item) => (
        <Link tabIndex="-1" to={`/products/${item.id}`} key={item.id}>
          <div
            key={item.id}
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover("")}
            onFocus={() => setHover(item.id)}
            className={styles.card}
          >
            <img className={styles.img} src={item.imgsrc} alt={item.name} />
            <div
              className={
                hover === item.id || !screenSize.desktop
                  ? styles.overlay
                  : styles.hide
              }
            >
              <p>{item.name}</p>
              <p>£{item.price}</p>
              <button className={styles.moreInfo}>More Info</button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

ProductList.propTypes = {
  category: PropTypes.string,
  screenSize: PropTypes.object,
};

export default ProductList;
