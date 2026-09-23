import {
  ArrowRight,
  CalendarCheck2,
  CarFront,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./BookingSteps.css";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell Us Your Plan",
    description:
      "Call or WhatsApp us with your destination, travel date and requirements.",
  },
  {
    number: "02",
    icon: CalendarCheck2,
    title: "Confirm Your Journey",
    description:
      "Discuss your travel plan with our team and confirm your booking.",
  },
  {
    number: "03",
    icon: CarFront,
    title: "Travel Comfortably",
    description:
      "Meet your experienced driver and enjoy a comfortable journey.",
  },
];

const BookingSteps = () => {
  return (
    <section
      className="booking-steps section"
      aria-labelledby="booking-steps-title"
    >
      <div className="container">
        {/* HEADER */}
        <div className="booking-steps__heading">
          <div>
            <div className="booking-steps__eyebrow">
              <span />
              HOW BOOKING WORKS
            </div>

            <h2
              id="booking-steps-title"
              className="booking-steps__title"
            >
              Your Journey Starts
              <span> With A Simple Booking.</span>
            </h2>
          </div>

          <p className="booking-steps__intro">
            No complicated process. Just share your travel plan with us,
            confirm your journey and get ready to travel comfortably.
          </p>
        </div>

        {/* STEPS */}
        <div className="booking-steps__grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                className="booking-step"
                key={step.number}
              >
                {/* connector */}
                {index < steps.length - 1 && (
                  <div
                    className="booking-step__connector"
                    aria-hidden="true"
                  >
                    <ArrowRight size={15} />
                  </div>
                )}

                <div className="booking-step__top">
                  <span className="booking-step__number">
                    {step.number}
                  </span>

                  <div className="booking-step__icon">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                <div className="booking-step__content">
                  <span className="booking-step__label">
                    STEP {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                <div className="booking-step__check">
                  <CheckCircle2 size={15} />
                  <span>Easy & Simple</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CONTACT CTA */}
        <div className="booking-steps__cta">
          <div className="booking-steps__cta-content">
            <div className="booking-steps__cta-icon">
              <MessageCircle size={21} />
            </div>

            <div>
              <span className="booking-steps__cta-label">
                READY TO TRAVEL?
              </span>

              <h3>
                Have a travel plan in mind?
              </h3>

              <p>
                Tell us where you want to go and we’ll help you plan your
                journey.
              </p>
            </div>
          </div>

          <div className="booking-steps__cta-actions">
            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-steps__whatsapp"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

            <Link
              to="/contact"
              className="booking-steps__contact"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;