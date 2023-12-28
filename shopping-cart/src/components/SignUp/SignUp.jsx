import styles from "./SignUp.module.css";
import PropTypes from "prop-types";

const SignUp = ({ onClick }) => {
  return (
    <div className={styles.signUp}>
      <h3>Sign up to our newsletter for updates and offers!</h3>
      <div>
        <input placeholder="Email" type="email" />
        <button onClick={onClick}>Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;

SignUp.propTypes = {
  onClick: PropTypes.func,
};
