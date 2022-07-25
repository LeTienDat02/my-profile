import classNames from "classnames/bind";
import styles from "./Resume.module.scss";

const cx = classNames.bind(styles);

function Resume() {
  return (
    <div className={cx("resume")}>
      <div className={cx("resume-title")}>
        <h1>RESUME</h1>
      </div>

      <div className={cx("my-resumes")}>
        <div className={cx("my-resume")}>
          <div className={cx("my-resume-title")}>
            <strong>
              <span>My</span> Experience
            </strong>
          </div>
          <div className={cx("my-resume-item")}>
            <strong className={cx("title")}>Front-End Developer</strong>
            <div className={cx("time")}>
              2022-Present
              <span>|</span>
              Da Nang
            </div>
            <p>
              Build Basic Website Interfaces With ReactJS And Data Analytics
            </p>
          </div>
        </div>
        <div className={cx("my-resume")}>
          <div className={cx("my-resume-title")}>
            <strong>
              <span>My</span> Education
            </strong>
          </div>
          <div className={cx("my-resume-item")}>
            <strong className={cx("title")}>Duy Tan University</strong>
            <div className={cx("time")}>
              2020-Present
              <span>|</span>
              Da Nang
            </div>
            <p>
              Bachelor's Degree In Computer Science Technical Institute, Duy Tan
              University
            </p>
          </div>
        </div>
      </div>

      <div className={cx("my-skills")}>
        <div className={cx("my-skill")}>
          <div className={cx("title-skill")}>
            <strong>
              <span>Personal</span> Skills
            </strong>
          </div>
          <ul className={cx("skills")}>
            <li className={cx("skill")}>
              <div className={cx("title")}>
                <strong>Team Work</strong>{" "}
              </div>
              <div className={cx("percent")} style={{ width: "90%" }}></div>
            </li>
            <li className={cx("skill")}>
              <div className={cx("title")}>
                <strong>Leadership</strong>{" "}
              </div>
              <div className={cx("percent")} style={{ width: "85%" }}></div>
            </li>
            <li className={cx("skill")}>
              <div className={cx("title")}>
                <strong>Language</strong>{" "}
              </div>
              <div className={cx("percent")} style={{ width: "70%" }}></div>
            </li>
          </ul>
        </div>
        <div className={cx("my-skill")}>
          <div className={cx("title-skill")}>
            <strong>
              <span>Professional</span> Skills
            </strong>
          </div>
          <ul className={cx("skills")}>
            <li className={cx("skill")}>
              <div className={cx("title")}>
                <strong>Html/Css/Js</strong>{" "}
              </div>
              <div className={cx("percent")} style={{ width: "90%" }}></div>
            </li>
            <li className={cx("skill")}>
              <div className={cx("title")}>
                <strong>Python</strong>{" "}
              </div>
              <div className={cx("percent")} style={{ width: "75%" }}></div>
            </li>
            <li className={cx("skill")}>
              <div className={cx("title")}>
                <strong>ReactJS</strong>{" "}
              </div>
              <div className={cx("percent")} style={{ width: "80%" }}></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
