import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-banner">
      <div className="footer">
        <div className="footer-content">
          <img src="./images/logo.png" alt="" />
          <div className="menu">
            <p className="st3">Services</p>
            <p className="p20">Bug Tracker</p>
            <p className="p20">VST Development</p>
            <p className="p20">Beta Testing</p>
          </div>
          <div className="menu">
            <p className="st3">Company</p>
            <p className="p20">About</p>
            <p className="p20">contact Us</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Quilio Ltd. | Privacy | Terms | Sitemap </p>
          <div className="socials">
            <img src="./images/linkedin-logo.png" alt="" />
            <img src="./images/linkedin-logo.png" alt="" />
            <img src="./images/linkedin-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
