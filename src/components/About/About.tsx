import { motion } from "framer-motion";
import {
  Award,
  CarFront,
  Clock3,
  MapPin,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* =========================
              VISUAL SIDE
          ========================== */}

          <motion.div
            className="about__visual"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="about__visual-card">
              <div className="about__visual-top">
                <span>TRAVEL WITH CONFIDENCE</span>

                <div className="about__visual-line" />
              </div>

              <div className="about__route-visual">
                <div className="about__route-line about__route-line--one" />
                <div className="about__route-line about__route-line--two" />
                <div className="about__route-line about__route-line--three" />

                <motion.div
                  className="about__route-dot about__route-dot--one"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="about__route-dot about__route-dot--two"
                  animate={{
                    y: [0, 7, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="about__route-dot about__route-dot--three"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="about__route-center">
                  <CarFront size={32} />
                </div>

                <div className="about__route-label about__route-label--top">
                  Sambhajinagar
                </div>

                <div className="about__route-label about__route-label--left">
                  Local
                </div>

                <div className="about__route-label about__route-label--right">
                  Outstation
                </div>

                <div className="about__route-label about__route-label--bottom">
                  All India
                </div>
              </div>

              <div className="about__visual-bottom">
                <div>
                  <strong>01</strong>
                  <span>Vehicle</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Bookings</span>
                </div>

                <div>
                  <strong>8–9</strong>
                  <span>Years Driving</span>
                </div>
              </div>
            </div>

            <motion.div
              className="about__experience-card"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="about__experience-icon">
                <Award size={20} />
              </div>

              <div>
                <strong>Experienced Driver</strong>
                <span>8–9 Years of Driving Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================
              CONTENT SIDE
          ========================== */}

          <motion.div
            className="about__content"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <div className="about__eyebrow">
              <span />
              ABOUT AAI BABA TOURS & TRAVELS
            </div>

            <h2 className="about__title">
              Travel Made
              <br />
              <span>Simple & Comfortable.</span>
            </h2>

            <p className="about__text">
              Aai Baba Tours & Travels is a locally operated
              travel service based in Yashwantnagar, Harsul,
              Chhatrapati Sambhajinagar. We provide comfortable
              car travel for local journeys, sightseeing,
              outstation trips and long-distance travel.
            </p>

            <p className="about__text">
              With an experienced driver and a comfortable
              7-seater Kia Carens, we focus on safe,
              convenient and dependable travel for families,
              individuals, offices and special occasions.
            </p>

            {/* Features */}

            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">
                  <CarFront size={18} />
                </div>

                <div>
                  <strong>Comfortable 7-Seater</strong>
                  <span>Kia Carens for comfortable travel</span>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <UserRoundCheck size={18} />
                </div>

                <div>
                  <strong>Experienced Driver</strong>
                  <span>8–9 years of driving experience</span>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <Clock3 size={18} />
                </div>

                <div>
                  <strong>24-Hour Booking</strong>
                  <span>Call or WhatsApp for bookings</span>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <strong>Reliable Travel</strong>
                  <span>Focused on comfortable journeys</span>
                </div>
              </div>
            </div>

            {/* Location */}

            <div className="about__location">
              <MapPin size={18} />

              <div>
                <strong>Based in Chhatrapati Sambhajinagar</strong>
                <span>
                  Serving local, Maharashtra-wide,
                  interstate and all-India travel needs.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;