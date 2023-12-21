import productData from "../data/productData.json";

export default function ShopAll() {
  return (
    <section>
      <h1>Welcome to the shop</h1>
      <nav className="shop-nav">
        <ul>
          <button>All</button>
          <button>Everyday</button>
          <button>Adventure</button>
        </ul>
      </nav>
      <div className="inventory">
        {productData.map((item) => (
          <div key={item.id} className="product-card">
            <img src={"src" + item.imgsrc} />
          </div>
        ))}
      </div>
    </section>
  );
}
