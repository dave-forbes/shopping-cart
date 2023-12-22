import { useOutletContext } from "react-router-dom";
import styles from "./Bag.module.css";

const Bag = () => {
  const [bag, setBag] = useOutletContext();

  const removeFromBag = () => {
    setBag("");
  };

  console.log(bag);

  return (
    <div className={styles.displayBag}>
      <h2>Your Bag</h2>
      {bag.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <ul>
          {bag.map((product) => (
            <li key={product.id}>
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productPrice}>{product.price}</span>
              <div onClick={() => removeFromBag()}>X</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bag;
