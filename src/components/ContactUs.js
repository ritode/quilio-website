import "./ContactUs.css";
export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="content">
        <div className="header">
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
          <label for="name">Name *</label>
          <br />
          <input type="text" id="name" name="name" value="John" />
          <label for="email">Email *</label>
          <input type="text" id="email" name="email" value="John@xyz.com" />
        </div>
        <label for="phone">Phone</label>
        <input type="number" id="phone" name="phone" value="1234567890" />
        <label for="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          value="I want my duck sucked"
        />
        <div className="bottom">
          <input type="checkbox" id="terms" />
          <label for="terms">I agree with terms</label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
