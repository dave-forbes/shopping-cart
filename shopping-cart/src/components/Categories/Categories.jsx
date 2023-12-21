import everydayImage from "../../assets/img/small/omar-roque-z5ncx9p6AvM-unsplash small.jpg";
import adventureImage from "../../assets/img/small/holly-mandarich-UVyOfX3v0Ls-unsplash small.jpg";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img} src={everydayImage} />
        <div className={styles.div}>
          <h2>Shop everyday bags</h2>
          <Link className={styles.a} to="/shop">
            Shop now
          </Link>
        </div>
      </div>
      <div>
        <img className={styles.img} src={adventureImage} />
        <div className={styles.div}>
          <h2>Shop adventure bags</h2>
          <Link className={styles.a} to="/shop">
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
