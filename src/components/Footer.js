import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src="/images/logo.png" alt="" />
        <div className="menu-1">
          <p className="st3">Services</p>
          <p>Bug Tracker</p>
          <p>VST Development</p>
          <p>Beta Testing</p>
        </div>
        <div className="menu-2">
          <p className="st3">Company</p>
          <p>About</p>
          <p>contact Us</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Quilio Ltd. | Privacy | Terms | Sitemap </p>
      </div>
    </div>
  );
}
