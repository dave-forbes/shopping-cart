import PropTypes from "prop-types";
import ShoppingBagSVG from "../../assets/svg/ShoppingBagSVG";
import styles from "./ShoppingBag.module.css";

export default function ShoppingBag({ bag }) {
  return (
    <div className={styles.container}>
      <ShoppingBagSVG className={styles.svg} />
      <div className={styles.counter}>{bag.length}</div>
    </div>
  );
}

ShoppingBag.propTypes = {
  bag: PropTypes.array,
};
