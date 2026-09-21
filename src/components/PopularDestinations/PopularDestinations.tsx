import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import "./PopularDestinations.css";

const destinations = [
  {
    name: "Ajanta Caves",
    subtitle: "Heritage & Sightseeing",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ajanta_Caves_from_Maharashtra_state_of_India.jpg",
    alt: "Ajanta Caves in Maharashtra",
  },
  {
    name: "Shirdi",
    subtitle: "Religious Travel",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kalash_shirdi_temple.jpg",
    alt: "Shirdi Sai Baba Temple",
  },
  {
    name: "Nashik & Trimbakeshwar",
    subtitle: "Religious & Outstation Travel",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Trimbakeshwar_Temple%2C_Nashik.jpg",
    alt: "Trimbakeshwar Temple near Nashik",
  },
];

const PopularDestinations = () => {
  return (
    <section className="popular-destinations section">
      <div className="container">
        <div className="popular-destinations__heading">
          <div>
            <div className="popular-destinations__eyebrow">
              <span />
              POPULAR DESTINATIONS
            </div>

            <h2 className="popular-destinations__title">
              Travel Beyond
              <span> The City.</span>
            </h2>
          </div>

          <p className="popular-destinations__intro">
            Comfortable travel from Chhatrapati Sambhajinagar
            to popular heritage, religious and outstation
            destinations.
          </p>
        </div>

        <div className="popular-destinations__grid">
          {destinations.map((destination) => (
            <article
              className="destination-card"
              key={destination.name}
            >
              <div className="destination-card__image">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  loading="lazy"
                  decoding="async"
                />

                <div className="destination-card__overlay" />

                <div className="destination-card__location">
                  <MapPin size={13} />
                  <span>{destination.subtitle}</span>
                </div>
              </div>

              <div className="destination-card__content">
                <h3>{destination.name}</h3>

                <Link to="/outstation">
                  Explore Journey
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="popular-destinations__bottom">
          <div className="popular-destinations__routes">
            <span>Also available for</span>

            <strong>Lonar</strong>
            <strong>Pune</strong>
            <strong>Mumbai</strong>
            <strong>Nagpur</strong>
            <strong>All Maharashtra</strong>
          </div>

          <Link
            to="/outstation"
            className="popular-destinations__button"
          >
            View All Outstation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;