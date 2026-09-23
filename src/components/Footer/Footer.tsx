import {
  ArrowUpRight,
  Mail,
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

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div className="footer__brand">

            <Link
              to="/"
              className="footer__logo"
              aria-label="Aai Baba Tours & Travels Home"
            >
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

            {/* Address + Google Location */}
            <a
              href="https://share.google/9NqBdleqZw1DBKFd1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__location"
              aria-label="View Aai Baba Tours & Travels location on Google Maps"
            >
              <MapPin size={17} />

              <span>
                Yashwantnagar, Harsul,
                <br />
                Chhatrapati Sambhajinagar
                <small>
                  View Location on Google Maps
                </small>
              </span>

              <ArrowUpRight
                size={14}
                className="footer__location-arrow"
              />
            </a>

          </div>


          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div className="footer__column">

            <h3>
              Quick Links
            </h3>

            <nav>

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/services">
                Services
              </Link>

              <Link to="/outstation">
                Outstation
              </Link>

              <Link to="/destinations">
                Destinations
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </nav>

          </div>


          {/* =====================================================
              TRAVEL SERVICES
          ===================================================== */}

          <div className="footer__column">

            <h3>
              Travel Services
            </h3>

            <nav>

              <Link to="/destinations">
                Ajanta & Ellora
              </Link>

              <Link to="/outstation">
                Outstation Travel
              </Link>

              <Link to="/services">
                Airport Transfers
              </Link>

              <Link to="/services">
                Family Travel
              </Link>

              <Link to="/services">
                Wedding Travel
              </Link>

              <Link to="/services">
                Corporate Travel
              </Link>

              <Link to="/services">
                One Way & Round Trip
              </Link>

            </nav>

          </div>


          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div className="footer__column footer__contact">

            <h3>
              Get In Touch
            </h3>

            {/* Phone */}
            <a href="tel:9272060443">
              <Phone size={16} />
              <span>
                9272060443
              </span>
            </a>

            <a href="tel:8010433095">
              <Phone size={16} />
              <span>
                8010433095
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              <span>
                WhatsApp Booking
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:abtravls8370@gmail.com"
            >
              <Mail size={16} />
              <span>
                abtravls8370@gmail.com
              </span>
            </a>

            <span className="footer__hours">
              Available 24 Hours
            </span>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="footer__bottom">

          <div className="footer__copyright">

            <p>
              © {currentYear} Aai Baba Tours & Travels.
              All rights reserved.
            </p>

            <span className="footer__developer">
              Developed by{" "}
              <strong>
                Tuljai Solutions
              </strong>
            </span>

          </div>


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