import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import productData from "../../data/productData.json";
import QuantitySelect from "../QuantitySelect/QuantitySelect";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [bag, setBag] = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  const addToBag = () => {
    const bagCopy = [...bag];
    const duplicate = bagCopy.find((bag) => bag.id === productId);
    if (duplicate) {
      product.quantity = product.quantity + quantity;
    } else {
      product.quantity = quantity;
      bagCopy.push(product);
    }
    setBag(bagCopy);
  };

  const findProduct = (productId) => {
    for (const productItem of productData) {
      if (productItem.id === productId) {
        return productItem;
      }
    }
    return null;
  };

  const updateQuantity = (newQuantity) => {
    if (!newQuantity || newQuantity > 50) newQuantity = 0;
    setQuantity(newQuantity);
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
        <p className={styles.price}>£{product.price}</p>
        <div className={styles.addToBag}>
          <QuantitySelect
            quantity={quantity}
            clickAdd={() => setQuantity(quantity + 1)}
            clickSubtract={() =>
              quantity > 1 ? setQuantity(quantity - 1) : setQuantity(0)
            }
            onChange={(newQuantity) => updateQuantity(newQuantity)}
          />
          <button onClick={() => addToBag()} className={styles.button}>
            Add to Bag
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
