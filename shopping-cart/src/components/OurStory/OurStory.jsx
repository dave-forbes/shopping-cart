import foundersPhoto from "../../assets/img/small/alex-azabache-rwCjbjaK-Zs-unsplash small.jpg";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="story-content">
        <img src={foundersPhoto} alt="Founders" className="founders-photo" />
        <div>
          <p>
            Founded with a passion for the great outdoors, Backpack and Sack is
            the brainchild of a group of adventure enthusiasts. We believe in
            the transformative power of exploration and the joy that comes from
            discovering new horizons.
          </p>
          <p>
            Committed to providing the highest quality backpacks, we set out on
            a mission to blend durability, style, and eco-friendliness. As an
            independent small business, we take pride in our craftsmanship and
            environmentally conscious practices.
          </p>
          <p>
            Join us on our journey as we continue to craft backpacks that not
            only accompany you on your adventures but also contribute to a
            greener and more sustainable planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
