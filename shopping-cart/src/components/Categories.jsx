import everydayImage from "../assets/img/small/omar-roque-z5ncx9p6AvM-unsplash small.jpg";
import adventureImage from "../assets/img/small/holly-mandarich-UVyOfX3v0Ls-unsplash small.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-div">
        <img src={everydayImage} />
        <div className="call-to-action">
          <h2>Shop everyday bags</h2>
          <Link to="/shop">Shop now</Link>
        </div>
      </div>
      <div className="categories-div">
        <img src={adventureImage} />
        <div className="call-to-action">
          <h2>Shop adventure bags</h2>
          <Link to="/shop">Shop now</Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
