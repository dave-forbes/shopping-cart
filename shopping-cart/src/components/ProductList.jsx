import productData from "../data/productData.json";
import PropTypes from "prop-types";

const ProductList = ({ category }) => {
  const filteredProducts = productData.filter(
    (item) => item.category === category || category === "all"
  );

  return (
    <>
      {filteredProducts.map((item) => (
        <div key={item.id} className="product-card">
          <img src={"src" + item.imgsrc} alt={item.name} />
        </div>
      ))}
    </>
  );
};

ProductList.propTypes = {
  category: PropTypes.string,
};

export default ProductList;
