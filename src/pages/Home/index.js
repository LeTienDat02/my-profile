import classNames from "classnames/bind";
import styles from './Home.module.scss'
import images from '../../assets/images/home-backgound.jpg'

const cx = classNames.bind(styles)

function Home() {
    // let time = useRef()
    // const [job, setJob] = useState('Web Developer.')
    // time.current = () => {
    //     setInterval(() => {
    //         console.log('run')
    //         setJob((prev) => ((prev === 'Web Developer.') ? 'Data.' : 'Web Developer.'))
    //     },1000)
    // }
   
    // useEffect(() => {
    //     //time.current();
    //     //return () => clearInterval(time.current);
    // },[])
    // console.log('render')

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