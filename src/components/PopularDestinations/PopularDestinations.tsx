import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  MapPin,
  MoveRight,
  Navigation,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./PopularDestinations.css";

const destinations = [
  {
    number: "01",
    name: "Ajanta Caves",
    region: "HERITAGE",
    location: "Chhatrapati Sambhajinagar",
    position: "destination--ajanta",
  },
  {
    number: "02",
    name: "Shirdi",
    region: "RELIGIOUS",
    location: "Maharashtra",
    position: "destination--shirdi",
  },
  {
    number: "03",
    name: "Nashik",
    region: "RELIGIOUS & OUTSTATION",
    location: "Nashik & Trimbakeshwar",
    position: "destination--nashik",
  },
];

const routes = [
  "Pune",
  "Mumbai",
  "Nagpur",
  "Lonar",
  "Goa",
  "All Maharashtra",
];

const PopularDestinations = () => {
  return (
    <section
      className="popular-destinations section"
      aria-labelledby="popular-destinations-title"
    >
      <div className="container">

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          className="popular-destinations__heading"
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
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          <div>
            <div className="popular-destinations__eyebrow">
              <span />
              POPULAR DESTINATIONS
            </div>

            <h2
              id="popular-destinations-title"
              className="popular-destinations__title"
            >
              Your Next
              <span> Journey Awaits.</span>
            </h2>
          </div>

          <p className="popular-destinations__intro">
            From Chhatrapati Sambhajinagar to heritage,
            religious and outstation destinations across
            Maharashtra and beyond.
          </p>
        </motion.div>

        {/* =========================
            TRAVEL NETWORK
        ========================== */}

        <div className="destination-network">

          {/* Ambient circles */}
          <div
            className="destination-network__ambient destination-network__ambient--one"
            aria-hidden="true"
          />

          <div
            className="destination-network__ambient destination-network__ambient--two"
            aria-hidden="true"
          />

          {/* SVG ROUTES */}

          <svg
            className="destination-network__routes"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="network-route network-route--one"
              d="M500 250 C410 175 300 105 155 105"
            />

            <path
              className="network-route network-route--two"
              d="M500 250 C590 165 710 95 850 115"
            />

            <path
              className="network-route network-route--three"
              d="M500 250 C470 330 390 395 270 425"
            />

            <path
              className="network-route network-route--four"
              d="M500 250 C555 330 655 390 790 420"
            />
          </svg>

          {/* Moving route particles */}

          <span className="route-particle route-particle--one" />
          <span className="route-particle route-particle--two" />
          <span className="route-particle route-particle--three" />
          <span className="route-particle route-particle--four" />

          {/* =========================
              CENTER HUB
          ========================== */}

          <motion.div
            className="travel-hub"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="travel-hub__outer-ring" />

            <div className="travel-hub__icon">
              <Compass size={26} />
            </div>

            <div className="travel-hub__text">
              <strong>Aai Baba</strong>
              <span>Travel Hub</span>
            </div>

            <div className="travel-hub__origin">
              <MapPin size={11} />
              <span>Chhatrapati Sambhajinagar</span>
            </div>
          </motion.div>

          {/* =========================
              DESTINATION NODES
          ========================== */}

          {destinations.map(
            (
              destination,
              index,
            ) => (
              <motion.div
                key={destination.name}
                className={`destination-node ${destination.position}`}
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
                  delay: 0.15 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="destination-node__point">
                  <span />
                </div>

                <div className="destination-node__card">

                  <div className="destination-node__top">
                    <span>
                      {destination.number}
                    </span>

                    <small>
                      {destination.region}
                    </small>
                  </div>

                  <h3>
                    {destination.name}
                  </h3>

                  <div className="destination-node__location">
                    <MapPin size={12} />
                    <span>
                      {destination.location}
                    </span>
                  </div>

                  <Link
                    to="/outstation"
                    className="destination-node__link"
                  >
                    Explore Journey
                    <ArrowUpRight size={14} />
                  </Link>

                </div>
              </motion.div>
            ),
          )}

          {/* =========================
              TOP LABEL
          ========================== */}

          <div className="network-label network-label--top">
            <Navigation size={12} />
            <span>LOCAL → OUTSTATION → INDIA</span>
          </div>

          {/* =========================
              BOTTOM STATUS
          ========================== */}

          <div className="network-status">
            <div className="network-status__pulse" />

            <span>
              24-HOUR JOURNEY SUPPORT
            </span>
          </div>

        </div>

        {/* =========================
            ROUTE STRIP
        ========================== */}

        <motion.div
          className="popular-destinations__footer"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          <div className="popular-destinations__routes">

            <span className="popular-destinations__routes-label">
              More routes
            </span>

            {routes.map((route) => (
              <span
                key={route}
                className="popular-destinations__route"
              >
                {route}
              </span>
            ))}

          </div>

          <Link
            to="/destinations"
            className="popular-destinations__all"
          >
            <span>Explore All Destinations</span>
            <MoveRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PopularDestinations;