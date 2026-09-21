import {
  Quote,
  Star,
  ArrowRight,
} from "lucide-react";

import "./Testimonials.css";

const testimonials = [
  {
    name: "Nikhil Nagargoje",
    trip: "Outstation Trip",
    text: "We had a very comfortable outstation journey. The driver was experienced, polite and drove very safely throughout the trip. The car was clean, comfortable and well maintained. Overall, a smooth and pleasant travel experience.",
  },
  {
    name: "Sneha Patil",
    trip: "Family Trip",
    text: "We travelled with our family and had a really good experience. The driver was very cooperative and experienced, and the driving was safe throughout the journey. The car was clean and comfortable for the entire trip.",
  },
  {
    name: "Rahul Jadhav",
    trip: "Outstation Journey",
    text: "The car was very clean and comfortable. The driver was polite, experienced and drove safely throughout the journey. Pickup was on time and everything was managed smoothly. Overall, the service was excellent.",
  },
  {
    name: "Pooja Deshmukh",
    trip: "Family Travel",
    text: "The entire journey was comfortable and well managed. The driver was experienced, helpful and very polite. The car was maintained nicely and was comfortable for our family. We had a very pleasant travel experience.",
  },
  {
    name: "Amit Shinde",
    trip: "Local & Outstation",
    text: "From booking to completing the journey, the service was very good. The driver was experienced and made sure we were comfortable throughout the trip. The car was clean and the overall travel experience was excellent.",
  },
  {
    name: "Neha Kulkarni",
    trip: "Long Distance Travel",
    text: "We had a long-distance journey and the overall experience was very comfortable. The driver was experienced, helpful and drove safely. The car was clean and comfortable, and the entire journey was completed smoothly.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__heading">
          <div>
            <div className="testimonials__eyebrow">
              <span />
              CUSTOMER FEEDBACK
            </div>

            <h2 className="testimonials__title">
              Journeys That
              <span> Feel Right.</span>
            </h2>
          </div>

          <p className="testimonials__intro">
            Comfortable travel, experienced driving and
            dependable service for every journey.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >
              <div className="testimonial-card__top">
                <div className="testimonial-card__quote">
                  <Quote size={19} />
                </div>

                <div className="testimonial-card__stars">
                  {Array.from({ length: 5 }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={14}
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

        <div className="testimonials__bottom">
          <span>
            Your journey matters to us.
          </span>

          <a href="#booking">
            Plan Your Journey
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;