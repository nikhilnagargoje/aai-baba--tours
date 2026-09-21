import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="container">

        <div className="not-found__content">

          <span className="not-found__number">
            404
          </span>

          <div className="not-found__line">
            <span />
            PAGE NOT FOUND
            <span />
          </div>

          <h1>
            Looks Like You
            <span>Took A Wrong Turn.</span>
          </h1>

          <p>
            The page you are looking for does not exist
            or may have been moved. Let us get you back
            on the right journey.
          </p>

          <div className="not-found__actions">

            <Link
              to="/"
              className="not-found__primary"
            >
              <Home size={17} />
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="not-found__secondary"
            >
              <MessageCircle size={17} />
              Contact Us
            </Link>

          </div>

          <Link
            to="/"
            className="not-found__back"
          >
            <ArrowLeft size={15} />
            Return to Aai Baba Tours & Travels
          </Link>

        </div>

      </div>

      <div className="not-found__route">
        <span className="not-found__route-dot" />
        <span className="not-found__route-line" />
        <span className="not-found__route-dot" />
        <span className="not-found__route-line" />
        <span className="not-found__route-dot" />
      </div>

    </main>
  );
};

export default NotFound;