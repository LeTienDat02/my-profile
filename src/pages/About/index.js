import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

import styles from './About.module.scss';
import cv from '../../assets/pdf/CV.pdf'

const cx = classNames.bind(styles);

function About() {
    return ( 
        <div className={cx('about-content')}>
            <div className={cx('about-me')}>
                <h1>ABOUT ME</h1>
                <p className={cx('about-me-content')}><strong>Hello, I'm A Dat </strong><span>Web-Developer Based On Da Nang. I Have Rich Experience In Web Site Design And Building And Customization. Also I Am Good At</span><strong> Html, Css, JavaScript, Python, ReactJS</strong></p>
                <div className={cx('about-me-items')}>
                    <div className={cx('download')}>
                        <a class={cx('download-cv')} href={cv} download="CV"><span><FontAwesomeIcon icon={faCloudArrowDown} /></span> Download CV</a>
                    </div>
                    <div className={cx('about-me-icon')}>
                        <a className={cx('icon-item')} target='_blank' rel="noopener noreferrer"  href="https://stackoverflow.com/users/19547933/ti%e1%ba%bfn-%c4%90%e1%ba%a1t-l%c3%aa"><FontAwesomeIcon className={cx('icon')}icon={faStackOverflow}/></a>
                    </div>
                    <div className={cx('about-me-icon')}>
                        <a className={cx('icon-item')} target='_blank' rel="noopener noreferrer"  href="https://github.com/LeTienDat02"><FontAwesomeIcon className={cx('icon')}icon={faGithub}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;