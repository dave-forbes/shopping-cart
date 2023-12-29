import PropTypes from "prop-types";
import ShoppingBagSVG from "../../assets/svg/ShoppingBagSVG";
import styles from "./ShoppingBag.module.css";
import { Link } from "react-router-dom";

export default function ShoppingBag({ bagTotal }) {
  return (
    <Link to="/bag">
      <div className={styles.container}>
        <ShoppingBagSVG className={styles.svg} />
        <div
          className={`${styles.counter} ${bagTotal > 0 ? styles.visible : ""}`}
        >
          {bagTotal}
        </div>
      </div>
    </Link>
  );
}

ShoppingBag.propTypes = {
  bagTotal: PropTypes.number,
};
