import Add from "../../assets/svg/Add";
import Subtract from "../../assets/svg/Subtract";
import styles from "./QuantitySelect.module.css";
import PropTypes from "prop-types";

const QuantitySelect = ({ quantity, clickAdd, clickSubtract }) => {
  return (
    <div className={styles.container}>
      <Subtract onClick={clickSubtract} />
      <span className={styles.quantity}>{quantity}</span>
      <Add onClick={clickAdd} />
    </div>
  );
};

QuantitySelect.propTypes = {
  quantity: PropTypes.number,
};

export default QuantitySelect;
