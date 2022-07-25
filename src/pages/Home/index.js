import classNames from "classnames/bind";
import styles from './Home.module.scss'
import images from '../../assets/images/home-backgound.jpg'

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className={cx('home-content')}>
            <img className={cx('img-backgound')} src={images} alt='home backgound' />
            <div className={cx('my-name')}>
                <h4><span>Dat </span>Tien Le</h4>
                <p><span>I Am A </span>Web Developer.</p>
            </div>
        </div>
    );
}

export default Home;