import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./FAQ.css";

const faqs = [
  {
    question: "Where is Aai Baba Tours & Travels based?",
    answer:
      "We are based in Yashwantnagar, Harsul, Chhatrapati Sambhajinagar and provide travel services for customers across the city and for journeys beyond Chhatrapati Sambhajinagar.",
  },
  {
    question: "What types of travel services do you provide?",
    answer:
      "We provide local travel, sightseeing, Ajanta and Ellora trips, airport transfers, one-way and round trips, family travel, wedding travel, corporate travel, outstation journeys and long-distance travel.",
  },
  {
    question: "Do you provide Ajanta and Ellora tours?",
    answer:
      "Yes. We provide comfortable travel to Ajanta Caves, Ellora Caves and other sightseeing destinations around Chhatrapati Sambhajinagar.",
  },
  {
    question: "Is the car available with a driver?",
    answer:
      "Yes. Our Kia Carens is available with an experienced driver. The driver has around 8–9 years of driving experience.",
  },
  {
    question: "Do you provide one-way and round-trip travel?",
    answer:
      "Yes. Both one-way and round-trip travel options are available depending on your journey requirements.",
  },
  {
    question: "Can I book travel outside Chhatrapati Sambhajinagar?",
    answer:
      "Yes. We provide travel across Maharashtra, interstate journeys and long-distance travel across India.",
  },
  {
    question: "How can I book a journey?",
    answer:
      "You can call us or send your travel requirements on WhatsApp. You can also use the enquiry form on our website to send your trip details directly to WhatsApp.",
  },
  {
    question: "Are bookings available 24 hours?",
    answer:
      "Yes. Booking enquiries are accepted 24 hours by phone and WhatsApp.",
  },
  {
    question: "How can I know the fare for my journey?",
    answer:
      "Travel requirements can vary by destination, trip type and journey details. Contact us with your travel plan and we will share the applicable booking details.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index,
    );
  };

  return (
    <section
      className="faq section"
      aria-labelledby="faq-title"
    >
      <div className="container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="faq__heading">
          <div>
            <div className="faq__eyebrow">
              <span />
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2
              id="faq-title"
              className="faq__title"
            >
              Questions?
              <span>We've Got Answers.</span>
            </h2>
          </div>

          <p className="faq__intro">
            Find quick answers about our car rental,
            travel services, bookings and journeys from
            Chhatrapati Sambhajinagar.
          </p>
        </div>

        {/* =========================
            FAQ LIST
        ========================= */}

        <div className="faq__layout">
          <div className="faq__list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "faq-item--open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-item__question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-item__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-item__question-text">
                      {faq.question}
                    </span>

                    <span className="faq-item__icon">
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="faq-item__answer"
                  >
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================
              SIDE CTA
          ========================= */}

          <aside className="faq__side">
            <div className="faq__side-icon">
              <MessageCircle size={21} />
            </div>

            <span className="faq__side-label">
              STILL HAVE A QUESTION?
            </span>

            <h3>
              Let's Talk About
              <span>Your Journey.</span>
            </h3>

            <p>
              Can't find the answer you're looking for?
              Contact us directly and share your travel
              requirements.
            </p>

            <div className="faq__side-actions">
              <a
                href="https://wa.me/918208661292"
                target="_blank"
                rel="noopener noreferrer"
                className="faq__whatsapp"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>

              <Link
                to="/contact"
                className="faq__contact"
              >
                Contact Details
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="faq__side-bottom">
              Available 24 Hours
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQ;