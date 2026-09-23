import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import CarShowcase from "../../components/CarShowcase/CarShowcase";
import BookingSteps from "../../components/BookingSteps/BookingSteps";
import BookingEnquiry from "../../components/BookingEnquiry/BookingEnquiry";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const Home = () => {
  return (
    <main>
      {/* 1. First Impression */}
      <Hero />

      {/* 2. Who We Are */}
      <About />

      {/* 3. What We Offer */}
      <ServicesPreview />

      {/* 4. Where We Can Take You */}
      <PopularDestinations />

      {/* 5. Why Travel With Us */}
      <WhyChooseUs />

      {/* 6. Vehicle & Gallery Entry */}
      <CarShowcase />

      {/* 7. Simple Booking Process */}
      <BookingSteps />

      {/* 8. Main Booking / Lead Section */}
      <BookingEnquiry />

      {/* 9. Customer Trust */}
      <Testimonials />

      {/* 10. Frequently Asked Questions */}
      <FAQ />

      {/* 11. Final Contact / Conversion */}
      <ContactCTA />
    </main>
  );
};

export default Home;