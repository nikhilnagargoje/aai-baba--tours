import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Camera,
  CarFront,
  MapPin,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import car1 from "../../assets/images/car1.webp";
import car2 from "../../assets/images/car2.webp";
import car3 from "../../assets/images/car3.webp";
import car4 from "../../assets/images/car4.webp";
import car5 from "../../assets/images/car5.webp";

import "./Gallery.css";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Our Kia Carens",
    category: "Vehicle",
    image: car1,
  },
  {
    title: "Our Kia Carens",
    category: "Vehicle",
    image: car2,
  },
  {
    title: "Comfortable Interior",
    category: "Vehicle",
    image: car3,
  },
  {
    title: "7-Seater Comfort",
    category: "Vehicle",
    image: car4,
  },
  {
    title: "Ready for Your Journey",
    category: "Vehicle",
    image: car5,
  },
];

const categories = [
  "All",
  "Vehicle",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category === activeCategory,
        );

  return (
    <>
      <Helmet>
        <title>
          Gallery | Aai Baba Tours & Travels |
          Chhatrapati Sambhajinagar
        </title>

        <meta
          name="description"
          content="View the Aai Baba Tours & Travels gallery featuring our Kia Carens and travel vehicle from Chhatrapati Sambhajinagar."
        />

        <link
          rel="canonical"
          href="https://aaibabatoursandtravels.com/gallery"
        />
      </Helmet>

      <main className="gallery-page">

        {/* HERO */}

        <section className="gallery-hero">

          <div className="gallery-hero__glow gallery-hero__glow--one" />

          <div className="gallery-hero__glow gallery-hero__glow--two" />

          <div className="gallery-hero__route gallery-hero__route--one" />

          <div className="gallery-hero__route gallery-hero__route--two" />

          <div className="container">

            <div className="gallery-hero__content">

              <div className="gallery-hero__eyebrow">
                <span />
                OUR GALLERY
              </div>

              <h1>
                See The
                <br />
                <span>Journey.</span>
              </h1>

              <p>
                Take a look at our Kia Carens and
                experience the comfort of Aai Baba
                Tours & Travels.
              </p>

              <div className="gallery-hero__stats">

                <div>
                  <strong>
                    <CarFront size={18} />
                  </strong>

                  <span>
                    Kia Carens
                  </span>
                </div>

                <div>
                  <strong>
                    <Camera size={18} />
                  </strong>

                  <span>
                    Real Photos
                  </span>
                </div>

                <div>
                  <strong>
                    <MapPin size={18} />
                  </strong>

                  <span>
                    Sambhajinagar
                  </span>
                </div>

              </div>

            </div>

            <div className="gallery-hero__visual">

              <div className="gallery-hero__frame">

                <div className="gallery-hero__frame-inner">

                  <Camera
                    size={42}
                    strokeWidth={1.1}
                  />

                  <span>
                    AAI BABA
                  </span>

                  <small>
                    TOURS & TRAVELS
                  </small>

                </div>

              </div>

              <div className="gallery-hero__floating gallery-hero__floating--one">
                <Camera size={14} />
                Real Photos
              </div>

              <div className="gallery-hero__floating gallery-hero__floating--two">
                <MapPin size={14} />
                Chhatrapati Sambhajinagar
              </div>

            </div>

          </div>
        </section>

        {/* GALLERY */}

        <section className="gallery-content section">

          <div className="container">

            <div className="gallery-heading">

              <div>
                <div className="gallery-eyebrow">
                  <span />
                  PHOTO COLLECTION
                </div>

                <h2>
                  Our Car
                  <span> In Pictures.</span>
                </h2>
              </div>

              <p>
                Explore photographs of our Kia Carens,
                available for local, outstation and
                long-distance journeys.
              </p>

            </div>

            {/* FILTER */}

            <div className="gallery-filters">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "gallery-filter gallery-filter--active"
                      : "gallery-filter"
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>

            {/* GRID */}

            <div className="gallery-grid">

              {filteredItems.map(
                (item, index) => (
                  <article
                    className={`gallery-card ${
                      index === 0
                        ? "gallery-card--large"
                        : ""
                    }`}
                    key={`${item.title}-${index}`}
                    onClick={() =>
                      setSelectedImage(item)
                    }
                  >

                    <div className="gallery-card__image">

                      <img
                        src={item.image}
                        alt={`${item.title} - Aai Baba Tours & Travels`}
                        loading={
                          index === 0
                            ? "eager"
                            : "lazy"
                        }
                        decoding="async"
                      />

                      <div className="gallery-card__overlay" />

                      <div className="gallery-card__top">
                        <span>
                          {item.category}
                        </span>
                      </div>

                      <div className="gallery-card__bottom">

                        <div>
                          <small>
                            AAI BABA TOURS & TRAVELS
                          </small>

                          <h3>
                            {item.title}
                          </h3>
                        </div>

                        <div className="gallery-card__arrow">
                          <ArrowRight size={16} />
                        </div>

                      </div>

                    </div>

                  </article>
                ),
              )}

            </div>

            {/* NOTE */}

            <div className="gallery-note">

              <div className="gallery-note__icon">
                <Camera size={19} />
              </div>

              <div>
                <strong>
                  Our vehicle
                </strong>

                <p>
                  These photographs showcase our
                  Kia Carens used for local,
                  sightseeing and outstation travel.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="gallery-cta">

          <div className="container">

            <div className="gallery-cta__wrapper">

              <div>
                <span>
                  PLAN YOUR JOURNEY
                </span>

                <h2>
                  Your Next Trip
                  <strong> Starts Here.</strong>
                </h2>

                <p>
                  Tell us your destination and travel
                  requirements.
                </p>
              </div>

              <div className="gallery-cta__actions">

                <a
                  href="tel:9272060443"
                  className="gallery-cta__call"
                >
                  <Phone size={17} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918208661292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-cta__whatsapp"
                >
                  <MessageCircle size={17} />
                  WhatsApp Booking
                </a>

                <Link
                  to="/destinations"
                  className="gallery-cta__link"
                >
                  Explore Destinations
                  <ArrowRight size={15} />
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <div
            className="gallery-lightbox__content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div>
              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>
            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default Gallery;