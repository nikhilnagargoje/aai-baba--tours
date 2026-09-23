import {
  ArrowRight,
  MessageCircle,
  Quote,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Testimonials.css";

const testimonials = [
  {
    name: "Nikhil Nagargoje",
    trip: "Outstation Trip",
    text: "We had a very comfortable outstation journey. The driver was experienced, polite and drove very safely throughout the trip. The car was clean and comfortable.",
  },
  {
    name: "Sneha Patil",
    trip: "Family Trip",
    text: "We travelled with our family and had a really good experience. The driver was cooperative and experienced, and the driving was safe throughout the journey.",
  },
  {
    name: "Rahul Jadhav",
    trip: "Outstation Journey",
    text: "The car was very clean and comfortable. The driver was polite, experienced and drove safely. Pickup was on time and everything was managed smoothly.",
  },
  {
    name: "Pooja Deshmukh",
    trip: "Family Travel",
    text: "The entire journey was comfortable and well managed. The driver was experienced, helpful and very polite. The car was comfortable for our family.",
  },
  {
    name: "Amit Shinde",
    trip: "Local & Outstation",
    text: "From booking to completing the journey, the service was very good. The driver was experienced and made sure we were comfortable throughout the trip.",
  },
  {
    name: "Neha Kulkarni",
    trip: "Long Distance Travel",
    text: "We had a long-distance journey and the overall experience was very comfortable. The driver was experienced, helpful and drove safely throughout the journey.",
  },
];

const Testimonials = () => {
  /*
   * Duplicate the cards so the CSS marquee can create
   * a continuous seamless loop.
   */
  const sliderItems = [...testimonials, ...testimonials];

  return (
    <section
      className="testimonials section"
      aria-labelledby="testimonials-title"
    >
      <div className="container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="testimonials__heading">
          <div>
            <div className="testimonials__eyebrow">
              <span />
              CUSTOMER FEEDBACK
            </div>

            <h2
              id="testimonials-title"
              className="testimonials__title"
            >
              Journeys That
              <span>Feel Right.</span>
            </h2>
          </div>

          <p className="testimonials__intro">
            Comfortable travel, experienced driving and
            dependable service for journeys from
            Chhatrapati Sambhajinagar and beyond.
          </p>
        </div>

        {/* =========================
            SLIDER
        ========================= */}

        <div className="testimonials__slider">
          <div className="testimonials__track">
            {sliderItems.map((testimonial, index) => (
              <article
                className="testimonial-card"
                key={`${testimonial.name}-${index}`}
              >
                <div className="testimonial-card__top">
                  <div className="testimonial-card__quote">
                    <Quote size={18} />
                  </div>

                  <div className="testimonial-card__stars">
                    {Array.from({ length: 5 }).map(
                      (_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={13}
                          fill="currentColor"
                        />
                      ),
                    )}
                  </div>
                </div>

                <p className="testimonial-card__text">
                  “{testimonial.text}”
                </p>

                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.trip}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="testimonials__bottom">
          <div className="testimonials__bottom-text">
            <MessageCircle size={15} />
            <span>
              Your journey matters to us.
            </span>
          </div>

          <Link
            to="/contact"
            className="testimonials__bottom-link"
          >
            Plan Your Journey
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;