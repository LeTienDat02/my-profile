import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navbar.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import {
  faHome,
  faCircleUser,
  faGear,
  faAddressCard,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

function Navbar() {
  const [state, setState] = useState("home");
  const check = (key) => (state === key ? true : false);

  const [openNavbar, setOpenNavbar] = useState(true);
  const handleNavbar = () => {
    openNavbar === true ? setOpenNavbar(false) : setOpenNavbar(true);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("my-name")}>
        <h3>D</h3>
      </div>
      <div
        className={cx("top-navbar")}
        style={{ display: openNavbar ? "flex" : "none" }}
      >
        <ul className={cx("navbar-items")}>
          <Tippy className={cx("item-hover")} style={{hideOnClick:true}} content="Home" placement="right">
            <li
              className={cx({ check: check("home") })}
              onClick={() => setState("home")}
            >
              <Link className={cx("icon-item")} to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
          </Tippy>
          <Tippy className={cx("item-hover")} style={{hideOnClick:true}} content="About" placement="right">
            <li
              className={cx({ check: check("about") })}
              onClick={() => setState("about")}
            >
              <Link className={cx("icon-item")} to="/about">
                <FontAwesomeIcon icon={faCircleUser} />
              </Link>
            </li>
          </Tippy>
          <Tippy
            className={cx("item-hover")}
            content="Resume"
            placement="right"
            style={{hideOnClick:true}}
          >
            <li
              className={cx({ check: check("resume") })}
              onClick={() => setState("resume")}
            >
              <Link className={cx("icon-item")} to="/resume">
                <FontAwesomeIcon icon={faGear} />
              </Link>
            </li>
          </Tippy>
          <Tippy
            className={cx("item-hover")}
            content="Contact"
            placement="right"
            style={{hideOnClick:true}}
          >
            <li
              className={cx({ check: check("contact") })}
              onClick={() => setState("contact")}
            >
              <Link className={cx("icon-item")} to="/contact">
                <FontAwesomeIcon icon={faAddressCard} />
              </Link>
            </li>
          </Tippy>
        </ul>
      </div>
      <div className={cx("navbar-social")}>
        <ul className={cx("social-item")}>
          <li className={cx("social-item")}>
            <a
              className={cx("icon-item")}
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/datkoi02/"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className={cx("social-item")}>
            <a
              className={cx("icon-item")}
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/l%C3%AA-ti%E1%BA%BFn-%C4%91%E1%BA%A1t-588457221/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className={cx("social-item")}>
            <a
              className={cx("icon-item")}
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/Alan080102"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </li>
          <li className={cx("social-item")}>
            <a
              className={cx("icon-item")}
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/LeTienDat02"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <div className={cx("close")} onClick={handleNavbar}>
            <FontAwesomeIcon
              className={cx("btn-open")}
              style={{ display: openNavbar ? "none" : "block" }}
              icon={faBars}
            />
            <FontAwesomeIcon
              className={cx("btn-close")}
              style={{ display: openNavbar ? "block" : "none" }}
              icon={faXmark}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
