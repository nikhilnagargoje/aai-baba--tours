import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import "./BookingEnquiry.css";

const WHATSAPP_NUMBER = "918208661292";

const BookingEnquiry = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    travelDate: "",
    returnDate: "",
    tripType: "One Way",
    name: "",
    contact: "",
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const message = `Hello Aai Baba Tours & Travels,

I would like to enquire about a trip.

Name: ${formData.name}
Contact Number: ${formData.contact}
From: ${formData.from}
To: ${formData.to}
Travel Date: ${formData.travelDate}
Return Date: ${
      formData.returnDate || "Not applicable"
    }
Trip Type: ${formData.tripType}

Please share availability and booking details.`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className="booking-enquiry section"
      aria-labelledby="booking-enquiry-title"
    >
      <div className="container">
        <div className="booking-enquiry__wrapper">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="booking-enquiry__content">
            <div className="booking-enquiry__eyebrow">
              <span />
              PLAN YOUR JOURNEY
            </div>

            <h2
              id="booking-enquiry-title"
              className="booking-enquiry__title"
            >
              Your Journey.
              <span> Your Way.</span>
            </h2>

            <p className="booking-enquiry__text">
              Tell us where you want to go, when you want
              to travel and what kind of journey you have
              in mind. Send your enquiry directly to our
              WhatsApp.
            </p>

            {/* Route visual */}
            <div className="booking-enquiry__route">
              <div className="booking-enquiry__route-line">
                <span className="booking-enquiry__route-dot" />
                <span className="booking-enquiry__route-track" />
                <span className="booking-enquiry__route-dot booking-enquiry__route-dot--end" />
              </div>

              <div className="booking-enquiry__route-info">
                <div>
                  <span>FROM</span>
                  <strong>Your Location</strong>
                </div>

                <ArrowRight size={16} />

                <div className="booking-enquiry__route-info--right">
                  <span>TO</span>
                  <strong>Your Destination</strong>
                </div>
              </div>
            </div>

            {/* Contact */}
            <a
              href="https://wa.me/918208661292"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-enquiry__contact"
            >
              <div className="booking-enquiry__contact-icon">
                <MessageCircle size={18} />
              </div>

              <div className="booking-enquiry__contact-text">
                <span>QUICK WHATSAPP BOOKING</span>
                <strong>8208661292</strong>
              </div>

              <ArrowRight
                className="booking-enquiry__contact-arrow"
                size={17}
              />
            </a>

            {/* Trust */}
            <div className="booking-enquiry__trust">
              <div>
                <CheckCircle2 size={15} />
                <span>Easy Booking</span>
              </div>

              <div>
                <Clock3 size={15} />
                <span>24-Hour Support</span>
              </div>

              <div>
                <ShieldCheck size={15} />
                <span>Experienced Driver</span>
              </div>
            </div>
          </div>

          {/* =========================
              FORM
          ========================= */}

          <div className="booking-enquiry__form-wrap">

            <div className="booking-enquiry__form-head">
              <div>
                <span>TRAVEL ENQUIRY</span>
                <h3>Book Your Journey</h3>
              </div>

              <div className="booking-enquiry__form-badge">
                <MessageCircle size={14} />
                WhatsApp
              </div>
            </div>

            <div className="booking-enquiry__progress">
              <span className="booking-enquiry__progress-line" />

              <div className="booking-enquiry__progress-step booking-enquiry__progress-step--active">
                <span>1</span>
                <small>Trip</small>
              </div>

              <div className="booking-enquiry__progress-step">
                <span>2</span>
                <small>Details</small>
              </div>

              <div className="booking-enquiry__progress-step">
                <span>3</span>
                <small>Send</small>
              </div>
            </div>

            <form
              className="booking-enquiry__form"
              onSubmit={handleSubmit}
            >
              {/* FROM / TO */}

              <div className="booking-enquiry__section-title">
                <span>01</span>
                <strong>Where are you travelling?</strong>
              </div>

              <div className="booking-enquiry__row">
                <div className="booking-field">
                  <label htmlFor="from">
                    <MapPin size={14} />
                    From
                  </label>

                  <div className="booking-field__input">
                    <input
                      id="from"
                      name="from"
                      type="text"
                      placeholder="Starting location"
                      value={formData.from}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="booking-field">
                  <label htmlFor="to">
                    <MapPin size={14} />
                    To
                  </label>

                  <div className="booking-field__input">
                    <input
                      id="to"
                      name="to"
                      type="text"
                      placeholder="Destination"
                      value={formData.to}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* DATE */}

              <div className="booking-enquiry__section-title booking-enquiry__section-title--space">
                <span>02</span>
                <strong>When are you travelling?</strong>
              </div>

              <div className="booking-enquiry__row">
                <div className="booking-field">
                  <label htmlFor="travelDate">
                    <CalendarDays size={14} />
                    Travel Date
                  </label>

                  <div className="booking-field__input">
                    <input
                      id="travelDate"
                      name="travelDate"
                      type="date"
                      value={formData.travelDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="booking-field">
                  <label htmlFor="returnDate">
                    <CalendarDays size={14} />
                    Return Date
                    <span className="booking-field__optional">
                      Optional
                    </span>
                  </label>

                  <div className="booking-field__input">
                    <input
                      id="returnDate"
                      name="returnDate"
                      type="date"
                      value={formData.returnDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* TYPE */}

              <div className="booking-enquiry__section-title booking-enquiry__section-title--space">
                <span>03</span>
                <strong>What kind of trip?</strong>
              </div>

              <div className="booking-field booking-field--full">
                <label htmlFor="tripType">
                  <CarFront size={14} />
                  Trip Type
                </label>

                <div className="booking-field__input">
                  <select
                    id="tripType"
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                  >
                    <option>One Way</option>
                    <option>Round Trip</option>
                    <option>Local / City Travel</option>
                    <option>Sightseeing</option>
                    <option>Airport Transfer</option>
                    <option>Family Trip</option>
                    <option>Wedding / Marriage</option>
                    <option>School / College Trip</option>
                    <option>Office / Corporate Trip</option>
                    <option>Business Trip</option>
                    <option>Outstation Trip</option>
                    <option>Religious / Pilgrimage Trip</option>
                    <option>Multi-Day Tour</option>
                    <option>Event / Function Travel</option>
                    <option>Group Travel</option>
                    <option>Maharashtra Travel</option>
                    <option>Interstate Travel</option>
                    <option>All India Travel</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* PERSONAL DETAILS */}

              <div className="booking-enquiry__section-title booking-enquiry__section-title--space">
                <span>04</span>
                <strong>Your contact details</strong>
              </div>

              <div className="booking-enquiry__row">
                <div className="booking-field">
                  <label htmlFor="name">
                    <User size={14} />
                    Your Name
                  </label>

                  <div className="booking-field__input">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="booking-field">
                  <label htmlFor="contact">
                    <Phone size={14} />
                    Contact Number
                  </label>

                  <div className="booking-field__input">
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      inputMode="numeric"
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="booking-enquiry__submit"
              >
                <span className="booking-enquiry__submit-icon">
                  <MessageCircle size={17} />
                </span>

                <span className="booking-enquiry__submit-text">
                  Send Enquiry on WhatsApp
                  <small>We'll receive your travel details</small>
                </span>

                <ArrowRight size={17} />
              </button>

              <p className="booking-enquiry__note">
                Your enquiry opens directly in WhatsApp.
                No online payment required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingEnquiry;