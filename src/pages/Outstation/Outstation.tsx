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
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./Outstation.css";

const travelOptions = [
  {
    title: "One Way Travel",
    description:
      "Convenient one-way travel from Chhatrapati Sambhajinagar to your destination.",
  },
  {
    title: "Round Trip",
    description:
      "Plan a comfortable return journey for family, personal or business travel.",
  },
  {
    title: "Multi-Day Travel",
    description:
      "Keep the car with you for multi-day trips and explore multiple destinations.",
  },
];

const destinations = [
  "Pune",
  "Mumbai",
  "Nashik",
  "Shirdi",
  "Nagpur",
  "Nanded",
  "Beed",
  "Kolhapur",
  "Solapur",
  "Mahabaleshwar",
  "Goa",
  "Ahmedabad",
  "Indore",
  "Ujjain",
  "Hyderabad",
];

const Outstation = () => {
  return (
    <>
      <Helmet>
        <title>
          Outstation Car Rental from Chhatrapati Sambhajinagar |
          Aai Baba Tours & Travels
        </title>

        <meta
          name="description"
          content="Book outstation car travel from Chhatrapati Sambhajinagar for Maharashtra, interstate and all India journeys. One-way, round-trip and multi-day travel with an experienced driver."
        />

        <link
          rel="canonical"
          href="https://aaibabatoursandtravels.com/outstation"
        />
      </Helmet>

      <main className="outstation-page">

        {/* HERO */}

        <section className="outstation-hero">
          <div className="outstation-hero__route outstation-hero__route--one" />
          <div className="outstation-hero__route outstation-hero__route--two" />

          <div className="outstation-hero__glow outstation-hero__glow--one" />
          <div className="outstation-hero__glow outstation-hero__glow--two" />

          <div className="container">
            <div className="outstation-hero__grid">

              <div className="outstation-hero__content">

                <div className="outstation-hero__eyebrow">
                  <span />
                  OUTSTATION TRAVEL
                </div>

                <h1>
                  Go Beyond
                  <br />
                  <span>The City.</span>
                </h1>

                <p>
                  Comfortable outstation car travel from
                  Chhatrapati Sambhajinagar to destinations
                  across Maharashtra, interstate locations
                  and India.
                </p>

                <div className="outstation-hero__actions">

                  <a
                    href="tel:9272060443"
                    className="outstation-hero__primary"
                  >
                    <Phone size={17} />
                    Call to Book
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="https://wa.me/918208661292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outstation-hero__secondary"
                  >
                    <MessageCircle size={17} />
                    WhatsApp
                  </a>

                </div>

              </div>

              <div className="outstation-hero__visual">

                <div className="outstation-hero__visual-card">

                  <div className="outstation-hero__visual-top">
                    <span>YOUR JOURNEY</span>

                    <Route
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="outstation-route">

                    <div className="outstation-route__point">
                      <span className="outstation-route__dot" />

                      <div>
                        <small>STARTING FROM</small>
                        <strong>
                          Chhatrapati Sambhajinagar
                        </strong>
                      </div>
                    </div>

                    <div className="outstation-route__line">
                      <span />
                    </div>

                    <div className="outstation-route__point">
                      <span className="outstation-route__dot outstation-route__dot--end" />

                      <div>
                        <small>YOUR DESTINATION</small>
                        <strong>
                          Maharashtra & India
                        </strong>
                      </div>
                    </div>

                  </div>

                  <div className="outstation-hero__visual-bottom">
                    <span>
                      <CarFront size={15} />
                      7-Seater Kia Carens
                    </span>

                    <span>
                      <Clock3 size={15} />
                      24/7 Booking
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className="outstation-intro section">

          <div className="container">

            <div className="outstation-intro__grid">

              <div>
                <div className="outstation-section-eyebrow">
                  <span />
                  COMFORTABLE LONG-DISTANCE TRAVEL
                </div>

                <h2>
                  Your Journey,
                  <span> Your Way.</span>
                </h2>
              </div>

              <div>
                <p>
                  Whether you are travelling for a family
                  function, pilgrimage, business trip,
                  holiday or personal work, Aai Baba Tours
                  & Travels provides comfortable car travel
                  with an experienced driver.
                </p>

                <p>
                  Choose one-way, round-trip or multi-day
                  travel according to your requirements.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* TRAVEL OPTIONS */}

        <section className="outstation-options section">

          <div className="container">

            <div className="outstation-heading">

              <div>
                <div className="outstation-section-eyebrow">
                  <span />
                  TRAVEL OPTIONS
                </div>

                <h2>
                  Choose Your
                  <span> Journey Type.</span>
                </h2>
              </div>

              <p>
                Flexible travel options for different
                journey requirements.
              </p>

            </div>

            <div className="outstation-options__grid">

              {travelOptions.map((option, index) => (
                <article
                  className="outstation-option"
                  key={option.title}
                >
                  <div className="outstation-option__number">
                    0{index + 1}
                  </div>

                  <h3>{option.title}</h3>

                  <p>{option.description}</p>

                  <CheckCircle2
                    size={20}
                    strokeWidth={1.5}
                  />
                </article>
              ))}

            </div>

          </div>

        </section>

        {/* WHY OUTSTATION */}

        <section className="outstation-benefits section">

          <div className="container">

            <div className="outstation-benefits__wrapper">

              <div className="outstation-benefits__content">

                <div className="outstation-section-eyebrow">
                  <span />
                  WHY TRAVEL WITH US
                </div>

                <h2>
                  Comfortable Travel
                  <span> From Start to Finish.</span>
                </h2>

                <p>
                  We focus on making long-distance journeys
                  comfortable, simple and dependable.
                </p>

                <Link
                  to="/contact"
                  className="outstation-benefits__button"
                >
                  Plan Your Journey
                  <ArrowRight size={16} />
                </Link>

              </div>

              <div className="outstation-benefits__list">

                <div className="outstation-benefit">
                  <div>
                    <ShieldCheck size={21} />
                  </div>

                  <span>
                    Experienced driver with 8–9 years
                    of driving experience
                  </span>
                </div>

                <div className="outstation-benefit">
                  <div>
                    <CarFront size={21} />
                  </div>

                  <span>
                    Comfortable 7-seater Kia Carens
                    for family and group travel
                  </span>
                </div>

                <div className="outstation-benefit">
                  <div>
                    <Clock3 size={21} />
                  </div>

                  <span>
                    Booking assistance available
                    24 hours
                  </span>
                </div>

                <div className="outstation-benefit">
                  <div>
                    <Route size={21} />
                  </div>

                  <span>
                    Local, Maharashtra, interstate
                    and all India travel
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* DESTINATIONS */}

        <section className="outstation-destinations section">

          <div className="container">

            <div className="outstation-heading">

              <div>
                <div className="outstation-section-eyebrow">
                  <span />
                  POPULAR ROUTES
                </div>

                <h2>
                  Where Can We
                  <span> Take You?</span>
                </h2>
              </div>

              <Link
                to="/destinations"
                className="outstation-heading__link"
              >
                View All Destinations
                <ArrowRight size={15} />
              </Link>

            </div>

            <div className="outstation-destinations__list">

              {destinations.map((destination) => (
                <span
                  key={destination}
                  className="outstation-destination"
                >
                  <MapPin size={14} />
                  {destination}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="outstation-cta">

          <div className="container">

            <div className="outstation-cta__wrapper">

              <div>
                <span>
                  READY FOR THE ROAD?
                </span>

                <h2>
                  Tell Us Your
                  <strong> Destination.</strong>
                </h2>

                <p>
                  Share your travel plan and let us help
                  you arrange your journey.
                </p>
              </div>

              <div className="outstation-cta__actions">

                <a
                  href="tel:9272060443"
                  className="outstation-cta__call"
                >
                  <Phone size={17} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outstation-cta__whatsapp"
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

export default Outstation;