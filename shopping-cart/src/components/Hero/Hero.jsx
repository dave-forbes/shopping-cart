import heroImage from "../../assets/img/original/nguyen-le-viet-anh-POcLQMo2COg-unsplash.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImage}></img>
      <div className="call-to-action">
        <h2>Shop all bags</h2>
        <Link to="/shop">Shop now</Link>
      </div>
    </section>
  );
}
