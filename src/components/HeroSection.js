import "./HeroSection.css";
export default function HeroSection({ onContactClick }) {
  const handleButtonClick = () => {
    onContactClick();
  };
  return (
    <div className="hero-section">
      {/* <img src={"/images/hero-bg-image.png"} className="bg-img"/> */}
      <div className="content">
        <h1>Re-Imagine DSP</h1>
        <p className="stylized">
          Experience music and neuroscience tools made for a more connected
          future
        </p>
      </div>
      <div className="buttons">
        <div className="primary-button" onClick={handleButtonClick}>
          Contact Us
        </div>
        <div className="secondary-button">Testimonials</div>
      </div>
    </div>
  );
}
