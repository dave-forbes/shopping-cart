import Add from "../../assets/svg/Add";
import Subtract from "../../assets/svg/Subtract";
import styles from "./QuantitySelect.module.css";
import PropTypes from "prop-types";

const QuantitySelect = ({ quantity, clickAdd, clickSubtract, onChange }) => {
  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <div className={styles.container}>
      <Subtract onClick={clickSubtract} />
      <input
        className={styles.quantity}
        value={quantity}
        onChange={handleInputChange}
      />
      <Add onClick={clickAdd} />
    </div>
  );
};

QuantitySelect.propTypes = {
  quantity: PropTypes.number,
  clickAdd: PropTypes.func,
  clickSubtract: PropTypes.func,
  onChange: PropTypes.func,
};

export default QuantitySelect;
