import "./ContactUs.css";
export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="content">
        <div className="head">
          <p className="heading">
            Looking forward to steal your cash you capitalists
          </p>
          <div className="line" />
        </div>
        <div className="text">
          <p className="content">
            Provide exceptional happy endings within 24hrs.
          </p>
          <p className="content">
            No wonder you wanna do business with some cool dudes with some sicc
            taste in music and art.
          </p>
        </div>
      </div>
      <form action="" className="form">
        <div className="top">
          <div className="input-container">
            <label className="p24" for="name">
              Name *
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value=""
              placeholder="John"
            />
          </div>
          <div className="input-container">
            <label className="p24" for="email">
              Email *
            </label>
            <input
              className="input"
              type="text"
              id="email"
              name="email"
              placeholder="John@xyz.com"
              value=""
            />
          </div>
        </div>
        <div className="phone input-container">
          <label className="p24" for="phone">
            Phone
          </label>
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            placeholder="1234567890"
            value=""
          />
        </div>
        <div className="message input-container">
          <label className="p24" for="message">
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="I want my duck sucked"
            value=""
            className="input"
          />
        </div>
        <div className="bottom">
          <div className="input-terms">
            <input type="checkbox" id="terms" className="input" />
            <label className="terms" for="terms">
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
  );
}
