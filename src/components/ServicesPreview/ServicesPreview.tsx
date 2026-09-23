import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPinned,
  Mountain,
  Route,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./ServicesPreview.css";

const services = [
  {
    icon: MapPinned,
    number: "01",
    title: "Local Travel",
    description:
      "Easy city travel and sightseeing across Chhatrapati Sambhajinagar.",
  },
  {
    icon: Mountain,
    number: "02",
    title: "Ajanta & Ellora",
    description:
      "Comfortable trips to Ajanta Caves, Ellora Caves and nearby attractions.",
  },
  {
    icon: Route,
    number: "03",
    title: "Outstation Travel",
    description:
      "One-way and round trips across Maharashtra, interstate and India.",
  },
];

const ServicesPreview = () => {
  return (
    <section
      className="services-preview section"
      id="services"
      aria-labelledby="services-preview-title"
    >
      <div className="container">

        {/* HEADER */}
        <motion.div
          className="services-preview__header"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        >
          <div className="services-preview__eyebrow">
            <span />
            TRAVEL SERVICES
          </div>

          <div className="services-preview__heading-row">
            <h2
              id="services-preview-title"
              className="services-preview__title"
            >
              Travel Made
              <span> Simple.</span>
            </h2>

            <p className="services-preview__intro">
              Local rides, sightseeing and outstation journeys
              from Chhatrapati Sambhajinagar.
            </p>
          </div>
        </motion.div>

        {/* SERVICE CARDS */}
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
                  y: 22,
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
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
              >
                <div className="service-card__glow" />

                <div className="service-card__top">
                  <span className="service-card__number">
                    {number}
                  </span>

                  <div className="service-card__icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="service-card__content">
                  <h3>{title}</h3>

                  <p>{description}</p>
                </div>

                <div className="service-card__bottom">
                  <span>Explore Service</span>

                  <div className="service-card__arrow">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>

        {/* COMPACT CTA */}
        <motion.div
          className="services-preview__footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
        >
          <span>
            Need a different travel service?
          </span>

          <Link
            to="/services"
            className="services-preview__link"
          >
            View All Services
            <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPreview;