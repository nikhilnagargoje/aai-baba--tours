import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section
      className="contact-cta section"
      aria-labelledby="contact-cta-title"
    >
      <div className="container">
        <div className="contact-cta__wrapper">

          {/* =========================
              BACKGROUND NETWORK
          ========================= */}

          <div
            className="contact-cta__network"
            aria-hidden="true"
          >
            <span className="contact-cta__network-line contact-cta__network-line--one" />
            <span className="contact-cta__network-line contact-cta__network-line--two" />
            <span className="contact-cta__network-line contact-cta__network-line--three" />

            <span className="contact-cta__network-dot contact-cta__network-dot--one" />
            <span className="contact-cta__network-dot contact-cta__network-dot--two" />
            <span className="contact-cta__network-dot contact-cta__network-dot--three" />
          </div>

          {/* =========================
              CONTENT
          ========================= */}

          <div className="contact-cta__content">
            <div className="contact-cta__eyebrow">
              <span />
              LET'S TRAVEL
            </div>

            <h2
              id="contact-cta-title"
              className="contact-cta__title"
            >
              Ready for Your
              <span>Next Journey?</span>
            </h2>

            <p className="contact-cta__text">
              Tell us your destination, travel date and
              requirements. Our team is available to help
              you plan a comfortable journey from
              Chhatrapati Sambhajinagar and beyond.
            </p>

            <div className="contact-cta__location">
              <div className="contact-cta__location-icon">
                <CarFront size={17} />
              </div>

              <div>
                <span>BASED IN</span>

                <strong>
                  Yashwantnagar, Harsul,
                  <br />
                  Chhatrapati Sambhajinagar
                </strong>
              </div>
            </div>

            <div className="contact-cta__trust">
              <div>
                <CheckCircle2 size={14} />
                <span>Easy Booking</span>
              </div>

              <div>
                <Clock3 size={14} />
                <span>24-Hour Support</span>
              </div>

              <div>
                <ShieldCheck size={14} />
                <span>Experienced Driver</span>
              </div>
            </div>
          </div>

          {/* =========================
              ACTIONS
          ========================= */}

          <div className="contact-cta__actions">

            <div className="contact-cta__action-heading">
              <span>START YOUR JOURNEY</span>

              <strong>
                We're ready when you are.
              </strong>
            </div>

            <a
              href="tel:9272060443"
              className="contact-cta__button contact-cta__button--primary"
            >
              <span className="contact-cta__button-icon">
                <Phone size={17} />
              </span>

              <span className="contact-cta__button-text">
                Call Now
                <small>9272060443</small>
              </span>

              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta__button contact-cta__button--secondary"
            >
              <span className="contact-cta__button-icon">
                <MessageCircle size={17} />
              </span>

              <span className="contact-cta__button-text">
                WhatsApp Us
                <small>8208661292</small>
              </span>

              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="contact-cta__link"
            >
              View Full Contact Details
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;