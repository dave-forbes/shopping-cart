import { useOutletContext } from "react-router-dom";
import styles from "./Bag.module.css";

const Bag = () => {
  const [bag, setBag] = useOutletContext();

  const removeFromBag = () => {
    setBag("");
  };

  console.log(bag);

  return (
    <section className={styles.displayBag}>
      <h2 className={styles.h2}>Your Bag ({bag.length})</h2>
      {bag.length === 0 ? (
        <p>Your bag is empty.</p>
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
              <>
                <td colSpan="5" className={styles.dividerContainer}>
                  <div className={styles.divider}></div>
                </td>
                <tbody key={product.id} className={styles.item}>
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
                      <span>1</span>
                    </th>
                    <th>
                      <span>£{product.price}</span>
                    </th>
                    <th className={styles.remove}>
                      <button onClick={() => removeFromBag()}>Remove</button>
                    </th>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      )}
      <div className={styles.summary}>
        <p className={styles.total}>
          Order Total: £
          {bag.reduce((curr, acc) => curr + acc.price, 0).toFixed(2)}
        </p>
        <button>Checkout</button>
      </div>
    </section>
  );
};

export default Bag;
