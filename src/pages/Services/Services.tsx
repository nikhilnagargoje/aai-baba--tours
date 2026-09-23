import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  Heart,
  MapPinned,
  MessageCircle,
  Mountain,
  Plane,
  Repeat2,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./Services.css";

const services = [
  {
    icon: CarFront,
    number: "01",
    title: "Car Rental with Driver",
    description:
      "Comfortable car rental with an experienced driver for local, outstation and long-distance travel.",
    category: "Everyday Travel",
  },
  {
    icon: MapPinned,
    number: "02",
    title: "Local & City Travel",
    description:
      "Convenient travel within Chhatrapati Sambhajinagar for daily travel, local visits and city requirements.",
    category: "Everyday Travel",
  },
  {
    icon: MapPinned,
    number: "03",
    title: "Local Sightseeing",
    description:
      "Explore Chhatrapati Sambhajinagar and nearby attractions with comfortable point-to-point travel.",
    category: "Sightseeing",
  },
  {
    icon: Mountain,
    number: "04",
    title: "Ajanta Caves Tour",
    description:
      "Comfortable travel from Chhatrapati Sambhajinagar to the historic Ajanta Caves.",
    category: "Sightseeing",
  },
  {
    icon: Mountain,
    number: "05",
    title: "Ellora Caves Tour",
    description:
      "Plan a convenient journey to the famous Ellora Caves and surrounding heritage attractions.",
    category: "Sightseeing",
  },
  {
    icon: Mountain,
    number: "06",
    title: "Ajanta & Ellora Combined Tour",
    description:
      "Travel comfortably to both Ajanta and Ellora with a journey planned around your schedule.",
    category: "Sightseeing",
  },
  {
    icon: Plane,
    number: "07",
    title: "Airport Pickup & Drop",
    description:
      "Reliable airport transfers for individuals, families and business travellers.",
    category: "Special Travel",
  },
  {
    icon: Route,
    number: "08",
    title: "Outstation Car Rental",
    description:
      "Comfortable outstation travel from Chhatrapati Sambhajinagar to destinations across Maharashtra and beyond.",
    category: "Outstation",
  },
  {
    icon: ArrowRight,
    number: "09",
    title: "One Way Travel",
    description:
      "Convenient one-way travel for personal, family, business and relocation requirements.",
    category: "Outstation",
  },
  {
    icon: Repeat2,
    number: "10",
    title: "Round Trip",
    description:
      "Plan return journeys with comfortable travel and flexible trip arrangements.",
    category: "Outstation",
  },
  {
    icon: Route,
    number: "11",
    title: "Intercity Travel",
    description:
      "Travel between cities comfortably for personal, family and professional requirements.",
    category: "Outstation",
  },
  {
    icon: Users,
    number: "12",
    title: "Family Trips",
    description:
      "Comfortable family travel for holidays, visits, functions and outstation journeys.",
    category: "Special Travel",
  },
  {
    icon: Heart,
    number: "13",
    title: "Wedding & Marriage Travel",
    description:
      "Travel support for weddings, marriage functions, guest transportation and family journeys.",
    category: "Special Travel",
  },
  {
    icon: GraduationCap,
    number: "14",
    title: "School & College Trips",
    description:
      "Travel arrangements for educational trips, visits and group journeys.",
    category: "Special Travel",
  },
  {
    icon: BriefcaseBusiness,
    number: "15",
    title: "Office & Corporate Travel",
    description:
      "Professional travel support for meetings, office visits, business trips and corporate requirements.",
    category: "Special Travel",
  },
  {
    icon: CalendarDays,
    number: "16",
    title: "Multi-Day Tours",
    description:
      "Comfortable travel for journeys lasting multiple days with planned routes and destinations.",
    category: "Long Distance",
  },
  {
    icon: MapPinned,
    number: "17",
    title: "Maharashtra Travel",
    description:
      "Travel across Maharashtra for sightseeing, family trips, religious visits and personal journeys.",
    category: "Long Distance",
  },
  {
    icon: Route,
    number: "18",
    title: "Interstate Travel",
    description:
      "Convenient travel between Maharashtra and destinations in other states.",
    category: "Long Distance",
  },
  {
    icon: Globe2,
    number: "19",
    title: "All India Travel",
    description:
      "Long-distance car travel for journeys across India based on your travel requirements.",
    category: "Long Distance",
  },
  {
    icon: CarFront,
    number: "20",
    title: "Kia Carens with Driver",
    description:
      "Comfortable 7-seater Kia Carens with an experienced driver for family and group journeys.",
    category: "Everyday Travel",
  },
];

const categories = [
  {
    number: "01",
    title: "Everyday Travel",
    description:
      "Comfortable local and city travel with a dedicated car and experienced driver.",
    items: services.filter((service) => service.category === "Everyday Travel"),
  },
  {
    number: "02",
    title: "Sightseeing",
    description:
      "Explore Chhatrapati Sambhajinagar, Ajanta, Ellora and nearby attractions.",
    items: services.filter((service) => service.category === "Sightseeing"),
  },
  {
    number: "03",
    title: "Outstation",
    description:
      "One-way, round-trip and intercity travel from Chhatrapati Sambhajinagar.",
    items: services.filter((service) => service.category === "Outstation"),
  },
  {
    number: "04",
    title: "Special Travel",
    description:
      "Travel support for families, airports, weddings, education and business.",
    items: services.filter((service) => service.category === "Special Travel"),
  },
  {
    number: "05",
    title: "Long Distance",
    description:
      "Maharashtra, interstate and All India journeys for longer travel plans.",
    items: services.filter((service) => service.category === "Long Distance"),
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Car Rental & Travel Services in Chhatrapati Sambhajinagar
        </title>

        <meta
          name="description"
          content="Explore Aai Baba Tours & Travels services in Chhatrapati Sambhajinagar including local travel, Ajanta Ellora tours, airport transfers, outstation, wedding, family, corporate and All India travel."
        />

        <link
          rel="canonical"
          href="https://aaibabatoursandtravels.com/services"
        />
      </Helmet>

      <main className="services-page">

        {/* ================= HERO ================= */}

        <section className="services-hero">
          <div className="services-hero__glow services-hero__glow--one" />
          <div className="services-hero__glow services-hero__glow--two" />

          <div className="services-hero__route services-hero__route--one" />
          <div className="services-hero__route services-hero__route--two" />
          <div className="services-hero__route services-hero__route--three" />

          <div className="container services-hero__container">

            <div className="services-hero__content">

              <div className="services-hero__eyebrow">
                <span />
                TRAVEL SERVICES
                <span />
              </div>

              <h1>
                Every Journey
                <br />
                <em>Starts Here.</em>
              </h1>

              <p>
                From everyday city travel to long-distance journeys across
                Maharashtra and India, we make your travel simple, comfortable
                and dependable.
              </p>

              <div className="services-hero__actions">
                <a
                  href="tel:9272060443"
                  className="services-btn services-btn--primary"
                >
                  <Phone size={17} />
                  Call for Booking
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/contact"
                  className="services-btn services-btn--outline"
                >
                  Plan Your Journey
                </Link>
              </div>

              <div className="services-hero__trust">
                <div>
                  <CheckCircle2 size={16} />
                  <span>Experienced Driver</span>
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  <span>7-Seater Comfort</span>
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  <span>24 Hour Booking</span>
                </div>
              </div>

            </div>

            {/* JOURNEY VISUAL */}

            <div className="services-hero__visual">

              <div className="services-orbit services-orbit--outer" />
              <div className="services-orbit services-orbit--middle" />
              <div className="services-orbit services-orbit--inner" />

              <div className="services-orbit__line services-orbit__line--one" />
              <div className="services-orbit__line services-orbit__line--two" />
              <div className="services-orbit__line services-orbit__line--three" />

              <div className="services-hero__hub">
                <div className="services-hero__hub-icon">
                  <CarFront size={29} strokeWidth={1.5} />
                </div>

                <strong>Aai Baba</strong>
                <span>Travel Hub</span>
              </div>

              <div className="services-node services-node--top">
                <MapPinned size={15} />
                <span>Sambhajinagar</span>
              </div>

              <div className="services-node services-node--right">
                <Mountain size={15} />
                <span>Ajanta • Ellora</span>
              </div>

              <div className="services-node services-node--bottom">
                <Route size={15} />
                <span>Outstation</span>
              </div>

              <div className="services-node services-node--left">
                <Globe2 size={15} />
                <span>All India</span>
              </div>

              <div className="services-floating-card services-floating-card--top">
                <Sparkles size={15} />
                <div>
                  <strong>20+</strong>
                  <span>Travel Services</span>
                </div>
              </div>

              <div className="services-floating-card services-floating-card--bottom">
                <ShieldCheck size={16} />
                <div>
                  <strong>Travel With Confidence</strong>
                  <span>Comfort • Care • Convenience</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="services-intro section">
          <div className="container">

            <div className="services-intro__top">

              <div>
                <div className="services-label">
                  <span />
                  WHAT WE OFFER
                </div>

                <h2>
                  One Car.
                  <br />
                  <span>Many Journeys.</span>
                </h2>
              </div>

              <p>
                Whether you are travelling across the city, visiting a
                destination with family or planning a long-distance journey,
                our services are designed around your travel requirement.
              </p>

            </div>

            <div className="services-intro__stats">

              <div>
                <strong>20+</strong>
                <span>Travel Services</span>
              </div>

              <div>
                <strong>7</strong>
                <span>Comfortable Seats</span>
              </div>

              <div>
                <strong>8–9</strong>
                <span>Years Driving Experience</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Booking Availability</span>
              </div>

            </div>

          </div>
        </section>

        {/* ================= SERVICE CATEGORIES ================= */}

        <section className="services-catalog section">

          <div className="container">

            <div className="services-section-heading">
              <div>
                <div className="services-label">
                  <span />
                  OUR SERVICES
                </div>

                <h2>
                  Travel, Your
                  <br />
                  <span>Way.</span>
                </h2>
              </div>

              <p>
                Choose from our range of local, sightseeing, outstation,
                special and long-distance travel services.
              </p>
            </div>

            <div className="services-category-list">

              {categories.map((category) => (
                <div
                  className="services-category"
                  key={category.number}
                >

                  <div className="services-category__intro">

                    <span className="services-category__number">
                      {category.number}
                    </span>

                    <h3>{category.title}</h3>

                    <p>{category.description}</p>

                  </div>

                  <div className="services-category__items">

                    {category.items.map((service) => {
                      const Icon = service.icon;

                      return (
                        <article
                          className="service-card"
                          key={service.number}
                        >

                          <div className="service-card__icon">
                            <Icon size={20} strokeWidth={1.6} />
                          </div>

                          <div className="service-card__content">

                            <div className="service-card__number">
                              {service.number}
                            </div>

                            <h4>{service.title}</h4>

                            <p>{service.description}</p>

                            <Link to="/contact">
                              Enquire
                              <ChevronRight size={14} />
                            </Link>

                          </div>

                        </article>
                      );
                    })}

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= COVERAGE ================= */}

        <section className="services-coverage section">

          <div className="services-coverage__background">
            <div className="coverage-line coverage-line--one" />
            <div className="coverage-line coverage-line--two" />
            <div className="coverage-line coverage-line--three" />
          </div>

          <div className="container">

            <div className="services-coverage__wrapper">

              <div className="services-coverage__content">

                <div className="services-label services-label--light">
                  <span />
                  TRAVEL COVERAGE
                </div>

                <h2>
                  From
                  <br />
                  <em>Chhatrapati Sambhajinagar</em>
                  <br />
                  To Wherever You Go.
                </h2>

                <p>
                  Start your journey from Chhatrapati Sambhajinagar and travel
                  locally, across Maharashtra, between states or anywhere in
                  India.
                </p>

                <Link
                  to="/destinations"
                  className="coverage-btn"
                >
                  Explore Destinations
                  <ArrowRight size={16} />
                </Link>

              </div>

              <div className="services-coverage__map">

                <div className="coverage-map__circle coverage-map__circle--one" />
                <div className="coverage-map__circle coverage-map__circle--two" />
                <div className="coverage-map__circle coverage-map__circle--three" />

                <div className="coverage-map__hub">
                  <MapPinned size={19} />
                  <span>Sambhajinagar</span>
                </div>

                <div className="coverage-destination coverage-destination--one">
                  <span />
                  <strong>Maharashtra</strong>
                </div>

                <div className="coverage-destination coverage-destination--two">
                  <span />
                  <strong>Interstate</strong>
                </div>

                <div className="coverage-destination coverage-destination--three">
                  <span />
                  <strong>All India</strong>
                </div>

                <div className="coverage-route coverage-route--one" />
                <div className="coverage-route coverage-route--two" />
                <div className="coverage-route coverage-route--three" />

              </div>

            </div>

            <div className="coverage-tags">
              <span>Chhatrapati Sambhajinagar</span>
              <span>Ajanta</span>
              <span>Ellora</span>
              <span>Lonar</span>
              <span>Shirdi</span>
              <span>Nashik</span>
              <span>Trimbakeshwar</span>
              <span>Pune</span>
              <span>Mumbai</span>
              <span>Nagpur</span>
              <span>All Maharashtra</span>
              <span>Interstate</span>
              <span>All India</span>
            </div>

          </div>
        </section>

        {/* ================= WHY US ================= */}

        <section className="services-why section">

          <div className="container">

            <div className="services-section-heading services-section-heading--center">

              <div>
                <div className="services-label">
                  <span />
                  WHY TRAVEL WITH US
                </div>

                <h2>
                  More Than
                  <br />
                  <span>A Ride.</span>
                </h2>
              </div>

              <p>
                Every journey is handled with comfort, experience and
                attention to your travel requirements.
              </p>

            </div>

            <div className="services-why__grid">

              <div className="why-card">
                <div className="why-card__icon">
                  <ShieldCheck size={22} />
                </div>

                <span>01</span>

                <h3>Experienced Driver</h3>

                <p>
                  Experienced driving for local, outstation and long-distance
                  journeys.
                </p>
              </div>

              <div className="why-card">
                <div className="why-card__icon">
                  <CarFront size={22} />
                </div>

                <span>02</span>

                <h3>7-Seater Comfort</h3>

                <p>
                  Comfortable Kia Carens for family and group travel with
                  practical space.
                </p>
              </div>

              <div className="why-card">
                <div className="why-card__icon">
                  <CalendarDays size={22} />
                </div>

                <span>03</span>

                <h3>Flexible Travel</h3>

                <p>
                  One-way, round-trip, sightseeing, multi-day and long-distance
                  travel options.
                </p>
              </div>

              <div className="why-card">
                <div className="why-card__icon">
                  <MessageCircle size={22} />
                </div>

                <span>04</span>

                <h3>Easy Booking</h3>

                <p>
                  Share your destination and travel requirements through call
                  or WhatsApp.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className="services-final section">

          <div className="container">

            <div className="services-final__box">

              <div className="services-final__glow" />

              <div className="services-final__content">

                <div className="services-label services-label--light">
                  <span />
                  PLAN YOUR NEXT JOURNEY
                </div>

                <h2>
                  Where Will
                  <br />
                  <em>You Go Next?</em>
                </h2>

                <p>
                  Tell us your destination, date and travel requirements.
                  We will help you plan the journey.
                </p>

              </div>

              <div className="services-final__actions">

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="final-btn final-btn--whatsapp"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                  <ArrowRight size={16} />
                </a>

                <a
                  href="tel:9272060443"
                  className="final-btn final-btn--call"
                >
                  <Phone size={17} />
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Services;