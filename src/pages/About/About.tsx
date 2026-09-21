import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./About.css";

const highlights = [
  {
    number: "01",
    title: "Experienced Driving",
    description:
      "Travel with a driver who has 8–9 years of driving experience.",
    icon: UserRoundCheck,
  },
  {
    number: "02",
    title: "Comfortable Vehicle",
    description:
      "Our 7-seater Kia Carens is suitable for family, business and group travel.",
    icon: CarFront,
  },
  {
    number: "03",
    title: "24/7 Booking",
    description:
      "Call or WhatsApp us anytime for your local or outstation travel requirements.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Wide Travel Coverage",
    description:
      "Travel across Chhatrapati Sambhajinagar, Maharashtra, interstate destinations and India.",
    icon: Route,
  },
];

const coverage = [
  "Local & City Travel",
  "Ajanta & Ellora Tours",
  "Airport Transfers",
  "One-Way Travel",
  "Round Trips",
  "Family Travel",
  "Wedding Travel",
  "Office & Corporate Travel",
  "Maharashtra Travel",
  "Interstate Travel",
  "All India Travel",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Aai Baba Tours & Travels | Chhatrapati Sambhajinagar
        </title>

        <meta
          name="description"
          content="Learn about Aai Baba Tours & Travels, a car rental and travel service based in Yashwantnagar, Harsul, Chhatrapati Sambhajinagar, offering local, Maharashtra, interstate and all India travel with an experienced driver."
        />

        <link
          rel="canonical"
          href="https://aaibabatoursandtravels.com/about"
        />
      </Helmet>

      <main className="about-page">

        {/* HERO */}

        <section className="about-hero">

          <div className="about-hero__glow about-hero__glow--one" />

          <div className="about-hero__glow about-hero__glow--two" />

          <div className="about-hero__route about-hero__route--one" />

          <div className="about-hero__route about-hero__route--two" />

          <div className="container">

            <div className="about-hero__content">

              <div className="about-hero__eyebrow">
                <span />
                ABOUT AAI BABA TOURS & TRAVELS
              </div>

              <h1>
                Travel With
                <br />
                <span>Confidence.</span>
              </h1>

              <p>
                A local travel service based in Yashwantnagar,
                Harsul, Chhatrapati Sambhajinagar, providing
                comfortable car travel for local, sightseeing,
                outstation and long-distance journeys.
              </p>

              <div className="about-hero__actions">

                <Link
                  to="/contact"
                  className="about-hero__primary"
                >
                  Plan Your Journey
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-hero__secondary"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                </a>

              </div>

            </div>

            <div className="about-hero__visual">

              <div className="about-hero__circle about-hero__circle--outer" />

              <div className="about-hero__circle about-hero__circle--middle" />

              <div className="about-hero__circle about-hero__circle--inner">

                <CarFront
                  size={46}
                  strokeWidth={1.1}
                />

                <span>
                  AAI BABA
                </span>

                <small>
                  TOURS & TRAVELS
                </small>

              </div>

              <div className="about-floating about-floating--one">
                <ShieldCheck size={15} />
                Reliable Travel
              </div>

              <div className="about-floating about-floating--two">
                <Clock3 size={15} />
                24/7 Booking
              </div>

              <div className="about-floating about-floating--three">
                <MapPin size={15} />
                Sambhajinagar
              </div>

            </div>

          </div>
        </section>

        {/* STORY */}

        <section className="about-story section">

          <div className="container">

            <div className="about-story__grid">

              <div className="about-story__heading">

                <div className="about-eyebrow">
                  <span />
                  OUR STORY
                </div>

                <h2>
                  A Simple Idea.
                  <span>
                    Comfortable Travel.
                  </span>
                </h2>

              </div>

              <div className="about-story__content">

                <p>
                  Aai Baba Tours & Travels is a travel service
                  based in Yashwantnagar, Harsul,
                  Chhatrapati Sambhajinagar. We provide
                  comfortable car travel for people who need
                  dependable transportation for local,
                  sightseeing and outstation journeys.
                </p>

                <p>
                  Our focus is simple — make every journey
                  comfortable, convenient and well managed.
                  Whether you are travelling with family,
                  attending a function, going on a pilgrimage
                  or planning a long-distance trip, we aim to
                  provide a smooth travel experience.
                </p>

                <p>
                  With a comfortable 7-seater Kia Carens and
                  an experienced driver, we serve journeys
                  across Chhatrapati Sambhajinagar,
                  Maharashtra and destinations across India.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* STATS */}

        <section className="about-stats">

          <div className="container">

            <div className="about-stats__grid">

              <div className="about-stat">
                <strong>1+</strong>
                <span>Year of Business</span>
              </div>

              <div className="about-stat">
                <strong>8–9</strong>
                <span>Years Driving Experience</span>
              </div>

              <div className="about-stat">
                <strong>7</strong>
                <span>Passenger Seats</span>
              </div>

              <div className="about-stat">
                <strong>24/7</strong>
                <span>Booking Availability</span>
              </div>

            </div>

          </div>

        </section>

        {/* HIGHLIGHTS */}

        <section className="about-highlights section">

          <div className="container">

            <div className="about-section-heading">

              <div>
                <div className="about-eyebrow">
                  <span />
                  WHY TRAVEL WITH US
                </div>

                <h2>
                  Built Around
                  <span>Your Journey.</span>
                </h2>
              </div>

              <p>
                Practical travel service focused on comfort,
                experienced driving and convenient booking.
              </p>

            </div>

            <div className="about-highlights__grid">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="about-highlight"
                    key={item.number}
                  >

                    <div className="about-highlight__top">

                      <span>
                        {item.number}
                      </span>

                      <div>
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </article>
                );
              })}

            </div>

          </div>
        </section>

        {/* VEHICLE */}

        <section className="about-vehicle section">

          <div className="container">

            <div className="about-vehicle__wrapper">

              <div className="about-vehicle__visual">

                <div className="about-vehicle__orbit about-vehicle__orbit--one" />

                <div className="about-vehicle__orbit about-vehicle__orbit--two" />

                <div className="about-vehicle__car-icon">
                  <CarFront
                    size={60}
                    strokeWidth={1}
                  />
                </div>

                <div className="about-vehicle__badge">
                  7 SEATER
                </div>

              </div>

              <div className="about-vehicle__content">

                <div className="about-eyebrow">
                  <span />
                  OUR VEHICLE
                </div>

                <h2>
                  Comfortable
                  <span>For Every Journey.</span>
                </h2>

                <p>
                  Our Kia Carens provides comfortable seating
                  for family and group travel. It is available
                  with an experienced driver for local,
                  sightseeing, outstation and long-distance
                  journeys.
                </p>

                <div className="about-vehicle__features">

                  <div>
                    <CheckCircle2 size={17} />
                    Comfortable 7-seater
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Experienced driver
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Suitable for long journeys
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Local & outstation travel
                  </div>

                </div>

                <Link
                  to="/gallery"
                  className="about-vehicle__button"
                >
                  View Vehicle Photos
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* COVERAGE */}

        <section className="about-coverage section">

          <div className="container">

            <div className="about-section-heading">

              <div>
                <div className="about-eyebrow">
                  <span />
                  TRAVEL COVERAGE
                </div>

                <h2>
                  From Nearby
                  <span>To Far Away.</span>
                </h2>
              </div>

              <p>
                Tell us where you want to go and we can
                discuss the travel arrangements for your
                journey.
              </p>

            </div>

            <div className="about-coverage__list">

              {coverage.map((item) => (
                <div
                  className="about-coverage__item"
                  key={item}
                >
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* LOCATION */}

        <section className="about-location section">

          <div className="container">

            <div className="about-location__wrapper">

              <div className="about-location__icon">
                <MapPin
                  size={28}
                  strokeWidth={1.4}
                />
              </div>

              <div>

                <div className="about-eyebrow">
                  <span />
                  BASED IN CHHATRAPATI SAMBHAJINAGAR
                </div>

                <h2>
                  Yashwantnagar,
                  <span>Harsul.</span>
                </h2>

                <p>
                  Our business is based in Yashwantnagar,
                  Harsul, Chhatrapati Sambhajinagar.
                  Customers can contact us for bookings
                  and travel requirements.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="about-cta">

          <div className="container">

            <div className="about-cta__wrapper">

              <div>

                <span>
                  LET'S PLAN YOUR JOURNEY
                </span>

                <h2>
                  Where Do You
                  <strong>Want To Go?</strong>
                </h2>

                <p>
                  Share your destination and travel
                  requirements with us.
                </p>

              </div>

              <div className="about-cta__actions">

                <a
                  href="tel:9272060443"
                  className="about-cta__call"
                >
                  <Phone size={17} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-cta__whatsapp"
                >
                  <MessageCircle size={17} />
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

export default About;