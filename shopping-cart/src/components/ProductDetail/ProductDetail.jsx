import { useEffect, useState } from "react";
import productData from "../../data/productData.json";
import { useParams, useOutletContext } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [bag, setBag] = useOutletContext();

  const addToBag = () => {
    setBag(bag.concat(product));
  };

  const findProduct = (productId) => {
    for (const productItem of productData) {
      if (productItem.id === productId) {
        return productItem;
      }
    }
    return null;
  };

  useEffect(() => {
    setProduct(findProduct(productId));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.section}>
      <img className={styles.img} src={product.imgsrc}></img>
      <div className={styles.details}>
        <h2 className={styles.title}>{product.name}</h2>
        <p>{product.description}</p>
        <p className={styles.price}>{product.price}</p>
        <button onClick={() => addToBag(productId)} className={styles.button}>
          Add to Bag
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
