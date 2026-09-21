import { ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";

import "./CarShowcase.css";

const CarShowcase = () => {
  return (
    <section className="car-gallery-entry section">
      <div className="container">
        <div className="car-gallery-entry__wrapper">

          <div className="car-gallery-entry__content">
            <div className="car-gallery-entry__eyebrow">
              <span />
              PHOTO GALLERY
            </div>

            <h2 className="car-gallery-entry__title">
              See Our
              <span> Journey.</span>
            </h2>

            <p className="car-gallery-entry__text">
              Take a look at our vehicle, travel moments and
              real journeys through the Aai Baba Tours & Travels
              gallery.
            </p>

            <Link
              to="/gallery"
              className="car-gallery-entry__button"
            >
              View Full Gallery
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="car-gallery-entry__visual">
            <div className="car-gallery-entry__road">
              <span />
              <span />
              <span />
            </div>

            <div className="car-gallery-entry__car-wrap">
              <div className="car-gallery-entry__car">

                <div className="car-gallery-entry__roof">
                  <div className="car-gallery-entry__window car-gallery-entry__window--front" />
                  <div className="car-gallery-entry__window car-gallery-entry__window--back" />
                </div>

                <div className="car-gallery-entry__body">
                  <div className="car-gallery-entry__light car-gallery-entry__light--front" />
                  <div className="car-gallery-entry__light car-gallery-entry__light--back" />

                  <div className="car-gallery-entry__door car-gallery-entry__door--front" />
                  <div className="car-gallery-entry__door car-gallery-entry__door--back" />

                  <div className="car-gallery-entry__handle car-gallery-entry__handle--front" />
                  <div className="car-gallery-entry__handle car-gallery-entry__handle--back" />

                  <div className="car-gallery-entry__bottom-line" />
                </div>

                <div className="car-gallery-entry__wheel car-gallery-entry__wheel--front">
                  <span />
                </div>

                <div className="car-gallery-entry__wheel car-gallery-entry__wheel--back">
                  <span />
                </div>
              </div>
            </div>

            <div className="car-gallery-entry__camera">
              <Camera size={17} />
              <span>Explore Our Photos</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CarShowcase;