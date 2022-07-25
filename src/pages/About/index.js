import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faStackOverflow,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCloudArrowDown,
  faChartLine,
  faHeadphonesSimple,
  faBook,
  faTrophy,
  faCode,
  faLightbulb,
  faPersonRunning,
  faChartArea,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";

import styles from "./About.module.scss";
import cv from "../../assets/profile/CV.pdf";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("about-content")}>

        {/* About me */}
      <div className={cx('about-content-title')}>
        <h1>ABOUT ME</h1>
      </div>
      <div className={cx("about-me")}>
        <p className={cx("about-me-content")}>
          <strong>Hello, I'm A Dat </strong>
          <span>
            Web-Developer Based On Da Nang. I Have Rich Experience In Web Site
            Design And Building And Customization. Also I Am Good At
          </span>
          <strong> Html, Css, JavaScript, Python, ReactJS</strong>
        </p>
        <div className={cx("about-me-items")}>
          <div className={cx("download")}>
            <a className={cx("download-cv")} href={cv} download="CV">
              <span>
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </span>{" "}
              Download CV
            </a>
          </div>
          <div className={cx("about-me-icon")}>
            <a
              className={cx("icon-item")}
              target="_blank"
              rel="noopener noreferrer"
              href="https://stackoverflow.com/users/19547933/ti%e1%ba%bfn-%c4%90%e1%ba%a1t-l%c3%aa"
            >
              <FontAwesomeIcon className={cx("icon")} icon={faStackOverflow} />
            </a>
          </div>
          <div className={cx("about-me-icon")}>
            <a
              className={cx("icon-item")}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LeTienDat02"
            >
              <FontAwesomeIcon className={cx("icon")} icon={faGithub} />
            </a>
          </div>
        </div>
      </div>

        {/* Our Services */}
      <div className={cx("our-services")}>
        <p className={cx("about-title")}>
          <strong>
            Our <span>Services</span>
          </strong>
        </p>
        <div className={cx("our-services-items")}>
          <div className={cx("our-services-item")}>
            <div className={cx("our-services-crad")}>
              <div className={cx("card-icon")}>
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div className={cx("card-name")}>
                <strong>Web Development</strong>
              </div>
              <p className={cx("card-content")}>
                Modern And Mobile-Ready Website That Will Help Of Your
                Marketing.
              </p>
            </div>
          </div>
          <div className={cx("our-services-item")}>
            <div className={cx("our-services-crad")}>
              <div className={cx("card-icon")}>
                <div className={cx("card-icon")}>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className={cx("card-name")}>
                  <strong>Data Analytics</strong>
                </div>
                <p className={cx("card-content")}>
                  Basic, Advanced, Custom Implementations And Online Media
                  Analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Fun Facts */}
      <div className={cx("fun-fact")}>
        <p className={cx("about-title")}>
          <strong>
            Fun <span>Facts</span>
          </strong>
        </p>
        <div className={cx("fun-fact-items")}>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faHeadphonesSimple} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>50 Albumes Listened</strong>
                </div>
            </div>
          </div>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faTrophy} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>2 Awards <br/> Won</strong>
                </div>
            </div>
          </div>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faCode} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>50 000 Lines Of Code</strong>
                </div>
            </div>
          </div>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faLightbulb} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>2 Projects Completed</strong>
                </div>
            </div>
          </div>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faChartArea} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>1+ Year Investment</strong>
                </div>
            </div>
          </div>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faBook} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>10+ Books <br/> Readed</strong>
                </div>
            </div>
          </div>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faFutbol} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>Love <br/> Sports</strong>
                </div>
            </div>
          </div>
          <div className={cx("fun-fact-item")}>
            <div className={cx('fun-fact-card')}>
                <i><FontAwesomeIcon icon={faPersonRunning} /></i>
                <div className={cx('funt-fact-content')}>
                    <strong>1000 Km <br/>Joged</strong>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
