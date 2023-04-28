import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import TechStack from "./components/TechStack";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [scrollToContact, setScrollToContact] = useState(false);
  const [scrollToTestimonial, setScrollToTestimonial] = useState(false);

  const handleContactClick = () => {
    setScrollToContact(true);
  };
  const handleTestimonialClick = () => {
    setScrollToTestimonial(true);
  };
  return (
    <div className="App">
      <Header onContactClick={handleContactClick} />
      <HeroSection
        onContactClick={handleContactClick}
        onTestimonialClick={handleTestimonialClick}
      />
      <h2>What we are known for...</h2>
      <Services />
      <Testimonial scrollToTestimonial={scrollToTestimonial} />
      <TechStack />
      <ContactUs scrollToContact={scrollToContact} />
      <Footer />
    </div>
  );
}

export default App;
