import "./Testimonial.scss";
import { TESTIMONIALS } from "../siteContent";
import { useRef, useState, useEffect } from "react";
export default function Testimonial({ scrollToTestimonial }) {
  const [activeTab, setActiveTab] = useState(0);
  const testimonialRef = useRef(null);
  function handleClick(i) {
    setActiveTab(i);
  }
  useEffect(() => {
    if (scrollToTestimonial && testimonialRef.current) {
      testimonialRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToTestimonial]);
  return (
    <div className="testimonials" ref={testimonialRef}>
      <h3>Trusted by</h3>
      <div className="tabs">
        {TESTIMONIALS.map((data, i) => (
          <div
            key={i}
            className={`tab ${activeTab === i ? "active" : ""}`}
            onClick={() => handleClick(i)}
          >
            <img src={data.title} alt="" />
          </div>
        ))}
      </div>
      <p className="content">"{TESTIMONIALS[activeTab].content}"</p>
      <div className="user">
        <img src={TESTIMONIALS[activeTab].user.image} alt="" />
        <p className="name">{TESTIMONIALS[activeTab].user.name}</p>
      </div>
    </div>
  );
}
