import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">

          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-main">
                आई बाबा
              </span>

              <span className="footer__logo-sub">
                Tours & Travels
              </span>
            </Link>

            <p className="footer__description">
              Comfortable and dependable car rental and travel
              services from Chhatrapati Sambhajinagar for local,
              sightseeing, outstation and long-distance journeys.
            </p>

            <div className="footer__location">
              <MapPin size={16} />

              <span>
                Yashwantnagar, Harsul,
                <br />
                Chhatrapati Sambhajinagar
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3>Quick Links</h3>

            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="footer__column">
            <h3>Travel Services</h3>

            <nav>
              <Link to="/ajanta-ellora">
                Ajanta & Ellora
              </Link>

              <Link to="/outstation">
                Outstation Travel
              </Link>

              <Link to="/services">
                Airport Transfers
              </Link>

              <Link to="/services">
                Family & Wedding Travel
              </Link>

              <Link to="/services">
                Corporate Travel
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer__column footer__contact">
            <h3>Get In Touch</h3>

            <a href="tel:9272060443">
              <Phone size={16} />
              <span>9272060443</span>
            </a>

            <a href="tel:8010433095">
              <Phone size={16} />
              <span>8010433095</span>
            </a>

            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Booking</span>
            </a>

            <span className="footer__hours">
              Available 24 Hours
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>
            © {currentYear} Aai Baba Tours & Travels.
            All rights reserved.
          </p>

          <div className="footer__bottom-links">
            <Link to="/contact">
              Contact
            </Link>

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <a
              href="#top"
              className="footer__back-top"
              aria-label="Back to top"
            >
              Back to Top
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;