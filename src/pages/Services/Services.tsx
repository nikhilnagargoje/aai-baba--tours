import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CarFront,
  Globe2,
  GraduationCap,
  Heart,
  MapPinned,
  MessageCircle,
  Mountain,
  Plane,
  Repeat2,
  Route,
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
  },
  {
    icon: MapPinned,
    number: "02",
    title: "Local & City Travel",
    description:
      "Convenient travel within Chhatrapati Sambhajinagar for daily travel, local visits and city requirements.",
  },
  {
    icon: MapPinned,
    number: "03",
    title: "Local Sightseeing",
    description:
      "Explore Chhatrapati Sambhajinagar and nearby attractions with comfortable point-to-point travel.",
  },
  {
    icon: Mountain,
    number: "04",
    title: "Ajanta Caves Tour",
    description:
      "Comfortable travel from Chhatrapati Sambhajinagar to the historic Ajanta Caves.",
  },
  {
    icon: Mountain,
    number: "05",
    title: "Ellora Caves Tour",
    description:
      "Plan a convenient journey to the famous Ellora Caves and surrounding heritage attractions.",
  },
  {
    icon: Mountain,
    number: "06",
    title: "Ajanta & Ellora Combined Tour",
    description:
      "Travel comfortably to both Ajanta and Ellora with a journey planned around your schedule.",
  },
  {
    icon: Plane,
    number: "07",
    title: "Airport Pickup & Drop",
    description:
      "Reliable airport transfers for individuals, families and business travellers.",
  },
  {
    icon: Route,
    number: "08",
    title: "Outstation Car Rental",
    description:
      "Comfortable outstation travel from Chhatrapati Sambhajinagar to destinations across Maharashtra and beyond.",
  },
  {
    icon: ArrowRight,
    number: "09",
    title: "One Way Travel",
    description:
      "Convenient one-way travel for personal, family, business and relocation requirements.",
  },
  {
    icon: Repeat2,
    number: "10",
    title: "Round Trip",
    description:
      "Plan return journeys with comfortable travel and flexible trip arrangements.",
  },
  {
    icon: Route,
    number: "11",
    title: "Intercity Travel",
    description:
      "Travel between cities comfortably for personal, family and professional requirements.",
  },
  {
    icon: Users,
    number: "12",
    title: "Family Trips",
    description:
      "Comfortable family travel for holidays, visits, functions and outstation journeys.",
  },
  {
    icon: Heart,
    number: "13",
    title: "Wedding & Marriage Travel",
    description:
      "Travel support for weddings, marriage functions, guest transportation and family journeys.",
  },
  {
    icon: GraduationCap,
    number: "14",
    title: "School & College Trips",
    description:
      "Travel arrangements for educational trips, visits and group journeys.",
  },
  {
    icon: BriefcaseBusiness,
    number: "15",
    title: "Office & Corporate Travel",
    description:
      "Professional travel support for meetings, office visits, business trips and corporate requirements.",
  },
  {
    icon: CalendarDays,
    number: "16",
    title: "Multi-Day Tours",
    description:
      "Comfortable travel for journeys lasting multiple days with planned routes and destinations.",
  },
  {
    icon: MapPinned,
    number: "17",
    title: "Maharashtra Travel",
    description:
      "Travel across Maharashtra for sightseeing, family trips, religious visits and personal journeys.",
  },
  {
    icon: Route,
    number: "18",
    title: "Interstate Travel",
    description:
      "Convenient travel between Maharashtra and destinations in other states.",
  },
  {
    icon: Globe2,
    number: "19",
    title: "All India Travel",
    description:
      "Long-distance car travel for journeys across India based on your travel requirements.",
  },
  {
    icon: CarFront,
    number: "20",
    title: "Kia Carens with Driver",
    description:
      "Comfortable 7-seater Kia Carens with an experienced driver for family and group journeys.",
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
        {/* HERO */}
        <section className="services-page__hero">
          <div className="container">
            <div className="services-page__hero-content">
              <div className="services-page__eyebrow">
                <span />
                OUR SERVICES
              </div>

              <h1>
                Travel Services
                <span> For Every Journey.</span>
              </h1>

              <p>
                From local travel and sightseeing to outstation,
                family, wedding, corporate and long-distance
                journeys, Aai Baba Tours & Travels provides
                comfortable car travel from Chhatrapati
                Sambhajinagar.
              </p>

              <div className="services-page__hero-actions">
                <a
                  href="tel:9272060443"
                  className="services-page__primary-btn"
                >
                  <Phone size={17} />
                  Call for Booking
                </a>

                <Link
                  to="/contact"
                  className="services-page__secondary-btn"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES CATALOG */}
        <section className="services-page__catalog section">
          <div className="container">
            <div className="services-page__heading">
              <div>
                <div className="services-page__eyebrow">
                  <span />
                  WHAT WE OFFER
                </div>

                <h2>
                  Choose Your
                  <span> Travel Service.</span>
                </h2>
              </div>

              <p>
                Select the type of journey you are planning.
                We provide travel support for personal,
                family, business, group and long-distance
                requirements.
              </p>
            </div>

            <div className="services-page__grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    className="service-page-card"
                    key={service.number}
                  >
                    <div className="service-page-card__top">
                      <span>{service.number}</span>

                      <div className="service-page-card__icon">
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                        />
                      </div>
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <Link to="/contact">
                      Enquire Now
                      <ArrowRight size={15} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRAVEL COVERAGE */}
        <section className="services-page__areas section">
          <div className="container">
            <div className="services-page__areas-wrapper">
              <div>
                <div className="services-page__eyebrow">
                  <span />
                  TRAVEL COVERAGE
                </div>

                <h2>
                  From Chhatrapati
                  <span> Sambhajinagar.</span>
                </h2>

                <p>
                  Our travel services are available for local
                  journeys, sightseeing, Maharashtra travel,
                  interstate journeys and long-distance travel
                  across India.
                </p>
              </div>

              <div className="services-page__area-tags">
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
          </div>
        </section>

        {/* CTA */}
        <section className="services-page__cta section">
          <div className="container">
            <div className="services-page__cta-wrapper">
              <div>
                <span>PLAN YOUR JOURNEY</span>

                <h2>
                  Tell us where
                  <br />
                  you want to go.
                </h2>

                <p>
                  Share your destination and travel
                  requirements with us.
                </p>
              </div>

              <div className="services-page__cta-actions">
                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                  <ArrowRight size={16} />
                </a>

                <a
                  href="tel:9272060443"
                  className="services-page__cta-call"
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