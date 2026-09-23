import {
  ArrowDownRight,
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  Compass,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./Outstation.css";

const travelOptions = [
  {
    number: "01",
    icon: Navigation,
    title: "One Way Travel",
    shortTitle: "One Way",
    description:
      "Convenient one-way travel from Chhatrapati Sambhajinagar to your destination.",
    tag: "FLEXIBLE",
  },
  {
    number: "02",
    icon: Route,
    title: "Round Trip",
    shortTitle: "Round Trip",
    description:
      "Plan a comfortable return journey for family, personal or business travel.",
    tag: "POPULAR",
  },
  {
    number: "03",
    icon: Compass,
    title: "Multi-Day Travel",
    shortTitle: "Multi-Day",
    description:
      "Keep the car with you for multi-day trips and explore multiple destinations.",
    tag: "LONG JOURNEY",
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

const routeCards = [
  {
    from: "Chhatrapati Sambhajinagar",
    to: "Pune",
    type: "Maharashtra",
  },
  {
    from: "Chhatrapati Sambhajinagar",
    to: "Mumbai",
    type: "Maharashtra",
  },
  {
    from: "Chhatrapati Sambhajinagar",
    to: "Goa",
    type: "Long Distance",
  },
  {
    from: "Chhatrapati Sambhajinagar",
    to: "Shirdi",
    type: "Religious Journey",
  },
  {
    from: "Chhatrapati Sambhajinagar",
    to: "Hyderabad",
    type: "Interstate",
  },
  {
    from: "Chhatrapati Sambhajinagar",
    to: "Ahmedabad",
    type: "Interstate",
  },
];

const coverage = [
  {
    number: "01",
    title: "Maharashtra",
    text: "Travel across cities, towns, hill stations, religious destinations and more.",
  },
  {
    number: "02",
    title: "Interstate",
    text: "Comfortable long-distance journeys beyond Maharashtra.",
  },
  {
    number: "03",
    title: "All India",
    text: "Plan extended journeys across India with your travel requirements.",
  },
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
        {/* =========================
            HERO
        ========================= */}

        <section className="outstation-hero">
          <div
            className="outstation-hero__glow outstation-hero__glow--one"
            aria-hidden="true"
          />

          <div
            className="outstation-hero__glow outstation-hero__glow--two"
            aria-hidden="true"
          />

          <div
            className="outstation-hero__route outstation-hero__route--one"
            aria-hidden="true"
          />

          <div
            className="outstation-hero__route outstation-hero__route--two"
            aria-hidden="true"
          />

          <div
            className="outstation-hero__route outstation-hero__route--three"
            aria-hidden="true"
          />

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

                <div className="outstation-hero__trust">
                  <div>
                    <CheckCircle2 size={15} />
                    <span>Experienced Driver</span>
                  </div>

                  <div>
                    <Clock3 size={15} />
                    <span>24-Hour Booking</span>
                  </div>

                  <div>
                    <CarFront size={15} />
                    <span>7-Seater Comfort</span>
                  </div>
                </div>
              </div>

              {/* HERO JOURNEY VISUAL */}
              <div className="outstation-hero__visual">
                <div className="outstation-network">
                  <div className="outstation-network__rings">
                    <span />
                    <span />
                    <span />
                  </div>

                  <svg
                    className="outstation-network__svg"
                    viewBox="0 0 560 470"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M92 326 C145 238 188 154 278 106"
                    />
                    <path
                      d="M278 106 C360 96 430 130 469 207"
                    />
                    <path
                      d="M469 207 C450 300 370 355 278 365"
                    />
                    <path
                      d="M278 365 C190 366 126 355 92 326"
                    />
                  </svg>

                  <span className="outstation-network__particle outstation-network__particle--one" />
                  <span className="outstation-network__particle outstation-network__particle--two" />
                  <span className="outstation-network__particle outstation-network__particle--three" />

                  <div className="outstation-node outstation-node--start">
                    <span />
                    <div>
                      <small>START</small>
                      <strong>Sambhajinagar</strong>
                    </div>
                  </div>

                  <div className="outstation-node outstation-node--north">
                    <span />
                    <div>
                      <small>NORTH</small>
                      <strong>Maharashtra</strong>
                    </div>
                  </div>

                  <div className="outstation-node outstation-node--west">
                    <span />
                    <div>
                      <small>BEYOND</small>
                      <strong>Interstate</strong>
                    </div>
                  </div>

                  <div className="outstation-node outstation-node--south">
                    <span />
                    <div>
                      <small>EXTENDED</small>
                      <strong>All India</strong>
                    </div>
                  </div>

                  <div className="outstation-network__hub">
                    <div className="outstation-network__hub-ring" />

                    <div className="outstation-network__hub-icon">
                      <CarFront
                        size={36}
                        strokeWidth={1.4}
                      />
                    </div>

                    <strong>AAI BABA</strong>

                    <span>TRAVEL HUB</span>
                  </div>

                  <div className="outstation-network__badge">
                    <Sparkles size={13} />
                    <div>
                      <strong>YOUR JOURNEY</strong>
                      <small>
                        Local → Maharashtra → India
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="outstation-hero__bottom">
              <span>STARTING FROM</span>

              <strong>
                Chhatrapati Sambhajinagar
              </strong>

              <i />

              <span>TRAVEL COVERAGE</span>

              <strong>
                Maharashtra • Interstate • All India
              </strong>

              <ArrowDownRight size={17} />
            </div>
          </div>
        </section>

        {/* =========================
            INTRO / STATS
        ========================= */}

        <section className="outstation-intro section">
          <div className="container">
            <div className="outstation-intro__top">
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

              <div className="outstation-intro__copy">
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

            <div className="outstation-stats">
              <div className="outstation-stat">
                <strong>7</strong>
                <span>Seats</span>
                <small>Comfortable Kia Carens</small>
              </div>

              <div className="outstation-stat">
                <strong>8–9</strong>
                <span>Years</span>
                <small>Driving Experience</small>
              </div>

              <div className="outstation-stat">
                <strong>24</strong>
                <span>Hours</span>
                <small>Booking Availability</small>
              </div>

              <div className="outstation-stat">
                <strong>∞</strong>
                <span>Journeys</span>
                <small>Across Maharashtra & India</small>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            TRAVEL OPTIONS
        ========================= */}

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
              {travelOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <article
                    className="outstation-option"
                    key={option.title}
                  >
                    <div className="outstation-option__glow" />

                    <div className="outstation-option__top">
                      <span className="outstation-option__number">
                        {option.number}
                      </span>

                      <span className="outstation-option__tag">
                        {option.tag}
                      </span>
                    </div>

                    <div className="outstation-option__icon">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3>{option.title}</h3>

                    <p>{option.description}</p>

                    <div className="outstation-option__bottom">
                      <span>PLAN THIS JOURNEY</span>
                      <ArrowRight size={15} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================
            LONG JOURNEY SECTION
        ========================= */}

        <section className="outstation-experience section">
          <div className="container">
            <div className="outstation-experience__wrapper">
              <div className="outstation-experience__visual">
                <div className="outstation-experience__road">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="outstation-experience__car">
                  <CarFront
                    size={55}
                    strokeWidth={1.25}
                  />
                </div>

                <div className="outstation-experience__distance">
                  <small>JOURNEY MODE</small>
                  <strong>LONG DISTANCE</strong>
                  <span>
                    Comfortable travel from start to finish
                  </span>
                </div>

                <div className="outstation-experience__point outstation-experience__point--one">
                  <span />
                  Sambhajinagar
                </div>

                <div className="outstation-experience__point outstation-experience__point--two">
                  <span />
                  Destination
                </div>
              </div>

              <div className="outstation-experience__content">
                <div className="outstation-section-eyebrow">
                  <span />
                  BUILT FOR LONG JOURNEYS
                </div>

                <h2>
                  Travel Far.
                  <span> Travel Comfortably.</span>
                </h2>

                <p>
                  Long-distance travel should feel simple.
                  With a comfortable 7-seater Kia Carens
                  and an experienced driver, your journey
                  can be planned around your destination
                  and travel requirements.
                </p>

                <div className="outstation-experience__features">
                  <div>
                    <div>
                      <ShieldCheck size={19} />
                    </div>

                    <span>
                      Experienced driver with 8–9 years
                      of driving experience
                    </span>
                  </div>

                  <div>
                    <div>
                      <CarFront size={19} />
                    </div>

                    <span>
                      Comfortable 7-seater Kia Carens
                      for family and group travel
                    </span>
                  </div>

                  <div>
                    <div>
                      <Clock3 size={19} />
                    </div>

                    <span>
                      Booking assistance available
                      24 hours
                    </span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="outstation-experience__button"
                >
                  Plan Your Journey
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            POPULAR ROUTES
        ========================= */}

        <section className="outstation-routes section">
          <div className="container">
            <div className="outstation-heading">
              <div>
                <div className="outstation-section-eyebrow">
                  <span />
                  POPULAR ROUTES
                </div>

                <h2>
                  Start From Here,
                  <span> Go Anywhere.</span>
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

            <div className="outstation-route-grid">
              {routeCards.map((route) => (
                <article
                  className="outstation-route-card"
                  key={`${route.from}-${route.to}`}
                >
                  <div className="outstation-route-card__top">
                    <span>{route.type}</span>
                    <Navigation size={15} />
                  </div>

                  <div className="outstation-route-card__journey">
                    <div>
                      <small>FROM</small>
                      <strong>
                        Chhatrapati Sambhajinagar
                      </strong>
                    </div>

                    <div className="outstation-route-card__line">
                      <span />
                    </div>

                    <div>
                      <small>TO</small>
                      <strong>{route.to}</strong>
                    </div>
                  </div>

                  <div className="outstation-route-card__bottom">
                    <span>OUTSTATION TRAVEL</span>
                    <ArrowRight size={15} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            COVERAGE
        ========================= */}

        <section className="outstation-coverage section">
          <div className="container">
            <div className="outstation-coverage__wrapper">
              <div className="outstation-coverage__heading">
                <div className="outstation-section-eyebrow">
                  <span />
                  TRAVEL COVERAGE
                </div>

                <h2>
                  One Starting Point.
                  <span> Many Directions.</span>
                </h2>

                <p>
                  Travel from Chhatrapati Sambhajinagar
                  for local, Maharashtra-wide, interstate
                  and all-India journeys.
                </p>
              </div>

              <div className="outstation-coverage__visual">
                <div className="coverage-center">
                  <MapPin size={20} />
                  <strong>Sambhajinagar</strong>
                  <small>YOUR STARTING POINT</small>
                </div>

                <span className="coverage-line coverage-line--one" />
                <span className="coverage-line coverage-line--two" />
                <span className="coverage-line coverage-line--three" />

                <span className="coverage-node coverage-node--one">
                  Maharashtra
                </span>

                <span className="coverage-node coverage-node--two">
                  Interstate
                </span>

                <span className="coverage-node coverage-node--three">
                  All India
                </span>
              </div>

              <div className="outstation-coverage__cards">
                {coverage.map((item) => (
                  <article
                    className="outstation-coverage-card"
                    key={item.number}
                  >
                    <span>{item.number}</span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            DESTINATIONS
        ========================= */}

        <section className="outstation-destinations section">
          <div className="container">
            <div className="outstation-heading">
              <div>
                <div className="outstation-section-eyebrow">
                  <span />
                  MORE DESTINATIONS
                </div>

                <h2>
                  Where Can We
                  <span> Take You?</span>
                </h2>
              </div>
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

            <div className="outstation-destinations__note">
              <Sparkles size={16} />

              <span>
                Have another destination in mind?
                Contact us with your travel plan.
              </span>

              <Link to="/contact">
                Contact Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================= */}

        <section className="outstation-cta">
          <div className="container">
            <div className="outstation-cta__wrapper">
              <div className="outstation-cta__network">
                <span />
                <span />
                <span />
              </div>

              <div className="outstation-cta__content">
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