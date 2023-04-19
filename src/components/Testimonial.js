import "./Testimonial.css";
import { TESTIMONIALS } from "../siteContent";
import { useState } from "react";
export default function Testimonial() {
  const [activeTab, setActiveTab] = useState(0);
  function handleClick(i) {
    setActiveTab(i);
  }
  return (
    <div className="testimonials">
      <h3>Trusted by</h3>
      <div className="tabs">
        {TESTIMONIALS.map((data, i) => (
          <div
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
