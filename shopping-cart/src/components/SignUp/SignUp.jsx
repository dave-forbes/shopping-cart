import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <h3>Sign up to our newsletter for updates and offers!</h3>
      <div>
        <input placeholder="Email" type="email" />
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
