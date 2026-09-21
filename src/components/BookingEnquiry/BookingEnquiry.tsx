import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
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
    event: React.ChangeEvent<
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
    <section className="booking-enquiry section">
      <div className="container">
        <div className="booking-enquiry__wrapper">
          <div className="booking-enquiry__content">
            <div className="booking-enquiry__eyebrow">
              <span />
              PLAN YOUR JOURNEY
            </div>

            <h2 className="booking-enquiry__title">
              Tell Us Where
              <span> You Want To Go.</span>
            </h2>

            <p className="booking-enquiry__text">
              Share your travel details and send your enquiry
              directly to us on WhatsApp. Our team will get
              back to you with the booking details.
            </p>

            <div className="booking-enquiry__contact">
              <div className="booking-enquiry__contact-icon">
                <MessageCircle size={17} />
              </div>

              <div>
                <span>WhatsApp Booking</span>
                <strong>8208661292</strong>
              </div>
            </div>
          </div>

          <form
            className="booking-enquiry__form"
            onSubmit={handleSubmit}
          >
            <div className="booking-enquiry__row">
              <div className="booking-field">
                <label htmlFor="from">
                  <MapPin size={14} />
                  From
                </label>

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

              <div className="booking-field">
                <label htmlFor="to">
                  <MapPin size={14} />
                  To
                </label>

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

            <div className="booking-enquiry__row">
              <div className="booking-field">
                <label htmlFor="travelDate">
                  <CalendarDays size={14} />
                  Travel Date
                </label>

                <input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="booking-field">
                <label htmlFor="returnDate">
                  <CalendarDays size={14} />
                  Return Date
                </label>

                <input
                  id="returnDate"
                  name="returnDate"
                  type="date"
                  value={formData.returnDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="booking-enquiry__row">
              <div className="booking-field">
                <label htmlFor="tripType">
                  <ArrowRight size={14} />
                  Trip Type
                </label>

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

              <div className="booking-field">
                <label htmlFor="name">
                  <User size={14} />
                  Your Name
                </label>

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

              <input
                id="contact"
                name="contact"
                type="tel"
                inputMode="numeric"
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="booking-enquiry__submit"
            >
              <MessageCircle size={17} />
              Send Enquiry on WhatsApp
              <ArrowRight size={16} />
            </button>

            <p className="booking-enquiry__note">
              Your enquiry will open directly in WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingEnquiry;