import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Aai Baba Tours & Travels | Chhatrapati Sambhajinagar
        </title>

        <meta
          name="description"
          content="Contact Aai Baba Tours & Travels in Chhatrapati Sambhajinagar for local travel, sightseeing, Ajanta Ellora tours, airport transfers, outstation and long-distance car travel."
        />

        <link
          rel="canonical"
          href="https://aaibabatoursandtravels.com/contact"
        />
      </Helmet>

      <main className="contact-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">

          <div className="contact-hero__glow contact-hero__glow--one" />
          <div className="contact-hero__glow contact-hero__glow--two" />

          <div className="contact-hero__route contact-hero__route--one" />
          <div className="contact-hero__route contact-hero__route--two" />

          <div className="container contact-hero__container">

            <div className="contact-hero__content">

              <div className="contact-label">
                <span />
                GET IN TOUCH
              </div>

              <h1>
                Let's Plan Your
                <br />
                <em>Journey.</em>
              </h1>

              <p>
                Tell us where you want to go, when you want to travel and
                what you need. We will help you plan your journey from
                Chhatrapati Sambhajinagar.
              </p>

              <div className="contact-hero__actions">

                <a
                  href="tel:9272060443"
                  className="contact-btn contact-btn--primary"
                >
                  <Phone size={17} />
                  Call Now
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn contact-btn--whatsapp"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>

              </div>

              <div className="contact-hero__trust">

                <div>
                  <CheckCircle2 size={16} />
                  <span>24 Hour Booking</span>
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  <span>Experienced Driver</span>
                </div>

                <div>
                  <CheckCircle2 size={16} />
                  <span>7-Seater Comfort</span>
                </div>

              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="contact-hero__visual">

              <div className="contact-orbit contact-orbit--outer" />
              <div className="contact-orbit contact-orbit--middle" />
              <div className="contact-orbit contact-orbit--inner" />

              <div className="contact-hero__hub">

                <div className="contact-hero__hub-icon">
                  <CarFront size={29} strokeWidth={1.5} />
                </div>

                <strong>Aai Baba</strong>
                <span>Travel & Travels</span>

              </div>

              <div className="contact-node contact-node--top">
                <MapPin size={15} />
                <span>Sambhajinagar</span>
              </div>

              <div className="contact-node contact-node--right">
                <Navigation size={15} />
                <span>Plan Your Route</span>
              </div>

              <div className="contact-node contact-node--bottom">
                <Clock3 size={15} />
                <span>Open 24 Hours</span>
              </div>

              <div className="contact-node contact-node--left">
                <MessageCircle size={15} />
                <span>WhatsApp Booking</span>
              </div>

              <div className="contact-floating-card contact-floating-card--top">
                <ShieldCheck size={16} />

                <div>
                  <strong>Travel With Confidence</strong>
                  <span>Comfort • Care • Convenience</span>
                </div>
              </div>

              <div className="contact-floating-card contact-floating-card--bottom">
                <Phone size={16} />

                <div>
                  <strong>9272060443</strong>
                  <span>Booking & Enquiry</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CONTACT DETAILS
        ===================================================== */}

        <section className="contact-details section">

          <div className="container">

            <div className="contact-section-heading">

              <div>
                <div className="contact-label">
                  <span />
                  CONTACT DETAILS
                </div>

                <h2>
                  We're Here
                  <br />
                  <em>To Help.</em>
                </h2>
              </div>

              <p>
                Call or WhatsApp us with your destination, travel date and
                requirements. We will help you with your travel enquiry.
              </p>

            </div>

            <div className="contact-main-grid">

              {/* LEFT INFO */}

              <div className="contact-info">

                <div className="contact-info-card">

                  <div className="contact-info-card__icon">
                    <Phone size={20} />
                  </div>

                  <div className="contact-info-card__content">

                    <span>CALL US</span>

                    <a href="tel:9272060443">
                      9272060443
                    </a>

                    <a href="tel:8010433095">
                      8010433095
                    </a>

                  </div>

                </div>

                <div className="contact-info-card">

                  <div className="contact-info-card__icon">
                    <MessageCircle size={20} />
                  </div>

                  <div className="contact-info-card__content">

                    <span>WHATSAPP</span>

                    <a
                      href="https://wa.me/918208661292"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      8208661292
                    </a>

                    <a
                      href="https://wa.me/918010433095"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      8010433095
                    </a>

                  </div>

                </div>

                <div className="contact-info-card">

                  <div className="contact-info-card__icon">
                    <MapPin size={20} />
                  </div>

                  <div className="contact-info-card__content">

                    <span>BUSINESS LOCATION</span>

                    <strong>
                      Yashwantnagar, Harsul,
                      <br />
                      Chhatrapati Sambhajinagar,
                      <br />
                      Maharashtra
                    </strong>

                  </div>

                </div>

                <div className="contact-info-card">

                  <div className="contact-info-card__icon">
                    <Clock3 size={20} />
                  </div>

                  <div className="contact-info-card__content">

                    <span>BOOKING AVAILABILITY</span>

                    <strong>
                      Open 24 Hours
                    </strong>

                  </div>

                </div>

                <div className="contact-info__actions">

                  <a
                    href="tel:9272060443"
                    className="contact-action contact-action--primary"
                  >
                    <Phone size={17} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/918208661292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action contact-action--secondary"
                  >
                    <MessageCircle size={17} />
                    WhatsApp Us
                  </a>

                </div>

              </div>

              {/* MAP */}

              <div className="contact-map">

                <div className="contact-map__header">

                  <div>
                    <span>OUR LOCATION</span>

                    <h3>
                      Chhatrapati Sambhajinagar
                    </h3>
                  </div>

                  <div className="contact-map__header-icon">
                    <MapPin size={20} />
                  </div>

                </div>

                <div className="contact-map__frame">

                  <iframe
                    title="Aai Baba Tours & Travels location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.7249127718314!2d75.3690542!3d19.910156999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbdafe527ee19%3A0x7152b5a0caf97fc9!2sAai%20Baba%20Tours%20And%20Travels!5e1!3m2!1sen!2sin!4v1790156956316!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />

                </div>

                <div className="contact-map__footer">

                  <MapPin size={16} />

                  <span>
                    Yashwantnagar, Harsul, Chhatrapati Sambhajinagar
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            QUICK BOOKING
        ===================================================== */}

        <section className="contact-booking section">

          <div className="container">

            <div className="contact-booking__heading">

              <div className="contact-label">
                <span />
                QUICK BOOKING
              </div>

              <h2>
                Choose How You'd
                <br />
                <em>Like To Connect.</em>
              </h2>

            </div>

            <div className="contact-booking__grid">

              <a
                href="tel:9272060443"
                className="contact-booking-card"
              >

                <div className="contact-booking-card__icon">
                  <Phone size={23} />
                </div>

                <div>
                  <span>CALL FOR BOOKING</span>

                  <h3>
                    9272060443
                  </h3>

                  <p>
                    Speak directly with us about your journey.
                  </p>
                </div>

                <ArrowRight size={18} />

              </a>

              <a
                href="https://wa.me/918208661292"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-booking-card contact-booking-card--dark"
              >

                <div className="contact-booking-card__icon">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <span>WHATSAPP BOOKING</span>

                  <h3>
                    8208661292
                  </h3>

                  <p>
                    Send your destination and travel requirements.
                  </p>
                </div>

                <ArrowRight size={18} />

              </a>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="contact-final section">

          <div className="container">

            <div className="contact-final__box">

              <div className="contact-final__circle contact-final__circle--one" />
              <div className="contact-final__circle contact-final__circle--two" />

              <div className="contact-final__content">

                <div className="contact-label contact-label--light">
                  <span />
                  READY TO TRAVEL?
                </div>

                <h2>
                  Tell Us Where
                  <br />
                  <em>You Want To Go.</em>
                </h2>

                <p>
                  Local travel, sightseeing, airport transfers, family trips,
                  wedding travel, corporate travel and outstation journeys.
                </p>

              </div>

              <div className="contact-final__actions">

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-final-btn contact-final-btn--white"
                >
                  <MessageCircle size={17} />
                  Start on WhatsApp
                  <ArrowRight size={16} />
                </a>

                <a
                  href="tel:9272060443"
                  className="contact-final-btn contact-final-btn--outline"
                >
                  <Phone size={17} />
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default Contact;