import Hero from "../Hero/Hero";
import Categories from "../Categories/Categories";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
      <Categories />
    </section>
  );
}
