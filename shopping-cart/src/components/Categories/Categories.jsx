import { NavLink } from "react-router-dom";
import styles from "./Categories.module.css";
import everydayImage from "../../assets/img/small/omar-roque-z5ncx9p6AvM-unsplash small.jpg";
import adventureImage from "../../assets/img/small/holly-mandarich-UVyOfX3v0Ls-unsplash small.jpg";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={everydayImage} alt="Everyday" />
        <div className={styles.div}>
          <NavLink
            className={styles.a}
            to="/shop"
            state={{ category: "everyday" }}
          >
            Shop everyday bags
          </NavLink>
        </div>
      </div>
      <div className={styles.wrapper}>
        <img className={styles.img} src={adventureImage} alt="Adventure" />
        <div className={styles.div}>
          <NavLink
            className={styles.a}
            to="/shop"
            state={{ category: "adventure" }}
          >
            Shop adventure bags
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Categories;
