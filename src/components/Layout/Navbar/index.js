import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Navbar.module.scss'
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; // optional
import { faHome,faCircleUser, faGear,faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
const cx = classNames.bind(styles)

function Navbar() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('top-navbar')}>
                <div className={cx('my-name')}>
                        <h3>D</h3>
                </div>
                <ul className="navbar-items">
                    <Tippy className={cx('item-hover')} content='Home' placement="right">
                        <li>
                            <Link className={cx('icon-item')} to="/"><FontAwesomeIcon icon={faHome}/></Link>
                        </li>
                    </Tippy>
                   <Tippy className={cx('item-hover')} content='About' placement="right">
                        <li>
                            <Link className={cx('icon-item')} to="/about"><FontAwesomeIcon icon={faCircleUser} /></Link>
                        </li>
                   </Tippy>
                    <Tippy className={cx('item-hover')} content='Resume' placement="right">
                        <li>
                            <Link className={cx('icon-item')} to="/resume"><FontAwesomeIcon icon={faGear} /></Link>
                        </li>
                    </Tippy>
                    <Tippy className={cx('item-hover')} content='Contact' placement="right">
                        <li>
                            <Link className={cx('icon-item')} to="/contact"><FontAwesomeIcon icon={faAddressCard} /></Link>
                        </li>
                    </Tippy>
                </ul>
            </div>
            <div className={cx('navbar-social')}>
                <ul className={cx('social-item')}>
                    <li className={cx('social-item')}>
                        <a className={cx('icon-item')} target='_blank' rel="noreferrer noopener" href="https://www.facebook.com/datkoi02/"><FontAwesomeIcon icon={faFacebook}/></a>
                    </li>
                    <li className={cx('social-item')}>
                        <a className={cx('icon-item')} target='_blank' rel="noreferrer noopener" href="https://www.linkedin.com/in/l%C3%AA-ti%E1%BA%BFn-%C4%91%E1%BA%A1t-588457221/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </li>
                    <li className={cx('social-item')}>
                        <a className={cx('icon-item')} target='_blank' rel="noreferrer noopener" href="https://twitter.com/Alan080102"><FontAwesomeIcon icon={faTwitterSquare}/></a>
                    </li>
                    <li className={cx('social-item')}>
                        <a className={cx('icon-item')} target='_blank' rel="noreferrer noopener" href="https://github.com/LeTienDat02"><FontAwesomeIcon icon={faGithub}/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;