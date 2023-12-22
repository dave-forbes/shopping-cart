import PropTypes from "prop-types";
import ShoppingBagSVG from "../../assets/svg/ShoppingBagSVG";
import styles from "./ShoppingBag.module.css";
import { Link } from "react-router-dom";

export default function ShoppingBag({ bag }) {
  return (
    <Link to="/bag">
      <div className={styles.container}>
        <ShoppingBagSVG className={styles.svg} />
        <div className={styles.counter}>{bag.length}</div>
      </div>
    </Link>
  );
}

ShoppingBag.propTypes = {
  bag: PropTypes.array,
};
