import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Compass,
  MapPin,
  MessageCircle,
  Mountain,
  Navigation,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";

import "./Hero.css";

const destinations = [
  {
    className: "travel-network__node--ajanta",
    icon: Mountain,
    title: "Ajanta",
    subtitle: "Heritage Tours",
  },
  {
    className: "travel-network__node--ellora",
    icon: Mountain,
    title: "Ellora",
    subtitle: "Heritage Tours",
  },
  {
    className: "travel-network__node--local",
    icon: Navigation,
    title: "Local",
    subtitle: "City Travel",
  },
  {
    className: "travel-network__node--outstation",
    icon: Route,
    title: "Outstation",
    subtitle: "Long Distance",
  },
];

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div
        className="hero__glow hero__glow--one"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--two"
        aria-hidden="true"
      />

      <div className="hero__container">

        {/* =========================
            HERO CONTENT
        ========================== */}

        <div className="hero__content">

          <motion.div
            className="hero__location"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <MapPin size={15} />
            <span>Chhatrapati Sambhajinagar</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.05,
              ease: "easeOut",
            }}
          >
            Your Journey,
            <br />
            <span>Our Responsibility.</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.12,
              ease: "easeOut",
            }}
          >
            Reliable car rental and travel services
            from Chhatrapati Sambhajinagar for local,
            outstation, Maharashtra-wide and all-India
            journeys.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <a
              href="tel:9272060443"
              className="hero__btn hero__btn--primary"
            >
              <Phone size={17} />
              <span>Call Now</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Booking</span>
            </a>
          </motion.div>

          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <div className="hero__trust-item">
              <Clock3 size={17} />

              <div>
                <strong>24 Hours</strong>
                <span>Booking Available</span>
              </div>
            </div>

            <div className="hero__trust-item">
              <ShieldCheck size={17} />

              <div>
                <strong>Experienced</strong>
                <span>Driver</span>
              </div>
            </div>

            <div className="hero__trust-item">
              <Users size={17} />

              <div>
                <strong>7-Seater</strong>
                <span>Comfortable Travel</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* =========================
            TRAVEL NETWORK
        ========================== */}

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: "easeOut",
          }}
        >

          <div className="travel-network">

            {/* Background grid */}

            <div
              className="travel-network__grid"
              aria-hidden="true"
            />

            {/* Decorative rings */}

            <div
              className="travel-network__ring travel-network__ring--one"
              aria-hidden="true"
            />

            <div
              className="travel-network__ring travel-network__ring--two"
              aria-hidden="true"
            />

            {/* Route SVG */}

            <svg
              className="travel-network__routes"
              viewBox="0 0 600 600"
              aria-hidden="true"
            >
              <path
                className="travel-network__route"
                d="M300 300 C260 245 205 190 125 125"
              />

              <path
                className="travel-network__route"
                d="M300 300 C360 245 430 205 505 150"
              />

              <path
                className="travel-network__route"
                d="M300 300 C235 320 165 345 90 370"
              />

              <path
                className="travel-network__route"
                d="M300 300 C375 335 450 385 515 445"
              />

              <path
                className="travel-network__route travel-network__route--vertical"
                d="M300 300 C300 235 300 175 300 95"
              />

              <path
                className="travel-network__route travel-network__route--vertical"
                d="M300 300 C300 370 300 440 300 510"
              />
            </svg>

            {/* Lightweight moving particle */}

            <span
              className="travel-network__particle"
              aria-hidden="true"
            />

            {/* CENTER HUB */}

            <div className="travel-network__hub">

              <div className="travel-network__hub-glow" />

              <div className="travel-network__hub-icon">
                <Route
                  size={29}
                  strokeWidth={1.5}
                />
              </div>

              <span>AAI BABA</span>

              <strong>
                TOURS & TRAVELS
              </strong>

              <small>
                YOUR JOURNEY STARTS HERE
              </small>

            </div>

            {/* ORIGIN */}

            <div className="travel-network__origin">

              <div className="travel-network__origin-dot">
                <MapPin size={13} />
              </div>

              <div>
                <strong>
                  Chhatrapati Sambhajinagar
                </strong>

                <span>
                  Your Travel Starting Point
                </span>
              </div>

            </div>

            {/* DESTINATION NODES */}

            {destinations.map(
              ({
                className,
                icon: Icon,
                title,
                subtitle,
              }) => (
                <div
                  key={title}
                  className={`travel-network__node ${className}`}
                >
                  <div className="travel-network__node-icon">
                    <Icon size={14} />
                  </div>

                  <div>
                    <strong>{title}</strong>
                    <span>{subtitle}</span>
                  </div>
                </div>
              ),
            )}

            {/* MAHARASHTRA / ALL INDIA */}

            <div className="travel-network__top-label">

              <div className="travel-network__top-icon">
                <Compass size={16} />
              </div>

              <div>
                <strong>MAHARASHTRA</strong>
                <span>AND ALL INDIA</span>
              </div>

            </div>

            {/* PLANE */}

            <div
              className="travel-network__plane"
              aria-hidden="true"
            >
              <Plane size={17} />
            </div>

            {/* BOTTOM CARD */}

            <div className="travel-network__bottom-card">

              <div className="travel-network__bottom-icon">
                <Navigation size={15} />
              </div>

              <div>
                <span>Travel Beyond Boundaries</span>

                <strong>
                  Local • Outstation • All India
                </strong>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <div
        className="hero__scroll"
        aria-hidden="true"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="hero__scroll-line" />
      </div>

    </section>
  );
};

export default Hero;