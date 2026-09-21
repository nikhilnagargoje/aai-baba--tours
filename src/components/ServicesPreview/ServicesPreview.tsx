import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPinned,
  Route,
  HeartHandshake,
  Mountain,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./ServicesPreview.css";

const services = [
  {
    icon: MapPinned,
    number: "01",
    title: "Local & City Travel",
    description:
      "Comfortable local travel and sightseeing across Chhatrapati Sambhajinagar.",
  },
  {
    icon: Mountain,
    number: "02",
    title: "Ajanta & Ellora Tours",
    description:
      "Convenient travel for Ajanta Caves, Ellora Caves and heritage sightseeing.",
  },
  {
    icon: Route,
    number: "03",
    title: "Outstation & All India",
    description:
      "Reliable long-distance travel across Maharashtra, interstate destinations and India.",
  },
];

const ServicesPreview = () => {
  return (
    <section
      className="services-preview section"
      id="services"
    >
      <div className="container">
        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          className="services-preview__header"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="services-preview__eyebrow">
            <span />
            OUR SERVICES
          </div>

          <div className="services-preview__heading-row">
            <div>
              <h2 className="services-preview__title">
                Travel Services
                <br />
                <span>For Every Journey.</span>
              </h2>
            </div>

            <p className="services-preview__intro">
              From local travel in Chhatrapati
              Sambhajinagar to long-distance journeys
              across Maharashtra and India, we provide
              comfortable travel solutions for different
              needs.
            </p>
          </div>
        </motion.div>

        {/* =========================
            SERVICE GRID
        ========================== */}

        <div className="services-preview__grid">
          {services.map(
            (
              {
                icon: Icon,
                number,
                title,
                description,
              },
              index,
            ) => (
              <motion.article
                key={title}
                className="service-card"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="service-card__top">
                  <span className="service-card__number">
                    {number}
                  </span>

                  <div className="service-card__icon">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="service-card__content">
                  <h3>{title}</h3>

                  <p>{description}</p>
                </div>

                <div className="service-card__arrow">
                  <ArrowRight size={17} />
                </div>
              </motion.article>
            ),
          )}
        </div>

        {/* =========================
            CTA
        ========================== */}

        <motion.div
          className="services-preview__cta"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div>
            <HeartHandshake size={20} />

            <div>
              <strong>
                Looking for something specific?
              </strong>

              <span>
                Explore all our travel and car rental
                services.
              </span>
            </div>
          </div>

          <Link
            to="/services"
            className="services-preview__link"
          >
            <span>Explore All Services</span>
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;