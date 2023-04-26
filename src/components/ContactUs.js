import { useState, useEffect, useRef } from "react";
import "./ContactUs.css";
export default function ContactUs({ scrollToContact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });
  const contactRef = useRef(null);

  useEffect(() => {
    if (scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToContact]);
  return (
    <div className="contact-us-banner" ref={contactRef}>
      <div className="contact-us">
        <div className="content">
          <div className="head">
            <p className="heading">
              Looking forward to steal your cash you capitalists
            </p>
            <div className="line" />
          </div>
          <div className="text">
            <p className="p24">
              Provide exceptional happy endings within 24hrs.
            </p>
            <p className="p24">
              No wonder you wanna do business with some cool dudes with some
              sicc taste in music and art.
            </p>
          </div>
        </div>
        <form action="" className="form">
          <div className="top">
            <div className="input-container sm">
              <label className="p24" for="name">
                Name *
              </label>
              <input
                className="input p20"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="John"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="input-container sm">
              <label className="p24" for="email">
                Email *
              </label>
              <input
                className="input p20"
                type="text"
                id="email"
                name="email"
                placeholder="John@xyz.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="phone input-container">
            <label className="p24" for="phone">
              Phone
            </label>
            <input
              className="input p20"
              type="number"
              id="phone"
              name="phone"
              placeholder="1234567890"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="message input-container">
            <label className="p24" for="message">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="I want my duck sucked"
              value={formData.message}
              className="input p20"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <div className="bottom">
            <div className="input-terms">
              <input
                type="checkbox"
                id="terms"
                className="input"
                onChange={(e) =>
                  setFormData({ ...formData, terms: e.target.value })
                }
              />
              <label className="p16" for="terms">
                I agree with <a href="">terms</a>
              </label>
            </div>
            <input
              className="primary-button"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
