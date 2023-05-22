import "./HeroSection.css";
export default function HeroSection({ onContactClick, onTestimonialClick }) {
  // const handleContactButtonClick = () => {
  //   onContactClick();
  // };
  // const handleTestimonialButtonClick = () => {
  //   onTestimonialClick();
  // };
  return (
    <div className="hero-section">
      {/* <img src={"/images/hero-bg-image.png"} className="bg-img"/> */}
      <div className="content">
        <h1>Building for the future, today.</h1>
        <p className="stylized">
          Audio engineering solutions made by engineers, for artists
        </p>
      </div>
      {/* <div className="buttons">
        <div className="primary-button" onClick={handleContactButtonClick}>
          Contact Us
        </div>
        <div
          className="secondary-button"
          onClick={handleTestimonialButtonClick}
        >
          Testimonials
        </div>
      </div> */}
    </div>
  );
}
