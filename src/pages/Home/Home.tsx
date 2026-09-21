import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import CarShowcase from "../../components/CarShowcase/CarShowcase";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import BookingSteps from "../../components/BookingSteps/BookingSteps";
import BookingEnquiry from "../../components/BookingEnquiry/BookingEnquiry";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <ServicesPreview />
      <CarShowcase />
      <PopularDestinations />
      <WhyChooseUs />
      <BookingSteps />
      <BookingEnquiry />
      <Testimonials />
      <ContactCTA />
    </main>
  );
};

export default Home;