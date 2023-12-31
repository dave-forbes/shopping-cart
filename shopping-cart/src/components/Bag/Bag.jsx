import { useOutletContext } from "react-router-dom";
import styles from "./Bag.module.css";
import QuantitySelect from "../QuantitySelect/QuantitySelect";
import Trash from "../../assets/svg/Trash";

const Bag = () => {
  const [bag, setBag, screenSize, bagTotal] = useOutletContext();

  const removeFromBag = (product) => {
    const bagCopy = [...bag];
    const index = bagCopy.findIndex((item) => item.id === product.id);
    bagCopy.splice(index, 1);
    setBag(bagCopy);
  };

  const addOne = (product) => {
    const bagCopy = [...bag];
    const foundProduct = bagCopy.find((item) => item.id === product.id);
    foundProduct.quantity = foundProduct.quantity + 1;
    setBag(bagCopy);
  };

  const removeOne = (product) => {
    const bagCopy = [...bag];
    const foundProduct = bagCopy.find((item) => item.id === product.id);
    foundProduct.quantity > 0
      ? (foundProduct.quantity = foundProduct.quantity - 1)
      : (foundProduct.quantity = 0);
    setBag(bagCopy);
  };

  const updateQuantity = (product, newQuantity) => {
    if (!newQuantity || newQuantity > 50) newQuantity = 0;
    const bagCopy = [...bag];
    const foundProduct = bagCopy.find((item) => item.id === product.id);
    foundProduct.quantity = newQuantity;
    setBag(bagCopy);
  };

  const calcSubtotal = (price, quantity) => {
    const total = price * quantity;
    return total.toFixed(2);
  };

  return (
    <section className={styles.displayBag}>
      <h2 className={styles.h2}>Your Bag ({bagTotal})</h2>
      {bagTotal === 0 ? (
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
                <th>Remove</th>
              </tr>
            </thead>
            {bag.map((product) => (
              <tbody key={product.id} className={styles.item}>
                {screenSize.desktop && (
                  <tr>
                    <td colSpan="5" className={styles.dividerContainer}>
                      <div className={styles.divider}></div>
                    </td>
                  </tr>
                )}
                <tr>
                  <td className={styles.itemDesc}>
                    <img className={styles.img} src={product.imgsrc} />
                    <span className={styles.productName}>{product.name}</span>
                  </td>
                  {screenSize.desktop && (
                    <th>
                      <span className={styles.productPrice}>
                        £{product.price}
                      </span>
                    </th>
                  )}
                  <th>
                    <span>
                      <QuantitySelect
                        quantity={product.quantity}
                        clickAdd={() => addOne(product)}
                        clickSubtract={() => removeOne(product)}
                        onChange={(newQuantity) =>
                          updateQuantity(product, newQuantity)
                        }
                      />
                    </span>
                  </th>
                  <th>
                    <span>
                      £{calcSubtotal(product.price, product.quantity)}
                    </span>
                  </th>
                  <th className={styles.remove}>
                    <div
                      tabIndex="0"
                      onKeyDown={(e) =>
                        e.key === "Enter" ? removeFromBag(product) : ""
                      }
                    >
                      <Trash onClick={() => removeFromBag(product)} />
                    </div>
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
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toFixed(2)}
        </p>
        <button
          onClick={() =>
            bagTotal !== 0
              ? alert("Thanks for shopping with Backpack and Sack!")
              : alert(
                  "No items in bag, please vist our shop before checking out!"
                )
          }
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Bag;
