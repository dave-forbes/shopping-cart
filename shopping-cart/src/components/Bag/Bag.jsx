import { useOutletContext } from "react-router-dom";
import styles from "./Bag.module.css";

const Bag = () => {
  const [bag, setBag] = useOutletContext();

  const removeFromBag = (product) => {
    const bagCopy = [...bag];
    const foundProduct = bagCopy.find((item) => item.id === product.id);
    foundProduct.quantity = foundProduct.quantity - 1;
    if (foundProduct.quantity === 0) {
      const index = bagCopy.findIndex((item) => item.id === foundProduct.id);
      bagCopy.splice(index, 1);
    }
    setBag(bagCopy);
  };

  const calcSubtotal = (price, quantity) => {
    const total = price * quantity;
    return total.toFixed(2);
  };

  return (
    <section className={styles.displayBag}>
      <h2 className={styles.h2}>Your Bag ({bag.length})</h2>
      {bag.length === 0 ? (
        <p className={styles.emptyBag}>Your bag is empty.</p>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.itemHeader}>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            {bag.map((product) => (
              <tbody key={product.id} className={styles.item}>
                <tr>
                  <td colSpan="5" className={styles.dividerContainer}>
                    <div className={styles.divider}></div>
                  </td>
                </tr>
                <tr>
                  <td className={styles.itemDesc}>
                    <img className={styles.img} src={product.imgsrc} />
                    <span className={styles.productName}>{product.name}</span>
                  </td>
                  <th>
                    <span className={styles.productPrice}>
                      £{product.price}
                    </span>
                  </th>
                  <th>
                    <span>{product.quantity}</span>
                  </th>
                  <th>
                    <span>
                      £{calcSubtotal(product.price, product.quantity)}
                    </span>
                  </th>
                  <th className={styles.remove}>
                    <button onClick={() => removeFromBag(product)}>
                      Remove
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
      <div className={styles.summary}>
        <p className={styles.total}>
          Order Total: £
          {bag
            .reduce((curr, acc) => curr + acc.price * acc.quantity, 0)
            .toFixed(2)}
        </p>
        <button
          onClick={() => alert("Thanks for shopping with Backpack and Sack!")}
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Bag;
