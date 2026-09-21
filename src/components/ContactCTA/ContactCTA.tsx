import {
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta section">
      <div className="container">
        <div className="contact-cta__wrapper">
          <div className="contact-cta__content">
            <div className="contact-cta__eyebrow">
              <span />
              LET'S TRAVEL
            </div>

            <h2 className="contact-cta__title">
              Ready for Your
              <span> Next Journey?</span>
            </h2>

            <p className="contact-cta__text">
              Tell us your destination, travel date and
              requirements. We will help you plan a comfortable
              and convenient journey.
            </p>

            <div className="contact-cta__location">
              <span>Based in</span>
              <strong>
                Yashwantnagar, Harsul, Chhatrapati
                Sambhajinagar
              </strong>
            </div>
          </div>

          <div className="contact-cta__actions">
            <a
              href="tel:9272060443"
              className="contact-cta__button contact-cta__button--primary"
            >
              <Phone size={18} />
              Call Now
              <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta__button contact-cta__button--secondary"
            >
              <MessageCircle size={18} />
              WhatsApp Us
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="contact-cta__link"
            >
              View Contact Details
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;