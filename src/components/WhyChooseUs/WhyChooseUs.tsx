import {
  CarFront,
  Clock3,
  UserRoundCheck,
} from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    icon: UserRoundCheck,
    number: "01",
    title: "Experienced Driver",
    description:
      "Travel with an experienced driver with 8–9 years of driving experience.",
  },
  {
    icon: CarFront,
    number: "02",
    title: "Comfortable 7-Seater",
    description:
      "Travel comfortably with our Kia Carens, suitable for family and group journeys.",
  },
  {
    icon: Clock3,
    number: "03",
    title: "24/7 Booking",
    description:
      "Call or WhatsApp us anytime for local, outstation and long-distance travel.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="why-choose-us__heading">
          <div>
            <div className="why-choose-us__eyebrow">
              <span />
              WHY CHOOSE US
            </div>

            <h2 className="why-choose-us__title">
              Travel With
              <span> Confidence.</span>
            </h2>
          </div>

          <p className="why-choose-us__intro">
            A comfortable and dependable travel experience
            for local journeys, sightseeing and outstation trips.
          </p>
        </div>

        <div className="why-choose-us__grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                className="why-choose-us__card"
                key={reason.number}
              >
                <div className="why-choose-us__top">
                  <span className="why-choose-us__number">
                    {reason.number}
                  </span>

                  <div className="why-choose-us__icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;