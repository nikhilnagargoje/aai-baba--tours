import {
  MessageCircle,
  CalendarCheck2,
  CarFront,
} from "lucide-react";

import "./BookingSteps.css";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell Us Your Plan",
    description:
      "Call or WhatsApp us with your destination, date and travel requirements.",
  },
  {
    number: "02",
    icon: CalendarCheck2,
    title: "Confirm Your Journey",
    description:
      "Discuss your travel plan and confirm your booking with our team.",
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
    <section className="booking-steps section">
      <div className="container">
        <div className="booking-steps__heading">
          <div>
            <div className="booking-steps__eyebrow">
              <span />
              HOW BOOKING WORKS
            </div>

            <h2 className="booking-steps__title">
              Simple Booking.
              <span> Easy Journey.</span>
            </h2>
          </div>

          <p className="booking-steps__intro">
            Plan your journey with just a few simple steps.
            We make booking easy through call and WhatsApp.
          </p>
        </div>

        <div className="booking-steps__grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className="booking-step"
                key={step.number}
              >
                <div className="booking-step__top">
                  <span className="booking-step__number">
                    {step.number}
                  </span>

                  <div className="booking-step__icon">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;