import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("contact")}>
      <div className={cx("contact-title")}>
        <h1>CONTACTS</h1>
      </div>
      <div className={cx("get-in-touch-title")}>
        <strong>
          <span>Get</span> In Touch
        </strong>
      </div>
      <div className={cx("get-in-touch")}>
        <div className={cx("items")}>
          <div className={cx("card-item")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className={cx("content")}>
              <strong>Address</strong>
              <p>Thanh Khe, Da Nang</p>
            </div>
          </div>
        </div>
        <div className={cx("items")}>
          <div className={cx("card-item")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className={cx("content")}>
              <strong>Email</strong>
              <p>letiendat8102@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={cx("items")}>
          <div className={cx("card-item")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className={cx("content")}>
              <strong>Phone</strong>
              <p>+84398317237</p>
            </div>
          </div>
        </div>
        <div className={cx("items")}>
          <div className={cx("card-item")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faSquareCheck} />
            </div>
            <div className={cx("content")}>
              <strong>Freelence</strong>
              <p>Available</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("map")}></div>
    </div>
  );
}

export default Contact;
