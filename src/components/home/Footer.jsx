import {
  faCcAmazonPay,
  faCcAmex,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faFacebook,
  faGooglePay,
  faInstagram,
  faTwitter,
  faVimeoSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Home.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-docs">
        <Link className="doc-item" to="/">
          About Us
        </Link>
        <Link className="doc-item" to="/">
          Customer Service
        </Link>
        <Link className="doc-item" to="/">
          Delivery
        </Link>
        <Link className="doc-item" to="/">
          Terms & Conditions
        </Link>
      </div>
      <div className="footer-social">
        <Link className="social-item" to="/">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link className="social-item" to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link className="social-item" to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <div className="sep-item">|</div>
        <div className="pay-item">
          <FontAwesomeIcon icon={faGooglePay} />
        </div>
        <div className="pay-item">
          <FontAwesomeIcon icon={faCcVisa} />
        </div>
        <div className="pay-item">
          <FontAwesomeIcon icon={faCcPaypal} />
        </div>
        <div className="pay-item">
          <FontAwesomeIcon icon={faCcMastercard} />
        </div>
        <div className="pay-item">
          <FontAwesomeIcon icon={faCcApplePay} />
        </div>
        <div className="pay-item">
          <FontAwesomeIcon icon={faCcAmex} />
        </div>
        <div className="pay-item">
          <FontAwesomeIcon icon={faCcAmazonPay} />
        </div>
      </div>
      <div className="footer-copyright">
        <div className="copyright-item">
          <FontAwesomeIcon icon={faCopyright} /> 2022 NtshVrm, All right
          reserved.
        </div>
      </div>
    </footer>
  );
}
