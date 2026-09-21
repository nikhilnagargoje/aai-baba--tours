import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
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
        <section className="contact-page__hero">
          <div className="container">
            <div className="contact-page__hero-content">
              <div className="contact-page__eyebrow">
                <span />
                CONTACT US
              </div>

              <h1>
                Let's Plan Your
                <span> Journey.</span>
              </h1>

              <p>
                Have a travel requirement? Contact Aai Baba
                Tours & Travels for local, sightseeing,
                outstation and long-distance travel from
                Chhatrapati Sambhajinagar.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-page__details section">
          <div className="container">
            <div className="contact-page__grid">
              <div className="contact-page__info">
                <div className="contact-page__eyebrow">
                  <span />
                  GET IN TOUCH
                </div>

                <h2>
                  We're Here
                  <span> To Help.</span>
                </h2>

                <p className="contact-page__intro">
                  Call or WhatsApp us with your destination,
                  travel date and requirements. Our team will
                  help you with your travel enquiry.
                </p>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <span>Call Us</span>

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
                    <MessageCircle size={19} />
                  </div>

                  <div>
                    <span>WhatsApp</span>

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
                    <MapPin size={19} />
                  </div>

                  <div>
                    <span>Business Location</span>

                    <strong>
                      Yashwantnagar, Harsul,
                      <br />
                      Chhatrapati Sambhajinagar,
                      Maharashtra
                    </strong>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <span>Booking Availability</span>

                    <strong>
                      Open 24 Hours
                    </strong>
                  </div>
                </div>

                <div className="contact-page__actions">
                  <a
                    href="tel:9272060443"
                    className="contact-page__action contact-page__action--primary"
                  >
                    <Phone size={17} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/918208661292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page__action contact-page__action--secondary"
                  >
                    <MessageCircle size={17} />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-page__map">
                <div className="contact-page__map-header">
                  <div>
                    <span>OUR LOCATION</span>

                    <h3>
                      Chhatrapati Sambhajinagar
                    </h3>
                  </div>

                  <MapPin size={21} />
                </div>

                <div className="contact-page__map-frame">
                  <iframe
                    title="Aai Baba Tours & Travels location"
                    src="PASTE_GOOGLE_MAP_EMBED_URL_HERE"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="contact-page__map-footer">
                  <MapPin size={16} />

                  <span>
                    Yashwantnagar, Harsul,
                    Chhatrapati Sambhajinagar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page__bottom section">
          <div className="container">
            <div className="contact-page__bottom-card">
              <div>
                <span>READY TO TRAVEL?</span>

                <h2>
                  Tell us where you want to go.
                </h2>
              </div>

              <p>
                Local travel, sightseeing, airport transfers,
                family trips, wedding travel, corporate travel
                and outstation journeys.
              </p>

              <a
                href="https://wa.me/918208661292"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} />
                Start on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;