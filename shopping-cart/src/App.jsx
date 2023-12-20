import "./styles.css";
import Hero from "./components/hero";

export default function App() {
  return (
    <>
      <header>
        <h1>Backpack and Sack</h1>
      </header>
      <nav>
        <ul>
          <a>Home</a>
          <a>Shop All</a>
          <a>Our story</a>
          <a>Our Craft</a>
          <a>Contact</a>
        </ul>
      </nav>
      <section className="hero">
        <Hero />
      </section>
    </>
  );
}
