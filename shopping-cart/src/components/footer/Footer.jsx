import SignUp from "../SignUp/SignUp";
import styles from "./Footer.module.css";
import Copyright from "../../assets/svg/Copyright";

const Footer = () => {
  return (
    <footer>
      <SignUp onClick={() => alert("Thanks for signing up!")} />
      <div className={styles.info}>
        <div>
          <h3>Customer Service</h3>
          <div className={styles.links}>
            <a>Contact us</a>
            <a>Shippng Details</a>
            <a>Returns & Refunds</a>
            <a>Terms of Service</a>
            <a>Refund Policy</a>
          </div>
        </div>
        <div>
          <h3>Information</h3>
          <div className={styles.links}>
            <a>About us</a>
            <a>Follow us</a>
            <a>Blogs</a>
          </div>
        </div>
      </div>
      <p className={styles.legal}>
        <Copyright />
        BackpackandSack 2023 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
