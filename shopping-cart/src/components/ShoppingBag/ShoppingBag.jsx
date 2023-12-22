import PropTypes from "prop-types";
import ShoppingBagSVG from "../../assets/svg/ShoppingBagSVG";
import styles from "./ShoppingBag.module.css";
import { Link } from "react-router-dom";

export default function ShoppingBag({ bag }) {
  let bagtotal = bag.reduce((curr, acc) => curr + acc.quantity, 0);

  return (
    <Link to="/bag">
      <div className={styles.container}>
        <ShoppingBagSVG className={styles.svg} />
        {bagtotal > 0 && <div className={styles.counter}>{bagtotal}</div>}
      </div>
    </Link>
  );
}

ShoppingBag.propTypes = {
  bag: PropTypes.array,
};
