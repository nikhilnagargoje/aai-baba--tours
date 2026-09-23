import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

import "./Navbar.css";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Outstation",
    path: "/outstation",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Destinations",
    path: "/destinations",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /*
       * Keep navbar visible while mobile menu is open.
       */
      if (menuOpen) {
        setShowNavbar(true);
        lastScrollY = currentScrollY;
        return;
      }

      /*
       * Always show navbar near the top.
       */
      if (currentScrollY <= 20) {
        setShowNavbar(true);
      }

      /*
       * Hide while scrolling down.
       */
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      /*
       * Show while scrolling up.
       */
      else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(
      (previous) => !previous,
    );

    setShowNavbar(true);
  };

  return (
    <header
      className={`navbar ${
        showNavbar
          ? "navbar--visible"
          : "navbar--hidden"
      }`}
    >
      <div className="navbar__container">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <NavLink
          to="/"
          end
          className="navbar__logo"
          onClick={closeMenu}
          aria-label="Aai Baba Tours & Travels Home"
        >
          <span className="navbar__logo-main">
            आई बाबा
          </span>

          <span className="navbar__logo-sub">
            Tours & Travels
          </span>
        </NavLink>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav
          className="navbar__links"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>


        {/* =====================================================
            DESKTOP ACTIONS
        ===================================================== */}

        <div className="navbar__actions">

          <a
            href="tel:9272060443"
            className="navbar__call"
            aria-label="Call Aai Baba Tours & Travels"
          >
            <Phone size={16} />

            <span>
              Call Now
            </span>
          </a>

          <a
            href="https://wa.me/918208661292"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__whatsapp"
            aria-label="WhatsApp Aai Baba Tours & Travels"
          >
            <MessageCircle size={16} />

            <span>
              WhatsApp
            </span>
          </a>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          className="navbar__menu-btn"
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        id="mobile-navigation"
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu--open"
            : ""
        }`}
      >

        <nav
          className="mobile-menu__links"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>


        {/* MOBILE ACTIONS */}

        <div className="mobile-menu__actions">

          <a
            href="tel:9272060443"
            onClick={closeMenu}
          >
            <Phone size={18} />

            <span>
              Call Now
            </span>
          </a>

          <a
            href="https://wa.me/918208661292"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={18} />

            <span>
              WhatsApp Booking
            </span>
          </a>

        </div>

      </div>

    </header>
  );
};

export default Navbar;