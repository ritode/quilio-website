import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src="/images/logo.png" alt="" />
        <div className="menu">
          <p className="st3">Services</p>
          <p>Bug Tracker</p>
          <p>VST Development</p>
          <p>Beta Testing</p>
        </div>
        <div className="menu">
          <p className="st3">Company</p>
          <p>About</p>
          <p>contact Us</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Quilio Ltd. | Privacy | Terms | Sitemap </p>
        <div className="socials">
          <img src="/images/linkedin-logo.png" alt="" />
          <img src="/images/linkedin-logo.png" alt="" />
          <img src="/images/linkedin-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}
