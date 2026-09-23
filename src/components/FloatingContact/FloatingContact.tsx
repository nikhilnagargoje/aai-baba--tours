import { useState } from "react";
import {
  MapPin,
  MessageCircle,
  Phone,
  Plus,
} from "lucide-react";

import "./FloatingContact.css";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div
      className={`floating-contact ${
        open ? "floating-contact--open" : ""
      }`}
    >
      {/* =====================================================
          ACTION BUBBLES
      ===================================================== */}

      <div className="floating-contact__actions">

        {/* Location */}
        <a
          href="https://share.google/9NqBdleqZw1DBKFd1"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact__action floating-contact__location"
          aria-label="Open business location"
          title="Location"
          onClick={closeMenu}
        >
          <MapPin size={20} />
          <span>Location</span>
        </a>


        {/* WhatsApp */}
        <a
          href="https://wa.me/918208661292"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact__action floating-contact__whatsapp"
          aria-label="WhatsApp booking"
          title="WhatsApp"
          onClick={closeMenu}
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>


        {/* Call */}
        <a
          href="tel:9272060443"
          className="floating-contact__action floating-contact__call"
          aria-label="Call Aai Baba Tours & Travels"
          title="Call"
          onClick={closeMenu}
        >
          <Phone size={20} />
          <span>Call</span>
        </a>

      </div>


      {/* =====================================================
          MAIN BUBBLE
      ===================================================== */}

      <button
        type="button"
        className="floating-contact__main"
        onClick={toggleMenu}
        aria-label={
          open
            ? "Close contact options"
            : "Open contact options"
        }
        aria-expanded={open}
      >
        <Plus size={25} />
      </button>

    </div>
  );
};

export default FloatingContact;