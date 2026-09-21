import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Clock3,
  Users,
  Compass,
  Plane,
  Navigation,
  Mountain,
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
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="hero__container">
        {/* =========================
            HERO CONTENT
        ========================== */}

        <div className="hero__content">
          <motion.div
            className="hero__location"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MapPin size={16} />
            <span>Chhatrapati Sambhajinagar</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            Your Journey,
            <br />
            <span>Our Responsibility.</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            Reliable car rental and travel services
            from Chhatrapati Sambhajinagar for
            local, outstation, Maharashtra-wide
            and all-India journeys.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            <a
              href="tel:9272060443"
              className="hero__btn hero__btn--primary"
            >
              <Phone size={18} />
              <span>Call Now</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Booking</span>
            </a>
          </motion.div>

          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
          >
            <div className="hero__trust-item">
              <Clock3 size={18} />

              <div>
                <strong>24 Hours</strong>
                <span>Booking Available</span>
              </div>
            </div>

            <div className="hero__trust-item">
              <ShieldCheck size={18} />

              <div>
                <strong>Experienced</strong>
                <span>Driver</span>
              </div>
            </div>

            <div className="hero__trust-item">
              <Users size={18} />

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
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <div className="travel-network">
            {/* Background grid */}

            <div className="travel-network__grid" />

            {/* Decorative rings */}

            <motion.div
              className="travel-network__ring travel-network__ring--one"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="travel-network__ring travel-network__ring--two"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Route SVG */}

            <svg
              className="travel-network__routes"
              viewBox="0 0 600 600"
              aria-hidden="true"
            >
              <path
                className="travel-network__route travel-network__route--one"
                d="M300 300 C260 245 205 190 125 125"
              />

              <path
                className="travel-network__route travel-network__route--two"
                d="M300 300 C360 245 430 205 505 150"
              />

              <path
                className="travel-network__route travel-network__route--three"
                d="M300 300 C235 320 165 345 90 370"
              />

              <path
                className="travel-network__route travel-network__route--four"
                d="M300 300 C375 335 450 385 515 445"
              />

              <path
                className="travel-network__route travel-network__route--five"
                d="M300 300 C300 235 300 175 300 95"
              />

              <path
                className="travel-network__route travel-network__route--six"
                d="M300 300 C300 370 300 440 300 510"
              />
            </svg>

            {/* Moving route particles */}

            <motion.span
              className="travel-network__particle travel-network__particle--one"
              animate={{
                offsetDistance: [
                  "0%",
                  "100%",
                ],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.span
              className="travel-network__particle travel-network__particle--two"
              animate={{
                offsetDistance: [
                  "0%",
                  "100%",
                ],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />

            <motion.span
              className="travel-network__particle travel-network__particle--three"
              animate={{
                offsetDistance: [
                  "0%",
                  "100%",
                ],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.7,
              }}
            />

            {/* =========================
                CENTER HUB
            ========================== */}

            <motion.div
              className="travel-network__hub"
              animate={{
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="travel-network__hub-glow" />

              <div className="travel-network__hub-icon">
                <Route
                  size={31}
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
            </motion.div>

            {/* =========================
                ORIGIN
            ========================== */}

            <motion.div
              className="travel-network__origin"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="travel-network__origin-dot">
                <MapPin size={14} />
              </div>

              <div>
                <strong>
                  Chhatrapati Sambhajinagar
                </strong>

                <span>
                  Your Travel Starting Point
                </span>
              </div>
            </motion.div>

            {/* =========================
                DESTINATION NODES
            ========================== */}

            {destinations.map(
              ({
                className,
                icon: Icon,
                title,
                subtitle,
              }) => (
                <motion.div
                  key={title}
                  className={`travel-network__node ${className}`}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration:
                      title === "Ajanta"
                        ? 3.2
                        : title === "Ellora"
                        ? 3.7
                        : title === "Local"
                        ? 3.4
                        : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="travel-network__node-icon">
                    <Icon size={14} />
                  </div>

                  <div>
                    <strong>{title}</strong>
                    <span>{subtitle}</span>
                  </div>
                </motion.div>
              ),
            )}

            {/* =========================
                TOP INDIA / MAHARASHTRA
            ========================== */}

            <div className="travel-network__top-label">
              <div className="travel-network__top-icon">
                <Compass size={17} />
              </div>

              <div>
                <strong>MAHARASHTRA</strong>
                <span>AND ALL INDIA</span>
              </div>
            </div>

            {/* =========================
                FLOATING PLANE
            ========================== */}

            <motion.div
              className="travel-network__plane"
              animate={{
                x: [0, 18, 0],
                y: [0, -8, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Plane size={17} />
            </motion.div>

            {/* =========================
                BOTTOM CARD
            ========================== */}

            <motion.div
              className="travel-network__bottom-card"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="travel-network__bottom-icon">
                <Navigation size={16} />
              </div>

              <div>
                <span>Travel Beyond Boundaries</span>
                <strong>
                  Local • Outstation • All India
                </strong>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}

      <motion.div
        className="hero__scroll"
        animate={{
          y: [0, 8, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
};

export default Hero;