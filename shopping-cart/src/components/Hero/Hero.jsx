import heroImage from "../../assets/img/original/nguyen-le-viet-anh-POcLQMo2COg-unsplash.jpg";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img src={heroImage}></img>
      <div className={styles.callToAction}>
        <h2>Shop all bags</h2>
        <Link to="/shop">Shop now</Link>
      </div>
    </section>
  );
}
