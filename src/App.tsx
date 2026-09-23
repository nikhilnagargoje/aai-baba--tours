import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FloatingContact from "./components/FloatingContact/FloatingContact";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Outstation from "./pages/Outstation/Outstation";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Destinations from "./pages/Destinations/Destinations";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      {/* Floating Location / WhatsApp / Call */}
      <FloatingContact />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* OUTSTATION */}
        <Route
          path="/outstation"
          element={<Outstation />}
        />

        {/* GALLERY */}
        <Route
          path="/gallery"
          element={<Gallery />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* DESTINATIONS */}
        <Route
          path="/destinations"
          element={<Destinations />}
        />

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* 404 - PAGE NOT FOUND */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;