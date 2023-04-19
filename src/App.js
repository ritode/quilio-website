import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import TechStack from "./components/TechStack";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <h2>What we are known for...</h2>
      <Services />
      <Testimonial />
      <TechStack />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
