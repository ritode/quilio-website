import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <img src="/images/logo.png" alt="" />
      <div className="buttons">
        <div>Services</div>
        <div>About Us</div>
      </div>
      <div className="primary-button">Contact Us</div>
    </div>
  );
}
