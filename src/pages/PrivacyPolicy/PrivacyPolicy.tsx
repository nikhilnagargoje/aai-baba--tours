import { Helmet } from "react-helmet-async";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>
          Privacy Policy | Aai Baba Tours & Travels
        </title>

        <meta
          name="description"
          content="Privacy Policy for Aai Baba Tours & Travels, Chhatrapati Sambhajinagar."
        />

        <link
          rel="canonical"
          href="https://aaibabatoursandtravels.com/privacy-policy"
        />
      </Helmet>

      <main className="privacy-page">

        {/* HERO */}

        <section className="privacy-hero">
          <div className="container">

            <div className="privacy-hero__eyebrow">
              <span />
              LEGAL INFORMATION
            </div>

            <h1>
              Privacy
              <span>Policy.</span>
            </h1>

            <p>
              This Privacy Policy explains how Aai Baba
              Tours & Travels handles information shared
              through our website and booking enquiries.
            </p>

          </div>
        </section>

        {/* CONTENT */}

        <section className="privacy-content section">

          <div className="container">

            <div className="privacy-layout">

              <aside className="privacy-sidebar">

                <div className="privacy-sidebar__box">

                  <span>
                    AAI BABA TOURS & TRAVELS
                  </span>

                  <strong>
                    Privacy Policy
                  </strong>

                  <small>
                    Last updated: September 2026
                  </small>

                </div>

              </aside>

              <article className="privacy-document">

                <section>
                  <h2>1. Introduction</h2>

                  <p>
                    Aai Baba Tours & Travels respects your
                    privacy. This Privacy Policy explains
                    what information may be collected when
                    you use our website, contact us or submit
                    a travel enquiry.
                  </p>
                </section>

                <section>
                  <h2>2. Information We May Receive</h2>

                  <p>
                    When you contact us or submit a booking
                    enquiry, you may provide information such
                    as:
                  </p>

                  <ul>
                    <li>Your name</li>
                    <li>Contact number</li>
                    <li>Starting location</li>
                    <li>Destination</li>
                    <li>Travel date</li>
                    <li>Return date</li>
                    <li>Trip type</li>
                    <li>Other travel requirements</li>
                  </ul>
                </section>

                <section>
                  <h2>3. How We Use Your Information</h2>

                  <p>
                    Information shared with us may be used
                    to respond to your enquiry, discuss
                    availability, coordinate travel
                    requirements and communicate with you
                    regarding your booking.
                  </p>
                </section>

                <section>
                  <h2>4. WhatsApp Enquiries</h2>

                  <p>
                    Our website may open WhatsApp when you
                    choose to send a booking enquiry. The
                    information entered into the enquiry form
                    is included in the WhatsApp message so
                    that our team can respond to your travel
                    request.
                  </p>

                  <p>
                    WhatsApp is operated by Meta. Its own
                    privacy practices and policies apply to
                    information handled by WhatsApp.
                  </p>
                </section>

                <section>
                  <h2>5. Website Analytics</h2>

                  <p>
                    If analytics services such as Google
                    Analytics are enabled on this website,
                    information about website usage may be
                    collected to understand traffic,
                    performance and visitor behaviour.
                  </p>
                </section>

                <section>
                  <h2>6. Cookies</h2>

                  <p>
                    The website may use cookies or similar
                    technologies where required for website
                    functionality, analytics or performance.
                  </p>
                </section>

                <section>
                  <h2>7. Third-Party Services</h2>

                  <p>
                    The website may contain links or services
                    provided by third parties, including
                    WhatsApp, Google Maps and other external
                    services. Their own privacy policies may
                    apply when you use those services.
                  </p>
                </section>

                <section>
                  <h2>8. Information Security</h2>

                  <p>
                    We take reasonable steps to protect
                    information shared with us. However, no
                    method of transmitting information over
                    the internet can be guaranteed to be
                    completely secure.
                  </p>
                </section>

                <section>
                  <h2>9. Information Sharing</h2>

                  <p>
                    We do not intend to sell personal
                    information submitted through this
                    website. Information may be used or shared
                    where necessary to provide the requested
                    travel service, operate the website,
                    comply with applicable law or protect
                    legitimate business interests.
                  </p>
                </section>

                <section>
                  <h2>10. Your Choices</h2>

                  <p>
                    You may choose not to provide optional
                    information. However, certain information
                    such as your name, contact number and
                    journey details may be required to respond
                    to a booking enquiry.
                  </p>
                </section>

                <section>
                  <h2>11. Contact Us</h2>

                  <p>
                    If you have questions about this Privacy
                    Policy or information shared with Aai Baba
                    Tours & Travels, you can contact us using
                    the details below.
                  </p>

                  <div className="privacy-contact">

                    <a href="tel:9272060443">
                      <Phone size={17} />
                      9272060443
                    </a>

                    <a href="tel:8010433095">
                      <Phone size={17} />
                      8010433095
                    </a>

                    <a
                      href="https://wa.me/918208661292"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail size={17} />
                      WhatsApp: 8208661292
                    </a>

                    <div>
                      <MapPin size={17} />

                      <span>
                        Yashwantnagar, Harsul,
                        <br />
                        Chhatrapati Sambhajinagar
                      </span>
                    </div>

                  </div>
                </section>

              </article>

            </div>

            <Link
              to="/"
              className="privacy-back"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

          </div>

        </section>

      </main>
    </>
  );
};

export default PrivacyPolicy;