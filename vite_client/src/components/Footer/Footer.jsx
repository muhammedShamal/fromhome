import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer df fd-c">
      <div className="df ai-c jc-sb">
        <h1>fromHome</h1>
      </div>
      <div className="footer-container df jc-sb aic">
        <div className="about df fd-c">
          <p>ABOUT FROMHOME</p>
          <span>Our blog</span>
          <span>Career</span>
          <span>Inverstor Relations</span>
          <span>Report Fraud</span>
        </div>
        <div className="contact df fd-c">
          <p>CONTACT</p>
          <span>Help and Support</span>
          <span>Partner with us</span>
        </div>
        <div className="leagal df fd-c">
          <p>LEGAL</p>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Security</span>
          <span>Refund and Cancellations</span>
        </div>
        <div className="social-links df fd-c">
          <p>SOCIAL LINKS</p>
          <div className="df">
            <AiOutlineInstagram className="social-icons" />
            <AiOutlineFacebook className="social-icons" />
            <AiOutlineTwitter className="social-icons" />
            <AiOutlineLinkedin className="social-icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
