import { useState } from "react";
// import shopPhoto from "../assets/img/small/josiah-weiss-8sjBzL1IyMo-unsplash small.jpg";
import ProductList from "../ProductList/ProductList";

export default function Shop() {
  const [category, setCategory] = useState("all");

  return (
    <section>
      {/* <div className="shop-header">
        <p className="shop-text">
          Embark on a journey with our exclusive collection of premium
          backpacks. Crafted with passion and precision, our backpacks
          seamlessly blend style and functionality to accompany you on every
          adventure. From urban escapades to rugged outdoor explorations, find
          the perfect backpack that complements your lifestyle. Explore our
          curated selection and elevate your journey with Backpack and Sack –
          where style meets durability.
        </p>
        <img src={shopPhoto} />
      </div> */}
      <nav className="shop-nav">
        <ul>
          <button
            className={category === "all" ? "focus" : ""}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          <button
            className={category === "everyday" ? "focus" : ""}
            onClick={() => setCategory("everyday")}
          >
            Everyday
          </button>
          <button
            className={category === "adventure" ? "focus" : ""}
            onClick={() => setCategory("adventure")}
          >
            Adventure
          </button>
        </ul>
      </nav>
      <div className="inventory">
        <ProductList category={category} />
      </div>
    </section>
  );
}
