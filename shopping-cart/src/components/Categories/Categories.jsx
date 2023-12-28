import everydayImage from "../../assets/img/small/omar-roque-z5ncx9p6AvM-unsplash small.jpg";
import adventureImage from "../../assets/img/small/holly-mandarich-UVyOfX3v0Ls-unsplash small.jpg";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={everydayImage} />
        <div className={styles.div}>
          <Link
            className={styles.a}
            to="/shop"
            state={{ category: "everyday" }}
          >
            Shop everyday bags
          </Link>
        </div>
      </div>
      <div className={styles.wrapper}>
        <img className={styles.img} src={adventureImage} />
        <div className={styles.div}>
          <Link
            className={styles.a}
            to="/shop"
            state={{ category: "adventure" }}
          >
            Shop adventure bags
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
