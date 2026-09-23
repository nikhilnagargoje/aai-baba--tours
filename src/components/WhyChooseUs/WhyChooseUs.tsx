import { motion } from "framer-motion";
import {
  ArrowRight,
  CarFront,
  Clock3,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./WhyChooseUs.css";

const reasons = [
  {
    icon: UserRoundCheck,
    number: "01",
    title: "Experienced Driver",
    shortTitle: "8–9 Years",
    description:
      "Travel with an experienced driver for comfortable local and outstation journeys.",
  },
  {
    icon: CarFront,
    number: "02",
    title: "Comfortable 7-Seater",
    shortTitle: "Kia Carens",
    description:
      "A comfortable Kia Carens for families, groups and long-distance travel.",
  },
  {
    icon: Clock3,
    number: "03",
    title: "24/7 Booking",
    shortTitle: "Always Available",
    description:
      "Call or WhatsApp anytime for local, sightseeing and outstation bookings.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="why-choose-us section"
      aria-labelledby="why-choose-us-title"
    >
      <div className="container">

        {/* =========================
            INTRO
        ========================== */}

        <motion.div
          className="why-choose-us__intro-grid"
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
            duration: 0.6,
            ease: "easeOut",
          }}
        >

          <div>
            <div className="why-choose-us__eyebrow">
              <span />
              WHY TRAVEL WITH US
            </div>

            <h2
              id="why-choose-us-title"
              className="why-choose-us__title"
            >
              Travel With
              <span> Confidence.</span>
            </h2>

            <p className="why-choose-us__intro-text">
              Comfortable travel, an experienced driver and
              dependable booking support for journeys from
              Chhatrapati Sambhajinagar and beyond.
            </p>
          </div>

          {/* EXPERIENCE VISUAL */}

          <div className="experience-visual">

            <div className="experience-visual__ring experience-visual__ring--one" />
            <div className="experience-visual__ring experience-visual__ring--two" />

            <div className="experience-visual__content">

              <ShieldCheck
                size={20}
                strokeWidth={1.6}
              />

              <strong>
                8–9
              </strong>

              <span>
                YEARS OF
                <br />
                DRIVING EXPERIENCE
              </span>

            </div>

            <div className="experience-visual__route">
              <span />
              <span />
              <span />
            </div>

          </div>

        </motion.div>

        {/* =========================
            REASONS
        ========================== */}

        <div className="why-choose-us__grid">

          {reasons.map(
            (
              reason,
              index,
            ) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  className="why-card"
                  key={reason.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >

                  <div className="why-card__top">

                    <span className="why-card__number">
                      {reason.number}
                    </span>

                    <div className="why-card__icon">
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>

                  <div className="why-card__content">

                    <span className="why-card__short">
                      {reason.shortTitle}
                    </span>

                    <h3>
                      {reason.title}
                    </h3>

                    <p>
                      {reason.description}
                    </p>

                  </div>

                  <div className="why-card__line" />

                </motion.article>
              );
            },
          )}

        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}

        <motion.div
          className="why-choose-us__bottom"
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

          <div className="why-choose-us__bottom-text">

            <span>
              READY FOR YOUR NEXT JOURNEY?
            </span>

            <strong>
              Comfortable travel starts here.
            </strong>

          </div>

          <Link
            to="/contact"
            className="why-choose-us__button"
          >
            Plan Your Journey
            <ArrowRight size={15} />
          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;