import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Compass,
  MapPin,
  Phone,
  Route,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  destinationCategories,
  type DestinationCategory,
} from "./destinationsData";

import "./Destinations.css";

type DestinationImageProps = {
  category: DestinationCategory;
  image: string;
  name: string;
};

const DestinationImage = ({
  category,
  image,
  name,
}: DestinationImageProps) => {
  const [src, setSrc] = useState(
    image || category.fallbackImage,
  );

  const [usingFallback, setUsingFallback] =
    useState(!image);

  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (!usingFallback) {
      setSrc(category.fallbackImage);
      setUsingFallback(true);
      return;
    }

    setFailed(true);
  };

  if (failed) {
    return (
      <div className="destination-card__placeholder">
        <Compass
          size={30}
          strokeWidth={1.3}
        />

        <span>
          {name}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={
        usingFallback
          ? `${category.title} travel`
          : `${name} destination`
      }
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
};

const Destinations = () => {
  return (
    <>
      <Helmet>
        <title>
          Travel Destinations from Chhatrapati Sambhajinagar |
          Aai Baba Tours & Travels
        </title>

        <meta
          name="description"
          content="Explore travel destinations from Chhatrapati Sambhajinagar including Ajanta, Ellora, Maharashtra cities, religious destinations, hill stations, Konkan beaches and interstate journeys."
        />

        <link
          rel="canonical"
          href="https://aaibabatoursandtravels.com/destinations"
        />
      </Helmet>

      <main className="destinations-page">

        {/* HERO */}

        <section className="destinations-hero">

          <div className="destinations-hero__glow destinations-hero__glow--one" />

          <div className="destinations-hero__glow destinations-hero__glow--two" />

          <div className="destinations-hero__route destinations-hero__route--one" />

          <div className="destinations-hero__route destinations-hero__route--two" />

          <div className="container">

            <div className="destinations-hero__content">

              <div className="destinations-hero__eyebrow">
                <span />
                DESTINATION COLLECTION
              </div>

              <h1>
                Where Will
                <br />
                You <span>Go Next?</span>
              </h1>

              <p>
                Discover comfortable journeys from
                Chhatrapati Sambhajinagar to heritage sites,
                religious destinations, cities, hill stations,
                beaches and destinations across India.
              </p>

              <div className="destinations-hero__actions">

                <a
                  href="#destination-categories"
                  className="destinations-hero__primary"
                >
                  Explore Destinations
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/contact"
                  className="destinations-hero__secondary"
                >
                  Plan Your Journey
                  <Route size={16} />
                </Link>

              </div>

              <div className="destinations-hero__stats">

                <div>
                  <strong>Local</strong>
                  <span>Sambhajinagar</span>
                </div>

                <div>
                  <strong>Maharashtra</strong>
                  <span>Intercity Travel</span>
                </div>

                <div>
                  <strong>All India</strong>
                  <span>Long Distance</span>
                </div>

              </div>

            </div>

            <div className="destinations-hero__visual">

              <div className="destinations-orbit destinations-orbit--outer">
                <span />
                <span />
                <span />
              </div>

              <div className="destinations-orbit destinations-orbit--inner">
                <span />
                <span />
              </div>

              <div className="destinations-hero__center">

                <div className="destinations-hero__center-icon">
                  <Compass
                    size={27}
                    strokeWidth={1.4}
                  />
                </div>

                <span>Aai Baba</span>

                <small>
                  TOURS & TRAVELS
                </small>

              </div>

              <div className="destination-floating destination-floating--one">
                <MapPin size={13} />
                Ajanta
              </div>

              <div className="destination-floating destination-floating--two">
                <MapPin size={13} />
                Shirdi
              </div>

              <div className="destination-floating destination-floating--three">
                <MapPin size={13} />
                Goa
              </div>

              <div className="destination-floating destination-floating--four">
                <MapPin size={13} />
                Pune
              </div>

            </div>

          </div>
        </section>

        {/* INTRO */}

        <section className="destinations-intro section">

          <div className="container">

            <div className="destinations-intro__wrapper">

              <div>

                <div className="destinations-section-eyebrow">
                  <span />
                  TRAVEL COVERAGE
                </div>

                <h2>
                  From Nearby
                  <span>To Far Away.</span>
                </h2>

              </div>

              <div className="destinations-intro__content">

                <p>
                  Whether you are planning a short local
                  sightseeing trip, a family pilgrimage,
                  a weekend escape or a long-distance journey,
                  we provide comfortable car travel from
                  Chhatrapati Sambhajinagar.
                </p>

                <div className="destinations-intro__route">

                  <MapPin size={15} />

                  Chhatrapati Sambhajinagar

                  <i />

                  <Route size={15} />

                  Maharashtra & India

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* DESTINATION CATEGORIES */}

        <section
          className="destination-categories section"
          id="destination-categories"
        >

          <div className="container">

            {destinationCategories.map(
              (category) => (

                <section
                  className="destination-category"
                  key={category.id}
                >

                  <div className="destination-category__heading">

                    <div className="destination-category__number">
                      {category.number}
                    </div>

                    <div className="destination-category__title-wrap">

                      <div className="destinations-section-eyebrow">
                        <span />
                        {category.eyebrow}
                      </div>

                      <h2>
                        {category.title}
                      </h2>

                      <p>
                        {category.description}
                      </p>

                    </div>

                  </div>

                  <div className="destination-scroll">

                    {category.destinations.map(
                      (destination) => (

                        <article
                          className="destination-card"
                          key={destination.name}
                        >

                          <div className="destination-card__image">

                            <DestinationImage
                              category={category}
                              image={destination.image}
                              name={destination.name}
                            />

                            <div className="destination-card__shade" />

                            <div className="destination-card__top">

                              <span>
                                {category.number}
                              </span>

                              <MapPin
                                size={15}
                                strokeWidth={1.5}
                              />

                            </div>

                            <div className="destination-card__bottom">

                              <div className="destination-card__type">
                                {destination.subtitle}
                              </div>

                              <h3>
                                {destination.name}
                              </h3>

                              <div className="destination-card__explore">

                                <span>
                                  Explore Journey
                                </span>

                                <ArrowRight
                                  size={15}
                                />

                              </div>

                            </div>

                          </div>

                        </article>

                      ),
                    )}

                  </div>

                  <div className="destination-category__scroll-hint">

                    <span>
                      Swipe to explore
                    </span>

                    <ArrowRight size={13} />

                  </div>

                </section>

              ),
            )}

          </div>

        </section>

        {/* COVERAGE */}

        <section className="destinations-coverage">

          <div className="container">

            <div className="destinations-coverage__wrapper">

              <div className="destinations-coverage__icon">

                <Route
                  size={27}
                  strokeWidth={1.4}
                />

              </div>

              <div>

                <span>
                  TRAVEL BEYOND THE LIST
                </span>

                <h2>
                  Your Destination, Our Journey.
                </h2>

                <p>
                  Planning somewhere not listed above?
                  Contact us for your travel requirements.
                </p>

              </div>

              <div className="destinations-coverage__actions">

                <a href="tel:9272060443">
                  <Phone size={16} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="destinations-coverage__call"
                >
                  WhatsApp
                  <ArrowRight size={15} />
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}

        <section className="destinations-final section">

          <div className="container">

            <div className="destinations-final__wrapper">

              <div>

                <div className="destinations-section-eyebrow">
                  <span />
                  PLAN YOUR NEXT TRIP
                </div>

                <h2>
                  Ready to Start
                  <span>Your Journey?</span>
                </h2>

                <p>
                  Share your destination and travel dates
                  with us and plan your journey.
                </p>

              </div>

              <div className="destinations-final__actions">

                <Link
                  to="/contact"
                  className="destinations-final__primary"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="destinations-final__secondary"
                >
                  WhatsApp Booking
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Destinations;